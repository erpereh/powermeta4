export const META4_LOCAL_SESSION_FAILED = "META4_LOCAL_SESSION_FAILED" as const;

export class LocalSessionStoreError extends Error {
  readonly code = META4_LOCAL_SESSION_FAILED;

  constructor(
    message = "Se ha iniciado sesión en Meta4, pero no se ha podido guardar la sesión local.",
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "LocalSessionStoreError";
  }
}

export const isLocalSessionStoreError = (error: unknown): error is LocalSessionStoreError =>
  error instanceof LocalSessionStoreError;

export const toLocalSessionStoreError = (error: unknown): LocalSessionStoreError =>
  isLocalSessionStoreError(error) ? error : new LocalSessionStoreError(undefined, { cause: error });
