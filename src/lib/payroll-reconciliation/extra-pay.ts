import { columnIndex, identity, type Metric } from "./catalogue";
import { seniorityDate } from "./dates";
import { missing, payroll, type Value } from "./payroll-value";
import type { Parameters, Snapshot } from "./types";

/** No amount, pay calendar or contribution proration accredits a payment modality. */
export function extraPayExpected(
  current: Snapshot,
  rows: number[] | undefined,
  employeeId: string,
  period: string,
  metric: Metric,
  parameters: Parameters,
): Value {
  if (current.run.accruedOn.slice(0, 7) !== period)
    return missing("La ejecución actual no corresponde al mes del expediente.");
  if (!current.populationConfirmed || !current.run.hasData)
    return missing("La población o los datos de nómina no están acreditados.");
  const entityColumn = columnIndex(current.headers, "Id Empresa");
  const entities = new Set(
    (rows ?? []).map((row) => identity(current.rows[row][entityColumn] ?? "")),
  );
  if (entities.size !== 1 || entities.has(""))
    return missing("La empresa de esta matrícula no es inequívoca; falta acreditar su modalidad.");
  const entity = [...entities][0];
  const evidence = (current.extraPayEvidence ?? []).filter(
    (item) => item.employeeId === employeeId && item.entity === entity,
  );
  if (metric.id === "extraProrated") {
    const firstDay = `${period}-01`;
    const nextMonth = new Date(`${firstDay}T00:00:00Z`);
    nextMonth.setUTCMonth(nextMonth.getUTCMonth() + 1);
    nextMonth.setUTCDate(0);
    const lastDay = nextMonth.toISOString().slice(0, 10);
    const [item] = evidence;
    if (
      evidence.length !== 1 ||
      !item ||
      !current.society ||
      item.society !== current.society ||
      item.period !== period ||
      item.rule !== "12-payments-three-prorated-extras" ||
      !item.reference.trim() ||
      !seniorityDate(item.validFrom) ||
      !seniorityDate(item.validTo) ||
      item.validFrom > firstDay ||
      item.validTo < lastDay
    )
      return missing(
        "Modalidad pendiente: PeopleNet no acredita para esta empresa, matrícula y periodo 12 pagos con tres extras prorrateadas y vigencia completa (Q06).",
      );
    const base = payroll(current, rows, { ...metric, header: "Salario Base" });
    if (base.value === null)
      return missing("Salario base de la prorrata incompleto.", base.evidence);
    return {
      value: (base.value * BigInt(3)) / BigInt(12),
      reason:
        "(Salario Base × 3) / 12; modalidad y vigencia acreditadas en configuración PeopleNet.",
      evidence: [
        ...base.evidence,
        `${item.society}:${entity}:${employeeId}:${period}:${item.validFrom}/${item.validTo}:${item.reference}`,
      ],
    };
  }
  if (
    !parameters.rulesConfirmed ||
    parameters.extraMetric !== metric.id ||
    !parameters.extraFullEmployeeIds.includes(employeeId)
  )
    return missing("Falta confirmar devengo completo individual o regla proporcional (Q06).");
  if (evidence.length)
    return missing(
      "Existe evidencia de modalidad prorrateada o contradictoria; confirmar devengo y transición (Q06).",
    );
  const parts = [
    "Salario Base",
    "Complemento Experiencia Importe",
    "Complemento Adaptación Individualizado",
  ].map((header) => payroll(current, rows, { ...metric, header }));
  return parts.every((part) => part.value !== null)
    ? {
        value: parts.reduce((sum, part) => sum + (part.value ?? BigInt(0)), BigInt(0)),
        reason: "Devengo completo declarado para esta persona y paga.",
        evidence: parts.flatMap((part) => part.evidence),
      }
    : missing(
        "Componentes de la extra incompletos.",
        parts.flatMap((part) => part.evidence),
      );
}
