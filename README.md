# ALSO Security Policy Navigator

An interactive navigator mapping **existing ALSO Conditional Access policy templates** to MITRE ATT&CK tactics and techniques. No policy builder or tenant connection.

**Live site:** [ALSO Security Policy Navigator](https://coc-ms.github.io/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/)

The policy inventory comes from [CoC-MS/ALSO-Microsoft-Security-Conditional-Access](https://github.com/CoC-MS/ALSO-Microsoft-Security-Conditional-Access), including Business Premium, E5, and E7 source packages. Each policy links to its original JSON at a pinned commit.

Source attribution and Apache/MIT license terms are retained in `data/SOURCE_LICENSE.txt`. The snapshot normalizes original exports by removing OData metadata and retaining the conditions and controls used by the navigator.

## Features

- Browse the five attack scenarios below, with policy-to-technique mapping evidence.
- Filter by source package and ATT&CK tactic.
- Search the complete policy catalog, including templates without a reviewed association.
- Inspect original template state, grant controls, conditions, targeting, and exclusions.
- Export all reviewed policy-technique associations as CSV.

## Scenarios covered

- Adversary-in-the-Middle (AiTM)
- Device Code Phishing
- LLMJacking
- Cryptojacking
- Ransomware

## Run locally

Serve the repository over HTTP, for example with `python -m http.server 8000`, then open `http://localhost:8000`. ES modules require HTTP rather than opening the file directly. The site has no build step or third-party runtime dependencies.

Run mapping checks with Node.js 24: `npm test`.

## Update the inventory

With Node.js 24 and an authenticated GitHub CLI, run `npm run sync`. This reads only public source policy exports, handles UTF-8 and UTF-16 JSON, and regenerates `data/policies.js` with the source commit and fetch date. Review the resulting changes and run `npm test` before publishing. No tenant credentials are used.

Mappings in `mappings.mjs` are based on actual JSON controls, not filename guesses. New or unsupported controls remain unmapped until a reviewed rule is added. Source state is preserved: disabled templates are not active protection.

## Publish

The Pages workflow publishes static site files on pushes to `main`. Configure the repository's Pages source as **GitHub Actions**. Source refresh is deliberate, not a browser-time GitHub API request.

## Methodology and limitations

These are qualitative associations, not a prevention score, an official MITRE endorsement, or a tenant assessment. Tactic counts represent distinct policy codes associated with a technique, not the percentage of a tactic covered. Policy variants across source packages remain separate templates.

Generic MFA is not treated as phishing-resistant. Device-code restrictions map to that specific token acquisition path, not all token theft. Session frequency and browser persistence are supporting hygiene, not token binding. No policy is mapped as directly preventing ransomware encryption, compute hijacking, phishing delivery, or arbitrary RDP lateral movement.

Validate tenant configuration, supported flows, grant operators, emergency access, exclusions, licensing, and current MITRE ATT&CK references before using a mapping for assurance or deployment. Original template content and licensing are maintained in the linked source repository.
