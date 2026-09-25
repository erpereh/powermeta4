import type { PeopleNetSqlValue } from "@/lib/peoplenet/employees";
import type { PayrollReceiptLine } from "@/types/payroll-receipt";

export type PeopleNetRow = Record<string, PeopleNetSqlValue>;

export type AccrualLevel = "period" | "role";

/** Alias de la tabla física en las consultas: `B` = `M4CSP_AC_*`, `A` = `M4SCO_AC_*`. */
export type AccrualTableAlias = "A" | "B";

type TemplateCell = { column: string; level: AccrualLevel };

/** Línea de la plantilla RECIBO de Meta4 ya traducida a columnas físicas. */
export type ReceiptTemplateLine = {
  rowId: string;
  concept: string;
  section: PayrollReceiptLine["section"];
  level: PayrollReceiptLine["level"];
  /** Una línea por rol y tramo (`SCO_RECORDS`/`SCO_SLICES`) en lugar del total. */
  perRecord: boolean;
  unitsFormat: PayrollReceiptLine["unitsFormat"];
  units?: TemplateCell;
  price?: TemplateCell;
  earning?: TemplateCell;
  deduction?: TemplateCell;
};

export type ReceiptTemplate = {
  lines: ReceiptTemplateLine[];
  /** Tabla de cada columna disponible por nivel; también valida los identificadores. */
  columns: Record<AccrualLevel, ReadonlyMap<string, AccrualTableAlias>>;
  /** Items de la plantilla sin columna física (calculados por el report de Meta4). */
  unresolvedItems: string[];
};

/**
 * Items que el report RECIBO calcula al imprimir y no existen en el repositorio
 * de Meta4. Equivalencia comprobada contra un recibo PDF de CYC (abril 2026).
 */
const PRINT_ITEM_COLUMNS: Readonly<Record<string, string>> = {
  CYC_RETRIB_ESPECIE_INFO: "SSP_TOT_PAGOS_ESP",
  CYC_SEG_VIDA_MES_INFO: "CSP_COT_SEG_VIDA",
  CYC_PRIM_ACC_MES_INFO: "CSP_COT_PRIMA_ACCIDENTE",
  CYC_ESPECIE_TARJETA_INFO: "CSP_I_NO_EXEN_TARJETA",
  CYC_PLAN_PENSIONES_MES_INFO: "CYC_COT_PLAN_PENSIONES",
  CYC_PLAN_PENSIONES_EX_MES_INFO: "CYC_COT_PLAN_PENSIONES_EXTRA",
  CYC_SEG_SALUD_COTIZA: "CYC_SEG_SALUD",
};

type ValueRole = "units" | "price" | "earning" | "deduction";

/** Columnas del recibo Meta4: 1 unidades, 2 precio, 3 concepto, 4 devengos, 5 retención. */
const valueRoleOfColumn = (columnId: number): ValueRole | null => {
  if (columnId === 1) return "units";
  if (columnId === 2) return "price";
  if (columnId === 4) return "earning";
  if (columnId === 5) return "deduction";
  return null;
};

const IDENTIFIER = /^[A-Za-z0-9_]+$/;

const text = (value: PeopleNetSqlValue | undefined): string =>
  value === null || value === undefined ? "" : String(value);

const levelOfObject = (object: string): AccrualLevel | null =>
  object.endsWith("_ROLE") ? "role" : object.endsWith("_PERIOD") ? "period" : null;

/** Columnas físicas de `M4CSP_AC_HR_*` / `M4SCO_AC_HR_*` (de `INFORMATION_SCHEMA`). */
export const buildAccrualColumns = (rows: readonly PeopleNetRow[]): ReceiptTemplate["columns"] => {
  const columns = { period: new Map(), role: new Map() } satisfies Record<
    AccrualLevel,
    Map<string, AccrualTableAlias>
  >;
  for (const row of rows) {
    const table = text(row.TABLE_NAME);
    const column = text(row.COLUMN_NAME);
    const level = levelOfObject(table);
    if (!level || !IDENTIFIER.test(column)) continue;
    const alias: AccrualTableAlias = table.startsWith("M4CSP_") ? "B" : "A";
    // Las claves comunes (ID_CURRENCY, SCO_ID_HR…) se leen de la tabla estándar.
    if (alias === "A" || !columns[level].has(column)) columns[level].set(column, alias);
  }
  return columns;
};

type RepositoryField = { column: string; level: AccrualLevel };

/** `M4RCH_ITEMS.ID_READ_FIELD` → `M4RDC_FIELDS.REAL_NAME`: el item no siempre se llama como su columna. */
const buildRepository = (rows: readonly PeopleNetRow[]): Map<string, RepositoryField[]> => {
  const repository = new Map<string, RepositoryField[]>();
  for (const row of rows) {
    const level = levelOfObject(text(row.ID_READ_OBJECT));
    const column = text(row.REAL_NAME).trim();
    if (!level || !column) continue;
    const item = text(row.ID_ITEM).trim();
    repository.set(item, [...(repository.get(item) ?? []), { column, level }]);
  }
  return repository;
};

const declaredLevel = (row: PeopleNetRow): AccrualLevel | null => {
  const node = text(row.SFR_ID_SOURCE_NODE);
  const ti = text(row.PC_TI);
  if (node === "SSP_RP_AC_ROLE" || ti.includes("HRROLE")) return "role";
  if (node === "SSP_RP_AC_PER" || ti.includes("HRPERIOD")) return "period";
  return null;
};

const resolveCell = (
  row: PeopleNetRow,
  columns: ReceiptTemplate["columns"],
  repository: Map<string, RepositoryField[]>,
): { cell: TemplateCell } | { unresolved: string } | null => {
  const item = (
    text(row.SFR_ID_SOURCE_ITEM) ||
    text(row.PC_ITEM) ||
    text(row.SCO_ID_PRT_ITEM)
  ).trim();
  if (!item) return null;

  const printColumn = PRINT_ITEM_COLUMNS[item];
  if (printColumn && columns.period.has(printColumn)) {
    return { cell: { column: printColumn, level: "period" } };
  }

  const level = declaredLevel(row);
  if (level && columns[level].has(item)) return { cell: { column: item, level } };

  const field = repository
    .get(item)
    ?.find(
      (candidate) =>
        (!level || candidate.level === level) && columns[candidate.level].has(candidate.column),
    );
  if (field) return { cell: field };

  if (!level) {
    if (columns.period.has(item)) return { cell: { column: item, level: "period" } };
    if (columns.role.has(item)) return { cell: { column: item, level: "role" } };
  }
  return { unresolved: item };
};

/** «*** Coste Empresa ***» es informativo; su desglose va sangrado con espacios. */
const classifyLabel = (
  label: string,
): Pick<ReceiptTemplateLine, "concept" | "section" | "level"> => {
  const trimmed = label.trim();
  if (trimmed.startsWith("***")) {
    return {
      concept: trimmed.replace(/^\*+\s*/, "").replace(/\s*\*+$/, ""),
      section: "informative",
      level: 0,
    };
  }
  if (/^ {2,}/.test(label)) return { concept: trimmed, section: "informative", level: 1 };
  return { concept: trimmed, section: "concept", level: 0 };
};

/**
 * Traduce la plantilla RECIBO (`M4SCO_ROWS` + `M4SCO_ROW_COL_DEF` +
 * `M4RCH_PICOMPONENTS`) a líneas con columnas físicas, en el orden de Meta4.
 */
export const resolveReceiptTemplate = ({
  definitionRows,
  repositoryRows,
  columnRows,
}: {
  definitionRows: readonly PeopleNetRow[];
  repositoryRows: readonly PeopleNetRow[];
  columnRows: readonly PeopleNetRow[];
}): ReceiptTemplate => {
  const columns = buildAccrualColumns(columnRows);
  const repository = buildRepository(repositoryRows);
  const unresolved = new Set<string>();

  type Draft = {
    order: number;
    rowId: string;
    name: string;
    label: string | null;
    perRecord: boolean;
    unitsFormat: PayrollReceiptLine["unitsFormat"];
    cells: Partial<Record<ValueRole, TemplateCell>>;
  };
  const drafts = new Map<string, Draft>();

  for (const row of definitionRows) {
    const rowId = text(row.SCO_ID_ROW);
    const draft: Draft = drafts.get(rowId) ?? {
      order: Number(text(row.SCO_ORDER)) || 0,
      rowId,
      name: text(row.SCO_NM_ROWESP),
      label: null,
      perRecord: text(row.SCO_RECORDS) === "1" || text(row.SCO_SLICES) === "1",
      unitsFormat: "decimal",
      cells: {},
    };
    drafts.set(rowId, draft);

    const columnId = Number(text(row.SCO_ID_COLUMN));
    if (columnId === 3) {
      draft.label = text(row.SCO_LABELESP) || null;
      continue;
    }
    const role = valueRoleOfColumn(columnId);
    if (!role) continue;
    if (role === "units" && text(row.SCO_BEF_AFT) === "A" && text(row.SCO_CONSTANT) === "%") {
      draft.unitsFormat = "percentage";
    }
    const resolved = resolveCell(row, columns, repository);
    if (!resolved) continue;
    if ("cell" in resolved) draft.cells[role] = resolved.cell;
    else unresolved.add(resolved.unresolved);
  }

  const lines = [...drafts.values()]
    .sort((a, b) => a.order - b.order || Number(a.rowId) - Number(b.rowId))
    .filter((draft) => draft.cells.earning || draft.cells.deduction)
    .map((draft) => ({
      rowId: draft.rowId,
      ...classifyLabel(draft.label ?? draft.name),
      perRecord: draft.perRecord,
      unitsFormat: draft.unitsFormat,
      ...draft.cells,
    }));

  return { lines, columns, unresolvedItems: [...unresolved].sort() };
};

/** Columnas físicas que necesita la plantilla en cada nivel. */
export const templateColumns = (template: ReceiptTemplate, level: AccrualLevel): string[] => [
  ...new Set(
    template.lines.flatMap((line) =>
      [line.units, line.price, line.earning, line.deduction]
        .filter((cell): cell is TemplateCell => cell?.level === level)
        .map((cell) => cell.column),
    ),
  ),
];

const toNumber = (value: PeopleNetSqlValue | undefined): number | null => {
  if (value === null || value === undefined || value instanceof Date) return null;
  if (typeof value === "boolean") return value ? 1 : 0;
  const parsed = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isFinite(parsed) ? parsed : null;
};

export const round2 = (value: number): number => Math.round(value * 100) / 100;

const readCell = (
  cell: TemplateCell | undefined,
  period: PeopleNetRow,
  roles: readonly PeopleNetRow[],
  aggregate: "sum" | "first",
): number | null => {
  if (!cell) return null;
  const values = (cell.level === "period" ? [period] : roles)
    .map((row) => toNumber(row[cell.column]))
    .filter((value): value is number => value !== null);
  if (values.length === 0) return null;
  return round2(aggregate === "sum" ? values.reduce((a, b) => a + b, 0) : (values[0] ?? 0));
};

const dateKey = (value: PeopleNetSqlValue | undefined): string =>
  value instanceof Date ? value.toISOString().slice(0, 10) : text(value);

/** Rellena la plantilla con la paga y los roles del empleado; omite las líneas a cero. */
export const evaluateReceiptTemplate = (
  template: ReceiptTemplate,
  period: PeopleNetRow,
  roles: readonly PeopleNetRow[],
): PayrollReceiptLine[] =>
  template.lines.flatMap((line) => {
    const usesRoles = [line.units, line.price, line.earning, line.deduction].some(
      (cell) => cell?.level === "role",
    );
    const groups =
      usesRoles && line.perRecord && roles.length > 1 ? roles.map((role) => [role]) : [roles];

    return groups.flatMap((group) => {
      const earning = readCell(line.earning, period, group, "sum");
      const deduction = readCell(line.deduction, period, group, "sum");
      if (!earning && !deduction) return [];
      const [record] = group;
      const suffix =
        groups.length > 1 && record
          ? `-${text(record.SCO_OR_HR_ROLE)}-${dateKey(record.SCO_DT_START_SLICE)}`
          : "";
      return [
        {
          id: `r${line.rowId}${suffix}`,
          section: line.section,
          level: line.level,
          concept: line.concept,
          units: readCell(line.units, period, group, "first"),
          unitsFormat: line.unitsFormat,
          price: readCell(line.price, period, group, "first"),
          percentage: null,
          earning,
          deduction,
        },
      ];
    });
  });
