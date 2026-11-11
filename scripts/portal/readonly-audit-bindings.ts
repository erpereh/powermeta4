import {
  AuditFailure,
  type AuditBinding,
  type AuditParams,
  type AuditReadOptions,
} from "./readonly-audit-model";

const integerRanges: Record<string, readonly [bigint, bigint]> = {
  bit: [BigInt(0), BigInt(1)],
  tinyint: [BigInt(0), BigInt(255)],
  smallint: [BigInt(-32768), BigInt(32767)],
  int: [BigInt(-2147483648), BigInt(2147483647)],
  bigint: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
};

/** Solo tipos publicados y valores representables; nunca recorta ni convierte columnas. */
export function auditBindingIssue(
  value: string | number | Date,
  binding: AuditBinding,
): string | null {
  const type = binding.type.toLowerCase();
  if (["char", "varchar", "nchar", "nvarchar"].includes(type)) {
    if (typeof value !== "string") return "PARAMETER_TYPE_MISMATCH";
    const length = binding.length ?? 128;
    const maximum = type.startsWith("n") ? 4000 : 8000;
    if (length === -1 && ["varchar", "nvarchar"].includes(type)) return null;
    if (!Number.isInteger(length) || length < 1 || length > maximum)
      return "PARAMETER_INVALID_LENGTH";
    return value.length > length ? "PARAMETER_VALUE_TOO_LONG" : null;
  }
  const range = integerRanges[type];
  if (!range) return "PARAMETER_UNSUPPORTED_TYPE";
  if (
    value instanceof Date ||
    (typeof value === "number" && !Number.isSafeInteger(value)) ||
    !/^-?\d+$/.test(String(value))
  )
    return "PARAMETER_INVALID_VALUE";
  const integer = BigInt(value);
  return integer < range[0] || integer > range[1] ? "PARAMETER_INVALID_VALUE" : null;
}

export function assertAuditBindings(
  params: AuditParams,
  meta: Pick<AuditReadOptions, "bindings">,
): void {
  for (const [key, binding] of Object.entries(meta.bindings ?? {})) {
    const value = params[key];
    if (value === undefined) throw new AuditFailure("PARAMETER_MISSING");
    const issue = auditBindingIssue(value, binding);
    if (issue) throw new AuditFailure(issue);
  }
}
