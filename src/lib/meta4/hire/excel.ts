import "server-only";

import * as XLSX from "xlsx";

import { Meta4HireError } from "./errors";
import {
  ALTA_PERSONA_EXAMPLE_COLUMNS,
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_PERSON_SHEET,
  MANUAL_COLUMNS,
  SERVER_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
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

const clearAltaPersonaExample = (workbook: XLSX.WorkBook): void => {
  const sheet = workbook.Sheets[HIRE_PERSON_SHEET];
  if (!sheet) return;
  for (const column of ALTA_PERSONA_EXAMPLE_COLUMNS) {
    delete sheet[`${column}${FIRST_PERSON_ROW}`];
  }
};

const writePersonRow = (
  sheet: XLSX.WorkSheet,
  row: number,
  person: HirePerson,
  legalEntity: string,
): void => {
  const hireSerial = toExcelSerialDate(person.hireDate);
  writeColumns(sheet, row, MANUAL_COLUMNS.firstName, person.firstName);
  writeColumns(sheet, row, MANUAL_COLUMNS.lastName1, person.lastName1);
  writeColumns(sheet, row, MANUAL_COLUMNS.lastName2, person.lastName2);
  writeColumns(sheet, row, MANUAL_COLUMNS.documentType, person.documentType);
  writeColumns(sheet, row, MANUAL_COLUMNS.documentNumber, person.documentNumber);
  writeColumns(sheet, row, MANUAL_COLUMNS.email, person.email);
  writeColumns(sheet, row, MANUAL_COLUMNS.hireDate, hireSerial);
  writeColumns(sheet, row, SERVER_COLUMNS.legalEntity, legalEntity);
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
  legalEntity: string,
): Buffer => {
  const workbook = XLSX.read(templateBytes, { type: "buffer", raw: true, cellFormula: true });
  const sheet = workbook.Sheets[HIRE_DATA_SHEET];
  if (!sheet) {
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "La plantilla Hire no contiene la hoja AltaNueva.",
    );
  }

  clearAltaPersonaExample(workbook);
  people.forEach((person, index) => {
    writePersonRow(sheet, FIRST_PERSON_ROW + index, person, legalEntity);
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
