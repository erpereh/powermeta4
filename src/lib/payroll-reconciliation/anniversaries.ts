import { columnIndex, identity, type Metric } from "./catalogue";
import { anniversaryDateIssue, anniversaryMetric, seniorityDate } from "./dates";
import { decimal, magnitude, textDecimal } from "./decimal";
import { hash } from "./hash";
import { missing, payroll, resolveIdentity, type Value } from "./payroll-value";
import type { Dossier, Finding, Source, SourceFact } from "./types";

type Person = { employeeId: string; entity: string; name: string; rows: number[] };
type Entry = { source: Source; fact: SourceFact; key: string };
const scopeKey = (entity: string, employeeId: string): string =>
  JSON.stringify([entity, employeeId]);

/** C13 alone aggregates by legal entity + textual employee ID. */
export function anniversaryFindings(
  input: Pick<Dossier, "period" | "current" | "sources" | "parameters">,
  metric: Metric,
): Finding[] {
  const { current, period, parameters } = input;
  const people = new Map<string, Person>();
  const idColumn = columnIndex(current.headers, "Id Empleado");
  const entityColumn = columnIndex(current.headers, "Id Empresa");
  const nameColumn = columnIndex(current.headers, "Apellidos y Nombres");
  const seniorityColumn = columnIndex(current.headers, "Fecha de Antigüedad");
  current.rows.forEach((row, index) => {
    const employeeId = identity(row[idColumn] ?? "");
    if (!employeeId) return;
    const entity = identity(row[entityColumn] ?? "");
    const key = scopeKey(entity, employeeId);
    const person = people.get(key) ?? { employeeId, entity, name: row[nameColumn] ?? "", rows: [] };
    person.rows.push(index);
    people.set(key, person);
  });
  const entities = new Set([...people.values()].map((person) => person.entity).filter(Boolean));
  const idsByEntity = new Map(
    [...entities].map((entity) => [
      entity,
      new Set(
        [...people.values()]
          .filter((person) => person.entity === entity)
          .map((person) => person.employeeId),
      ),
    ]),
  );
  const relevant = input.sources.filter(
    (source) => source.period === period && source.category === "aniversarios",
  );
  const entries = (sources: Source[], exceptions: boolean): Entry[] =>
    sources.flatMap((source) =>
      source.facts.flatMap((fact, index): Entry[] => {
        if (exceptions && !Object.hasOwn(fact.values, metric.id)) return [];
        const entity = identity(fact.entity ?? "");
        if (entity && !entities.has(entity)) return [];
        const employeeId = entity
          ? resolveIdentity(fact.employeeId, idsByEntity.get(entity) ?? new Set())
          : null;
        let key = employeeId ? scopeKey(entity, employeeId) : "";
        // Existing exception templates have no entity: accept only one scoped identity.
        if (exceptions && !entity) {
          const candidates = [...people.entries()].filter(
            ([, person]) =>
              resolveIdentity(fact.employeeId, idsByEntity.get(person.entity) ?? new Set()) ===
              person.employeeId,
          );
          if (candidates.length === 1) {
            key = candidates[0][0];
          }
        }
        if (!key) {
          key = `sin-vincular:${source.id}:${index}`;
          const date = seniorityDate(fact.seniorityDate);
          if (
            exceptions ||
            !date ||
            anniversaryMetric(date, period) ||
            anniversaryDateIssue(date, period)
          )
            people.set(key, { employeeId: identity(fact.employeeId), entity, name: "", rows: [] });
        }
        return [{ source, fact, key }];
      }),
    );
  const facts = entries(relevant, false);
  const overrides = entries(
    input.sources.filter((source) => source.period === period && source.category === "excepciones"),
    true,
  );
  const coverage =
    relevant.length > 0 &&
    facts.every((entry) => !entry.key.startsWith("sin-vincular:")) &&
    relevant.every(
      (source) =>
        source.complete &&
        source.profile === "aniversarios-v2" &&
        !source.diagnostics.length &&
        source.facts.every(
          (fact) =>
            Boolean(fact.entity?.trim()) &&
            !fact.issue &&
            seniorityDate(fact.seniorityDate) !== null,
        ),
    );
  const tolerance = decimal(parameters.tolerance) ?? BigInt(0);
  return [...people.entries()].map(([key, person]): Finding => {
    const actual = payroll(current, person.rows, metric);
    const matched = facts.filter((entry) => entry.key === key);
    const exceptions = overrides.filter((entry) => entry.key === key);
    const sourceEvidence = [...matched, ...exceptions].map(
      ({ source, fact }) =>
        `${source.hash}:${period}:${fact.entity ?? person.entity}:${fact.employeeId}:${fact.seniorityDate ?? "antigüedad pendiente"}:${fact.reference}`,
    );
    const dates = person.rows.map((row) =>
      seniorityDate(current.seniorityDates?.[row] ?? current.rows[row][seniorityColumn]),
    );
    const date = dates[0];
    const due = date ? anniversaryMetric(date, period) : null;
    const dateIssue = date ? anniversaryDateIssue(date, period) : null;
    let expected: Value;
    if (!person.entity || key.startsWith("sin-vincular:")) {
      expected = missing(
        "Beneficiario sin registro de nómina o empresa/matrícula ambigua; pago y base no acreditados.",
        sourceEvidence,
      );
    } else if (
      current.run.accruedOn.slice(0, 7) !== period ||
      !current.populationConfirmed ||
      !current.run.hasData
    ) {
      expected = missing("Periodo o población de nómina sin acreditar.", sourceEvidence);
    } else if (!dates.length || dates.some((item) => !item) || new Set(dates).size !== 1) {
      expected = missing(
        "Antigüedad laboral de nómina ausente, inválida o contradictoria; actualizar la instantánea si es antigua.",
        sourceEvidence,
      );
    } else if (dateIssue) {
      expected = missing(dateIssue, sourceEvidence);
    } else if (matched.length > 1 || exceptions.length > 1) {
      expected = missing(
        "Beneficiarios o excepciones duplicados; confirmar identidad y procedencia.",
        sourceEvidence,
      );
    } else if (
      matched.some(
        ({ fact }) =>
          fact.issue ||
          !seniorityDate(fact.seniorityDate) ||
          seniorityDate(fact.seniorityDate) !== date,
      )
    ) {
      expected = missing(
        "Antigüedad del listado ausente, inválida o distinta de nómina; elegibilidad pendiente.",
        sourceEvidence,
      );
    } else if (!relevant.length && !exceptions.length) {
      expected = missing("Falta fuente independiente de beneficiarios para este control.");
    } else if (!parameters.rulesConfirmed || !parameters.anniversaryFullBase) {
      expected = missing(
        "Falta confirmar elegibilidad, mes de pago y salario base aplicable (Q12).",
        sourceEvidence,
      );
    } else if (due === metric.id && (matched.length === 1 || exceptions.length === 1)) {
      const exception = exceptions[0];
      expected = exception
        ? exception.fact.issue
          ? missing("Excepción inválida.", sourceEvidence)
          : {
              value: decimal(exception.fact.values[metric.id]),
              reason: `Excepción declarada: ${exception.fact.reason ?? ""} · referencia ${exception.fact.documentReference ?? "pendiente"}.`,
              evidence: sourceEvidence,
            }
        : payroll(current, person.rows, { ...metric, header: "Salario Base" });
      if (!exception && expected.value !== null)
        expected.reason =
          "Aniversario laboral, elegibilidad y salario base completo acreditados para esta empresa y periodo.";
      expected.evidence = [...sourceEvidence, ...expected.evidence];
      if (actual.value === BigInt(0) && expected.value !== null && expected.value !== BigInt(0))
        expected.reason += " Pago faltante: nómina declara cero explícito.";
      if (actual.value === null)
        expected.reason += " Pago no acreditado: falta registro o importe interpretable.";
    } else if (due === metric.id && !matched.length && actual.value === BigInt(0)) {
      expected = missing(
        "Cumple el aniversario laboral, pero falta acreditar su inclusión como beneficiario; elegibilidad pendiente.",
        sourceEvidence,
      );
    } else if (coverage) {
      expected = {
        value: BigInt(0),
        reason:
          "Sin beneficiario acreditado para este aniversario en el periodo; listado exhaustivo confirmado. Un pago fuera del listado requiere revisión, no acredita por sí solo que sea indebido.",
        evidence: [...sourceEvidence, ...relevant.map((source) => source.hash)],
      };
    } else {
      expected = missing(
        "Sin beneficiario acreditado para este aniversario; fuente parcial o con incidencias. No permite concluir que un pago sea indebido.",
        sourceEvidence,
      );
    }
    const delta =
      actual.value !== null && expected.value !== null ? actual.value - expected.value : null;
    const status: Finding["status"] =
      delta !== null
        ? magnitude(delta) <= tolerance
          ? "Coincide"
          : "Con diferencia"
        : !relevant.length && !exceptions.length
          ? "Falta fuente"
          : "No comparable";
    const record = {
      control: metric.control,
      metric: metric.id,
      employeeId: person.employeeId,
      entity: person.entity,
      name: person.name,
      actual: actual.value === null ? null : textDecimal(actual.value),
      expected: expected.value === null ? null : textDecimal(expected.value),
      delta: delta === null ? null : textDecimal(delta),
      unit: "EUR" as const,
      status,
      reason: `Empresa ${person.entity || "sin acreditar"}. ${[actual.reason, expected.reason].filter(Boolean).join(" ")}`,
      evidence: [
        ...actual.evidence,
        ...expected.evidence,
        ...dates.map((item) => `Antigüedad nómina: ${item ?? "pendiente"}`),
      ],
    };
    return {
      ...record,
      id: hash([metric.id, key]).slice(0, 24),
      fingerprint: hash({
        ...record,
        coverage,
        ruleContext: [parameters.rulesConfirmed, parameters.anniversaryFullBase],
        tolerance: textDecimal(tolerance),
        version: "C13:2",
      }),
    };
  });
}
