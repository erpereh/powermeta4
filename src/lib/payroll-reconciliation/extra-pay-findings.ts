import { columnIndex, identity, METRICS, type Metric } from "./catalogue";
import { decimal, magnitude, multiply, textDecimal } from "./decimal";
import { hash } from "./hash";
import { missing, payroll, type Value } from "./payroll-value";
import { completeProratedRule } from "./extra-pay-resolution";
import { COMPUTING_CONCEPTS } from "./extra-pay-price";
import type { Dossier, Finding, Snapshot } from "./types";

const zero = BigInt(0);
const cent = decimal("0.01") ?? BigInt(1);
/** Calculos.txt formula; captures without the CSP_IPE_* read (before 1.4.0) keep it. */
const CYC_FORMULA = COMPUTING_CONCEPTS.CYC.formula;
/** Round half away from zero to cents, like the LN4 Round(x, 2) of the payroll. */
const roundCents = (value: bigint): bigint =>
  ((value + (value < zero ? -cent : cent) / BigInt(2)) / cent) * cent;
function automaticExpected(
  current: Snapshot,
  rows: number[],
  metric: Metric,
  period: string,
  unitsAccepted = false,
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
  const price = person.price,
    semester = price?.semester?.find((item) => item.order === order);
  const averageThird =
    order === 3 && automatic.price?.averageThird === true && !!price && !price.issue;
  const averageSemester =
    automatic.price?.averageSemester?.includes(order) === true && !!semester && !price?.issue;
  const headers = automatic.price?.formula ?? CYC_FORMULA,
    formulaName =
      JSON.stringify(headers) === JSON.stringify(CYC_FORMULA)
        ? "Salario Base + Complemento Experiencia + Complemento Adaptación Individualizado"
        : headers.join(" + ");
  const parts = headers.map((header) => payroll(current, rows, { ...metric, header }));
  const formula =
    headers.length && parts.every((part) => part.value !== null)
      ? parts.reduce((sum, part) => sum + (part.value ?? zero), zero)
      : null;
  const formulaEvidence = parts.flatMap((part) => part.evidence);
  const incomplete = () =>
    missing(
      headers.length
        ? "Componentes de la extra incompletos."
        : "Los conceptos que computan para pagas (CSP_IPE_*) no coinciden con la configuración verificada de la sociedad.",
      evidence,
    );
  const total = decimal(price?.total);
  // Meta4's own price of the month must be the report concepts: guards concepts without column.
  const priceMismatch = () =>
    total !== null && formula !== null && total !== formula
      ? missing(
          `El precio de extras de Meta4 del mes (${textDecimal(total)}) no es ${formulaName} (${textDecimal(formula)}); revisar los conceptos que computan para pagas o un mes incompleto.`,
          evidence,
        )
      : null;
  const paid = payroll(current, rows, metric).value;
  // SSP_PAGA_EXTRA_n RULE111: average monthly price of the accrual window, the current month
  // at SSP_TOTAL_P_PAGAS (the report concepts) and, for the third (10/2026), the rest projected.
  const average = (): Value | bigint => {
    const history = order === 3 ? price?.history : semester?.history;
    if (!history || total === null)
      return missing(`Precios mensuales de la extra ${order} incompletos en PeopleNet.`, evidence);
    if (formula === null) return incomplete();
    const mismatch = priceMismatch();
    if (mismatch) return mismatch;
    const projected = order === 3 ? (price?.projected ?? 0) : 0;
    const months = BigInt(history.months + 1 + projected);
    return ((decimal(history.prices) ?? zero) + total * BigInt(1 + projected)) / months;
  };
  const averageReason = (value: bigint, units: string) =>
    order === 3
      ? `Unidades (${units}) × precio medio del devengo ${textDecimal(roundCents(value))} (regla SSP_PAGA_EXTRA_3 de 10/2026: ${price?.history?.months ?? 0} meses cerrados, el actual a ${formulaName} y ${price?.projected ?? 0} proyectados).`
      : `Unidades (${units}) × precio medio del semestre ${textDecimal(roundCents(value))} (regla SSP_PAGA_EXTRA_${order} RULE111: ${semester?.history?.months ?? 0} meses cerrados y el actual a ${formulaName}).`;
  const closing = automatic.price?.closing?.includes(order) === true;
  const notDue = (): Value =>
    // Meta4 recalculates an extra in the last month of its accrual (RULE111 "(*1)").
    closing && paid !== null && paid !== zero
      ? missing(
          `Abono o regularización de la extra ${order} en el mes de cierre de su devengo (Meta4 la recalcula al final del devengo); regla de regularización no reproducida.`,
          evidence,
        )
      : {
          value: zero,
          reason:
            "No corresponde abono separado de esta extra en la paga seleccionada según su configuración.",
          evidence,
        };
  if (!extra || !extra.due) return notDue();
  if (extra.prorated) {
    // June/December extra prorated from a date inside the semester: the earlier days are paid
    // apart at the average price of those months, over 180 days (no units stored by Meta4).
    if (averageSemester && semester?.switchDays && semester.beforeSwitch?.months) {
      const before = semester.beforeSwitch;
      const value = roundCents(
        ((decimal(before.prices) ?? zero) * BigInt(semester.switchDays)) /
          BigInt(before.months * 180),
      );
      if (paid !== null && magnitude(paid - value) <= cent)
        return {
          value,
          reason: `Pasó a prorrateada durante el semestre; parte no prorrateada: ${semester.switchDays}/180 días × precio medio de los ${before.months} meses previos (regla SSP_PAGA_EXTRA_${order} RULE111).`,
          evidence,
        };
      return missing(
        `Pasó a prorrateada durante el semestre: ${semester.switchDays}/180 días × precio medio de los meses previos dan ${textDecimal(value)}; el importe difiere (posibles días descontados por absentismo); devengo sin acreditar.`,
        evidence,
      );
    }
    // Prorated from a date inside the accrual year: the earlier months are paid apart.
    if (averageThird && price?.switchUnits) {
      const units = unitsAccepted ? extra.units : price.switchUnits;
      if (!unitsAccepted && decimal(extra.units) !== decimal(price.switchUnits))
        return missing(
          `Pasó a prorrateada durante el año: los meses previos dan ${price.switchUnits} unidades y Meta4 calcula ${extra.units ?? "sin valor"} (posibles días que descuenta el convenio); devengo sin acreditar.`,
          evidence,
        );
      const value = average();
      if (typeof value !== "bigint") return value;
      return {
        value: roundCents(multiply(value, decimal(units) ?? zero)),
        reason: `Pasó a prorrateada durante el año; parte no prorrateada: ${averageReason(value, units ?? "")}${unitsAccepted && decimal(units) !== decimal(price.switchUnits) ? ` Unidades de Meta4 aceptadas por RRHH (los meses previos dan ${price.switchUnits}).` : ""}`,
        evidence: [...evidence, ...formulaEvidence],
      };
    }
    return notDue();
  }
  if (price && !price.issue && price.zero.includes(order))
    return {
      value: zero,
      reason: `Precio o importe de la extra ${order} fijado a 0 en PeopleNet (asignación individual SSP_P_PAGA_EX_${order} o SSP_PAGA_EXTRA_${order}).`,
      evidence,
    };
  if (price?.leaving)
    return missing(
      `Baja en el mes: RULE111 devuelve 0 y Meta4 abona la extra ${order} en el finiquito (SSP_FINIQ_PAGA_${order}); regla de finiquito no reproducida.`,
      evidence,
    );
  if (person.accrualIssue) return missing(person.accrualIssue, evidence);
  const partial = !extra.full || decimal(extra.percentage) !== decimal("100");
  if (averageThird || averageSemester) {
    const value = average();
    if (typeof value !== "bigint") return value;
    if (partial) {
      // Units are payroll output: context only, a partial accrual stays pending.
      const units = decimal(extra.units);
      const holds =
        units !== null &&
        paid !== null &&
        magnitude(paid - roundCents(multiply(value, units))) <= cent;
      // Accepted units still need the amount to be units × average price: anything else is a
      // Meta4 path this control does not reproduce (e.g. February hires in June 2026).
      if (unitsAccepted && units !== null && holds)
        return {
          value: roundCents(multiply(value, units)),
          reason: `Devengo parcial con unidades de Meta4 aceptadas por RRHH: ${averageReason(value, textDecimal(units))}`,
          evidence: [...evidence, ...formulaEvidence],
        };
      return missing(
        `Devengo parcial o porcentaje distinto del 100 %: las unidades las calcula Meta4 con los días que descuenta el convenio.${units === null ? "" : holds ? ` El importe es ${averageReason(value, textDecimal(units))}` : ` El importe no es unidades × precio medio (${textDecimal(units)}).`}`,
        evidence,
      );
    }
    return {
      value: roundCents(value),
      reason: averageReason(value, "1"),
      evidence: [...evidence, ...formulaEvidence],
    };
  }
  if (partial) {
    // Context for RRHH: whether the amount is the formula × Meta4's own accrual units.
    // Units are payroll output, so they never turn a partial accrual into a match.
    const units = decimal(extra.units);
    const proportional =
      units !== null && formula !== null && paid !== null
        ? magnitude(paid - roundCents(multiply(formula, units))) <= cent
          ? ` El importe es la fórmula × unidades de devengo de Meta4 (${textDecimal(units)}).`
          : ` El importe no es la fórmula × unidades de devengo de Meta4 (${textDecimal(units)}).`
        : "";
    return missing(
      `Devengo parcial o porcentaje distinto del 100 %; regla proporcional pendiente (falta acreditar los días que descuenta el convenio).${proportional}`,
      evidence,
    );
  }
  if (formula === null) return incomplete();
  return (
    priceMismatch() ?? {
      value: formula,
      reason: `${formulaName}; devengo completo acreditado en PeopleNet.`,
      evidence: [...evidence, ...formulaEvidence],
    }
  );
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
      expected = automaticExpected(
        current,
        rows,
        metric,
        input.period,
        input.parameters.rulesConfirmed && input.parameters.extraUnitsAccepted === true,
      );
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
