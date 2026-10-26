# Attack prevention packages

Choose one scenario folder. Each package contains the policies displayed by the mapper plus any import dependencies included with that scenario.

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
2. Review the target OS on every policy. macOS profiles are not Windows profiles. For Mac preparation, consult the [macOS repository](https://github.com/CoC-MS/ALSO-Microsoft-Security-MacOS); for other platforms use [Android](https://github.com/CoC-MS/ALSO-Microsoft-Security-Android), [iOS / iPadOS](https://github.com/CoC-MS/ALSO-Microsoft-Security-iOSandiPadOS), or [Windows Server](https://github.com/CoC-MS/ALSO-Microsoft-Security-WindowsServer) guidance as appropriate.
3. Inspect import results and the resulting objects in Intune. Review update rings, Defender onboarding, application-control trust, ASR enforcement modes, and overlapping settings before assignment. Audit-only rules do not block.
4. Assign reviewed policies to a pilot group, validate deployment and user impact, then expand to the full appropriate scope. Maintain rollback and emergency-access procedures.

### Windows / Intune import video

Original tutorial from the Windows repository:

https://github.com/user-attachments/assets/524c9224-fedf-45b6-a9d1-462480dd0b82

These instructions adapt the linked source guides to the scenario folders. Always follow the tool's current instructions and verify current Microsoft licensing and prerequisites.
