import type { Meta4UserListItem } from "@/lib/meta4/users/types";
import { employeeIdsEqual } from "@/lib/meta4/users/employee-id";

import { escapeRegExp, normalizeSearchText } from "../normalize";

const EMPLOYEE_INTENT =
  /\b(puesto|unidad|area|área|correo|email|centro|direccion|dirección|empleado|empleada|matricula|matrícula|trabajador|trabajadora|quien|quién)\b/i;

const STOPWORDS = new Set(
  [
    "a",
    "al",
    "como",
    "con",
    "cual",
    "cuando",
    "de",
    "del",
    "donde",
    "e",
    "el",
    "en",
    "es",
    "esta",
    "este",
    "hay",
    "la",
    "las",
    "los",
    "mas",
    "me",
    "mi",
    "ni",
    "no",
    "o",
    "para",
    "pero",
    "por",
    "que",
    "se",
    "si",
    "su",
    "sus",
    "te",
    "tiene",
    "trabaja",
    "trabajando",
    "un",
    "una",
    "y",
    "el",
  ].map(normalizeSearchText),
);

export type ResolvedEmployee = {
  employeeId: string;
  fullName: string;
  matchedSpan: string;
};

export type EmployeeResolveResult =
  | { status: "none" }
  | { status: "unique"; employee: ResolvedEmployee }
  | { status: "ambiguous"; candidates: ResolvedEmployee[] }
  | { status: "unresolved"; message: string };

const hasEmployeeIntent = (text: string): boolean => EMPLOYEE_INTENT.test(normalizeSearchText(text));

export const isEmployeeSearchStopword = (value: string): boolean =>
  STOPWORDS.has(normalizeSearchText(value));

const wholeWordMatch = (haystack: string, needle: string): boolean => {
  const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegExp(needle)}([^\\p{L}\\p{N}]|$)`, "iu");
  return pattern.test(haystack);
};

export const collectDigitSpans = (text: string): string[] => text.match(/\b\d{2,}\b/g) ?? [];

const collectNameLikeSpans = (text: string): string[] => {
  const matches = text.match(/[A-ZÁÉÍÓÚÑ][\p{L}'’.-]*(?:\s+[A-ZÁÉÍÓÚÑ][\p{L}'’.-]*)*/gu) ?? [];
  return matches.filter((span) => !STOPWORDS.has(normalizeSearchText(span)));
};

const usersMatchingNameTokens = (
  users: readonly Meta4UserListItem[],
  query: string,
): Meta4UserListItem[] => {
  const tokens = normalizeSearchText(query)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token));
  if (tokens.length === 0) return [];
  return users.filter((user) => {
    const name = normalizeSearchText(user.fullName);
    return tokens.every((token) => name.includes(token));
  });
};

export const resolveEmployeeMention = (
  text: string,
  users: readonly Meta4UserListItem[],
): EmployeeResolveResult => {
  const uniqueById = new Map<string, ResolvedEmployee>();
  const add = (user: Meta4UserListItem, span: string) => {
    uniqueById.set(user.id, { employeeId: user.id, fullName: user.fullName, matchedSpan: span });
  };

  for (const span of collectDigitSpans(text)) {
    const matches = users.filter(
      (user) => employeeIdsEqual(user.id, span) || wholeWordMatch(user.id, span),
    );
    if (matches.length === 1 && matches[0]) add(matches[0], span);
    if (matches.length > 1) {
      return {
        status: "ambiguous",
        candidates: matches.map((user) => ({
          employeeId: user.id,
          fullName: user.fullName,
          matchedSpan: span,
        })),
      };
    }
  }

  const byNameLength = [...users].sort((left, right) => right.fullName.length - left.fullName.length);
  for (const user of byNameLength) {
    const normalizedName = normalizeSearchText(user.fullName);
    if (normalizedName.length < 3) continue;
    if (normalizeSearchText(text).includes(normalizedName)) add(user, user.fullName);
  }

  if (uniqueById.size === 1) {
    const employee = [...uniqueById.values()][0];
    if (employee) return { status: "unique", employee };
  }
  if (uniqueById.size > 1) {
    return { status: "ambiguous", candidates: [...uniqueById.values()] };
  }

  const intent = hasEmployeeIntent(text);
  const nameSpans = collectNameLikeSpans(text);
  const digitSpans = collectDigitSpans(text);
  const unmatchedRecognizable: string[] = [];

  for (const span of [...digitSpans, ...nameSpans]) {
    const already = [...uniqueById.values()].some(
      (item) =>
        normalizeSearchText(item.matchedSpan) === normalizeSearchText(span) ||
        employeeIdsEqual(item.employeeId, span),
    );
    if (already) continue;
    const matches = usersMatchingNameTokens(users, span);
    if (matches.length === 1 && matches[0]) {
      add(matches[0], span);
      continue;
    }
    if (matches.length > 1) {
      return {
        status: "ambiguous",
        candidates: matches.map((user) => ({
          employeeId: user.id,
          fullName: user.fullName,
          matchedSpan: span,
        })),
      };
    }
    if (intent) unmatchedRecognizable.push(span);
  }

  if (uniqueById.size === 1) {
    const employee = [...uniqueById.values()][0];
    if (employee) return { status: "unique", employee };
  }
  if (uniqueById.size > 1) {
    return { status: "ambiguous", candidates: [...uniqueById.values()] };
  }
  if (intent && unmatchedRecognizable.length > 0) {
    return {
      status: "unresolved",
      message:
        "No he podido identificar al empleado de forma segura. Indica la matrícula o el nombre y apellidos completos.",
    };
  }
  return { status: "none" };
};

export const messageHasEmployeeIntent = (text: string): boolean => hasEmployeeIntent(text);

export const replaceMentionWithToken = (text: string, span: string, token: string): string => {
  const trimmed = span.trim();
  if (!trimmed) return text;
  const pattern = new RegExp(
    `(^|[^\\p{L}\\p{N}])${escapeRegExp(trimmed)}([^\\p{L}\\p{N}]|$)`,
    "iu",
  );
  return text.replace(pattern, `$1${token}$2`);
};
