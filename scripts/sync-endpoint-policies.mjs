import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";

const repositories = [
  { name: "ALSO-Microsoft-Security-Windows", platform: "Windows" },
  { name: "ALSO-Microsoft-Security-WindowsServer", platform: "Windows Server" },
  { name: "ALSO-Microsoft-Security-Linux", platform: "Linux" }
];

function definitionIds(value, result = []) {
  if (!value || typeof value !== "object") return result;
  if (typeof value.settingDefinitionId === "string") result.push(value.settingDefinitionId);
  for (const item of Object.values(value)) {
    if (typeof item === "object") definitionIds(item, result);
  }
  return [...new Set(result)];
}

export function endpointGroup(ids, name) {
  if (ids.some((id) => /laps_policies|elevationclientsettings|privilegemanagement/i.test(id))) return "endpoint-privilege";
  if (ids.some((id) => /firewall_mdmstore/i.test(id))) return "endpoint-firewall";
  if (ids.some((id) => /microsoft_edge/i.test(id))) return "endpoint-edge";
  if (/ASR|Attack Surface Reduction|Tamper|Enrollment to MDE|network protection/i.test(name)
    && ids.some((id) => /defender|mdatp|sense|networkprotection|windowsadvancedthreatprotection/i.test(id))) return "endpoint-defender";
  if (ids.some((id) => /defender|linux_mdatp_managed_antivirusengine/i.test(id))) return "endpoint-av";
  return null;
}

export function policyIdentity(platform, name) {
  const normalized = name.normalize("NFKC").toLowerCase()
    .replace(/\b(bp|e5|full)\b/g, "")
    .replace(/[\s\u2010-\u2015-]+/g, " ").trim();
  return `${platform}-${createHash("sha256").update(normalized).digest("hex").slice(0, 12)}`;
}

export async function syncEndpoints() {
  const sources = [];
  const policies = [];
  const directory = new URL("../data/endpoint-licenses/", import.meta.url);
  await mkdir(directory, { recursive: true });
  for (const source of repositories) {
    const repository = `CoC-MS/${source.name}`;
    const tree = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/git/trees/main?recursive=1`], { encoding: "utf8" }));
    if (tree.truncated) throw new Error(`Truncated source tree: ${repository}`);
    const files = tree.tree.filter((file) => file.type === "blob" && file.path.endsWith(".json")
      && (source.platform !== "Windows" || (/\/SettingsCatalog\//.test(file.path)
        && /LAPS|EPM|Antivirus|Firewall|ASR|Attack Surface Reduction|Edge.*Security|network protection/i.test(file.path)
        && !/offboarding|updates|ring \d/i.test(file.path))));
    if (!files.length) throw new Error(`No endpoint templates found: ${repository}`);
    for (let offset = 0; offset < files.length; offset += 8) {
      const batch = await Promise.all(files.slice(offset, offset + 8).map(async ({ path }) => {
        const encoded = path.split("/").map(encodeURIComponent).join("/");
        const response = await fetch(`https://raw.githubusercontent.com/${repository}/${tree.sha}/${encoded}`);
        if (!response.ok) throw new Error(`Cannot read ${repository}/${path}: ${response.status}`);
        const bytes = new Uint8Array(await response.arrayBuffer());
        const encoding = bytes[0] === 255 && bytes[1] === 254 ? "utf-16le"
          : bytes[0] === 254 && bytes[1] === 255 ? "utf-16be" : "utf-8";
        const policy = JSON.parse(new TextDecoder(encoding, { fatal: true }).decode(bytes));
        const name = policy.name ?? policy.displayName;
        if (!name || !Array.isArray(policy.settings)) throw new Error(`Missing endpoint settings: ${path}`);
        const ids = definitionIds(policy.settings);
        const group = endpointGroup(ids, name);
        if (!group) throw new Error(`Unreviewed endpoint control category: ${path}`);
        const auditOnly = /audit mode/i.test(name);
        return {
          key: `${repository}/${path}`,
          code: policyIdentity(source.platform, name),
          name,
          platform: source.platform,
          package: source.platform === "Windows" ? path.split("/")[1] : source.platform,
          group,
          auditOnly,
          description: policy.description ?? "",
          settingCount: policy.settings.length,
          definitionIds: ids,
          url: `https://github.com/${repository}/blob/${tree.sha}/${encoded}`
        };
      }));
      policies.push(...batch);
    }
    const license = await fetch(`https://raw.githubusercontent.com/${repository}/${tree.sha}/LICENSE`);
    if (!license.ok) throw new Error(`Cannot read source license for ${repository}`);
    await writeFile(new URL(`${source.name}.txt`, directory), await license.text());
    sources.push({ repository, revision: tree.sha, platform: source.platform });
  }
  policies.sort((a, b) => a.key.localeCompare(b.key));
  const inventory = { fetchedAt: new Date().toISOString(), sources, policies };
  await writeFile(new URL("../data/endpoint-policies.js", import.meta.url),
    "// Generated and normalized by scripts/sync-endpoint-policies.mjs; do not edit by hand.\n"
    + "// Original names, control identifiers, and descriptions from ALSO public endpoint repositories.\n"
    + "// Source licenses are retained in endpoint-licenses/. Source JSON is linked at pinned revisions.\n"
    + `export default ${JSON.stringify(inventory, null, 2)};\n`);
  console.log(`Saved ${policies.length} endpoint templates from ${sources.length} repositories.`);
}

if (process.argv[1]?.endsWith("sync-endpoint-policies.mjs")) await syncEndpoints();
