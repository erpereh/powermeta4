import { identifier, type AuditRow } from "./readonly-audit-model";

export const SAFE_FIELDS = new Set([
  "ID_T3",
  "ID_T3_BASE",
  "ID_T3_USED",
  "ID_NODE",
  "ID_NODE_USED",
  "ID_TI",
  "ID_TI_BASE",
  "ID_TI_USED",
  "ID_RULE_TI",
  "ID_ITEM",
  "ID_ITEM_USED",
  "ID_OBJECT",
  "ID_FIELD",
  "REAL_NAME",
  "ID_READ_OBJECT",
  "ID_WRITE_OBJECT",
  "ID_READ_FIELD",
  "ID_READ_SENTENCE",
  "ID_SENTENCE",
  "ID_WHERE_TYPE",
  "ID_METHOD",
  "IS_METARULE",
  "IS_ROOT",
  "ID_CSTYPE",
  "PARAM_POS",
  "APISQL",
  "SOURCE_CODE",
  "DATA_TYPE",
  "LENGTH",
  "PRECISION",
  "SCALE",
  "IS_NULLABLE",
  "ID_CONNECTOR_T3",
  "ID_ITEM_CONCTOR_T3",
  "ID_TYPE",
  "ID_NODE_BASE",
]);
const literals = new Set([
  "PENDIENTE",
  "ACEPTADO",
  "ACEPTADA",
  "RECHAZADO",
  "BORRADO",
  "CYC",
  "IBER",
  "COLL",
  "EUR",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "-1",
  "4000-01-01",
]);
export function safeMetadataText(value: string, symbols: ReadonlySet<string> = new Set()): string {
  return value
    .replace(
      /'(?:''|\\.|[^'\\])*'|"(?:""|\\.|[^"\\])*"|\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|--[^\r\n]*/g,
      (token) => {
        if (token.startsWith("/*") || token.startsWith("//") || token.startsWith("--")) return " ";
        const content = token.slice(1, -1);
        return `${token[0]}${literals.has(content) || symbols.has(content) ? content : "[LITERAL OMITIDO]"}${token[0]}`;
      },
    )
    .replace(/(?:https?:\/\/|\\\\)[^\s'"<>]+/gi, "[DIRECCIÓN OMITIDA]")
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[CORREO OMITIDO]")
    .replace(/'(?:''|[^'])*'|"(?:""|[^"])*"|\b(?:0x[A-F0-9]+|\d+(?:\.\d+)?)\b/gi, (token) =>
      token.startsWith("'") || token.startsWith('"') || literals.has(token)
        ? token
        : "[NÚMERO OMITIDO]",
    );
}
export function sanitizeMetadataRows(
  rows: readonly AuditRow[],
  symbols: ReadonlySet<string>,
): Record<string, string | number | null>[] {
  return rows.map((row) =>
    Object.fromEntries(
      Object.entries(row).flatMap(([name, value]): [string, string | number | null][] => {
        if (!SAFE_FIELDS.has(name)) return [];
        if (value === null || (typeof value === "number" && Number.isFinite(value)))
          return [[name, value]];
        if (typeof value !== "string") return [];
        return [
          [
            name,
            name === "SOURCE_CODE" || name === "APISQL"
              ? safeMetadataText(value, symbols)
              : identifier.test(value.trim()) || /^\d{1,4}$/.test(value.trim())
                ? value.trim()
                : "[VALOR OMITIDO]",
          ],
        ];
      }),
    ),
  );
}
