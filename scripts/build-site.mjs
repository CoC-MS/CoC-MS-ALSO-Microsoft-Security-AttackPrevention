import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

export function assetName(name, content) {
  const hash = createHash("sha256").update(content).digest("hex").slice(0, 16);
  const dot = name.lastIndexOf(".");
  return `${name.slice(0, dot)}.${hash}${name.slice(dot)}`;
}

export async function buildSite(output = join(root, "_site")) {
  const read = (path) => readFile(join(root, path), "utf8");
  const policies = await read("data/policies.js");
  const mappings = await read("mappings.mjs");
  const css = await read("styles.css");
  const policiesName = assetName("policies.js", policies);
  const mappingsName = assetName("mappings.mjs", mappings);
  const cssName = assetName("styles.css", css);
  const app = (await read("app.js"))
    .replace('"./data/policies.js"', `"./${policiesName}"`)
    .replace('"./mappings.mjs"', `"./${mappingsName}"`);
  const appName = assetName("app.js", app);
  const html = (await read("index.html"))
    .replace('href="styles.css"', `href="${cssName}"`)
    .replace('import("./app.js")', `import("./${appName}")`);

  await mkdir(output, { recursive: true });
  await Promise.all([
    [policiesName, policies], [mappingsName, mappings],
    [cssName, css], [appName, app], ["index.html", html]
  ].map(([name, content]) => writeFile(join(output, name), content)));
  await Promise.all(["assets/also-logo.png", "data/SOURCE_LICENSE.txt", "LICENSE"].map(async (path) => {
    const destination = join(output, path);
    await mkdir(resolve(destination, ".."), { recursive: true });
    await copyFile(join(root, path), destination);
  }));
  return { appName, policiesName, mappingsName, cssName };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const manifest = await buildSite();
  console.log(`Built cache-safe site: ${JSON.stringify(manifest)}`);
}
