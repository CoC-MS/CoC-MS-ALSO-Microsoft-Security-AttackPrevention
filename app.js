import inventory from "./data/policies.js";
import { mapPolicy, scenarios, techniques, techniqueUrl } from "./mappings.mjs";

const byId = (id) => document.getElementById(id);
const mapped = inventory.policies.map((policy) => ({ ...policy, mappings: mapPolicy(policy) }));
const tacticNames = [
  "Reconnaissance", "Resource Development", "Initial Access", "Execution", "Persistence",
  "Privilege Escalation", "Defense Evasion", "Credential Access", "Discovery",
  "Lateral Movement", "Collection", "Command and Control", "Exfiltration", "Impact"
];
let selectedId = scenarios[0].id;
let selectedTactic = "";

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(text, href, className) {
  const link = element("a", className, text);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
}

function packagePolicies() {
  const packageName = byId("package-filter").value;
  return mapped.filter((policy) => packageName === "all" || policy.package === packageName);
}

function matchesTactic(id) {
  return !selectedTactic || techniques[id].tactics.includes(selectedTactic);
}

function scenarioMappings(policy, scenario) {
  return policy.mappings.filter((mapping) => scenario.techniques.includes(mapping.id) && matchesTactic(mapping.id));
}

function uniqueCodes(policies) {
  return new Set(policies.map((policy) => policy.code)).size;
}

function renderTactics() {
  const policies = packagePolicies();
  const grid = byId("tactic-grid");
  grid.replaceChildren();
  tacticNames.forEach((tactic) => {
    const count = uniqueCodes(policies.filter((policy) => policy.mappings.some((mapping) => techniques[mapping.id].tactics.includes(tactic))));
    const button = element("button", "tactic-button");
    button.type = "button";
    button.setAttribute("aria-pressed", String(selectedTactic === tactic));
    button.append(element("strong", "", tactic), element("span", "", `${count} policy ${count === 1 ? "code" : "codes"}`));
    button.addEventListener("click", () => {
      selectedTactic = selectedTactic === tactic ? "" : tactic;
      render();
      Array.from(grid.children).find((item) => item.firstChild.textContent === tactic)?.focus();
    });
    grid.append(button);
  });
  byId("active-filter").textContent = selectedTactic ? `Filtered by ${selectedTactic}` : "Showing all tactics";
}

function renderScenarios() {
  const query = byId("scenario-search").value.trim().toLowerCase();
  const policies = packagePolicies();
  const matching = scenarios.filter((scenario) => {
    const related = policies.filter((policy) => scenarioMappings(policy, scenario).length);
    const text = [scenario.name, scenario.short, ...related.map((policy) => policy.name),
      ...scenario.techniques.map((id) => `${id} ${techniques[id].name} ${techniques[id].tactics.join(" ")}`)].join(" ").toLowerCase();
    return text.includes(query) && scenario.techniques.some(matchesTactic);
  });
  const list = byId("scenario-list");
  list.replaceChildren();
  byId("visible-count").textContent = `${matching.length} scenarios`;
  byId("scenario-detail").hidden = !matching.length;
  if (!matching.length) {
    list.append(element("div", "empty-state", "No scenarios match these filters. Clear the search or select All tactics."));
    return;
  }
  if (!matching.some((scenario) => scenario.id === selectedId)) selectedId = matching[0].id;
  matching.forEach((scenario) => {
    const button = element("button", "scenario-button");
    button.type = "button";
    button.dataset.scenario = scenario.id;
    button.setAttribute("aria-pressed", String(scenario.id === selectedId));
    const icon = element("span", "scenario-icon", scenario.icon);
    icon.setAttribute("aria-hidden", "true");
    const copy = element("span", "scenario-copy");
    copy.append(element("span", "scenario-name", scenario.name), element("span", "scenario-desc", scenario.short));
    const count = uniqueCodes(policies.filter((policy) => scenarioMappings(policy, scenario).length));
    copy.append(element("span", "scenario-meta", `${scenario.techniques.filter(matchesTactic).length} techniques · ${count} policy codes`));
    button.append(icon, copy);
    button.addEventListener("click", () => {
      selectedId = scenario.id;
      renderScenarios();
      Array.from(list.children).find((item) => item.dataset.scenario === selectedId)?.focus();
    });
    list.append(button);
  });
  renderDetail(matching.find((scenario) => scenario.id === selectedId));
}

function policyCard(policy, relevantMappings = policy.mappings) {
  const card = element("div", "policy");
  card.dataset.policy = policy.code;
  const copy = element("div");
  const name = element("div", "policy-name");
  name.append(externalLink(policy.name, policy.url));
  const controls = policy.grantControls;
  const description = [
    policy.code,
    controls?.authenticationStrength?.displayName,
    ...(controls?.builtInControls ?? []),
    `source state: ${policy.state}`
  ].filter(Boolean).join(" · ");
  copy.append(name, element("div", "policy-description", description));
  const badge = element("span", "policy-badge", policy.package);
  card.append(copy, badge);

  const details = element("details");
  details.append(element("summary", "", relevantMappings.length ? "View mapping evidence and source targeting" : "No reviewed association · inspect source"));
  relevantMappings.forEach((mapping) => {
    const item = element("div", "mapping-item");
    item.append(externalLink(`${mapping.id} · ${techniques[mapping.id].name}`, techniqueUrl(mapping.id)));
    item.append(element("div", "", `Evidence: ${mapping.evidence}`), element("div", "", mapping.reason));
    details.append(item);
  });
  details.append(element("div", "mapping-item", "Source JSON below includes exclusions and grant operators. A disabled template provides no enforcement until deliberately configured and enabled in a tenant."));
  const json = element("pre");
  json.textContent = JSON.stringify({
    state: policy.state,
    conditions: policy.conditions,
    grantControls: policy.grantControls,
    sessionControls: policy.sessionControls
  }, null, 2);
  details.append(json);
  card.append(details);
  return card;
}

function renderDetail(scenario) {
  const policies = packagePolicies().filter((policy) => scenarioMappings(policy, scenario).length);
  byId("detail-category").textContent = "Existing policy coverage";
  byId("detail-name").textContent = scenario.name;
  byId("detail-summary").textContent = scenario.summary;
  const tag = byId("detail-tag");
  tag.className = "coverage-tag partial";
  tag.textContent = "Supporting controls";
  const ids = scenario.techniques.filter(matchesTactic);
  byId("technique-count").textContent = `${ids.length} in this view`;
  const list = byId("technique-list");
  list.replaceChildren();
  ids.forEach((id) => {
    const technique = techniques[id];
    const related = policies.filter((policy) => policy.mappings.some((mapping) => mapping.id === id));
    const row = element("div", "technique");
    const info = element("div", "technique-info");
    info.append(element("span", "technique-name", technique.name), externalLink(id, techniqueUrl(id), "technique-link"));
    info.append(element("div", "technique-tactic", technique.tactics.join(" · ")));
    const count = uniqueCodes(related);
    row.append(info, element("span", `impact ${count ? "partial" : "outside"}`, count ? `${count} policy codes` : "No CA association"));
    list.append(row);
  });
  byId("mapped-policy-count").textContent = `${policies.length} templates`;
  const policyList = byId("policy-list");
  policyList.replaceChildren(...policies.map((policy) => policyCard(policy, scenarioMappings(policy, scenario))));
  if (!policies.length) policyList.append(element("div", "empty-state", "No existing policies have a reviewed association for this scenario and tactic."));
  byId("scope-note").textContent = scenario.scope;
}

function renderCatalog() {
  const query = byId("policy-search").value.trim().toLowerCase();
  const policies = packagePolicies().filter((policy) => {
    const associations = policy.mappings.filter((mapping) => matchesTactic(mapping.id));
    const text = [policy.name, policy.code, JSON.stringify(policy.grantControls),
      ...policy.mappings.map((mapping) => `${mapping.id} ${techniques[mapping.id].name} ${mapping.evidence}`)].join(" ").toLowerCase();
    return text.includes(query) && (!selectedTactic || associations.length);
  });
  const list = byId("catalog-list");
  list.replaceChildren(...policies.map((policy) => policyCard(policy, policy.mappings.filter((mapping) => matchesTactic(mapping.id)))));
  if (!policies.length) list.append(element("div", "empty-state", "No templates match these filters."));
  byId("catalog-count").textContent = `${policies.length} templates · ${uniqueCodes(policies)} codes`;
}

function render() {
  const policies = packagePolicies();
  byId("policy-total").textContent = uniqueCodes(policies);
  byId("policy-note").textContent = `${policies.length} template files in selected package(s)`;
  byId("technique-total").textContent = new Set(policies.flatMap((policy) => policy.mappings.map((mapping) => mapping.id))).size;
  renderTactics();
  renderScenarios();
  renderCatalog();
}

byId("snapshot-date").textContent = inventory.fetchedAt.slice(0, 10);
const revision = externalLink(inventory.revision.slice(0, 7), `https://github.com/${inventory.repository}/tree/${inventory.revision}`);
byId("snapshot-revision").replaceChildren(document.createTextNode("Source revision "), revision);
byId("scenario-total").textContent = scenarios.length;
byId("package-filter").addEventListener("change", render);
byId("scenario-search").addEventListener("input", renderScenarios);
byId("policy-search").addEventListener("input", renderCatalog);
byId("clear-tactic").addEventListener("click", () => { selectedTactic = ""; render(); });
byId("export-button").addEventListener("click", () => {
  const rows = [["Package", "Policy code", "Policy name", "Source state", "Technique", "Tactics", "Evidence", "Rationale", "Source URL", "Source revision"]];
  // Export only reviewed policy-technique associations, never a scenario-policy cross product.
  mapped.forEach((policy) => policy.mappings.forEach((mapping) => rows.push([
    policy.package, policy.code, policy.name, policy.state, mapping.id,
    techniques[mapping.id].tactics.join("; "), mapping.evidence, mapping.reason, policy.url, inventory.revision
  ])));
  const quote = (value) => {
    const text = String(value);
    const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  };
  const csv = rows.map((row) => row.map(quote).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }));
  const link = element("a");
  link.href = url;
  link.download = "also-existing-ca-mitre-mappings.csv";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
render();
