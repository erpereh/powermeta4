import "server-only";

import { randomUUID } from "node:crypto";

import {
  createDebugAuthConfigurationError,
  getDebugUsername,
  isDebugAuthEnabled,
} from "./debug-config";
import {
  createOpaqueSessionId,
  hashOpaqueSessionId,
  SESSION_DURATION_SECONDS,
  SESSION_TOUCH_INTERVAL_MS,
} from "./token";
import { toLocalSessionStoreError } from "./local-session-store-error";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { Meta4Client } from "@/lib/meta4/client";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import type { Meta4Society } from "@/lib/meta4/societies";
import { lookupMeta4SocietyProfile, type Meta4SoapPoster } from "@/lib/meta4/user-profile-lookup";
import {
  encryptMeta4ProfilePayload,
  resolveDisplayName,
  type Meta4UserProfileRepository,
} from "@/server/database/repositories/meta4-user-profile-repository";
import type { AuthRepository } from "./session-repository";
import type { AuthContext, AuthMode } from "@/types/session";

const RESTORE_CACHE_MS = 5 * 60 * 1000;

export type AuthService = ReturnType<typeof createAuthService>;

export type ResolvedAuthSession = {
  sessionId: string;
  cookieHash: string;
  authContext: AuthContext;
  expiresAt: Date;
  lastValidatedAt: Date | null;
};

type AuthServiceOptions = {
  repository: AuthRepository;
  profileRepository: Meta4UserProfileRepository;
  dpapi: DpapiAdapter;
  soap: Meta4Client;
  now?: () => Date;
  createSessionNonce?: () => string;
  createLocalSessionId?: () => string;
  lookupProfile?: typeof lookupMeta4SocietyProfile;
  logProfileLookup?: (message: string, details: Record<string, string>) => void;
};

type LocalSession = NonNullable<Awaited<ReturnType<AuthRepository["getLocalBrowserSession"]>>>;

const asErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Error desconocido";

const createAuthContext = (
  mode: AuthMode,
  username: string,
  societyCode: Meta4Society | null = null,
): AuthContext => ({
  mode,
  username,
  canUseMeta4: mode === "meta4",
  societyCode: mode === "meta4" ? societyCode : null,
});

export const createAuthService = ({
  repository,
  profileRepository,
  dpapi,
  soap,
  now = () => new Date(),
  createSessionNonce = createOpaqueSessionId,
  createLocalSessionId = randomUUID,
  lookupProfile = lookupMeta4SocietyProfile,
  logProfileLookup,
}: AuthServiceOptions) => {
  let restoreFlight: Promise<{ username: string } | null> | null = null;
  let restoredUsername: string | null = null;
  let restoreReadyUntil = 0;
  let profileRepairFlight: Promise<Meta4Society | null> | null = null;

  const clearRestoreCache = (): void => {
    restoredUsername = null;
    restoreReadyUntil = 0;
  };

  const invalidate = async (): Promise<null> => {
    clearRestoreCache();
    await repository.clearAuthState();
    return null;
  };

  const restoreOnce = async (): Promise<{ username: string } | null> => {
    const session = await repository.getSoapSession();
    if (!session?.refreshSessionIdEncrypted) return invalidate();

    try {
      const refreshSessionId = await dpapi.unprotectSecret(session.refreshSessionIdEncrypted);
      const renewed = await soap.retrieveM4Session(refreshSessionId);
      const currentTime = now();
      const encryptedJSessionId = await dpapi.protectSecret(renewed.jSessionId);
      await repository.updateJSessionId(encryptedJSessionId, currentTime);
      restoredUsername = session.username;
      restoreReadyUntil = currentTime.getTime() + RESTORE_CACHE_MS;
      return { username: session.username };
    } catch {
      return invalidate();
    }
  };

  const restoreSession = async (
    options: { force?: boolean } = {},
  ): Promise<{ username: string } | null> => {
    const currentTime = now().getTime();
    if (!options.force && restoredUsername && restoreReadyUntil > currentTime) {
      return { username: restoredUsername };
    }
    if (restoreFlight) return restoreFlight;
    restoreFlight = restoreOnce().finally(() => {
      restoreFlight = null;
    });
    return restoreFlight;
  };

  const createBrowserSessionPayload = (input: { username: string; authMode: AuthMode }) => {
    const currentTime = now();
    const sessionNonce = createSessionNonce();
    const expiresAt = new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000);
    return {
      sessionNonce,
      expiresAt,
      data: {
        id: createLocalSessionId(),
        cookieHash: hashOpaqueSessionId(sessionNonce),
        username: input.username,
        authMode: input.authMode,
        expiresAt,
      },
    };
  };

  const createBrowserSession = async (input: {
    username: string;
    authMode: AuthMode;
    replaceExistingLocalSessions?: boolean;
  }) => {
    const payload = createBrowserSessionPayload(input);
    if (input.replaceExistingLocalSessions) {
      await repository.replaceLocalBrowserSessions(payload.data);
    } else {
      await repository.createLocalBrowserSession(payload.data);
    }
    return {
      sessionNonce: payload.sessionNonce,
      username: input.username,
      expiresAt: payload.expiresAt,
    };
  };

  const createCookiePoster = (): Meta4SoapPoster => soap.createCookieSoapPoster();

  const repairMissingProfileOnce = async (username: string): Promise<Meta4Society | null> => {
    if (profileRepairFlight) return profileRepairFlight;
    profileRepairFlight = (async () => {
      const session = await repository.getSoapSession();
      if (!session?.refreshSessionIdEncrypted) return null;
      const existing = await profileRepository.getProfileRow();
      if (existing && existing.username === username) return existing.society;

      try {
        const jSessionId = await dpapi.unprotectSecret(session.jsessionIdEncrypted);
        const lookup = await lookupProfile({
          username,
          jSessionId,
          postSoap: createCookiePoster(),
          now,
          log: logProfileLookup,
        });
        const profileJsonEncrypted = await encryptMeta4ProfilePayload(dpapi, lookup.profile);
        await repository.persistMeta4ProfileRepair({
          profile: {
            username,
            society: lookup.society,
            displayName: resolveDisplayName(lookup.profile),
            profileJsonEncrypted,
            lookedUpAt: new Date(lookup.profile.lookedUpAt),
          },
        });
        return lookup.society;
      } catch {
        await invalidate();
        return null;
      }
    })().finally(() => {
      profileRepairFlight = null;
    });
    return profileRepairFlight;
  };

  const resolveSocietyCode = async (username: string): Promise<Meta4Society | null> => {
    const existing = await profileRepository.getProfileRow();
    if (existing && existing.username === username) return existing.society;
    return repairMissingProfileOnce(username);
  };

  const login = async (username: string, password: string) => {
    if (!username || !password) throw new Error("El usuario y la contraseña son obligatorios.");

    const loggedIn = await soap.login(username, password);
    const lookup = await lookupProfile({
      username,
      jSessionId: loggedIn.jSessionId,
      postSoap: createCookiePoster(),
      now,
      log: logProfileLookup,
    });

    try {
      const currentTime = now();
      const [jsessionIdEncrypted, refreshSessionIdEncrypted, profileJsonEncrypted] =
        await Promise.all([
          dpapi.protectSecret(loggedIn.jSessionId),
          dpapi.protectSecret(loggedIn.refreshSessionId),
          encryptMeta4ProfilePayload(dpapi, lookup.profile),
        ]);

      const browser = createBrowserSessionPayload({ username, authMode: "meta4" });
      await repository.persistMeta4LoginState({
        soap: {
          username,
          jsessionIdEncrypted,
          refreshSessionIdEncrypted,
          lastValidatedAt: currentTime,
        },
        profile: {
          username,
          society: lookup.society,
          displayName: resolveDisplayName(lookup.profile),
          profileJsonEncrypted,
          lookedUpAt: new Date(lookup.profile.lookedUpAt),
        },
        browserSession: browser.data,
      });

      restoredUsername = username;
      restoreReadyUntil = currentTime.getTime() + RESTORE_CACHE_MS;
      return {
        sessionNonce: browser.sessionNonce,
        username,
        expiresAt: browser.expiresAt,
        societyCode: lookup.society,
      };
    } catch (error) {
      throw toLocalSessionStoreError(error);
    }
  };

  const debugLogin = async () => {
    if (!isDebugAuthEnabled()) throw createDebugAuthConfigurationError();
    const { sessionNonce } = await createBrowserSession({
      username: getDebugUsername(),
      authMode: "debug",
      replaceExistingLocalSessions: true,
    });
    return { sessionNonce };
  };

  const getValidLocalBrowserSession = async (
    sessionNonce: string,
  ): Promise<LocalSession | null> => {
    const session = await repository.getLocalBrowserSession(hashOpaqueSessionId(sessionNonce));
    const currentTime = now();
    if (!session || session.revokedAt || session.expiresAt <= currentTime) return null;

    return session;
  };

  const touchLocalBrowserSession = async (session: LocalSession): Promise<LocalSession> => {
    const currentTime = now();
    const shouldTouch =
      currentTime.getTime() - session.lastSeenAt.getTime() >= SESSION_TOUCH_INTERVAL_MS;
    if (!shouldTouch) return session;
    const expiresAt = new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000);
    await repository.touchLocalBrowserSession(session.id, currentTime, expiresAt);
    return { ...session, expiresAt, lastSeenAt: currentTime };
  };

  const resolveSession = async (sessionNonce: string): Promise<ResolvedAuthSession | null> => {
    const localSession = await getValidLocalBrowserSession(sessionNonce);
    if (!localSession) return null;

    if (localSession.authMode === "debug") {
      if (!isDebugAuthEnabled()) {
        await repository.revokeLocalBrowserSession(localSession.id);
        return null;
      }
      const touchedLocalSession = await touchLocalBrowserSession(localSession);
      return {
        sessionId: touchedLocalSession.id,
        cookieHash: touchedLocalSession.cookieHash,
        authContext: createAuthContext("debug", touchedLocalSession.username, null),
        expiresAt: touchedLocalSession.expiresAt,
        lastValidatedAt: null,
      };
    }

    const restored = await restoreSession();
    if (!restored) return null;
    const soapSession = await repository.getSoapSession();
    if (!soapSession) return null;
    const societyCode = await resolveSocietyCode(localSession.username);
    if (!societyCode) return null;
    const touchedLocalSession = await touchLocalBrowserSession(localSession);
    return {
      sessionId: touchedLocalSession.id,
      cookieHash: touchedLocalSession.cookieHash,
      authContext: createAuthContext("meta4", touchedLocalSession.username, societyCode),
      expiresAt: touchedLocalSession.expiresAt,
      lastValidatedAt: soapSession.lastValidatedAt,
    };
  };

  const logout = async (sessionNonce: string | undefined): Promise<void> => {
    if (!sessionNonce) return;
    const localSession = await repository.getLocalBrowserSession(hashOpaqueSessionId(sessionNonce));
    if (!localSession) return;
    if (localSession.authMode === "debug") {
      await repository.revokeLocalBrowserSession(localSession.id);
      return;
    }
    await invalidate();
  };

  const assertMeta4Session = (authSession: ResolvedAuthSession): void => {
    if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
      throw new Meta4SessionRequiredError();
    }
  };

  const getOperationalSession = async (authSession: ResolvedAuthSession) => {
    assertMeta4Session(authSession);
    const session = await repository.getSoapSession();
    if (!session?.refreshSessionIdEncrypted) return invalidate();

    try {
      const [jSessionId, refreshSessionId] = await Promise.all([
        dpapi.unprotectSecret(session.jsessionIdEncrypted),
        dpapi.unprotectSecret(session.refreshSessionIdEncrypted),
      ]);
      return { username: session.username, jSessionId, refreshSessionId };
    } catch {
      return invalidate();
    }
  };

  return {
    login,
    debugLogin,
    restoreSession,
    resolveSession,
    logout,
    invalidate,
    getOperationalSession,
    renewSession: async (authSession: ResolvedAuthSession) => {
      assertMeta4Session(authSession);
      return restoreSession({ force: true });
    },
    describeError: asErrorMessage,
  };
};

export { Meta4ProfileError };
