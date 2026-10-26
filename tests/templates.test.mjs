import test from "node:test";
import assert from "node:assert/strict";
import templateData from "../data/templates.js";
import { scenarios } from "../mappings.mjs";
import { layersForScenario, scenarioFolders, templateUrl } from "../templates.mjs";
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

test("Conditional Access is the first layer and carries the Strong indicator", () => {
  for (const id of ["aitm", "token-theft", "password-attacks", "device-code", "cryptojacking", "llmjacking"]) {
    const layers = layersForScenario(templateData.templates, id);
    assert.equal(layers[0].id, "ca", id);
    assert.equal(layers[0].indicator, "🟢 Strong", id);
    assert.ok(layers.slice(1).every((layer) => layer.indicator === null), id);
  }
});

test("ransomware and ClickFix show no indicators", () => {
  for (const id of ["ransomware", "clickfix"]) {
    assert.ok(layersForScenario(templateData.templates, id).every((layer) => layer.indicator === null), id);
  }
});

test("every template has an explanation and a URL that points at a real file", () => {
  for (const layer of layersForScenario(templateData.templates, "token-theft")) {
    for (const item of layer.sections.flatMap((section) => section.items)) {
      assert.ok(item.title && item.text);
      assert.ok(templateUrl(item.path).startsWith("templates/"));
    }
  }
});
