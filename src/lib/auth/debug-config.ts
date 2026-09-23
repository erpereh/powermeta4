import "server-only";

export const DEBUG_AUTH_NOT_ALLOWED = "DEBUG_AUTH_NOT_ALLOWED" as const;
export const DEBUG_AUTH_DISABLED = "DEBUG_AUTH_DISABLED" as const;

export type DebugAuthConfigurationErrorCode =
  | typeof DEBUG_AUTH_NOT_ALLOWED
  | typeof DEBUG_AUTH_DISABLED;

export class DebugAuthConfigurationError extends Error {
  readonly code: DebugAuthConfigurationErrorCode;

  constructor(code: DebugAuthConfigurationErrorCode) {
    super("El modo debug no está disponible.");
    this.name = "DebugAuthConfigurationError";
    this.code = code;
  }
}

export const isDebugAuthEnabled = (): boolean =>
  process.env.NODE_ENV === "development" && process.env.POWERMETA4_DEBUG_AUTH === "true";

export const getDebugUsername = (): string => {
  const configuredUsername = process.env.POWERMETA4_DEBUG_USERNAME?.trim();
  return configuredUsername || "DEBUG";
};

export const createDebugAuthConfigurationError = (): DebugAuthConfigurationError =>
  new DebugAuthConfigurationError(
    process.env.NODE_ENV === "development" ? DEBUG_AUTH_DISABLED : DEBUG_AUTH_NOT_ALLOWED,
  );

export type QuickLoginCredentials = {
  readonly username: string;
  readonly password: string;
};

/**
 * Acceso rápido de desarrollo con un usuario Meta4 real de pruebas. Las
 * credenciales viven solo en `.env.local` (ignorado por git) y se leen en
 * servidor; la contraseña nunca llega al navegador.
 */
export const getQuickLoginCredentials = (): QuickLoginCredentials | undefined => {
  if (process.env.NODE_ENV !== "development") return undefined;
  const username = process.env.POWERMETA4_QUICK_LOGIN_USERNAME?.trim();
  const password = process.env.POWERMETA4_QUICK_LOGIN_PASSWORD;
  if (!username || !password) return undefined;
  return { username, password };
};
