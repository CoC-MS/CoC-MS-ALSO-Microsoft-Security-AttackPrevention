import { createHash } from "node:crypto";
import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
  const templates = await read("data/templates.js");
  const mappings = await read("mappings.mjs");
  const css = await read("styles.css");
  const templatesDataName = assetName("templates.js", templates);
  const logic = await read("templates.mjs");
  const logicName = assetName("templates.mjs", logic);
  const mappingsName = assetName("mappings.mjs", mappings);
  const cssName = assetName("styles.css", css);
  const app = (await read("app.js"))
    .replace('"./data/templates.js"', `"./${templatesDataName}"`)
    .replace('"./mappings.mjs"', `"./${mappingsName}"`)
    .replace('"./templates.mjs"', `"./${logicName}"`);
  const appName = assetName("app.js", app);
  const html = (await read("index.html"))
    .replace('href="styles.css"', `href="${cssName}"`)
    .replace('import("./app.js")', `import("./${appName}")`);

  await mkdir(output, { recursive: true });
  await Promise.all([
    [templatesDataName, templates], [logicName, logic], [mappingsName, mappings],
    [cssName, css], [appName, app], ["index.html", html]
  ].map(([name, content]) => writeFile(join(output, name), content)));
  await Promise.all(["assets/also-logo.png", "assets/ALSO_Microsoft_Security_Attack_Prevention_Quick_Tips.pdf", "data/SOURCE_LICENSE.txt", "LICENSE"].map(async (path) => {
    const destination = join(output, path);
    await mkdir(resolve(destination, ".."), { recursive: true });
    await copyFile(join(root, path), destination);
  }));
  await cp(join(root, "data", "endpoint-licenses"), join(output, "data", "endpoint-licenses"), { recursive: true });
  await rm(join(output, "templates"), { recursive: true, force: true });
  await cp(join(root, "templates"), join(output, "templates"), { recursive: true });
  return { appName, templatesDataName, logicName, mappingsName, cssName };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const manifest = await buildSite();
  console.log(`Built cache-safe site: ${JSON.stringify(manifest)}`);
}
