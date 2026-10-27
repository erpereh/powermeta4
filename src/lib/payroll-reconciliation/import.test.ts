import { describe, expect, it } from "vitest";
import * as XLSX from "xlsx";
import { importSource, LIMITS } from "./import";

const book = (name: string, rows: unknown[][]) => {
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet(rows), name);
  return new Uint8Array(XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }));
};
describe("source contracts", () => {
  it("preserves signed excesses and the evidence of confirmed exceptions", async () => {
    const excess = book("Excesos", [
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
      ["E1", "009001", "2026-09", "2026-10", -12.5, "EUR", "Recálculo sintético", "REF-TEST"],
    ]);
    const source = await importSource(excess, "source.xlsx", "excesos", "2026-10", true);
    expect(source.facts[0]).toMatchObject({
      values: { excess: "-12.5" },
      reason: "Recálculo sintético",
      documentReference: "REF-TEST",
    });
    const rows = [
      [
        "registro_id",
        "control",
        "metrica",
        "matricula",
        "periodo_devengo",
        "vigencia_desde",
        "vigencia_hasta",
        "importe_esperado_firmado",
        "motivo",
        "referencia_documental",
        "confirmada",
      ],
      [
        "X1",
        "C05",
        "telework",
        "009001",
        "2026-10",
        "2026-10-01",
        "2026-10-31",
        30,
        "Acuerdo sintético",
        "REF-EX",
        "SI",
      ],
    ];
    expect(
      (
        await importSource(
          book("Excepciones", rows),
          "source.xlsx",
          "excepciones",
          "2026-10",
          false,
        )
      ).facts[0].values.telework,
    ).toBe("30");
    rows[1][2] = "fixed";
    await expect(
      importSource(book("Excepciones", rows), "source.xlsx", "excepciones", "2026-10", false),
    ).rejects.toThrow("no acreditados");
  });
  it("reads gym amounts without deriving price from membership", async () => {
    const bytes = book("Hoja1", [
      ["Id Empleado", "", "", "Inscripción", "Clases", "Pago de octubre"],
      ["009001", "", "", "SI", "SI", 15],
      ["009002", "", "", "SI", "SI", null],
    ]);
    const source = await importSource(bytes, "source.xlsx", "gimnasio", "2026-10", false);
    expect(source.facts).toHaveLength(2);
    expect(source.facts[1].values.gym).toBeNull();
    await expect(importSource(bytes, "source.xlsx", "gimnasio", "2026-11", false)).rejects.toThrow(
      "noviembre",
    );
  });
  it("recomputes card net from primitive inputs, retaining optional blanks", async () => {
    const bytes = book("Hoja1", [
      [
        "MATRICULA",
        "",
        "IMPORTE_CARGA",
        "CARGADO EN EUREST SEPTIEMBRE",
        "TOTAL",
        "DESCARGA SEPTIEMBRE",
      ],
      ["009001", "", 100, 20, 999, 5],
      ["009002", "", null, null, 999, null],
    ]);
    const source = await importSource(bytes, "source.xlsx", "recarga", "2026-10", true);
    expect(source.facts[0].values.net).toBe("115");
    expect(source.facts[1].issue).toContain("vacías");
  });
  it("does not truncate PPSE after totals or use personal contribution instead of month", async () => {
    const rows = [
      ["EMPRESA", "MATRICULA", ...Array(10).fill(""), "Aportacion Personal", "octubre"],
      ["DEMO", "009001", ...Array(10).fill(""), 40, 30],
      ["TOTAL"],
      [],
      ["DEMO", "009002", ...Array(10).fill(""), 80, 60],
    ];
    const source = await importSource(
      book("Fichero PPSE", rows),
      "source.xlsx",
      "ppse",
      "2026-10",
      false,
    );
    expect(source.facts.map((row) => row.values.ppse)).toEqual(["30", "60"]);
  });
  it("rejects wrong formats and oversized originals before parsing", async () => {
    await expect(
      importSource(new Uint8Array([1]), "fake.xlsx", "gimnasio", "2026-10", true),
    ).rejects.toThrow("contenido");
    await expect(
      importSource(new Uint8Array(LIMITS.fileBytes + 1), "large.xlsx", "gimnasio", "2026-10", true),
    ).rejects.toMatchObject({ status: 413 });
  });
  it("requires separate, signed, uniquely identified advance installments", async () => {
    const rows = [
      [
        "solicitud_id",
        "cuota_id",
        "matricula",
        "tipo",
        "periodo_cuota",
        "importe_nomina_firmado",
        "moneda",
        "estado",
        "referencia_documental",
      ],
      ["R1", "1", "009001", "prorrateado", "2026-10", -30, "EUR", "vigente", "ref"],
      ["R1", "2", "009001", "a_descontar", "2026-10", -10, "EUR", "vigente", "ref"],
    ];
    const source = await importSource(
      book("Cuotas", rows),
      "source.xlsx",
      "anticipos",
      "2026-10",
      true,
    );
    expect(source.facts.map((row) => row.values)).toEqual([
      { advanceProrated: "-30" },
      { advanceDeduct: "-10" },
    ]);
    rows.push(rows[1]);
    await expect(
      importSource(book("Cuotas", rows), "source.xlsx", "anticipos", "2026-10", true),
    ).rejects.toThrow("duplicado");
  });
});
