# MITRE ATT&CK to ALSO Microsoft Security Policy Template Mapper

Map **existing ALSO Security Conditional Access and endpoint templates** to well-known attack scenarios. Choose an attack, find policies categorized by CA or operating system, and open the source template. Ransomware includes the available Defender, antivirus, and firewall profiles from Windows, Windows Server, macOS, Linux, Android, and iOS / iPadOS; mobile setup policies are supporting controls, not desktop-style ransomware prevention. No policy builder or tenant connection.

Templates are a starting point: test in stages, then enforce across the full appropriate scope of users, resources, and devices. A small pilot only protects its assigned group. Review exclusions, emergency access, prerequisites, and policy conflicts.

**Live site:** [MITRE ATT&CK to ALSO Microsoft Security Policy Template Mapper](https://coc-ms.github.io/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/)

## Templates folder

The 	emplates/ folder holds one folder per attack scenario (AITM, TOKEN THEFT, PASSWORD SPRAYING-BRUTE FORCE, DEVICE CODE PHISHING, LLM-CRYPTOJACKING, INFOSTEALERS, RANSOMWARE, CLICKFIX). The site lists every template in the selected scenario's folder, with Conditional Access first (shown as 🟢 Strong, except for ransomware and ClickFix, which have no indicator yet) followed by endpoint protection. After adding or changing files, run `npm run sync:templates`. Tenant-specific exports (`Groups` and `MigrationTable.json`) are intentionally not published.

