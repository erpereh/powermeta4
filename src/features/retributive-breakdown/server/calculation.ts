import { GROUPINGS, type BreakdownMetrics } from "../contract";
import { attribute, BreakdownInputError, children, normalize, type Sheet } from "./workbook";

export type Grouping = (typeof GROUPINGS)[number];
export type Scalar = string | number | null;
type Concept = { code: string; column: number; section: string };

const sections = ["Conceptos Salario", "Conceptos C. Salarial", "Conceptos Extrasalarial"];
const undefinedGroup = "[SIN DEFINIR]";
const numericText = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
export const SUMMARY_COLUMNS = 59; // A:BG, el resumen de PeopleNet.
export const METRICS_PER_CONCEPT = 6;

export type Employees = ReturnType<typeof readEmployees>;

function oneColumn(sheet: Sheet, row: number, header: string): number {
  const columns = [...(sheet.rows.get(row)?.cells.keys() ?? [])].filter(
    (column) => normalize(sheet.value(row, column)) === normalize(header),
  );
  if (columns.length !== 1) {
    throw new BreakdownInputError("Empleados requiere una única columna «" + header + "».");
  }
  return columns[0];
}

function scalar(value: ReturnType<Sheet["value"]>): Scalar {
  if (typeof value === "boolean") {
    throw new BreakdownInputError("Hay un valor lógico en un importe o identificador.");
  }
  return value;
}

function calendarDate(value: string): number {
  const [day, month, year] = value.split("/").map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date.getUTCDate() === day && date.getUTCMonth() === month - 1 ? date.getTime() : NaN;
}

export function readEmployees(sheet: Sheet) {
  const records = [...sheet.rows]
    .sort(([a], [b]) => a - b)
    .map(([row, { cells }]) => {
      const values = [...cells]
        .sort(([a], [b]) => a - b)
        .flatMap(([column, cell]) => {
          if (children(cell, "c").some((item) => "f" in item) || attribute(cell, "t") === "e") {
            throw new BreakdownInputError(
              "Empleados contiene fórmulas o errores. Usa la exportación con valores de PeopleNet.",
            );
          }
          const value = sheet.value(row, column);
          return value === null ? [] : [[column, value] as const];
        });
      return { row, values };
    })
    .filter(({ values }) => values.length);
  const textInRow = (row: (typeof records)[number], text: string) =>
    row.values.some(([, value]) => normalize(value) === normalize(text));
  const headers = records.filter((row) => textInRow(row, "ID RH") && textInRow(row, "Sexo"));
  if (headers.length !== 1) {
    throw new BreakdownInputError(
      "No se reconoce una única cabecera con ID RH y Sexo en Empleados.",
    );
  }
  const header = headers[0].row;
  const headerRows = records.filter(({ row }) => row < header);
  const periodRows = headerRows.filter((row) => textInRow(row, "Periodo de cálculo"));
  const period =
    periodRows.length === 1
      ? periodRows[0].values.find(
          ([, value]) =>
            typeof value === "string" &&
            /^\d{2}\/\d{2}\/\d{4}\s*-\s*\d{2}\/\d{2}\/\d{4}$/.test(value.trim()),
        )?.[1]
      : undefined;
  const [from, to] = typeof period === "string" ? period.trim().split(/\s*-\s*/) : [];
  if (!(from && to && calendarDate(from) <= calendarDate(to))) {
    throw new BreakdownInputError("No se reconoce el periodo de cálculo en Empleados.");
  }

  const concepts: Concept[] = [];
  for (const section of sections) {
    const matches = headerRows.flatMap(({ row, values }) =>
      values
        .filter(([, value]) => normalize(value) === normalize(section))
        .map(([column]) => ({ row, column })),
    );
    if (matches.length !== 1) {
      throw new BreakdownInputError(
        "Se requiere una única sección «" + section + "» en Empleados.",
      );
    }
    const { row, column } = matches[0];
    const end =
      sheet.merges.find(
        (range) => range.top === row && range.bottom === row && range.left === column,
      )?.right ?? column;
    for (let index = column; index <= end; index++) {
      const code = sheet.value(header, index);
      if (typeof code !== "string" || !code.trim()) {
        throw new BreakdownInputError("Hay un concepto sin código en Empleados.");
      }
      concepts.push({ code: code.trim(), column: index, section });
    }
  }
  if (
    new Set(concepts.map(({ code }) => normalize(code))).size !== concepts.length ||
    concepts.some((item, index) => index > 0 && item.column <= concepts[index - 1].column)
  )
    throw new BreakdownInputError("Los conceptos de Empleados están duplicados o desordenados.");

  oneColumn(sheet, header, "ID RH");
  const sexColumn = oneColumn(sheet, header, "Sexo");
  const companyColumn = oneColumn(sheet, header, "ID Empresa");
  const rows = records.filter(({ row }) => row > header).map(({ row }) => row);
  if (!rows.length) throw new BreakdownInputError("El libro no contiene empleados.");
  for (const row of rows) {
    if (normalize(sheet.value(row, companyColumn)) !== "iber") {
      throw new BreakdownInputError(
        "Revisa la columna «ID Empresa» de Empleados. Sus valores no corresponden al formato admitido.",
      );
    }
    for (const { column } of concepts) scalar(sheet.value(row, column));
  }
  return {
    sheet,
    header,
    period: { from, to },
    concepts,
    rows,
    sexColumn,
    // Compara los valores y posiciones de Empleados, incluyendo el periodo y la plantilla.
    signature: JSON.stringify(records),
  };
}

function groupKey(value: Scalar): string {
  if (value === null || value === "" || normalize(value) === "[sin definir]") return "empty";
  if (typeof value === "number") return "number:" + value;
  if (/[*?~]|^(<>|<=|>=|=|<|>)/.test(value)) {
    throw new BreakdownInputError(
      "Un identificador de grupo contiene operadores o comodines de Excel.",
    );
  }
  return "text:" + value.toLowerCase();
}

function numericKey(value: Scalar): string | undefined {
  if (typeof value === "number") return "number:" + value;
  if (typeof value === "string" && numericText.test(value.trim())) {
    const number = Number(value);
    if (Number.isFinite(number)) return "number:" + number;
  }
  return undefined;
}

function median(values: number[]): number {
  if (!values.length) return 0;
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2;
}

function mean(values: number[]): number {
  // Suma compensada para evitar que importes pequeños se pierdan al sumar cantidades grandes.
  let sum = 0;
  let correction = 0;
  for (const value of values) {
    const next = sum + value;
    correction += Math.abs(sum) >= Math.abs(value) ? sum - next + value : value - next + sum;
    sum = next;
  }
  return values.length ? (sum + correction) / values.length : 0;
}

type EmployeeRow = { row: number; sex: string };
export type GroupResult = {
  row: number;
  identifier: Scalar;
  label: Scalar;
  added: boolean;
  women: number;
  men: number;
  metrics: BreakdownMetrics[];
};

type GroupRow = Pick<GroupResult, "row" | "identifier" | "label" | "added">;

export function analyzeGrouping(source: Employees, destination: Sheet, grouping: Grouping) {
  const { sheet, concepts, sexColumn } = source;
  const identifierColumn = oneColumn(sheet, source.header, grouping.identifier);
  const labelColumn = oneColumn(sheet, source.header, grouping.label);
  const headers = [...destination.rows].flatMap(([row, { cells }]) =>
    [...cells.keys()]
      .filter(
        (column) => normalize(destination.value(row, column)) === normalize(grouping.identifier),
      )
      .map((column) => ({ row, column })),
  );
  if (headers.length !== 1 || headers[0].column !== 1 || headers[0].row < 5) {
    throw new BreakdownInputError(
      "La hoja «" + grouping.sheet + "» no tiene una cabecera de agrupación válida.",
    );
  }
  const header = headers[0].row;
  const groups = new Map<string, GroupRow>();
  let lastGroup = header;
  for (const [row, { cells }] of [...destination.rows].sort(([a], [b]) => a - b)) {
    if (row <= header) continue;
    if (
      [...cells.keys()].some(
        (column) => column <= SUMMARY_COLUMNS && destination.value(row, column) !== null,
      )
    ) {
      lastGroup = row;
    }
    const identifier = scalar(destination.value(row, 1));
    const label = scalar(destination.value(row, 2));
    if (identifier === null && label === null) continue;
    const key = groupKey(identifier);
    if (groups.has(key)) {
      throw new BreakdownInputError("La hoja agrupada contiene identificadores duplicados.");
    }
    groups.set(key, { row, identifier, label, added: false });
  }

  const byGroup = new Map<string, EmployeeRow[]>();
  const byNumeric = new Map<string, EmployeeRow[]>();
  const blankRows: EmployeeRow[] = [];
  const append = (map: Map<string, EmployeeRow[]>, key: string, item: EmployeeRow) => {
    const bucket = map.get(key);
    if (bucket) bucket.push(item);
    else map.set(key, [item]);
  };
  for (const row of source.rows) {
    const identifier = scalar(sheet.value(row, identifierColumn));
    const key = groupKey(identifier);
    const item = { row, sex: normalize(sheet.value(row, sexColumn)) };
    append(byGroup, key, item);
    const numeric = numericKey(identifier);
    if (numeric) append(byNumeric, numeric, item);
    if (identifier === null) blankRows.push(item);
    if (!groups.has(key)) {
      groups.set(key, {
        row: ++lastGroup,
        identifier: key === "empty" ? undefinedGroup : identifier,
        label: key === "empty" ? undefinedGroup : scalar(sheet.value(row, labelColumn)),
        added: true,
      });
    }
  }

  const detailColumns = concepts.length * METRICS_PER_CONCEPT;
  if (
    SUMMARY_COLUMNS + detailColumns > 16_384 ||
    lastGroup > 1_048_576 ||
    (groups.size + 5) * detailColumns > 500_000
  ) {
    throw new BreakdownInputError("La hoja agrupada supera el tamaño de desglose admitido.");
  }
  const results: GroupResult[] = [];
  for (const [key, group] of groups) {
    const members = byGroup.get(key) ?? [];
    // AVERAGEIFS equipara identificadores numéricos guardados como texto.
    // El IF de MEDIAN distingue su tipo y, con el criterio numérico 0, incluye celdas sin valor.
    const medianMembers = group.identifier === 0 ? members.concat(blankRows) : members;
    const numeric = numericKey(group.identifier);
    const meanMembers = numeric ? (byNumeric.get(numeric) ?? []) : members;
    const bySex = (rows: EmployeeRow[], sex: string) => rows.filter((item) => item.sex === sex);
    const medianWomen = bySex(medianMembers, "mujer");
    const medianMen = bySex(medianMembers, "hombre");
    const meanWomen = bySex(meanMembers, "mujer");
    const meanMen = bySex(meanMembers, "hombre");
    const amounts = (rows: EmployeeRow[], column: number, blanksAsZero: boolean) =>
      rows.flatMap(({ row }) => {
        const value = sheet.value(row, column);
        if (typeof value === "number") return [value];
        return value === null && blanksAsZero ? [0] : [];
      });
    const metrics = concepts.map(({ column }): BreakdownMetrics => {
      const averageWomen = mean(amounts(meanWomen, column, false));
      const averageMen = mean(amounts(meanMen, column, false));
      const midWomen = median(amounts(medianWomen, column, true));
      const midMen = median(amounts(medianMen, column, true));
      const difference = (women: number, men: number) => (men === 0 ? 0 : (men - women) / men);
      const values: BreakdownMetrics = [
        averageWomen,
        averageMen,
        difference(averageWomen, averageMen),
        midWomen,
        midMen,
        difference(midWomen, midMen),
      ];
      if (!values.every(Number.isFinite)) {
        throw new BreakdownInputError("Un resultado excede el rango numérico de Excel.");
      }
      return values;
    });
    results.push({ ...group, women: medianWomen.length, men: medianMen.length, metrics });
  }
  return { header, groups: results };
}
