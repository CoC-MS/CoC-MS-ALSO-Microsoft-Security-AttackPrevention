export const techniques = {
  "T1557": { name: "Adversary-in-the-Middle", tactic: "Credential Access" },
  "T1539": { name: "Steal Web Session Cookie", tactic: "Credential Access" },
  "T1555.003": { name: "Credentials from Web Browsers", tactic: "Credential Access" },
  "T1550.001": { name: "Application Access Token", tactic: "Defense Evasion / Lateral Movement" },
  "T1550.004": { name: "Web Session Cookie", tactic: "Defense Evasion / Lateral Movement" },
  "T1566.002": { name: "Spearphishing Link", tactic: "Initial Access" },
  "T1528": { name: "Steal Application Access Token", tactic: "Credential Access" },
  "T1110.001": { name: "Password Guessing", tactic: "Credential Access" },
  "T1110.003": { name: "Password Spraying", tactic: "Credential Access" },
  "T1078.004": { name: "Cloud Accounts", tactic: "Initial Access" },
  "T1496.001": { name: "Compute Hijacking", tactic: "Impact" },
  "T1486": { name: "Data Encrypted for Impact", tactic: "Impact" },
  "T1204.002": { name: "Malicious File", tactic: "Execution" },
  "T1204.004": { name: "Malicious Copy and Paste", tactic: "Execution" },
  "T1059.001": { name: "PowerShell", tactic: "Execution" }
};

export const research = {
  url: "https://www.microsoft.com/en-us/research/publication/how-effective-is-multifactor-authentication-at-deterring-cyberattacks/",
  title: "How effective is multifactor authentication at deterring cyberattacks?",
  publisher: "Microsoft Research, 2023",
  populationReduction: "99.22%",
  leakedCredentialReduction: "98.56%",
  scope: "Observed reduction in account-compromise risk with MFA compared with no MFA in the study population. These are general research findings, not measured protection from these templates, scenario-specific percentages, or figures that can be added together."
};

export const controlGroups = {
  phishing: {
    title: "Phishing-resistant MFA",
    description: "Requires phishing-resistant authentication, such as FIDO2, Windows Hello for Business, or certificate-based MFA.",
    reason: "Stops the credential-relay authentication path used by common AiTM phishing proxies when the requirement is enforced.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths"
  },
  device: {
    title: "Require a compliant device",
    description: "Requires devices to meet your organization's compliance requirements before allowing access.",
    reason: "Adds a device trust check to protected access. It does not bind every session token to a device or prevent every replay.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-all-users-device-compliance"
  },
  mfa: {
    title: "Require MFA",
    description: "Requires a second factor or an MFA authentication strength instead of a password alone.",
    reason: "A guessed or stolen password alone is not enough to satisfy this access requirement. Standard MFA can still be phished.",
    source: research.url
  },
  legacy: {
    title: "Block legacy authentication",
    description: "Blocks legacy clients that cannot meet modern authentication requirements.",
    reason: "Closes a common password-only sign-in route. It does not stop password guessing against other endpoints.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-block-legacy-authentication"
  },
  location: {
    title: "Block countries / untrusted locations",
    description: "Blocks access outside the allowed named locations defined in the template.",
    reason: "Limits where sign-ins can originate. An attacker in an allowed location or using a proxy may still get through.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/location-condition"
  },
  flow: {
    title: "Block device code & authentication transfer",
    description: "Blocks the configured device-code and authentication-transfer flows.",
    reason: "Closes the device-code authorization path for targeted users and resources. Check legitimate clients before enabling.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-block-authentication-flows"
  },
  "endpoint-privilege": {
    title: "Windows LAPS & Endpoint Privilege Management",
    description: "Manage local administrator passwords and elevation settings to limit privilege abuse. EPM templates require review of the configured elevation response; the supplied profile is intended for users who already have local admin.",
  },
  "endpoint-av": {
    title: "Defender Antivirus",
    description: "Antivirus configurations and update profiles for malware detection and endpoint protection.",
  },
  "endpoint-firewall": {
    title: "Host firewall",
    description: "Existing host firewall configurations to restrict network access and help limit lateral movement. A firewall does not block every token-exfiltration or ransomware path.",
  },
  "endpoint-defender": {
    title: "Defender protection & setup",
    description: "Defender deployment, permissions, network protection, device-risk requirements, and attack surface reduction. Setup profiles enable protection; they are not standalone ransomware blockers. Audit-only profiles monitor behavior; they do not block it.",
  },
  "endpoint-edge": {
    title: "Microsoft Edge security",
    description: "Existing browser security settings, including download and SmartScreen-related controls, to help reduce exposure to malicious sites and files. Browser policies do not guarantee prevention of commands a user copies and runs.",
  }
};

export const scenarios = [
  {
    id: "aitm", icon: "A", name: "AiTM phishing",
    short: "An attacker proxies a sign-in to capture credentials and sessions.",
    summary: "Use phishing-resistant authentication against common adversary-in-the-middle phishing proxies, and require compliant devices as an additional access check.",
    groups: ["phishing", "device"],
    techniques: ["T1557"],
    protection: "Strong protection at sign-in",
    limitation: "Phishing-resistant MFA protects authentication; compliant-device policies add a device trust check. Each template only protects its assigned users and resources. Device compliance does not bind every token to a device, remove already-stolen tokens, or prevent every form of session theft.",
    riskNote: "The cited MFA study does not quantify AiTM-specific protection. Its general MFA percentage must not be presented as an AiTM success rate."
  },
  {
    id: "token-theft", icon: "T", name: "Token theft",
    short: "Malware steals Entra cloud tokens or browser session cookies from a user's device.",
    summary: "An attacker steals application access or refresh tokens, or browser session cookies, from a compromised device and uses them to access cloud services as the user. T1528 and T1539 describe theft; T1550.001 and T1550.004 describe subsequent use.",
    groups: ["phishing", "device", "endpoint-privilege", "endpoint-av", "endpoint-firewall", "endpoint-defender"],
    endpointPlatforms: ["Windows"],
    techniques: ["T1528", "T1539", "T1550.001", "T1550.004"],
    protection: "Layered protection for cloud access",
    limitation: "Compliant-device policies add device checks; phishing-resistant MFA protects new authentication, not tokens already stolen by malware. Windows LAPS, EPM, Defender, and firewall policies add endpoint protection, but do not guarantee replay prevention. Use supported token protection and session revocation as well.",
    riskNote: "No token-theft reduction percentage is established by the cited sources. General MFA research is not a measure of stolen-token replay protection."
  },
  {
    id: "password-attacks", icon: "P", name: "Password spraying & brute force",
    short: "An attacker repeatedly tries passwords to take over an account.",
    summary: "Require MFA, block legacy authentication, and restrict sign-ins from untrusted countries or locations.",
    groups: ["mfa", "legacy", "location"],
    techniques: ["T1110.003", "T1110.001"],
    protection: "Protect password-based entry points",
    limitation: "These controls reduce successful access, not the number of password attempts. Keep smart lockout enabled and review exclusions. Location restrictions can be bypassed from allowed locations.",
    riskNote: "Microsoft's MFA study reports account-compromise risk, not a password-spray-specific prevention rate. It supports using MFA, but does not measure this policy combination."
  },
  {
    id: "device-code", icon: "D", name: "Device code phishing",
    short: "An attacker tricks a user into approving a device-code sign-in.",
    summary: "Block device-code flow and authentication transfer. Keep MFA as a supporting access control.",
    groups: ["flow", "mfa"],
    techniques: ["T1566.002"],
    protection: "Block the abused sign-in flow",
    limitation: "Standard MFA alone does not stop device-code phishing: the victim may complete MFA for the attacker. The flow-blocking policy is the key control. Review legitimate device-code clients first.",
    riskNote: "The cited sources do not quantify device-code phishing risk reduction. The general MFA percentage does not describe protection against this attack."
  },
  {
    id: "cryptojacking", icon: "C", name: "Cryptojacking",
    short: "An attacker uses your compute resources to mine cryptocurrency.",
    summary: "Use the same phishing-resistant and compliant-device policies as AiTM and token theft to protect the identity entry points.",
    groups: ["phishing", "device"],
    techniques: ["T1496.001", "T1078.004"],
    protection: "Protect identity entry points",
    limitation: "These user access policies do not directly stop mining or secure API keys and service principals. Add workload protection, least privilege, quotas, and spend alerts.",
    riskNote: "No cryptojacking reduction percentage is established by the cited sources. Identity hardening is not a measured reduction in unauthorized mining."
  },
  {
    id: "llmjacking", icon: "L", name: "LLMjacking",
    short: "An attacker abuses your AI services and runs up usage costs.",
    summary: "Use the same phishing-resistant and compliant-device policies as AiTM and token theft to protect interactive access to AI resources.",
    groups: ["phishing", "device"],
    techniques: ["T1496.001", "T1078.004", "T1528"],
    protection: "Protect identity entry points",
    limitation: "These policies do not directly control AI consumption or every API credential. Protect keys and workloads, restrict permissions, and set service quotas and cost alerts. Compute hijacking is an indicative resource-abuse association, not an exact match for every LLM attack.",
    riskNote: "No LLMjacking reduction percentage is established by the cited sources. General MFA research does not quantify prevention of AI-resource abuse."
  },
  {
    id: "infostealers", icon: "I", name: "Infostealers",
    short: "Malware harvests saved passwords, cookies, and tokens from a device.",
    summary: "Infostealer malware steals browser-saved credentials, session cookies, and tokens, then replays them against cloud services. The supplied templates are endpoint and browser hardening.",
    groups: ["endpoint-privilege", "endpoint-av", "endpoint-firewall", "endpoint-defender", "endpoint-edge"],
    endpointPlatforms: ["Windows"],
    techniques: ["T1555.003", "T1539"],
    protection: "Layered protection for stolen credentials and sessions",
    limitation: "Policies reduce exposure and limit what stolen data can be used for, but do not guarantee that an infostealer cannot run or that already-stolen sessions are unusable. Revoke sessions and reset credentials after an incident."
  },
  {
    id: "ransomware", icon: "R", name: "Ransomware",
    short: "Malware encrypts files and disrupts endpoints and servers.",
    summary: "Endpoint templates for Windows 11 and Windows Server: Defender antivirus, ASR, firewall, app control, and Edge hardening.",
    groups: ["endpoint-av", "endpoint-firewall", "endpoint-defender"],
    endpointPlatforms: ["Windows", "Windows Server", "macOS", "Linux", "Android", "iOS / iPadOS"],
    techniques: ["T1486", "T1204.002"],
    protection: "Protect endpoints and servers",
    limitation: "Combine malware protection and network restrictions with tested backups and least privilege. Server ASR is supplied in audit mode, not blocking mode. This scenario is still under review.",
  },
  {
    id: "clickfix", icon: "F", name: "ClickFix",
    short: "A fake verification or fix prompt tricks a user into running a malicious command.",
    summary: "Windows hardening templates, including disabling the Run dialog (Win+R) that ClickFix lures abuse.",
    groups: ["endpoint-privilege", "endpoint-av", "endpoint-firewall", "endpoint-defender", "endpoint-edge"],
    endpointPlatforms: ["Windows"],
    techniques: ["T1204.004", "T1059.001"],
    protection: "Reduce browser and endpoint exposure",
    limitation: "ClickFix relies on user-executed commands. Browser and endpoint controls provide defense in depth, not a guaranteed block. Keep users out of local admin where possible and review EPM elevation rules before assigning the supplied profile."
  }
];

export function policyGroups(policy) {
  if (policy.platform && policy.group?.startsWith("endpoint-")) return [policy.group];
  const grants = policy.grantControls;
  const conditions = policy.conditions ?? {};
  const controls = grants?.builtInControls ?? [];
  const strength = grants?.authenticationStrength;
  const groups = [];
  if (strength?.id === "00000000-0000-0000-0000-000000000004") groups.push("phishing");
  if (controls.includes("compliantDevice")) groups.push("device");
  if (controls.includes("mfa") || strength?.requirementsSatisfied === "mfa") groups.push("mfa");
  if (controls.includes("block")) {
    if (conditions.clientAppTypes?.some((client) => ["exchangeActiveSync", "other"].includes(client))) groups.push("legacy");
    const locations = conditions.locations;
    if (locations?.includeLocations?.length && locations?.excludeLocations?.length) groups.push("location");
    const flows = (conditions.authenticationFlows?.transferMethods ?? "").split(",").map((flow) => flow.trim());
    if (flows.some((flow) => ["deviceCodeFlow", "authenticationTransfer"].includes(flow))) groups.push("flow");
  }
  return groups;
}

export function matchesScenario(policy, scenario) {
  return policyGroups(policy).some((group) => scenario.groups.includes(group));
}

export function scenarioPolicies(policies, scenario, packageName = "all") {
  return policies.filter((policy) => (packageName === "all" || policy.package === packageName)
    && (!policy.platform || scenario.endpointPlatforms?.includes(policy.platform))
    && matchesScenario(policy, scenario));
}

export function groupPolicies(policies, scenario, packageName = "all") {
  const relevant = scenarioPolicies(policies, scenario, packageName);
  return scenario.groups.map((group) => {
    const byCode = new Map();
    relevant.filter((policy) => policyGroups(policy).includes(group)).forEach((policy) => {
      if (!byCode.has(policy.code)) byCode.set(policy.code, []);
      byCode.get(policy.code).push(policy);
    });
    return { id: group, ...controlGroups[group], policies: [...byCode.values()] };
  });
}

export const policyCategories = [
  { id: "ca", title: "Conditional Access (CA)", description: "Microsoft Entra sign-in and access rules for users and cloud resources. A device condition here is still a CA policy, not an operating-system configuration." },
  { id: "Windows", title: "Windows", description: "Windows endpoint and device-protection policies." },
  { id: "Windows Server", title: "Windows Server", description: "Windows Server endpoint and device-protection policies." },
  { id: "macOS", title: "macOS", description: "Mac antivirus, firewall, and Defender deployment and permission profiles." },
  { id: "Linux", title: "Linux", description: "Linux endpoint-protection policies available in the source repository." },
  { id: "Android", title: "Android", description: "Mobile Defender deployment, configuration, and device-risk requirements. These support protection; they are not Windows-style ransomware controls." },
  { id: "iOS / iPadOS", title: "iOS / iPadOS", description: "Mobile Defender deployment, web/network protection, and device-risk requirements. These do not provide desktop-style antivirus scanning." }
];

export function categorizePolicies(policies, scenario) {
  return policyCategories.map((category) => ({
    ...category,
    groups: groupPolicies(policies.filter((policy) => (policy.platform ?? "ca") === category.id), scenario)
      .filter((group) => group.policies.length)
  })).filter((category) => category.groups.length);
}

export function policyLabel(policy, group) {
  if (policy.platform) {
    if (group === "endpoint-privilege") {
      if (/EPM/i.test(policy.name)) return "Windows · Endpoint Privilege Management elevation settings";
      return /24H2/i.test(policy.name) ? "Windows 11 24H2+ · LAPS configuration" : "Windows · LAPS configuration";
    }
    if (group === "endpoint-edge") return "Windows · Microsoft Edge security";
    if (group === "endpoint-firewall") return `${policy.platform} · ${policy.platform === "macOS" ? "Firewall & Gatekeeper" : "Firewall configuration"}`;
    if (group === "endpoint-av") {
      if (/updates|ring \d/i.test(policy.name)) return `${policy.platform} · Defender Antivirus updates${policy.name.match(/ring \d/i) ? ` (${policy.name.match(/ring \d/i)[0]})` : ""}`;
      return `${policy.platform} · Defender Antivirus${/Additional/i.test(policy.name) ? " additional configuration" : " configuration"}${/v1\.0/i.test(policy.name) ? " (v1.0)" : ""}`;
    }
    if (policy.definitionIds.some((id) => /^(advancedThreatProtectionRequiredSecurityLevel|deviceThreatProtectionRequiredSecurityLevel)$/.test(id))) {
      return `${policy.platform} · Defender device-risk requirement${/BYOD/i.test(policy.name) ? " (BYOD)" : ""}`;
    }
    if (policy.definitionIds.includes("defenderEnabled")) return `${policy.platform} · Require Defender to be enabled`;
    if (!["Windows", "Windows Server"].includes(policy.platform)) {
      if (policy.key.includes("/Applications/")) return `${policy.platform} · Defender app deployment`;
      if (/Auto Enrollment/i.test(policy.name)) return `${policy.platform} · Defender enrollment`;
      if (policy.key.includes("/AppConfigurationManagedDevice/")) return `${policy.platform} · Defender app configuration`;
      const name = policy.name.replace(/^.*?Device Configuration\s*-\s*/i, "")
        .replace(/^.*?(?:App Configuration|DeviceConfig)\s*-\s*/i, "")
        .replace(/\s*-\s*D$/i, "").replace(/\bMDE\b/g, "Defender").trim();
      return `${policy.platform} · ${name}`;
    }
    if (/network protection/i.test(policy.name)) return `${policy.platform} · Defender network protection`;
    if (/Tamper/i.test(policy.name)) return `${policy.platform} · Defender tamper protection`;
    if (/Enrollment/i.test(policy.name)) return `${policy.platform} · Defender for Endpoint enrollment`;
    if (policy.auditOnly) return `${policy.platform} · Attack surface reduction (audit only)`;
    if (/Office/i.test(policy.name)) return `${policy.platform} · Office attack surface reduction`;
    return `${policy.platform} · Attack surface reduction${/L2/i.test(policy.name) ? " (L2)" : " (low impact)"}`;
  }
  const code = policy.code.match(/CA\d+/)?.[0];
  const labels = {
    CA000: "All users · require MFA",
    CA001: "All users · block outside allowed countries",
    CA002: "All users · block legacy authentication",
    CA003: "Device registration & join · require MFA",
    CA004: "All users · block device code & authentication transfer",
    CA100: "Administrators · require MFA for admin portals",
    CA101: "Administrators · require MFA",
    CA105: "Administrators · require phishing-resistant MFA",
    CA106: "Tier 0 administrators · phishing-resistant MFA on role activation",
    CA107: "Administrators · compliant Windows device",
    CA108: "Administrators · compliant macOS device",
    CA110: "Administrators · compliant iOS / Android device",
    CA200: "Internal users · require MFA",
    CA203: "Intune enrollment · require MFA",
    CA205: "Internal users · compliant Windows device",
    CA208: "Internal users · compliant macOS device",
    CA211: "Internal users · compliant iOS / Android device",
    CA300: "Service accounts · require MFA",
    CA301: "Service accounts · block untrusted locations",
    CA400: "Guest users · require MFA",
    CA503: "Agent users · require a compliant device",
    CA505: "Agent users · block outside the approved network"
  };
  return labels[code] ?? controlGroups[group].title;
}

export function techniqueUrl(id) {
  return `https://attack.mitre.org/techniques/${id.replace(".", "/")}/`;
}
