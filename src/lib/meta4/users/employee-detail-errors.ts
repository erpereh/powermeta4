export type Meta4ConsultaOroErrorCode =
  | "META4_CONSULTA_ORO_INVALID_RESPONSE"
  | "META4_CONSULTA_ORO_NOT_FOUND"
  | "META4_CONSULTA_ORO_FETCH_FAILED"
  | "META4_CONSULTA_ORO_FORBIDDEN";

export class Meta4ConsultaOroError extends Error {
  readonly code: Meta4ConsultaOroErrorCode;

  constructor(code: Meta4ConsultaOroErrorCode, message: string) {
    super(message);
    this.name = "Meta4ConsultaOroError";
    this.code = code;
  }
}

export const isMeta4ConsultaOroError = (error: unknown): error is Meta4ConsultaOroError =>
  error instanceof Meta4ConsultaOroError;
