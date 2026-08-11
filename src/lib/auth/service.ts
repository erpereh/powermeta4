import "server-only";

import { randomUUID } from "node:crypto";

import { assertDebugAuthEnabled, getDebugUsername, isDebugAuthEnabled } from "./debug-config";
import {
  createOpaqueSessionId,
  hashOpaqueSessionId,
  SESSION_DURATION_SECONDS,
  SESSION_TOUCH_INTERVAL_MS,
} from "./token";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { Meta4Client } from "@/lib/meta4/client";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
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
  dpapi: DpapiAdapter;
  soap: Meta4Client;
  now?: () => Date;
  createSessionNonce?: () => string;
  createLocalSessionId?: () => string;
};

type LocalSession = NonNullable<Awaited<ReturnType<AuthRepository["getLocalBrowserSession"]>>>;

const asErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Error desconocido";

const createAuthContext = (mode: AuthMode, username: string): AuthContext => ({
  mode,
  username,
  canUseMeta4: mode === "meta4",
});

export const createAuthService = ({
  repository,
  dpapi,
  soap,
  now = () => new Date(),
  createSessionNonce = createOpaqueSessionId,
  createLocalSessionId = randomUUID,
}: AuthServiceOptions) => {
  let restoreFlight: Promise<{ username: string } | null> | null = null;
  let restoredUsername: string | null = null;
  let restoreReadyUntil = 0;

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

  const createBrowserSession = async (input: {
    username: string;
    authMode: AuthMode;
    replaceExistingLocalSessions?: boolean;
  }) => {
    const currentTime = now();
    const sessionNonce = createSessionNonce();
    const expiresAt = new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000);
    const data = {
      id: createLocalSessionId(),
      cookieHash: hashOpaqueSessionId(sessionNonce),
      username: input.username,
      authMode: input.authMode,
      expiresAt,
    };
    if (input.replaceExistingLocalSessions) {
      await repository.replaceLocalBrowserSessions(data);
    } else {
      await repository.createLocalBrowserSession(data);
    }
    return { sessionNonce, username: input.username, expiresAt };
  };

  const login = async (username: string, password: string) => {
    if (!username || !password) throw new Error("El usuario y la contraseña son obligatorios.");

    const loggedIn = await soap.login(username, password);
    const currentTime = now();
    const [jsessionIdEncrypted, refreshSessionIdEncrypted] = await Promise.all([
      dpapi.protectSecret(loggedIn.jSessionId),
      dpapi.protectSecret(loggedIn.refreshSessionId),
    ]);
    await repository.replaceAuthState({
      username,
      jsessionIdEncrypted,
      refreshSessionIdEncrypted,
      lastValidatedAt: currentTime,
    });
    const session = await createBrowserSession({ username, authMode: "meta4" });
    restoredUsername = username;
    restoreReadyUntil = currentTime.getTime() + RESTORE_CACHE_MS;
    return session;
  };

  const debugLogin = async () => {
    assertDebugAuthEnabled();
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
        authContext: createAuthContext("debug", touchedLocalSession.username),
        expiresAt: touchedLocalSession.expiresAt,
        lastValidatedAt: null,
      };
    }

    const restored = await restoreSession();
    if (!restored) return null;
    const soapSession = await repository.getSoapSession();
    if (!soapSession) return null;
    const touchedLocalSession = await touchLocalBrowserSession(localSession);
    return {
      sessionId: touchedLocalSession.id,
      cookieHash: touchedLocalSession.cookieHash,
      authContext: createAuthContext("meta4", touchedLocalSession.username),
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
