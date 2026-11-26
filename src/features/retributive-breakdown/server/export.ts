import {
  type Employees,
  type GroupResult,
  METRICS_PER_CONCEPT,
  type Scalar,
  SUMMARY_COLUMNS,
} from "./calculation";
import {
  type Sheet,
  type Workbook,
  attribute,
  attributes,
  BreakdownInputError,
  children,
  columnName,
  element,
  normalize,
  readRange,
  requireElement,
  saveXml,
} from "./workbook";

const firstColumn = SUMMARY_COLUMNS + 1;
const metricLabels = ["MUJERES", "VARONES", "DIFERENCIA %"];
const sheetTagsBeforeMerges = new Set([
  "sheetCalcPr",
  "sheetProtection",
  "protectedRanges",
  "scenarios",
  "autoFilter",
  "sortState",
  "dataConsolidate",
  "customSheetViews",
]);

type XmlNode = Parameters<typeof attributes>[0];

function cellNode(row: number, column: number, style: string | undefined, value: Scalar): XmlNode {
  const attrs: Record<string, string> = { r: columnName(column) + row };
  if (style !== undefined) attrs.s = style;
  if (value === null) return element("c", attrs);
  if (typeof value === "number") {
    return element("c", attrs, [element("v", {}, [{ "#text": String(value) }])]);
  }
  attrs.t = "inlineStr";
  // Escapa secuencias literales que Excel interpretaría como caracteres especiales.
  const escaped = value.replace(/_x[0-9a-f]{4}_/gi, (match) => "_x005F_" + match.slice(1));
  const text = Array.from(escaped, (character) => {
    const code = character.charCodeAt(0);
    return code < 32 && ![9, 10, 13].includes(code)
      ? "_x" + code.toString(16).padStart(4, "0") + "_"
      : character;
  }).join("");
  return element("c", attrs, [
    element("is", {}, [element("t", { "xml:space": "preserve" }, [{ "#text": text }])]),
  ]);
}

function formatStyles(workbook: Workbook) {
  const { styles } = workbook;
  const cellXfs = requireElement(children(styles.root, "styleSheet"), "cellXfs");
  const content = children(cellXfs, "cellXfs");
  const formats = content.filter((node) => "xf" in node);
  const derived = new Map<string, string>();
  const fromTemplate = (style: string | undefined, fallback: string) => {
    const format = attribute(formats[Number(style)], "numFmtId");
    return format && format !== "0" ? format : fallback;
  };
  const styleFor = (style: string | undefined, format: string) => {
    const key = (style ?? "0") + ":" + format;
    const cached = derived.get(key);
    if (cached !== undefined) return cached;
    const base = formats[Number(style ?? 0)];
    if (!base) throw new BreakdownInputError("Hay un estilo de celda no válido.");
    if (attribute(base, "numFmtId") === format && attribute(base, "applyNumberFormat") === "1") {
      derived.set(key, style ?? "0");
      return style ?? "0";
    }
    const updated = structuredClone(base);
    Object.assign(attributes(updated), { "@_numFmtId": format, "@_applyNumberFormat": "1" });
    const index = String(formats.length);
    content.push(updated);
    formats.push(updated);
    attributes(cellXfs)["@_count"] = String(formats.length);
    derived.set(key, index);
    return index;
  };
  return { fromTemplate, styleFor };
}

function ensureMergeCollection(sheet: Sheet): XmlNode {
  const content = children(sheet.document.root, "worksheet");
  const original = content.find((node) => "mergeCells" in node);
  if (original) return original;
  const merges = element("mergeCells", {});
  let index = content.indexOf(sheet.data) + 1;
  while (
    index < content.length &&
    Object.keys(content[index]).some((tag) => sheetTagsBeforeMerges.has(tag))
  ) {
    index++;
  }
  content.splice(index, 0, merges);
  return merges;
}

export function appendBreakdown(
  workbook: Workbook,
  sheet: Sheet,
  source: Employees,
  analysis: { header: number; groups: GroupResult[] },
): void {
  const { header, groups } = analysis;
  const { concepts } = source;
  const lastColumn = SUMMARY_COLUMNS + concepts.length * METRICS_PER_CONCEPT;
  const lastProcessedRow = groups.at(-1)?.row ?? header;

  const codeKeys = new Set(concepts.map(({ code }) => normalize(code)));
  const templateColumns = new Map<string, number>();
  for (const column of sheet.rows.get(header - 2)?.cells.keys() ?? []) {
    const code = normalize(sheet.value(header - 2, column));
    if (column < firstColumn || !codeKeys.has(code)) continue;
    if (templateColumns.has(code)) {
      throw new BreakdownInputError("La hoja repite un bloque de concepto.");
    }
    templateColumns.set(code, column);
  }
  const templateStart = Math.min(...templateColumns.values());
  const oldRanges = [...templateColumns.values()].sort((a, b) => a - b);
  const oldDetails = new Set(
    oldRanges.flatMap((column) =>
      Array.from({ length: METRICS_PER_CONCEPT }, (_, offset) => column + offset),
    ),
  );
  if (oldDetails.size !== oldRanges.length * METRICS_PER_CONCEPT) {
    throw new BreakdownInputError("La hoja contiene bloques de desglose solapados.");
  }
  for (const [row, { cells }] of sheet.rows) {
    for (const [column, cell] of cells) {
      const hasFormula = children(cell, "c").some((item) => "f" in item);
      if (column < firstColumn || row < header - 4) {
        if (attribute(cell, "t") === "e" || hasFormula) {
          throw new BreakdownInputError("El resumen de PeopleNet contiene fórmulas o errores.");
        }
      } else if (
        !oldDetails.has(column) &&
        (row > header || !templateColumns.size) &&
        (sheet.value(row, column) !== null || hasFormula)
      ) {
        throw new BreakdownInputError("Hay datos fuera de los bloques de desglose reconocidos.");
      }
    }
  }

  const merges = ensureMergeCollection(sheet);
  const keptMerges = children(merges, "mergeCells").filter((node) => {
    if (!("mergeCell" in node)) return true;
    const range = readRange(attribute(node, "ref"));
    if (range.left < firstColumn && range.right >= firstColumn) {
      throw new BreakdownInputError("Una celda combinada cruza el límite del resumen.");
    }
    return range.right < firstColumn || range.bottom < header - 4;
  });
  const merge = (row: number, left: number, right: number) => {
    if (right > left)
      keptMerges.push(
        element("mergeCell", {
          ref: columnName(left) + row + ":" + columnName(right) + row,
        }),
      );
  };

  const structure = children(sheet.document.root, "worksheet");
  const existingCols = structure.find((node) => "cols" in node);
  const columns = existingCols ?? element("cols", {});
  if (!existingCols) structure.splice(structure.indexOf(sheet.data), 0, columns);
  const oldColumns = children(columns, "cols").filter((node) => "col" in node);
  const keptColumns = oldColumns.flatMap((node) => {
    if (Number(attribute(node, "min")) >= firstColumn) return [];
    if (Number(attribute(node, "max")) < firstColumn) return [node];
    const shortened = structuredClone(node);
    attributes(shortened)["@_max"] = String(SUMMARY_COLUMNS);
    return [shortened];
  });

  const newCells = new Map<number, XmlNode[]>();
  const put = (row: number, column: number, style: string | undefined, value: Scalar) => {
    const cell = cellNode(row, column, style, value);
    const current = newCells.get(row);
    if (current) current.push(cell);
    else newCells.set(row, [cell]);
  };
  const style = (row: number, column: number) =>
    attribute(sheet.rows.get(row)?.cells.get(column), "s");
  const groupPrototype = groups[0]?.row ?? header + 1;
  const styles = formatStyles(workbook);
  const amountFormat = styles.fromTemplate(style(groupPrototype, templateStart), "4");
  merge(header - 4, firstColumn, lastColumn);
  let sectionStart = firstColumn;
  for (const [index, concept] of concepts.entries()) {
    const start = firstColumn + index * METRICS_PER_CONCEPT;
    const old = templateColumns.get(normalize(concept.code)) ?? templateStart;
    const beginsSection = index === 0 || concepts[index - 1].section !== concept.section;
    if (beginsSection) sectionStart = start;
    if (concepts[index + 1]?.section !== concept.section) {
      merge(header - 3, sectionStart, start + METRICS_PER_CONCEPT - 1);
    }
    merge(header - 2, start, start + 5);
    merge(header - 1, start, start + 2);
    merge(header - 1, start + 3, start + 5);
    for (let offset = 0; offset < METRICS_PER_CONCEPT; offset++) {
      const column = start + offset;
      const oldColumn = old + offset;
      const widthNode = oldColumns.find(
        (node) =>
          Number(attribute(node, "min")) <= oldColumn &&
          Number(attribute(node, "max")) >= oldColumn,
      );
      const oldWidth = Number(attribute(widthNode, "width"));
      const width = Number.isFinite(oldWidth) ? Math.max(18, oldWidth) : 18;
      const columnNode = widthNode ? structuredClone(widthNode) : element("col", {});
      Object.assign(attributes(columnNode), {
        "@_min": String(column),
        "@_max": String(column),
        "@_width": String(width),
        "@_customWidth": "1",
      });
      delete attributes(columnNode)["@_bestFit"];
      keptColumns.push(columnNode);

      const headerStyle = (row: number) =>
        style(row, oldColumn) ?? style(row, templateStart + offset) ?? style(row, 6);
      put(
        header - 4,
        column,
        headerStyle(header - 4),
        column === firstColumn ? "RETRIBUCIONES (desglose por conceptos)" : null,
      );
      put(
        header - 3,
        column,
        headerStyle(header - 3),
        beginsSection && offset === 0 ? concept.section : null,
      );
      put(header - 2, column, headerStyle(header - 2), offset === 0 ? concept.code : null);
      put(
        header - 1,
        column,
        headerStyle(header - 1),
        offset === 0 ? "MEDIA" : offset === 3 ? "MEDIANA" : null,
      );
      put(header, column, headerStyle(header), metricLabels[offset % 3]);
      const percentage = offset % 3 === 2;
      for (const group of groups) {
        const baseStyle =
          style(group.row, oldColumn) ??
          style(groupPrototype, oldColumn) ??
          style(groupPrototype, templateStart + offset) ??
          style(groupPrototype, percentage ? 8 : 6);
        put(
          group.row,
          column,
          styles.styleFor(baseStyle, percentage ? "10" : amountFormat),
          group.metrics[index][offset],
        );
      }
    }
  }
  for (const group of groups) {
    if (!group.added) continue;
    const count = group.women + group.men;
    const summary = [
      group.identifier,
      group.label,
      group.women,
      group.men,
      count ? group.women / count : 0,
    ];
    for (const [index, value] of summary.entries()) {
      put(group.row, index + 1, style(groupPrototype, index + 1), value);
    }
  }

  const rows = [...new Set([...sheet.rows.keys(), ...newCells.keys()])].sort((a, b) => a - b);
  sheet.data.sheetData = rows.map((row) => {
    const original = sheet.rows.get(row)?.node;
    const additions = newCells.get(row) ?? [];
    const addedSummary = new Set(additions.map((node) => attribute(node, "r")));
    const summary = [...(sheet.rows.get(row)?.cells ?? [])].filter(
      ([column, node]) => column < firstColumn && !addedSummary.has(attribute(node, "r")),
    );
    const notes =
      row < header - 4
        ? [...(sheet.rows.get(row)?.cells ?? [])].filter(([column]) => column >= firstColumn)
        : [];
    const generated = additions.map(
      (node) => [readRange(attribute(node, "r")).left, node] as const,
    );
    const ordered = [...summary, ...notes, ...generated]
      .sort(([left], [right]) => left - right)
      .map(([, node]) => node);
    if (!original) return element("row", { r: String(row) }, ordered);
    const otherNodes = children(original, "row").filter((node) => !("c" in node));
    original.row = [...ordered, ...otherNodes];
    if (attribute(original, "spans")) attributes(original)["@_spans"] = "1:" + lastColumn;
    return original;
  });
  columns.cols = keptColumns;
  merges.mergeCells = keptMerges;
  attributes(merges)["@_count"] = String(keptMerges.filter((node) => "mergeCell" in node).length);
  const dimension = structure.find((node) => "dimension" in node);
  if (dimension) {
    const original = readRange(attribute(dimension, "ref"));
    const bottom = Math.max(original.bottom, lastProcessedRow);
    attributes(dimension)["@_ref"] =
      columnName(original.left) +
      original.top +
      ":" +
      columnName(Math.max(original.right, lastColumn)) +
      bottom;
  }
  saveXml(workbook.parts, sheet.path, sheet.document);
  saveXml(workbook.parts, "xl/styles.xml", workbook.styles);
}
