# MITRE ATT&CK to ALSO Microsoft Security Policy Template Mapper

Map **existing ALSO Security Conditional Access templates** to well-known attack scenarios. Choose an attack, find the relevant policies, and open the source template. No policy builder or tenant connection.

**Live site:** [MITRE ATT&CK to ALSO Microsoft Security Policy Template Mapper](https://coc-ms.github.io/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/)

The policy inventory comes from [CoC-MS/ALSO-Microsoft-Security-Conditional-Access](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access), including Business Premium, E5, and E7 source packages. Each policy links to its original JSON at a pinned commit.

The cloud token-theft scenario distinguishes stealing application tokens ([T1528](https://attack.mitre.org/techniques/T1528/)) or browser cookies ([T1539](https://attack.mitre.org/techniques/T1539/)) from using them ([T1550.001](https://attack.mitre.org/techniques/T1550/001/) / [T1550.004](https://attack.mitre.org/techniques/T1550/004/)). Phishing-resistant MFA does not itself prevent replay of tokens already stolen by malware.

GitHub Pages publishes `npm run build` output from `_site`, using content-hashed scripts and styles to prevent mixed-version browser caches. Node.js 24 is required; no dependency installation is needed.
