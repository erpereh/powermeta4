import { describe, expect, it } from "vitest";
import { demoReport } from "./demo";
import { snapshot } from "./snapshot";
import { reconcile, retainAnnotations } from "./engine";
import { hash } from "./hash";
import { monthlyRunIssue, previousPeriod } from "./comparison";
import { anniversaryMetric, seniorityDate } from "./dates";
import { DEFAULT_PARAMETERS, type ExtraPayEvidence, type Source } from "./types";

const inputs = () => ({
  period: "2026-10",
  current: snapshot(demoReport("2026-10"), true),
  previous: snapshot(demoReport("2026-10", true), true),
  sources: [] as Source[],
  parameters: { ...DEFAULT_PARAMETERS, rulesConfirmed: true, anniversaryFullBase: true },
});
const set = (input: ReturnType<typeof inputs>, header: string, value: string, row = 0) => {
  input.current.rows[row][input.current.headers.indexOf(header)] = value;
};
const finding = (input: ReturnType<typeof inputs>, metric: string) =>
  reconcile(input).findings.find((item) => item.metric === metric && item.employeeId === "009001")!;
const beneficiaries = (): Source => ({
  id: "annual",
  hash: "annual-hash",
  category: "aniversarios",
  period: "2026-10",
  complete: true,
  profile: "aniversarios-v2",
  diagnostics: [],
  cellCount: 10,
  facts: [
    {
      employeeId: "009001",
      entity: "DEMO",
      seniorityDate: "2001-10-15",
      values: { anniversary: "anniversary25" },
      reference: "ACYC!C4",
    },
  ],
});
const evidence = (): ExtraPayEvidence => ({
  society: "CYC",
  entity: "DEMO",
  employeeId: "009001",
  period: "2026-10",
  validFrom: "2026-01-01",
  validTo: "2026-12-31",
  rule: "12-payments-three-prorated-extras",
  reference: "SYNTHETIC-VERIFIED-CONTRACT",
});

describe("immediate previous payroll month", () => {
  it("handles January and differences in descriptive names or type formatting", () => {
    expect(previousPeriod("2027-01")).toBe("2026-12");
    const input = inputs();
    input.previous.run.reportName = "Descripción distinta";
    input.previous.run.payKind = "  NÓRMAL  ";
    expect(monthlyRunIssue(input.period, input.current.run, input.previous.run)).toBeNull();
    set(input, "Total conceptos fijos", "2050");
    expect(finding(input, "fixed")).toMatchObject({ delta: "50", status: "Con diferencia" });
  });
  it.each(["2026-08-25", "2026-10-25", "2025-09-25"])(
    "rejects %s for October without blocking other controls",
    (accruedOn) => {
      const input = inputs();
      input.previous.run.accruedOn = accruedOn;
      const result = reconcile(input);
      for (const row of result.findings.filter((item) =>
        ["C01", "C02", "C08", "C15"].includes(item.control),
      ))
        expect(row).toMatchObject({ delta: null, expected: null, status: "No comparable" });
      expect(finding(input, "advanceDeduct").status).toBe("Falta fuente");
    },
  );
  it.each(["report", "frequency", "kind", "unknown", "empty", "population", "currentPeriod"])(
    "keeps %s pending",
    (caseName) => {
      const input = inputs();
      if (caseName === "report") input.previous.run.reportId = "OTHER";
      if (caseName === "frequency") input.previous.run.payFrequency = "002";
      if (caseName === "kind") input.previous.run.payKind = "Retroactivas";
      if (caseName === "unknown") input.previous.run.payKind = null;
      if (caseName === "empty") input.previous.run.hasData = false;
      if (caseName === "population") input.previous.populationConfirmed = false;
      if (caseName === "currentPeriod") input.period = "2026-11";
      expect(finding(input, "fixed")).toMatchObject({ status: "No comparable", delta: null });
    },
  );
  it("keeps shifts and holidays independent, percentages unique and people missing rather than zero", () => {
    const input = inputs();
    set(input, "Complemento Trabajo a Turnos", "5");
    set(input, "importe compl trabajo fest", "-10");
    set(input, "Porcentaje I.R.P.F.", "15.5");
    expect(finding(input, "shifts").delta).toBe("5");
    expect(finding(input, "holidays").delta).toBe("-10");
    expect(finding(input, "irpf")).toMatchObject({ delta: "0.5", unit: "pp" });
    input.previous.rows.shift();
    expect(finding(input, "fixed")).toMatchObject({ expected: null, delta: null });
  });
});

describe("extra pay calculations with independent accreditation", () => {
  it("retains the complete extra formula and does not use it for unknown or partial accruals", () => {
    const input = inputs();
    set(input, "Paga Extra 3ª", "2000");
    expect(finding(input, "extra3").expected).toBeNull();
    input.parameters.extraFullEmployeeIds = ["009001"];
    expect(finding(input, "extra3")).toMatchObject({ expected: "2000", delta: "0" });
    set(input, "Complemento Experiencia Importe", "");
    expect(finding(input, "extra3").expected).toBeNull();
    set(input, "Complemento Experiencia Importe", "0");
    expect(finding(input, "extra3")).toMatchObject({ expected: "1900", delta: "100" });
  });
  it("calculates base × 3 / 12 only with scoped, effective evidence", () => {
    const input = inputs();
    input.current.society = "CYC";
    input.current.extraPayEvidence = [evidence()];
    set(input, "Paga Extra Prorrateada", "450");
    expect(finding(input, "extraProrated")).toMatchObject({
      actual: "450",
      expected: "450",
      delta: "0",
      status: "Coincide",
    });
    set(input, "Paga Extra Prorrateada", "449.98");
    expect(finding(input, "extraProrated")).toMatchObject({
      delta: "-0.02",
      status: "Con diferencia",
    });
    set(input, "Salario Base", "1800.01");
    expect(finding(input, "extraProrated").expected).toBe("450.0025");
    set(input, "Salario Base", "");
    expect(finding(input, "extraProrated").expected).toBeNull();
  });
  it("does not accredit a modality from coincident pay, contribution proration or the calendar", () => {
    const input = inputs();
    set(input, "Paga Extra Prorrateada", "450");
    input.current.headers.push("SSP_PRORRATA", "SSP_NUM_PAGAS");
    input.current.rows[0].push("450", "12");
    expect(finding(input, "extraProrated")).toMatchObject({
      actual: "450",
      expected: null,
      delta: null,
      status: "No comparable",
    });
    expect(finding(input, "extraProrated").reason).toContain("Modalidad pendiente");
  });
  it.each([
    "society",
    "entity",
    "employee",
    "period",
    "partialStart",
    "partialEnd",
    "invalidDate",
    "duplicate",
    "reference",
  ])("does not apply proration with %s evidence", (caseName) => {
    const input = inputs();
    input.current.society = "CYC";
    const item = evidence();
    if (caseName === "society") item.society = "IBER";
    if (caseName === "entity") item.entity = "OTHER";
    if (caseName === "employee") item.employeeId = "009002";
    if (caseName === "period") item.period = "2026-09";
    if (caseName === "partialStart") item.validFrom = "2026-10-02";
    if (caseName === "partialEnd") item.validTo = "2026-10-30";
    if (caseName === "invalidDate") item.validFrom = "2026-02-30";
    if (caseName === "reference") item.reference = "";
    input.current.extraPayEvidence = caseName === "duplicate" ? [item, item] : [item];
    expect(finding(input, "extraProrated")).toMatchObject({
      expected: null,
      status: "No comparable",
    });
  });
  it("does not apply the complete formula across companies or during an accredited modality conflict", () => {
    const input = inputs();
    input.parameters.extraFullEmployeeIds = ["009001"];
    input.current.extraPayEvidence = [evidence()];
    expect(finding(input, "extra3").expected).toBeNull();
    input.current.extraPayEvidence = [];
    const other = [...input.current.rows[0]];
    other[input.current.headers.indexOf("Id Empresa")] = "OTHER";
    input.current.rows.push(other);
    expect(finding(input, "extra3").expected).toBeNull();
  });
});

describe("anniversaries scoped by company and employee", () => {
  it("keeps extra calculations pending with unconfirmed payroll population", () => {
    const input = inputs();
    input.parameters.extraFullEmployeeIds = ["009001"];
    input.current.populationConfirmed = false;
    expect(finding(input, "extra3")).toMatchObject({ expected: null, status: "No comparable" });
  });
  it.each(["2025-02", "2025-03"])(
    "keeps the payment month of a February 29 anniversary pending in %s",
    (period) => {
      const input = inputs();
      input.period = period;
      input.current.run.accruedOn = `${period}-25`;
      input.current.seniorityDates![0] = "2000-02-29";
      const source = beneficiaries();
      source.period = period;
      source.facts[0].seniorityDate = "2000-02-29";
      input.sources = [source];
      set(input, "Paga 25 años", "1800");
      expect(finding(input, "anniversary25")).toMatchObject({
        status: "No comparable",
        expected: null,
      });
      expect(finding(input, "anniversary25").reason).toContain("29 de febrero");
    },
  );
  it.each([
    ["2001-10-15", "anniversary25"],
    ["1986-10-15", "anniversary40"],
  ])("compares %s with its salary base", (date, metric) => {
    const input = inputs();
    input.current.seniorityDates![0] = date;
    const source = beneficiaries();
    source.facts[0].seniorityDate = date;
    input.sources = [source];
    const header = metric === "anniversary25" ? "Paga 25 años" : "Paga 40 Años";
    set(input, header, "1800");
    expect(finding(input, metric)).toMatchObject({
      entity: "DEMO",
      actual: "1800",
      expected: "1800",
      delta: "0",
    });
    set(input, header, "0");
    expect(finding(input, metric)).toMatchObject({ status: "Con diferencia", delta: "-1800" });
    expect(finding(input, metric).reason).toContain("Pago faltante");
    set(input, header, "");
    expect(finding(input, metric)).toMatchObject({
      status: "No comparable",
      actual: null,
      expected: "1800",
    });
  });
  it("never combines bases, payments or numeric aliases between companies", () => {
    const input = inputs();
    set(input, "Paga 25 años", "1800");
    const other = [...input.current.rows[0]];
    other[input.current.headers.indexOf("Id Empresa")] = "OTHER";
    other[input.current.headers.indexOf("Salario Base")] = "1000";
    other[input.current.headers.indexOf("Paga 25 años")] = "1000";
    input.current.rows.push(other);
    input.current.seniorityDates!.push("2001-10-15");
    const source = beneficiaries();
    source.facts.push({
      ...source.facts[0],
      entity: "OTHER",
      employeeId: "9001",
      reference: "ACYC!C5",
    });
    input.sources = [source];
    const rows = reconcile(input).findings.filter(
      (item) => item.employeeId === "009001" && item.metric === "anniversary25",
    );
    expect(rows).toHaveLength(2);
    expect(rows.map((row) => [row.entity, row.actual, row.expected, row.status])).toEqual([
      ["DEMO", "1800", "1800", "Coincide"],
      ["OTHER", "1000", "1000", "Coincide"],
    ]);
    expect(new Set(rows.map((row) => row.id)).size).toBe(2);
    source.facts.shift();
    source.complete = false;
    expect(finding(input, "anniversary25").status).toBe("No comparable");
  });
  it.each([
    "missingPayrollDate",
    "conflictingPayrollDate",
    "wrongSourceDate",
    "legacySource",
    "duplicate",
    "missingEntity",
    "unconfirmedRule",
  ])("keeps %s pending", (caseName) => {
    const input = inputs();
    const source = beneficiaries();
    input.sources = [source];
    if (caseName === "missingPayrollDate") delete input.current.seniorityDates;
    if (caseName === "conflictingPayrollDate") {
      input.current.rows.push([...input.current.rows[0]]);
      input.current.seniorityDates!.push("2001-11-01");
    }
    if (caseName === "wrongSourceDate") source.facts[0].seniorityDate = "2001-10-16";
    if (caseName === "legacySource") {
      source.profile = "aniversarios-v1";
      delete source.facts[0].seniorityDate;
    }
    if (caseName === "duplicate") source.facts.push({ ...source.facts[0] });
    if (caseName === "missingEntity") delete source.facts[0].entity;
    if (caseName === "unconfirmedRule") input.parameters.anniversaryFullBase = false;
    set(input, "Paga 25 años", "1800");
    expect(finding(input, "anniversary25")).toMatchObject({ delta: null, status: "No comparable" });
  });
  it("distinguishes unlisted payments in complete and partial lists and never concludes they are undue", () => {
    const input = inputs();
    const source = beneficiaries();
    source.facts[0].employeeId = "009002";
    input.sources = [source];
    set(input, "Paga 25 años", "1800");
    expect(finding(input, "anniversary25")).toMatchObject({
      status: "Con diferencia",
      expected: "0",
      delta: "1800",
    });
    expect(finding(input, "anniversary25").reason).toContain("requiere revisión");
    source.complete = false;
    expect(finding(input, "anniversary25")).toMatchObject({
      status: "No comparable",
      expected: null,
    });
    source.complete = true;
    set(input, "Paga 25 años", "0");
    expect(finding(input, "anniversary25").status).toBe("No comparable");
  });
  it("does not use birth dates, future anniversaries or unknown employee bases", () => {
    expect(anniversaryMetric("2001-11-01", "2026-10")).toBeNull();
    expect(anniversaryMetric("2002-10-01", "2026-10")).toBeNull();
    expect(seniorityDate("29/02/2000")).toBe("2000-02-29");
    expect(seniorityDate("1900-02-29")).toBeNull();
    expect(seniorityDate("2026-02-30")).toBeNull();
    const input = inputs();
    const source = beneficiaries();
    source.facts[0].employeeId = "999999";
    input.sources = [source];
    expect(
      reconcile(input).findings.find(
        (row) => row.metric === "anniversary25" && row.employeeId === "999999",
      ),
    ).toMatchObject({ actual: null, expected: null, delta: null, status: "No comparable" });
    set(input, "Paga 25 años", "1800");
    expect(finding(input, "anniversary25")).toMatchObject({
      expected: null,
      status: "No comparable",
    });
    source.facts[0].seniorityDate = "2001-11-15";
    expect(reconcile(input).findings.some((row) => row.employeeId === "999999")).toBe(false);
  });
});

describe("unchanged controls and reviews", () => {
  it("preserves the exact pre-change C12 and other unaffected findings, including their fingerprints", () => {
    const input = inputs();
    input.parameters = { ...DEFAULT_PARAMETERS };
    const rows = reconcile(input).findings;
    expect(hash(rows.filter((row) => row.control === "C12"))).toBe(
      "ea43931097d3bae55dfbba87477e351bbb6e298a1968d472db6a8f42803a5bd8",
    );
    expect(
      hash(rows.filter((row) => !["C01", "C02", "C04", "C08", "C13", "C15"].includes(row.control))),
    ).toBe("3dbf353520b6108cfbe1735989168970ffb43d034df6adeaf3a301e079309029");
    const advance = rows.find((row) => row.metric === "advanceDeduct")!;
    const annotations = [
      {
        findingId: advance.id,
        fingerprint: advance.fingerprint,
        state: "Pendiente" as const,
        comment: "",
        actor: "TEST",
        at: "2026-10-01",
      },
    ];
    input.previous.run.accruedOn = "2026-08-25";
    const reloaded = JSON.parse(JSON.stringify(input)) as typeof input;
    expect(retainAnnotations(annotations, reconcile(reloaded))[0].invalidated).toBe(false);
  });
});
