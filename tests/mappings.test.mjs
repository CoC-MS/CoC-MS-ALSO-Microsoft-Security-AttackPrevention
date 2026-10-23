import test from "node:test";
import assert from "node:assert/strict";
import inventory from "../data/policies.js";
import { mapPolicy, matchesScenario, scenarios, techniques, techniqueUrl } from "../mappings.mjs";

const find = (code, packageName = "BP") => {
  const policy = inventory.policies.find((item) => item.code === code && item.package === packageName);
  assert.ok(policy, `Missing source template ${code} in ${packageName}`);
  return policy;
};

test("inventory contains real, pinned templates in all source packages", () => {
  assert.match(inventory.revision, /^[a-f0-9]{40}$/);
  assert.ok(inventory.policies.length > 100);
  assert.equal(new Set(inventory.policies.map((policy) => policy.key)).size, inventory.policies.length);
  assert.deepEqual([...new Set(inventory.policies.map((policy) => policy.package))].sort(), ["BP", "E5", "E7"]);
  for (const policy of inventory.policies) {
    assert.ok(policy.name && policy.code && policy.state && policy.conditions);
    assert.equal(policy.url, `https://github.com/${inventory.repository}/blob/${inventory.revision}/${policy.key}`);
  }
});

test("CA004 maps actual device-code blocking to token techniques", () => {
  const policy = find("BP-ALSO-CA004");
  assert.ok(policy.grantControls.builtInControls.includes("block"));
  assert.ok(policy.conditions.authenticationFlows.transferMethods.includes("deviceCodeFlow"));
  assert.ok(mapPolicy(policy).some((mapping) => mapping.id === "T1528"));
  assert.ok(mapPolicy(policy).some((mapping) => mapping.id === "T1550.001"));
  assert.ok(matchesScenario(policy, scenarios.find((scenario) => scenario.id === "device-code")));
});

test("CA105 requires real phishing-resistant strength; generic MFA does not map to AiTM control", () => {
  assert.ok(mapPolicy(find("BP-ALSO-CA105")).some((mapping) => mapping.id === "T1557"));
  assert.ok(!mapPolicy(find("BP-ALSO-CA000")).some((mapping) => mapping.id === "T1557"));
});

test("filenames alone cannot produce coverage", () => {
  const counterfeit = { ...find("BP-ALSO-CA004"), conditions: {}, grantControls: null, sessionControls: null };
  assert.deepEqual(mapPolicy(counterfeit), []);
});

test("legacy and risk templates have conditional identity associations", () => {
  assert.ok(mapPolicy(find("BP-ALSO-CA002")).some((mapping) => mapping.id === "T1110.003"));
  for (const code of ["E5-ALSO-CA201", "E5-ALSO-CA210"]) {
    assert.ok(mapPolicy(find(code, "E5")).some((mapping) => mapping.id === "T1078.004"));
  }
});

test("impact and delivery techniques are never misrepresented as prevented", () => {
  const unsupported = new Set(["T1486", "T1496.001", "T1566.001", "T1566.002", "T1021.001"]);
  for (const policy of inventory.policies) {
    for (const mapping of mapPolicy(policy)) {
      assert.ok(!unsupported.has(mapping.id));
      assert.ok(techniques[mapping.id]);
      assert.ok(mapping.evidence && mapping.reason);
    }
  }
});

test("all scenarios resolve to known techniques and have source-policy associations", () => {
  for (const scenario of scenarios) {
    assert.ok(scenario.techniques.every((id) => techniques[id]));
    assert.ok(inventory.policies.some((policy) => matchesScenario(policy, scenario)));
  }
  assert.equal(techniqueUrl("T1078.004"), "https://attack.mitre.org/techniques/T1078/004/");
});

test("source template state is preserved, not interpreted as deployed protection", () => {
  assert.equal(find("BP-ALSO-CA105").state, "disabled");
  assert.ok(inventory.policies.every((policy) => ["disabled", "enabled", "enabledForReportingButNotEnforced"].includes(policy.state)));
});
