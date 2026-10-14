import type { ProjectionRow, ProjectionSection } from "./types";

export const sumProjectionAmounts = (values: readonly (number | null)[]): number | null =>
  values.length && values.every((value) => value !== null)
    ? Math.round(values.reduce<number>((total, value) => total + (value ?? 0), 0) * 100) / 100
    : null;

const sectionRow = (id: string, label: string): ProjectionRow => ({
  id,
  label,
  kind: "section",
  amounts: [],
  total: null,
  subtotal: false,
});

const withTotal = (
  section: ProjectionSection,
  label = "Total",
  recalculate = false,
): ProjectionSection => {
  if (!recalculate && section.rows.some((row) => row.kind === "total"))
    return {
      ...section,
      rows: [
        ...section.rows.filter((row) => row.kind !== "total"),
        ...section.rows.filter((row) => row.kind === "total"),
      ],
    };
  const retained = recalculate ? section.rows.filter((row) => row.kind !== "total") : section.rows;
  const concepts = section.rows.filter((row) => row.kind === "concept");
  return {
    ...section,
    rows: [
      ...retained,
      {
        id: `${section.id}:total`,
        label,
        kind: "total",
        subtotal: true,
        amounts:
          concepts[0]?.amounts.map((_, index) =>
            sumProjectionAmounts(concepts.map((row) => row.amounts[index] ?? null)),
          ) ?? [],
        total: sumProjectionAmounts(concepts.map((row) => row.total)),
      },
    ],
  };
};

/** Orden y composición de processTable del portal original, sin grupos técnicos. */
export function buildProjectionTables(
  parts: ReadonlyMap<string, ProjectionSection>,
): ProjectionSection[] {
  const tables: ProjectionSection[] = [];
  const fixedRows: ProjectionRow[] = [];
  const fixedTotals: ProjectionRow[] = [];
  for (const id of ["salary", "company", "functional"]) {
    const part = parts.get(id);
    if (!part) continue;
    if (fixedRows.length && part.rows.some((row) => row.kind !== "total"))
      fixedRows.push(sectionRow(`fixed:${id}`, part.title));
    for (const row of part.rows) {
      if (row.kind === "total" && /retribuci[oó]n fija/i.test(row.label)) fixedTotals.push(row);
      else fixedRows.push(row);
    }
  }
  if (fixedRows.length || fixedTotals.length)
    tables.push({
      id: "fixed",
      title: "Salario convenio",
      layout: "pays",
      placement: "wide",
      rows: [...fixedRows, ...fixedTotals],
    });

  for (const id of [
    "variable",
    "target",
    "social",
    "meals",
    "capital",
    "premiums",
    "aid",
    "travel",
    "retirement",
    "ppse",
    "defined",
    "flexible",
    "christmas",
    "vehicle",
    "training",
  ]) {
    const part = parts.get(id);
    if (!part) continue;
    let section = part;
    if (id === "variable") section = withTotal(section, "Total Retribución variable");
    if (["capital", "premiums", "aid", "defined"].includes(id))
      section = withTotal(section, "Total", id === "premiums");
    if (id === "defined")
      section = {
        ...section,
        rows: section.rows.map((row) => ({
          ...row,
          label:
            row.label === "Aportación definida"
              ? "Aportación Compañía Último año"
              : row.label === "aportacion total"
                ? "Aportación Compañía acumulada"
                : row.label,
        })),
      };
    tables.push(section);
  }
  return tables;
}
