export type Meta4UsersErrorCode = "META4_USERS_FETCH_FAILED";

export class Meta4UsersError extends Error {
  readonly code: Meta4UsersErrorCode;

  constructor(code: Meta4UsersErrorCode, message: string) {
    super(message);
    this.name = "Meta4UsersError";
    this.code = code;
  }
}

export const isMeta4UsersError = (error: unknown): error is Meta4UsersError =>
  error instanceof Meta4UsersError;
