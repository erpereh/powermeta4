import "server-only";

import { XMLParser } from "fast-xml-parser";

import { decodeXmlEntities } from "@/lib/meta4/format-profile-field";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";

import { Meta4ConsultaOroError } from "./employee-detail-errors";
import type { Meta4EmployeeDetailResult, Meta4EmployeeEmailRecord } from "./employee-detail-types";
import { normalizeRecordSets } from "./parser";

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
  // Keep id_Empleado (and other) values as strings so leading zeros survive.
  parseTagValue: false,
});

/** Wrapper keys for the nested repeating email block; excluded from flat scalar fields. */
const EMAIL_CONTAINER_LOCAL_NAMES = new Set(["csp_power4_std_email", "csp_power4_std_emailrecordset"]);

const toText = (value: unknown): string | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return decodeXmlEntities(String(value));
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
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta del detalle de empleado Meta4 está vacía.",
    );
  }
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta del detalle de empleado Meta4 contiene declaraciones XML no permitidas.",
    );
  }
  try {
    return parser.parse(xml);
  } catch {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta del detalle de empleado Meta4 no contiene XML válido.",
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

/** Collects a RecordSet's own direct scalar fields, skipping the nested email container. */
const collectFields = (node: unknown, fields: Record<string, string> = {}): Record<string, string> => {
  const record = asRecord(node);
  if (!record) return fields;
  for (const [key, child] of Object.entries(record)) {
    const localName = localNameOf(key);
    if (EMAIL_CONTAINER_LOCAL_NAMES.has(localName.toLowerCase())) continue;
    const text = toText(child);
    if (text !== null) {
      fields[localName] = text;
      continue;
    }
    if (typeof child === "object" && child !== null) {
      collectFields(child, fields);
    }
  }
  return fields;
};

const scalarField = (record: Record<string, unknown>, name: string): string => {
  for (const [key, child] of Object.entries(record)) {
    if (localNameOf(key).toLowerCase() === name.toLowerCase()) {
      const text = toText(child);
      if (text !== null) return text;
    }
  }
  return "";
};

const toEmailRecord = (record: Record<string, unknown>): Meta4EmployeeEmailRecord => ({
  email: scalarField(record, "std_Email"),
  order: scalarField(record, "std_Or_Mail"),
  startDate: scalarField(record, "std_Dt_Start"),
  endDate: scalarField(record, "std_Dt_End"),
  locationTypeCode: scalarField(record, "std_Id_Location_Type"),
});

export const parseEmployeeDetailResponse = (xml: string, employeeId: string): Meta4EmployeeDetailResult => {
  const document = parseDocument(xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const responseNode = findFirstChild(document, "CSP_POWER4_CONSULTA_OROResponse");
  if (responseNode === undefined) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta SOAP no contiene CSP_POWER4_CONSULTA_OROResponse.",
    );
  }

  const returnNode = findFirstChild(responseNode, "CSP_POWER4_CONSULTA_OROReturn");
  if (returnNode === undefined) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta SOAP no contiene CSP_POWER4_CONSULTA_OROReturn.",
    );
  }

  const consultaOro = findFirstChild(returnNode, "Csp_Power4_Consulta_Oro");
  if (consultaOro === undefined) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_INVALID_RESPONSE",
      "La respuesta SOAP no contiene Csp_Power4_Consulta_Oro.",
    );
  }

  const rawRecordSets = findFirstChild(consultaOro, "Csp_Power4_Consulta_OroRecordSet");
  const recordSets = normalizeRecordSets(rawRecordSets);
  const primary = recordSets[0];
  if (!primary) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_NOT_FOUND",
      "No se ha encontrado el detalle del empleado en Meta4.",
    );
  }

  const fields = collectFields(primary);

  const emailContainer = findFirstChild(primary, "Csp_Power4_Std_Email");
  const rawEmailRecordSets =
    emailContainer === undefined ? undefined : findFirstChild(emailContainer, "Csp_Power4_Std_EmailRecordSet");
  const emails = normalizeRecordSets(rawEmailRecordSets)
    .map(toEmailRecord)
    .filter((record) => record.email !== "");

  return { employeeId, fields, emails };
};
