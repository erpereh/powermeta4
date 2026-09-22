import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { editHireWorkbook } from "./excel";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_TEMPLATE_SHEET_NAMES,
  TEMPLATE_LEGAL_ENTITY_COLUMNS,
  WRITTEN_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const templatePath = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const excelPath = "C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE";
const canEdit = existsSync(templatePath) && existsSync(excelPath);
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

type CellSnapshot = { value: unknown; formula?: string };

const rowCells = (sheet: XLSX.WorkSheet, row: number): Map<string, CellSnapshot> => {
  const cells = new Map<string, CellSnapshot>();
  for (const address of Object.keys(sheet)) {
    if (address.startsWith("!")) continue;
    const decoded = XLSX.utils.decode_cell(address);
    if (decoded.r !== row - 1) continue;
    const cell = sheet[address];
    cells.set(XLSX.utils.encode_col(decoded.c), {
      value: cell?.v,
      formula: typeof cell?.f === "string" ? cell.f : undefined,
    });
  }
  return cells;
};

const shiftFormula = (formula: string, fromRow: number, toRow: number): string =>
  formula.replace(/(\$?)([A-Z]{1,3})(\$?)(\d+)/g, (match, colAbs, col, rowAbs, row) => {
    if (rowAbs === "$") return match;
    return `${colAbs}${col}${rowAbs}${Number(row) + (toRow - fromRow)}`;
  });

const definedNames = (workbook: XLSX.WorkBook): string[] =>
  (workbook.Workbook?.Names ?? [])
    .map((entry) => entry.Name)
    .filter((name): name is string => typeof name === "string")
    .sort();

const readWorkbook = (bytes: Buffer): XLSX.WorkBook =>
  XLSX.read(bytes, { type: "buffer", raw: true, cellFormula: true });

describe.skipIf(!canEdit)("Excel preserves Hire_1_PERSONA", () => {
  it(
    "changes only manual cells for one person and keeps workbook structure",
    async () => {
      const templateBytes = readFileSync(templatePath);
      const templateSize = statSync(templatePath).size;
      const hireDate = "2026-10-02";
      const bytes = await editHireWorkbook(templatePath, [person("A", hireDate)]);
      expect(statSync(templatePath).size).toBe(templateSize);
      expect(bytes.subarray(0, 8).equals(OLE_MAGIC)).toBe(true);
      expect(bytes.length).toBeGreaterThan(templateBytes.length * 0.8);

      const templateBook = readWorkbook(templateBytes);
      const generatedBook = readWorkbook(bytes);
      expect(generatedBook.SheetNames).toEqual([...HIRE_TEMPLATE_SHEET_NAMES]);
      expect(generatedBook.SheetNames).toEqual(templateBook.SheetNames);
      expect(definedNames(generatedBook)).toEqual(definedNames(templateBook));

      const templateSheet = templateBook.Sheets[HIRE_DATA_SHEET];
      const sheet = generatedBook.Sheets[HIRE_DATA_SHEET];
      const original = rowCells(templateSheet, FIRST_PERSON_ROW);
      const generated = rowCells(sheet, FIRST_PERSON_ROW);

      expect(generated.get("R")?.value).toBe("NombreA");
      expect(generated.get("O")?.value).toBe("ApellidoA");
      expect(generated.get("P")?.value).toBe("ApellidoA");
      expect(generated.get("Q")?.value).toBe("SegundoA");
      expect(generated.get("V")?.value).toBe("DNI");
      expect(generated.get("W")?.value).toBe("DNI");
      expect(generated.get("X")?.value).toBe("DOCA");
      expect(generated.get("Y")?.value).toBe("DOCA");
      expect(generated.get("AY")?.value).toBe("usera@example.test");
      expect(generated.get("IQ")?.value).toBe("usera@example.test");
      expect(generated.get("D")?.value).toBe(toExcelSerialDate(hireDate));
      expect(generated.get("E")?.value).toBe(toExcelSerialDate(hireDate));
      expect(generated.get(TEMPLATE_LEGAL_ENTITY_COLUMNS[0])?.value).toBe(
        original.get(TEMPLATE_LEGAL_ENTITY_COLUMNS[0])?.value,
      );
      expect(generated.get(TEMPLATE_LEGAL_ENTITY_COLUMNS[1])?.value).toBe(
        original.get(TEMPLATE_LEGAL_ENTITY_COLUMNS[1])?.value,
      );

      for (const [column, cell] of original) {
        if (writtenColumns.has(column)) continue;
        const next = generated.get(column);
        expect(next?.formula).toBe(cell.formula);
        if (!cell.formula) expect(next?.value).toEqual(cell.value);
      }

      const manualValues = [...generated.entries()]
        .filter(([column]) => writtenColumns.has(column))
        .map(([, cell]) => String(cell.value ?? ""));
      const joined = manualValues.join("\n");
      expect(joined).not.toContain("POWER6");
      expect(joined).not.toContain("12345678Z");
      expect(joined).not.toContain("p6@prueba.es");
      expect(joined).not.toContain("atradius.com");
    },
    180_000,
  );

  it(
    "copies the template row for three people and overlays only manual fields",
    async () => {
      const templateBytes = readFileSync(templatePath);
      const people = [person("A", "2026-10-02"), person("B", "2026-10-03"), person("C", "2026-10-04")];
      const bytes = await editHireWorkbook(templatePath, people);
      expect(bytes.length).toBeGreaterThan(templateBytes.length * 0.8);
      expect(bytes.subarray(0, 8).equals(OLE_MAGIC)).toBe(true);

      const templateSheet = readWorkbook(templateBytes).Sheets[HIRE_DATA_SHEET];
      const sheet = readWorkbook(bytes).Sheets[HIRE_DATA_SHEET];
      const original = rowCells(templateSheet, FIRST_PERSON_ROW);
      const rows = [6, 7, 8].map((row) => rowCells(sheet, row));

      expect(rows[0]?.get("R")?.value).toBe("NombreA");
      expect(rows[1]?.get("R")?.value).toBe("NombreB");
      expect(rows[2]?.get("R")?.value).toBe("NombreC");
      expect(rows[1]?.get("Q")?.value).toBeUndefined();
      expect(rows[1]?.get("AY")?.value).toBe("userb@example.test");
      expect(rows[1]?.get("IQ")?.value).toBe("userb@example.test");
      expect(rows[0]?.get("CH")?.value).toBe(original.get("CH")?.value);
      expect(rows[2]?.get("CI")?.value).toBe(original.get("CI")?.value);

      rows.forEach((values, index) => {
        const row = FIRST_PERSON_ROW + index;
        for (const [column, cell] of original) {
          if (writtenColumns.has(column)) continue;
          const next = values.get(column);
          if (cell.formula) {
            expect(next?.formula).toBe(shiftFormula(cell.formula, FIRST_PERSON_ROW, row));
          } else {
            expect(next?.value).toEqual(cell.value);
          }
        }
      });

      expect(rows[0]?.get("X")?.value).not.toEqual(rows[1]?.get("X")?.value);
      expect(rows[1]?.get("AY")?.value).not.toEqual(rows[2]?.get("AY")?.value);
    },
    180_000,
  );
});
