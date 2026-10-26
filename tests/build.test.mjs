import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assetName, buildSite } from "../scripts/build-site.mjs";

test("asset URLs change with content and remain stable for unchanged content", () => {
  assert.equal(assetName("app.js", "same"), assetName("app.js", "same"));
  assert.notEqual(assetName("app.js", "old"), assetName("app.js", "new"));
  assert.match(assetName("mappings.mjs", "content"), /^mappings\.[a-f0-9]{16}\.mjs$/);
});

test("production HTML and every module dependency use content-hashed assets", async () => {
  const output = await mkdtemp(join(tmpdir(), "also-mapper-build-"));
  try {
    await mkdir(join(output, "templates"), { recursive: true });
    await writeFile(join(output, "templates", "removed-policy.json"), "{}");
    const manifest = await buildSite(output);
    await assert.rejects(readFile(join(output, "templates", "removed-policy.json")), { code: "ENOENT" });
    const html = await readFile(join(output, "index.html"), "utf8");
    const app = await readFile(join(output, manifest.appName), "utf8");
    assert.ok(html.includes(`import("./${manifest.appName}")`));
    assert.ok(html.includes(`href="${manifest.cssName}"`));
    assert.ok(!html.includes('import("./app.js")'));
    assert.ok(app.includes(`"./${manifest.templatesDataName}"`));
    assert.ok(app.includes(`"./${manifest.logicName}"`));
    assert.ok(app.includes(`"./${manifest.mappingsName}"`));
    assert.ok(!app.includes('"./data/templates.js"'));
    assert.ok(!app.includes('"./templates.mjs"'));
    assert.ok(!app.includes('"./mappings.mjs"'));
    for (const name of Object.values(manifest)) {
      const content = await readFile(join(output, name), "utf8");
      const sourceName = name.replace(/\.[a-f0-9]{16}(?=\.)/, "");
      assert.equal(name, assetName(sourceName, content));
    }
    assert.ok((await readFile(join(output, "assets", "also-logo.png"))).length);
    assert.ok((await readFile(join(output, "data", "SOURCE_LICENSE.txt"))).length);
    assert.ok((await readFile(join(output, "data", "endpoint-licenses", "ALSO-Microsoft-Security-MacOS.txt"))).length);
    assert.ok((await readFile(join(output, "templates", "CLICKFIX", "SettingsCatalog", (await readdir(join(output, "templates", "CLICKFIX", "SettingsCatalog")))[0]))).length);
    const files = await readdir(output);
    assert.ok(!files.includes("app.js"), "Unversioned scripts must not be published");
  } finally {
    await rm(output, { recursive: true });
  }
});
