const ORDINAL_REPLACEMENTS: ReadonlyArray<[RegExp, string]> = [
  [/(^|\s)1\s*[ªa](?=\s|$)/gi, "$1primera"],
  [/(^|\s)1\s*[ºo](?=\s|$)/gi, "$1primero"],
  [/(^|\s)2\s*[ªa](?=\s|$)/gi, "$1segunda"],
  [/(^|\s)2\s*[ºo](?=\s|$)/gi, "$1segundo"],
  [/(^|\s)3\s*[ªa](?=\s|$)/gi, "$1tercera"],
  [/(^|\s)3\s*[ºo](?=\s|$)/gi, "$1tercero"],
];

export function normalizeComparableText(value: unknown): string {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[.:;,_/\\|()[\]{}-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function normalizeNif(value: unknown): string {
  return String(value ?? "")
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "");
}

export function normalizeEmployeeId(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

export function normalizeEmployeeNumber(value: unknown): string {
  return normalizeEmployeeId(value);
}

export function normalizeProfessionalGroup(value: unknown): string {
  let text = String(value ?? "");
  for (const [pattern, replacement] of ORDINAL_REPLACEMENTS) {
    text = text.replace(pattern, replacement);
  }

  return normalizeComparableText(text)
    .replace(/\boficial de primero\b/g, "oficial de primera")
    .replace(/\bjefe de primero\b/g, "jefe de primera");
}

export function valuesEquivalent(expected: unknown, actual: unknown): boolean {
  return normalizeComparableText(expected) === normalizeComparableText(actual);
}
