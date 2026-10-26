import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import templateData from "../data/templates.js";
import { scenarios } from "../mappings.mjs";
import { layersForScenario, tiersForScenario, scenarioFolders, templateUrl, scenarioFolderUrl, templateStrength, preventionGuidePages, preventionGuideUrl } from "../templates.mjs";
import { collectTemplates, endpointPlatform } from "../scripts/sync-templates.mjs";

test("generated template data matches the templates folder", async () => {
  assert.deepEqual(templateData.templates, await collectTemplates());
});

test("every scenario maps to a folder with templates", () => {
  for (const scenario of scenarios) {
    assert.ok(scenarioFolders[scenario.id], scenario.id);
    const count = layersForScenario(templateData.templates, scenario.id).flatMap((l) => l.sections).length;
    assert.ok(count > 0, scenario.id);
  }
});

test("every scenario links to the matching PDF prevention advisory", () => {
  assert.deepEqual(preventionGuidePages, {
    aitm: 1, "token-theft": 1, "password-attacks": 2, "device-code": 3,
    cryptojacking: 5, llmjacking: 5, infostealers: 6, clickfix: 6, ransomware: 7
  });
  for (const scenario of scenarios) {
    assert.equal(preventionGuideUrl(scenario.id),
      `./assets/ALSO_Microsoft_Security_Attack_Prevention_Quick_Tips.pdf#page=${preventionGuidePages[scenario.id]}`);
  }
});

test("Strong policies always precede Supporting, with CA before endpoints within each tier", () => {
  for (const scenario of scenarios) {
    const tiers = tiersForScenario(templateData.templates, scenario.id);
    assert.equal(tiers[0].id, "strong", scenario.id);
    assert.deepEqual(tiers.map((tier) => tier.id), tiers.length === 1 ? ["strong"] : ["strong", "supporting"]);
    for (const tier of tiers) {
      const ids = tier.layers.map((layer) => layer.id);
      assert.deepEqual(ids, [...ids].sort((a, b) => Number(b === "ca") - Number(a === "ca")));
      assert.ok(tier.layers.flatMap((layer) => layer.sections.flatMap((section) => section.items))
        .every((item) => item.strength === tier.id));
    }
    const actual = tiers.flatMap((tier) => tier.layers.flatMap((layer) => layer.sections.flatMap((section) => section.items)));
    const expected = templateData.templates.filter((item) => item.folder === scenarioFolders[scenario.id]);
    assert.deepEqual(actual.map((item) => item.path).sort(), expected.map((item) => item.path).sort());
  }
});

test("AiTM promotes device, phishing-resistant, unsupported-platform, and admin-portal MFA policies", () => {
  for (const id of ["aitm"]) {
    const own = templateData.templates.filter((item) => item.folder === scenarioFolders[id]);
    for (const item of own) {
      const expected = item.section === "ConditionalAccess" && (item.controls.some((control) => ["phishing", "device"].includes(control))
        || /\bCA(?:100|109|204)\b/.test(item.name));
      assert.equal(templateStrength(item, id), expected ? "strong" : "supporting", `${id}: ${item.name}`);
    }
    const strong = own.filter((item) => templateStrength(item, id) === "strong");
    assert.equal(strong.length, 11, id);
  }
});

test("cryptojacking and LLMjacking have exactly the token theft policy set and priorities", () => {
  const policies = (id) => templateData.templates
    .filter((item) => item.folder === scenarioFolders[id])
    .map((item) => ({
      name: item.name, section: item.section, platform: item.platform,
      controls: item.controls, strength: templateStrength(item, id)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const id of ["cryptojacking", "llmjacking"]) {
    assert.deepEqual(policies(id), policies("token-theft"), id);
    for (const item of templateData.templates) {
      assert.equal(templateStrength(item, id), templateStrength(item, "token-theft"), item.name);
    }
  }
});

test("token theft promotes identity requirements and only the requested endpoint controls", () => {
  const own = templateData.templates.filter((item) => item.folder === "TOKEN THEFT");
  const strong = own.filter((item) => templateStrength(item, "token-theft") === "strong");
  assert.equal(strong.filter((item) => item.section === "ConditionalAccess").length, 11);
  assert.equal(strong.filter((item) => item.section === "SettingsCatalog").length, 13);
  const promoted = own.filter((item) => item.section === "SettingsCatalog" && /Edge|BitLocker|LAPS|Antivirus Updates/i.test(item.name));
  assert.equal(promoted.length, 8);
  for (const item of promoted) {
    assert.equal(templateStrength(item, "token-theft"), "strong", item.name);
  }
  assert.ok(own.filter((item) => item.section === "CompliancePolicies").every((item) => templateStrength(item, "token-theft") === "supporting"));
});

test("all four identity scenarios include both unsupported-platform blocks and admin-portal MFA as Strong CA", () => {
  for (const id of ["aitm", "token-theft", "cryptojacking", "llmjacking"]) {
    const ca = tiersForScenario(templateData.templates, id).find((tier) => tier.id === "strong")
      .layers.find((layer) => layer.id === "ca").sections.flatMap((section) => section.items);
    for (const code of ["CA100", "CA109", "CA204"]) {
      assert.ok(ca.some((item) => item.code === code), `${id}: ${code}`);
    }
  }
});

test("device code phishing includes the flow block and MFA policies as Strong", () => {
  const own = templateData.templates.filter((item) => item.folder === "DEVICE CODE PHISHING");
  assert.equal(own.length, 4);
  assert.ok(own.some((item) => item.controls.includes("flow")));
  assert.equal(own.filter((item) => item.controls.includes("mfa")).length, 3);
  assert.ok(own.every((item) => templateStrength(item, "device-code") === "strong"));
});

test("ClickFix contains all six Strong endpoint controls and infostealers promotes the requested Windows controls", () => {
  const clickfix = templateData.templates.filter((item) => item.folder === "CLICKFIX");
  assert.equal(clickfix.length, 6);
  assert.ok(clickfix.every((item) => templateStrength(item, "clickfix") === "strong"));
  for (const pattern of [/Run Command/i, /ASR.*L2/i, /WDAC/i, /Auto Enrollment/i, /AV Configuration/i, /Firewall/i]) {
    assert.ok(clickfix.some((item) => pattern.test(item.name)), String(pattern));
  }
  const info = templateData.templates.filter((item) => item.folder === "INFOSTEALERS");
  assert.equal(info.length, 14);
  assert.ok(info.some((item) => /Run Command/i.test(item.name)));
  for (const pattern of [/BitLocker/i, /Defender Antivirus Updates/i, /LAPS/i]) {
    assert.ok(info.some((item) => pattern.test(item.name)), String(pattern));
  }
  for (const item of info) {
    const expected = /Edge|Run Command|ASR.*L2|WDAC|Auto Enrollment|AV Configuration|Firewall|BitLocker|Defender Antivirus Updates|LAPS/i.test(item.name);
    assert.equal(templateStrength(item, "infostealers"), expected ? "strong" : "supporting", item.name);
  }
});

test("ransomware marks every policy Strong", () => {
  const own = templateData.templates.filter((item) => item.folder === "RANSOMWARE");
  assert.ok(own.length > 0);
  assert.ok(own.every((item) => templateStrength(item, "ransomware") === "strong"));
});

test("classification does not promote prerequisites or generic MFA for AiTM", () => {
  assert.equal(templateStrength({ section: "AuthenticationContext", name: "PhishingResistantMFA" }, "aitm"), "supporting");
  assert.equal(templateStrength({ section: "ConditionalAccess", controls: ["mfa"] }, "aitm"), "supporting");
  assert.equal(templateStrength({ section: "SettingsCatalog", name: "ASR Rules (L1)" }, "token-theft"), "supporting");
  assert.equal(templateStrength({ section: "SettingsCatalog", name: "Defender Antivirus Updates Ring 1" }, "clickfix"), "supporting");
});

test("every displayed policy has an explanation and links into its own scenario's repo folder", async () => {
  for (const scenario of scenarios) {
    assert.ok(scenarioFolderUrl(scenario.id).endsWith(encodeURIComponent(scenarioFolders[scenario.id])));
    for (const layer of layersForScenario(templateData.templates, scenario.id)) {
      for (const item of layer.sections.flatMap((section) => section.items)) {
        assert.ok(item.title && item.text, item.path);
        assert.equal(templateUrl(item.path),
          `https://github.com/CoC-MS/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/blob/main/templates/${item.path.split("/").map(encodeURIComponent).join("/")}`);
        assert.ok((await readFile(new URL(`../templates/${item.path.split("/").map(encodeURIComponent).join("/")}`, import.meta.url))).length);
      }
    }
  }
});

test("endpoint sections are separated by OS without changing priorities or losing policies", () => {
  for (const scenario of scenarios) {
    for (const tier of tiersForScenario(templateData.templates, scenario.id)) {
      const endpoint = tier.layers.find((layer) => layer.id === "endpoint");
      for (const section of endpoint?.sections ?? []) {
        assert.ok(section.platform);
        assert.ok(section.title.startsWith(`${section.platform} · `));
        assert.ok(section.items.every((item) => item.platform === section.platform));
      }
    }
  }
  for (const folder of ["TOKEN THEFT", "INFOSTEALERS", "LLM-CRYPTOJACKING"]) {
    const items = templateData.templates.filter((item) => item.folder === folder && item.section === "SettingsCatalog");
    assert.ok(items.some((item) => item.platform === "Windows"));
    assert.ok(items.every((item) => item.platform !== "macOS"));
  }
  assert.ok(templateData.templates.some((item) => item.platform === "Windows Server"));
  assert.equal(endpointPlatform({ platforms: "windows10" }, "Microsoft Edge - Disable proxy settings"), "Windows");
  assert.equal(endpointPlatform({ platforms: "macOS" }, "RANSOMWARE/WINDOWS 11/MacOS Edge"), "macOS");
  assert.equal(endpointPlatform({ platforms: "windows10" }, "Windows Server ASR"), "Windows Server");
  assert.throws(() => endpointPlatform({}, "Unknown policy"), /Unknown endpoint platform/);
});

test("macOS configuration profiles are removed from packages while all compliance policies remain", () => {
  const mac = templateData.templates.filter((item) => item.platform === "macOS");
  assert.equal(mac.length, 12);
  assert.ok(mac.every((item) => item.section === "CompliancePolicies"));
  for (const folder of ["AITM", "TOKEN THEFT", "LLM-CRYPTOJACKING"]) {
    assert.equal(mac.filter((item) => item.folder === folder).length, 4, folder);
  }
});

test("proxy-lock profiles are removed everywhere and ransomware has only Windows platforms", () => {
  assert.ok(templateData.templates.every((item) => !/Disable proxy/i.test(item.name)));
  const ransomware = templateData.templates.filter((item) => item.folder === "RANSOMWARE");
  assert.equal(ransomware.length, 16);
  assert.deepEqual([...new Set(ransomware.map((item) => item.platform))].sort(), ["Windows", "Windows Server"]);
});

test("site uses one Get package button instead of per-policy template links", async () => {
  const app = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(!app.includes("Open template"));
  assert.ok(!app.includes('"policy-links"'));
  assert.match(app, /externalLink\("Get package ↗", scenarioFolderUrl\(scenario\.id\)\)/);
  assert.match(app, /byId\("package-actions"\)\.replaceChildren\(packageLink\)/);
  assert.ok(html.includes('id="package-actions"'));
});

test("every package landing page contains folder links, import guidance, and both original videos", async () => {
  const root = fileURLToPath(new URL("../templates/", import.meta.url));
  const videoIds = ["88e2ba12-e3d2-41fa-a1ec-5ff9bc2fea42", "524c9224-fedf-45b6-a9d1-462480dd0b82"];
  const index = await readFile(join(root, "README.md"), "utf8");
  assert.ok(index.includes("ALSO_CA_BP"));
  assert.ok(index.includes("**Conditional Access state to OFF during import**"));
  assert.ok(index.includes("**Import assignments** unchecked"));
  for (const folder of new Set(Object.values(scenarioFolders))) {
    assert.ok(index.includes(`](${encodeURIComponent(folder)})`), folder);
    const file = join(root, folder, "README.md");
    const content = await readFile(file, "utf8");
    for (const video of videoIds) assert.ok(content.includes(`https://github.com/user-attachments/assets/${video}`), folder);
    const links = [...content.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
    for (const link of links.filter((href) => !href.startsWith("https://"))) {
      assert.ok(await stat(resolve(dirname(file), decodeURIComponent(link.split("#")[0]))), link);
    }
    for (const directory of (await readdir(join(root, folder), { withFileTypes: true })).filter((entry) => entry.isDirectory())) {
      assert.ok(links.includes(encodeURIComponent(directory.name)), `${folder}/${directory.name}`);
    }
  }
  for (const video of videoIds) assert.ok(index.includes(video));
});
