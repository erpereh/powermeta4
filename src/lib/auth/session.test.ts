import { beforeEach, describe, expect, it, vi } from "vitest";

import { createOpaqueSessionId } from "@/lib/auth/token";

const mocks = vi.hoisted(() => ({
  cookieValue: undefined as string | undefined,
  resolveSession: vi.fn(),
  redirect: vi.fn(),
}));

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: () => (mocks.cookieValue ? { value: mocks.cookieValue } : undefined),
    set: vi.fn(),
  }),
  headers: async () => new Headers(),
}));

vi.mock("next/navigation", () => ({ redirect: mocks.redirect }));

vi.mock("./server", () => ({
  getAuthService: () => ({ resolveSession: mocks.resolveSession }),
}));

import * as sessionModule from "./session";

beforeEach(() => {
  mocks.cookieValue = undefined;
  mocks.resolveSession.mockReset();
  mocks.redirect.mockReset();
  mocks.redirect.mockImplementation((location: string) => {
    throw new Error(`redirect:${location}`);
  });
});

describe("current auth session resolver", () => {
  it("resolves the opaque cookie through the central service without exposing it", async () => {
    const nonce = createOpaqueSessionId();
    const resolved = {
      sessionId: "internal-browser-session",
      cookieHash: "hash-only",
      authContext: {
        mode: "debug" as const,
        username: "DEBUG",
        canUseMeta4: false,
        societyCode: null,
      },
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
      lastValidatedAt: null,
    };
    mocks.cookieValue = nonce;
    mocks.resolveSession.mockResolvedValue(resolved);

    const getCurrentAuthContext = Reflect.get(sessionModule, "getCurrentAuthContext");
    expect(getCurrentAuthContext).toEqual(expect.any(Function));

    await expect(getCurrentAuthContext()).resolves.toBe(resolved);
    expect(mocks.resolveSession).toHaveBeenCalledWith(nonce);
  });

  it("redirects an invalid opaque session through the expired login path", async () => {
    mocks.cookieValue = createOpaqueSessionId();
    mocks.resolveSession.mockResolvedValue(null);

    const requireAuthContext = Reflect.get(sessionModule, "requireAuthContext");
    expect(requireAuthContext).toEqual(expect.any(Function));

    await expect(requireAuthContext()).rejects.toThrow("redirect:/login?expired=1");
    expect(mocks.resolveSession).toHaveBeenCalledOnce();
  });
});
