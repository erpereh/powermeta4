import { XMLParser, XMLValidator } from "fast-xml-parser";
import type { SoapServiceContract } from "./types";

const object = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const list = (value: unknown): Record<string, unknown>[] =>
  (Array.isArray(value) ? value : [value]).filter(object);
const localName = (value: unknown): string =>
  typeof value === "string" ? (value.split(":").at(-1) ?? "") : "";
const parser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: true,
  parseTagValue: false,
});

/** Compara metadatos WSDL; no ejecuta operaciones ni devuelve XML o datos personales. */
export const inspectPortalWsdl = (
  contract: SoapServiceContract,
  xml: string,
): readonly string[] => {
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml) || XMLValidator.validate(xml) !== true)
    return ["XML WSDL no válido"];
  const document: unknown = parser.parse(xml);
  const definitions = object(document) ? document.definitions : null;
  if (!object(definitions)) return ["Falta definitions"];
  const bindings = list(definitions.binding);
  const binding = bindings.find((entry) =>
    list(entry.operation).some((op) =>
      contract.operations.some((expected) => expected.operation === op["@_name"]),
    ),
  );
  if (!binding) return ["Falta el binding del servicio"];
  const port = list(definitions.portType).find(
    (entry) => entry["@_name"] === localName(binding["@_type"]),
  );
  const issues: string[] = [];
  for (const operation of contract.operations) {
    const bound = list(binding.operation).find((entry) => entry["@_name"] === operation.operation);
    const declared = list(port?.operation).find((entry) => entry["@_name"] === operation.operation);
    if (!bound || !declared) {
      issues.push(`${operation.operation}: operación ausente`);
      continue;
    }
    const input = object(bound.input) ? bound.input : {};
    const body = object(input.body) ? input.body : {};
    const soapBinding = object(binding.binding) ? binding.binding : {};
    const soapOperation = object(bound.operation) ? bound.operation : {};
    const expectedStyle = contract.serialization?.style === "wrapped" ? "document" : "rpc";
    if (
      (soapOperation["@_style"] ?? soapBinding["@_style"] ?? "document") !== expectedStyle ||
      body["@_use"] !== contract.serialization?.use
    )
      issues.push(`${operation.operation}: serialización incompatible`);
    if (
      body["@_namespace"] !== undefined &&
      body["@_namespace"] !== contract.serialization?.namespace
    )
      issues.push(`${operation.operation}: namespace incompatible`);
    const declaredInput = object(declared.input) ? declared.input : {};
    const message = list(definitions.message).find(
      (entry) => entry["@_name"] === localName(declaredInput["@_message"]),
    );
    let names: unknown[];
    if (expectedStyle === "rpc") names = list(message?.part).map((part) => part["@_name"]);
    else {
      const elementName = localName(list(message?.part)[0]?.["@_element"]);
      const types = object(definitions.types) ? definitions.types : {};
      const element = list(types.schema)
        .flatMap((schema) => list(schema.element))
        .find((entry) => entry["@_name"] === elementName);
      const complex = object(element?.complexType) ? element.complexType : {};
      const sequence = object(complex.sequence) ? complex.sequence : {};
      if (!element) {
        issues.push(`${operation.operation}: esquema externo o ausente, comprobar argumentos`);
        continue;
      }
      names = list(sequence.element).map((entry) => entry["@_name"]);
    }
    if (JSON.stringify(names) !== JSON.stringify(operation.args.map((arg) => arg.name)))
      issues.push(`${operation.operation}: argumentos u orden incompatibles`);
  }
  return issues;
};
