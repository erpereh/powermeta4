import { columnIndex, CONTROL_NAMES, identity, METRICS, type Metric } from "./catalogue";
import { decimal, divide, magnitude, multiply, textDecimal } from "./decimal";
import { hash } from "./hash";
import type {
  Annotation,
  Dossier,
  Finding,
  Parameters,
  ReconciliationResult,
  Snapshot,
  Source,
  SourceFact,
} from "./types";

export const ENGINE_VERSION = "1.0.0";
type Value = { value: bigint | null; reason: string; evidence: string[] };
const missing = (reason: string, evidence: string[] = []): Value => ({
  value: null,
  reason,
  evidence,
});
const zero = BigInt(0);

function population(data: Snapshot | null): Map<string, { rows: number[]; name: string }> {
  const people = new Map<string, { rows: number[]; name: string }>();
  if (!data) return people;
  const idColumn = columnIndex(data.headers, "Id Empleado");
  const nameColumn = columnIndex(data.headers, "Apellidos y Nombres");
  if (idColumn < 0) return people;
  data.rows.forEach((row, index) => {
    const id = identity(row[idColumn] ?? "");
    if (!id) return;
    const existing = people.get(id) ?? { rows: [], name: row[nameColumn] ?? "" };
    existing.rows.push(index);
    people.set(id, existing);
  });
  return people;
}

function payroll(data: Snapshot | null, rows: number[] | undefined, metric: Metric): Value {
  if (!data) return missing("Falta ejecución anterior.");
  if (!rows?.length)
    return missing("Persona ausente de esta ejecución; no acredita alta o baja laboral.");
  const index = columnIndex(data.headers, metric.header, metric.occurrence);
  if (index < 0)
    return missing(`Columna ausente: ${metric.header} (ocurrencia ${metric.occurrence ?? 1}).`);
  const evidence = rows.map(
    (row) => `${data.run.reportId}@${data.run.runAt}:fila ${row + 2}, columna ${index + 1}`,
  );
  const values = rows.map((row) => decimal(data.rows[row][index]));
  if (values.some((value) => value === null))
    return missing("Importe vacío, inválido o no acreditado en nómina.", evidence);
  const valid = values.filter((value): value is bigint => value !== null);
  if (metric.percentage && new Set(valid.map(String)).size > 1)
    return missing("Porcentajes distintos entre tramos; no se suman.", evidence);
  return {
    value: metric.percentage ? valid[0] : valid.reduce((sum, value) => sum + value, zero),
    reason: "",
    evidence,
  };
}

/** Only resolve numeric aliases if the authorized payroll population is unambiguous. */
export function resolveIdentity(raw: string, ids: Set<string>): string | null {
  const id = identity(raw);
  if (ids.has(id)) return id;
  if (!/^\d+$/.test(id)) return null;
  const alias = id.replace(/^0+(?=\d)/, "");
  const candidates = [...ids].filter(
    (candidate) => /^\d+$/.test(candidate) && candidate.replace(/^0+(?=\d)/, "") === alias,
  );
  return candidates.length === 1 ? candidates[0] : null;
}

function factValue(fact: SourceFact, metric: Metric, parameters: Parameters): bigint | null {
  if (fact.issue) return null;
  const direct = decimal(fact.values[metric.id]);
  if (direct !== null) return direct;
  if (!parameters.rulesConfirmed) return null;
  if (metric.id === "telework") {
    const rate = decimal(parameters.teleworkRate),
      days = decimal(parameters.teleworkDays);
    return rate !== null && days !== null ? multiply(rate, days) : null;
  }
  if (metric.id === "meal") {
    const rate = decimal(parameters.mealRate),
      days = decimal(parameters.mealDays),
      absence = decimal(fact.values.absences);
    return rate !== null && days !== null && absence !== null
      ? multiply(days - absence, rate)
      : null;
  }
  if (metric.control === "C10") {
    const net = decimal(fact.values.net),
      rate = decimal(parameters.cardRate),
      base = decimal(parameters.cardBase);
    if (net === null || rate === null || base === null || rate <= zero || base <= zero) return null;
    const subjectSigned = multiply(divide(net, rate) - divide(net, base), base);
    return metric.id === "cardExempt" ? net + subjectSigned : -subjectSigned;
  }
  return null;
}

export function reconcile(
  input: Pick<Dossier, "period" | "current" | "previous" | "sources" | "parameters">,
): ReconciliationResult {
  const { current, previous, parameters } = input;
  const currentPeople = population(current),
    previousPeople = population(previous);
  const ids = new Set([...currentPeople.keys(), ...previousPeople.keys()]);
  const diagnostics = input.sources.flatMap((source) =>
    source.diagnostics.map((message) => `${source.category}: ${message}`),
  );
  if (!currentPeople.size)
    diagnostics.push(
      "El informe no contiene una identidad utilizable; no se pueden reconciliar personas.",
    );
  if (!current.populationConfirmed || (previous && !previous.populationConfirmed))
    diagnostics.push("El alcance de población no está confirmado.");
  if (columnIndex(current.headers, "Porcentaje I.R.P.F.", 2) >= 0) {
    const first = columnIndex(current.headers, "Porcentaje I.R.P.F."),
      second = columnIndex(current.headers, "Porcentaje I.R.P.F.", 2);
    const different = current.rows.filter((row) => row[first] !== row[second]).length;
    if (different)
      diagnostics.push(
        `IRPF: ${different} filas con ocurrencias distintas; se usa la primera sin sumar porcentajes.`,
      );
  }
  const entityColumn = columnIndex(current.headers, "Id Empresa");
  const entities = new Set(
    current.rows.map((row) => identity(row[entityColumn] ?? "")).filter(Boolean),
  );
  const sources = input.sources.filter((source) => source.period === input.period);
  if (
    sources.some((source) => source.category === "recarga") !==
    sources.some((source) => source.category === "eurest")
  )
    diagnostics.push(
      "Tarjeta comida: falta una de las dos fuentes (recarga/Eurest). Solo se calcula la cobertura disponible.",
    );
  const sourceFacts = (source: Source): SourceFact[] =>
    source.facts.filter((fact) => !fact.entity || entities.has(fact.entity));
  for (const source of sources) {
    const excluded = source.facts.length - sourceFacts(source).length;
    if (excluded)
      diagnostics.push(
        `${source.category}: ${excluded} filas de entidad ajena o no acreditada excluidas.`,
      );
  }
  const findings: Finding[] = [];
  for (const metric of METRICS) {
    const relevant = sources.filter((source) =>
      metric.control === "C10"
        ? ["recarga", "eurest"].includes(source.category)
        : source.category === metric.category,
    );
    const facts = relevant.flatMap((source) =>
      sourceFacts(source)
        .filter((fact) =>
          metric.control === "C13"
            ? Object.hasOwn(fact.values, "anniversary")
            : Object.hasOwn(fact.values, metric.id) ||
              (metric.id === "telework" && Object.hasOwn(fact.values, "member")) ||
              (metric.id === "meal" && Object.hasOwn(fact.values, "absences")) ||
              (metric.control === "C10" && Object.hasOwn(fact.values, "net")),
        )
        .map((fact) => ({
          source,
          fact,
          id:
            resolveIdentity(fact.employeeId, ids) ?? `sin-vincular:${source.id}:${fact.reference}`,
        })),
    );
    const overrides = sources
      .filter((source) => source.category === "excepciones")
      .flatMap((source) =>
        sourceFacts(source)
          .filter((fact) => Object.hasOwn(fact.values, metric.id))
          .map((fact) => ({
            source,
            fact,
            id:
              resolveIdentity(fact.employeeId, ids) ??
              `sin-vincular:${source.id}:${fact.reference}`,
          })),
      );
    const people = new Set(
      metric.monthly
        ? ids
        : [
            ...currentPeople.keys(),
            ...facts.map((item) => item.id),
            ...overrides.map((item) => item.id),
          ],
    );
    for (const id of people) {
      const actual = payroll(current, currentPeople.get(id)?.rows, metric);
      let expected: Value;
      let absentSource = false;
      if (metric.monthly) expected = payroll(previous, previousPeople.get(id)?.rows, metric);
      else {
        const matched = facts.filter((item) => item.id === id);
        const exception = overrides.filter((item) => item.id === id);
        if (exception.length) {
          const item = exception[0];
          expected =
            exception.length === 1 && !item.fact.issue
              ? {
                  value: decimal(item.fact.values[metric.id]),
                  reason: `Excepción declarada: ${item.fact.reason ?? ""} · referencia ${item.fact.documentReference ?? "pendiente"}.`,
                  evidence: [
                    `${item.source.hash}:${item.source.accrualPeriod ?? item.source.period}:${item.fact.reference}`,
                  ],
                }
              : missing("Excepciones concurrentes o inválidas.");
        } else if (metric.control === "C04") {
          if (
            parameters.rulesConfirmed &&
            parameters.extraMetric === metric.id &&
            parameters.extraFullEmployeeIds.includes(id)
          ) {
            const parts = [
              "Salario Base",
              "Complemento Experiencia Importe",
              "Complemento Adaptación Individualizado",
            ].map((header) => payroll(current, currentPeople.get(id)?.rows, { ...metric, header }));
            expected = parts.every((part) => part.value !== null)
              ? {
                  value: parts.reduce((sum, part) => sum + (part.value ?? zero), zero),
                  reason: "Devengo completo declarado para esta persona y paga.",
                  evidence: parts.flatMap((part) => part.evidence),
                }
              : missing("Componentes de la extra incompletos.");
          } else
            expected = missing(
              "Falta confirmar devengo completo individual o regla proporcional (Q06).",
            );
        } else if (!relevant.length) {
          absentSource = true;
          expected = missing("Falta fuente independiente para este control.");
        } else if (!matched.length) {
          expected =
            relevant.every((source) => source.complete && !source.diagnostics.length) &&
            metric.control !== "C13"
              ? {
                  value: zero,
                  reason: "Fuera del listado cuya cobertura completa se ha confirmado.",
                  evidence: relevant.map((source) => source.hash),
                }
              : missing("Sin registro en fuente parcial o con incidencias; no equivale a cero.");
        } else {
          const evidence = matched.map(
            (item) =>
              `${item.source.hash}:devengo ${item.source.accrualPeriod ?? item.source.period}${item.source.windowStart ? ` (${item.source.windowStart}/${item.source.windowEnd ?? "pendiente"})` : ""}:${item.fact.reference}`,
          );
          if (metric.control === "C13") {
            const candidates = matched.filter((item) => item.fact.values.anniversary === metric.id);
            const base = payroll(current, currentPeople.get(id)?.rows, {
              ...metric,
              header: "Salario Base",
            });
            expected =
              candidates.length === 1 &&
              !candidates[0].fact.issue &&
              parameters.rulesConfirmed &&
              parameters.anniversaryFullBase
                ? {
                    ...base,
                    reason: "Elegibilidad y base completa declaradas para el periodo.",
                    evidence: [...evidence, ...base.evidence],
                  }
                : missing(
                    "Falta confirmar elegibilidad/base por entidad o no corresponde este aniversario (Q12).",
                    evidence,
                  );
          } else {
            const values = matched.map((item) => factValue(item.fact, metric, parameters));
            const conflicts =
              matched.length > 1 && !["C06", "C07", "C11", "C12"].includes(metric.control);
            expected = conflicts
              ? missing(
                  "Duplicado o solape de fuentes: resolver procedencia antes de sumar.",
                  evidence,
                )
              : values.some((value) => value === null)
                ? missing(
                    matched.find((item) => item.fact.issue)?.fact.issue ??
                      "Faltan valores/reglas de periodo confirmados; no se usa la cache del libro.",
                    evidence,
                  )
                : {
                    value: values.reduce<bigint>((sum, value) => sum + (value ?? zero), zero),
                    reason:
                      metric.control === "C14"
                        ? "Columna mensual PPSE; semántica/calendario pendientes de validación Q13."
                        : "",
                    evidence,
                  };
          }
        }
      }
      const comparable = actual.value !== null && expected.value !== null;
      const delta = comparable ? actual.value! - expected.value! : null;
      const tolerance =
        decimal(metric.percentage ? parameters.percentageTolerance : parameters.tolerance) ?? zero;
      const evidence = [...actual.evidence, ...expected.evidence];
      const status: Finding["status"] = comparable
        ? magnitude(delta!) <= tolerance
          ? "Coincide"
          : "Con diferencia"
        : absentSource
          ? "Falta fuente"
          : "No comparable";
      const record = {
        control: metric.control,
        metric: metric.id,
        employeeId: id.startsWith("sin-vincular:") ? "Sin vincular" : id,
        name: currentPeople.get(id)?.name ?? previousPeople.get(id)?.name ?? "",
        actual: actual.value === null ? null : textDecimal(actual.value),
        expected: expected.value === null ? null : textDecimal(expected.value),
        delta: delta === null ? null : textDecimal(delta),
        unit: metric.percentage ? ("pp" as const) : ("EUR" as const),
        status,
        reason: [actual.reason, expected.reason].filter(Boolean).join(" "),
        evidence,
      };
      const findingId = hash([metric.id, id]).slice(0, 24);
      findings.push({
        ...record,
        id: findingId,
        fingerprint: hash({
          ...record,
          ruleContext:
            metric.control === "C05"
              ? [parameters.rulesConfirmed, parameters.teleworkRate, parameters.teleworkDays]
              : metric.control === "C09"
                ? [parameters.rulesConfirmed, parameters.mealRate, parameters.mealDays]
                : metric.control === "C10"
                  ? [parameters.rulesConfirmed, parameters.cardRate, parameters.cardBase]
                  : metric.control === "C04"
                    ? [
                        parameters.rulesConfirmed,
                        parameters.extraMetric,
                        parameters.extraFullEmployeeIds.includes(id),
                      ]
                    : metric.control === "C13"
                      ? [parameters.rulesConfirmed, parameters.anniversaryFullBase]
                      : [],
          tolerance: textDecimal(tolerance),
          version: ENGINE_VERSION,
        }),
      });
    }
  }
  const controls = CONTROL_NAMES.map((name, index) => {
    const id = `C${String(index + 1).padStart(2, "0")}` as const;
    const rows = findings.filter((finding) => finding.control === id);
    return {
      id,
      name,
      total: rows.length,
      matches: rows.filter((row) => row.status === "Coincide").length,
      differences: rows.filter((row) => row.status === "Con diferencia").length,
      pending: rows.filter((row) => row.status === "Falta fuente" || row.status === "No comparable")
        .length,
    };
  });
  return {
    engineVersion: ENGINE_VERSION,
    findings,
    diagnostics,
    controls,
    fingerprint: hash({
      findings,
      diagnostics,
      parameters,
      period: input.period,
      version: ENGINE_VERSION,
    }),
  };
}

export function retainAnnotations(
  annotations: Annotation[],
  result: ReconciliationResult,
): Annotation[] {
  return annotations.map((annotation) => ({
    ...annotation,
    invalidated:
      result.findings.find((finding) => finding.id === annotation.findingId)?.fingerprint !==
      annotation.fingerprint,
  }));
}
