import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import endpoints from "../data/endpoint-policies.js";
import identity from "../data/policies.js";
import { endpointGroup, endpointEvidence, includeEndpoint } from "../scripts/sync-endpoint-policies.mjs";
import { scenarios, groupPolicies, scenarioPolicies, categorizePolicies, policyLabel } from "../mappings.mjs";

const policies = [...identity.policies, ...endpoints.policies];
const scenario = (id) => scenarios.find((item) => item.id === id);

test("endpoint inventory links to real pinned templates from all six OS repositories", () => {
  assert.equal(endpoints.sources.length, 6);
  assert.ok(endpoints.policies.length >= 100);
  assert.equal(new Set(endpoints.policies.map((policy) => policy.key)).size, endpoints.policies.length);
  for (const policy of endpoints.policies) {
    const source = endpoints.sources.find((item) => item.platform === policy.platform);
    assert.match(source.revision, /^[a-f0-9]{40}$/);
    assert.ok(policy.url.startsWith(`https://github.com/${source.repository}/blob/${source.revision}/`));
    assert.ok(policy.definitionIds.length);
    assert.equal(endpointGroup(policy.definitionIds, policy.name), policy.group);
    assert.ok(policy.settingCount > 0);
  }
});

test("token theft includes only Windows endpoint controls alongside identity controls", () => {
  const selected = scenarioPolicies(policies, scenario("token-theft"));
  const endpoint = selected.filter((policy) => policy.platform);
  assert.ok(endpoint.length);
  assert.ok(endpoint.every((policy) => policy.platform === "Windows"));
  assert.ok(endpoint.some((policy) => /LAPS/i.test(policy.name)));
  assert.ok(endpoint.some((policy) => /EPM/i.test(policy.name)));
  for (const group of ["endpoint-av", "endpoint-firewall", "endpoint-defender"]) {
    assert.ok(endpoint.some((policy) => policy.group === group));
  }
  assert.ok(!endpoint.some((policy) => policy.group === "endpoint-edge"));
});

test("ransomware includes every imported AV, firewall, and Defender policy across all OSes", () => {
  const selected = scenarioPolicies(policies, scenario("ransomware"));
  assert.deepEqual(selected, endpoints.policies.filter((policy) =>
    ["endpoint-av", "endpoint-firewall", "endpoint-defender"].includes(policy.group)));
  for (const platform of ["Windows", "Windows Server", "macOS", "Linux"]) {
    assert.ok(selected.some((policy) => policy.platform === platform && policy.group === "endpoint-av"));
  }
  for (const platform of ["Windows", "Windows Server", "macOS"]) {
    assert.ok(selected.some((policy) => policy.platform === platform && policy.group === "endpoint-firewall"));
  }
  assert.ok(!selected.some((policy) => policy.platform === "Linux" && policy.group === "endpoint-firewall"));
  assert.match(scenario("ransomware").limitation, /no host firewall template/);
  assert.ok(selected.every((policy) => policy.platform));
  for (const platform of ["macOS", "Android", "iOS / iPadOS"]) {
    assert.ok(selected.some((policy) => policy.platform === platform && policy.group === "endpoint-defender"));
  }
  assert.match(scenario("ransomware").limitation, /Mobile Defender setup and device-risk policies are supporting controls/);
});

test("macOS includes antivirus, firewall, Defender app and all deployment prerequisites in BP and E5", () => {
  const mac = endpoints.policies.filter((policy) => policy.platform === "macOS");
  for (const pkg of ["BP", "E5"]) {
    const variants = mac.filter((policy) => policy.package === pkg);
    assert.equal(variants.length, 11);
    assert.ok(variants.some((policy) => policy.group === "endpoint-av"));
    assert.ok(variants.some((policy) => policy.group === "endpoint-firewall"));
    for (const name of ["Microsoft Defender for Endpoint", "Accessibility", "Auto Onboarding", "Background Services",
      "Full Disk Access", "Network Filter", "Notifications", "MDE Settings", "System Extensions"]) {
      const policy = variants.find((item) => item.name.includes(name));
      assert.ok(policy, name);
      assert.equal(policy.group, "endpoint-defender", name);
      assert.ok(!/surface reduction/i.test(policyLabel(policy, policy.group)));
    }
  }
});

test("Windows includes Defender AV update profiles, network protection, and device-risk policies", () => {
  const windows = endpoints.policies.filter((policy) => policy.platform === "Windows");
  for (const name of [/updates/i, /ring 1/i, /network protection/i, /Defender Compliance/i]) {
    const selected = windows.filter((policy) => name.test(policy.name));
    assert.ok(selected.length, String(name));
    assert.ok(selected.every((policy) => !/Attack surface reduction/i.test(policyLabel(policy, policy.group))));
  }
});

test("CA and OS categories partition results without mixing sign-in and endpoint policies", () => {
  for (const attack of scenarios) {
    const categories = categorizePolicies(policies, attack);
    const actual = categories.flatMap((category) => category.groups.flatMap((group) => group.policies.flat()));
    assert.deepEqual(actual.map((policy) => policy.key).sort(),
      scenarioPolicies(policies, attack).map((policy) => policy.key).sort());
    for (const category of categories) {
      assert.ok(category.groups.every((group) => group.policies.length));
      assert.ok(category.groups.flatMap((group) => group.policies.flat())
        .every((policy) => (policy.platform ?? "ca") === category.id));
    }
  }
  assert.deepEqual(categorizePolicies(policies, scenario("aitm")).map((item) => item.title), ["Conditional Access (CA)"]);
  assert.deepEqual(categorizePolicies(policies, scenario("token-theft")).map((item) => item.id), ["ca", "Windows"]);
  assert.deepEqual(categorizePolicies(policies, scenario("ransomware")).map((item) => item.id),
    ["Windows", "Windows Server", "macOS", "Linux", "Android", "iOS / iPadOS"]);
});

test("custom and mobile profiles retain evidence identifiers without copying payloads or secrets", () => {
  const payload = Buffer.from("<plist><string>com.microsoft.wdav.atp</string><string>secret-org-value</string></plist>").toString("base64");
  assert.deepEqual(endpointEvidence({ payload }), ["com.microsoft.wdav.atp"]);
  assert.deepEqual(endpointEvidence({ settings: [{ appConfigKey: "DefenderNetworkProtectionEnable", appConfigKeyValue: "true" }] }),
    ["DefenderNetworkProtectionEnable"]);
  assert.deepEqual(endpointEvidence({ defenderNetworkProtectionType: "enable" }), ["defenderNetworkProtectionType"]);
  assert.deepEqual(endpointEvidence({ advancedThreatProtectionRequiredSecurityLevel: "low" }), ["advancedThreatProtectionRequiredSecurityLevel"]);
  assert.deepEqual(endpointEvidence({ advancedThreatProtectionRequiredSecurityLevel: "notSet" }), []);
  assert.ok(endpoints.policies.every((policy) => !("payload" in policy) && !("payloadJson" in policy)));
});

test("imports exclude offboarding and select AV updates and supported custom profiles", () => {
  for (const platform of ["Windows", "macOS", "Android", "iOS / iPadOS"]) {
    assert.equal(includeEndpoint("DeviceConfiguration/MDE Offboarding.json", platform), false);
  }
  assert.equal(includeEndpoint("Windows/BP/SettingsCatalog/Antivirus updates ring 1.json", "Windows"), true);
  assert.equal(includeEndpoint("Windows/BP/DeviceConfiguration/Turn network protection ON.json", "Windows"), true);
  assert.equal(includeEndpoint("ALSO_MACOS_BP/ALSO_MACOS_MDE_AUTO_ONBOARDING/Applications/Defender.json", "macOS"), true);
  assert.equal(includeEndpoint("ALSO_MACOS_BP/SettingsCatalog/FileVault.json", "macOS"), false);
});

test("ClickFix includes Windows privilege, AV, firewall, Defender, and Edge templates", () => {
  const selected = scenarioPolicies(policies, scenario("clickfix"));
  assert.ok(selected.every((policy) => policy.platform === "Windows"));
  assert.deepEqual([...new Set(selected.map((policy) => policy.group))].sort(),
    ["endpoint-av", "endpoint-defender", "endpoint-edge", "endpoint-firewall", "endpoint-privilege"]);
  assert.deepEqual(scenario("clickfix").techniques, ["T1204.004", "T1059.001"]);
  const browser = selected.filter((policy) => policy.group === "endpoint-edge");
  assert.ok(browser.some((policy) => policy.definitionIds.some((id) => /smartscreen|downloadrestrictions/i.test(id))));
});

test("audit-only ASR policies remain marked and package variants are grouped", () => {
  assert.ok(endpoints.policies.some((policy) => policy.platform === "Windows Server" && policy.auditOnly));
  const groups = groupPolicies(policies, scenario("clickfix"));
  const privilege = groups.find((group) => group.id === "endpoint-privilege");
  assert.equal(privilege.policies.length, 3);
  assert.ok(privilege.policies.every((variants) => variants.length === 3));
});

test("endpoint license files remain included without adding footer links", async () => {
  for (const source of endpoints.sources) {
    const license = await readFile(new URL(`../data/endpoint-licenses/${source.repository.split("/")[1]}.txt`, import.meta.url), "utf8");
    assert.match(license, /Apache License/);
  }
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(!html.includes('class="brand-copy">Security templates'));
  assert.ok(html.includes('class="brand-logo"'));
});
