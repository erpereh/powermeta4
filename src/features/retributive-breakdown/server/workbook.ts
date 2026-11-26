import { posix } from "node:path";
import { Uint8ArrayReader, Uint8ArrayWriter, ZipReader, ZipWriter } from "@zip.js/zip.js";
import { XMLBuilder, XMLParser } from "fast-xml-parser";

export class BreakdownInputError extends Error {}

export type XmlNode = {
  [key: string]: XmlNode[] | Record<string, string> | string | undefined;
  ":@"?: Record<string, string>;
  "#text"?: string;
};

type CellValue = string | number | boolean | null;
type Parts = Map<string, Uint8Array>;

const xmlOptions = {
  preserveOrder: true,
  ignoreAttributes: false,
  parseTagValue: false,
  trimValues: false,
};
const parser = new XMLParser(xmlOptions);
const builder = new XMLBuilder({ ...xmlOptions, suppressEmptyNode: true });
const decoder = new TextDecoder("utf-8", { fatal: true });
const encoder = new TextEncoder();
const worksheetPath = /^xl\/worksheets\/[^/]+\.xml$/;
const maxExpandedWorkbookBytes = 32 * 1024 * 1024;

export function children(node: XmlNode, tag: string): XmlNode[] {
  const value = node[tag];
  return Array.isArray(value) ? value : [];
}

export function attributes(node: XmlNode): Record<string, string> {
  return (node[":@"] ??= {});
}

export function attribute(node: XmlNode | undefined, name: string): string | undefined {
  return node?.[":@"]?.["@_" + name];
}

export function element(
  tag: string,
  attrs: Record<string, string>,
  nodes: XmlNode[] = [],
): XmlNode {
  return {
    [tag]: nodes,
    ":@": Object.fromEntries(Object.entries(attrs).map(([key, value]) => ["@_" + key, value])),
  };
}

export function requireElement(nodes: XmlNode[], tag: string): XmlNode {
  const node = nodes.find((item) => tag in item);
  if (!node) throw new BreakdownInputError("Al Excel le falta un componente obligatorio.");
  return node;
}

export function textContent(nodes: readonly XmlNode[]): string {
  return nodes.map((node) => node["#text"] ?? "").join("");
}

function excelText(nodes: XmlNode[]): string {
  return nodes
    .flatMap((node) => ("t" in node ? [node] : children(node, "r")))
    .map((node) => textContent(children(node, "t")))
    .join("")
    .replace(/_x([0-9a-f]{4})_/gi, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)));
}

export function normalize(value: CellValue): string {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
    : "";
}

export function columnName(column: number): string {
  let name = "";
  while (column > 0) {
    column--;
    name = String.fromCharCode(65 + (column % 26)) + name;
    column = Math.floor(column / 26);
  }
  return name;
}

function coordinates(ref: string | undefined): { row: number; column: number } {
  const match = /^([A-Z]{1,3})([1-9]\d{0,6})$/.exec(ref ?? "");
  const column = [...(match?.[1] ?? "")].reduce(
    (col, letter) => col * 26 + letter.charCodeAt(0) - 64,
    0,
  );
  const row = Number(match?.[2]);
  if (!match || column > 16_384 || row > 1_048_576) {
    throw new BreakdownInputError("El Excel contiene una referencia de celda inválida.");
  }
  return { column, row };
}

type Range = { top: number; left: number; bottom: number; right: number };

export function readRange(ref: string | undefined): Range {
  const [from, to = from] = ref?.split(":") ?? [];
  const start = coordinates(from);
  const end = coordinates(to);
  if (start.row > end.row || start.column > end.column) {
    throw new BreakdownInputError("El Excel contiene un rango de celdas inválido.");
  }
  return { top: start.row, left: start.column, bottom: end.row, right: end.column };
}

export type XmlDocument = { nodes: XmlNode[]; root: XmlNode };

export function parsePart(parts: Parts, path: string, tag: string): XmlDocument {
  const data = parts.get(path);
  if (!data) throw new BreakdownInputError("Al Excel le falta un componente obligatorio.");
  const xml = decoder.decode(data);
  if (/<!DOCTYPE/i.test(xml)) throw new BreakdownInputError("El Excel contiene XML no compatible.");
  const result: unknown = parser.parse(xml);
  if (!Array.isArray(result)) throw new BreakdownInputError("El XML del Excel no es válido.");
  const nodes: XmlNode[] = result;
  return { nodes, root: requireElement(nodes, tag) };
}

export class Sheet {
  readonly data: XmlNode;
  readonly rows = new Map<number, { node: XmlNode; cells: Map<number, XmlNode> }>();
  readonly merges: Range[];

  constructor(
    readonly name: string,
    readonly path: string,
    readonly document: XmlDocument,
    private readonly strings: readonly string[],
  ) {
    const structure = children(document.root, "worksheet");
    this.data = requireElement(structure, "sheetData");
    for (const node of children(this.data, "sheetData")) {
      if (!("row" in node)) continue;
      const row = Number(attribute(node, "r"));
      if (!Number.isInteger(row) || row < 1 || row > 1_048_576 || this.rows.has(row)) {
        throw new BreakdownInputError("El Excel contiene una fila inválida.");
      }
      const cells = new Map<number, XmlNode>();
      for (const cell of children(node, "row")) {
        if (!("c" in cell)) continue;
        const position = coordinates(attribute(cell, "r"));
        if (position.row !== row || cells.has(position.column)) {
          throw new BreakdownInputError("El Excel contiene una referencia de celda inválida.");
        }
        cells.set(position.column, cell);
      }
      this.rows.set(row, { node, cells });
    }
    const merged = structure.find((node) => "mergeCells" in node);
    this.merges = merged
      ? children(merged, "mergeCells")
          .filter((node) => "mergeCell" in node)
          .map((node) => readRange(attribute(node, "ref")))
      : [];
  }

  value(row: number, column: number): CellValue {
    const cell = this.rows.get(row)?.cells.get(column);
    if (!cell) return null;
    const contents = children(cell, "c");
    const kind = attribute(cell, "t");
    const inline = contents.find((node) => "is" in node);
    const value = contents.find((node) => "v" in node);
    if (!inline && !value) {
      if (kind === "e") throw new BreakdownInputError("El Excel contiene un error de celda.");
      return null;
    }
    if (
      this.merges.some(
        ({ top, left, bottom, right }) =>
          row >= top &&
          row <= bottom &&
          column >= left &&
          column <= right &&
          (row !== top || column !== left),
      )
    )
      return null;
    if (kind === "e") throw new BreakdownInputError("El Excel contiene un error de celda.");
    if (kind === "inlineStr" && inline) return excelText(children(inline, "is"));
    if (!value) return null;
    const raw = textContent(children(value, "v"));
    if (kind === "s") {
      const shared = /^\d+$/.test(raw) ? this.strings[Number(raw)] : undefined;
      if (shared === undefined)
        throw new BreakdownInputError("El Excel contiene texto no legible.");
      return shared;
    }
    if (kind === "b") return raw === "1";
    if (kind === "str" || kind === "d") return raw;
    if (!raw.trim() || !Number.isFinite(Number(raw))) {
      throw new BreakdownInputError("El Excel contiene un valor numérico inválido.");
    }
    return Number(raw);
  }
}

export type Workbook = {
  parts: Parts;
  sheets: Sheet[];
  styles: XmlDocument;
  sharedStrings: XmlNode[];
  document: XmlDocument;
  relationships: XmlDocument;
  contentTypes: XmlDocument;
};

export async function readWorkbook(
  bytes: Uint8Array,
  expandedLimit = maxExpandedWorkbookBytes,
): Promise<Workbook> {
  const zip = new ZipReader(new Uint8ArrayReader(bytes), {
    checkSignature: true,
    checkOverlappingEntry: true,
    strictness: "strict",
  });
  const parts: Parts = new Map();
  try {
    const entries = await zip.getEntries();
    if (
      entries.length > 1000 ||
      entries.some((entry) => entry.encrypted) ||
      entries.reduce((size, entry) => size + entry.uncompressedSize, 0) > expandedLimit
    ) {
      throw new BreakdownInputError(
        "El Excel está protegido o supera el tamaño descomprimido admitido.",
      );
    }
    for (const entry of entries) {
      const name = entry.filename;
      if (entry.directory) continue;
      if (
        parts.has(name) ||
        posix.normalize(name) !== name ||
        name.startsWith("/") ||
        name.startsWith("../") ||
        name.includes("\\") ||
        /(?:vbaProject|^xl\/(?:externalLinks\/|connections\.xml|embeddings\/|activeX\/))/i.test(
          name,
        )
      )
        throw new BreakdownInputError(
          "El Excel contiene vínculos externos, macros o componentes no admitidos.",
        );
      const content = await entry.getData(new Uint8ArrayWriter());
      parts.set(name, content);
    }
    const contentTypes = parsePart(parts, "[Content_Types].xml", "Types");
    if (
      !children(contentTypes.root, "Types").some(
        (node) =>
          attribute(node, "PartName") === "/xl/workbook.xml" &&
          attribute(node, "ContentType") ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
      )
    )
      throw new BreakdownInputError("El archivo no es un libro .xlsx sin macros.");

    const workbook = parsePart(parts, "xl/workbook.xml", "workbook");
    const relationships = parsePart(parts, "xl/_rels/workbook.xml.rels", "Relationships");
    const targets = new Map(
      children(relationships.root, "Relationships").map((node) => [
        attribute(node, "Id"),
        attribute(node, "Target"),
      ]),
    );
    const sharedStrings = parts.has("xl/sharedStrings.xml")
      ? children(parsePart(parts, "xl/sharedStrings.xml", "sst").root, "sst").filter(
          (item) => "si" in item,
        )
      : [];
    const strings = sharedStrings.map((item) => excelText(children(item, "si")));
    const sheetList = requireElement(children(workbook.root, "workbook"), "sheets");
    const sheets = children(sheetList, "sheets").filter((item) => "sheet" in item);
    if (sheets.length !== 2) {
      throw new BreakdownInputError(
        "Cada Excel debe contener Empleados y una sola hoja de agrupación.",
      );
    }
    const parsedSheets = sheets.map((item) => {
      const name = attribute(item, "name");
      const target = targets.get(attribute(item, "r:id"));
      const path = target?.startsWith("/") ? target.slice(1) : posix.join("xl", target ?? "");
      if (!name || !worksheetPath.test(path)) {
        throw new BreakdownInputError("El Excel contiene una hoja no compatible.");
      }
      return new Sheet(name, path, parsePart(parts, path, "worksheet"), strings);
    });
    if (parsedSheets[0].path === parsedSheets[1].path) {
      throw new BreakdownInputError("El Excel contiene hojas duplicadas.");
    }
    return {
      parts,
      sheets: parsedSheets,
      styles: parsePart(parts, "xl/styles.xml", "styleSheet"),
      sharedStrings,
      document: workbook,
      relationships,
      contentTypes,
    };
  } catch (error) {
    if (error instanceof BreakdownInputError) throw error;
    throw new BreakdownInputError("No se ha podido leer un Excel .xlsx válido.");
  } finally {
    await zip.close();
  }
}

export function saveXml(parts: Parts, path: string, document: XmlDocument): void {
  parts.set(path, encoder.encode(builder.build(document.nodes)));
}

export async function writeZip(files: Iterable<readonly [string, Uint8Array]>, level = 6) {
  const zip = new ZipWriter(new Uint8ArrayWriter());
  for (const [name, bytes] of files) {
    await zip.add(name, new Uint8ArrayReader(bytes), { level });
  }
  return zip.close();
}
