import { posix } from "node:path";

import { GROUPINGS, type GroupingId } from "../contract";
import { SUMMARY_COLUMNS } from "./calculation";
import { accountingStyles, importStyles } from "./consolidate-styles";
import {
  attribute,
  attributes,
  BreakdownInputError,
  children,
  element,
  normalize,
  parsePart,
  readWorkbook,
  requireElement,
  saveXml,
  type Sheet,
  textContent,
  type Workbook,
  type XmlNode,
  writeZip,
} from "./workbook";

const sheetOrder = [
  "puesto",
  "valoracion-del-puesto",
  "categoria",
  "familia-de-puesto",
  "categoria-personal",
] as const satisfies readonly GroupingId[];

// Cada libro generado puede contener hasta 500.000 celdas de desglose nuevas.
const generatedWorkbookLimit = 128 * 1024 * 1024;
const workbookRels = "xl/_rels/workbook.xml.rels";

function sheetNodes(book: Workbook) {
  const list = requireElement(children(book.document.root, "workbook"), "sheets");
  return children(list, "sheets");
}

function findSheet(book: Workbook, name: string) {
  const sheet = book.sheets.find((item) => normalize(item.name) === normalize(name));
  if (!sheet) throw new BreakdownInputError("Falta una hoja del Excel consolidado.");
  return sheet;
}

function inlineSharedText(cell: XmlNode, book: Workbook) {
  if (attribute(cell, "t") !== "s") return;
  const value = children(cell, "c").find((node) => "v" in node);
  if (!value) return;
  const shared = book.sharedStrings[Number(textContent(children(value, "v")))];
  if (!shared) throw new BreakdownInputError("El Excel contiene texto no legible.");
  attributes(cell)["@_t"] = "inlineStr";
  cell.c = [element("is", {}, structuredClone(children(shared, "si")))];
}

function fillPeriod(employees: Sheet, target: Sheet, book: Workbook) {
  const source = employees.rows.get(4);
  const label = source?.cells.get(1);
  const period = source?.cells.get(2);
  if (
    !label ||
    !period ||
    normalize(employees.value(4, 1)) !== "periodo de calculo" ||
    typeof employees.value(4, 2) !== "string" ||
    target.value(4, 1) !== null ||
    target.value(4, 2) !== null
  )
    return;
  const rows = children(target.data, "sheetData");
  const targetRow = target.rows.get(4);
  const row = targetRow?.node ?? element("row", { r: "4" });
  const content = children(row, "row");
  for (const column of [1, 2]) {
    const placeholder = targetRow?.cells.get(column);
    if (placeholder) content.splice(content.indexOf(placeholder), 1);
  }
  const header = structuredClone([label, period]);
  for (const cell of header) inlineSharedText(cell, book);
  content.unshift(...header);
  if (!targetRow) {
    const after = rows.findIndex((node) => Number(attribute(node, "r")) > 4);
    rows.splice(after < 0 ? rows.length : after, 0, row);
  }
}

function contentType(book: Workbook, path: string) {
  const nodes = children(book.contentTypes.root, "Types");
  const override = nodes.find((node) => attribute(node, "PartName") === "/" + path);
  const fallback = nodes.find(
    (node) => attribute(node, "Extension") === posix.extname(path).slice(1),
  );
  const type = attribute(override ?? fallback, "ContentType");
  if (!type) throw new BreakdownInputError("Falta el tipo de un componente del Excel.");
  return type;
}

function freshPart(book: Workbook, path: string) {
  const extension = posix.extname(path);
  const prefix = path.slice(0, path.length - extension.length);
  let next = path;
  for (let suffix = 2; book.parts.has(next); suffix++) next = prefix + "-" + suffix + extension;
  return next;
}

function partRelationships(path: string) {
  return posix.join(posix.dirname(path), "_rels", posix.basename(path) + ".rels");
}

function importPart(target: Workbook, source: Workbook, path: string, sheetPath: string) {
  const copied = new Map<string, string>();

  function copy(original: string): string {
    const existing = copied.get(original);
    if (existing) return existing;
    const bytes = source.parts.get(original);
    if (!bytes)
      throw new BreakdownInputError("Una relación del Excel apunta a un componente ausente.");
    const destination = original === path ? sheetPath : freshPart(target, original);
    copied.set(original, destination);
    target.parts.set(destination, bytes);
    children(target.contentTypes.root, "Types").push(
      element("Override", {
        PartName: "/" + destination,
        ContentType: contentType(source, original),
      }),
    );

    const originalRels = partRelationships(original);
    if (source.parts.has(originalRels)) {
      const document = parsePart(source.parts, originalRels, "Relationships");
      for (const rel of children(document.root, "Relationships")) {
        const uri = attribute(rel, "Target");
        if (!uri || attribute(rel, "TargetMode") === "External") continue;
        const resolved = uri.startsWith("/")
          ? uri.slice(1)
          : posix.join(posix.dirname(original), uri);
        const imported = copy(resolved);
        attributes(rel)["@_Target"] = posix.relative(posix.dirname(destination), imported);
      }
      saveXml(target.parts, partRelationships(destination), document);
    }
    return destination;
  }

  return copy(path);
}

function remapAttribute(node: XmlNode, name: string, rebase: (id: string) => string) {
  const existing = attribute(node, name);
  if (existing !== undefined) attributes(node)["@_" + name] = rebase(existing);
}

function importSheetStyles(sheet: Sheet, target: Workbook, source: Workbook) {
  const styles = importStyles(target, source);
  const structure = children(sheet.document.root, "worksheet");
  for (const section of structure) {
    for (const column of children(section, "cols")) remapAttribute(column, "style", styles.cell);
    for (const rule of children(section, "conditionalFormatting")) {
      remapAttribute(rule, "dxfId", styles.differential);
    }
  }
  for (const { node, cells } of sheet.rows.values()) {
    remapAttribute(node, "s", styles.cell);
    for (const cell of cells.values()) {
      remapAttribute(cell, "s", styles.cell);
      inlineSharedText(cell, source);
    }
  }
}

function applyAccounting(sheet: Sheet, identifier: string, format: (id: string) => string) {
  const header = [...sheet.rows.keys()].find(
    (row) => normalize(sheet.value(row, 1)) === normalize(identifier),
  );
  if (header === undefined)
    throw new BreakdownInputError("Falta la cabecera del desglose consolidado.");
  for (const [row, { cells }] of sheet.rows) {
    if (row <= header) continue;
    for (const [column, cell] of cells) {
      if (column <= SUMMARY_COLUMNS || (column - SUMMARY_COLUMNS) % 3 === 0) continue;
      const kind = attribute(cell, "t");
      if ((!kind || kind === "n") && children(cell, "c").some((node) => "v" in node)) {
        attributes(cell)["@_s"] = format(attribute(cell, "s") ?? "0");
      }
    }
  }
}

function definedNames(book: Workbook) {
  return children(book.document.root, "workbook").find((node) => "definedNames" in node);
}

function groupingFor(id: GroupingId) {
  const grouping = GROUPINGS.find(({ file }) => file === id);
  if (!grouping) throw new BreakdownInputError("Falta una agrupación del Excel consolidado.");
  return grouping;
}

function importLocalNames(
  target: Workbook,
  source: Workbook,
  sheet: Sheet,
  title: string,
  index: number,
) {
  const localIndex = String(source.sheets.indexOf(sheet));
  const imported = children(definedNames(source) ?? {}, "definedNames")
    .filter((node) => attribute(node, "localSheetId") === localIndex)
    .map((node) => {
      const clone = structuredClone(node);
      attributes(clone)["@_localSheetId"] = String(index);
      for (const item of children(clone, "definedName")) {
        const oldName = "'" + sheet.name.replaceAll("'", "''") + "'!";
        const newName = "'" + title.replaceAll("'", "''") + "'!";
        if (item["#text"]) item["#text"] = item["#text"].replaceAll(oldName, newName);
      }
      return clone;
    });
  if (!imported.length) return;
  const names = definedNames(target);
  if (names) children(names, "definedNames").push(...imported);
  else {
    const workbook = children(target.document.root, "workbook");
    const beforeNames = [
      "fileVersion",
      "fileSharing",
      "workbookPr",
      "workbookProtection",
      "bookViews",
      "sheets",
      "functionGroups",
      "externalReferences",
    ];
    const next = workbook.findIndex((node) => !beforeNames.some((name) => name in node));
    workbook.splice(next < 0 ? workbook.length : next, 0, element("definedNames", {}, imported));
  }
}

export async function consolidateBreakdown(getBook: (id: GroupingId) => Uint8Array<ArrayBuffer>) {
  const base = await readWorkbook(getBook("puesto"), generatedWorkbookLimit);
  const employees = findSheet(base, "Empleados");
  const position = groupingFor("puesto");
  const job = findSheet(base, position.sheet);
  const sheets = sheetNodes(base);
  const employeeIndex = base.sheets.indexOf(employees);
  const jobIndex = base.sheets.indexOf(job);
  sheets.splice(0, sheets.length, sheets[employeeIndex], sheets[jobIndex]);
  attributes(sheets[0])["@_name"] = "Empleados";
  attributes(sheets[1])["@_name"] = position.sheet;
  for (const name of children(definedNames(base) ?? {}, "definedNames")) {
    remapAttribute(name, "localSheetId", (index) => (Number(index) === employeeIndex ? "0" : "1"));
  }

  const relationships = children(base.relationships.root, "Relationships");
  const ids = new Set(relationships.map((node) => attribute(node, "Id")));
  const sheetRelType = attribute(
    relationships.find((node) => attribute(node, "Id") === attribute(sheets[1], "r:id")),
    "Type",
  );
  if (!sheetRelType) throw new BreakdownInputError("Falta la relación de la hoja de Puesto.");
  let nextRelation = 1;
  let nextSheet = Math.max(...sheets.map((node) => Number(attribute(node, "sheetId")))) + 1;
  let nextSheetPart = 1;
  const format = accountingStyles(base);
  applyAccounting(job, position.identifier, format);
  saveXml(base.parts, job.path, job.document);

  for (const id of sheetOrder.slice(1)) {
    const grouping = groupingFor(id);
    const source = await readWorkbook(getBook(id), generatedWorkbookLimit);
    const sheet = findSheet(source, grouping.sheet);
    while (base.parts.has(`xl/worksheets/sheet${nextSheetPart}.xml`)) nextSheetPart++;
    const path = importPart(base, source, sheet.path, `xl/worksheets/sheet${nextSheetPart++}.xml`);
    importSheetStyles(sheet, base, source);
    applyAccounting(sheet, grouping.identifier, format);
    if (id === "categoria-personal") fillPeriod(employees, sheet, base);
    saveXml(base.parts, path, sheet.document);

    while (ids.has("rId" + nextRelation)) nextRelation++;
    const relation = "rId" + nextRelation++;
    relationships.push(
      element("Relationship", {
        Id: relation,
        Type: sheetRelType,
        Target: posix.relative("xl", path),
      }),
    );
    importLocalNames(base, source, sheet, grouping.sheet, sheets.length);
    sheets.push(
      element("sheet", { name: grouping.sheet, sheetId: String(nextSheet++), "r:id": relation }),
    );
  }

  saveXml(base.parts, "xl/styles.xml", base.styles);
  saveXml(base.parts, "xl/workbook.xml", base.document);
  saveXml(base.parts, workbookRels, base.relationships);
  saveXml(base.parts, "[Content_Types].xml", base.contentTypes);
  return writeZip(base.parts);
}
