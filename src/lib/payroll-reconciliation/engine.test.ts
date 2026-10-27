import { describe, expect, it } from "vitest";
import { demoReport } from "./demo";
import { snapshot } from "./snapshot";
import { DEFAULT_PARAMETERS, type Source, type SourceFact } from "./types";
import { reconcile, resolveIdentity, retainAnnotations } from "./engine";
import { decimal, divide, textDecimal } from "./decimal";
import { METRICS } from "./catalogue";

const fact = (values: SourceFact["values"], employeeId = "009001"): SourceFact => ({
  employeeId,
  values,
  reference: "Entrada!A2",
});
const source = (category: Source["category"], facts: SourceFact[]): Source => ({
  id: category,
  hash: category,
  category,
  facts,
  period: "2026-10",
  complete: false,
  profile: "synthetic-v1",
  diagnostics: [],
  cellCount: 10,
});
const inputs = () => ({
  period: "2026-10",
  current: snapshot(demoReport("2026-10"), true),
  previous: snapshot(demoReport("2026-10", true), true),
  parameters: { ...DEFAULT_PARAMETERS },
  sources: [] as Source[],
});
const set = (
  input: ReturnType<typeof inputs>,
  header: string,
  amount: string,
  id = "009001",
  occurrence = 1,
) => {
  let seen = 0;
  const index = input.current.headers.findIndex(
    (value) => value === header && ++seen === occurrence,
  );
  input.current.rows.find((row) => row[0] === id)![index] = amount;
};
const finding = (input: ReturnType<typeof inputs>, metric: string, id = "009001") =>
  reconcile(input).findings.find((item) => item.employeeId === id && item.metric === metric)!;

describe("deterministic reconciliation", () => {
  it("covers sixteen controls and monthly differences without an external file", () => {
    const input = inputs(),
      result = reconcile(input);
    expect(result.controls).toHaveLength(16);
    expect(
      result.findings.find((item) => item.metric === "fixed" && item.employeeId === "009002"),
    ).toMatchObject({ delta: "50", status: "Con diferencia" });
    expect(finding(input, "irpf")).toMatchObject({ delta: "0", unit: "pp" });
    expect(finding(input, "shifts").status).toBe("Coincide");
    expect(result.findings.filter((item) => item.control === "C15")).toHaveLength(33);
    expect(finding(input, "advanceDeduct").status).toBe("Falta fuente");
    expect(reconcile(input).fingerprint).toBe(result.fingerprint);
  });
  it("uses independent signed expectations for all external controls", () => {
    const input = inputs();
    for (const metric of METRICS.filter(
      (item) => item.category && !["C10", "C13"].includes(item.control),
    )) {
      input.sources.push(source(metric.category!, [fact({ [metric.id]: "-12.5" })]));
      set(input, metric.header, "-12.5", "009001", metric.occurrence);
    }
    input.sources.push(
      source("recarga", [fact({ net: "121" })]),
      source("aniversarios", [fact({ anniversary: "anniversary25" })]),
    );
    input.parameters = {
      ...input.parameters,
      rulesConfirmed: true,
      extraFullEmployeeIds: ["009001"],
      anniversaryFullBase: true,
      cardRate: "12.1",
      cardBase: "11",
    };
    set(input, "Paga Extra 3ª", "2000");
    set(input, "Paga 25 años", "1800");
    set(input, "Importe Tarjeta Exento", "110");
    set(input, "Importe Tarjeta No Exento", "11");
    for (const metric of METRICS.filter((item) => item.category && !["C13"].includes(item.control)))
      expect(finding(input, metric.id).status, metric.id).toBe("Coincide");
    expect(finding(input, "extra3").delta).toBe("0");
    expect(finding(input, "anniversary25").delta).toBe("0");
  });
  it("keeps partial absence, invalid identities, duplicates, and zero distinct", () => {
    const input = inputs();
    input.sources = [source("gimnasio", [fact({ gym: "0" }), fact({ gym: "5" }, "999999")])];
    expect(finding(input, "gym").status).toBe("Coincide");
    expect(finding(input, "gym", "009002").status).toBe("No comparable");
    expect(
      reconcile(input).findings.some(
        (item) => item.employeeId === "Sin vincular" && item.status === "No comparable",
      ),
    ).toBe(true);
    input.sources[0].facts.push(fact({ gym: "0" }));
    expect(finding(input, "gym").reason).toContain("Duplicado");
    set(input, "Cuota Gimnasio Importe", "");
    expect(finding(input, "gym").actual).toBeNull();
  });
  it("sums legitimate apartment stays and commissions but not percentages", () => {
    const input = inputs();
    input.sources = [
      source("apartamentos", [
        fact({ apartments: "10.005" }),
        { ...fact({ apartments: "2.005" }), reference: "Entrada!A3" },
      ]),
    ];
    set(input, "Apartamentos grupo empresa", "12.01");
    expect(finding(input, "apartments").delta).toBe("0");
    input.current.rows.push([...input.current.rows[0]]);
    expect(finding(input, "irpf").actual).toBe("15");
    input.current.rows.at(-1)![input.current.headers.indexOf("Porcentaje I.R.P.F.")] = "16";
    expect(finding(input, "irpf").status).toBe("No comparable");
  });
  it("preserves decimal precision, signs and inclusive tolerances", () => {
    expect(textDecimal(decimal("0.1")! + decimal("0.2")!)).toBe("0.3");
    expect(textDecimal(decimal("1.2300000000000001")!)).toBe("1.2300000000000001");
    expect(textDecimal(decimal("2e-14")!)).toBe("0.00000000000002");
    expect(decimal("garbage")).toBeNull();
    expect(() => divide(decimal("1")!, BigInt(0))).toThrow();
    const input = inputs();
    set(input, "Total conceptos fijos", "2000.01");
    expect(finding(input, "fixed")).toMatchObject({ delta: "0.01", status: "Coincide" });
    set(input, "Total conceptos fijos", "1999.989");
    expect(finding(input, "fixed")).toMatchObject({ delta: "-0.011", status: "Con diferencia" });
  });
  it("requires confirmed period parameters and rejects overlapping card sources", () => {
    const input = inputs();
    input.sources = [
      source("teletrabajo", [fact({ member: "1" })]),
      source("comida", [fact({ absences: "2" })]),
      source("recarga", [fact({ net: "121" })]),
    ];
    expect(finding(input, "telework").status).toBe("No comparable");
    input.parameters = {
      ...input.parameters,
      rulesConfirmed: true,
      teleworkRate: "2",
      teleworkDays: "10",
      mealRate: "12",
      mealDays: "9",
      cardRate: "12.1",
      cardBase: "11",
    };
    expect(finding(input, "telework").expected).toBe("20");
    expect(finding(input, "meal").expected).toBe("84");
    expect(finding(input, "cardExempt").expected).toBe("110");
    input.sources.push(source("eurest", [fact({ net: "10" })]));
    expect(finding(input, "cardExempt").reason).toContain("solape");
  });
  it("uses union of payroll populations and unique aliases; never joins names", () => {
    expect(resolveIdentity("9001", new Set(["009001"]))).toBe("009001");
    expect(resolveIdentity("9001", new Set(["009001", "09001"]))).toBeNull();
    expect(resolveIdentity("Persona ficticia", new Set(["009001"]))).toBeNull();
    const input = inputs();
    input.previous!.rows.push(["009004", ...input.previous!.rows[0].slice(1)]);
    expect(finding(input, "fixed", "009004")).toMatchObject({
      actual: null,
      expected: "2000",
      status: "No comparable",
    });
  });
  it("retains reviews only when their evidence still matches", () => {
    const input = inputs(),
      row = finding(input, "fixed");
    const annotations = [
      {
        findingId: row.id,
        fingerprint: row.fingerprint,
        state: "Diferencia justificada" as const,
        comment: "Cambio confirmado",
        actor: "TEST",
        at: "2026-10-01",
      },
    ];
    expect(retainAnnotations(annotations, reconcile(input))[0].invalidated).toBe(false);
    set(input, "Total conceptos fijos", "2010");
    expect(retainAnnotations(annotations, reconcile(input))[0].invalidated).toBe(true);
    expect(finding(input, "fixed").status).toBe("Con diferencia");
  });
  it("minimizes payroll data and does not interpret a different month as previous", () => {
    const detail = demoReport("2026-01");
    detail.headers.push("NIF", "Cuenta bancaria");
    detail.rows[0].push("private", "private");
    const data = snapshot(detail, true);
    expect(data.headers).not.toContain("NIF");
    expect(data.rows.flat()).not.toContain("private");
    expect(demoReport("2026-01", true).run.accruedOn).toBe("2025-12-25");
  });
});
