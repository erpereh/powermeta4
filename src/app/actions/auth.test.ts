import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getAuthService: vi.fn(),
  debugLogin: vi.fn(),
  login: vi.fn(),
  logout: vi.fn(),
  setSessionCookie: vi.fn(),
  getBrowserSessionNonce: vi.fn(),
  deleteSessionCookie: vi.fn(),
  redirect: vi.fn(),
}));

vi.mock("next/navigation", () => ({ redirect: mocks.redirect }));
vi.mock("@/lib/auth/server", () => ({
  getAuthService: mocks.getAuthService,
}));
vi.mock("@/lib/auth/session", () => ({
  deleteSessionCookie: mocks.deleteSessionCookie,
  getBrowserSessionNonce: mocks.getBrowserSessionNonce,
  setSessionCookie: mocks.setSessionCookie,
}));

import * as authActions from "./auth";
import { DEBUG_AUTH_DISABLED, DEBUG_AUTH_NOT_ALLOWED } from "@/lib/auth/debug-config";

beforeEach(() => {
  for (const mock of Object.values(mocks)) mock.mockReset();
  mocks.getAuthService.mockReturnValue({
    debugLogin: mocks.debugLogin,
    login: mocks.login,
    logout: mocks.logout,
  });
  mocks.redirect.mockImplementation((location: string) => {
    throw new Error(`redirect:${location}`);
  });
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("authentication actions", () => {
  it("starts a debug session without Meta4 form values", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    mocks.debugLogin.mockResolvedValue({
      sessionNonce: "A".repeat(43),
      username: "DEBUG",
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
    });

    const debugLoginAction = Reflect.get(authActions, "debugLoginAction");
    expect(debugLoginAction).toEqual(expect.any(Function));

    await expect(debugLoginAction({}, new FormData())).rejects.toThrow("redirect:/home");
    expect(mocks.debugLogin).toHaveBeenCalledWith();
    expect(mocks.setSessionCookie).toHaveBeenCalledWith("A".repeat(43));
    expect(mocks.login).not.toHaveBeenCalled();
  });

  it("rejects production debug before obtaining the authentication service", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");

    await expect(authActions.debugLoginAction({}, new FormData())).resolves.toEqual({
      error: "El modo debug no está disponible.",
      errorCode: DEBUG_AUTH_NOT_ALLOWED,
    });
    expect(mocks.getAuthService).not.toHaveBeenCalled();
    expect(mocks.debugLogin).not.toHaveBeenCalled();
  });

  it("rejects a disabled development flag before obtaining the authentication service", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");

    await expect(authActions.debugLoginAction({}, new FormData())).resolves.toEqual({
      error: "El modo debug no está disponible.",
      errorCode: DEBUG_AUTH_DISABLED,
    });
    expect(mocks.getAuthService).not.toHaveBeenCalled();
    expect(mocks.debugLogin).not.toHaveBeenCalled();
  });
});
