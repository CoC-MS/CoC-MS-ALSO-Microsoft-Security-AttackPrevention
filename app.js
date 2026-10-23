import inventory from "./data/policies.js";
import { scenarios, techniques, techniqueUrl, groupPolicies, policyLabel } from "./mappings.mjs";

const byId = (id) => document.getElementById(id);
let selectedId = scenarios[0].id;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(text, href) {
  const link = element("a", "", text);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
}

function renderNavigation() {
  const list = byId("scenario-list");
  list.replaceChildren();
  scenarios.forEach((scenario) => {
    const button = element("button", "scenario-button");
    button.type = "button";
    button.dataset.scenario = scenario.id;
    button.setAttribute("aria-pressed", String(scenario.id === selectedId));
    button.setAttribute("aria-controls", "scenario-detail");
    button.title = scenario.short;
    const icon = element("span", "scenario-icon", scenario.icon);
    icon.setAttribute("aria-hidden", "true");
    button.append(icon, element("span", "", scenario.name));
    button.addEventListener("click", () => {
      selectedId = scenario.id;
      list.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderScenario();
    });
    list.append(button);
  });
}

function policyRow(variants, group) {
  const policy = variants[0];
  const row = element("div", "policy");
  row.dataset.policy = policy.code;
  const copy = element("div", "policy-copy");
  copy.append(element("h4", "policy-title", policyLabel(policy, group)));
  const meta = element("div", "policy-meta");
  meta.append(element("span", "policy-code", policy.code));
  const states = [...new Set(variants.map((variant) => variant.state))];
  const stateLabels = { disabled: "Disabled template", enabled: "Enabled in source", enabledForReportingButNotEnforced: "Report-only in source" };
  const state = element("span", "state", states.length === 1 ? stateLabels[states[0]] : "State varies by package");
  meta.append(state);
  copy.append(meta);
  const links = element("div", "policy-links");
  variants.forEach((variant) => {
    const link = externalLink(`${variant.package} ↗`, variant.url);
    link.setAttribute("aria-label", `Open ${variant.name} in ${variant.package} (opens in a new tab)`);
    link.title = variant.name;
    links.append(link);
  });
  row.append(copy, links);
  return row;
}

function renderScenario() {
  const scenario = scenarios.find((item) => item.id === selectedId);
  const groups = groupPolicies(inventory.policies, scenario);
  const count = new Set(groups.flatMap((group) => group.policies.map((variants) => variants[0].code))).size;
  byId("scenario-name").textContent = scenario.name;
  byId("scenario-summary").textContent = scenario.summary;
  byId("policy-count").textContent = `${count} ${count === 1 ? "policy" : "policies"}`;
  byId("protection-title").textContent = scenario.protection;
  byId("scenario-limitation").textContent = scenario.limitation;

  const links = byId("technique-links");
  links.replaceChildren(...scenario.techniques.map((id) => {
    const link = externalLink(`${id} · ${techniques[id].name}`, techniqueUrl(id));
    link.title = `Related ATT&CK behavior · ${techniques[id].tactic}. Not a claim of full technique prevention.`;
    return link;
  }));

  const container = byId("policy-groups");
  container.replaceChildren();
  groups.forEach((group) => {
    const section = element("section", "policy-group");
    section.dataset.group = group.id;
    const header = element("div", "group-header");
    header.append(element("h3", "", group.title), element("span", "", `${group.policies.length} ${group.policies.length === 1 ? "policy" : "policies"}`));
    section.append(header, element("p", "group-description", group.description));
    const list = element("div", "policy-list");
    list.append(...group.policies.map((variants) => policyRow(variants, group.id)));
    if (!group.policies.length) list.append(element("p", "empty", "No matching template in this package. Try All packages."));
    section.append(list);
    container.append(section);
  });
  byId("results-status").textContent = `${scenario.name}: ${count} policies.`;
}

renderNavigation();
renderScenario();
