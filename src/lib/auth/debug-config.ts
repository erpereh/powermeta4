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
