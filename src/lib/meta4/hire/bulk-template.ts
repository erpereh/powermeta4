import "server-only";

import ExcelJS from "exceljs";

import {
  HIRE_BULK_COLUMNS,
  type HireBulkColumn,
} from "@/components/tools/users/hire-form/bulk-columns";
import type { Meta4Society } from "@/lib/meta4/societies";

import { HIRE_CATALOG_FIELDS, parseContractOptionId, type HireCatalogs } from "./catalogs";
import { MAX_PERSON_COUNT } from "./mapping";

export const HIRE_BULK_SHEET = "Personas";
export const HIRE_BULK_CATALOG_SHEET = "Catálogos";
/** Row 1: labels; row 2: technical keys read by the upload; people from row 3. */
export const HIRE_BULK_KEY_ROW = 2;
export const HIRE_BULK_FIRST_ROW = 3;

const LAST_ROW = HIRE_BULK_FIRST_ROW + MAX_PERSON_COUNT - 1;
const CHECK_CHOICES = ["Sí", "No"] as const;

export const hireBulkTemplateFileName = (society: Meta4Society): string =>
  `PlantillaAltas_${society}.xlsx`;

type CatalogBlock = { header: string; ids: string[]; names: string[]; detail?: string[] };

const columnLetter = (index: number): string => {
  let value = index;
  let letters = "";
  while (value > 0) {
    const rest = (value - 1) % 26;
    letters = String.fromCharCode(65 + rest) + letters;
    value = Math.floor((value - 1) / 26);
  }
  return letters;
};

const quotedSheet = `'${HIRE_BULK_CATALOG_SHEET}'`;

/** One ID/name block per catalog used by the template, side by side. */
const addCatalogSheet = (
  workbook: ExcelJS.Workbook,
  catalogs: HireCatalogs,
): Map<string, string> => {
  const sheet = workbook.addWorksheet(HIRE_BULK_CATALOG_SHEET, {
    views: [{ state: "frozen", ySplit: 2 }],
  });
  const blocks = new Map<string, CatalogBlock>();
  for (const column of HIRE_BULK_COLUMNS) {
    if (column.kind === "catalog" && column.catalog) {
      const { source } = HIRE_CATALOG_FIELDS[column.catalog];
      if (source === "place" || blocks.has(source)) continue;
      const options = catalogs[source];
      blocks.set(source, {
        header: column.label,
        ids: options.map((option) => option.id),
        names: options.map((option) => option.name),
        ...(options.some((option) => option.detail)
          ? { detail: options.map((option) => option.detail ?? "") }
          : {}),
      });
    }
  }
  const contracts = catalogs.contract.map((option) => parseContractOptionId(option.id));
  blocks.set("legalContract", {
    header: "ID Contrato legal",
    ids: [...new Set(contracts.map((contract) => contract.legalContract))],
    names: [],
  });
  blocks.set("contract", {
    header: "Contratos (legal / interno)",
    ids: contracts.map((contract) => contract.legalContract),
    names: catalogs.contract.map((option) => option.name),
    detail: contracts.map((contract) => contract.internalContract),
  });

  // Range of the ID column of each block, for the drop-downs of the Personas sheet.
  const ranges = new Map<string, string>();
  let column = 1;
  for (const [source, block] of blocks) {
    const idLetter = columnLetter(column);
    sheet.getCell(`${idLetter}1`).value = block.header;
    sheet.getCell(`${idLetter}1`).font = { bold: true };
    const headers =
      source === "contract" ? ["Legal", "Interno", "Nombre"] : ["ID", "Nombre", "Detalle"];
    const widths = [14, 40, 18];
    const blockWidth = source === "contract" || block.detail ? 3 : block.names.length > 0 ? 2 : 1;
    for (let offset = 0; offset < blockWidth; offset += 1) {
      const letter = columnLetter(column + offset);
      sheet.getCell(`${letter}2`).value = headers[offset] ?? "";
      sheet.getCell(`${letter}2`).font = { bold: true, color: { argb: "FF666666" } };
      sheet.getColumn(column + offset).width = widths[offset] ?? 18;
      sheet.getColumn(column + offset).numFmt = "@";
    }
    block.ids.forEach((id, index) => {
      const row = 3 + index;
      sheet.getCell(`${idLetter}${row}`).value = id;
      if (source === "contract") {
        sheet.getCell(`${columnLetter(column + 1)}${row}`).value = block.detail?.[index] ?? "";
        sheet.getCell(`${columnLetter(column + 2)}${row}`).value = block.names[index] ?? "";
      } else {
        if (block.names.length > 0) {
          sheet.getCell(`${columnLetter(column + 1)}${row}`).value = block.names[index] ?? "";
        }
        if (block.detail) {
          sheet.getCell(`${columnLetter(column + 2)}${row}`).value = block.detail[index] ?? "";
        }
      }
    });
    if (block.ids.length > 0) {
      const last = 2 + block.ids.length;
      ranges.set(source, `${quotedSheet}!$${idLetter}$3:$${idLetter}$${last}`);
      if (source === "contract") {
        const internal = columnLetter(column + 1);
        ranges.set("internalContract", `${quotedSheet}!$${internal}$3:$${internal}$${last}`);
      }
    }
    column += blockWidth + 1;
  }
  return ranges;
};

const listFor = (
  column: HireBulkColumn,
  ranges: ReadonlyMap<string, string>,
): string | undefined => {
  if (column.kind === "choice" && column.choices) {
    return `"${column.choices.map((choice) => choice.label).join(",")}"`;
  }
  if (column.kind === "check") return `"${CHECK_CHOICES.join(",")}"`;
  if (column.kind === "contract") {
    return ranges.get(column.key === "legalContract" ? "legalContract" : "internalContract");
  }
  if (column.kind === "catalog" && column.catalog) {
    return ranges.get(HIRE_CATALOG_FIELDS[column.catalog].source);
  }
  return undefined;
};

const INSTRUCTIONS = [
  "Una fila por persona a partir de la fila 3 de la hoja «Personas». No cambies la fila 2 (claves técnicas).",
  "Los campos con * son obligatorios. Los desplegables usan los ID de la hoja «Catálogos» de tu sociedad.",
  "ID Población: escribe el nombre (por ejemplo, MADRID); al cargar se busca en PeopleNet.",
  "Fechas en formato AAAA-MM-DD. Fin de contrato admite fecha y hora (AAAA-MM-DD HH:MM).",
  "Contrato: elige el legal y el interno de una misma fila de «Contratos (legal / interno)».",
  "Fusion ID y Núm. de documento deben ser nuevos: Meta4 modifica la persona existente con el mismo documento.",
  "Al cargar el fichero, las personas aparecen en el formulario para revisarlas antes de lanzar el alta.",
];

/** Bulk hire template with the society's catalogs as drop-downs. */
export const buildHireBulkTemplate = async (catalogs: HireCatalogs): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  const sheet = workbook.addWorksheet(HIRE_BULK_SHEET, {
    views: [{ state: "frozen", ySplit: HIRE_BULK_KEY_ROW, xSplit: 3 }],
  });
  const ranges = addCatalogSheet(workbook, catalogs);

  HIRE_BULK_COLUMNS.forEach((column, index) => {
    const position = index + 1;
    const letter = columnLetter(position);
    const label = sheet.getCell(`${letter}1`);
    label.value = column.required ? `${column.label} *` : column.label;
    label.font = { bold: true };
    label.alignment = { wrapText: true, vertical: "top" };
    const key = sheet.getCell(`${letter}${HIRE_BULK_KEY_ROW}`);
    key.value = column.key;
    key.font = { size: 8, color: { argb: "FF888888" } };
    const sheetColumn = sheet.getColumn(position);
    sheetColumn.width = Math.min(Math.max(column.label.length + 4, 14), 32);
    sheetColumn.numFmt =
      column.kind === "date" ? "yyyy-mm-dd" : column.kind === "datetime" ? "yyyy-mm-dd hh:mm" : "@";
    const list = listFor(column, ranges);
    if (list) {
      const validation: ExcelJS.DataValidation = {
        type: "list",
        allowBlank: true,
        formulae: [list],
        showErrorMessage: true,
        errorStyle: "warning",
        errorTitle: column.label,
        error: "El valor no está en la lista de la hoja «Catálogos».",
      };
      for (let row = HIRE_BULK_FIRST_ROW; row <= LAST_ROW; row += 1) {
        sheet.getCell(`${letter}${row}`).dataValidation = validation;
      }
    }
  });
  sheet.getRow(1).height = 32;

  const help = workbook.addWorksheet("Instrucciones");
  help.getColumn(1).width = 120;
  INSTRUCTIONS.forEach((line, index) => {
    help.getCell(`A${index + 1}`).value = line;
  });

  return Buffer.from(await workbook.xlsx.writeBuffer());
};
