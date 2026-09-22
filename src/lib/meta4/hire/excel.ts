import "server-only";

import * as XLSX from "xlsx";

import { Meta4HireError } from "./errors";
import { FIRST_PERSON_ROW, HIRE_DATA_SHEET, MANUAL_COLUMNS, toExcelSerialDate } from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);

const setCell = (
  sheet: XLSX.WorkSheet,
  column: string,
  row: number,
  value: string | number,
): void => {
  const address = `${column}${row}`;
  if (typeof value === "number") {
    sheet[address] = { t: "n", v: value };
    return;
  }
  if (value === "") {
    delete sheet[address];
    return;
  }
  sheet[address] = { t: "s", v: value };
};

const writeColumns = (
  sheet: XLSX.WorkSheet,
  row: number,
  columns: readonly string[],
  value: string | number,
): void => {
  for (const column of columns) {
    setCell(sheet, column, row, value);
  }
};

const cloneRow = (sheet: XLSX.WorkSheet, fromRow: number, toRow: number): void => {
  if (fromRow === toRow) return;
  const copies: Array<{ dest: string; cell: XLSX.CellObject }> = [];
  for (const address of Object.keys(sheet)) {
    if (address.startsWith("!")) continue;
    const decoded = XLSX.utils.decode_cell(address);
    if (decoded.r !== fromRow - 1) continue;
    const cell = sheet[address];
    if (!cell) continue;
    copies.push({
      dest: XLSX.utils.encode_cell({ c: decoded.c, r: toRow - 1 }),
      cell: { ...cell },
    });
  }
  for (const copy of copies) {
    sheet[copy.dest] = copy.cell;
  }
};

const overlayPersonRow = (sheet: XLSX.WorkSheet, row: number, person: HirePerson): void => {
  const hireSerial = toExcelSerialDate(person.hireDate);
  writeColumns(sheet, row, MANUAL_COLUMNS.firstName, person.firstName);
  writeColumns(sheet, row, MANUAL_COLUMNS.lastName1, person.lastName1);
  writeColumns(sheet, row, MANUAL_COLUMNS.lastName2, person.lastName2);
  writeColumns(sheet, row, MANUAL_COLUMNS.documentType, person.documentType);
  writeColumns(sheet, row, MANUAL_COLUMNS.documentNumber, person.documentNumber);
  writeColumns(sheet, row, MANUAL_COLUMNS.email, person.email);
  writeColumns(sheet, row, MANUAL_COLUMNS.hireDate, hireSerial);
};

export const assertOle2Buffer = (bytes: Buffer): void => {
  if (bytes.length < OLE_MAGIC.length || !bytes.subarray(0, OLE_MAGIC.length).equals(OLE_MAGIC)) {
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "El fichero Hire generado no es un XLS BIFF/OLE2 válido.",
    );
  }
};

export const generateHireWorkbook = (
  templateBytes: Buffer,
  people: readonly HirePerson[],
): Buffer => {
  const workbook = XLSX.read(templateBytes, { type: "buffer", raw: true, cellFormula: true });
  const sheet = workbook.Sheets[HIRE_DATA_SHEET];
  if (!sheet) {
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "La plantilla Hire no contiene la hoja AltaNueva.",
    );
  }

  for (let index = 1; index < people.length; index += 1) {
    cloneRow(sheet, FIRST_PERSON_ROW, FIRST_PERSON_ROW + index);
  }
  people.forEach((person, index) => {
    overlayPersonRow(sheet, FIRST_PERSON_ROW + index, person);
  });

  const lastRow = FIRST_PERSON_ROW + people.length - 1;
  const range = XLSX.utils.decode_range(sheet["!ref"] ?? "A1");
  if (range.e.r < lastRow - 1) {
    range.e.r = lastRow - 1;
    sheet["!ref"] = XLSX.utils.encode_range(range);
  }

  const generated = XLSX.write(workbook, { type: "buffer", bookType: "xls" });
  const buffer = Buffer.from(generated);
  assertOle2Buffer(buffer);
  return buffer;
};
