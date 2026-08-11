import { afterEach, describe, expect, it, vi } from "vitest";

import type { AuthRepository } from "@/lib/auth/session-repository";
import { createAuthService } from "@/lib/auth/service";
import { Meta4SessionRequiredError } from "@/lib/meta4/authenticated-soap-client";

const now = new Date("2026-08-05T10:00:00.000Z");

const createRepository = (
  soapSession: Awaited<ReturnType<AuthRepository["getSoapSession"]>> = null,
) => {
  let currentSoapSession = soapSession;
  const localSessions: Array<{
    id: string;
    cookieHash: string;
    username: string;
    authMode: "meta4" | "debug";
    expiresAt: Date;
    revokedAt: Date | null;
    lastSeenAt: Date;
  }> = [];
  return {
    repository: {
      getSoapSession: vi.fn(async () => currentSoapSession),
      replaceAuthState: vi.fn(async (data) => {
        currentSoapSession = {
          id: "global",
          username: data.username,
          jsessionIdEncrypted: data.jsessionIdEncrypted,
          refreshSessionIdEncrypted: data.refreshSessionIdEncrypted,
          lastValidatedAt: data.lastValidatedAt,
        };
        localSessions.length = 0;
      }),
      updateJSessionId: vi.fn(async (encryptedJSessionId, lastValidatedAt) => {
        if (!currentSoapSession) throw new Error("missing session");
        currentSoapSession = {
          ...currentSoapSession,
          jsessionIdEncrypted: encryptedJSessionId,
          lastValidatedAt,
        };
      }),
      clearAuthState: vi.fn(async () => {
        currentSoapSession = null;
        localSessions.length = 0;
      }),
      replaceLocalBrowserSessions: vi.fn(async (data) => {
        localSessions.length = 0;
        localSessions.push({ ...data, revokedAt: null, lastSeenAt: now });
      }),
      createLocalBrowserSession: vi.fn(async (data) => {
        const browserSession = data as typeof data & { authMode?: "meta4" | "debug" };
        localSessions.push({
          ...data,
          authMode: browserSession.authMode ?? "meta4",
          revokedAt: null,
          lastSeenAt: now,
        });
      }),
      getLocalBrowserSession: vi.fn(
        async (cookieHash) => localSessions.find((item) => item.cookieHash === cookieHash) ?? null,
      ),
      touchLocalBrowserSession: vi.fn(async (id, lastSeenAt, expiresAt) => {
        const session = localSessions.find((item) => item.id === id);
        if (session) {
          session.lastSeenAt = lastSeenAt;
          session.expiresAt = expiresAt;
        }
      }),
      revokeLocalBrowserSession: vi.fn(async (id) => {
        const session = localSessions.find((item) => item.id === id);
        if (session) session.revokedAt = now;
      }),
    } satisfies AuthRepository,
    localSessions,
  };
};

const createDpapi = () => ({
  protectSecret: vi.fn(async (value: string) => `encrypted:${value}`),
  unprotectSecret: vi.fn(async (value: string) => value.replace("encrypted:", "")),
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("Meta4 auth service", () => {
  it("creates an isolated debug browser session without SOAP or DPAPI", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    vi.stubEnv("POWERMETA4_DEBUG_USERNAME", "  Developer  ");
    const { repository, localSessions } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "A".repeat(43),
      createLocalSessionId: () => "local-debug-session",
    });

    const debugLogin = Reflect.get(service, "debugLogin");
    expect(debugLogin).toEqual(expect.any(Function));

    const result = await (debugLogin as () => Promise<{ sessionNonce: string }>)();

    expect(result).toEqual({ sessionNonce: "A".repeat(43) });
    expect(localSessions).toEqual([
      expect.objectContaining({
        id: "local-debug-session",
        cookieHash: expect.any(String),
        username: "Developer",
        authMode: "debug",
      }),
    ]);
    expect(localSessions[0]?.cookieHash).not.toBe(result.sessionNonce);
    expect(repository.replaceAuthState).not.toHaveBeenCalled();
    expect(soap.login).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.protectSecret).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
    expect(repository.getSoapSession).not.toHaveBeenCalled();
  });

  it("rechecks debug eligibility before creating any local session", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, localSessions } = createRepository();
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({ repository, dpapi, soap, now: () => now });

    await expect(service.debugLogin()).rejects.toMatchObject({ code: "DEBUG_AUTH_NOT_ALLOWED" });

    expect(localSessions).toEqual([]);
    expect(repository.replaceLocalBrowserSessions).not.toHaveBeenCalled();
    expect(repository.replaceAuthState).not.toHaveBeenCalled();
    expect(soap.login).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.protectSecret).not.toHaveBeenCalled();
  });

  it("resolves a debug browser session without falling back to an old SOAP session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "B".repeat(43),
      createLocalSessionId: () => "local-debug-session",
    });
    const login = await service.debugLogin();
    vi.clearAllMocks();

    const resolveSession = Reflect.get(service, "resolveSession");
    expect(resolveSession).toEqual(expect.any(Function));

    const resolved = await (resolveSession as (nonce: string) => Promise<unknown>)(
      login.sessionNonce,
    );

    expect(resolved).toMatchObject({
      sessionId: "local-debug-session",
      authContext: { mode: "debug", username: "DEBUG", canUseMeta4: false },
      expiresAt: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
      lastValidatedAt: null,
    });
    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.protectSecret).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
  });

  it("revokes a disabled debug session without restoring an old SOAP session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, localSessions } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "C".repeat(43),
      createLocalSessionId: () => "disabled-debug-session",
    });
    const login = await service.debugLogin();
    const stored = localSessions[0];
    if (!stored) throw new Error("missing debug local session");
    stored.lastSeenAt = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    vi.clearAllMocks();
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");

    await expect(service.resolveSession(login.sessionNonce)).resolves.toBeNull();

    expect(repository.revokeLocalBrowserSession).toHaveBeenCalledWith("disabled-debug-session");
    expect(localSessions[0]?.revokedAt).toEqual(now);
    expect(repository.touchLocalBrowserSession).not.toHaveBeenCalled();
    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.protectSecret).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
    await expect(repository.getSoapSession()).resolves.toMatchObject({
      id: "global",
      username: "meta4-user",
    });
  });

  it("does not authenticate an opaque nonce that has no local browser session", async () => {
    const { repository } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({ repository, dpapi, soap, now: () => now });

    await expect(service.resolveSession("G".repeat(43))).resolves.toBeNull();

    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
  });

  it("logs out debug by revoking only its presented local browser session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, localSessions } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "D".repeat(43),
      createLocalSessionId: () => "debug-logout-session",
    });
    const login = await service.debugLogin();
    vi.clearAllMocks();

    await service.logout(login.sessionNonce);

    expect(localSessions[0]?.revokedAt).toEqual(now);
    expect(repository.revokeLocalBrowserSession).toHaveBeenCalledWith("debug-logout-session");
    expect(repository.clearAuthState).not.toHaveBeenCalled();
    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
    await expect(repository.getSoapSession()).resolves.toMatchObject({
      id: "global",
      username: "meta4-user",
    });
  });

  it("logs out Meta4 globally by deleting SOAP and every local browser session", async () => {
    const { repository, localSessions } = createRepository();
    const dpapi = createDpapi();
    const soap = {
      login: vi.fn(async () => ({ jSessionId: "jsession", refreshSessionId: "refresh" })),
      retrieveM4Session: vi.fn(),
    };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "E".repeat(43),
      createLocalSessionId: () => "meta4-logout-session",
    });
    const login = await service.login("meta4-user", "password");
    localSessions.push({
      id: "another-local-browser",
      cookieHash: "another-hash",
      username: "meta4-user",
      authMode: "meta4",
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
      revokedAt: null,
      lastSeenAt: now,
    });
    vi.clearAllMocks();

    await service.logout(login.sessionNonce);

    expect(repository.clearAuthState).toHaveBeenCalledOnce();
    expect(localSessions).toEqual([]);
    await expect(repository.getSoapSession()).resolves.toBeNull();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
  });

  it("rejects operational Meta4 access from debug before reading the SOAP session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = { login: vi.fn(), retrieveM4Session: vi.fn() };
    const service = createAuthService({
      repository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "F".repeat(43),
      createLocalSessionId: () => "debug-operational-session",
    });
    const login = await service.debugLogin();
    const resolved = await service.resolveSession(login.sessionNonce);
    if (!resolved) throw new Error("Expected debug session");
    vi.clearAllMocks();

    await expect(service.getOperationalSession(resolved)).rejects.toBeInstanceOf(
      Meta4SessionRequiredError,
    );
    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
    expect(dpapi.unprotectSecret).not.toHaveBeenCalled();
  });

  it("logs in with the exact username, stores only encrypted tokens, and revokes old browsers", async () => {
    const { repository } = createRepository();
    const dpapi = createDpapi();
    const soap = {
      login: vi.fn(async (username: string, password: string) => {
        expect(username).toBe(" USER&NAME ");
        expect(password).toBe("p<&");
        return { jSessionId: "jsession-1", refreshSessionId: "refresh-1" };
      }),
      retrieveM4Session: vi.fn(),
    };
    const service = createAuthService({ repository, dpapi, soap, now: () => now });

    const result = await service.login(" USER&NAME ", "p<&");

    expect(result.username).toBe(" USER&NAME ");
    expect(result.sessionNonce).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(repository.replaceAuthState).toHaveBeenCalledWith({
      username: " USER&NAME ",
      jsessionIdEncrypted: "encrypted:jsession-1",
      refreshSessionIdEncrypted: "encrypted:refresh-1",
      lastValidatedAt: now,
    });
    expect(repository.createLocalBrowserSession).toHaveBeenCalledWith(
      expect.objectContaining({
        username: " USER&NAME ",
        authMode: "meta4",
        expiresAt: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
      }),
    );
    expect(JSON.stringify(repository.replaceAuthState.mock.calls)).not.toContain("p<&");
  });

  it("does not persist a partial login when DPAPI protection fails", async () => {
    const { repository } = createRepository();
    const soap = {
      login: vi.fn(async () => ({ jSessionId: "jsession-1", refreshSessionId: "refresh-1" })),
      retrieveM4Session: vi.fn(),
    };
    const dpapi = {
      protectSecret: vi.fn().mockRejectedValue(new Error("dpapi")),
      unprotectSecret: vi.fn(),
    };
    const service = createAuthService({ repository, dpapi, soap, now: () => now });

    await expect(service.login("user", "password")).rejects.toThrow(/dpapi/);
    expect(repository.replaceAuthState).not.toHaveBeenCalled();
    expect(repository.createLocalBrowserSession).not.toHaveBeenCalled();
  });

  it("restores once for concurrent callers and invalidates state when retrieve fails", async () => {
    const { repository } = createRepository({
      id: "global",
      username: "user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:refresh",
      lastValidatedAt: null,
    });
    const dpapi = createDpapi();
    const soap = {
      login: vi.fn(),
      retrieveM4Session: vi.fn(async () => {
        await new Promise((resolve) => setTimeout(resolve, 5));
        return { jSessionId: "new-jsession" };
      }),
    };
    const service = createAuthService({ repository, dpapi, soap, now: () => now });

    const results = await Promise.all([service.restoreSession(), service.restoreSession()]);

    expect(results).toEqual([{ username: "user" }, { username: "user" }]);
    expect(soap.retrieveM4Session).toHaveBeenCalledOnce();
    expect(repository.updateJSessionId).toHaveBeenCalledWith("encrypted:new-jsession", now);

    const failing = createRepository({
      id: "global",
      username: "user",
      jsessionIdEncrypted: "encrypted:old",
      refreshSessionIdEncrypted: "encrypted:refresh",
      lastValidatedAt: null,
    });
    const failingService = createAuthService({
      repository: failing.repository,
      dpapi,
      soap: { login: vi.fn(), retrieveM4Session: vi.fn().mockRejectedValue(new Error("expired")) },
      now: () => now,
    });

    await expect(failingService.restoreSession()).resolves.toBeNull();
    expect(failing.repository.clearAuthState).toHaveBeenCalledOnce();
  });

  it("extends a browser session for another 30 days after the touch interval", async () => {
    const { repository, localSessions } = createRepository();
    const service = createAuthService({
      repository,
      dpapi: createDpapi(),
      soap: {
        login: vi.fn(async () => ({ jSessionId: "jsession", refreshSessionId: "refresh" })),
        retrieveM4Session: vi.fn(),
      },
      now: () => now,
      createSessionNonce: () => "A".repeat(43),
    });

    await service.login("user", "password");
    const stored = localSessions[0];
    if (!stored) throw new Error("missing local session");
    stored.lastSeenAt = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

    const session = await service.resolveSession("A".repeat(43));

    expect(session?.expiresAt).toEqual(new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000));
    expect(repository.touchLocalBrowserSession).toHaveBeenCalledWith(
      stored.id,
      now,
      new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
    );
  });
});
