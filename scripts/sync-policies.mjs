import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const repository = "CoC-MS/ALSO-Microsoft-Security-Conditional-Access";
const tree = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/git/trees/main?recursive=1`], { encoding: "utf8" }));
if (tree.truncated) throw new Error("Source tree is truncated; refusing to publish an incomplete inventory.");
const files = tree.tree.filter((file) => file.type === "blob" && /^ALSO_CA_(BP|E5|E7)\/ConditionalAccess\/.*\.json$/.test(file.path));
if (!files.length) throw new Error("No policy templates found in the source repository.");

function clean(value) {
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value)
      .filter(([key]) => !key.includes("@") && !key.startsWith("#"))
      .map(([key, item]) => [key, clean(item)]));
  }
  return value;
}

const policies = [];
for (let offset = 0; offset < files.length; offset += 8) {
  const batch = await Promise.all(files.slice(offset, offset + 8).map(async ({ path }) => {
    const response = await fetch(`https://raw.githubusercontent.com/${repository}/${tree.sha}/${path}`);
    if (!response.ok) throw new Error(`Cannot fetch ${path}: HTTP ${response.status}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    const encoding = bytes[0] === 0xff && bytes[1] === 0xfe ? "utf-16le"
      : bytes[0] === 0xfe && bytes[1] === 0xff ? "utf-16be" : "utf-8";
    const policy = JSON.parse(new TextDecoder(encoding, { fatal: true }).decode(bytes).replace(/^\uFEFF/, ""));
    if (!policy.displayName || !policy.conditions || !policy.state) throw new Error(`Invalid policy: ${path}`);
    return {
      key: path,
      code: path.match(/(?:BP|E5|A365)-ALSO-CA\d+/)?.[0],
      package: path.split("/")[0].replace("ALSO_CA_", ""),
      name: policy.displayName,
      state: policy.state,
      url: `https://github.com/${repository}/blob/${tree.sha}/${path}`,
      conditions: clean(policy.conditions),
      grantControls: clean(policy.grantControls),
      sessionControls: clean(policy.sessionControls)
    };
  }));
  policies.push(...batch);
}
policies.sort((a, b) => a.key.localeCompare(b.key));
const inventory = { repository, revision: tree.sha, fetchedAt: new Date().toISOString(), policies };
const licenseResponse = await fetch(`https://raw.githubusercontent.com/${repository}/${tree.sha}/LICENSE`);
if (!licenseResponse.ok) throw new Error(`Cannot fetch source license: HTTP ${licenseResponse.status}`);
const license = await licenseResponse.text();
await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/SOURCE_LICENSE.txt", import.meta.url), license);
await writeFile(new URL("../data/policies.js", import.meta.url),
  `// Generated and normalized by scripts/sync-policies.mjs. Do not edit by hand.\n`
  + `// Source: ${repository} at ${tree.sha}.\n`
  + "// Copyright 2026 vladjoh; portions Copyright (c) 2025 j0eyv.\n"
  + "// Source licenses and attribution are retained in SOURCE_LICENSE.txt.\n"
  + `export default ${JSON.stringify(inventory, null, 2)};\n`);
console.log(`Saved ${policies.length} source templates (${new Set(policies.map((policy) => policy.code)).size} policy codes) at ${tree.sha}.`);
