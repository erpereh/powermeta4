import { describe, expect, it } from "vitest";
import { automaticExtraFixture } from "./extra-pay.fixture";
import { extraProration, extraRuleTokens, VERIFIED_EXTRA_RULE } from "./extra-pay-rule";
import { resolveAutomaticExtras, verifiedExtraRule } from "./extra-pay-resolution";
import { reconcile, retainAnnotations } from "./engine";
import { hash } from "./hash";
import { METRICS } from "./catalogue";
import type { Annotation } from "./types";

type Fixture = ReturnType<typeof automaticExtraFixture>;
const capture = (input: Fixture) => {
  input.current.extraPayAutomatic = resolveAutomaticExtras(input.current, input.data);
  return input;
};
const paid = (input: Fixture, metric: string, amount: string) => {
  const header = METRICS.find((item) => item.id === metric)?.header;
  input.current.rows[0][input.current.headers.findIndex((item) => item === header)] = amount;
  input.data.payroll[0] = {
    ...input.data.payroll[0],
    [metric === "extraProrated" ? "PRORATED" : `PAID${metric.slice(5)}`]: amount,
  };
};
const find = (input: Fixture, metric: string) =>
  reconcile(input).findings.find((item) => item.metric === metric && item.control === "C04");
const prorate = (input: Fixture, value: string | null = "1.00000000") => {
  input.data.values = [1, 2, 3].map((order) => ({
    LEVEL: "individual",
    KEY1: "009001",
    KEY2: "1",
    COMPONENT: `CSP_PRORRATEADA_PE${order}`,
    VALUE: value,
    PRIORITY: "2",
    DATE_FROM: "2026-01-01",
    DATE_TO: "4000-01-01",
  }));
};

describe("confirmed R1 semantics", () => {
  it.each(["2026-08", "2026-09", "2026-10"])(
    "supports %s with the exact confirmed source",
    (period) => {
      const input = automaticExtraFixture();
      expect(verifiedExtraRule(input.data.rules, period)).toBe(true);
    },
  );
  it.each(["2026-07", "2026-11", "2027-10"])("does not extrapolate R1 to %s", (period) => {
    expect(verifiedExtraRule(automaticExtraFixture().data.rules, period)).toBe(false);
  });
  it("ignores comments/formatting but preserves changes inside literals and executable code", () => {
    expect(extraRuleTokens("// remark\n" + VERIFIED_EXTRA_RULE + "\n' comment")).toBe(
      extraRuleTokens(VERIFIED_EXTRA_RULE),
    );
    for (const source of [
      VERIFIED_EXTRA_RULE.replace('"0041"', '"0042"'),
      VERIFIED_EXTRA_RULE.replace('"IBER"', '"I BER"'),
      VERIFIED_EXTRA_RULE.replace("= 1 and", "= 0 and"),
    ]) {
      const input = automaticExtraFixture();
      input.data.rules[0] = { ...input.data.rules[0], SOURCE: source };
      expect(verifiedExtraRule(input.data.rules, "2026-10")).toBe(false);
    }
  });
  it.each(["duplicate", "condition", "priority", "dates", "additional"])(
    "rejects %s rule evidence",
    (kind) => {
      const input = automaticExtraFixture();
      if (kind === "duplicate") input.data.rules.push(input.data.rules[0]);
      if (kind === "additional") input.data.rules.push({ ...input.data.rules[0], RULE_ID: "R2" });
      if (kind === "condition") input.data.rules[0] = { ...input.data.rules[0], CONDITION: "1" };
      if (kind === "priority") input.data.rules[0] = { ...input.data.rules[0], PRIORITY: "0" };
      if (kind === "dates") input.data.rules[0] = { ...input.data.rules[0], DATE_TO: "4000-01-01" };
      expect(verifiedExtraRule(input.data.rules, "2026-10")).toBe(false);
    },
  );
  it("reproduces NULL inheritance and the confirmed IBER branches only for defined extras", () => {
    expect(extraProration("CYC", "A", 1, null, true)).toBe(true);
    expect(extraProration("CYC", "A", 1, 0, true)).toBe(false);
    expect(extraProration("CYC", "A", 1, 1, false)).toBe(true);
    expect(extraProration("CYC", "A", 1, null, null)).toBeNull();
    expect(extraProration("IBER", "0041", 3, 0, false)).toBe(true);
    expect(extraProration("IBER", "0041", 4, 1, true)).toBe(false);
    expect(extraProration("IBER", "0042", 4, 0, false)).toBe(true);
    expect(extraProration("IBER", "", 4, 0, false)).toBeNull();
  });
});

describe("automatic C04", () => {
  it("keeps C04 reviews valid when SQL returns the same evidence in another order", () => {
    const input = automaticExtraFixture();
    prorate(input);
    paid(input, "extraProrated", "450");
    capture(input);
    const before = find(input, "extraProrated")!;
    Object.values(input.data).forEach((rows) => rows.reverse());
    capture(input);
    expect(find(input, "extraProrated")?.fingerprint).toBe(before.fingerprint);
  });
  it("calculates the due complete extra without manually confirming parameters or employee IDs", () => {
    const input = automaticExtraFixture();
    paid(input, "extra3", "1999.98");
    capture(input);
    expect(find(input, "extra3")).toMatchObject({
      entity: "DEMO",
      actual: "1999.98",
      expected: "2000",
      delta: "-0.02",
      status: "Con diferencia",
    });
    expect(reconcile(input).findings.filter((item) => item.control === "C04")).toHaveLength(1);
    expect(input.parameters.rulesConfirmed).toBe(false);
    expect(input.parameters.extraFullEmployeeIds).toEqual([]);
  });
  it("detects a missing payment when zero is explicit and complete accrual is accredited", () => {
    const input = capture(automaticExtraFixture());
    expect(find(input, "extra3")).toMatchObject({ actual: "0", expected: "2000", delta: "-2000" });
    input.current.rows[0][input.current.headers.indexOf("Paga Extra 3ª")] = "";
    expect(find(input, "extra3")).toMatchObject({ expected: null, delta: null });
  });
  it("calculates base × 3 / 12 with normalized independent indicators, exact decimals and no files", () => {
    const input = automaticExtraFixture();
    prorate(input);
    paid(input, "extraProrated", "450");
    capture(input);
    expect(find(input, "extraProrated")).toMatchObject({
      expected: "450",
      delta: "0",
      status: "Coincide",
    });
    expect(find(input, "extra3")).toBeUndefined();
    input.current.rows[0][input.current.headers.indexOf("Salario Base")] = "1800.01";
    expect(find(input, "extraProrated")?.expected).toBe("450.0025");
  });
  it("keeps unexpected nonzero separate payments visible instead of hiding them", () => {
    const input = automaticExtraFixture();
    prorate(input);
    paid(input, "extra1", "10");
    capture(input);
    expect(find(input, "extra1")).toMatchObject({
      expected: "0",
      delta: "10",
      status: "Con diferencia",
    });
  });
  it("takes a higher-priority value and accepts equivalent values at equal priority", () => {
    const input = automaticExtraFixture();
    prorate(input, "0");
    const higher = input.data.values.flatMap((row) => [
      { ...row, VALUE: "1", PRIORITY: "0" },
      { ...row, VALUE: "1.00000000", PRIORITY: "0" },
    ]);
    input.data.values.push(...higher);
    capture(input);
    expect(input.current.extraPayAutomatic?.people[0].extras.every((extra) => extra.prorated)).toBe(
      true,
    );
  });
  it("uses explicit NULL to retain each definition rather than falling back to zero", () => {
    const input = automaticExtraFixture();
    prorate(input, null);
    input.data.definitions = input.data.definitions.map((row) => ({ ...row, ORIGINAL: "S" }));
    capture(input);
    expect(input.current.extraPayAutomatic?.people[0].extras.every((extra) => extra.prorated)).toBe(
      true,
    );
  });
  it("can inherit a confirmed entity or agreement value, but never silently uses an unrelated entity", () => {
    const input = automaticExtraFixture();
    input.data.values = [1, 2, 3].map((order) => ({
      LEVEL: "entity",
      KEY1: "DEMO",
      KEY2: null,
      COMPONENT: `CSP_PRORRATEADA_PE${order}`,
      VALUE: "1",
      PRIORITY: "2",
      DATE_FROM: "2026-01-01",
      DATE_TO: "4000-01-01",
    }));
    capture(input);
    expect(input.current.extraPayAutomatic?.people[0].extras.every((extra) => extra.prorated)).toBe(
      true,
    );
    input.data.values = input.data.values.map((row) => ({
      ...row,
      LEVEL: "agreement",
      KEY1: "A1",
    }));
    capture(input);
    expect(input.current.extraPayAutomatic?.people[0].extras.every((extra) => extra.prorated)).toBe(
      true,
    );
    input.data.values = input.data.values.map((row) => ({
      ...row,
      LEVEL: "entity",
      KEY1: "OTHER",
    }));
    capture(input);
    expect(
      input.current.extraPayAutomatic?.people[0].extras.every((extra) => !extra.prorated),
    ).toBe(true);
  });
  it("resolves IBER definitions and its fourth-extra exception without changing the economic formula", () => {
    const input = automaticExtraFixture();
    input.current.society = "IBER";
    input.data.histories[0] = { ...input.data.histories[0], VALUE: "0041" };
    input.data.definitions = input.data.definitions.map((row) => ({ ...row, AGREEMENT: "0041" }));
    input.data.definitions.push({ ...input.data.definitions[0], ORDINAL: "4", ORIGINAL: "S" });
    capture(input);
    expect(
      input.current.extraPayAutomatic?.people[0].extras.map((extra) => extra.prorated),
    ).toEqual([false, false, true, false]);
    expect(find(input, "extraProrated")?.expected).toBeNull();
  });
  it("accepts coherent split slices and prevents partial monthly components from proving a full extra", () => {
    const input = automaticExtraFixture();
    const first = input.data.payroll[0];
    input.data.payroll = [
      { ...first, DATE_TO: "2026-10-15", FIXED_UNITS: "0.5", UNITS3: "0.5" },
      { ...first, DATE_FROM: "2026-10-16", FIXED_UNITS: "0.5", UNITS3: "0.5" },
    ];
    capture(input);
    expect(find(input, "extra3")?.expected).toBe("2000");
    input.data.payroll[1] = { ...input.data.payroll[1], FIXED_UNITS: "0.25" };
    capture(input);
    expect(find(input, "extra3")?.expected).toBeNull();
  });
  it("keeps a non-EUR currency, incomplete components or another run pending", () => {
    const input = automaticExtraFixture();
    input.data.payroll[0] = { ...input.data.payroll[0], CURRENCY: "USD" };
    capture(input);
    expect(find(input, "extra3")?.reason).toContain("Moneda EUR");
    input.data.payroll[0] = { ...input.data.payroll[0], CURRENCY: "EUR" };
    capture(input);
    input.current.rows[0][input.current.headers.indexOf("Complemento Experiencia Importe")] = "";
    expect(find(input, "extra3")?.expected).toBeNull();
    input.current.run.runAt = "2026-10-30T12:00:00Z";
    expect(find(input, "extra3")?.reason).toContain("otra ejecución");
  });
  it.each([
    "conflict",
    "invalid",
    "priority",
    "emptyPriority",
    "transition",
    "unsupported",
    "defaultMissing",
    "definitionDuplicate",
    "definitionDate",
    "historyDuplicate",
    "historyDate",
    "entityMismatch",
    "sliceDuplicate",
    "sliceGap",
    "periodMissing",
    "paidChanged",
    "percentage",
    "partialUnits",
    "fourExtras",
    "fourthSeparate",
    "unknownOriginal",
    "appliedMismatch",
    "absence",
    "unknownAbsence",
  ])("keeps %s pending without using legacy manual parameters", (kind) => {
    const input = automaticExtraFixture();
    prorate(input);
    paid(input, "extraProrated", "450");
    input.parameters.rulesConfirmed = true;
    input.parameters.extraFullEmployeeIds = ["009001"];
    if (kind === "conflict") input.data.values.push({ ...input.data.values[0], VALUE: "0" });
    if (kind === "invalid") input.data.values[0] = { ...input.data.values[0], VALUE: "yes" };
    if (kind === "priority") input.data.values[0] = { ...input.data.values[0], PRIORITY: null };
    if (kind === "emptyPriority") input.data.values[0] = { ...input.data.values[0], PRIORITY: "" };
    if (kind === "transition")
      input.data.values[0] = { ...input.data.values[0], DATE_FROM: "2026-10-15" };
    if (kind === "unsupported")
      input.data.unsupported.push({ LEVEL: "unknown", COMPONENT: "CSP_PRORRATEADA_PE1" });
    if (kind === "defaultMissing") input.data.defaults = [];
    if (kind === "definitionDuplicate") input.data.definitions.push(input.data.definitions[0]);
    if (kind === "definitionDate")
      input.data.definitions[0] = { ...input.data.definitions[0], DEFINITION_FROM: "2026-10-15" };
    if (kind === "historyDuplicate") input.data.histories.push(input.data.histories[0]);
    if (kind === "historyDate")
      input.data.histories[0] = { ...input.data.histories[0], DATE_TO: "2026-10-15" };
    if (kind === "entityMismatch")
      input.data.histories[2] = { ...input.data.histories[2], VALUE: "OTHER" };
    if (kind === "sliceDuplicate") input.data.payroll.push(input.data.payroll[0]);
    if (kind === "sliceGap")
      input.data.payroll[0] = { ...input.data.payroll[0], DATE_FROM: "2026-10-02" };
    if (kind === "periodMissing") input.current.hrPeriods = undefined;
    if (kind === "percentage")
      input.data.definitions[0] = { ...input.data.definitions[0], PERCENTAGE: "50" };
    if (kind === "partialUnits")
      input.data.payroll[0] = { ...input.data.payroll[0], FIXED_UNITS: "0.5" };
    if (kind === "absence")
      input.data.payroll[0] = { ...input.data.payroll[0], ABSENCE_HOURS: "1" };
    if (kind === "unknownAbsence")
      input.data.payroll[0] = { ...input.data.payroll[0], ABSENCE_HOURS: null };
    if (kind === "fourExtras") {
      input.data.definitions.push({ ...input.data.definitions[0], ORDINAL: "4", ORIGINAL: "S" });
      input.data.defaults[3] = { ...input.data.defaults[3], VALUE: null };
    }
    if (kind === "fourthSeparate")
      input.data.definitions.push({ ...input.data.definitions[0], ORDINAL: "4", ORIGINAL: "N" });
    if (kind === "unknownOriginal") {
      input.data.values[0] = { ...input.data.values[0], VALUE: null };
      input.data.definitions[0] = { ...input.data.definitions[0], ORIGINAL: null };
    }
    if (kind === "appliedMismatch")
      input.data.applied.push({
        EMPLOYEE: "009001",
        HR_PERIOD: "1",
        COMPONENT: "CSP_PRORRATEADA_PE1",
        VALUE: "0",
        CURRENCY: "EUR",
        SOURCE_NODE: "SCO_VALUES",
        DATE_FROM: "2026-10-01",
        DATE_TO: "2026-10-31",
      });
    capture(input);
    if (kind === "paidChanged")
      input.current.rows[0][input.current.headers.indexOf("Paga Extra Prorrateada")] = "449";
    expect(find(input, "extraProrated"), kind).toMatchObject({
      expected: null,
      delta: null,
      status: "No comparable",
    });
  });
  it("separates equal employee IDs in different companies, including amounts and findings", () => {
    const input = automaticExtraFixture();
    paid(input, "extra3", "2000");
    const other = [...input.current.rows[0]];
    other[input.current.headers.indexOf("Id Empresa")] = "OTHER";
    other[input.current.headers.indexOf("Salario Base")] = "2800";
    other[input.current.headers.indexOf("Paga Extra 3ª")] = "3000";
    input.current.rows.push(other);
    input.current.hrPeriods?.push("2");
    input.data.payroll.push({
      ...input.data.payroll[0],
      ENTITY: "OTHER",
      HR_PERIOD: "2",
      PAID3: "3000",
    });
    input.data.histories.push(
      ...input.data.histories.map((row) => ({
        ...row,
        HR_PERIOD: "2",
        VALUE: row.KIND === "entity" ? "OTHER" : row.VALUE,
      })),
    );
    capture(input);
    const findings = reconcile(input).findings.filter(
      (row) => row.control === "C04" && row.metric === "extra3",
    );
    expect(findings.map((row) => [row.entity, row.actual, row.expected])).toEqual([
      ["DEMO", "2000", "2000"],
      ["OTHER", "3000", "3000"],
    ]);
    expect(new Set(findings.map((row) => row.id)).size).toBe(2);
  });
  it("retains all other finding fingerprints/reviews, including C12, after capture and JSON reload", () => {
    const input = automaticExtraFixture();
    const before = reconcile(input);
    capture(input);
    const reloaded: Fixture = JSON.parse(JSON.stringify(input));
    const after = reconcile(reloaded);
    expect(hash(after.findings.filter((row) => row.control !== "C04"))).toBe(
      hash(before.findings.filter((row) => row.control !== "C04")),
    );
    const annotation: Annotation = {
      findingId: before.findings.find((row) => row.control === "C12")!.id,
      fingerprint: before.findings.find((row) => row.control === "C12")!.fingerprint,
      state: "Diferencia justificada",
      comment: "Guardada",
      actor: "TEST",
      at: "2026-10-26",
    };
    expect(retainAnnotations([annotation], after)[0].invalidated).toBe(false);
    expect(after).toEqual(reconcile(input));
  });
});
