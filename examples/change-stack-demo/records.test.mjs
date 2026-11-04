import assert from "node:assert/strict";
import test from "node:test";
import { AccessDenied } from "./access.mjs";
import { readFeedbackRecord } from "./records.mjs";

const workspace = { id: "workspace-a", feedbackEnabled: true, tenantIds: ["tenant-a"] };
const actor = {
  id: "reviewer",
  memberships: [{ workspaceId: "workspace-a", permissions: ["feedback:read"] }],
};
const record = { id: "record-a", tenantId: "tenant-a", body: "Example feedback" };

test("returns an authorized workspace record", async () => {
  let requestedId;
  const result = await readFeedbackRecord({
    actor, workspace, recordId: record.id,
    findRecord: async (id) => { requestedId = id; return record; },
  });
  assert.equal(requestedId, record.id);
  assert.equal(result, record);
});

for (const [label, changes] of [
  ["anonymous actor", { actor: null }],
  ["different workspace", { actor: { id: "other", memberships: [] } }],
  ["missing read permission", { actor: { id: "other", memberships: [{ workspaceId: workspace.id, permissions: [] }] } }],
  ["disabled feedback", { workspace: { ...workspace, feedbackEnabled: false } }],
]) {
  test(`rejects ${label} before fetching`, async () => {
    let fetched = false;
    await assert.rejects(readFeedbackRecord({
      actor, workspace, recordId: record.id, ...changes,
      findRecord: async () => { fetched = true; return record; },
    }), AccessDenied);
    assert.equal(fetched, false);
  });
}

for (const [label, value] of [
  ["missing record", null],
  ["another tenant", { ...record, tenantId: "tenant-b" }],
  ["missing tenant", { id: "invalid" }],
]) {
  test(`uses the same denial for ${label}`, async () => {
    await assert.rejects(readFeedbackRecord({
      actor, workspace, recordId: record.id, findRecord: async () => value,
    }), { name: "AccessDenied", message: "Access denied" });
  });
}
