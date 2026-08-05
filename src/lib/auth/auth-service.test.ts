import { describe, expect, it, vi } from "vitest";

import type { AuthRepository } from "@/lib/auth/session-repository";
import { createAuthService } from "@/lib/auth/service";

const now = new Date("2026-08-05T10:00:00.000Z");

const createRepository = (
  soapSession: Awaited<ReturnType<AuthRepository["getSoapSession"]>> = null,
) => {
  let currentSoapSession = soapSession;
  const localSessions: Array<{
    id: string;
    cookieHash: string;
    username: string;
    expiresAt: Date;
    revokedAt: Date | null;
    lastSeenAt: Date;
  }> = [];
  return {
    repository: {
      getSoapSession: vi.fn(async () => currentSoapSession),
      replaceSoapSession: vi.fn(async (data) => {
        currentSoapSession = {
          id: "global",
          username: data.username,
          jsessionIdEncrypted: data.jsessionIdEncrypted,
          refreshSessionIdEncrypted: data.refreshSessionIdEncrypted,
          lastValidatedAt: data.lastValidatedAt,
        };
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
      revokeAllLocalBrowserSessions: vi.fn(async () => {
        localSessions.length = 0;
      }),
      createLocalBrowserSession: vi.fn(async (data) => {
        localSessions.push({ ...data, revokedAt: null, lastSeenAt: now });
      }),
      getLocalBrowserSession: vi.fn(
        async (cookieHash) => localSessions.find((item) => item.cookieHash === cookieHash) ?? null,
      ),
      touchLocalBrowserSession: vi.fn(async (id, lastSeenAt) => {
        const session = localSessions.find((item) => item.id === id);
        if (session) session.lastSeenAt = lastSeenAt;
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

describe("Meta4 auth service", () => {
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
    expect(result.sessionId).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(repository.revokeAllLocalBrowserSessions).toHaveBeenCalledOnce();
    expect(repository.replaceSoapSession).toHaveBeenCalledWith({
      username: " USER&NAME ",
      jsessionIdEncrypted: "encrypted:jsession-1",
      refreshSessionIdEncrypted: "encrypted:refresh-1",
      lastValidatedAt: now,
    });
    expect(repository.createLocalBrowserSession).toHaveBeenCalledWith(
      expect.objectContaining({
        username: " USER&NAME ",
        expiresAt: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
      }),
    );
    expect(JSON.stringify(repository.replaceSoapSession.mock.calls)).not.toContain("p<&");
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
    expect(repository.replaceSoapSession).not.toHaveBeenCalled();
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
});
