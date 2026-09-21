export type Meta4HireErrorCode =
  | "META4_HIRE_INVALID_RESPONSE"
  | "META4_HIRE_IMPORT_FAILED"
  | "META4_HIRE_FETCH_FAILED"
  | "META4_HIRE_CONFIG"
  | "META4_HIRE_FILE_FAILED"
  | "META4_HIRE_VALIDATION";

export class Meta4HireError extends Error {
  readonly code: Meta4HireErrorCode;

  constructor(code: Meta4HireErrorCode, message: string) {
    super(message);
    this.name = "Meta4HireError";
    this.code = code;
  }
}

export const isMeta4HireError = (error: unknown): error is Meta4HireError =>
  error instanceof Meta4HireError;
