import { describe, expect, it } from "vitest";

import { FIXTURE_HEADERS, FIXTURE_ROWS } from "./payroll-report.fixture";
import { buildPayrollSummary } from "./summary";

describe("buildPayrollSummary", () => {
  const summary = buildPayrollSummary({ headers: FIXTURE_HEADERS, rawRows: FIXTURE_ROWS });

  it("names the fields as the payroll template does", () => {
    expect(summary?.fields.map((field) => field.header)).toEqual([
      "Id Centro Trabajo",
      "Id Empleado",
      "Apellidos y Nombres",
      "Nº Empl.",
      " Porcentaje Jornada",
      "Cuenta de Id Centro Trabajo",
      "Cuenta de Fecha de pago",
      "Cuenta de Fin Previsto Contrato",
      " Salario Base",
      "Suma de Líquido",
      "Suma de Porcentaje I.R.P.F.",
    ]);
  });

  it("groups by center and employee in data order with subtotals and grand total", () => {
    expect(summary?.rows.map((row) => [row.kind, ...row.labels])).toEqual([
      ["employee", "'C1", "9001", "PRUEBA UNO, Ana"],
      ["employee", null, "9002", "PRUEBA DOS, Luis"],
      ["subtotal", "Total 'C1", null, null],
      ["employee", "'C0", "9003", "PRUEBA TRES, Eva"],
      ["subtotal", "Total 'C0", null, null],
      ["total", "Total general", null, null],
    ]);
  });

  it("counts rows and non empty cells, sums numbers and uses the first repeated column", () => {
    const luis = summary?.rows[1]?.values;
    // Nº Empl., jornada, cuenta centro, cuenta fecha, cuenta fin (vacía), salario, líquido, IRPF.
    expect(luis).toEqual([2, 1.5, 2, 2, null, 1500.5, 1250.25, 24]);
    expect(summary?.rows.at(-1)?.values.slice(0, 1)).toEqual([4]);
  });

  it("is not built for templates without the payroll row fields", () => {
    expect(buildPayrollSummary({ headers: ["Empleado", "Importe"], rawRows: [] })).toBeNull();
  });
});
