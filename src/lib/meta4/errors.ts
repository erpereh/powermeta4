export class Meta4SessionRequiredError extends Error {
  readonly code = "META4_SESSION_REQUIRED" as const;

  constructor() {
    super("Esta herramienta requiere una sesión Meta4 real y no está disponible en modo debug.");
    this.name = "Meta4SessionRequiredError";
  }
}

export class Meta4SocietyNotAllowedError extends Error {
  readonly code = "SOCIETY_NOT_ALLOWED" as const;

  constructor() {
    super("No tienes acceso a esa sociedad Meta4.");
    this.name = "Meta4SocietyNotAllowedError";
  }
}

export { Meta4ProfileError, isMeta4ProfileError } from "./profile-errors";
export type { Meta4ProfileErrorCode } from "./profile-errors";
