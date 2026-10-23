export const techniques = {
  "T1557": { name: "Adversary-in-the-Middle", tactics: ["Credential Access", "Collection"] },
  "T1566.002": { name: "Spearphishing Link", tactics: ["Initial Access"] },
  "T1528": { name: "Steal Application Access Token", tactics: ["Credential Access"] },
  "T1550.001": { name: "Application Access Token", tactics: ["Defense Evasion", "Lateral Movement"] },
  "T1550.004": { name: "Web Session Cookie", tactics: ["Defense Evasion", "Lateral Movement"] },
  "T1078.004": { name: "Cloud Accounts", tactics: ["Initial Access", "Persistence", "Privilege Escalation", "Defense Evasion"] },
  "T1110.003": { name: "Password Spraying", tactics: ["Credential Access"] },
  "T1496.001": { name: "Compute Hijacking", tactics: ["Impact"] },
  "T1486": { name: "Data Encrypted for Impact", tactics: ["Impact"] },
  "T1566.001": { name: "Spearphishing Attachment", tactics: ["Initial Access"] },
  "T1021.001": { name: "Remote Desktop Protocol", tactics: ["Lateral Movement"] }
};

export const scenarios = [
  {
    id: "aitm", icon: "A", name: "Adversary-in-the-Middle (AiTM)",
    short: "Credential phishing through an attacker-controlled proxy.",
    summary: "Explore actual ALSO policies that reduce exposure to identity compromise associated with AiTM phishing. Authentication strength, device conditions, and session controls have different scopes and limitations.",
    techniques: ["T1557", "T1566.002", "T1078.004", "T1550.004"],
    scope: "CA105 targets the administrative roles listed in the template, not every user. Generic MFA is not phishing-resistant. Conditional Access does not block delivery of phishing links or guarantee that a stolen session cookie cannot be replayed."
  },
  {
    id: "device-code", icon: "D", name: "Device Code Phishing",
    short: "Trick a user into authorizing an attacker-controlled session.",
    summary: "CA004 actually blocks device-code flow and authentication transfer in its JSON conditions. Other linked policies provide supporting identity controls, not an equivalent device-code block.",
    techniques: ["T1566.002", "T1528", "T1550.001", "T1078.004"],
    scope: "Review legitimate device-code clients and exclusions before enabling CA004. Token theft and token replay are separate ATT&CK behaviors; controls here do not revoke previously issued access tokens."
  },
  {
    id: "llmjacking", icon: "L", name: "LLMJacking",
    short: "Abuse cloud identities or tokens to consume hosted AI resources.",
    summary: "Existing ALSO identity policies can reduce compromised-account access to protected AI resources. AI agent policies are included only when their actual conditions match a documented mapping rule.",
    techniques: ["T1496.001", "T1078.004", "T1528", "T1550.001"],
    scope: "No Conditional Access template here is mapped as directly preventing compute hijacking. API keys, service principals, AI usage quotas, billing alerts, and provider-side controls require separate assessment."
  },
  {
    id: "cryptojacking", icon: "C", name: "Cryptojacking",
    short: "Hijack cloud compute for unauthorized cryptocurrency mining.",
    summary: "Map the identity entry point to the existing policy catalog without treating sign-in controls as workload or runtime protection.",
    techniques: ["T1496.001", "T1078.004"],
    scope: "Compute hijacking remains outside direct Conditional Access coverage. Use workload protection, least privilege, resource quotas, and spend monitoring in addition to these identity templates."
  },
  {
    id: "ransomware", icon: "R", name: "Ransomware",
    short: "Compromise identities, move laterally, and encrypt data for impact.",
    summary: "The mapped templates address cloud identity access associated with a ransomware attack path. They do not claim to prevent file encryption, phishing attachments, or arbitrary RDP lateral movement.",
    techniques: ["T1486", "T1078.004", "T1566.001", "T1021.001"],
    scope: "CA does not stop local encryption or govern arbitrary RDP sessions. Endpoint detection and response, segmentation, privileged access controls, and tested backups remain necessary."
  }
];

// Map verified JSON controls, never policy filenames alone.
export function mapPolicy(policy) {
  const grants = policy.grantControls;
  const conditions = policy.conditions;
  const session = policy.sessionControls;
  const controls = grants?.builtInControls ?? [];
  const mappings = [];
  const add = (ids, evidence, reason) => ids.forEach((id) => mappings.push({ id, evidence, reason }));
  const blocks = controls.includes("block");

  if (grants?.authenticationStrength?.id === "00000000-0000-0000-0000-000000000004") {
    add(["T1557", "T1078.004"], "Phishing-resistant authentication strength",
      "Requires the built-in phishing-resistant authentication strength for the template's targeted identities and resources. Does not protect every user or prevent all token theft.");
  }
  if (controls.includes("mfa")) {
    add(["T1078.004"], "MFA grant control",
      "Adds an authentication requirement to targeted sign-ins. Generic MFA can still be phished; this is supporting identity protection, not complete technique prevention.");
  }
  if (controls.includes("compliantDevice")) {
    add(["T1078.004"], "Compliant-device grant control",
      "Requires device compliance within the template's configured scope. Coverage depends on platform support, device registration, grant operator, and exclusions.");
  }
  if (blocks && conditions.authenticationFlows?.transferMethods?.includes("deviceCodeFlow")) {
    add(["T1528", "T1550.001", "T1078.004"], "Block + deviceCodeFlow condition",
      "Blocks new device-code authorizations within scope, reducing this token acquisition path. Does not stop every method of stealing or replaying an application token.");
  }
  if (blocks && conditions.clientAppTypes?.some((client) => ["exchangeActiveSync", "other"].includes(client))) {
    add(["T1110.003", "T1078.004"], "Block + legacy-client condition",
      "Denies configured legacy-client sign-ins, reducing legacy authentication access paths. Does not prevent password-spray attempts against other endpoints.");
  }
  if (blocks && [...(conditions.userRiskLevels ?? []), ...(conditions.signInRiskLevels ?? [])].length) {
    add(["T1078.004"], "Block + identity-risk condition",
      "Blocks sign-ins when the configured user or sign-in risk is detected. Detection-dependent; requires applicable Entra ID Protection licensing.");
  }
  if (blocks && conditions.locations) {
    add(["T1078.004"], "Block + location condition",
      "Restricts sign-ins using the configured included and excluded locations. Location alone is not proof of a trusted identity and may be bypassed by an attacker in an allowed location.");
  }
  if (session?.signInFrequency?.isEnabled || session?.persistentBrowser?.isEnabled) {
    add(["T1550.004"], "Sign-in frequency / browser persistence control",
      "Limits session persistence within supported flows. Supporting session hygiene only: not token binding, immediate revocation, or proof that cookie replay is blocked.");
  }
  return mappings;
}

export function matchesScenario(policy, scenario) {
  return mapPolicy(policy).some((mapping) => scenario.techniques.includes(mapping.id));
}

export function techniqueUrl(id) {
  return `https://attack.mitre.org/techniques/${id.replace(".", "/")}/`;
}
