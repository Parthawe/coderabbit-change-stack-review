import { AccessDenied, requireWorkspaceAccess } from "./access.mjs";

export async function readFeedbackRecord({ actor, workspace, recordId, findRecord }) {
  // Authorize before looking up a record, including records that do not exist.
  requireWorkspaceAccess(actor, workspace);
  const record = await findRecord(recordId);
  const allowedTenants = workspace.tenantIds ?? [];
  if (!record?.tenantId || !allowedTenants.includes(record.tenantId)) {
    // Missing and cross-tenant records have the same public failure.
    throw new AccessDenied();
  }
  return record;
}
