import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
  getWorkspaceSnapshot: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceSnapshot: mocks.getWorkspaceSnapshot,
}));

import { GET } from "./route";

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
  mocks.getWorkspaceSnapshot.mockReset();
});

describe("workspace route authentication", () => {
  it("allows a debug context to use local workspace data without Meta4 restoration", async () => {
    const authContext = { mode: "debug" as const, username: "DEBUG", canUseMeta4: false };
    mocks.getCurrentAuthContext.mockResolvedValue({ authContext });
    mocks.getWorkspaceSnapshot.mockResolvedValue({ auth: authContext, companies: [] });

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      ok: true,
      data: { auth: authContext, companies: [] },
    });
    expect(mocks.getWorkspaceSnapshot).toHaveBeenCalledWith(authContext);
    expect(mocks.deleteSessionCookie).not.toHaveBeenCalled();
  });

  it("clears an invalid browser cookie before responding unauthenticated", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);

    const response = await GET();

    expect(response.status).toBe(401);
    expect(mocks.deleteSessionCookie).toHaveBeenCalledOnce();
  });
});
