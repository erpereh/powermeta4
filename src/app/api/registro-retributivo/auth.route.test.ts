import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));

import { POST as analyzePost } from "./analyze/route";
import { POST as exportPost } from "./export/route";
import { GET as stateGet, PATCH as statePatch } from "./state/route";

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
});

describe("registro-retributivo API authentication", () => {
  it("returns 401 for analyze, export and state without a session", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);

    const analyze = await analyzePost(new Request("http://localhost/api/registro-retributivo/analyze", { method: "POST" }));
    const exported = await exportPost(new Request("http://localhost/api/registro-retributivo/export", { method: "POST" }));
    const state = await stateGet();
    const patched = await statePatch(
      new Request("http://localhost/api/registro-retributivo/state", {
        method: "PATCH",
        body: "{}",
      }),
    );

    expect(analyze.status).toBe(401);
    expect(exported.status).toBe(401);
    expect(state.status).toBe(401);
    expect(patched.status).toBe(401);
    expect(mocks.deleteSessionCookie).toHaveBeenCalledTimes(4);
  });
});
