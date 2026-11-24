/**
 * Values of the hire Meta4Object items for one person: the AltaNueva row the
 * Excel import used to read (template defaults + the person's cells) plus the
 * arguments and figures the hire Meta4Object calculates before SAVE_HIRE.
 */
import { cellsForPerson } from "../cells";
import type { HireModel } from "./model-types";

export type ItemValue = string | number | null;

export type HireColumns = {
  values: ReadonlyMap<string, ItemValue>;
  /** Columns written from the person (the rest are template defaults). */
  personColumns: ReadonlySet<string>;
};

/** Template row 6 values overlaid with the cells the form writes for this person. */
export const hireColumnValues = (
  model: HireModel,
  cells: ReturnType<typeof cellsForPerson>,
): HireColumns => {
  const values = new Map<string, ItemValue>(Object.entries(model.template.defaults));
  const personColumns = new Set<string>();
  for (const cell of cells) {
    values.set(cell.column, cell.kind === "clear" ? null : cell.value);
    personColumns.add(cell.column);
  }
  return { values, personColumns };
};

export type ResolvedItem = {
  value: ItemValue;
  /** Comes from the person's cells or a figure calculated from them, not the template. */
  personal: boolean;
};

const ARGUMENT_PREFIX = "SRCO_PA_HIRE.SRCO_ARG_";

/**
 * Hire nodes the Meta4Object fills from another node with the same items: the
 * account of WIZ_PAYROLL is the one typed in DATOS_PAGO, and the reference
 * model of WIZ_PAY the one of WIZ_PAYROLL. The professional nodes (WIZ_PROF)
 * have no twin: they only apply to professionals, never to employee hires.
 */
const NODE_TWINS: Readonly<Record<string, string>> = {
  SRCO_PA_HIRE_WIZ_PAYROLL: "SRSP_PA_HIRE_WIZ_DATOS_PAGO",
  SRCO_PA_HIRE_WIZ_PAY: "SRCO_PA_HIRE_WIZ_PAYROLL",
};

/**
 * Resolves `NODE.ITEM` in this order: calculated items, the template column
 * with that header, the non-argument twin of an `SRCO_ARG_*` item, and the
 * same item in the twin node (NODE_TWINS).
 */
export const createItemResolver = (
  model: HireModel,
  columns: HireColumns,
  calculated: Readonly<Record<string, ItemValue>>,
): ((item: string) => ResolvedItem) => {
  const columnOf = new Map<string, string>();
  for (const [column, header] of Object.entries(model.template.headers)) {
    if (!columnOf.has(header)) columnOf.set(header, column);
  }
  const fromColumn = (column: string | undefined): ResolvedItem =>
    column === undefined
      ? { value: null, personal: false }
      : { value: columns.values.get(column) ?? null, personal: columns.personColumns.has(column) };

  return (item) => {
    if (Object.hasOwn(calculated, item)) return { value: calculated[item] ?? null, personal: true };
    const exact = columnOf.get(item);
    if (exact) return fromColumn(exact);
    if (item.startsWith(ARGUMENT_PREFIX)) {
      const twin = columnOf.get(`SRCO_PA_HIRE.SRCO_${item.slice(ARGUMENT_PREFIX.length)}`);
      if (twin) return fromColumn(twin);
    }
    const twinNode = NODE_TWINS[item.slice(0, item.indexOf("."))];
    if (twinNode) return fromColumn(columnOf.get(`${twinNode}${item.slice(item.indexOf("."))}`));
    return { value: null, personal: false };
  };
};
