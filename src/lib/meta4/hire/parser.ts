import "server-only";

import { XMLParser } from "fast-xml-parser";

import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";

import { Meta4HireError } from "./errors";

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
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
    throw new Meta4HireError(
      "META4_HIRE_INVALID_RESPONSE",
      "La respuesta del alta Meta4 está vacía.",
    );
  }
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Meta4HireError(
      "META4_HIRE_INVALID_RESPONSE",
      "La respuesta del alta Meta4 contiene declaraciones XML no permitidas.",
    );
  }
  try {
    return parser.parse(xml);
  } catch {
    throw new Meta4HireError(
      "META4_HIRE_INVALID_RESPONSE",
      "La respuesta del alta Meta4 no contiene XML válido.",
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

const parseNumericReturn = (value: string): number | null => {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
};

const pickReturnCode = (document: unknown): string | null => {
  const fromNamedReturn = findValues(document, "SRTC_LAUNCH_IMPORTReturn");
  const nestedReturns = findValues(document, "return");
  const fromResponse = findValues(document, "SRTC_LAUNCH_IMPORTResponse");
  const candidates = [...fromNamedReturn, ...nestedReturns, ...fromResponse];
  for (const candidate of candidates) {
    if (parseNumericReturn(candidate) !== null) return candidate.trim();
  }
  return null;
};

export const parseLaunchImportResponse = (xml: string): { returnCode: string } => {
  const document = parseDocument(xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const returnCode = pickReturnCode(document);
  if (returnCode === null) {
    throw new Meta4HireError(
      "META4_HIRE_INVALID_RESPONSE",
      "La respuesta de SRTC_LAUNCH_IMPORT no contiene un código de retorno.",
    );
  }

  const numeric = parseNumericReturn(returnCode);
  if (numeric === null) {
    throw new Meta4HireError(
      "META4_HIRE_INVALID_RESPONSE",
      "La respuesta de SRTC_LAUNCH_IMPORT no contiene un código de retorno.",
    );
  }
  if (numeric !== 0) {
    throw new Meta4HireError(
      "META4_HIRE_IMPORT_FAILED",
      `Meta4 rechazó el alta de personas (código de retorno ${returnCode}).`,
    );
  }

  return { returnCode };
};
