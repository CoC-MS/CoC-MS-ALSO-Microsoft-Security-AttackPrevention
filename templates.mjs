// Maps each attack scenario to its templates/ folder and explains every template.
export const scenarioFolders = {
  aitm: "AITM",
  "token-theft": "TOKEN THEFT",
  "password-attacks": "PASSWORD SPRAYING-BRUTE FORCE",
  "device-code": "DEVICE CODE PHISHING",
  cryptojacking: "LLM-CRYPTOJACKING",
  llmjacking: "LLM-CRYPTOJACKING",
  infostealers: "INFOSTEALERS",
  ransomware: "RANSOMWARE",
  clickfix: "CLICKFIX"
};

export const indicators = { strong: "🟢 Strong", supporting: "🔵 Supporting" };

export const preventionGuidePages = {
  aitm: 1, "token-theft": 1, "password-attacks": 2, "device-code": 3,
  cryptojacking: 5, llmjacking: 5, infostealers: 6, clickfix: 6, ransomware: 7
};

export function preventionGuideUrl(scenarioId) {
  return `./assets/ALSO_Microsoft_Security_Attack_Prevention_Quick_Tips.pdf#page=${preventionGuidePages[scenarioId]}`;
}

const identityScenarios = new Set(["aitm", "token-theft", "cryptojacking", "llmjacking"]);
const endpointScenarios = new Set(["token-theft", "clickfix", "infostealers"]);

export function templateStrength(template, scenarioId) {
  if (["cryptojacking", "llmjacking"].includes(scenarioId)) scenarioId = "token-theft";
  if (scenarioId === "ransomware") return "strong";
  if (template.platform === "macOS" && ["SettingsCatalog", "DeviceConfiguration", "Applications"].includes(template.section)
    && ["token-theft", "infostealers"].includes(scenarioId)) return "strong";
  if (template.section === "ConditionalAccess") {
    const controls = template.controls ?? [];
    if (identityScenarios.has(scenarioId) && (controls.some((control) => ["phishing", "device"].includes(control))
      || /\bCA(?:100|109|204)\b/.test(template.name))) return "strong";
    if (scenarioId === "device-code" && controls.some((control) => ["flow", "mfa"].includes(control))) return "strong";
    if (scenarioId === "password-attacks" && controls.some((control) => ["mfa", "legacy", "location"].includes(control))) return "strong";
  }
  if (template.section === "SettingsCatalog" && endpointScenarios.has(scenarioId)) {
    if (/ASR Rules\s*\(L2\)|Attack Surface Reduction.*\(L2\)|WDAC|AppControl|Auto Enrollment to MDE|AV Configuration|Firewall/i.test(template.name)) return "strong";
    if (["clickfix", "infostealers"].includes(scenarioId) && /Run Command.*Disable/i.test(template.name)) return "strong";
    if (["token-theft", "infostealers"].includes(scenarioId) && /Edge|BitLocker|Defender Antivirus Updates|LAPS/i.test(template.name)) return "strong";
  }
  return "supporting";
}

export const layers = [
  {
    id: "ca", title: "Layer 1 · Conditional Access",
    description: "Microsoft Entra sign-in rules and their prerequisites. Listed before endpoint policies within each priority tier.",
    sections: ["ConditionalAccess", "NamedLocations", "AuthenticationContext"]
  },
  {
    id: "endpoint", title: "Layer 2 · Endpoint protection",
    description: "Device configuration and compliance that support access requirements and harden endpoints.",
    sections: ["CompliancePolicies", "SettingsCatalog", "DeviceConfiguration", "Applications"]
  }
];

const sectionTitles = {
  ConditionalAccess: "Conditional Access policies",
  NamedLocations: "Named locations used by Conditional Access",
  AuthenticationContext: "Authentication contexts used by Conditional Access",
  CompliancePolicies: "Device compliance policies (feed the compliant-device CA policies)",
  SettingsCatalog: "Endpoint configuration profiles",
  DeviceConfiguration: "Device configuration profiles",
  Applications: "Endpoint applications"
};
export const sectionTitle = (section) => sectionTitles[section] ?? section;
export const endpointPlatforms = ["Windows", "Windows Server", "macOS", "Linux", "Android", "iOS / iPadOS"];

const caInfo = {
  CA000: ["All users · require MFA", "Requires multifactor authentication for every user, so a guessed or leaked password alone cannot sign in."],
  CA001: ["All users · block outside allowed countries", "Blocks sign-ins from countries that are not on the allowed list, shrinking the area attackers can spray or brute force from."],
  CA002: ["All users · block legacy authentication", "Blocks legacy protocols that cannot do MFA, closing a password-only sign-in route."],
  CA004: ["All users · block device code & authentication transfer", "Blocks the device code and authentication transfer flows that device-code phishing abuses. Check legitimate device-code clients first."],
  CA100: ["Administrators · require MFA for admin portals", "Admins must complete MFA to reach Microsoft admin portals."],
  CA102: ["Administrators · sign-in frequency", "Forces admins to sign in again regularly, shortening the life of a stolen admin session."],
  CA103: ["Administrators · no persistent browser session", "Stops browsers from keeping admins signed in, reducing the value of stolen session cookies."],
  CA105: ["Administrators · require phishing-resistant MFA", "Admins must use FIDO2, Windows Hello for Business, or certificate-based MFA, which an AiTM proxy cannot relay."],
  CA106: ["Tier 0 administrators · phishing-resistant MFA on role activation", "Privileged role activation requires phishing-resistant MFA via the Tier 0 authentication context."],
  CA107: ["Administrators · compliant Windows device", "Admins can only access resources from an Intune-compliant Windows device."],
  CA108: ["Administrators · compliant macOS device", "Admins can only access resources from an Intune-compliant Mac."],
  CA109: ["Administrators · block unknown platforms", "Blocks admin sign-ins from device platforms that are not recognized, closing a gap in the platform-based device policies."],
  CA110: ["Administrators · compliant iOS / Android device", "Admins on mobile can only access resources from a compliant iOS or Android device."],
  CA201: ["Internal users · block high-risk users", "Blocks users Entra ID Protection rates as high risk, for example after leaked credentials or token anomalies."],
  CA202: ["Internal users · sign-in frequency on unmanaged devices", "Forces re-authentication on unmanaged Windows and macOS devices so stolen sessions expire sooner."],
  CA204: ["Internal users · block unknown platforms", "Blocks sign-ins from unrecognized device platforms."],
  CA205: ["Internal users · compliant Windows device", "Internal users can only access resources from an Intune-compliant Windows device."],
  CA206: ["Internal users · no persistent browser session", "Stops browsers from keeping users signed in, reducing the value of stolen session cookies."],
  CA208: ["Internal users · compliant macOS device", "Internal users can only access resources from an Intune-compliant Mac."],
  CA210: ["Internal users · block high-risk sign-ins", "Blocks sign-ins that Entra ID Protection rates as high risk."],
  CA211: ["Internal users · compliant iOS / Android device", "Internal users on mobile can only access resources from a compliant iOS or Android device."],
  CA300: ["Service accounts · require MFA", "Requires MFA for service accounts that sign in interactively."],
  CA301: ["Service accounts · block untrusted locations", "Service accounts can only sign in from approved locations."]
};

const endpointRules = [
  [/macOS.*AV.*Configuration/i, "macOS · Defender Antivirus configuration", "Configures Defender Antivirus settings for managed Macs. Review the enforcement settings and test for conflicts before assignment."],
  [/macOS.*Antivirus.*MDE Config/i, "macOS · Defender for Endpoint configuration", "Configures Defender for Endpoint protections on Mac. Deploy the Defender app and required permissions alongside this profile."],
  [/macOS.*Firewall.*Gatekeeper/i, "macOS · Firewall and Gatekeeper", "Configures macOS firewall and Gatekeeper settings to restrict network exposure and untrusted applications."],
  [/macOS.*MDE System Extensions/i, "macOS · Defender system extensions", "Allows the Microsoft Defender system extensions needed for endpoint and network protection."],
  [/macOS.*MDE Accessibility/i, "macOS · Defender accessibility permissions", "Configures accessibility permissions for Defender components. Review permissions before deployment."],
  [/macOS.*MDE Auto Onboarding/i, "macOS · Defender tenant onboarding", "Connects Defender to your organization. Replace the placeholder profile with your own tenant onboarding package from Microsoft Defender before import; this template cannot onboard devices as supplied."],
  [/macOS.*MDE Background Services/i, "macOS · Defender background services", "Allows Defender background services to run so endpoint protection remains available."],
  [/macOS.*MDE Full Disk Access/i, "macOS · Defender full disk access", "Grants Defender components the full disk access required to inspect protected files."],
  [/macOS.*MDE Network Filter/i, "macOS · Defender network filter", "Configures the Defender network filter used by network protection on Mac."],
  [/macOS.*MDE Notifications/i, "macOS · Defender notifications", "Allows Defender alerts and notifications so users can see protection and threat messages."],
  [/macOS.*MDE Settings/i, "macOS · Defender protection settings", "Configures real-time antivirus, cloud protection, automatic definition updates, and tamper protection."],
  [/Microsoft Defender for Endpoint \(macOS\)/i, "macOS · Microsoft Defender for Endpoint app", "Deploys the Defender application to managed Macs. Also deploy its required permissions and your own tenant onboarding profile."],
  [/macOS.*Edge.*Password Management/i, "macOS · Microsoft Edge password management", "Controls browser password storage to reduce credentials available to infostealers on Mac."],
  [/macOS.*Edge.*Profiles, Sign-In and Sync/i, "macOS · Microsoft Edge profiles, sign-in and sync", "Controls Edge profiles, sign-in, and synchronization of browser data on Mac."],
  [/macOS.*Edge.*Updates/i, "macOS · Microsoft Edge updates", "Configures Edge update settings to keep the managed Mac browser patched."],
  [/macOS.*Edge.*Extensions/i, "macOS · Microsoft Edge extensions", "Controls installed Edge extensions to limit untrusted browser code on Mac."],
  [/macOS.*Edge.*Security/i, "macOS · Microsoft Edge security", "Configures Edge browser protections against malicious sites and downloads on Mac."],
  [/Run Command/i, "Windows · Disable the Run dialog (Win+R)", "Disables Win+R, a common place ClickFix lures tell users to paste commands."],
  [/Attack Surface Reduction.*L2|ASR Rules \(L2\)/i, "Windows · Attack surface reduction (L2)", "Blocks, warns on, or audits risky behavior such as credential theft from LSASS and obfuscated scripts. Validate in audit mode before enforcing."],
  [/Windows Server.*ASR|ASR.*Server/i, "Windows Server · Attack surface reduction", "Pre-configured ASR rules in block and audit mode for servers. Review audit results before enforcing."],
  [/WDAC|AppControl/i, "Windows · App Control (WDAC) managed installer", "Restricts execution using App Control trust rules and managed-installer trust. Review allowed applications and enforcement mode; it does not guarantee that all malware is blocked."],
  [/Auto Enrollment to MDE/i, "Windows · Defender for Endpoint auto-enrollment", "Automatically onboards Windows devices to Microsoft Defender for Endpoint so detection and device risk are available."],
  [/BitLocker/i, "Windows · BitLocker OS disk encryption", "Encrypts the OS drive so data on a lost or stolen device cannot be read."],
  [/Server.*Firewall|Firewall.*Server/i, "Windows Server · Firewall configuration", "Turns on Windows Firewall for all profiles with restrictive defaults to limit lateral movement. Verify required server ports first."],
  [/Windows Firewall|Firewall Configuration/i, "Windows · Firewall configuration", "Turns on Windows Firewall to limit inbound connections and lateral movement."],
  [/Defender Antivirus Updates/i, "Windows · Defender Antivirus updates", "Controls how quickly Defender Antivirus platform and signature updates roll out (ring-based)."],
  [/Server.*AV Configuration|Antivirus.*Server/i, "Windows Server · Defender Antivirus configuration", "Enables tamper protection, cloud protection, and network protection for servers."],
  [/AV Configuration/i, "Windows · Defender Antivirus configuration", "Enables real-time protection, cloud protection, and network protection in block mode."],
  [/Edge.*Password Management/i, "Windows · Microsoft Edge password management", "Controls saved passwords in Edge so credentials are not left in the browser for info-stealers to harvest."],
  [/Edge.*Profiles, Sign-In and Sync/i, "Windows · Microsoft Edge profiles, sign-in and sync", "Controls browser profiles, automatic sign-in and sync of data that attackers could steal."],
  [/Edge.*Security/i, "Windows · Microsoft Edge security", "Hardens Edge with SmartScreen and download protections against malicious sites and files."],
  [/Edge.*Updates/i, "Windows · Microsoft Edge updates", "Keeps Edge patched so browser exploits have less time to work."],
  [/Edge.*User Experience/i, "Windows · Microsoft Edge user experience", "Sets Edge behavior and prompts to safe defaults for users."],
  [/LAPS/i, "Windows · LAPS configuration", "Rotates and protects local administrator passwords so one stolen credential cannot move to other devices."]
];

const complianceRules = [
  [/Android.*(Defender|MDE)|Android.*risk/i, "Android · Defender risk requirement", "Marks the device non-compliant when Defender reports a risk level above the allowed value."],
  [/Android.*Health/i, "Android · Device health", "Requires an uncompromised device (no root, integrity checks) to be compliant."],
  [/Android.*(Properties|Minimum OS)/i, "Android · Minimum OS version", "Requires a minimum, supported Android version."],
  [/Android.*(Encryption)/i, "Android · Encryption", "Requires device encryption."],
  [/Android.*(Password|System Security)/i, "Android · Password and system security", "Requires a screen lock and basic system security settings."],
  [/Android.*Integrity/i, "Android · Intune app integrity", "Requires the Intune app runtime to be intact."],
  [/iOS.*(Risk|MDE)/i, "iOS / iPadOS · Defender risk requirement", "Marks the device non-compliant when Defender reports a risk level above the allowed value."],
  [/iOS.*Jailbroken/i, "iOS / iPadOS · Jailbreak and threat status", "Requires a non-jailbroken device with no active threat."],
  [/iOS.*PIN/i, "iOS / iPadOS · PIN and screen lock", "Requires a PIN and screen lock."],
  [/iOS.*(Device properties|OS)/i, "iOS / iPadOS · Minimum OS version", "Requires a minimum, supported iOS version."],
  [/MacOS.*Integrity/i, "macOS · System Integrity Protection", "Requires System Integrity Protection to be on."],
  [/MacOS.*Minimum OS/i, "macOS · Minimum OS version", "Requires a minimum, supported macOS version."],
  [/MacOS.*Password and Encryption/i, "macOS · Password, encryption and firewall", "Requires disk encryption, a password, and the firewall."],
  [/MacOS.*(App Store|Gatekeeper)/i, "macOS · Gatekeeper", "Only allows the Mac App Store and identified developers."],
  [/Windows.*Defender for Endpoint|Windows.*Risk Score/i, "Windows · Defender device risk", "Marks the device non-compliant when Defender for Endpoint reports a risk level above the allowed value."],
  [/Windows.*Health/i, "Windows · Device health", "Requires BitLocker, Secure Boot and code integrity on the device."],
  [/Windows.*Security/i, "Windows · Device security", "Requires firewall, antivirus, and anti-spyware to be on."],
  [/Windows.*Password/i, "Windows · Password", "Requires a password on the device."]
];

export function explainTemplate(template) {
  const fallback = [template.name, template.description || "Template from the ALSO Security repository."];
  if (template.section === "ConditionalAccess") {
    const code = template.name.match(/CA\d+/)?.[0];
    const [title, text] = caInfo[code] ?? fallback;
    const licenseNote = ["CA106", "CA201", "CA210"].includes(code)
      ? "Requires Microsoft Entra ID P2 for the users covered by this policy. Entra ID P1 / Microsoft 365 Business Premium alone is not sufficient."
      : undefined;
    return { title, text, code, state: template.state, licenseNote };
  }
  if (template.section === "NamedLocations") {
    return { title: template.name, text: "Country list that the location-based Conditional Access policies allow or block." };
  }
  if (template.section === "AuthenticationContext") {
    return { title: template.name, text: "Authentication context for Tier 0 admins, used by CA106 to require phishing-resistant MFA when a privileged role is activated." };
  }
  const rules = template.section === "CompliancePolicies" ? complianceRules : endpointRules;
  const [, title, text] = rules.find(([pattern]) => pattern.test(template.name)) ?? [null, ...fallback];
  return { title, text };
}

export function templatesForScenario(templates, scenarioId) {
  const folder = scenarioFolders[scenarioId];
  return templates.filter((template) => template.folder === folder);
}

export function layersForScenario(templates, scenarioId) {
  const own = templatesForScenario(templates, scenarioId);
  return layers.map((layer) => ({
    ...layer,
    sections: (layer.id === "endpoint" ? endpointPlatforms : [null]).flatMap((platform) => layer.sections.map((section) => ({
      id: platform ? `${section}-${platform}` : section,
      platform,
      title: platform ? `${platform} · ${sectionTitle(section)}` : sectionTitle(section),
      items: own.filter((template) => template.section === section && (!platform || template.platform === platform))
        .map((template) => ({ ...template, ...explainTemplate(template), strength: templateStrength(template, scenarioId) }))
        .sort((a, b) => Number(b.strength === "strong") - Number(a.strength === "strong") || a.name.localeCompare(b.name))
    }))).filter((section) => section.items.length)
  })).filter((layer) => layer.sections.length);
}

export function tiersForScenario(templates, scenarioId) {
  const scenarioLayers = layersForScenario(templates, scenarioId);
  return Object.entries(indicators).map(([id, title]) => ({
    id, title,
    layers: scenarioLayers.map((layer) => ({
      ...layer,
      sections: layer.sections.map((section) => ({
        ...section, items: section.items.filter((item) => item.strength === id)
      })).filter((section) => section.items.length)
    })).filter((layer) => layer.sections.length)
  })).filter((tier) => tier.layers.length);
}

export function scenarioFolderUrl(scenarioId) {
  const folder = scenarioFolders[scenarioId];
  if (!folder) throw new Error(`Unknown scenario: ${scenarioId}`);
  return `https://github.com/CoC-MS/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/tree/main/templates/${encodeURIComponent(folder)}`;
}

export function templateUrl(path) {
  return `https://github.com/CoC-MS/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/blob/main/templates/${path.split("/").map(encodeURIComponent).join("/")}`;
}
