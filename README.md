# MITRE ATT&CK to ALSO Microsoft Security Policy Template Mapper

Map **existing ALSO Security templates** to attack scenarios. Each scenario lists the policies in its own `templates/` folder, explains their purpose, and links to the repository copies. No policy builder or tenant connection.

**Strong** policies appear before **Supporting** controls. Conditional Access comes before endpoint protection within each priority tier. Indicators express scenario-specific deployment priority, not measured effectiveness or guaranteed prevention.

Templates are a starting point: test in stages, then enforce across the full appropriate scope. Review exclusions, emergency access, prerequisites, and policy conflicts.

**Live site:** [Open the mapper](https://coc-ms.github.io/CoC-MS-ALSO-Microsoft-Security-AttackPrevention/)

After adding or changing templates, run `npm run sync:templates`. Groups and migration tables remain in the scenario folders as import support files, not standalone protection policies in the mapper.
