export type Meta4ProfileErrorCode =
  | "META4_PROFILE_NOT_FOUND"
  | "META4_PROFILE_LOOKUP_FAILED"
  | "META4_PROFILE_INVALID_RESPONSE"
  | "META4_PROFILE_REQUIRED";

export class Meta4ProfileError extends Error {
  readonly code: Meta4ProfileErrorCode;

  constructor(code: Meta4ProfileErrorCode, message: string) {
    super(message);
    this.name = "Meta4ProfileError";
    this.code = code;
  }
}

export const isMeta4ProfileError = (error: unknown): error is Meta4ProfileError =>
  error instanceof Meta4ProfileError;
