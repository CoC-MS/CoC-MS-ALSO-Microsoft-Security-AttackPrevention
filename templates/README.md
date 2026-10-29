# Attack prevention packages

Choose one scenario folder. Each package contains the policies displayed by the mapper plus any import dependencies included with that scenario.

Additional documentation on preventing these attacks is available in the [ALSO Microsoft Security Attack Prevention Quick Tips (PDF)](../assets/ALSO_Microsoft_Security_Attack_Prevention_Quick_Tips.pdf): AiTM and token theft (page 1), password spraying and brute force (page 2), device code phishing (page 3), LLMjacking and cryptojacking (page 5), infostealers and ClickFix (page 6), and ransomware (page 7). The guide also covers OAuth consent attacks on page 4. Some measures require manual setup beyond these templates; independently verify licensing and prerequisites.

| Scenario | Package |
| --- | --- |
| AiTM phishing | [AITM](AITM) |
| Token theft | [TOKEN THEFT](TOKEN%20THEFT) |
| Password spraying and brute force | [PASSWORD SPRAYING-BRUTE FORCE](PASSWORD%20SPRAYING-BRUTE%20FORCE) |
| Device code phishing | [DEVICE CODE PHISHING](DEVICE%20CODE%20PHISHING) |
| LLMjacking and cryptojacking | [LLM-CRYPTOJACKING](LLM-CRYPTOJACKING) |
| Infostealers | [INFOSTEALERS](INFOSTEALERS) |
| Ransomware | [RANSOMWARE](RANSOMWARE) |
| ClickFix | [CLICKFIX](CLICKFIX) |

## Download and prepare

1. [Download this repository ZIP](https://github.com/CoC-MS/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/archive/refs/heads/main.zip) using **Code > Download ZIP**. Extract into a short OneDrive location, for example `OneDrive\AttackPrevention`. If extraction fails because of long paths, use a long-path-capable archive tool and verify every file was extracted.
2. Download the [Micke M Intune Management Tool](https://github.com/Micke-K/IntuneManagement), follow its current setup instructions, and launch `start.cmd` on Windows.
3. Sign in using the upper-right sign-in icon. Verify the destination tenant and required permissions. Have an authorized administrator review and approve API consent if required.
4. Review licensing, tenant-specific references, policy settings, exclusions, assignments, and dependencies. Scenario packages overlap: import a shared policy only once and inspect existing tenant objects to avoid duplicates.
5. In **Bulk > Import**, select the local `templates\<scenario>` folder, **not** the repository root or the entire `templates` directory. For ransomware, select the appropriate `WINDOWS 11` or `WINDOWS SERVER` subfolder for endpoint import. Select only the reviewed workload types and resources you intend to deploy.

## Layer 1: Conditional Access

Follow the [Conditional Access import guide](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/main/docs/public/how-to-import.md) and its [BP package example](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/tree/main/ALSO_CA_BP). Use the selected attack scenario folder here instead of the full BP package.

1. Review [CA prerequisites](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/main/docs/public/conditional-access-prerequisites.md) and [dependencies and import errors](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access/blob/main/docs/public/dependencies-and-import-errors.md).
2. Select **Conditional Access** and any required **Named Locations**. For CA106, also import or map the **Authentication Context**. Groups and `MigrationTable.json`, where included, are supporting objects and reference mappings, not additional protection policies.
3. Keep **Import assignments** unchecked initially. Review dependency-ID replacement and map source references to the correct destination objects. Do not reuse source-tenant group IDs blindly.
4. Set **Conditional Access state to OFF during import**. Inspect import results and verify in Entra that the policies are disabled.
5. Review emergency-access exclusions, users, groups, roles, resources, country lists, and authentication methods before a report-only evaluation and controlled pilot.

**BP is the tutorial example, not a licensing promise for every scenario policy.** E5-tagged risk policies and CA106 require their own licensing and prerequisites. Do not import the full BP package in addition to overlapping scenario policies.

### Conditional Access import video

Original tutorial from the Conditional Access repository:

https://github.com/user-attachments/assets/88e2ba12-e3d2-41fa-a1ec-5ff9bc2fea42

## Layer 2: Endpoint protection

Follow the [Windows import guide](https://github.com/CoC-MS/ALSO-Microsoft-Security-Windows/blob/main/docs/public/how-to-import.md) and [Windows prerequisites](https://github.com/CoC-MS/ALSO-Microsoft-Security-Windows/blob/main/docs/public/windows-prerequisites.md). Use the selected scenario's endpoint workload folders, rather than importing a second, overlapping Windows package.

1. Select only the required **Compliance policies** and **Settings Catalog** resources in **Bulk > Import**. Leave **Import assignments** unchecked.
2. Review the target OS on every policy. Token Theft, LLMjacking/Cryptojacking, Infostealers, and Ransomware include a separate `macOS` collection; AiTM and ClickFix do not include these macOS endpoint exports. For Mac preparation, consult the [macOS repository](https://github.com/CoC-MS/ALSO-Microsoft-Security-MacOS); for other platforms use [Android](https://github.com/CoC-MS/ALSO-Microsoft-Security-Android), [iOS / iPadOS](https://github.com/CoC-MS/ALSO-Microsoft-Security-iOSandiPadOS), or [Windows Server](https://github.com/CoC-MS/ALSO-Microsoft-Security-WindowsServer) guidance as appropriate.
3. Inspect import results and the resulting objects in Intune. Review update rings, Defender onboarding, application-control trust, ASR enforcement modes, and overlapping settings before assignment. Audit-only rules do not block.
4. Assign reviewed policies to a pilot group, validate deployment and user impact, then expand to the full appropriate scope. Maintain rollback and emergency-access procedures.

### macOS endpoint protection

Select the scenario's `macOS` folder as the import root. Review **SettingsCatalog**, **DeviceConfiguration**, and **Applications** separately and leave **Import assignments** unchecked. These 17 exports include Defender configuration, firewall/Gatekeeper, Defender permissions and extensions, the Defender app, and five Edge profiles.

**Tenant onboarding is not ready to deploy:** the MDE Auto Onboarding profile has `REPLACE_WITH_YOUR_TENANT_ORG_ID` and `REPLACE_WITH_YOUR_TENANT_ONBOARDING_INFO` placeholders inside its encoded payload. Replace this entire profile with a current macOS onboarding profile downloaded from your own Microsoft Defender portal before importing or assigning it. Do not deploy the supplied placeholder profile. Confirm the app is installed, required permissions are granted, and the device reports to your intended tenant.

The MDE Settings custom profile's malformed, unclosed `PayloadIdentifier` string was repaired in these copies. Review overlaps between this profile, the AV configuration, and MDE Config before assignment; do not enforce conflicting settings. Strong indicates the selected policy priority, not that an unassigned profile or an onboarding prerequisite independently prevents an attack.

### Endpoint policies import video

Original tutorial from the Windows repository:

https://github.com/user-attachments/assets/524c9224-fedf-45b6-a9d1-462480dd0b82

These instructions adapt the linked source guides to the scenario folders. Always follow the tool's current instructions and verify current Microsoft licensing and prerequisites.
