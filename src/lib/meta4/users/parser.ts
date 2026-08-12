import "server-only";

import { XMLParser } from "fast-xml-parser";

import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { isMeta4Society, type Meta4Society } from "@/lib/meta4/societies";
import { Meta4UsersError } from "./errors";
import type { Meta4UserListItem } from "./types";

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
  // Keep id_Empleado (and other) values as strings so leading zeros survive.
  parseTagValue: false,
});

const toText = (value: unknown): string | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "object" && value !== null && "#text" in value) {
    return toText((value as { "#text": unknown })["#text"]);
  }
  return null;
};

const localNameOf = (key: string): string =>
  key.includes(":") ? key.slice(key.lastIndexOf(":") + 1) : key;

const asRecord = (value: unknown): Record<string, unknown> | null =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;

const findFirstChild = (value: unknown, wantedName: string): unknown => {
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findFirstChild(item, wantedName);
      if (found !== undefined) return found;
    }
    return undefined;
  }
  const record = asRecord(value);
  if (!record) return undefined;

  for (const [key, child] of Object.entries(record)) {
    if (localNameOf(key).toLowerCase() === wantedName.toLowerCase()) return child;
  }
  for (const child of Object.values(record)) {
    const found = findFirstChild(child, wantedName);
    if (found !== undefined) return found;
  }
  return undefined;
};

const hasKey = (value: unknown, wantedName: string): boolean => {
  if (Array.isArray(value)) return value.some((item) => hasKey(item, wantedName));
  const record = asRecord(value);
  if (!record) return false;
  return Object.entries(record).some(([key, child]) => {
    const localName = localNameOf(key);
    return localName.toLowerCase() === wantedName.toLowerCase() || hasKey(child, wantedName);
  });
};

const findValues = (value: unknown, wantedName: string, values: string[] = []): string[] => {
  if (Array.isArray(value)) {
    for (const item of value) findValues(item, wantedName, values);
    return values;
  }
  const record = asRecord(value);
  if (!record) return values;

  for (const [key, child] of Object.entries(record)) {
    if (localNameOf(key).toLowerCase() === wantedName.toLowerCase()) {
      const text = toText(child);
      if (text !== null) values.push(text);
    }
    findValues(child, wantedName, values);
  }
  return values;
};

const parseDocument = (xml: string): unknown => {
  if (!xml.trim()) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta del listado de usuarios Meta4 está vacía.",
    );
  }
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta del listado de usuarios Meta4 contiene declaraciones XML no permitidas.",
    );
  }
  try {
    return parser.parse(xml);
  } catch {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta del listado de usuarios Meta4 no contiene XML válido.",
    );
  }
};

const parseFault = (document: unknown): Meta4SoapFaultError | null => {
  const hasFault = hasKey(document, "Fault") || hasKey(document, "faultcode");
  if (!hasFault) return null;
  const code = findValues(document, "faultcode")[0] ?? null;
  const message = findValues(document, "faultstring")[0] ?? "Respuesta SOAP rechazada";
  return new Meta4SoapFaultError(message.slice(0, 240), code?.slice(0, 120) ?? null);
};

/** Normalizes a single RecordSet, an array, or undefined into a stable array. */
export const normalizeRecordSets = (value: unknown): Record<string, unknown>[] => {
  if (value === undefined || value === null) return [];
  const items = Array.isArray(value) ? value : [value];
  const records: Record<string, unknown>[] = [];
  for (const item of items) {
    const record = asRecord(item);
    if (record) records.push(record);
  }
  return records;
};

const fieldFromRecord = (record: Record<string, unknown>, ...names: string[]): string => {
  for (const name of names) {
    for (const [key, child] of Object.entries(record)) {
      if (localNameOf(key).toLowerCase() === name.toLowerCase()) {
        const text = toText(child);
        if (text !== null) return text;
      }
    }
  }
  return "";
};

/** Treats blank and lone "." as empty name parts; collapses to single spaces between parts. */
export const buildFullName = (
  nombre: string,
  apellido1: string,
  apellido2: string,
): string | null => {
  const normalizePart = (value: string): string => {
    const trimmed = value.trim();
    if (trimmed === "" || trimmed === ".") return "";
    return trimmed;
  };
  const parts = [normalizePart(nombre), normalizePart(apellido1), normalizePart(apellido2)].filter(
    (part) => part.length > 0,
  );
  if (parts.length === 0) return null;
  return parts.join(" ");
};

const toUserListItem = (record: Record<string, unknown>): Meta4UserListItem | null => {
  const id = fieldFromRecord(record, "id_Empleado").trim();
  if (!id) return null;

  const fullName = buildFullName(
    fieldFromRecord(record, "nombre"),
    fieldFromRecord(record, "apellido_1"),
    fieldFromRecord(record, "apellido_2"),
  );
  if (!fullName) return null;

  return { id, fullName };
};

/** Keeps the first valid occurrence per id_Empleado; preserves Meta4 order. */
export const dedupeUsersById = (users: Meta4UserListItem[]): Meta4UserListItem[] => {
  const seen = new Set<string>();
  const result: Meta4UserListItem[] = [];
  for (const user of users) {
    if (seen.has(user.id)) continue;
    seen.add(user.id);
    result.push(user);
  }
  return result;
};

export const parseUsersListResponse = (
  xml: string,
  expectedSociety: Meta4Society,
): Meta4UserListItem[] => {
  const document = parseDocument(xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const responseNode = findFirstChild(document, "CSP_POWER4_USER_ALLResponse");
  if (responseNode === undefined) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta SOAP no contiene CSP_POWER4_USER_ALLResponse.",
    );
  }

  const returnNode = findFirstChild(responseNode, "CSP_POWER4_USER_ALLReturn");
  if (returnNode === undefined) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta SOAP no contiene CSP_POWER4_USER_ALLReturn.",
    );
  }

  const cargaUsers = findFirstChild(returnNode, "Csp_Carga_Users");
  if (cargaUsers === undefined) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta SOAP no contiene Csp_Carga_Users.",
    );
  }

  const societyRaw = findValues(cargaUsers, "p_Sociedad")[0]?.trim() ?? "";
  if (!societyRaw) {
    throw new Meta4UsersError(
      "META4_USERS_INVALID_RESPONSE",
      "La respuesta SOAP no contiene p_Sociedad.",
    );
  }

  if (!isMeta4Society(societyRaw) || societyRaw !== expectedSociety) {
    throw new Meta4UsersError(
      "META4_USERS_SOCIETY_MISMATCH",
      "La sociedad de la respuesta Meta4 no coincide con el contexto operativo.",
    );
  }

  const rawRecordSets = findFirstChild(cargaUsers, "Csp_Carga_UsersRecordSet");
  const recordSets = normalizeRecordSets(rawRecordSets);

  const valid: Meta4UserListItem[] = [];
  for (const record of recordSets) {
    const item = toUserListItem(record);
    if (item) valid.push(item);
  }

  return dedupeUsersById(valid);
};
