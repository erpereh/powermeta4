import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { generateHireWorkbook } from "./excel";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_PERSON_SHEET,
  HIRE_TEMPLATE_SHEET_NAMES,
  MANUAL_COLUMNS,
  SERVER_COLUMNS,
  TEMPLATE_VALUE_DEFAULT_COLUMNS,
  UNKNOWN_DO_NOT_WRITE_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);

const person = (suffix: string, hireDate: string): HirePerson => ({
  firstName: `Nombre${suffix}`,
  lastName1: `Apellido${suffix}`,
  lastName2: suffix === "B" ? "" : `Segundo${suffix}`,
  documentType: "DNI",
  documentNumber: `DOC${suffix}`,
  email: `user${suffix.toLowerCase()}@example.test`,
  hireDate,
});

const cellValue = (sheet: XLSX.WorkSheet, column: string, row: number): unknown =>
  sheet[`${column}${row}`]?.v;

const buildTemplate = (): Buffer => {
  const workbook = XLSX.utils.book_new();
  for (const name of HIRE_TEMPLATE_SHEET_NAMES) {
    const sheet = XLSX.utils.aoa_to_sheet([]);
    sheet["!ref"] = "A1:IU20";
    if (name === HIRE_DATA_SHEET) {
      sheet.DT6 = { t: "n", v: 100 };
      sheet.GK6 = { t: "s", v: "EUR" };
      sheet.HF6 = { t: "s", v: "3 - Otras situaciones, o no desea" };
      sheet.HG6 = { t: "n", v: 3 };
      sheet.IF6 = { t: "s", v: "ES" };
      sheet.IG6 = { t: "s", v: "ES" };
      sheet.F6 = { t: "s", v: "01" };
    }
    if (name === HIRE_PERSON_SHEET) {
      sheet.O6 = { t: "s", v: "EXAMPLE_LAST" };
      sheet.R6 = { t: "s", v: "EXAMPLE_FIRST" };
    }
    XLSX.utils.book_append_sheet(workbook, sheet, name);
  }
  return XLSX.write(workbook, { type: "buffer", bookType: "xls" }) as Buffer;
};

describe("generateHireWorkbook", () => {
  it("writes one person into row 6 and keeps OLE2 magic", () => {
    const hireDate = "2026-10-02";
    const bytes = generateHireWorkbook(buildTemplate(), [person("A", hireDate)], "LEGAL_CYC");
    expect(bytes.subarray(0, 8).equals(OLE_MAGIC)).toBe(true);

    const workbook = XLSX.read(bytes, { type: "buffer", raw: true });
    expect(workbook.SheetNames).toEqual([...HIRE_TEMPLATE_SHEET_NAMES]);
    const sheet = workbook.Sheets[HIRE_DATA_SHEET];
    const row = FIRST_PERSON_ROW;

    expect(cellValue(sheet, MANUAL_COLUMNS.firstName[0], row)).toBe("NombreA");
    expect(cellValue(sheet, MANUAL_COLUMNS.lastName1[0], row)).toBe("ApellidoA");
    expect(cellValue(sheet, MANUAL_COLUMNS.lastName1[1], row)).toBe("ApellidoA");
    expect(cellValue(sheet, MANUAL_COLUMNS.lastName2[0], row)).toBe("SegundoA");
    expect(cellValue(sheet, MANUAL_COLUMNS.documentType[0], row)).toBe("DNI");
    expect(cellValue(sheet, MANUAL_COLUMNS.documentNumber[0], row)).toBe("DOCA");
    expect(cellValue(sheet, MANUAL_COLUMNS.documentNumber[1], row)).toBe("DOCA");
    expect(cellValue(sheet, MANUAL_COLUMNS.email[0], row)).toBe("usera@example.test");
    expect(cellValue(sheet, MANUAL_COLUMNS.hireDate[0], row)).toBe(toExcelSerialDate(hireDate));
    expect(cellValue(sheet, SERVER_COLUMNS.legalEntity[0], row)).toBe("LEGAL_CYC");
    expect(cellValue(sheet, SERVER_COLUMNS.legalEntity[1], row)).toBe("LEGAL_CYC");
  });

  it("writes several people on consecutive rows and leaves optional second surname empty", () => {
    const bytes = generateHireWorkbook(
      buildTemplate(),
      [person("A", "2026-10-02"), person("B", "2026-10-03")],
      "LEGAL_IBER",
    );
    const sheet = XLSX.read(bytes, { type: "buffer", raw: true }).Sheets[HIRE_DATA_SHEET];

    expect(cellValue(sheet, "R", 6)).toBe("NombreA");
    expect(cellValue(sheet, "R", 7)).toBe("NombreB");
    expect(cellValue(sheet, "Q", 7)).toBeUndefined();
    expect(cellValue(sheet, "CH", 7)).toBe("LEGAL_IBER");
  });

  it("keeps template-safe defaults and does not write unknown personal columns", () => {
    const bytes = generateHireWorkbook(buildTemplate(), [person("A", "2026-10-02")], "LEGAL_CYC");
    const sheet = XLSX.read(bytes, { type: "buffer", raw: true }).Sheets[HIRE_DATA_SHEET];

    expect(cellValue(sheet, TEMPLATE_VALUE_DEFAULT_COLUMNS[0], 6)).toBe(100);
    expect(cellValue(sheet, TEMPLATE_VALUE_DEFAULT_COLUMNS[1], 6)).toBe("EUR");
    expect(cellValue(sheet, "F", 6)).toBe("01");

    for (const column of UNKNOWN_DO_NOT_WRITE_COLUMNS) {
      expect(cellValue(sheet, column, 6)).toBeUndefined();
    }
  });

  it("clears AltaPersona example identity cells without copying them", () => {
    const bytes = generateHireWorkbook(buildTemplate(), [person("A", "2026-10-02")], "LEGAL_CYC");
    const sheet = XLSX.read(bytes, { type: "buffer", raw: true }).Sheets[HIRE_PERSON_SHEET];
    expect(cellValue(sheet, "O", 6)).toBeUndefined();
    expect(cellValue(sheet, "R", 6)).toBeUndefined();
  });
});
