import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";
import { importAutoSource } from "./import";

function book(sheets: Record<string, unknown[][]>) {
  const workbook = XLSX.utils.book_new();
  for (const [name, rows] of Object.entries(sheets))
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet(rows), name);
  return new Uint8Array(XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }));
}
const gym = (header = "Pago de octubre") =>
  book({
    Hoja1: [
      ["Id Empleado", "", "", "", "", header],
      ["009001", "", "", "", "", 15],
    ],
  });
const excess = (period = "2026-10") =>
  book({
    Datos: [
      [
        "registro_id",
        "matricula",
        "periodo_origen",
        "periodo_compensacion",
        "importe_firmado",
        "moneda",
        "motivo",
        "referencia_documental",
      ],
      ["E1", "009001", "2026-09", period, -12.5, "EUR", "Motivo declarado", "DOC-1"],
    ],
  });

describe("automatic source recognition and periods", () => {
  it("recognizes structure after renaming, stores the filename and leaves absent people uncovered", async () => {
    const source = await importAutoSource(gym(), "archivo-renombrado.xlsx", "2026-10");
    expect(source).toMatchObject({
      category: "gimnasio",
      filename: "archivo-renombrado.xlsx",
      complete: false,
      period: "2026-10",
    });
    expect(source.facts[0]).toMatchObject({
      employeeId: "009001",
      values: { gym: "15" },
      reference: "Hoja1!A2",
    });
    expect(source.accrualPeriod).toBeUndefined();
  });
  it("rejects unknown and ambiguous structures rather than guessing from their names", async () => {
    await expect(
      importAutoSource(
        book({ Hoja1: [["Cualquier cabecera"], [1]] }),
        "Altas Gimnasio 2026.xlsx",
        "2026-10",
      ),
    ).rejects.toThrow("No se reconoce la categoría");
    const ambiguous = book({
      Hoja1: [
        ["Id Empleado", "", "", "", "", "Pago de octubre"],
        ["009001", "", "", "", "", 15],
      ],
      Descuentos: [
        ["Id emp", "", "", "Nº Ausencias"],
        ["009001", "", "", 1],
      ],
    });
    await expect(importAutoSource(ambiguous, "mezcla.xlsx", "2026-10")).rejects.toThrow(
      "varias categorías",
    );
  });
  it("selects gym months by header, not a fixed column, and reports available months", async () => {
    const bytes = book({
      Hoja1: [
        ["Id Empleado", "", "", "", "", "Pago de octubre", "Pago de noviembre"],
        ["009001", "", "", "", "", 15, 20],
      ],
    });
    expect((await importAutoSource(bytes, "gimnasio.xlsx", "2026-11")).facts[0].values.gym).toBe(
      "20",
    );
    await expect(importAutoSource(bytes, "gimnasio.xlsx", "2026-07")).rejects.toMatchObject({
      category: "gimnasio",
      status: 422,
      message: expect.stringMatching(/julio.*octubre, noviembre/),
    });
    await expect(
      importAutoSource(gym("Pago de octubre 2025"), "gimnasio.xlsx", "2026-10"),
    ).rejects.toThrow("octubre de 2025");
  });
  it("reads apartment month headers dynamically without using booking dates or total costs", async () => {
    const bytes = book({
      "Bonos disfrute": [
        ["Título"],
        ["Matrícula", "", "Coste total", "Julio", "Octubre"],
        ["009001", "", 9999, 10, 20],
      ],
    });
    expect(
      (await importAutoSource(bytes, "Cobro junio-julio.xlsx", "2026-10")).facts[0].values
        .apartments,
    ).toBe("20");
    expect(
      (await importAutoSource(bytes, "copia.xlsx", "2026-07")).facts[0].values.apartments,
    ).toBe("10");
    await expect(importAutoSource(bytes, "copia.xlsx", "2026-09")).rejects.toMatchObject({
      category: "apartamentos",
      message: expect.stringMatching(/septiembre.*julio, octubre/),
    });
  });
  it.each([
    ["Septiembre 2026", "2026-10", "2026-09"],
    ["Diciembre 2025", "2026-01", "2025-12"],
  ])("distinguishes meal accrual %s from payroll %s", async (declared, payroll, accrual) => {
    const bytes = book({
      Descuentos: [
        ["Id emp", "", "", "Nº Ausencias"],
        ["009001", "", "", 1],
      ],
      Hoja2: [["Periodo"], [declared]],
    });
    const source = await importAutoSource(bytes, "comida.xlsx", payroll);
    expect(source.accrualPeriod).toBe(accrual);
    await expect(importAutoSource(bytes, "comida.xlsx", "2026-07")).rejects.toThrow(
      "no corresponde",
    );
  });
  it("validates declared card accrual and rejects conflicting month headers", async () => {
    const bytes = (discharge: string) =>
      book({
        Hoja1: [
          ["MATRICULA", "", "IMPORTE_CARGA", "CARGADO EN EUREST SEPTIEMBRE 2026", "", discharge],
          ["009001", "", 100, 20, "", 5],
        ],
      });
    expect(
      (await importAutoSource(bytes("DESCARGA SEPTIEMBRE 2026"), "tarjeta.xlsx", "2026-10"))
        .accrualPeriod,
    ).toBe("2026-09");
    await expect(
      importAutoSource(bytes("DESCARGA OCTUBRE 2026"), "tarjeta.xlsx", "2026-10"),
    ).rejects.toThrow("meses distintos");
  });
  it("recognizes signed templates and rejects a different declared payroll period", async () => {
    const source = await importAutoSource(excess(), "renombrado.xlsx", "2026-10");
    expect(source.category).toBe("excesos");
    expect(source.facts[0]).toMatchObject({
      values: { excess: "-12.5" },
      reason: "Motivo declarado",
      documentReference: "DOC-1",
    });
    await expect(importAutoSource(excess(), "renombrado.xlsx", "2026-11")).rejects.toThrow(
      "Periodos disponibles: 2026-10",
    );
  });
  it("rejects corrupt XLSX before detection", async () => {
    await expect(
      importAutoSource(new Uint8Array([1, 2, 3]), "archivo.xlsx", "2026-10"),
    ).rejects.toThrow("contenido");
  });
});
