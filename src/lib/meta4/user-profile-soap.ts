import { XMLParser } from "fast-xml-parser";

import { Meta4SoapFaultError } from "./soap-xml";
import { isMeta4Society, type Meta4Society } from "./societies";
import { Meta4ProfileError } from "./profile-errors";
import type {
  Meta4ProfileRecordSet,
  Meta4UserProfile,
  SocietyProbeResult,
} from "./user-profile-types";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

const RECORD_SET_LOCAL_NAMES = new Set([
  "csp_consulta_oro_intranrecordset",
  "csp_consulta_oro_intran_newrecordset",
  "recordset",
]);

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
});

export const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const toText = (value: unknown): string | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "object" && value !== null && "#text" in value) {
    return toText(value["#text"]);
  }
  return null;
};

const localNameOf = (key: string): string =>
  key.includes(":") ? key.slice(key.lastIndexOf(":") + 1) : key;

const findValues = (value: unknown, wantedName: string, values: string[] = []): string[] => {
  if (Array.isArray(value)) {
    for (const item of value) findValues(item, wantedName, values);
    return values;
  }
  if (typeof value !== "object" || value === null) return values;

  for (const [key, child] of Object.entries(value)) {
    if (localNameOf(key).toLowerCase() === wantedName.toLowerCase()) {
      const text = toText(child);
      if (text !== null) values.push(text);
    }
    findValues(child, wantedName, values);
  }
  return values;
};

const hasKey = (value: unknown, wantedName: string): boolean => {
  if (Array.isArray(value)) return value.some((item) => hasKey(item, wantedName));
  if (typeof value !== "object" || value === null) return false;
  return Object.entries(value).some(([key, child]) => {
    const localName = localNameOf(key);
    return localName.toLowerCase() === wantedName.toLowerCase() || hasKey(child, wantedName);
  });
};

const parseDocument = (xml: string): unknown => {
  if (!xml.trim()) {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "La respuesta del perfil Meta4 está vacía.",
    );
  }
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "La respuesta del perfil Meta4 contiene declaraciones XML no permitidas.",
    );
  }
  try {
    return parser.parse(xml);
  } catch {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "La respuesta del perfil Meta4 no contiene XML válido.",
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

const asRecord = (value: unknown): Record<string, unknown> | null =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;

const collectFields = (
  node: unknown,
  fields: Record<string, string> = {},
): Record<string, string> => {
  const record = asRecord(node);
  if (!record) return fields;
  for (const [key, child] of Object.entries(record)) {
    const localName = localNameOf(key);
    if (RECORD_SET_LOCAL_NAMES.has(localName.toLowerCase())) continue;
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

const isRecordSetNode = (key: string): boolean =>
  RECORD_SET_LOCAL_NAMES.has(localNameOf(key).toLowerCase());

const collectRecordSets = (
  value: unknown,
  sets: Meta4ProfileRecordSet[] = [],
): Meta4ProfileRecordSet[] => {
  if (Array.isArray(value)) {
    for (const item of value) collectRecordSets(item, sets);
    return sets;
  }
  const record = asRecord(value);
  if (!record) return sets;

  for (const [key, child] of Object.entries(record)) {
    if (isRecordSetNode(key)) {
      const nodes = Array.isArray(child) ? child : [child];
      for (const node of nodes) {
        const fields = collectFields(node);
        if (Object.keys(fields).length > 0) sets.push({ fields });
      }
      continue;
    }
    collectRecordSets(child, sets);
  }
  return sets;
};

const EMPLOYEE_ID_FIELD_NAMES = ["id_Empleado", "idEmpleado", "ID_EMPLEADO"] as const;

const fieldValue = (fields: Record<string, string>, ...names: string[]): string | null => {
  for (const name of names) {
    const found = Object.entries(fields).find(([key]) => key.toLowerCase() === name.toLowerCase());
    if (found && found[1].trim() !== "") return found[1];
  }
  return null;
};

/** True when an employee-id key is present with an empty/whitespace value. */
const hasEmptyPresentEmployeeId = (fields: Record<string, string>): boolean =>
  Object.entries(fields).some(([key, value]) => {
    const isEmployeeId = EMPLOYEE_ID_FIELD_NAMES.some(
      (name) => key.toLowerCase() === name.toLowerCase(),
    );
    return isEmployeeId && value.trim() === "";
  });

const hasUsableEmployeeData = (fields: Record<string, string>): boolean => {
  const employeeId = fieldValue(fields, ...EMPLOYEE_ID_FIELD_NAMES);
  const selfKey = fieldValue(fields, "clave_Self", "claveSelf", "CVE_SELF", "ARG_CVE_SELF");
  const display = fieldValue(
    fields,
    "nombre",
    "Nombre",
    "nombre_completo",
    "NombreCompleto",
    "nm_Empleado",
  );
  return Boolean(employeeId || selfKey || display);
};

const prefersUsernameCoherence = (
  fields: Record<string, string>,
  consultedUsername: string,
): boolean => {
  const selfKey = fieldValue(fields, "clave_Self", "claveSelf", "CVE_SELF");
  if (!selfKey) return true;
  return selfKey.localeCompare(consultedUsername, undefined, { sensitivity: "accent" }) === 0;
};

const selectPrimaryIndex = (
  recordSets: Meta4ProfileRecordSet[],
  consultedUsername: string,
): number => {
  const coherent = recordSets.findIndex((set) =>
    prefersUsernameCoherence(set.fields, consultedUsername),
  );
  if (coherent >= 0) return coherent;
  return 0;
};

export const buildUserProfileEnvelope = (
  society: Meta4Society,
  username: string,
): string => `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:CSP_CONSULTA_ORO_INTRAN_NEW>
      <sch:ARG_SOCIEDAD>${escapeXml(society)}</sch:ARG_SOCIEDAD>
      <sch:ARG_ID_EMPLEADO>0</sch:ARG_ID_EMPLEADO>
      <sch:ARG_CVE_SELF>${escapeXml(username)}</sch:ARG_CVE_SELF>
      <sch:ARG_COMPUTA>1</sch:ARG_COMPUTA>
      <sch:ARG_DIRECTOR>0</sch:ARG_DIRECTOR>
    </sch:CSP_CONSULTA_ORO_INTRAN_NEW>
  </soapenv:Body>
</soapenv:Envelope>`;

export const classifyUserProfileResponse = (input: {
  xml: string;
  queriedSociety: Meta4Society;
  consultedUsername: string;
  lookedUpAt?: string;
}): SocietyProbeResult => {
  const document = parseDocument(input.xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const returnCode =
    findValues(document, "return")[0]?.trim() ??
    findValues(document, "CSP_CONSULTA_ORO_INTRAN_NEWReturn")[0]?.trim() ??
    null;
  const pSociedadRaw = findValues(document, "p_Sociedad")[0]?.trim() ?? "";
  const recordSets = collectRecordSets(document);

  if (!pSociedadRaw || pSociedadRaw === "?") {
    return {
      outcome: "no-match",
      society: input.queriedSociety,
      reason: "missing-or-unknown-society",
    };
  }

  if (!isMeta4Society(pSociedadRaw) || pSociedadRaw !== input.queriedSociety) {
    return {
      outcome: "no-match",
      society: input.queriedSociety,
      reason: "society-mismatch",
    };
  }

  if (recordSets.length === 0) {
    return {
      outcome: "no-match",
      society: input.queriedSociety,
      reason: "missing-recordset",
    };
  }

  // Empty-present id_Empleado (key exists, blank value) disqualifies that RecordSet.
  const usableSets = recordSets.filter(
    (set) => hasUsableEmployeeData(set.fields) && !hasEmptyPresentEmployeeId(set.fields),
  );
  if (usableSets.length === 0) {
    const reason = recordSets.some((set) => hasEmptyPresentEmployeeId(set.fields))
      ? "empty-employee-id"
      : "empty-employee-data";
    return {
      outcome: "no-match",
      society: input.queriedSociety,
      reason,
    };
  }

  const primaryIndex = selectPrimaryIndex(usableSets, input.consultedUsername);
  const primary = usableSets[primaryIndex];
  if (!primary) {
    return {
      outcome: "no-match",
      society: input.queriedSociety,
      reason: "empty-employee-data",
    };
  }

  const profile: Meta4UserProfile = {
    society: input.queriedSociety,
    pSociedad: pSociedadRaw,
    returnCode,
    recordSets: usableSets,
    primaryIndex,
    fields: primary.fields,
    consultedUsername: input.consultedUsername,
    lookedUpAt: input.lookedUpAt ?? new Date().toISOString(),
  };

  return {
    outcome: "match",
    society: input.queriedSociety,
    profile,
  };
};

export const extractDisplayName = (profile: Meta4UserProfile): string | null => {
  const fields = profile.fields;
  return (
    fieldValue(
      fields,
      "nombre_completo",
      "NombreCompleto",
      "nm_Empleado",
      "Nombre",
      "nombre",
      "display_name",
    ) ?? null
  );
};
