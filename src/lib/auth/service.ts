import "server-only";

import {
  createOpaqueSessionId,
  hashOpaqueSessionId,
  SESSION_DURATION_SECONDS,
  SESSION_TOUCH_INTERVAL_MS,
} from "./token";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { Meta4Client } from "@/lib/meta4/client";
import type { AuthRepository } from "./session-repository";

const RESTORE_CACHE_MS = 5 * 60 * 1000;

export type AuthService = ReturnType<typeof createAuthService>;

type AuthServiceOptions = {
  repository: AuthRepository;
  dpapi: DpapiAdapter;
  soap: Meta4Client;
  now?: () => Date;
  createSessionId?: () => string;
};

const asErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Error desconocido";

export const createAuthService = ({
  repository,
  dpapi,
  soap,
  now = () => new Date(),
  createSessionId = createOpaqueSessionId,
}: AuthServiceOptions) => {
  let restoreFlight: Promise<{ username: string } | null> | null = null;
  let restoredUsername: string | null = null;
  let restoreReadyUntil = 0;

  const invalidate = async (): Promise<null> => {
    restoredUsername = null;
    restoreReadyUntil = 0;
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
    const sessionId = createSessionId();
    await repository.createLocalBrowserSession({
      id: sessionId,
      cookieHash: hashOpaqueSessionId(sessionId),
      username,
      expiresAt: new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000),
    });
    restoredUsername = username;
    restoreReadyUntil = currentTime.getTime() + RESTORE_CACHE_MS;
    return {
      sessionId,
      username,
      expiresAt: new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000),
    };
  };

  const getLocalSession = async (sessionId: string) => {
    const session = await repository.getLocalBrowserSession(hashOpaqueSessionId(sessionId));
    const currentTime = now();
    if (!session || session.revokedAt || session.expiresAt <= currentTime) return null;

    const shouldTouch =
      currentTime.getTime() - session.lastSeenAt.getTime() >= SESSION_TOUCH_INTERVAL_MS;
    const expiresAt = shouldTouch
      ? new Date(currentTime.getTime() + SESSION_DURATION_SECONDS * 1000)
      : session.expiresAt;
    if (shouldTouch) await repository.touchLocalBrowserSession(session.id, currentTime, expiresAt);
    return {
      sessionId,
      username: session.username,
      expiresAt,
      lastValidatedAt: restoredUsername ? currentTime : null,
    };
  };

  const logout = async (sessionId: string | undefined) => {
    if (sessionId) {
      const session = await repository.getLocalBrowserSession(hashOpaqueSessionId(sessionId));
      if (session) await repository.revokeLocalBrowserSession(session.id);
    }
  };

  const getOperationalSession = async () => {
    const restored = await restoreSession();
    if (!restored) return null;
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
    restoreSession,
    getLocalSession,
    logout,
    invalidate,
    getOperationalSession,
    renewSession: () => restoreSession({ force: true }),
    describeError: asErrorMessage,
  };
};
