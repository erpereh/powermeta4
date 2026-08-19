import { afterEach, describe, expect, it, vi } from "vitest";

import type { AuthRepository, Meta4LoginPersistData } from "@/lib/auth/session-repository";
import { createAuthService } from "@/lib/auth/service";
import { Meta4SessionRequiredError } from "@/lib/meta4/authenticated-soap-client";
import { Meta4SocietyNotAllowedError } from "@/lib/meta4/errors";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import type { Meta4UserProfile } from "@/lib/meta4/user-profile-types";
import type { Meta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";
import type { Meta4Society } from "@/lib/meta4/societies";

const now = new Date("2026-08-05T10:00:00.000Z");

const createProfile = (society: Meta4Society, username = "user"): Meta4UserProfile => ({
  society,
  pSociedad: society,
  returnCode: "1.0",
  recordSets: [{ fields: { clave_Self: username, id_Empleado: "1", Nombre: "Usuario" } }],
  primaryIndex: 0,
  fields: { clave_Self: username, id_Empleado: "1", Nombre: "Usuario" },
  consultedUsername: username,
  lookedUpAt: now.toISOString(),
});

const createRepository = (
  soapSession: Awaited<ReturnType<AuthRepository["getSoapSession"]>> = null,
) => {
  let currentSoapSession = soapSession;
  let currentProfiles: Array<{
    username: string;
    society: Meta4Society;
    displayName: string | null;
    profileJsonEncrypted: string;
    lookedUpAt: Date;
  }> = [];
  const localSessions: Array<{
    id: string;
    cookieHash: string;
    username: string;
    authMode: "meta4" | "debug";
    expiresAt: Date;
    revokedAt: Date | null;
    lastSeenAt: Date;
  }> = [];

  const repository = {
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
    persistMeta4LoginState: vi.fn(async (data: Meta4LoginPersistData) => {
      currentSoapSession = {
        id: "global",
        username: data.soap.username,
        jsessionIdEncrypted: data.soap.jsessionIdEncrypted,
        refreshSessionIdEncrypted: data.soap.refreshSessionIdEncrypted,
        lastValidatedAt: data.soap.lastValidatedAt,
      };
      currentProfiles = [...data.profiles];
      localSessions.length = 0;
      localSessions.push({ ...data.browserSession, revokedAt: null, lastSeenAt: now });
      return {
        society: data.profiles[0]?.society ?? "CYC",
        companyId: `company-${data.profiles[0]?.society ?? "CYC"}`,
        availableSocieties: data.profiles.map((profile) => profile.society),
      };
    }),
    persistMeta4ProfileRepair: vi.fn(async (data: { profiles: Meta4LoginPersistData["profiles"] }) => {
      currentProfiles = [...data.profiles];
      return {
        society: data.profiles[0]?.society ?? "CYC",
        companyId: `company-${data.profiles[0]?.society ?? "CYC"}`,
        availableSocieties: data.profiles.map((profile) => profile.society),
      };
    }),
    reconcileActiveWorkspace: vi.fn(async (availableSocieties) => {
      if (availableSocieties.length === 0) return null;
      const society = availableSocieties[0]!;
      return {
        society,
        companyId: `company-${society}`,
        availableSocieties: [...availableSocieties],
      };
    }),
    activateWorkspace: vi.fn(async (society, availableSocieties) => ({
      society,
      companyId: `company-${society}`,
      availableSocieties: [...availableSocieties],
    })),
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
      currentProfiles = [];
      localSessions.length = 0;
    }),
    replaceLocalBrowserSessions: vi.fn(async (data) => {
      localSessions.length = 0;
      localSessions.push({ ...data, revokedAt: null, lastSeenAt: now });
    }),
    createLocalBrowserSession: vi.fn(async (data) => {
      localSessions.push({
        ...data,
        authMode: data.authMode,
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
  } satisfies AuthRepository;

  const profileRepository = {
    listProfileRows: vi.fn(async () =>
      currentProfiles.map((profile) => ({
        username: profile.username,
        society: profile.society,
        displayName: profile.displayName,
        profileJsonEncrypted: profile.profileJsonEncrypted,
        lookedUpAt: profile.lookedUpAt,
        createdAt: now,
        updatedAt: now,
      })),
    ),
    getProfileRow: vi.fn(async (society: Meta4Society) => {
      const profile = currentProfiles.find((item) => item.society === society);
      return profile
        ? {
            username: profile.username,
            society: profile.society,
            displayName: profile.displayName,
            profileJsonEncrypted: profile.profileJsonEncrypted,
            lookedUpAt: profile.lookedUpAt,
            createdAt: now,
            updatedAt: now,
          }
        : null;
    }),
    getDecryptedProfile: vi.fn(async () => null),
    listAvailableSocieties: vi.fn(async (username: string) =>
      currentProfiles.filter((profile) => profile.username === username).map((profile) => profile.society),
    ),
    clearProfile: vi.fn(async () => {
      currentProfiles = [];
    }),
  } satisfies Meta4UserProfileRepository;

  return {
    repository,
    profileRepository,
    localSessions,
    getProfile: () => currentProfiles[0] ?? null,
    setProfile: (
      profile: {
        username: string;
        society: Meta4Society;
        displayName: string | null;
        profileJsonEncrypted: string;
        lookedUpAt: Date;
      } | null,
    ) => {
      currentProfiles = profile ? [profile] : [];
    },
  };
};

const createDpapi = () => ({
  protectSecret: vi.fn(async (value: string) => `encrypted:${value}`),
  unprotectSecret: vi.fn(async (value: string) => value.replace("encrypted:", "")),
});

const createSoap = () => ({
  login: vi.fn(async () => ({ jSessionId: "jsession", refreshSessionId: "refresh" })),
  retrieveM4Session: vi.fn(async () => ({ jSessionId: "new-jsession" })),
  createCookieSoapPoster: vi.fn(() => vi.fn(async () => new Response("<ok/>", { status: 200 }))),
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("Meta4 auth service", () => {
  it("creates an isolated debug browser session without SOAP, DPAPI or CSP", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    vi.stubEnv("POWERMETA4_DEBUG_USERNAME", "  Developer  ");
    const { repository, profileRepository, localSessions } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const dpapi = createDpapi();
    const soap = createSoap();
    const lookupProfile = vi.fn();
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "A".repeat(43),
      createLocalSessionId: () => "local-debug-session",
      lookupProfile,
    });

    const result = await service.debugLogin();

    expect(result).toEqual({ sessionNonce: "A".repeat(43) });
    expect(localSessions).toEqual([
      expect.objectContaining({
        id: "local-debug-session",
        username: "Developer",
        authMode: "debug",
      }),
    ]);
    expect(lookupProfile).not.toHaveBeenCalled();
    expect(repository.persistMeta4LoginState).not.toHaveBeenCalled();
    expect(soap.login).not.toHaveBeenCalled();
    expect(dpapi.protectSecret).not.toHaveBeenCalled();
  });

  it("rechecks debug eligibility before creating any local session", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, profileRepository, localSessions } = createRepository();
    const soap = createSoap();
    const lookupProfile = vi.fn();
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi: createDpapi(),
      soap,
      now: () => now,
      lookupProfile,
    });

    await expect(service.debugLogin()).rejects.toMatchObject({ code: "DEBUG_AUTH_NOT_ALLOWED" });
    expect(localSessions).toEqual([]);
    expect(lookupProfile).not.toHaveBeenCalled();
    expect(soap.login).not.toHaveBeenCalled();
  });

  it("resolves a debug browser session without falling back to an old SOAP session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, profileRepository } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const soap = createSoap();
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi: createDpapi(),
      soap,
      now: () => now,
      createSessionNonce: () => "B".repeat(43),
      createLocalSessionId: () => "local-debug-session",
      lookupProfile: vi.fn(),
    });
    const login = await service.debugLogin();
    vi.clearAllMocks();

    const resolved = await service.resolveSession(login.sessionNonce);

    expect(resolved).toMatchObject({
      sessionId: "local-debug-session",
      authContext: {
        mode: "debug",
        username: "DEBUG",
        canUseMeta4: false,
        societyCode: null,
        availableSocieties: [],
      },
      lastValidatedAt: null,
    });
    expect(repository.getSoapSession).not.toHaveBeenCalled();
    expect(soap.retrieveM4Session).not.toHaveBeenCalled();
  });

  it("logs out debug by revoking only its presented local browser session and keeps profile", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const fixture = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    fixture.setProfile({
      username: "meta4-user",
      society: "CYC",
      displayName: "Meta4",
      profileJsonEncrypted: "encrypted:{}",
      lookedUpAt: now,
    });
    const service = createAuthService({
      repository: fixture.repository,
      profileRepository: fixture.profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      createSessionNonce: () => "D".repeat(43),
      createLocalSessionId: () => "debug-logout-session",
      lookupProfile: vi.fn(),
    });
    const login = await service.debugLogin();
    vi.clearAllMocks();

    await service.logout(login.sessionNonce);

    expect(fixture.repository.revokeLocalBrowserSession).toHaveBeenCalledWith(
      "debug-logout-session",
    );
    expect(fixture.repository.clearAuthState).not.toHaveBeenCalled();
    expect(fixture.getProfile()?.society).toBe("CYC");
  });

  it("logs in through CSP match, persists atomically, and encrypts the profile", async () => {
    const { repository, profileRepository, getProfile } = createRepository();
    const dpapi = createDpapi();
    const soap = createSoap();
    soap.login.mockResolvedValue({ jSessionId: "jsession-1", refreshSessionId: "refresh-1" });
    const lookupProfile = vi.fn(async () => ({
      matches: [{ society: "IBER" as const, profile: createProfile("IBER", " USER&NAME ") }],
    }));
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi,
      soap,
      now: () => now,
      createSessionNonce: () => "E".repeat(43),
      createLocalSessionId: () => "meta4-session",
      lookupProfile,
    });

    const result = await service.login(" USER&NAME ", "p<&");

    expect(result.societyCode).toBe("IBER");
    expect(lookupProfile).toHaveBeenCalledWith(
      expect.objectContaining({
        username: " USER&NAME ",
        jSessionId: "jsession-1",
      }),
    );
    expect(repository.persistMeta4LoginState).toHaveBeenCalledWith(
      expect.objectContaining({
        soap: expect.objectContaining({
          username: " USER&NAME ",
          jsessionIdEncrypted: "encrypted:jsession-1",
          refreshSessionIdEncrypted: "encrypted:refresh-1",
        }),
        profiles: [
          expect.objectContaining({
            society: "IBER",
            profileJsonEncrypted: expect.stringContaining("encrypted:"),
          }),
        ],
        browserSession: expect.objectContaining({
          id: "meta4-session",
          authMode: "meta4",
        }),
      }),
    );
    expect(getProfile()?.society).toBe("IBER");
    expect(repository.replaceAuthState).not.toHaveBeenCalled();
    expect(JSON.stringify(repository.persistMeta4LoginState.mock.calls)).not.toContain("p<&");
  });

  it("does not persist partial Meta4 state when society is not found", async () => {
    const { repository, profileRepository, localSessions, getProfile } = createRepository();
    const lookupProfile = vi.fn(async () => {
      throw new Meta4ProfileError(
        "META4_PROFILE_NOT_FOUND",
        "No se ha podido identificar tu sociedad en Meta4.",
      );
    });
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      lookupProfile,
    });

    await expect(service.login("user", "password")).rejects.toMatchObject({
      code: "META4_PROFILE_NOT_FOUND",
    });
    expect(repository.persistMeta4LoginState).not.toHaveBeenCalled();
    expect(localSessions).toEqual([]);
    expect(getProfile()).toBeNull();
  });

  it("does not persist when DPAPI fails after a successful CSP match", async () => {
    const { repository, profileRepository, localSessions } = createRepository();
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi: {
        protectSecret: vi.fn().mockRejectedValue(new Error("dpapi")),
        unprotectSecret: vi.fn(),
      },
      soap: createSoap(),
      now: () => now,
      lookupProfile: vi.fn(async () => ({
        matches: [{ society: "CYC" as const, profile: createProfile("CYC") }],
      })),
    });

    await expect(service.login("user", "password")).rejects.toMatchObject({
      name: "LocalSessionStoreError",
      code: "META4_LOCAL_SESSION_FAILED",
    });
    expect(repository.persistMeta4LoginState).not.toHaveBeenCalled();
    expect(localSessions).toEqual([]);
  });

  it("clears profile on Meta4 logout", async () => {
    const fixture = createRepository();
    const service = createAuthService({
      repository: fixture.repository,
      profileRepository: fixture.profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      createSessionNonce: () => "F".repeat(43),
      createLocalSessionId: () => "meta4-logout-session",
      lookupProfile: vi.fn(async () => ({
        matches: [{ society: "COLL" as const, profile: createProfile("COLL", "meta4-user") }],
      })),
    });
    const login = await service.login("meta4-user", "password");
    expect(fixture.getProfile()?.society).toBe("COLL");
    vi.clearAllMocks();

    await service.logout(login.sessionNonce);

    expect(fixture.repository.clearAuthState).toHaveBeenCalledOnce();
    expect(fixture.getProfile()).toBeNull();
  });

  it("rejects operational Meta4 access from debug before reading the SOAP session", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    const { repository, profileRepository } = createRepository({
      id: "global",
      username: "meta4-user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:old-refresh",
      lastValidatedAt: now,
    });
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      createSessionNonce: () => "G".repeat(43),
      createLocalSessionId: () => "debug-operational-session",
      lookupProfile: vi.fn(),
    });
    const login = await service.debugLogin();
    const resolved = await service.resolveSession(login.sessionNonce);
    if (!resolved) throw new Error("Expected debug session");
    vi.clearAllMocks();

    await expect(service.getOperationalSession(resolved)).rejects.toBeInstanceOf(
      Meta4SessionRequiredError,
    );
    expect(repository.getSoapSession).not.toHaveBeenCalled();
  });

  it("repairs a missing profile once with single-flight semantics", async () => {
    const fixture = createRepository({
      id: "global",
      username: "user",
      jsessionIdEncrypted: "encrypted:jsession",
      refreshSessionIdEncrypted: "encrypted:refresh",
      lastValidatedAt: now,
    });
    await fixture.repository.createLocalBrowserSession({
      id: "browser",
      cookieHash: "hash",
      username: "user",
      authMode: "meta4",
      expiresAt: new Date("2099-01-01T00:00:00.000Z"),
    });
    const lookupProfile = vi.fn(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      return { matches: [{ society: "CYC" as const, profile: createProfile("CYC", "user") }] };
    });
    const hashModule = await import("@/lib/auth/token");
    const nonce = "H".repeat(43);
    const cookieHash = hashModule.hashOpaqueSessionId(nonce);
    fixture.localSessions[0]!.cookieHash = cookieHash;

    const service = createAuthService({
      repository: fixture.repository,
      profileRepository: fixture.profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      lookupProfile,
    });

    const [first, second] = await Promise.all([
      service.resolveSession(nonce),
      service.resolveSession(nonce),
    ]);

    expect(first?.authContext.societyCode).toBe("CYC");
    expect(second?.authContext.societyCode).toBe("CYC");
    expect(lookupProfile).toHaveBeenCalledOnce();
    expect(fixture.repository.persistMeta4ProfileRepair).toHaveBeenCalledOnce();
  });

  it("restores once for concurrent callers and invalidates state when retrieve fails", async () => {
    const { repository, profileRepository } = createRepository({
      id: "global",
      username: "user",
      jsessionIdEncrypted: "encrypted:old-jsession",
      refreshSessionIdEncrypted: "encrypted:refresh",
      lastValidatedAt: null,
    });
    const dpapi = createDpapi();
    const soap = createSoap();
    soap.retrieveM4Session.mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      return { jSessionId: "new-jsession" };
    });
    const service = createAuthService({
      repository,
      profileRepository,
      dpapi,
      soap,
      now: () => now,
      lookupProfile: vi.fn(),
    });

    const results = await Promise.all([service.restoreSession(), service.restoreSession()]);
    expect(results).toEqual([{ username: "user" }, { username: "user" }]);
    expect(soap.retrieveM4Session).toHaveBeenCalledOnce();

    const failing = createRepository({
      id: "global",
      username: "user",
      jsessionIdEncrypted: "encrypted:old",
      refreshSessionIdEncrypted: "encrypted:refresh",
      lastValidatedAt: null,
    });
    const failingService = createAuthService({
      repository: failing.repository,
      profileRepository: failing.profileRepository,
      dpapi,
      soap: {
        ...createSoap(),
        retrieveM4Session: vi.fn().mockRejectedValue(new Error("expired")),
      },
      now: () => now,
      lookupProfile: vi.fn(),
    });

    await expect(failingService.restoreSession()).resolves.toBeNull();
    expect(failing.repository.clearAuthState).toHaveBeenCalledOnce();
  });

  it("persists every matched society and switches only authorized workspaces", async () => {
    const fixture = createRepository();
    const service = createAuthService({
      repository: fixture.repository,
      profileRepository: fixture.profileRepository,
      dpapi: createDpapi(),
      soap: createSoap(),
      now: () => now,
      createSessionNonce: () => "I".repeat(43),
      createLocalSessionId: () => "multi-session",
      lookupProfile: vi.fn(async () => ({
        matches: [
          { society: "CYC" as const, profile: createProfile("CYC", "user") },
          { society: "IBER" as const, profile: createProfile("IBER", "user") },
        ],
      })),
    });

    const login = await service.login("user", "password");
    expect(login.availableSocieties).toEqual(["CYC", "IBER"]);
    expect(fixture.repository.persistMeta4LoginState).toHaveBeenCalledWith(
      expect.objectContaining({
        profiles: [
          expect.objectContaining({ society: "CYC" }),
          expect.objectContaining({ society: "IBER" }),
        ],
      }),
    );

    const authSession = {
      sessionId: "multi-session",
      cookieHash: "hash",
      authContext: {
        mode: "meta4" as const,
        username: "user",
        canUseMeta4: true,
        societyCode: "CYC" as const,
        availableSocieties: ["CYC", "IBER"] as Array<"CYC" | "IBER" | "COLL">,
      },
      expiresAt: new Date("2099-01-01T00:00:00.000Z"),
      lastValidatedAt: now,
    };

    await expect(service.switchWorkspace(authSession, "IBER")).resolves.toMatchObject({
      society: "IBER",
      companyId: "company-IBER",
    });
    expect(fixture.repository.activateWorkspace).toHaveBeenCalledWith("IBER", ["CYC", "IBER"]);
    await expect(service.switchWorkspace(authSession, "COLL")).rejects.toBeInstanceOf(
      Meta4SocietyNotAllowedError,
    );
  });
});
