export type Meta4HireErrorCode =
  | "META4_HIRE_INVALID_RESPONSE"
  | "META4_HIRE_IMPORT_FAILED"
  | "META4_HIRE_IMPORT_REJECTED"
  | "META4_HIRE_FETCH_FAILED"
  | "META4_HIRE_CONFIG"
  | "META4_HIRE_EDIT_FAILED"
  | "META4_HIRE_WRITE_FAILED"
  | "META4_HIRE_CATALOG_UNAVAILABLE"
  | "META4_HIRE_VALIDATION";

/**
 * One problem the person filling the form can fix: `person` is 1-based and
 * `field` is the HirePerson key the message refers to, when there is one.
 */
export type Meta4HireIssue = {
  person?: number;
  field?: string;
  message: string;
};

export class Meta4HireError extends Error {
  readonly code: Meta4HireErrorCode;
  readonly issues: readonly Meta4HireIssue[];

  constructor(code: Meta4HireErrorCode, message: string, issues: readonly Meta4HireIssue[] = []) {
    super(message);
    this.name = "Meta4HireError";
    this.code = code;
    this.issues = issues;
  }
}

export const isMeta4HireError = (error: unknown): error is Meta4HireError =>
  error instanceof Meta4HireError;
