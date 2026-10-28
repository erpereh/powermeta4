import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { demoReport } from "./demo";
import { reconcile } from "./engine";
import { exportDossier } from "./export";
import { snapshot } from "./snapshot";
import { DEFAULT_PARAMETERS, type Dossier } from "./types";

function dossier(): Dossier {
  const input = {
    period: "2026-10",
    current: snapshot(demoReport("2026-10"), true),
    previous: snapshot(demoReport("2026-10", true), true),
    sources: [],
    parameters: { ...DEFAULT_PARAMETERS },
  };
  return {
    ...input,
    id: "synthetic-export",
    title: "Cuadre ficticio",
    revision: 1,
    createdAt: "2026-10-28T10:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    demo: true,
    annotations: [],
    result: reconcile(input),
  };
}
async function load(input: Dossier) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(new Uint8Array(await exportDossier(input)).buffer);
  return workbook;
}
function controlSheet(workbook: ExcelJS.Workbook, id: string) {
  const sheet = workbook.worksheets.find((item) => item.name.startsWith(`${id} `));
  if (!sheet) throw new Error(`Falta hoja ${id}`);
  return sheet;
}
const headers = [
  "Matrícula",
  "Persona",
  "Concepto",
  "Actual",
  "Anterior / esperado",
  "Diferencia",
  "Motivo / pendiente",
];
const values = (row: ExcelJS.Row) =>
  Array.from({ length: row.cellCount }, (_, index) => row.getCell(index + 1).value);

describe("reconciliation workbook", () => {
  it("exports seven columns in all sixteen control sheets, retaining IRPF units in headers", async () => {
    const input = dossier(),
      original = structuredClone(input),
      workbook = await load(input);
    expect(workbook.worksheets).toHaveLength(23);
    expect(input).toEqual(original);
    for (const control of input.result.controls) {
      const sheet = controlSheet(workbook, control.id);
      const expectedHeaders = [...headers];
      if (control.id === "C02") {
        expectedHeaders[3] = "Actual (%)";
        expectedHeaders[4] = "Anterior / esperado (%)";
        expectedHeaders[5] = "Diferencia (pp)";
      }
      expect(sheet.columnCount).toBe(7);
      expect(values(sheet.getRow(1))).toEqual(expectedHeaders);
      expect(sheet.autoFilter).toBe(`A1:G${sheet.rowCount}`);
      expect(sheet.views[0]).toMatchObject({ state: "frozen", ySplit: 1 });
      expect(sheet.getCell("A1").font.bold).toBe(true);
      expect(sheet.getCell("A1").fill).toMatchObject({ fgColor: { argb: "FF1F3A5F" } });
      for (const column of sheet.columns) expect(column.width).toBeGreaterThanOrEqual(16);
      const findings = input.result.findings.filter((finding) => finding.control === control.id);
      findings.forEach((finding, index) => {
        const row = sheet.getRow(index + 2);
        expect(values(row).slice(3)).toEqual([
          finding.actual ?? "Pendiente",
          finding.expected ?? "Pendiente",
          finding.delta ?? "Pendiente",
          finding.reason,
        ]);
      });
    }
  });
  it("colors differences and pending rows from engine status, preserving both tolerances and signs", async () => {
    const input = dossier();
    const change = (row: number, header: string, value: string) => {
      input.current.rows[row][input.current.headers.indexOf(header)] = value;
    };
    change(0, "Apellidos y Nombres", "Con diferencia");
    change(0, "Total conceptos fijos", "2000.01");
    change(1, "Total conceptos fijos", "2000.011");
    change(2, "Total conceptos fijos", "1999.989");
    change(0, "Porcentaje I.R.P.F.", "15.01");
    change(1, "Porcentaje I.R.P.F.", "15.011");
    input.result = reconcile(input);
    const workbook = await load(input);
    expect(input.result.findings.find((item) => item.metric === "fixed")?.delta).toBe("0.01");
    expect(controlSheet(workbook, "C01").getCell("F3").value).toBe("0.011");
    expect(controlSheet(workbook, "C01").getCell("F4").value).toBe("-0.011");
    expect(controlSheet(workbook, "C02").getCell("D2").value).toBe("15.01");
    expect(controlSheet(workbook, "C02").getCell("F2").value).toBe("0.01");
    expect(new Set(input.result.findings.map((item) => item.status))).toEqual(
      new Set(["Coincide", "Con diferencia", "Falta fuente", "No comparable"]),
    );
    for (const control of input.result.controls) {
      const sheet = controlSheet(workbook, control.id);
      input.result.findings
        .filter((finding) => finding.control === control.id)
        .forEach((finding, index) => {
          for (let col = 1; col <= 7; col++) {
            const fill = sheet.getRow(index + 2).getCell(col).fill;
            if (finding.status === "Coincide")
              expect(fill ?? {}).not.toMatchObject({ pattern: "solid" });
            else
              expect(fill).toMatchObject({
                type: "pattern",
                pattern: "solid",
                fgColor: {
                  argb: finding.status === "Con diferencia" ? "FFFFE9D6" : "FFF1F3F5",
                },
              });
          }
        });
    }
  });
  it("exports an empty control as a gray seven-column row with its explanation", async () => {
    const input = dossier();
    input.result.findings = input.result.findings.filter((finding) => finding.control !== "C01");
    const sheet = controlSheet(await load(input), "C01");
    expect(sheet.columnCount).toBe(7);
    expect(sheet.rowCount).toBe(2);
    expect(values(sheet.getRow(2))).toEqual([
      "Sin filas comparables",
      "",
      "",
      "Pendiente",
      "Pendiente",
      "Pendiente",
      "Revisar identidad y estructura del informe",
    ]);
    expect(sheet.autoFilter).toBe("A1:G2");
    for (let col = 1; col <= 7; col++)
      expect(sheet.getRow(2).getCell(col).fill).toMatchObject({
        fgColor: { argb: "FFF1F3F5" },
      });
  });
  it("preserves summary counts, raw data, source references and review annotations", async () => {
    const input = dossier();
    input.sources.push({
      id: "source-1",
      hash: "synthetic-hash",
      category: "gimnasio",
      period: input.period,
      profile: "synthetic-v1",
      complete: false,
      diagnostics: [],
      cellCount: 2,
      facts: [{ employeeId: "009001", reference: "Hoja1!F2", values: { gym: "10" } }],
    });
    const finding = input.result.findings[0];
    input.annotations.push({
      findingId: finding.id,
      fingerprint: finding.fingerprint,
      state: "Pendiente",
      comment: "Comentario ficticio",
      actor: "TEST",
      at: input.updatedAt,
    });
    const workbook = await load(input);
    expect(values(workbook.getWorksheet("Resumen")!.getRow(2))).toEqual([
      "C01",
      input.result.controls[0].name,
      3,
      2,
      1,
      0,
    ]);
    expect(values(workbook.getWorksheet("Datos actual")!.getRow(2))).toEqual(input.current.rows[0]);
    expect(values(workbook.getWorksheet("Datos anterior")!.getRow(2))).toEqual(
      input.previous!.rows[0],
    );
    expect(workbook.getWorksheet("Fuentes")!.getCell("F2").value).toBe("synthetic-hash");
    expect(workbook.getWorksheet("Entradas externas")!.getCell("C2").value).toBe("Hoja1!F2");
    expect(values(workbook.getWorksheet("Revisión")!.getRow(2))).toEqual([
      finding.id,
      "Pendiente",
      "Comentario ficticio",
      "TEST",
      input.updatedAt,
      "Vigente",
    ]);
  });
});
