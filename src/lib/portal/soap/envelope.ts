import { XMLParser, XMLValidator } from "fast-xml-parser";

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
 * RPC/encoded de Axis: argumentos posicionales sin namespace y bloques nulos.
 * Nunca envía bloques de entrada con registros (podrían provocar escrituras).
 */
export const buildServiceEnvelope = (
  contract: SoapServiceContract,
  operation: string,
  args: Readonly<Record<string, SoapArgValue>>,
): string => {
  const definition = findOperation(contract, operation);
  const encoded = contract.serialization?.use !== "literal";
  for (const name of Object.keys(args)) {
    const arg = definition.args.find((candidate) => candidate.name === name);
    if (!arg) throw new SoapContractError(`${operation} no admite el argumento ${name}.`);
    if (arg.kind === "block" && args[name] != null)
      throw new SoapContractError(`${name} es un bloque de entrada.`);
  }
  const body = definition.args
    .map((arg) => {
      const value = args[arg.name];
      const tag = encoded ? arg.name : `sch:${arg.name}`;
      if (value == null) {
        if (arg.nullable === false) throw new SoapContractError(`Falta el argumento ${arg.name}.`);
        return `      <${tag} xsi:nil="true"/>`;
      }
      if (
        (arg.kind === "date" && (!(value instanceof Date) || !Number.isFinite(value.getTime()))) ||
        (arg.kind === "number" && (typeof value !== "number" || !Number.isFinite(value))) ||
        (arg.kind === "string" && typeof value !== "string")
      )
        throw new SoapContractError(`Tipo incompatible para ${arg.name}.`);
      const text =
        value instanceof Date
          ? formatSoapDate(value)
          : typeof value === "number"
            ? String(value)
            : escapeXml(String(value));
      const xmlType =
        arg.xmlType ??
        (arg.kind === "date"
          ? "xsd:dateTime"
          : arg.kind === "number"
            ? "xsd:double"
            : "xsd:string");
      return `      <${tag}${encoded ? ` xsi:type="${xmlType}"` : ""}>${text}</${tag}>`;
    })
    .join("\n");
  return `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${escapeXml(contract.serialization?.namespace ?? META4_NAMESPACE)}" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:m4="http://schemas.meta4.com/types">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:${definition.operation}${encoded ? ` soapenv:encodingStyle="${contract.serialization?.encodingStyle ?? "http://schemas.xmlsoap.org/soap/encoding/"}"` : ""}>
${body}
    </sch:${definition.operation}>
  </soapenv:Body>
</soapenv:Envelope>`;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: true,
  processEntities: true,
  htmlEntities: false,
  parseTagValue: false,
  parseAttributeValue: false,
  trimValues: true,
});

type XmlNode = unknown;

const normalize = (name: string): string => name.replaceAll("_", "").toLowerCase();

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asText = (value: unknown): string | null => {
  if (isObject(value) && (value["@_nil"] === "true" || value["@_nil"] === "1")) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (isObject(value) && "#text" in value) return asText(value["#text"]);
  return null;
};

const isNil = (value: unknown): boolean =>
  isObject(value) && (value["@_nil"] === "true" || value["@_nil"] === "1");

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
    if (!key.startsWith("@_")) collectByName(child, wanted, found);
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
    const fields = collectByName(scope, normalize(block.field));
    const rawRecords = fields.flatMap((field) => collectByName(field, normalize(block.recordSet)));
    const records = (nodes[block.node] ??= []);
    for (const raw of rawRecords) {
      const items =
        isObject(raw) && "item" in raw ? (Array.isArray(raw.item) ? raw.item : [raw.item]) : [raw];
      for (const item of items) {
        if (isNil(item) || item === "") continue;
        const record = toRecord(item, block.items);
        const known =
          isObject(item) &&
          Object.keys(item).some((key) =>
            block.items.some((name) => normalize(name) === normalize(key)),
          );
        if (known) records.push(record);
        else if (
          isObject(item) &&
          Object.keys(item).some(
            (key) =>
              !key.startsWith("@_") &&
              key !== "#text" &&
              !block.children.some((child) => normalize(child.field) === normalize(key)),
          )
        )
          throw new SoapContractError("Registro SOAP incompatible con sus ítems.");
        if (block.children.length > 0) collectBlocks(item, block.children, nodes);
      }
    }
  }
};

/** Resuelve exclusivamente referencias internas Axis, con límites y detección de ciclos. */
const resolveReferences = (body: unknown, scope: unknown): unknown => {
  const ids = new Map<string, unknown>();
  const index = (node: unknown): void => {
    if (Array.isArray(node)) {
      node.forEach(index);
      return;
    }
    if (!isObject(node)) return;
    const id = asText(node["@_id"]);
    if (id) {
      if (ids.has(id)) throw new SoapContractError("Referencia Axis duplicada.");
      ids.set(id, node);
    }
    for (const [key, child] of Object.entries(node)) if (!key.startsWith("@_")) index(child);
  };
  index(body);
  let remaining = 100_000;
  const resolve = (node: unknown, seen: ReadonlySet<string>, depth: number): unknown => {
    if (--remaining < 0 || depth > 64)
      throw new SoapContractError("Respuesta Axis demasiado compleja.");
    if (Array.isArray(node)) return node.map((item) => resolve(item, seen, depth + 1));
    if (!isObject(node)) return node;
    const href = asText(node["@_href"]);
    if (href) {
      const id = href.slice(1);
      if (!href.startsWith("#") || !ids.has(id) || seen.has(id))
        throw new SoapContractError("Referencia Axis no válida.");
      return resolve(ids.get(id), new Set([...seen, id]), depth + 1);
    }
    return Object.fromEntries(
      Object.entries(node).map(([key, child]) => [
        key,
        key.startsWith("@_") ? child : resolve(child, seen, depth + 1),
      ]),
    );
  };
  // Solo se desarrolla la respuesta de la operación, nunca los multiRef por separado.
  if (!isObject(body)) throw new SoapContractError("Falta el cuerpo SOAP.");
  return resolve(scope, new Set(), 0);
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
  if (XMLValidator.validate(xml) !== true)
    throw new SoapContractError("La respuesta SOAP no contiene XML válido.");
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
  const body = collectByName(document, "body")[0];
  if (!isObject(body)) throw new SoapContractError("Falta el cuerpo SOAP.");
  const response = Object.entries(body).find(
    ([name]) => normalize(name) === normalize(`${operation}Response`),
  )?.[1];
  if (response === undefined)
    throw new SoapContractError("Falta la respuesta de la operación esperada.");
  const scope = resolveReferences(body, response);
  const populated =
    isObject(scope) && Object.keys(scope).some((key) => !key.startsWith("@_") && key !== "#text");
  const recognized =
    definition.blocks.some((block) => collectByName(scope, normalize(block.field)).length > 0) ||
    collectByName(scope, "return").length > 0 ||
    collectByName(scope, normalize(`${operation}Return`)).length > 0 ||
    collectByName(scope, "logmessage").length > 0;
  if (populated && !recognized && !isNil(scope))
    throw new SoapContractError("La respuesta no contiene los bloques esperados.");
  const nodes: Record<string, SoapRecord[]> = {};
  collectBlocks(scope, definition.blocks, nodes);
  const returnValue =
    asText(collectByName(scope, "return")[0]) ??
    asText(collectByName(scope, normalize(`${operation}Return`))[0]);
  return { returnValue, nodes };
};
