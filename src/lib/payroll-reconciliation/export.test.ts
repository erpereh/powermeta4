import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { demoReport } from "./demo";
import { reconcile } from "./engine";
import { exportDossier } from "./export";
import { METRICS } from "./catalogue";
import { snapshot } from "./snapshot";
import { DEFAULT_PARAMETERS, type Dossier, type Finding } from "./types";

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
function findingRow(sheet: ExcelJS.Worksheet, finding: Finding) {
  const concept = METRICS.find((metric) => metric.id === finding.metric)?.header;
  const row = sheet
    .getRows(2, sheet.rowCount - 1)
    ?.find(
      (item) => item.getCell(1).value === finding.employeeId && item.getCell(3).value === concept,
    );
  if (!row) throw new Error("Falta resultado exportado");
  return row;
}

describe("reconciliation workbook", () => {
  it("retains company-separated C13 amounts and pending proration in the existing seven columns", async () => {
    const input = dossier();
    const source = {
      id: "annual",
      hash: "annual",
      category: "aniversarios" as const,
      period: input.period,
      complete: true,
      profile: "aniversarios-v2",
      diagnostics: [],
      cellCount: 1,
      facts: [
        {
          employeeId: "009001",
          entity: "DEMO",
          seniorityDate: "2001-10-15",
          values: { anniversary: "anniversary25" },
          reference: "ACYC!C4",
        },
      ],
    };
    input.sources = [source];
    input.parameters.rulesConfirmed = true;
    input.parameters.anniversaryFullBase = true;
    input.current.rows[0][input.current.headers.indexOf("Paga 25 años")] = "1800";
    const other = [...input.current.rows[0]];
    other[input.current.headers.indexOf("Id Empresa")] = "OTHER";
    other[input.current.headers.indexOf("Salario Base")] = "900";
    other[input.current.headers.indexOf("Paga 25 años")] = "900";
    input.current.rows.push(other);
    input.current.seniorityDates!.push("2001-10-15");
    source.facts.push({ ...source.facts[0], entity: "OTHER", reference: "ACYC!C5" });
    input.result = reconcile(input);
    const workbook = await load(input),
      sheet = controlSheet(workbook, "C13");
    const rows = input.result.findings.filter(
      (row) => row.metric === "anniversary25" && row.employeeId === "009001",
    );
    expect(rows.map((row) => row.actual)).toEqual(["1800", "900"]);
    expect(sheet.columnCount).toBe(7);
    const reasons = JSON.stringify(sheet.getColumn(7).values);
    expect(reasons).toContain("Empresa DEMO");
    expect(reasons).toContain("Empresa OTHER");
    const extra = controlSheet(workbook, "C04");
    expect(JSON.stringify(extra.getColumn(7).values)).toContain("Modalidad pendiente");
  });
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
      findings.forEach((finding) => {
        const row = findingRow(sheet, finding);
        expect(values(row).slice(3, 6)).toEqual([
          finding.actual ?? "Pendiente",
          finding.expected ?? "Pendiente",
          finding.delta ?? "Pendiente",
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
    expect(controlSheet(workbook, "C01").getCell("F2").value).toBe("0.011");
    expect(controlSheet(workbook, "C01").getCell("F3").value).toBe("-0.011");
    expect(controlSheet(workbook, "C02").getCell("D3").value).toBe("15.01");
    expect(controlSheet(workbook, "C02").getCell("F3").value).toBe("0.01");
    expect(new Set(input.result.findings.map((item) => item.status))).toEqual(
      new Set(["Coincide", "Con diferencia", "Falta fuente", "No comparable"]),
    );
    for (const control of input.result.controls) {
      const sheet = controlSheet(workbook, control.id);
      input.result.findings
        .filter((finding) => finding.control === control.id)
        .forEach((finding) => {
          const row = findingRow(sheet, finding);
          for (let col = 1; col <= 7; col++) {
            const fill = row.getCell(col).fill;
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
      facts: [
        {
          employeeId: "009001",
          reference: "Hoja1!F2",
          values: { gym: "10" },
          recordId: "CUOTA-2026-10",
          documentReference: "Documento de alta",
        },
      ],
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
    expect(values(workbook.getWorksheet("Fuentes")!.getRow(1))).not.toContain("Hash");
    expect(workbook.getWorksheet("Entradas externas")!.getCell("B2").value).toBe("Hoja1!F2");
    expect(workbook.getWorksheet("Entradas externas")!.getCell("E2").value).toBe(
      "Cuota Gimnasio Importe",
    );
    expect(workbook.getWorksheet("Entradas externas")!.getCell("H2").value).toBe("CUOTA-2026-10");
    expect(workbook.getWorksheet("Entradas externas")!.getCell("I2").value).toBe(
      "Documento de alta",
    );
    expect(values(workbook.getWorksheet("Revisión")!.getRow(2))).toEqual([
      finding.employeeId,
      finding.name,
      finding.control,
      "Total conceptos fijos",
      "Pendiente",
      "Comentario ficticio",
      "TEST",
      "28/10/26, 11:00:00",
      "Vigente",
    ]);
    const exported = JSON.stringify(workbook.worksheets.map((sheet) => sheet.getSheetValues()));
    for (const internal of [
      input.result.fingerprint,
      input.current.hash,
      input.previous!.hash,
      finding.id,
      finding.fingerprint,
      "source-1",
      "synthetic-hash",
      "synthetic-v1",
      "engineVersion",
      "extraMetric",
      "healthCompany",
    ])
      expect(exported).not.toContain(internal);
    const parameters = workbook.getWorksheet("Expediente")!;
    const labels = parameters.getColumn(1).values;
    expect(labels.filter((label) => label === "Tolerancia EUR")).toHaveLength(1);
    expect(labels.filter((label) => label === "Tolerancia puntos porcentuales")).toHaveLength(1);
    expect(exported).toContain("Reglas y vigencia confirmadas");
    expect(exported).not.toMatch(/"(?:true|false)"/);
    expect(exported).not.toContain("extra3");
  });
  it("puts differences first, then missing/non-comparable, then matches, stably in every control", async () => {
    const input = dossier();
    input.result.findings = input.result.controls.flatMap((control) =>
      (
        [
          "Coincide",
          "No comparable",
          "Con diferencia",
          "Falta fuente",
          "Con diferencia",
          "Coincide",
        ] as const
      ).map((status, index) => ({
        ...input.result.findings[0],
        id: `${control.id}-${index}`,
        control: control.id,
        employeeId: `000${index}`,
        status,
        actual: status === "No comparable" ? null : "3.001",
        expected: status === "Falta fuente" ? null : "3",
        delta: status === "Con diferencia" ? "0.001" : null,
      })),
    );
    input.annotations = [
      {
        findingId: "C01-2",
        fingerprint: input.result.findings[2].fingerprint,
        state: "Diferencia justificada",
        comment: "Justificación ficticia",
        actor: "TEST",
        at: input.updatedAt,
      },
    ];
    const original = structuredClone(input);
    const workbook = await load(input);
    for (const control of input.result.controls) {
      const sheet = controlSheet(workbook, control.id);
      expect(sheet.getColumn(1).values.slice(2)).toEqual([
        "0002",
        "0004",
        "0003",
        "0001",
        "0000",
        "0005",
      ]);
      expect(sheet.getCell("F2").value).toBe("0.001");
      for (const row of [2, 3])
        expect(sheet.getCell(`A${row}`).fill).toMatchObject({ fgColor: { argb: "FFFFE9D6" } });
      for (const row of [4, 5])
        expect(sheet.getCell(`A${row}`).fill).toMatchObject({ fgColor: { argb: "FFF1F3F5" } });
      for (const row of [6, 7])
        expect(sheet.getCell(`A${row}`).fill ?? {}).not.toMatchObject({ pattern: "solid" });
    }
    expect(input).toEqual(original);
  });
  it("widens names and concepts, shortens automatic reasons and preserves long comments and exact decimals", async () => {
    const input = dossier();
    const row = input.result.findings.find((finding) => finding.control === "C03")!;
    row.name = "APELLIDO COMPUESTO DE LA PERSONA FICTICIA, Nombre completo";
    row.reason = "Fuera del listado cuya cobertura completa se ha confirmado.";
    row.actual = "-32.613333333333333333333334";
    const comment = "Comentario de revisión con detalle completo. ".repeat(30);
    input.annotations = [
      {
        findingId: row.id,
        fingerprint: row.fingerprint,
        state: "Pendiente",
        comment,
        actor: "TEST",
        at: input.updatedAt,
      },
    ];
    const original = structuredClone(input);
    const workbook = await load(input);
    const sheet = controlSheet(workbook, "C03");
    const exported = findingRow(sheet, row);
    expect(exported.getCell(7).value).toBe("Fuera del listado");
    expect(exported.getCell(4).value).toBe(row.actual);
    expect(sheet.getColumn(2).width).toBeGreaterThan(row.name.length);
    expect(sheet.getColumn(3).width).toBeGreaterThanOrEqual(36);
    expect(exported.height).toBe(20);
    // XLSX omits explicit false attributes; the default remains a single line.
    expect(exported.getCell(2).alignment.wrapText).not.toBe(true);
    expect(exported.getCell(3).alignment.wrapText).not.toBe(true);
    const review = workbook.getWorksheet("Revisión")!;
    expect(review.getColumn(6).width).toBe(80);
    expect(review.getCell("F2").value).toBe(comment);
    expect(review.getCell("F2").alignment.wrapText).toBe(true);
    for (const tab of workbook.worksheets)
      for (const column of tab.columns) expect(column.width).toBeLessThanOrEqual(80);
    expect(input).toEqual(original);
  });
  it("keeps both causes and user-supplied exception text, and identifies orphaned reviews without IDs", async () => {
    const input = dossier();
    const [first, second, third] = input.result.findings;
    first.reason =
      "Persona ausente de esta ejecución; no acredita alta o baja laboral. Falta fuente independiente para este control.";
    second.reason =
      "Falta ejecución anterior. Excepción declarada: Fuera del listado cuya cobertura completa se ha confirmado. · referencia DOC-2026-123.";
    third.reason = "Columna mensual PPSE; semántica/calendario pendientes de validación Q13.";
    input.annotations = [
      {
        findingId: "obsolete-internal-id",
        fingerprint: "old-fingerprint",
        state: "Pendiente",
        comment: "Revisión anterior",
        actor: "TEST",
        at: input.updatedAt,
        invalidated: true,
      },
    ];
    const workbook = await load(input);
    const sheet = controlSheet(workbook, "C01");
    expect(findingRow(sheet, first).getCell(7).value).toBe(
      "Persona ausente de la ejecución (alta/baja sin acreditar) Falta fuente independiente",
    );
    expect(findingRow(sheet, second).getCell(7).value).toBe(
      "Sin ejecución anterior Excepción declarada: Fuera del listado cuya cobertura completa se ha confirmado. · referencia DOC-2026-123.",
    );
    expect(findingRow(sheet, third).getCell(7).value).toBe(
      "PPSE mensual: criterio y calendario sin validar",
    );
    expect(workbook.getWorksheet("Revisión")!.getCell("A2").value).toBe("Hallazgo anterior");
    expect(workbook.getWorksheet("Revisión")!.getCell("I2").value).toBe("Hallazgo anterior");
    expect(JSON.stringify(workbook.worksheets.map((tab) => tab.getSheetValues()))).not.toContain(
      "obsolete-internal-id",
    );
  });
  it("uses readable source fields and diagnostics while retaining document references and all parameters", async () => {
    const input = dossier();
    input.parameters.rulesConfirmed = true;
    input.parameters.anniversaryFullBase = true;
    input.parameters.extraFullEmployeeIds = ["009001", "009002"];
    const note =
      "El colectivo no acredita tarifa/días: confirmar parámetros y excepciones del periodo. No se utiliza BP/BQ como esperado.";
    input.sources = [
      {
        id: "private-source-id",
        hash: "private-file-hash",
        profile: "teletrabajo-v1",
        category: "teletrabajo",
        period: input.period,
        complete: false,
        cellCount: 3,
        diagnostics: [note],
        facts: [
          {
            employeeId: "009001",
            reference: "80-20!A2",
            values: { member: "1" },
            documentReference: "Documento completo ".repeat(100),
          },
        ],
      },
    ];
    input.result.diagnostics = [`teletrabajo: ${note}`];
    const workbook = await load(input);
    const source = workbook.getWorksheet("Entradas externas")!;
    expect(source.getCell("A2").value).toBe("Colectivo teletrabajo");
    expect(source.getCell("E2").value).toBe("Incluido en el colectivo");
    expect(source.getCell("F2").value).toBe("Sí");
    expect(source.getCell("I2").value).toBe(input.sources[0].facts[0].documentReference);
    expect(source.getCell("I2").alignment.wrapText).toBe(true);
    expect(workbook.getWorksheet("Fuentes")!.getCell("H2").value).toBe(
      "Confirmar tarifa, días y excepciones del periodo.",
    );
    const parameters = workbook.getWorksheet("Expediente")!;
    const rows = parameters.getRows(2, parameters.rowCount - 1)!;
    expect(
      rows.find((row) => row.getCell(1).value === "Reglas y vigencia confirmadas")?.getCell(2)
        .value,
    ).toBe("Sí");
    expect(
      rows
        .find((row) => row.getCell(1).value === "Matrículas con devengo completo acreditado")
        ?.getCell(2).value,
    ).toBe("009001, 009002");
    const all = JSON.stringify(workbook.worksheets.map((tab) => tab.getSheetValues()));
    expect(all).not.toContain("BP/BQ");
    expect(all).not.toContain("private-source-id");
    expect(all).not.toContain("private-file-hash");
    expect(all).not.toContain("teletrabajo-v1");
    expect(all).toContain(
      "Colectivo teletrabajo: Confirmar tarifa, días y excepciones del periodo.",
    );
  });
});
