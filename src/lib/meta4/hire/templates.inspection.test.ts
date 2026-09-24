import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_TEMPLATE_SHEET_NAMES,
  MANUAL_COLUMNS,
} from "./mapping";

const templatesDir = path.join(process.cwd(), "fuentes", "HIRE");
const files = {
  VACIO: path.join(templatesDir, "Hire_VACIO.xls"),
  P1: path.join(templatesDir, "Hire_1_PERSONA.xls"),
  P3: path.join(templatesDir, "Hire_3_PERSONAS.xls"),
};

const templatesPresent = Object.values(files).every((filePath) => existsSync(filePath));

const nonemptyColumns = (sheet: XLSX.WorkSheet, row: number): Set<string> => {
  const found = new Set<string>();
  for (const address of Object.keys(sheet)) {
    if (address.startsWith("!")) continue;
    const decoded = XLSX.utils.decode_cell(address);
    if (decoded.r !== row - 1) continue;
    const cell = sheet[address];
    if (cell == null || cell.v === undefined || cell.v === null || cell.v === "") continue;
    found.add(XLSX.utils.encode_col(decoded.c));
  }
  return found;
};

const hasText = (sheet: XLSX.WorkSheet, column: string, row: number): boolean => {
  const value = sheet[`${column}${row}`]?.v;
  return typeof value === "string" ? value.trim().length > 0 : value != null && value !== "";
};

describe.skipIf(!templatesPresent)("Hire template inspection", () => {
  it("treats Hire_1_PERSONA as the filled template with one person on row 6", () => {
    const p1 = XLSX.read(readFileSync(files.P1), { type: "buffer", raw: true });
    const p3 = XLSX.read(readFileSync(files.P3), { type: "buffer", raw: true });
    const vacio = XLSX.read(readFileSync(files.VACIO), { type: "buffer", raw: true });

    for (const workbook of [vacio, p1, p3]) {
      expect(workbook.SheetNames).toEqual([...HIRE_TEMPLATE_SHEET_NAMES]);
    }

    const p1Sheet = p1.Sheets[HIRE_DATA_SHEET];
    const p3Sheet = p3.Sheets[HIRE_DATA_SHEET];

    expect(hasText(p1Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW)).toBe(true);
    expect(hasText(p1Sheet, MANUAL_COLUMNS.email[0], FIRST_PERSON_ROW)).toBe(true);
    expect(hasText(p1Sheet, MANUAL_COLUMNS.email[1], FIRST_PERSON_ROW)).toBe(true);
    expect(hasText(p1Sheet, MANUAL_COLUMNS.legalEntity[0], FIRST_PERSON_ROW)).toBe(true);
    expect(hasText(p1Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW + 1)).toBe(false);

    expect(hasText(p3Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW)).toBe(true);
    expect(hasText(p3Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW + 1)).toBe(true);
    expect(hasText(p3Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW + 2)).toBe(true);
    expect(hasText(p3Sheet, MANUAL_COLUMNS.firstName[0], FIRST_PERSON_ROW + 3)).toBe(false);

    const p1Cols = nonemptyColumns(p1Sheet, FIRST_PERSON_ROW);
    expect(p1Cols.has(MANUAL_COLUMNS.firstName[0])).toBe(true);
    expect(p1Cols.has(MANUAL_COLUMNS.email[1])).toBe(true);
  }, 120_000);
});
