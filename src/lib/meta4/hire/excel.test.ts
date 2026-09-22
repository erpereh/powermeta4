import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import * as XLSX from "xlsx";
import { beforeAll, describe, expect, it } from "vitest";

import { generateHireWorkbook } from "./excel";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_PERSON_SHEET,
  HIRE_TEMPLATE_SHEET_NAMES,
  MANUAL_COLUMNS,
  TEMPLATE_LEGAL_ENTITY_COLUMNS,
  WRITTEN_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const templatePath = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const templatePresent = existsSync(templatePath);
const writtenColumns = new Set(WRITTEN_COLUMNS);

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

const rowValues = (sheet: XLSX.WorkSheet, row: number): Map<string, unknown> => {
  const values = new Map<string, unknown>();
  for (const address of Object.keys(sheet)) {
    if (address.startsWith("!")) continue;
    const decoded = XLSX.utils.decode_cell(address);
    if (decoded.r !== row - 1) continue;
    values.set(XLSX.utils.encode_col(decoded.c), sheet[address]?.v);
  }
  return values;
};

describe.skipIf(!templatePresent)("generateHireWorkbook from Hire_1_PERSONA", () => {
  let templateBytes: Buffer;
  let templateSheet: XLSX.WorkSheet;

  beforeAll(() => {
    templateBytes = readFileSync(templatePath);
    templateSheet = XLSX.read(templateBytes, { type: "buffer", raw: true, cellFormula: true })
      .Sheets[HIRE_DATA_SHEET];
  });

  it(
    "overlays one person, keeps template cells and OLE2 magic, and replaces duplicate identity columns",
    () => {
      const hireDate = "2026-10-02";
      const overlay = person("A", hireDate);
      const bytes = generateHireWorkbook(templateBytes, [overlay]);
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
      expect(cellValue(sheet, MANUAL_COLUMNS.email[1], row)).toBe("usera@example.test");
      expect(cellValue(sheet, MANUAL_COLUMNS.hireDate[0], row)).toBe(toExcelSerialDate(hireDate));

      expect(cellValue(sheet, TEMPLATE_LEGAL_ENTITY_COLUMNS[0], row)).toBe(
        cellValue(templateSheet, TEMPLATE_LEGAL_ENTITY_COLUMNS[0], row),
      );
      expect(cellValue(sheet, TEMPLATE_LEGAL_ENTITY_COLUMNS[1], row)).toBe(
        cellValue(templateSheet, TEMPLATE_LEGAL_ENTITY_COLUMNS[1], row),
      );

      const generated = rowValues(sheet, row);
      const original = rowValues(templateSheet, row);
      for (const [column, value] of original) {
        if (writtenColumns.has(column)) continue;
        expect(generated.get(column)).toEqual(value);
      }

      const serialized = JSON.stringify([...generated.values()]);
      expect(serialized).not.toContain("POWER6");
      expect(serialized).not.toContain("12345678Z");
      expect(serialized).not.toContain("p6@prueba.es");
      expect(serialized).not.toContain(
        "power6.test.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@atradius.com",
      );

      const altaPersona = workbook.Sheets[HIRE_PERSON_SHEET];
      expect(cellValue(altaPersona, "O", row)).toEqual(
        XLSX.read(templateBytes, { type: "buffer", raw: true }).Sheets[HIRE_PERSON_SHEET]["O6"]?.v,
      );
    },
    120_000,
  );

  it(
    "copies the template row for additional people and only overlays manual fields",
    () => {
      const people = [
        person("A", "2026-10-02"),
        person("B", "2026-10-03"),
        person("C", "2026-10-04"),
      ];
      const bytes = generateHireWorkbook(templateBytes, people);
      const sheet = XLSX.read(bytes, { type: "buffer", raw: true }).Sheets[HIRE_DATA_SHEET];
      const original = rowValues(templateSheet, FIRST_PERSON_ROW);
      const rows = [6, 7, 8].map((row) => rowValues(sheet, row));

      expect(cellValue(sheet, "R", 6)).toBe("NombreA");
      expect(cellValue(sheet, "R", 7)).toBe("NombreB");
      expect(cellValue(sheet, "R", 8)).toBe("NombreC");
      expect(cellValue(sheet, "Q", 7)).toBeUndefined();
      expect(cellValue(sheet, "AY", 7)).toBe("userb@example.test");
      expect(cellValue(sheet, "IQ", 7)).toBe("userb@example.test");

      for (const values of rows) {
        expect(values.get("CH")).toBe(original.get("CH"));
        expect(values.get("CI")).toBe(original.get("CI"));
        for (const [column, value] of original) {
          if (writtenColumns.has(column)) continue;
          expect(values.get(column)).toEqual(value);
        }
      }

      const manuals = ["R", "O", "P", "X", "Y", "AY", "IQ", "D", "E"] as const;
      for (const column of manuals) {
        expect(rows[0]?.get(column)).not.toEqual(rows[1]?.get(column));
        expect(rows[1]?.get(column)).not.toEqual(rows[2]?.get(column));
      }
    },
    120_000,
  );
});
