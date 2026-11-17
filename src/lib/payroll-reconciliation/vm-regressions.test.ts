import { describe, expect, it } from "vitest";
import { anniversaryMetric, seniorityDate } from "./dates";
import { monthlySnapshotIssue } from "./comparison";
import { reconcile } from "./engine";
import { resolveAutomaticExtras, type ExtraPayData } from "./extra-pay-resolution";
import { automaticExtraFixture } from "./extra-pay.fixture";
import { snapshot } from "./snapshot";
import { demoReport } from "./demo";
import { reconciliationRunAt } from "./presentation";
import { DEFAULT_PARAMETERS, type Snapshot } from "./types";

/**
 * Regressions found against M4PRENOMINA on 2026-11-16. Values are invented;
 * only the formats and timing patterns reproduce what PeopleNet returned.
 */
const CALCULATED = "2026-10-05 18:01:00";

function stamped(data: ExtraPayData, updated = "2026-09-01 10:00:00"): ExtraPayData {
  return {
    ...data,
    payroll: data.payroll.map((row) => ({ ...row, CALCULATED })),
    histories: data.histories.map((row) => ({ ...row, UPDATED: updated })),
    definitions: data.definitions.map((row) => ({ ...row, UPDATED: updated })),
    defaults: data.defaults.map((row) => ({ ...row, UPDATED: updated })),
  };
}

describe("PeopleNet datetime seniority (C13)", () => {
  it("accepts the report's midnight datetime and keeps any other time unaccredited", () => {
    expect(seniorityDate("2001-10-15 00:00:00")).toBe("2001-10-15");
    expect(seniorityDate("2001-10-15T00:00:00.000Z")).toBe("2001-10-15");
    expect(seniorityDate("2001-10-15 10:30:00")).toBeNull();
    expect(seniorityDate("2001-02-30 00:00:00")).toBeNull();
    expect(anniversaryMetric("2001-10-15 00:00:00", "2026-10")).toBe("anniversary25");
  });

  it("no longer reports every SQL seniority as invalid", () => {
    const detail = demoReport("2026-10");
    const seniority = detail.headers.indexOf("Fecha de Antigüedad");
    detail.rows = detail.rows.map((row) =>
      row.map((cell, index) => (index === seniority ? "2001-10-15 00:00:00" : cell)),
    );
    const current = snapshot(detail, true, "CYC");
    const result = reconcile({
      period: "2026-10",
      current,
      previous: null,
      sources: [],
      parameters: DEFAULT_PARAMETERS,
    });
    const c13 = result.findings.filter((finding) => finding.control === "C13");
    expect(c13.length).toBeGreaterThan(0);
    expect(c13.every((finding) => !finding.reason.includes("Antigüedad laboral de nómina"))).toBe(
      true,
    );
    expect(c13.every((finding) => finding.status === "Falta fuente")).toBe(true);
    // Payroll seniority flags who reaches 25 years, but never replaces the beneficiary list.
    const due = c13.filter((finding) => finding.metric === "anniversary25");
    expect(due.every((finding) => finding.reason.includes("Cumple el aniversario"))).toBe(true);
    expect(due.every((finding) => finding.expected === null)).toBe(true);
    const other = c13.filter((finding) => finding.metric === "anniversary40");
    expect(other.every((finding) => finding.reason.includes("Falta fuente independiente"))).toBe(
      true,
    );
  });
});

describe("IRPF occurrence diagnostic (C02)", () => {
  const withIrpf = (first: string, second: string) => {
    const detail = demoReport("2026-10");
    const first_ = detail.headers.indexOf("Porcentaje I.R.P.F.");
    const second_ = detail.headers.lastIndexOf("Porcentaje I.R.P.F.");
    expect(second_).toBeGreaterThan(first_);
    detail.rows = detail.rows.map((row) =>
      row.map((cell, index) => (index === first_ ? first : index === second_ ? second : cell)),
    );
    return reconcile({
      period: "2026-10",
      current: snapshot(detail, true, "CYC"),
      previous: null,
      sources: [],
      parameters: DEFAULT_PARAMETERS,
    }).diagnostics.filter((message) => message.startsWith("IRPF"));
  };
  it("treats 15.00 and 15.0000 as the same percentage", () => {
    expect(withIrpf("15.00", "15.0000")).toEqual([]);
  });
  it("still reports a real numeric discrepancy", () => {
    expect(withIrpf("15.00", "16.0000")).toHaveLength(1);
  });
});

describe("report run time in the export", () => {
  it("keeps PeopleNet's wall-clock CSP_DT_RUN instead of shifting it to Madrid", () => {
    // Report exported as Normal_Inf ..._202610161141 corresponds to run 11:39:57.
    expect(reconciliationRunAt("2026-10-16T11:39:57.000Z")).toContain("11:39:57");
    expect(reconciliationRunAt("2026-10-28T09:11:14.000Z")).toContain("09:11:14");
    expect(reconciliationRunAt(undefined)).toBe("Pendiente");
  });
});

describe("capture origin", () => {
  const pair = (database: string): [Snapshot, Snapshot] => [
    { ...snapshot(demoReport("2026-10"), true, "CYC"), origin: { server: "S", database: "B1" } },
    { ...snapshot(demoReport("2026-10", true), true, "CYC"), origin: { server: "S", database } },
  ];
  it("never compares months read from different PeopleNet databases", () => {
    const [current, previous] = pair("B2");
    expect(monthlySnapshotIssue("2026-10", current, previous)).toContain("bases PeopleNet");
  });
  it("keeps the comparison when both captures share the same base", () => {
    const [current, previous] = pair("B1");
    expect(monthlySnapshotIssue("2026-10", current, previous)).toBeNull();
  });
});

describe("C04 configuration written after the accrual calculation", () => {
  const resolve = (data: ExtraPayData) => {
    const input = automaticExtraFixture("2026-10", "R1");
    return resolveAutomaticExtras(input.current, data).people[0];
  };
  const base = () => stamped(automaticExtraFixture("2026-10", "R1").data);

  it("accredits configuration that predates the calculation", () => {
    expect(resolve(base()).issue).toBeUndefined();
  });
  it("keeps pending an indicator default changed after the calculation", () => {
    const data = base();
    data.defaults = data.defaults.map((row) => ({ ...row, UPDATED: "2026-10-27 15:23:45" }));
    const issue = resolve(data).issue ?? "";
    expect(issue).toContain("Valor por defecto del indicador");
    expect(issue).toContain("2026-10-27 15:23:45");
    expect(issue).toContain(CALCULATED);
  });
  it("keeps pending a history or definition changed after the calculation", () => {
    const history = base();
    history.histories[0] = { ...history.histories[0], UPDATED: "2026-10-20 09:00:00" };
    expect(resolve(history).issue).toContain("Historial de convenio");
    const definition = base();
    definition.definitions[0] = { ...definition.definitions[0], UPDATED: "2026-10-20 09:00:00" };
    expect(resolve(definition).issue).toContain("Definición de extras");
  });
  it("names the later write instead of a generic overlap when a history row is added", () => {
    const data = base();
    data.histories.push({ ...data.histories[0], VALUE: "A2", UPDATED: "2026-10-20 09:00:00" });
    expect(resolve(data).issue).toContain("Historial de convenio");
  });
  it("keeps pending an individual assignment corrected after the calculation", () => {
    const data = base();
    data.values = [
      {
        LEVEL: "individual",
        KEY1: "009001",
        KEY2: "1",
        COMPONENT: "CSP_PRORRATEADA_PE1",
        VALUE: "1",
        PRIORITY: "1",
        DATE_FROM: "2026-01-01",
        DATE_TO: "4000-01-01",
        UPDATED: "2026-10-15 00:00:00",
      },
    ];
    expect(resolve(data).issue).toContain("Asignación del indicador 1");
  });
  it("treats a missing modification date as unaccredited, never as older", () => {
    const data = base();
    data.defaults = data.defaults.map((row) => ({ ...row, UPDATED: null }));
    expect(resolve(data).issue).toContain("sin fecha");
  });
  it("explains an accrual recalculated after the report run instead of a generic gap", () => {
    const data = base();
    data.recalculated = data.payroll.map((row) => ({
      EMPLOYEE: row.EMPLOYEE,
      HR_PERIOD: row.HR_PERIOD,
      ENTITY: row.ENTITY,
      UPDATED: "2026-11-05 19:01:00",
    }));
    data.payroll = [];
    const issue = resolve(data).issue ?? "";
    expect(issue).toContain("recalculado en PeopleNet después de esta ejecución");
    expect(issue).toContain("2026-11-05 19:01:00");
  });
  it("keeps the generic message when nothing was recalculated", () => {
    const data = base();
    data.payroll = [];
    expect(resolve(data).issue).toBe(
      "No hay acumulado coherente para esta empresa, matrícula y periodo de alta.",
    );
  });
});
