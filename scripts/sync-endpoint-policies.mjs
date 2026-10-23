import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";

const repositories = [
  { name: "ALSO-Microsoft-Security-Windows", platform: "Windows" },
  { name: "ALSO-Microsoft-Security-WindowsServer", platform: "Windows Server" },
  { name: "ALSO-Microsoft-Security-Linux", platform: "Linux" },
  { name: "ALSO-Microsoft-Security-MacOS", platform: "macOS" },
  { name: "ALSO-Microsoft-Security-Android", platform: "Android" },
  { name: "ALSO-Microsoft-Security-iOSandiPadOS", platform: "iOS / iPadOS" }
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
  if (ids.some((id) => /firewall_mdmstore|com\.apple\.security\.firewall/i.test(id))) return "endpoint-firewall";
  if (ids.some((id) => /microsoft_edge/i.test(id))) return "endpoint-edge";
  if (ids.some((id) => /linux_mdatp|enforcementlevel_antivirusengine/i.test(id))) return "endpoint-av";
  if (ids.some((id) => /com\.microsoft\.(wdav|scmx)|DefenderNetworkProtectionEnable|macOSMicrosoftDefenderApp|advancedThreatProtectionRequiredSecurityLevel|deviceThreatProtectionRequiredSecurityLevel|^defenderEnabled$/i.test(id))) return "endpoint-defender";
  if (ids.some((id) => /com\.apple\.system-extension-policy/i.test(id)) && /MDE/i.test(name)) return "endpoint-defender";
  if (/ASR|Attack Surface Reduction|Tamper|Enrollment to MDE|network protection/i.test(name)
    && ids.some((id) => /defender|mdatp|sense|networkprotection|windowsadvancedthreatprotection/i.test(id))) return "endpoint-defender";
  if (ids.some((id) => /defender|linux_mdatp_managed_antivirusengine/i.test(id))) return "endpoint-av";
  return null;
}

export function endpointEvidence(policy) {
  const ids = definitionIds(policy.settings);
  for (const setting of policy.settings ?? []) {
    if (setting.appConfigKey) ids.push(setting.appConfigKey);
  }
  if (policy.payload) {
    const xml = Buffer.from(policy.payload, "base64").toString("utf8");
    ids.push(...(xml.match(/com\.microsoft\.[a-zA-Z0-9.-]+/g) ?? []));
  }
  for (const field of ["packageId", "bundleId", "vpnAlwaysOnPackageIdentifier", "identifier"]) {
    if (policy[field] && /com\.microsoft\.(scmx|wdav)/i.test(policy[field])) ids.push(`${field}:${policy[field]}`);
  }
  if (policy["@odata.type"] === "#microsoft.graph.macOSMicrosoftDefenderApp") ids.push("macOSMicrosoftDefenderApp");
  if (policy.payloadJson && /com\.microsoft\.scmx/i.test(policy.packageId ?? "")) ids.push("com.microsoft.scmx.managedConfiguration");
  if (policy.advancedThreatProtectionRequiredSecurityLevel
    && !["unavailable", "notSet"].includes(policy.advancedThreatProtectionRequiredSecurityLevel)) {
    ids.push("advancedThreatProtectionRequiredSecurityLevel");
  }
  if (policy.deviceThreatProtectionEnabled && policy.deviceThreatProtectionRequiredSecurityLevel
    && !["unavailable", "notSet"].includes(policy.deviceThreatProtectionRequiredSecurityLevel)) {
    ids.push("deviceThreatProtectionRequiredSecurityLevel");
  }
  if (policy.defenderEnabled === true) ids.push("defenderEnabled");
  if (policy.defenderEnableNetworkProtection !== undefined) ids.push("defenderEnableNetworkProtection");
  if (policy.defenderNetworkProtectionType && policy.defenderNetworkProtectionType !== "notConfigured") ids.push("defenderNetworkProtectionType");
  return [...new Set(ids)];
}

export function includeEndpoint(path, platform) {
  if (!path.endsWith(".json") || /offboarding/i.test(path)) return false;
  if (platform === "Windows" && /\/CompliancePolicies\//.test(path)) return /Defender/i.test(path);
  if (platform === "Windows") return /\/SettingsCatalog\/|\/DeviceConfiguration\//.test(path)
    && /LAPS|EPM|Antivirus|Firewall|ASR|Attack Surface Reduction|Edge.*Security|network protection/i.test(path);
  if (platform === "macOS") return /Firewall|MDCA_READY|MDE_AUTO_ONBOARDING/i.test(path);
  if (["Android", "iOS / iPadOS"].includes(platform)) return /Defender|MDE/i.test(path);
  return true;
}

function packageName(path, platform) {
  if (platform === "Windows" || platform === "Android") return path.split("/")[1];
  if (platform === "macOS" || platform === "iOS / iPadOS") return path.split("/")[0].split("_").at(-1);
  return platform;
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
    const files = tree.tree.filter((file) => file.type === "blob" && includeEndpoint(file.path, source.platform));
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
        if (!name) throw new Error(`Missing endpoint name: ${path}`);
        const ids = endpointEvidence(policy);
        if (!ids.length) throw new Error(`Missing endpoint control evidence: ${path}`);
        const group = endpointGroup(ids, name);
        if (!group) throw new Error(`Unreviewed endpoint control category: ${path}`);
        const auditOnly = /audit mode/i.test(name);
        return {
          key: `${repository}/${path}`,
          code: policyIdentity(source.platform, name),
          name,
          platform: source.platform,
          package: packageName(path, source.platform),
          group,
          auditOnly,
          description: policy.description ?? "",
          settingCount: policy.settings?.length ?? ids.length,
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
