import { columnIndex, identity, type Metric } from "./catalogue";
import { decimal, magnitude, textDecimal } from "./decimal";
import { hash } from "./hash";
import { missing, payroll, resolveIdentity, type Value } from "./payroll-value";
import type {
  AutomaticExcess,
  AutomaticPersonResult,
  AutomaticTelework,
  Dossier,
  Finding,
  Snapshot,
} from "./types";

const zero = BigInt(0);
type Capture = AutomaticTelework | AutomaticExcess;

export function automaticCapture(current: Snapshot, metric: Metric): Capture | undefined {
  if (metric.control === "C05") return current.teleworkAutomatic;
  if (metric.control === "C11") return current.excessAutomatic;
  return undefined;
}

function captureIssue(current: Snapshot, capture: Capture, period: string): string | null {
  if (
    capture.version !== 1 ||
    capture.society !== current.society ||
    capture.period !== period ||
    capture.runHash !== hash(current.run)
  )
    return "Captura PeopleNet ausente o de otra ejecución.";
  if (
    current.run.accruedOn.slice(0, 7) !== period ||
    !current.populationConfirmed ||
    !current.run.hasData
  )
    return "Periodo, población o datos actuales sin acreditar.";
  return capture.issue ?? null;
}

/**
 * The 80/20 list of RRHH (category «teletrabajo») must agree with indicator 2.
 * A disagreement is reviewable, never hidden behind an amount that matches.
 */
function collectiveMembers(
  input: Pick<Dossier, "period" | "sources">,
  ids: Set<string>,
): { members: Set<string>; hashes: string[] } | null {
  const sources = input.sources.filter(
    (source) => source.period === input.period && source.category === "teletrabajo",
  );
  if (!sources.length) return null;
  const members = new Set<string>();
  for (const source of sources)
    for (const fact of source.facts)
      if (!fact.issue && Object.hasOwn(fact.values, "member")) {
        const id = resolveIdentity(fact.employeeId, ids);
        if (id) members.add(id);
      }
  return { members, hashes: sources.map((source) => source.hash) };
}

export function automaticFindings(
  input: Pick<Dossier, "current" | "period" | "parameters" | "sources">,
  metric: Metric,
  capture: Capture,
): Finding[] {
  const { current } = input;
  const idColumn = columnIndex(current.headers, "Id Empleado"),
    nameColumn = columnIndex(current.headers, "Apellidos y Nombres");
  const groups = new Map<string, number[]>();
  current.rows.forEach((row, index) => {
    const id = identity(row[idColumn] ?? "");
    if (id) groups.set(id, [...(groups.get(id) ?? []), index]);
  });
  const issue = captureIssue(current, capture, input.period);
  const collective =
    metric.control === "C05" ? collectiveMembers(input, new Set(groups.keys())) : null;
  const tolerance = decimal(input.parameters.tolerance) ?? zero;
  const findings: Finding[] = [];
  for (const [employeeId, rows] of groups) {
    const actual = payroll(current, rows, metric);
    const people: (AutomaticPersonResult & { indicator?: string | null })[] = capture.people.filter(
      (item) => item.employeeId === employeeId,
    );
    const evidence = people.flatMap((item) => item.evidence);
    let expected: Value;
    if (issue) expected = missing(issue);
    else if (!people.length)
      expected = missing(
        "Sin acumulado PeopleNet del mes para esta persona; no se deduce el importe.",
      );
    else if (people.some((item) => item.due === null))
      expected = missing(people.map((item) => item.reason).join(" "), evidence);
    else {
      const paid = people.map((item) => decimal(item.paid));
      // The accumulator read with the inputs must be the one behind the saved report.
      if (
        actual.value === null ||
        paid.some((value) => value === null) ||
        paid.reduce<bigint>((total, value) => total + (value ?? zero), zero) !== actual.value
      )
        expected = missing(
          "El acumulado PeopleNet y el informe guardado no tienen el mismo importe; elige la ejecución vigente o actualiza las instantáneas.",
          evidence,
        );
      else {
        expected = {
          value: people.reduce<bigint>((total, item) => total + (decimal(item.due) ?? zero), zero),
          reason: people.map((item) => item.reason).join(" "),
          evidence,
        };
        if (collective) {
          const listed = collective.members.has(employeeId);
          const eighty = people.some((item) => decimal(item.indicator) === decimal("2"));
          if (listed !== eighty)
            expected = missing(
              listed
                ? "Figura en el colectivo 80/20 del Excel de RRHH pero su indicador PeopleNet no es 2; revisar cuál es correcto."
                : "Tiene indicador 80/20 (2) en PeopleNet pero no figura en el colectivo del Excel de RRHH; revisar cuál es correcto.",
              [...evidence, ...collective.hashes],
            );
          else if (listed) expected.reason += " Coincide con el colectivo 80/20 del Excel de RRHH.";
        }
      }
    }
    const delta =
      actual.value === null || expected.value === null ? null : actual.value - expected.value;
    const record = {
      control: metric.control,
      metric: metric.id,
      employeeId,
      name: current.rows[rows[0]][nameColumn] ?? "",
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
      reason: [actual.reason, expected.reason].filter(Boolean).join(" "),
      evidence: [...actual.evidence, ...expected.evidence],
    };
    findings.push({
      ...record,
      // Same id as the source-based engine so existing reviews stay attached.
      id: hash([metric.id, employeeId]).slice(0, 24),
      fingerprint: hash({
        ...record,
        period: input.period,
        tolerance: textDecimal(tolerance),
        version: `${metric.control}:auto:1`,
      }),
    });
  }
  return findings;
}
