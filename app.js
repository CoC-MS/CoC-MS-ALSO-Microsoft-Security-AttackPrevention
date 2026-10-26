import templateData from "./data/templates.js";
import { scenarios, techniques, techniqueUrl } from "./mappings.mjs";
import { tiersForScenario, templateUrl, scenarioFolderUrl, indicators } from "./templates.mjs";

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

function policyRow(item) {
  const row = element("div", "policy");
  row.dataset.policy = item.path;
  row.dataset.strength = item.strength;
  const copy = element("div", "policy-copy");
  copy.append(element("h6", "policy-title", item.title), element("p", "policy-text", item.text));
  const meta = element("div", "policy-meta");
  meta.append(element("span", `indicator indicator-${item.strength}`, indicators[item.strength]));
  meta.append(element("span", "policy-code", item.code ?? item.platformFolder ?? "Template"));
  if (item.state) {
    const labels = { disabled: "Disabled template", enabled: "Enabled in source", enabledForReportingButNotEnforced: "Report-only in source" };
    meta.append(element("span", "state", labels[item.state] ?? item.state));
  }
  copy.append(meta);
  const links = element("div", "policy-links");
  const link = externalLink("Open template ↗", templateUrl(item.path));
  link.setAttribute("aria-label", `Open ${item.name} (opens in a new tab)`);
  link.title = item.name;
  links.append(link);
  row.append(copy, links);
  return row;
}

function renderScenario() {
  const scenario = scenarios.find((item) => item.id === selectedId);
  const tiers = tiersForScenario(templateData.templates, scenario.id);
  const layers = tiers.flatMap((tier) => tier.layers);
  const count = layers.reduce((sum, layer) => sum + layer.sections.reduce((inner, section) => inner + section.items.length, 0), 0);
  byId("scenario-name").textContent = scenario.name;
  byId("scenario-summary").textContent = scenario.summary;
  byId("policy-count").textContent = `${count} ${count === 1 ? "policy" : "policies"}`;

  const links = byId("technique-links");
  links.replaceChildren(...scenario.techniques.map((id) => {
    const link = externalLink(`${id} · ${techniques[id].name}`, techniqueUrl(id));
    link.title = `Related ATT&CK behavior · ${techniques[id].tactic}. Not a claim of full technique prevention.`;
    return link;
  }));
  links.append(externalLink("Open scenario folder ↗", scenarioFolderUrl(scenario.id)));

  const container = byId("policy-groups");
  container.replaceChildren();
  tiers.forEach((tier) => {
    const tierSection = element("section", `priority-tier priority-${tier.id}`);
    tierSection.dataset.strength = tier.id;
    tierSection.append(element("h3", "priority-title", tier.title));
    tier.layers.forEach((layer) => {
      const layerSection = element("section", "policy-category");
      layerSection.dataset.category = layer.id;
      const heading = element("h4", "category-title", layer.title);
      layerSection.append(heading, element("p", "category-description", layer.description));
      layer.sections.forEach((section) => {
        const group = element("section", "policy-group");
        group.dataset.group = section.id;
        const header = element("div", "group-header");
        header.append(element("h5", "", section.title), element("span", "", `${section.items.length} ${section.items.length === 1 ? "policy" : "policies"}`));
        const list = element("div", "policy-list");
        list.append(...section.items.map(policyRow));
        group.append(header, list);
        layerSection.append(group);
      });
      tierSection.append(layerSection);
    });
    container.append(tierSection);
  });
  byId("results-status").textContent = `${scenario.name}: ${count} policies.`;
}

renderNavigation();
renderScenario();
