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
  consoleError: vi.fn(),
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
  vi.spyOn(console, "error").mockImplementation(mocks.consoleError);
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
  vi.restoreAllMocks();
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

  it("sanitizes unexpected debug session creation failures without configuration codes", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const infrastructureError = Object.assign(
      new Error("table local_browser_sessions has no column named auth_mode; secret=hidden"),
      { code: "ERR_SQLITE_ERROR" },
    );
    mocks.debugLogin.mockRejectedValue(infrastructureError);

    await expect(authActions.debugLoginAction({}, new FormData())).resolves.toEqual({
      error: "No se ha podido iniciar la sesión de desarrollo.",
    });
    expect(mocks.consoleError).toHaveBeenCalledWith("[debug-auth] session creation failed", {
      name: "Error",
      code: "ERR_SQLITE_ERROR",
    });
    expect(JSON.stringify(mocks.consoleError.mock.calls)).not.toContain("secret=hidden");
  });

  it("maps Meta4 profile errors to sanitized Spanish login messages", async () => {
    const { Meta4ProfileError } = await import("@/lib/meta4/profile-errors");
    mocks.login.mockRejectedValue(
      new Meta4ProfileError(
        "META4_PROFILE_NOT_FOUND",
        "No se ha podido identificar tu sociedad en Meta4.",
      ),
    );
    const formData = new FormData();
    formData.set("email", "user");
    formData.set("password", "secret");

    await expect(authActions.loginAction({}, formData)).resolves.toEqual({
      error: "No se ha podido identificar tu sociedad en Meta4.",
      errorCode: "META4_PROFILE_NOT_FOUND",
    });
    expect(mocks.setSessionCookie).not.toHaveBeenCalled();
  });

  it("keeps credential errors for SOAP failures and logs a sanitized cause", async () => {
    const { Meta4HttpError } = await import("@/lib/meta4/client");
    mocks.login.mockRejectedValue(new Meta4HttpError(401));
    const formData = new FormData();
    formData.set("email", "user");
    formData.set("password", "secret");

    await expect(authActions.loginAction({}, formData)).resolves.toEqual({
      error:
        "No se pudo iniciar sesión con Meta4. Comprueba el usuario, la contraseña y la conexión.",
    });
    expect(mocks.consoleError).toHaveBeenCalledWith("[meta4-auth] session creation failed", {
      name: "Meta4HttpError",
    });
    expect(JSON.stringify(mocks.consoleError.mock.calls)).not.toContain("secret");
  });

  it("maps post-profile local persistence failures without leaking secrets", async () => {
    const { LocalSessionStoreError } = await import("@/lib/auth/local-session-store-error");
    const infrastructureError = Object.assign(
      new Error("no such table: soap_sessions; secret=hidden"),
      { code: "ERR_SQLITE_ERROR" },
    );
    mocks.login.mockRejectedValue(
      new LocalSessionStoreError(undefined, { cause: infrastructureError }),
    );
    const formData = new FormData();
    formData.set("email", "user");
    formData.set("password", "secret");

    await expect(authActions.loginAction({}, formData)).resolves.toEqual({
      error: "Se ha iniciado sesión en Meta4, pero no se ha podido guardar la sesión local.",
      errorCode: "META4_LOCAL_SESSION_FAILED",
    });
    expect(mocks.consoleError).toHaveBeenCalledWith("[meta4-auth] session creation failed", {
      name: "LocalSessionStoreError",
      code: "META4_LOCAL_SESSION_FAILED",
      causeName: "Error",
      causeCode: "ERR_SQLITE_ERROR",
      hint: "npm run setup",
    });
    expect(JSON.stringify(mocks.consoleError.mock.calls)).not.toContain("secret=hidden");
  });

  it("maps cookie failures after a successful Meta4 login to a local session error", async () => {
    mocks.login.mockResolvedValue({
      sessionNonce: "A".repeat(43),
      username: "user",
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
    });
    mocks.setSessionCookie.mockRejectedValue(new Error("cookie; secret=hidden"));
    const formData = new FormData();
    formData.set("email", "user");
    formData.set("password", "secret");

    await expect(authActions.loginAction({}, formData)).resolves.toEqual({
      error: "Se ha iniciado sesión en Meta4, pero no se ha podido guardar la sesión local.",
      errorCode: "META4_LOCAL_SESSION_FAILED",
    });
    expect(mocks.consoleError).toHaveBeenCalledWith("[meta4-auth] session creation failed", {
      name: "LocalSessionStoreError",
      code: "META4_LOCAL_SESSION_FAILED",
      causeName: "Error",
    });
    expect(JSON.stringify(mocks.consoleError.mock.calls)).not.toContain("secret=hidden");
  });
});
