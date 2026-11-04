export class AccessDenied extends Error {
  constructor() {
    super("Access denied");
    this.name = "AccessDenied";
  }
}

export function requireWorkspaceAccess(actor, workspace) {
  const membership = actor?.memberships?.find(
    (entry) => entry.workspaceId === workspace.id,
  );
  if (
    !actor?.id ||
    workspace.feedbackEnabled !== true ||
    !membership?.permissions?.includes("feedback:read")
  ) {
    throw new AccessDenied();
  }
}
