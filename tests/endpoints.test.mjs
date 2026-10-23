import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import endpoints from "../data/endpoint-policies.js";
import identity from "../data/policies.js";
import { endpointGroup } from "../scripts/sync-endpoint-policies.mjs";
import { scenarios, groupPolicies, scenarioPolicies } from "../mappings.mjs";

const policies = [...identity.policies, ...endpoints.policies];
const scenario = (id) => scenarios.find((item) => item.id === id);

test("endpoint inventory links to real pinned templates from all three repositories", () => {
  assert.equal(endpoints.sources.length, 3);
  assert.ok(endpoints.policies.length >= 40);
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

test("ransomware has AV on all three platforms and available Windows firewall policies", () => {
  const selected = scenarioPolicies(policies, scenario("ransomware"));
  for (const platform of ["Windows", "Windows Server", "Linux"]) {
    assert.ok(selected.some((policy) => policy.platform === platform && policy.group === "endpoint-av"));
  }
  for (const platform of ["Windows", "Windows Server"]) {
    assert.ok(selected.some((policy) => policy.platform === platform && policy.group === "endpoint-firewall"));
  }
  assert.ok(!selected.some((policy) => policy.platform === "Linux" && policy.group === "endpoint-firewall"));
  assert.match(scenario("ransomware").limitation, /no host firewall template/);
  assert.ok(selected.every((policy) => policy.platform));
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
