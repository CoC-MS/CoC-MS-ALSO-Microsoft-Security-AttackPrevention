import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import inventory from "../data/policies.js";
import { policyGroups, matchesScenario, scenarioPolicies, groupPolicies, scenarios, techniques, techniqueUrl, research } from "../mappings.mjs";

const scenario = (id) => scenarios.find((item) => item.id === id);
const codes = (id, packageName = "all") => [...new Set(scenarioPolicies(inventory.policies, scenario(id), packageName).map((policy) => policy.code))].sort();
const find = (code, packageName = "BP") => {
  const policy = inventory.policies.find((item) => item.code === code && item.package === packageName);
  assert.ok(policy, `Missing source template ${code} in ${packageName}`);
  return policy;
};

test("source inventory has pinned policy links and preserves all three packages", () => {
  assert.match(inventory.revision, /^[a-f0-9]{40}$/);
  assert.equal(new Set(inventory.policies.map((policy) => policy.key)).size, inventory.policies.length);
  assert.deepEqual([...new Set(inventory.policies.map((policy) => policy.package))].sort(), ["BP", "E5", "E7"]);
  for (const policy of inventory.policies) {
    assert.ok(policy.name && policy.code && policy.conditions);
    assert.equal(policy.url, `https://github.com/${inventory.repository}/blob/${inventory.revision}/${policy.key}`);
  }
});

test("eight scenarios include ransomware and ClickFix", () => {
  assert.deepEqual(scenarios.map((item) => item.id), ["aitm", "token-theft", "password-attacks", "device-code", "cryptojacking", "llmjacking", "infostealers", "ransomware", "clickfix"]);
  assert.ok(scenarios.every((item) => item.techniques.every((id) => techniques[id])));
});

test("cloud token theft distinguishes token and cookie acquisition from subsequent use", () => {
  const theft = scenario("token-theft");
  assert.deepEqual(theft.techniques, ["T1528", "T1539", "T1550.001", "T1550.004"]);
  assert.equal(techniques["T1528"].name, "Steal Application Access Token");
  assert.equal(techniques["T1539"].name, "Steal Web Session Cookie");
  assert.equal(techniques["T1550.001"].name, "Application Access Token");
  assert.equal(techniques["T1550.004"].name, "Web Session Cookie");
  assert.equal(techniqueUrl("T1550.001"), "https://attack.mitre.org/techniques/T1550/001/");
  assert.equal(techniqueUrl("T1550.004"), "https://attack.mitre.org/techniques/T1550/004/");
  assert.ok(!theft.techniques.includes("T1134.001"));
  assert.match(theft.short, /Malware steals Entra cloud tokens/);
  assert.match(theft.summary, /malware, compromised endpoints, browser data, or abused refresh tokens/);
  assert.match(theft.limitation, /not tokens already stolen by malware/);
});

test("device-code phishing retains the requested spearphishing link reference", () => {
  assert.deepEqual(scenario("device-code").techniques, ["T1566.002"]);
  assert.equal(techniques["T1566.002"].name, "Spearphishing Link");
  assert.equal(techniqueUrl("T1566.002"), "https://attack.mitre.org/techniques/T1566/002/");
});

test("AiTM lists all phishing-resistant and compliant-device policies without generic MFA", () => {
  assert.deepEqual(scenario("aitm").groups, ["phishing", "device"]);
  const expected = inventory.policies.filter((policy) =>
    policy.grantControls?.authenticationStrength?.id === "00000000-0000-0000-0000-000000000004"
    || policy.grantControls?.builtInControls?.includes("compliantDevice"));
  assert.deepEqual(scenarioPolicies(inventory.policies, scenario("aitm")), expected);
  assert.deepEqual(codes("aitm"), codes("token-theft"));
  const phishing = groupPolicies(inventory.policies, scenario("aitm")).find((group) => group.id === "phishing");
  for (const policy of phishing.policies.flat()) {
    assert.equal(policy.grantControls.authenticationStrength.id, "00000000-0000-0000-0000-000000000004");
  }
  assert.ok(codes("aitm").includes("E5-ALSO-CA106"));
  assert.ok(codes("aitm").includes("A365-ALSO-CA503"));
  assert.ok(!matchesScenario(find("BP-ALSO-CA000"), scenario("aitm")));
});

test("token theft contains exactly compliant-device and phishing-resistant templates", () => {
  assert.deepEqual(scenario("token-theft").groups, ["phishing", "device", "endpoint-privilege", "endpoint-av", "endpoint-firewall", "endpoint-defender"]);
  assert.deepEqual(codes("token-theft", "BP"), [
    "BP-ALSO-CA105", "BP-ALSO-CA107", "BP-ALSO-CA108", "BP-ALSO-CA110",
    "BP-ALSO-CA205", "BP-ALSO-CA208", "BP-ALSO-CA211"
  ]);
  assert.ok(!codes("token-theft").includes("BP-ALSO-CA000"));
  assert.ok(!codes("token-theft").includes("BP-ALSO-CA004"));
  assert.ok(codes("token-theft", "E7").includes("A365-ALSO-CA503"));
});

test("password attacks contain MFA, legacy blocks, and actual location blocks", () => {
  assert.deepEqual(scenario("password-attacks").groups, ["mfa", "legacy", "location"]);
  const policies = codes("password-attacks");
  for (const code of ["BP-ALSO-CA000", "BP-ALSO-CA100", "BP-ALSO-CA002", "BP-ALSO-CA001", "BP-ALSO-CA301", "A365-ALSO-CA505"]) assert.ok(policies.includes(code), code);
  assert.ok(policyGroups(find("BP-ALSO-CA100")).includes("mfa"), "MFA strength must count as MFA");
  assert.ok(!policyGroups(find("BP-ALSO-CA101")).includes("location"), "A location condition without a block must not become a location block");
  assert.ok(!policies.includes("BP-ALSO-CA107"));
});

test("device-code phishing contains flow blocking and MFA, not device compliance", () => {
  assert.deepEqual(scenario("device-code").groups, ["flow", "mfa"]);
  assert.ok(codes("device-code").includes("BP-ALSO-CA004"));
  assert.ok(codes("device-code").includes("BP-ALSO-CA000"));
  assert.ok(codes("device-code").includes("BP-ALSO-CA100"));
  assert.ok(!codes("device-code").includes("BP-ALSO-CA107"));
  const policy = find("BP-ALSO-CA004");
  assert.ok(policy.conditions.authenticationFlows.transferMethods.includes("deviceCodeFlow"));
  assert.ok(policy.conditions.authenticationFlows.transferMethods.includes("authenticationTransfer"));
});

test("cryptojacking and LLMjacking reuse precisely the token theft / AiTM controls", () => {
  assert.deepEqual(codes("cryptojacking"), codes("token-theft"));
  assert.deepEqual(codes("llmjacking"), codes("token-theft"));
});

test("classification uses real controls and supports authentication-transfer-only blocks", () => {
  const policy = { ...find("BP-ALSO-CA004"), grantControls: null, conditions: {}, sessionControls: null };
  assert.deepEqual(policyGroups(policy), []);
  assert.deepEqual(policyGroups({ grantControls: { builtInControls: ["block"] }, conditions: { authenticationFlows: { transferMethods: "authenticationTransfer" } } }), ["flow"]);
  assert.deepEqual(policyGroups({ grantControls: { builtInControls: ["block"] }, conditions: { authenticationFlows: { transferMethods: "notdeviceCodeFlow" } } }), []);
});

test("package filtering deduplicates codes but retains per-package source links", () => {
  const groups = groupPolicies(inventory.policies, scenario("aitm"));
  assert.equal(groups[0].policies.length, 2);
  const baseline = groups[0].policies.find((variants) => variants[0].code === "BP-ALSO-CA105");
  assert.deepEqual(baseline.map((policy) => policy.package), ["BP", "E5", "E7"]);
  assert.equal(groupPolicies(inventory.policies, scenario("aitm"), "BP")[0].policies.length, 1);
  assert.ok(scenarioPolicies(inventory.policies, scenario("token-theft"), "E5").every((policy) => policy.package === "E5"));
});

test("research percentages are general MFA findings, never per-scenario scores", () => {
  assert.equal(research.populationReduction, "99.22%");
  assert.equal(research.leakedCredentialReduction, "98.56%");
  assert.match(research.url, /^https:\/\/www\.microsoft\.com\/en-us\/research\//);
  assert.match(research.scope, /not measured protection/);
  assert.ok(scenarios.every((item) => !/\d+%/.test(item.riskNote ?? "")));
});

test("simplified UI has no JSON panels or tactic dashboard and includes local ALSO logo", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const app = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.ok(!html.includes("tactic-grid"));
  assert.ok(!html.includes("catalog-list"));
  assert.ok(!app.includes("JSON.stringify"));
  assert.match(html, /assets\/also-logo\.png/);
  const logo = await readFile(new URL("../assets/also-logo.png", import.meta.url));
  assert.deepEqual([...logo.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(techniqueUrl("T1528"), "https://attack.mitre.org/techniques/T1528/");
  assert.equal(find("BP-ALSO-CA105").state, "disabled");
});

test("site omits risk messages, template disclaimer, and research percentage section", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const app = await readFile(new URL("../app.js", import.meta.url), "utf8");
  for (const removed of ["risk-description", "risk-title", "risk-note", "template-note", "research-title", "population-reduction", "leaked-reduction", "research-scope", "research-link", "package-filter", "package-control", "snapshot-info", "group-help", "Why this helps", "Source licenses", "ALSO logo source", "Existing policies. Clear protection.", "Browse security templates"]) {
    assert.ok(!html.includes(removed), `Removed section remains in HTML: ${removed}`);
    assert.ok(!app.includes(removed), `Removed section remains in rendering code: ${removed}`);
  }
});

test("deployment guidance distinguishes broad appropriate scope from a limited pilot", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /class="scope-note"/);
  for (const text of ["good starting point", "enabling and enforcing", "all intended users, resources, and devices",
    "not just a small pilot group", "Test and roll out in stages", "admin-only policies targeted to admins", "emergency-access accounts"]) {
    assert.ok(html.includes(text), text);
  }
});

test("scenario descriptions use the supplied ALSO Security Quick Tips attack overviews", () => {
  const expected = {
    aitm: ["proxies the user's sign-in", "credentials, MFA responses, and session tokens"],
    "token-theft": ["malware, compromised endpoints, browser data, or abused refresh tokens"],
    "password-attacks": ["common passwords across many accounts to avoid lockouts", "Brute force repeatedly guesses", "Legacy protocols"],
    "device-code": ["legitimate-looking code on Microsoft's sign-in page", "without ever seeing the password"],
    cryptojacking: ["compromised cloud identities, subscriptions, API keys, service principals, or workloads", "paid compute capacity", "resource exhaustion"],
    llmjacking: ["compromised cloud identities, subscriptions, API keys, service principals, or workloads", "paid AI capacity", "data exposure"],
    infostealers: ["browser data, passwords, cookies, tokens, wallets, and files"],
    ransomware: ["encrypts or steals data", "exposed remote services, unpatched vulnerabilities", "extortion, credential theft, and lateral movement"],
    clickfix: ["running commands or pasted scripts", "Run, PowerShell, Terminal, or a fake troubleshooting prompt"]
  };
  for (const item of scenarios) {
    for (const phrase of expected[item.id]) assert.ok(item.summary.includes(phrase), `${item.id}: ${phrase}`);
  }
});

test("screenshotted messages are removed without removing attack descriptions or policy priorities", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const app = await readFile(new URL("../app.js", import.meta.url), "utf8");
  for (const removed of ["Conditional Access (CA) controls sign-ins.", "Operating-system policies protect devices.",
    "protection-note", "protection-title", "scenario-limitation", "priority-guide", "Strong policies are listed first"]) {
    assert.ok(!html.includes(removed), removed);
    assert.ok(!app.includes(removed), removed);
  }
  assert.match(html, /id="scenario-summary"/);
  assert.match(app, /byId\("scenario-summary"\)\.textContent = scenario\.summary/);
  assert.match(app, /indicators\[item\.strength\]/);
});
