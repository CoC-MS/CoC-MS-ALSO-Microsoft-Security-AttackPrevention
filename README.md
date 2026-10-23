# ALSO MITRE ATT&CK to CA Policy Mapper

Map **existing ALSO Security Conditional Access templates** to well-known attack scenarios. Choose an attack, find the relevant policies, and open the source template. No policy builder or tenant connection.

**Live site:** [ALSO MITRE ATT&CK to CA Policy Mapper](https://coc-ms.github.io/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/)

The policy inventory comes from [CoC-MS/ALSO-Microsoft-Security-Conditional-Access](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access), including Business Premium, E5, and E7 source packages. Each policy links to its original JSON at a pinned commit.

Source attribution and Apache/MIT license terms are retained in `data/SOURCE_LICENSE.txt`. The snapshot normalizes original exports by removing OData metadata and retaining the conditions and controls used by the mapper. The ALSO logo in `assets/also-logo.png` comes from the [ALSO Security Policy Templates Navigator](https://github.com/CoC-MS/ALSO-security-policy-templates-navigator/blob/main/public/also-logo.png).

## Features

- Six scenario buttons and one policy-package selector.
- Readable policy names grouped by protection type, with direct BP, E5, and E7 source links.
- One row per policy code; shared variants are not repeated.
- Short explanations of protection and limitations, without embedded JSON or a tactic dashboard.
- Published MFA research figures with their actual scope and source.

## Scenarios covered

| Scenario | Existing policy controls listed |
|---|---|
| AiTM phishing | Phishing-resistant MFA only |
| Token theft | Phishing-resistant MFA and compliant devices |
| Password spraying & brute force | MFA, legacy authentication blocks, country/location blocks |
| Device code phishing | Device-code/authentication-transfer blocks and MFA |
| Cryptojacking | Same phishing-resistant and compliant-device policies as token theft |
| LLMjacking | Same phishing-resistant and compliant-device policies as token theft |

## Run locally

Serve the repository over HTTP, for example with `python -m http.server 8000`, then open `http://localhost:8000`. ES modules require HTTP rather than opening the file directly. The site has no build step or third-party runtime dependencies.

Run mapping checks with Node.js 24: `npm test`.

## Update the inventory

With Node.js 24 and an authenticated GitHub CLI, run `npm run sync`. This reads only public source policy exports, handles UTF-8 and UTF-16 JSON, and regenerates `data/policies.js` with the source commit and fetch date. Review the resulting changes and run `npm test` before publishing. No tenant credentials are used.

Mappings in `mappings.mjs` use actual authentication strengths, grant controls, flow conditions, and location blocks, not filename guesses. Both generic MFA grants and built-in strengths that satisfy MFA are included in MFA lists. A location condition on an MFA policy is not classified as a location block. Source state is preserved: disabled templates are not active protection.

## Publish

The Pages workflow publishes static site files on pushes to `main`. Configure the repository's Pages source as **GitHub Actions**. Source refresh is deliberate, not a browser-time GitHub API request.

## Methodology and limitations

These are qualitative scenario recommendations, not a prevention score, an official MITRE endorsement, or a tenant assessment. ATT&CK links identify related attack behaviors; they do not claim that every recommended policy directly prevents every technique.

Generic MFA is not treated as phishing-resistant. Device-code blocking is the primary control for device-code phishing; MFA alone can be completed by a phished user. Device compliance is not token binding. User access policies do not directly prevent mining, unauthorized AI consumption, or API key abuse.

### Risk-reduction percentages

[Microsoft Research (2023)](https://www.microsoft.com/en-us/research/publication/how-effective-is-multifactor-authentication-at-deterring-cyberattacks/) reports **99.22%** lower account-compromise risk with MFA across its study population, and **98.56%** lower risk for accounts with known credential leaks, compared with no MFA. These are general observational research findings, not measured reductions for the ALSO templates or the six individual scenarios. The site therefore labels scenario-specific risk reduction **Not quantified**, rather than inventing percentages or reusing a general MFA number as an AiTM/token-theft prevention rate.

Validate tenant configuration, supported flows, grant operators, emergency access, exclusions, licensing, and current MITRE ATT&CK references before using a mapping for assurance or deployment. Original template content and licensing are maintained in the linked source repository.
