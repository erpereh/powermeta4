import type { ProjectionRow, ProjectionSection } from "./types";

export const sumProjectionAmounts = (values: readonly (number | null)[]): number | null =>
  values.length && values.every((value) => value !== null)
    ? Math.round(values.reduce<number>((total, value) => total + (value ?? 0), 0) * 100) / 100
    : null;

/** Filas de cada bloque `CSP_ID_GRUPO`/`CSP_ID_SUBGR`, en el orden de `CSP_ORDEN`. */
export type ProjectionBlocks = Readonly<
  Record<
    | "salary"
    | "company"
    | "functional"
    | "variable"
    | "target"
    | "social"
    | "aid"
    | "capital"
    | "retirement"
    | "ppse"
    | "defined"
    | "flexibleAnnual"
    | "training"
    | "species"
    | "travel"
    | "meals"
    | "flexible"
    | "quinquennial",
    readonly ProjectionRow[]
  >
>;

type Totals = { amounts: readonly (number | null)[]; total: number | null };

/** Valores que el JSON de `CSP_PROYECCIONES_JSON.CARGA` calcula aparte de las filas. */
export type ProjectionTableExtras = {
  fixedTotal: Totals;
  variableTotal: Totals;
  /** RD/RTV valorado en la paga real (`pay`). */
  targets: readonly ProjectionRow[];
  /** RI/SG y RI/AYD valorados en la primera paga con importe. */
  capital: readonly ProjectionRow[];
  aid: readonly ProjectionRow[];
  ppse: { ordinary: number; extra: number; ordinaryAccumulated: number; extraAccumulated: number };
  defined: { last: number; accumulated: number };
  /** «Acciones GCO» de RI/RFA, que el JSON añade a la retribución flexible. */
  flexibleExtra: readonly ProjectionRow[];
};

const round = (value: number) => Math.round(value * 100) / 100;

const sectionRow = (id: string, label: string): ProjectionRow => ({
  id,
  label,
  kind: "section",
  amounts: [],
  total: null,
  subtotal: false,
});

const totalRow = (
  id: string,
  label: string,
  amounts: readonly (number | null)[],
  total: number | null,
): ProjectionRow => ({
  id,
  label,
  kind: "total",
  amounts,
  total,
  subtotal: true,
});

/** Total de una tabla anual: el JSON suma los importes conocidos (`SUMPAY`, `totti`). */
const annualTotal = (id: string, rows: readonly ProjectionRow[]): ProjectionRow =>
  totalRow(
    `${id}:total`,
    "Total",
    [],
    rows.some((row) => row.total !== null)
      ? round(rows.reduce((total, row) => total + (row.total ?? 0), 0))
      : null,
  );

const annual = (row: ProjectionRow): ProjectionRow => ({ ...row, amounts: [] });

/**
 * Celdas de paga como `getRows`/`getRowsTot` del original: una paga vacía vale 0 y
 * los conceptos se pintan en valor absoluto (`pays[i] < 0 ? pays[i] * -1`).
 * `getTable` también pone en absoluto el total; `pushRow` y `pushRowTot`, no.
 */
const payRow = (row: ProjectionRow, absoluteTotal: boolean): ProjectionRow => ({
  ...row,
  amounts: row.amounts.map((value) => Math.abs(value ?? 0)),
  total: absoluteTotal && row.total !== null ? Math.abs(row.total) : row.total,
});
const tableRows = (rows: readonly ProjectionRow[]) => rows.map((row) => payRow(row, true));
const pushedRows = (rows: readonly ProjectionRow[]) => rows.map((row) => payRow(row, false));
const totalAmounts = (totals: Totals) => totals.amounts.map((value) => value ?? 0);

/** Orden y composición de `processTable` (proyecciones/js/script.js) sobre los bloques de la persona. */
export function buildProjectionTables(
  blocks: ProjectionBlocks,
  extras: ProjectionTableExtras,
): ProjectionSection[] {
  const tables: ProjectionSection[] = [];
  const push = (
    section: Omit<ProjectionSection, "placement"> & { placement?: ProjectionSection["placement"] },
  ) => {
    if (section.rows.length)
      tables.push({
        placement: section.layout === "pays" ? "wide" : "compact",
        ...section,
      });
  };

  // fixed_remuneration: salario convenio, complementos compañía y funcional con su total.
  const fixedParts = [
    ["salary", "Salario convenio"],
    ["company", "Complementos compañía"],
    ["functional", "Complemento funcional"],
  ] as const;
  const present = fixedParts.filter(([id]) => blocks[id].length);
  if (present.length) {
    const rows: ProjectionRow[] = [];
    // salario_convenio va por getTable; comp_org y comp_funcional, por pushRow.
    present.forEach(([id, title], index) => {
      if (index > 0) rows.push(sectionRow(`fixed:${id}`, title));
      rows.push(...(id === "salary" ? tableRows(blocks[id]) : pushedRows(blocks[id])));
    });
    rows.push(
      totalRow(
        "fixed:total",
        "Total Retribución fija",
        totalAmounts(extras.fixedTotal),
        extras.fixedTotal.total,
      ),
    );
    push({ id: "fixed", title: present[0][1], layout: "pays", rows });
  }

  if (blocks.variable.length)
    push({
      id: "variable",
      title: "Retribución variable",
      layout: "pays",
      rows: [
        ...tableRows(blocks.variable),
        ...pushedRows([
          totalRow(
            "variable:total",
            "Total Retribución variable",
            extras.variableTotal.amounts,
            extras.variableTotal.total,
          ),
        ]),
      ],
    });

  // getTableTotal: solo importes positivos en la paga real.
  push({
    id: "target",
    title: "Base de referencia de retribución variable",
    layout: "annual",
    rows: extras.targets.filter((row) => (row.total ?? 0) > 0),
  });
  push({ id: "social", title: "Seguridad Social", layout: "pays", rows: tableRows(blocks.social) });
  push({
    id: "meals",
    title: "Manutención por jornada partida",
    layout: "pays",
    rows: tableRows(blocks.meals),
  });
  if (extras.capital.length)
    push({
      id: "capital",
      title: "Capitales de pólizas de seguros",
      layout: "annual",
      placement: "benefits",
      rows: [...extras.capital, annualTotal("capital", extras.capital)],
    });
  // val_especie: orden inverso y sin Navidad, salud ni vehículo, que tienen su propio uso.
  const premiums = [...blocks.species]
    .reverse()
    .filter(
      (row) =>
        !["Lote Navidad", "Seguro Salud Empresa", "Vehículo compañía"].includes(row.label.trim()),
    )
    .map(annual);
  if (blocks.species.length)
    push({
      id: "premiums",
      title: "Primas de seguros",
      layout: "annual",
      placement: "benefits",
      rows: [...premiums, annualTotal("premiums", premiums)],
    });
  if (extras.aid.length)
    push({
      id: "aid",
      title: "Ayudas",
      layout: "annual",
      placement: "benefits",
      rows: [...extras.aid, annualTotal("aid", extras.aid)],
    });
  push({
    id: "travel",
    title: "Dietas y kilometrajes",
    layout: "pays",
    rows: tableRows(blocks.travel),
  });
  // compro_jub: solo el último registro, con su TOTAL.
  const retirement = blocks.retirement.at(-1);
  if (retirement)
    push({
      id: "retirement",
      title: "Compromiso a la jubilación",
      layout: "annual",
      rows: [annual(retirement)],
    });
  if (blocks.ppse.length) {
    const { ordinary, extra, ordinaryAccumulated, extraAccumulated } = extras.ppse;
    const ordinaryTotal = round(ordinary + ordinaryAccumulated);
    const extraTotal = round(extra + extraAccumulated);
    push({
      id: "ppse",
      title: "PPSE",
      layout: "ppse",
      rows: [
        {
          id: "ppse:last",
          kind: "concept",
          label: "Aportación Compañía Último año",
          amounts: [ordinary, extra],
          total: round(ordinary + extra),
          subtotal: false,
        },
        {
          id: "ppse:accumulated",
          kind: "concept",
          label: "Aportación Compañía acumulada",
          amounts: [ordinaryAccumulated, extraAccumulated],
          total: round(ordinaryAccumulated + extraAccumulated),
          subtotal: false,
        },
        totalRow(
          "ppse:total",
          "Total",
          [ordinaryTotal, extraTotal],
          round(ordinaryTotal + extraTotal),
        ),
      ],
    });
  }
  if (blocks.defined.length) {
    const { last, accumulated } = extras.defined;
    push({
      id: "defined",
      title: "Seguro aportación definida convenio colectivo",
      layout: "annual",
      rows: [
        {
          ...sectionRow("defined:last", "Aportación Compañía Último año"),
          kind: "concept",
          total: last,
        },
        {
          ...sectionRow("defined:accumulated", "Aportación Compañía acumulada"),
          kind: "concept",
          total: accumulated,
        },
        totalRow("defined:total", "Total", [], round(last + accumulated)),
      ],
    });
  }
  // ret_flex sin «Manutención», que solo alimenta la gráfica de compensación.
  push({
    id: "flexible",
    title: "Retribución flexible",
    layout: "pays",
    rows: tableRows([
      ...blocks.flexible.filter((row) => row.label.trim() !== "Manutención"),
      ...extras.flexibleExtra,
    ]),
  });
  const christmas = blocks.species.filter((row) => row.label.trim() === "Lote Navidad");
  push({
    id: "christmas",
    title: "Lote de Navidad",
    layout: "annual",
    rows: christmas.map(annual),
  });
  const vehicle = blocks.species.filter((row) => row.label.trim() === "Vehículo compañía");
  push({ id: "vehicle", title: "Vehículo compañía", layout: "annual", rows: vehicle.map(annual) });
  if (blocks.training.length) {
    const training = blocks.training.map(annual);
    push({
      id: "training",
      title: "Inversión individual en formación",
      layout: "annual",
      rows: [...training, annualTotal("training", training)],
    });
  }
  return tables;
}
