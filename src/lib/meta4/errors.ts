export class Meta4SessionRequiredError extends Error {
  readonly code = "META4_SESSION_REQUIRED" as const;

  constructor() {
    super("Esta herramienta requiere una sesión Meta4 real y no está disponible en modo debug.");
    this.name = "Meta4SessionRequiredError";
  }
}

export { Meta4ProfileError, isMeta4ProfileError } from "./profile-errors";
export type { Meta4ProfileErrorCode } from "./profile-errors";
