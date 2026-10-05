import { XMLParser } from "fast-xml-parser";

import type {
  SoapOutputBlock,
  SoapRecord,
  SoapResult,
  SoapServiceContract,
  SoapServiceOperation,
} from "./types";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export type SoapArgValue = string | number | Date | null | undefined;

export class SoapContractError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SoapContractError";
  }
}

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const pad = (value: number): string => String(value).padStart(2, "0");

/** `Calendar` de Axis: fecha local a medianoche, sin zona. */
export const formatSoapDate = (value: Date): string =>
  `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T00:00:00`;

export const findOperation = (
  contract: SoapServiceContract,
  operation: string,
): SoapServiceOperation => {
  const found = contract.operations.find((candidate) => candidate.operation === operation);
  if (!found) {
    throw new SoapContractError(`${contract.service} no publica la operación ${operation}.`);
  }
  return found;
};

/**
 * Construye el sobre `wrapped/literal` de un servicio Meta4. Solo admite los
 * argumentos que declara el contrato; los bloques de entrada no se envían.
 */
export const buildServiceEnvelope = (
  contract: SoapServiceContract,
  operation: string,
  args: Readonly<Record<string, SoapArgValue>>,
): string => {
  const definition = findOperation(contract, operation);
  for (const name of Object.keys(args)) {
    const arg = definition.args.find((candidate) => candidate.name === name);
    if (!arg) throw new SoapContractError(`${operation} no admite el argumento ${name}.`);
    if (arg.kind === "block") throw new SoapContractError(`${name} es un bloque de entrada.`);
  }
  const body = definition.args
    .flatMap((arg) => {
      const value = args[arg.name];
      if (value === undefined || value === null || arg.kind === "block") return [];
      const text =
        value instanceof Date
          ? formatSoapDate(value)
          : typeof value === "number"
            ? String(value)
            : escapeXml(value);
      return [`      <sch:${arg.name}>${text}</sch:${arg.name}>`];
    })
    .join("\n");
  return `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:${definition.operation}>
${body}
    </sch:${definition.operation}>
  </soapenv:Body>
</soapenv:Envelope>`;
};

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: true,
  htmlEntities: false,
  parseTagValue: false,
  trimValues: true,
});

type XmlNode = unknown;

const normalize = (name: string): string => name.replaceAll("_", "").toLowerCase();

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asText = (value: unknown): string | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (isObject(value) && "#text" in value) return asText(value["#text"]);
  return null;
};

const collectByName = (node: XmlNode, wanted: string, found: unknown[] = []): unknown[] => {
  if (Array.isArray(node)) {
    for (const item of node) collectByName(item, wanted, found);
    return found;
  }
  if (!isObject(node)) return found;
  for (const [key, child] of Object.entries(node)) {
    if (normalize(key) === wanted) {
      if (Array.isArray(child)) found.push(...child);
      else found.push(child);
      continue;
    }
    collectByName(child, wanted, found);
  }
  return found;
};

const toRecord = (raw: unknown, items: readonly string[]): SoapRecord => {
  if (!isObject(raw)) return {};
  const byName = new Map(items.map((item) => [normalize(item), item]));
  const record: Record<string, string> = {};
  for (const [key, value] of Object.entries(raw)) {
    const item = byName.get(normalize(key));
    if (!item) continue;
    const text = asText(value);
    if (text !== null) record[item] = text;
  }
  return record;
};

const collectBlocks = (
  scope: XmlNode,
  blocks: readonly SoapOutputBlock[],
  nodes: Record<string, SoapRecord[]>,
): void => {
  for (const block of blocks) {
    if (!block.recordSet) continue;
    const rawRecords = collectByName(scope, normalize(block.recordSet));
    const records = (nodes[block.node] ??= []);
    for (const raw of rawRecords) {
      records.push(toRecord(raw, block.items));
      if (block.children.length > 0) collectBlocks(raw, block.children, nodes);
    }
  }
};

/** Detecta un servicio inexistente en el servidor (Axis). */
export const SERVICE_MISSING_PATTERN =
  /could not find a target service|no such operation|no service is available|the requested resource is not available/i;

export class SoapServiceUnavailableError extends Error {
  constructor(readonly service: string) {
    super(`El servicio ${service} no está disponible en el servidor Meta4.`);
    this.name = "SoapServiceUnavailableError";
  }
}

export class SoapServiceFaultError extends Error {
  constructor(
    readonly service: string,
    readonly fault: string,
  ) {
    super(`Meta4 rechazó ${service}.`);
    this.name = "SoapServiceFaultError";
  }
}

/** Interpreta la respuesta según el contrato; nunca inventa registros. */
export const parseServiceResponse = (
  contract: SoapServiceContract,
  operation: string,
  xml: string,
): SoapResult => {
  const definition = findOperation(contract, operation);
  if (!xml.trim()) throw new SoapContractError("La respuesta SOAP está vacía.");
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new SoapContractError("La respuesta SOAP contiene declaraciones no permitidas.");
  }
  let document: XmlNode;
  try {
    document = parser.parse(xml);
  } catch {
    throw new SoapContractError("La respuesta SOAP no contiene XML válido.");
  }
  const fault = collectByName(document, "fault")[0];
  if (fault !== undefined) {
    const message =
      asText(collectByName(fault, "faultstring")[0]) ?? "Respuesta SOAP rechazada por Meta4.";
    if (SERVICE_MISSING_PATTERN.test(message)) {
      throw new SoapServiceUnavailableError(contract.service);
    }
    throw new SoapServiceFaultError(contract.service, message.slice(0, 240));
  }
  const nodes: Record<string, SoapRecord[]> = {};
  collectBlocks(document, definition.blocks, nodes);
  const returnValue = asText(collectByName(document, "return")[0]) ?? null;
  return { returnValue, nodes };
};
