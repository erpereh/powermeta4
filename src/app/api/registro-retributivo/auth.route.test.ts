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
import { GET as statusGet } from "./ai/status/route";
import { GET as stateGet, PATCH as statePatch } from "./state/route";

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
});

describe("registro-retributivo API authentication", () => {
  it("returns 401 for analyze, export, ai status and state without a session", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);

    const analyze = await analyzePost(new Request("http://localhost/api/registro-retributivo/analyze", { method: "POST" }));
    const exported = await exportPost(new Request("http://localhost/api/registro-retributivo/export", { method: "POST" }));
    const status = await statusGet();
    const state = await stateGet();
    const patched = await statePatch(
      new Request("http://localhost/api/registro-retributivo/state", {
        method: "PATCH",
        body: "{}",
      }),
    );

    expect(analyze.status).toBe(401);
    expect(exported.status).toBe(401);
    expect(status.status).toBe(401);
    expect(state.status).toBe(401);
    expect(patched.status).toBe(401);
    expect(mocks.deleteSessionCookie).toHaveBeenCalledTimes(5);
  });

  it("allows debug sessions to reach ai status without SOAP", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue({
      authContext: {
        mode: "debug",
        username: "DEBUG",
        canUseMeta4: false,
        societyCode: null,
        availableSocieties: [],
      },
    });

    const status = await statusGet();
    expect(status.status).toBe(200);
    await expect(status.json()).resolves.toMatchObject({
      configured: expect.any(Boolean),
      enabled: expect.any(Boolean),
      model: expect.any(String),
    });
  });
});
