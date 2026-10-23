import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
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
    const manifest = await buildSite(output);
    const html = await readFile(join(output, "index.html"), "utf8");
    const app = await readFile(join(output, manifest.appName), "utf8");
    assert.ok(html.includes(`import("./${manifest.appName}")`));
    assert.ok(html.includes(`href="${manifest.cssName}"`));
    assert.ok(!html.includes('import("./app.js")'));
    assert.ok(app.includes(`"./${manifest.policiesName}"`));
    assert.ok(app.includes(`"./${manifest.endpointsName}"`));
    assert.ok(app.includes(`"./${manifest.mappingsName}"`));
    assert.ok(!app.includes('"./data/policies.js"'));
    assert.ok(!app.includes('"./data/endpoint-policies.js"'));
    assert.ok(!app.includes('"./mappings.mjs"'));
    for (const name of Object.values(manifest)) {
      const content = await readFile(join(output, name), "utf8");
      const sourceName = name.replace(/\.[a-f0-9]{16}(?=\.)/, "");
      assert.equal(name, assetName(sourceName, content));
    }
    assert.ok((await readFile(join(output, "assets", "also-logo.png"))).length);
    assert.ok((await readFile(join(output, "data", "SOURCE_LICENSE.txt"))).length);
    const files = await readdir(output);
    assert.ok(!files.includes("app.js"), "Unversioned scripts must not be published");
  } finally {
    await rm(output, { recursive: true });
  }
});
