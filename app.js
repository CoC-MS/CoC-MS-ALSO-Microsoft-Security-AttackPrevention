import templateData from "./data/templates.js";
import { scenarios, techniques } from "./mappings.mjs";
import { tiersForScenario, scenarioFolderUrl, indicators, preventionGuideUrl, preventionGuidePages } from "./templates.mjs";

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
  if (item.licenseNote) copy.append(element("p", "license-note", item.licenseNote));
  const meta = element("div", "policy-meta");
  meta.append(element("span", `indicator indicator-${item.strength}`, indicators[item.strength]));
  meta.append(element("span", "policy-code", item.code ?? item.platform ?? "Template"));
  copy.append(meta);
  row.append(copy);
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
    return element("span", "technique-tag", `${id} · ${techniques[id].name}`);
  }));
  const packageLink = externalLink("Get package ↗", scenarioFolderUrl(scenario.id));
  packageLink.className = "package-button";
  packageLink.setAttribute("aria-label", `Get ${scenario.name} package and import instructions (opens in a new tab)`);
  byId("package-actions").replaceChildren(packageLink);
  const guideLink = externalLink(`ALSO Security Quick Tips (PDF, page ${preventionGuidePages[scenario.id]}) ↗`, preventionGuideUrl(scenario.id));
  guideLink.setAttribute("aria-label", `Read prevention guidance for ${scenario.name} (PDF, opens in a new tab)`);
  byId("prevention-guide").replaceChildren(
    document.createTextNode("Additional documentation on how to prevent this type of attack can be found here: "),
    guideLink
  );

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
      layerSection.append(heading);
      layer.sections.forEach((section) => {
        const group = element("section", "policy-group");
        group.dataset.group = section.id;
        if (section.platform) group.dataset.platform = section.platform;
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
