import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import templateData from "../data/templates.js";
import { scenarios } from "../mappings.mjs";
import { layersForScenario, tiersForScenario, scenarioFolders, templateUrl, scenarioFolderUrl, templateStrength } from "../templates.mjs";
import { collectTemplates } from "../scripts/sync-templates.mjs";

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

test("AiTM and LLM/cryptojacking mark only phishing-resistant and compliant-device CA as Strong", () => {
  for (const id of ["aitm", "llmjacking", "cryptojacking"]) {
    const own = templateData.templates.filter((item) => item.folder === scenarioFolders[id]);
    for (const item of own) {
      const expected = item.section === "ConditionalAccess" && item.controls.some((control) => ["phishing", "device"].includes(control));
      assert.equal(templateStrength(item, id), expected ? "strong" : "supporting", `${id}: ${item.name}`);
    }
    const strong = own.filter((item) => templateStrength(item, id) === "strong");
    assert.equal(strong.length, 8, id);
  }
});

test("token theft promotes identity requirements and only the requested endpoint controls", () => {
  const own = templateData.templates.filter((item) => item.folder === "TOKEN THEFT");
  const strong = own.filter((item) => templateStrength(item, "token-theft") === "strong");
  assert.equal(strong.filter((item) => item.section === "ConditionalAccess").length, 8);
  assert.equal(strong.filter((item) => item.section === "SettingsCatalog").length, 5);
  for (const item of own.filter((item) => /Edge|BitLocker|LAPS|Antivirus Updates/i.test(item.name))) {
    assert.equal(templateStrength(item, "token-theft"), "supporting", item.name);
  }
  assert.ok(own.filter((item) => item.section === "CompliancePolicies").every((item) => templateStrength(item, "token-theft") === "supporting"));
});

test("device code phishing includes the flow block and MFA policies as Strong", () => {
  const own = templateData.templates.filter((item) => item.folder === "DEVICE CODE PHISHING");
  assert.equal(own.length, 4);
  assert.ok(own.some((item) => item.controls.includes("flow")));
  assert.equal(own.filter((item) => item.controls.includes("mfa")).length, 3);
  assert.ok(own.every((item) => templateStrength(item, "device-code") === "strong"));
});

test("ClickFix contains all six Strong endpoint controls and infostealers also promotes every Edge profile", () => {
  const clickfix = templateData.templates.filter((item) => item.folder === "CLICKFIX");
  assert.equal(clickfix.length, 6);
  assert.ok(clickfix.every((item) => templateStrength(item, "clickfix") === "strong"));
  for (const pattern of [/Run Command/i, /ASR.*L2/i, /WDAC/i, /Auto Enrollment/i, /AV Configuration/i, /Firewall/i]) {
    assert.ok(clickfix.some((item) => pattern.test(item.name)), String(pattern));
  }
  const info = templateData.templates.filter((item) => item.folder === "INFOSTEALERS");
  assert.ok(info.some((item) => /Run Command/i.test(item.name)));
  for (const item of info) {
    const expected = /Edge|Run Command|ASR.*L2|WDAC|Auto Enrollment|AV Configuration|Firewall/i.test(item.name);
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
  assert.equal(templateStrength({ section: "SettingsCatalog", name: "Defender Antivirus Updates Ring 1" }, "token-theft"), "supporting");
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
