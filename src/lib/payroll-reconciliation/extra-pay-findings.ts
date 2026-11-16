import { columnIndex, identity, METRICS, type Metric } from "./catalogue";
import { decimal, magnitude, textDecimal } from "./decimal";
import { hash } from "./hash";
import { missing, payroll, type Value } from "./payroll-value";
import { completeProratedRule } from "./extra-pay-resolution";
import type { Dossier, Finding, Snapshot } from "./types";

function automaticExpected(
  current: Snapshot,
  rows: number[],
  metric: Metric,
  period: string,
): Value {
  const automatic = current.extraPayAutomatic;
  if (
    !automatic ||
    automatic.version !== 1 ||
    automatic.society !== current.society ||
    automatic.period !== period ||
    automatic.runHash !== hash(current.run)
  )
    return missing("Evidencia automática de extras ausente o de otra ejecución.");
  if (
    current.run.accruedOn.slice(0, 7) !== period ||
    !current.populationConfirmed ||
    !current.run.hasData
  )
    return missing("Periodo, población o datos actuales sin acreditar.");
  if (automatic.issue) return missing(automatic.issue);
  const row = current.rows[rows[0]];
  const id = identity(row[columnIndex(current.headers, "Id Empleado")] ?? "");
  const entity = identity(row[columnIndex(current.headers, "Id Empresa")] ?? "");
  const periods = new Set(rows.map((index) => identity(current.hrPeriods?.[index] ?? "")));
  const matches = automatic.people.filter(
    (person) => person.employeeId === id && person.entity === entity,
  );
  if (
    !entity ||
    periods.size !== 1 ||
    ![...periods][0] ||
    matches.length !== 1 ||
    matches[0].hrPeriod !== [...periods][0]
  )
    return missing("Empresa, matrícula o periodo de alta ambiguo en la evidencia de extras.");
  const person = matches[0],
    evidence = person.evidence;
  if (person.issue) return missing(person.issue, evidence);
  // The additional SQL must agree with the saved report, never replace its amounts.
  if (
    METRICS.filter(
      (item) =>
        item.control === "C04" &&
        (item.id === metric.id || columnIndex(current.headers, item.header) >= 0),
    ).some((item) => {
      const actual = payroll(current, rows, item).value;
      return actual === null || actual !== decimal(person.paid[item.id]);
    })
  )
    return missing(
      "El acumulado y el informe guardado no contienen los mismos importes de extras; revisar la ejecución antes de calcular.",
      evidence,
    );
  if (metric.id === "extraProrated") {
    const extras = person.extras.filter((extra) => extra.prorated);
    if (!extras.length)
      return {
        value: BigInt(0),
        reason: "La configuración acredita extras sin prorratear.",
        evidence,
      };
    if (person.accrualIssue) return missing(person.accrualIssue, evidence);
    if (!completeProratedRule(person))
      return missing(
        "La configuración no acredita las tres extras completas de la fórmula base × 3 / 12; revisar porcentajes, modalidad o devengo.",
        evidence,
      );
    const base = payroll(current, rows, { ...metric, header: "Salario Base" });
    return base.value === null
      ? missing("Salario base incompleto.", evidence)
      : {
          value: (base.value * BigInt(3)) / BigInt(12),
          reason:
            "(Salario Base × 3) / 12; tres extras prorrateadas y mes completo acreditados en PeopleNet.",
          evidence: [...evidence, ...base.evidence],
        };
  }
  const order = Number(metric.id.slice(5));
  const extra = person.extras.find((item) => item.order === order);
  if (!extra || extra.prorated || !extra.due)
    return {
      value: BigInt(0),
      reason:
        "No corresponde abono separado de esta extra en la paga seleccionada según su configuración.",
      evidence,
    };
  if (person.accrualIssue) return missing(person.accrualIssue, evidence);
  if (!extra.full || decimal(extra.percentage) !== decimal("100"))
    return missing(
      "Devengo parcial o porcentaje distinto del 100 %; regla proporcional pendiente.",
      evidence,
    );
  const parts = [
    "Salario Base",
    "Complemento Experiencia Importe",
    "Complemento Adaptación Individualizado",
  ].map((header) => payroll(current, rows, { ...metric, header }));
  if (parts.some((part) => part.value === null))
    return missing("Componentes de la extra incompletos.", evidence);
  return {
    value: parts.reduce((sum, part) => sum + (part.value ?? BigInt(0)), BigInt(0)),
    reason:
      "Salario Base + Complemento Experiencia + Complemento Adaptación Individualizado; devengo completo acreditado en PeopleNet.",
    evidence: [...evidence, ...parts.flatMap((part) => part.evidence)],
  };
}

export function automaticExtraFindings(
  input: Pick<Dossier, "current" | "period" | "parameters">,
  metric: Metric,
): Finding[] {
  const { current } = input;
  const idColumn = columnIndex(current.headers, "Id Empleado"),
    entityColumn = columnIndex(current.headers, "Id Empresa");
  const groups = new Map<string, number[]>();
  current.rows.forEach((row, index) => {
    const id = identity(row[idColumn] ?? "");
    if (!id) return;
    const key = JSON.stringify([identity(row[entityColumn] ?? ""), id]);
    groups.set(key, [...(groups.get(key) ?? []), index]);
  });
  const findings: Finding[] = [];
  for (const rows of groups.values()) {
    const row = current.rows[rows[0]];
    const entity = identity(row[entityColumn] ?? ""),
      employeeId = identity(row[idColumn] ?? "");
    const actual = payroll(current, rows, metric),
      expected = automaticExpected(current, rows, metric, input.period);
    // An accredited absence of obligation with an explicit zero is not a pending control.
    if (actual.value === BigInt(0) && expected.value === BigInt(0)) continue;
    const delta =
      actual.value === null || expected.value === null ? null : actual.value - expected.value;
    const tolerance = decimal(input.parameters.tolerance) ?? BigInt(0);
    const record = {
      control: "C04" as const,
      metric: metric.id,
      employeeId,
      entity,
      name: row[columnIndex(current.headers, "Apellidos y Nombres")] ?? "",
      actual: actual.value === null ? null : textDecimal(actual.value),
      expected: expected.value === null ? null : textDecimal(expected.value),
      delta: delta === null ? null : textDecimal(delta),
      unit: "EUR" as const,
      status:
        delta === null
          ? ("No comparable" as const)
          : magnitude(delta) <= tolerance
            ? ("Coincide" as const)
            : ("Con diferencia" as const),
      reason: [`Empresa ${entity || "pendiente"}.`, actual.reason, expected.reason]
        .filter(Boolean)
        .join(" "),
      evidence: [...actual.evidence, ...expected.evidence],
    };
    findings.push({
      ...record,
      id: hash(["C04:2", metric.id, entity, employeeId]).slice(0, 24),
      fingerprint: hash({
        ...record,
        period: input.period,
        tolerance: textDecimal(tolerance),
        version: "C04:2",
      }),
    });
  }
  return findings;
}
