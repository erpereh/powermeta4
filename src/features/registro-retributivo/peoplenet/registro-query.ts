import "server-only";

import { changedNormas } from "@/features/registro-retributivo/peoplenet/normas";
import {
  accumulatorKey,
  buildRegistroFromPeopleNet,
  isRegistroAccumulatorObject,
  objectOfTable,
  REGISTRO_ACCUMULATOR_TABLES,
  type RegistroAccumulatorRow,
  type RegistroAccumulatorTable,
  type RegistroItemConfig,
  type RegistroObject,
  type RegistroOutputColumn,
  type RegistroPersonInfo,
  type RegistroSlotRule,
} from "@/features/registro-retributivo/peoplenet/registro-build";
import type { RegistroParseResult } from "@/features/registro-retributivo/types";
import type { Meta4Society } from "@/lib/meta4/societies";
import { buildWorkerName } from "@/lib/peoplenet/payroll-receipt-mapper";
import {
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlRow,
} from "@/lib/portal/peoplenet/query";

/**
 * Lectura en PeopleNet de lo que necesita el Registro Retributivo, solo con
 * `SELECT` parametrizadas. Las sentencias siguen las de la traza de
 * `CYC_IR_CALC_RETRIB` / `CYC_IR_GEN_REG_RET`; la sociedad la pone el servidor.
 */

const ITEMS_QUERY = `SELECT B.ID_TI, B.ID_ITEM, I.ID_WRITE_OBJECT, F.REAL_NAME, B.SSP_DT_START, B.SSP_DT_END,
  B.SSP_ID_TIPO_CLAS, B.SSP_ID_TIPO_SUBCLAS, B.SSP_ID_TIPO_NORMA, B.SSP_SIGNO, B.SSP_COEFICIENTE
FROM M4SSP_IR_ITEM_REG_RETRIB B
LEFT JOIN M4VCH_ITEMS_READ I ON I.ID_TI = B.ID_TI AND I.ID_ITEM = B.ID_ITEM
LEFT JOIN M4RDC_FIELDS F ON F.ID_OBJECT = I.ID_WRITE_OBJECT AND F.ID_FIELD = I.ID_WRITE_FIELD
WHERE B.ID_ORGANIZATION = @organization
ORDER BY B.ID_TI, B.ID_ITEM`;

/** `SSP_IR_AC_MAP_ITEM`: reglas hacia `SSP_IR_AC_RETRIB`, en su orden de secuencia. */
const SLOT_RULES_QUERY = `SELECT DISTINCT ID_ORGANIZATION, SCO_SEQUENCE, ID_ITEM_ACUM, ID_ITEM_CLAS, SCO_VALUE_CLAS,
  ID_ITEM_SUBCLAS, SCO_VALUE_SUBCLAS, ID_ITEM_NORMA, SCO_VALUE_NORMA
FROM M4SSP_IR_ITEM_MAP_ACUM
WHERE ID_TI_ACUM = 'SSP_IR_AC_RETRIB' AND ID_TI = 'SSP_IR_ITEM_RETRIB'`;

/** `SSP_IR_AUX_NORMA`: fórmula LN4 de cada norma y si solo cuenta en la última paga. */
const NORMAS_QUERY = `SELECT SSP_ID_TIPO_NORMA, SSP_IND_NORMA_LAST_PAY, SCO_LN4_CODE
FROM M4SSP_IR_X_TIPO_NORMA
WHERE SSP_DT_START <= @toDate AND SSP_DT_END >= @fromDate`;

/** Columnas de salida con su casilla y la herencia por árbol de sociedades de Meta4. */
const OUTPUT_COLUMNS_QUERY = `SELECT BASE_0.SSP_NM_COLUMN, BASE_0.SSP_ORDER, BASE_0.SSP_NM_GROUP, ALIAS_1_0.ID_ITEM
FROM (SELECT O.ID_LEVEL ID_ORG_LEVEL, T.ID_ORGANIZATION, D.SSP_ID_COLUMN, D.SSP_ID_OUTPUT, D.SSP_NM_COLUMN,
    D.SSP_NM_GROUP, D.SSP_ORDER
  FROM M4SSP_OUTPUT_COLUMNS D, M4RCH_ORG_TREE T, M4RCH_ORGANIZATION O
  WHERE T.ID_PAR_ORGANIZATIO = D.ID_ORGANIZATION AND O.ID_ORGANIZATION = T.ID_ORGANIZATION AND D.OPERATION <> 0
    AND T.DISTANCE = (SELECT MIN(TD.DISTANCE) FROM M4SSP_OUTPUT_COLUMNS DD, M4RCH_ORG_TREE TD
      WHERE TD.ID_PAR_ORGANIZATIO = DD.ID_ORGANIZATION AND DD.SSP_ID_COLUMN = D.SSP_ID_COLUMN
        AND DD.SSP_ID_OUTPUT = D.SSP_ID_OUTPUT AND TD.ID_ORGANIZATION = T.ID_ORGANIZATION)) BASE_0
LEFT JOIN (SELECT O.ID_LEVEL ID_ORG_LEVEL, T.ID_ORGANIZATION, D.ID_ITEM, D.ID_NODE, D.SSP_ID_COLUMN, D.SSP_ID_OUTPUT
  FROM M4SSP_IR_COLUMNS_CONFIG D, M4RCH_ORG_TREE T, M4RCH_ORGANIZATION O
  WHERE T.ID_PAR_ORGANIZATIO = D.ID_ORGANIZATION AND O.ID_ORGANIZATION = T.ID_ORGANIZATION AND D.OPERATION <> 0
    AND T.DISTANCE = (SELECT MIN(TD.DISTANCE) FROM M4SSP_IR_COLUMNS_CONFIG DD, M4RCH_ORG_TREE TD
      WHERE TD.ID_PAR_ORGANIZATIO = DD.ID_ORGANIZATION AND DD.SSP_ID_COLUMN = D.SSP_ID_COLUMN
        AND DD.SSP_ID_OUTPUT = D.SSP_ID_OUTPUT AND TD.ID_ORGANIZATION = T.ID_ORGANIZATION)) ALIAS_1_0
  ON ALIAS_1_0.ID_ORG_LEVEL = 1 AND ALIAS_1_0.ID_ORGANIZATION = @organization
 AND BASE_0.SSP_ID_COLUMN = ALIAS_1_0.SSP_ID_COLUMN AND BASE_0.SSP_ID_OUTPUT = ALIAS_1_0.SSP_ID_OUTPUT
WHERE BASE_0.ID_ORGANIZATION = @organization AND BASE_0.ID_ORG_LEVEL = 1
  AND BASE_0.SSP_ID_OUTPUT = 'REG_RETRIB' AND BASE_0.SSP_NM_GROUP LIKE 'Conceptos%'
ORDER BY BASE_0.SSP_ORDER`;

const ACCUMULATOR_TABLES: readonly RegistroAccumulatorTable[] = [
  ...new Set(Object.values(REGISTRO_ACCUMULATOR_TABLES).flat()),
];

const ACCUMULATOR_COLUMNS_QUERY = `SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME IN (${ACCUMULATOR_TABLES.map((table) => `'${table}'`).join(", ")})`;

/** Horas del registro de alta que usa `SSP_PROCESS_ACUM` (`SSP_HORAS_REALES` = `_EQ`). */
const HOURS_COLUMNS = {
  coefJornada: "SSP_COEF_JORNADA",
  horasAnuConvenio: "SSP_HOR_ANU_CONV",
  horasReales: "SSP_HORAS_REALES_EQ",
} as const;

/** Columna de `CYC_IR_AUX_NORMA_MES`, que reparte la norma `COEF_A` entre meses. */
const COEF_MONTHS_COLUMN = "CYC_APORTACION_DEFINIDA";

/**
 * Población de `SRSP_IR_HR_PERIODS_TO_PROCESS`: periodos de alta de la sociedad
 * vivos al final del periodo o con baja dentro, empleados (`'01'`), no excluidos
 * de nómina y fuera de las entidades legales que el informe descarta.
 */
const populationCte = (employeeFilter: string) => `WITH POP AS (
  SELECT DISTINCT P.STD_ID_HR, P.STD_OR_HR_PERIOD, P.STD_DT_END, P.SSP_FEC_ANTIGUEDAD
  FROM STD_HR_PERIOD P
  JOIN M4SCO_H_HR_LEGENT L
    ON L.ID_ORGANIZATION = @organization AND L.STD_ID_HR = P.STD_ID_HR
   AND L.STD_OR_HR_PERIOD = P.STD_OR_HR_PERIOD
  WHERE P.ID_ORGANIZATION = @organization
    AND ((P.STD_DT_START <= @toDate AND P.STD_DT_END >= @toDate)
      OR (P.STD_DT_END >= @fromDate AND P.STD_DT_END <= @toDate))
    AND P.SSP_EXCLUIR_CLC_NOMINA = '0' AND P.STD_ID_HR_TYPE = '01'
    AND L.DT_START <= @toDate AND L.DT_END >= @fromDate
    AND P.STD_ID_HR NOT LIKE '%BC%'
    AND L.STD_ID_LEG_ENT NOT LIKE '%PORT%' AND L.STD_ID_LEG_ENT NOT LIKE '%GESTI%'
    AND L.STD_ID_LEG_ENT NOT LIKE '%BR%' AND L.STD_ID_LEG_ENT NOT LIKE '%PT%'
    ${employeeFilter}
)`;

const PEOPLE_QUERY = (cte: string) => `${cte}
SELECT POP.STD_ID_HR, POP.STD_DT_END, POP.SSP_FEC_ANTIGUEDAD, PE.STD_N_FIRST_NAME, PE.STD_N_FAM_NAME_1,
  PE.STD_N_MAIDEN_NAME, PE.STD_SSN, ISNULL(G.STD_N_GENDERESP, G.STD_N_GENDERENG) AS GENDER
FROM POP
LEFT JOIN STD_PERSON PE ON PE.STD_ID_PERSON = POP.STD_ID_HR
LEFT JOIN STD_LU_GENDER G ON G.STD_ID_GENDER = PE.STD_ID_GENDER`;

/** Categoría del rol principal vigente en el periodo (`SRSP_IR_CATEGORIA`). */
const CATEGORY_QUERY = (cte: string) => `${cte}
SELECT HC.SCO_ID_HR, HC.SSP_FEC_INICIO, C.SSP_NM_CATEGORESP, A.CSP_NM_AGR_CATESP
FROM M4SSP_H_CATEGORIA HC
JOIN M4SCO_HR_ROLE R
  ON R.ID_ORGANIZATION = @organization AND R.SCO_ID_HR = HC.SCO_ID_HR
 AND R.SCO_OR_HR_ROLE = HC.SCO_OR_HR_ROLE AND R.SCO_MAIN_ROLE = '1'
LEFT JOIN M4SSP_CATEGORIAS C
  ON C.ID_ORGANIZATION = @organization AND C.SSP_ID_CATEGORIA = HC.SSP_ID_CATEGORIA
LEFT JOIN M4CSP_AGRUP_CAT_PER A
  ON A.ID_ORGANIZATION = @organization AND A.CSP_ID_AGR_CAT_PER = C.CSP_ID_AGR_CAT_PER
WHERE HC.ID_ORGANIZATION = @organization
  AND HC.SSP_FEC_FIN >= @fromDate AND HC.SSP_FEC_INICIO <= @toDate
  AND HC.SCO_ID_HR IN (SELECT STD_ID_HR FROM POP)`;

/** Lugar de trabajo del rol principal vigente en el periodo (`SRSP_IR_WORK_LOCATION`). */
const WORK_LOCATION_QUERY = (cte: string) => `${cte}
SELECT W.SCO_ID_HR, W.SCO_DT_START, L.STD_WORK_LOCESP
FROM M4SCO_H_HR_WLOC W
JOIN M4SCO_HR_ROLE R
  ON R.ID_ORGANIZATION = @organization AND R.SCO_ID_HR = W.SCO_ID_HR
 AND R.SCO_OR_HR_ROLE = W.SCO_OR_HR_ROLE AND R.SCO_MAIN_ROLE = '1'
LEFT JOIN STD_WORK_LOCATION L
  ON L.ID_ORGANIZATION = @organization AND L.STD_ID_WORK_LOCAT = W.SCO_ID_WORK_LOC
WHERE W.ID_ORGANIZATION = @organization
  AND W.SCO_DT_END >= @fromDate AND W.SCO_DT_START <= @toDate
  AND W.SCO_ID_HR IN (SELECT STD_ID_HR FROM POP)`;

/**
 * `SSP_IR_AC_RH_LAST_PAY`: última imputación de paga mensual ordinaria del
 * periodo para el último alta de cada persona (`SSP_ULTIMO = 1`).
 */
const LAST_PAY_QUERY = (cte: string) => `${cte}, ULT AS (
  SELECT STD_ID_HR, STD_OR_HR_PERIOD FROM (
    SELECT STD_ID_HR, STD_OR_HR_PERIOD,
      ROW_NUMBER() OVER (PARTITION BY STD_ID_HR ORDER BY STD_DT_END DESC, STD_OR_HR_PERIOD DESC) AS RN
    FROM POP) X
  WHERE RN = 1
)
SELECT A.SCO_ID_HR, A.SCO_OR_HR_PERIOD, MAX(A.SCO_DT_ALLOC) AS LAST_ALLOC
FROM M4SCO_AC_HR_PERIOD A
JOIN M4SCO_HT_PAYS P ON P.ID_ORGANIZATION = @organization AND P.SCO_DT_ACCRUED = A.SCO_DT_ALLOC
JOIN ULT U ON U.STD_ID_HR = A.SCO_ID_HR AND U.STD_OR_HR_PERIOD = A.SCO_OR_HR_PERIOD
WHERE A.ID_ORGANIZATION = @organization
  AND A.SCO_DT_ALLOC >= @fromDate AND A.SCO_DT_ALLOC <= @toDate
  AND P.SCO_ID_PAY_TYPE = '1' AND P.SCO_NUM_PAY_MON = 1
GROUP BY A.SCO_ID_HR, A.SCO_OR_HR_PERIOD`;

/** `CYC_IR_AUX_NORMA_MES`: registros con aportación definida por persona. */
const COEF_MONTHS_QUERY = (cte: string) => `${cte}
SELECT SCO_ID_HR, COUNT(${COEF_MONTHS_COLUMN}) AS MONTHS
FROM M4CSP_AC_HR_PERIOD
WHERE ID_ORGANIZATION = @organization
  AND SCO_DT_ALLOC >= @fromDate AND SCO_DT_ALLOC <= @toDate
  AND ${COEF_MONTHS_COLUMN} IS NOT NULL AND ${COEF_MONTHS_COLUMN} <> 0
  AND SCO_ID_HR IN (SELECT STD_ID_HR FROM POP)
GROUP BY SCO_ID_HR`;

const KEY_COLUMNS = [
  "SCO_ID_HR",
  "SCO_OR_HR_PERIOD",
  "SCO_DT_ALLOC",
  "SCO_DT_PAYMENT",
  "SCO_DT_START_SLICE",
  "SCO_PAY_FREQ_ALLOC",
  "SCO_PAY_FREQ_PAY",
] as const;

/** Uniones de `SSP_IR_AC_NOMINA` por objeto: tabla estándar `A` y extensión `B`. */
const OBJECT_JOINS: Record<
  RegistroObject,
  { base: RegistroAccumulatorTable; extension: RegistroAccumulatorTable; on: string; order: string }
> = {
  period: {
    base: "M4SCO_AC_HR_PERIOD",
    extension: "M4CSP_AC_HR_PERIOD",
    on: `B.ID_ORGANIZATION = A.ID_ORGANIZATION AND B.ID_CURRENCY = A.ID_CURRENCY AND B.SCO_ID_HR = A.SCO_ID_HR
 AND B.SCO_OR_HR_PERIOD = A.SCO_OR_HR_PERIOD AND B.SCO_DT_ALLOC = A.SCO_DT_ALLOC
 AND B.SCO_DT_PAYMENT = A.SCO_DT_PAYMENT AND B.SCO_DT_START_SLICE = A.SCO_DT_START_SLICE
 AND B.SCO_PAY_FREQ_ALLOC = A.SCO_PAY_FREQ_ALLOC AND B.SCO_PAY_FREQ_PAY = A.SCO_PAY_FREQ_PAY`,
    order: "",
  },
  role: {
    base: "M4SCO_AC_HR_ROLE",
    extension: "M4CSP_AC_HR_ROLE",
    on: `B.ID_ORGANIZATION = A.ID_ORGANIZATION AND B.ID_CURRENCY = A.ID_CURRENCY AND B.SCO_ID_HR = A.SCO_ID_HR
 AND B.SCO_OR_HR_ROLE = A.SCO_OR_HR_ROLE AND B.SCO_DT_ALLOC = A.SCO_DT_ALLOC
 AND B.SCO_DT_PAYMENT = A.SCO_DT_PAYMENT AND B.SCO_DT_START_SLICE = A.SCO_DT_START_SLICE
 AND B.SCO_PAY_FREQ_ALLOC = A.SCO_PAY_FREQ_ALLOC AND B.SCO_PAY_FREQ_PAY = A.SCO_PAY_FREQ_PAY`,
    order: ", A.SCO_OR_HR_ROLE",
  },
  ss: {
    base: "M4SSP_ACUMULADO_SS",
    extension: "M4SSP_ACUMULADO_S1",
    on: `B.ID_ORGANIZATION = A.ID_ORGANIZATION AND B.ID_CURRENCY = A.ID_CURRENCY AND B.SCO_ID_HR = A.SCO_ID_HR
 AND B.SCO_OR_HR_PERIOD = A.SCO_OR_HR_PERIOD AND B.SCO_DT_ALLOC = A.SCO_DT_ALLOC
 AND B.SCO_DT_PAYMENT = A.SCO_DT_PAYMENT AND B.SCO_DT_START_SLICE = A.SCO_DT_START_SLICE
 AND B.SCO_PAY_FREQ_ALLOC = A.SCO_PAY_FREQ_ALLOC AND B.SCO_PAY_FREQ_PAY = A.SCO_PAY_FREQ_PAY`,
    order: "",
  },
};

interface SelectedColumn {
  readonly alias: string;
  readonly table: RegistroAccumulatorTable;
  readonly column: string;
}

/**
 * Registros del acumulado de un objeto (`SSP_IR_AC_NOMINA`), uno por fila, de
 * los altas de la población cuyos meses imputados caen en el periodo.
 */
const rowsQuery = (
  cte: string,
  object: RegistroObject,
  columns: readonly SelectedColumn[],
  hours: readonly string[],
) => {
  const join = OBJECT_JOINS[object];
  const selected = [
    ...KEY_COLUMNS.map((column) => `A.${column}`),
    ...hours.map((column) => `A.[${column}] AS [H_${column}]`),
    ...columns.map(
      (column) =>
        `${column.table === join.base ? "A" : "B"}.[${column.column}] AS [${column.alias}]`,
    ),
  ];
  return `${cte}
SELECT ${selected.join(", ")}
FROM ${join.base} A
JOIN ${join.extension} B ON ${join.on}
WHERE A.ID_ORGANIZATION = @organization
  AND A.SCO_DT_ALLOC >= @fromDate AND A.SCO_DT_ALLOC <= @toDate
  AND EXISTS (SELECT 1 FROM POP WHERE POP.STD_ID_HR = A.SCO_ID_HR AND POP.STD_OR_HR_PERIOD = A.SCO_OR_HR_PERIOD)
ORDER BY A.SCO_ID_HR, A.SCO_OR_HR_PERIOD, A.SCO_DT_ALLOC, A.SCO_DT_PAYMENT, A.SCO_DT_START_SLICE${join.order}`;
};

const toSqlDate = (isoDate: string): Date => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year ?? 0, (month ?? 1) - 1, day ?? 1));
};

const text = (row: PortalSqlRow, column: string): string => sqlText(row[column]) ?? "";

/** Meta4 usa 4000-01-01 como «sin fecha de fin». */
const isoDate = (row: PortalSqlRow, column: string): string | undefined => {
  const value = text(row, column).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !value.startsWith("4000-") ? value : undefined;
};

const nullableNumber = (row: PortalSqlRow, column: string): number | null => {
  const value = row[column];
  if (value === null || value === undefined || value === "") return null;
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const number = (row: PortalSqlRow, column: string): number => nullableNumber(row, column) ?? 0;

/** Columna física de cada concepto del Registro, para enlazarlo con las líneas del recibo. */
export interface RegistroItemColumn {
  readonly code: string;
  readonly table: string;
  readonly column: string;
}

export interface PeopleNetRegistro extends RegistroParseResult {
  readonly itemColumns: readonly RegistroItemColumn[];
}

export interface LoadRegistroInput {
  readonly organization: Meta4Society;
  readonly from: string;
  readonly to: string;
  readonly employeeIds?: readonly string[];
}

const mapItems = (
  rows: readonly PortalSqlRow[],
  physicalColumns: ReadonlyMap<string, ReadonlySet<string>>,
  warnings: string[],
): RegistroItemConfig[] =>
  rows.flatMap((row): RegistroItemConfig[] => {
    const item = text(row, "ID_ITEM");
    const object = text(row, "ID_WRITE_OBJECT");
    const column = text(row, "REAL_NAME");
    if (!isRegistroAccumulatorObject(object) || !column) {
      warnings.push(`El item ${item} no tiene acumulado legible (${object || "sin objeto"}).`);
      return [];
    }
    const table = REGISTRO_ACCUMULATOR_TABLES[object].find((candidate) =>
      physicalColumns.get(candidate)?.has(column),
    );
    if (!table) {
      warnings.push(`La columna ${column} del item ${item} no existe en ${object}.`);
      return [];
    }
    return [
      {
        ti: text(row, "ID_TI"),
        item,
        table,
        column,
        classification: text(row, "SSP_ID_TIPO_CLAS"),
        subclassification: text(row, "SSP_ID_TIPO_SUBCLAS"),
        normType: text(row, "SSP_ID_TIPO_NORMA"),
        sign: number(row, "SSP_SIGNO"),
        coefficient: nullableNumber(row, "SSP_COEFICIENTE"),
        start: isoDate(row, "SSP_DT_START") ?? "0000-01-01",
        end: isoDate(row, "SSP_DT_END") ?? "9999-12-31",
      },
    ];
  });

/**
 * Las reglas que aplica el filtro de `SSP_PROCESS_ACUM`: siempre por
 * clasificación y, opcionalmente, por subclasificación y por norma.
 */
export const mapSlotRules = (
  rows: readonly PortalSqlRow[],
  organization: string,
): RegistroSlotRule[] => {
  const own = rows.filter((row) => text(row, "ID_ORGANIZATION") === organization);
  const source = own.length ? own : rows;
  const seen = new Set<string>();
  return source.flatMap((row): RegistroSlotRule[] => {
    const slot = Number(/^SCO_I_CPTO_(\d+)$/.exec(text(row, "ID_ITEM_ACUM"))?.[1]);
    const subclassItem = sqlText(row.ID_ITEM_SUBCLAS);
    const normItem = sqlText(row.ID_ITEM_NORMA);
    const subclassification = sqlText(row.SCO_VALUE_SUBCLAS);
    const normType = sqlText(row.SCO_VALUE_NORMA);
    const valid =
      Number.isInteger(slot) &&
      text(row, "ID_ITEM_CLAS") === "SSP_ID_TIPO_CLAS" &&
      (subclassItem === null) === (subclassification === null) &&
      (subclassItem === null || subclassItem === "SSP_ID_TIPO_SUBCLAS") &&
      (normItem === null) === (normType === null) &&
      (normItem === null || normItem === "SSP_ID_TIPO_NORMA");
    // La secuencia vuelve a empezar en cada casilla.
    const sequence = number(row, "SCO_SEQUENCE");
    if (!valid || seen.has(`${slot}|${sequence}`)) return [];
    seen.add(`${slot}|${sequence}`);
    return [
      { sequence, slot, classification: text(row, "SCO_VALUE_CLAS"), subclassification, normType },
    ];
  });
};

const latestBy = (rows: readonly PortalSqlRow[], dateColumn: string): Map<string, PortalSqlRow> => {
  const latest = new Map<string, PortalSqlRow>();
  for (const row of rows) {
    const employeeId = text(row, "SCO_ID_HR");
    const previous = latest.get(employeeId);
    if (!previous || text(row, dateColumn) > text(previous, dateColumn))
      latest.set(employeeId, row);
  }
  return latest;
};

/** Registro Retributivo del periodo para la sociedad resuelta en servidor. */
export async function loadRegistroFromPeopleNet(
  input: LoadRegistroInput,
): Promise<PeopleNetRegistro> {
  const employeeIds = input.employeeIds ?? [];
  const params: Record<string, PortalSqlParam> = {
    organization: organizationParam(input.organization),
    fromDate: { type: "date", value: toSqlDate(input.from) },
    toDate: { type: "date", value: toSqlDate(input.to) },
  };
  employeeIds.forEach((employeeId, index) => {
    params[`employee${index}`] = { type: "varchar", length: 64, value: employeeId };
  });
  const cte = populationCte(
    employeeIds.length
      ? `AND P.STD_ID_HR IN (${employeeIds.map((_, index) => `@employee${index}`).join(", ")})`
      : "",
  );

  const [itemRows, ruleRows, normaRows, columnRows, schemaRows] = await Promise.all([
    runPortalSelect(ITEMS_QUERY, params),
    runPortalSelect(SLOT_RULES_QUERY),
    runPortalSelect(NORMAS_QUERY, params),
    runPortalSelect(OUTPUT_COLUMNS_QUERY, params),
    runPortalSelect(ACCUMULATOR_COLUMNS_QUERY),
  ]);

  const physicalColumns = new Map<string, Set<string>>();
  for (const row of schemaRows) {
    const table = text(row, "TABLE_NAME");
    physicalColumns.set(
      table,
      (physicalColumns.get(table) ?? new Set()).add(text(row, "COLUMN_NAME")),
    );
  }
  const warnings: string[] = [];
  const items = mapItems(itemRows, physicalColumns, warnings);
  const slotRules = mapSlotRules(ruleRows, input.organization);
  const normas = normaRows.map((row) => ({
    id: text(row, "SSP_ID_TIPO_NORMA"),
    lastPay: number(row, "SSP_IND_NORMA_LAST_PAY") === 1,
    ln4: text(row, "SCO_LN4_CODE"),
  }));
  const changed = changedNormas(normas);
  if (changed.length) {
    warnings.push(
      `El LN4 de estas normas ha cambiado en PeopleNet y se aplica la fórmula conocida: ${changed.join(", ")}.`,
    );
  }
  const outputColumns: RegistroOutputColumn[] = columnRows.map((row) => {
    const slot = Number(/^SCO_I_CPTO_(\d+)$/.exec(text(row, "ID_ITEM"))?.[1]);
    return {
      code: text(row, "SSP_NM_COLUMN"),
      group: text(row, "SSP_NM_GROUP"),
      order: number(row, "SSP_ORDER"),
      slot: Number.isInteger(slot) ? slot : null,
    };
  });

  // Columnas que lee cada objeto, con alias para no chocar entre tablas.
  const columnsByObject = new Map<RegistroObject, SelectedColumn[]>();
  for (const item of items) {
    const object = objectOfTable(item.table);
    const columns = columnsByObject.get(object) ?? [];
    if (!columns.some((column) => column.table === item.table && column.column === item.column)) {
      columns.push({ alias: `C${columns.length}`, table: item.table, column: item.column });
    }
    columnsByObject.set(object, columns);
  }
  const periodColumns = physicalColumns.get("M4SCO_AC_HR_PERIOD") ?? new Set<string>();
  const hourColumns = Object.values(HOURS_COLUMNS).filter((column) => periodColumns.has(column));
  const hasCoefMonths = physicalColumns.get("M4CSP_AC_HR_PERIOD")?.has(COEF_MONTHS_COLUMN) ?? false;

  const [peopleRows, categoryRows, workLocationRows, lastPayRows, coefMonthRows, ...objectRows] =
    await Promise.all([
      runPortalSelect(PEOPLE_QUERY(cte), params),
      runPortalSelect(CATEGORY_QUERY(cte), params),
      runPortalSelect(WORK_LOCATION_QUERY(cte), params),
      runPortalSelect(LAST_PAY_QUERY(cte), params),
      hasCoefMonths ? runPortalSelect(COEF_MONTHS_QUERY(cte), params) : Promise.resolve([]),
      ...[...columnsByObject].map(async ([object, columns]) => ({
        object,
        columns,
        rows: await runPortalSelect(
          rowsQuery(cte, object, columns, object === "period" ? hourColumns : []),
          params,
        ),
      })),
    ]);

  const categories = latestBy(categoryRows, "SSP_FEC_INICIO");
  const workLocations = latestBy(workLocationRows, "SCO_DT_START");
  const people = new Map<string, RegistroPersonInfo>();
  // Con varias altas en el periodo queda la última (`STD_DT_END` más reciente).
  const lastPeriod = new Map<string, PortalSqlRow>();
  for (const row of peopleRows) {
    const employeeId = text(row, "STD_ID_HR");
    const previous = lastPeriod.get(employeeId);
    if (!previous || text(row, "STD_DT_END") > text(previous, "STD_DT_END")) {
      lastPeriod.set(employeeId, row);
    }
  }
  for (const [employeeId, row] of lastPeriod) {
    const category = categories.get(employeeId);
    const workLocation = workLocations.get(employeeId);
    people.set(employeeId, {
      name:
        buildWorkerName(
          text(row, "STD_N_FIRST_NAME"),
          text(row, "STD_N_FAM_NAME_1"),
          text(row, "STD_N_MAIDEN_NAME"),
        ) || undefined,
      nif: text(row, "STD_SSN") || undefined,
      sex: text(row, "GENDER") || undefined,
      seniorityDate: isoDate(row, "SSP_FEC_ANTIGUEDAD"),
      category: category ? text(category, "SSP_NM_CATEGORESP") || undefined : undefined,
      personalCategoryGroup: category
        ? text(category, "CSP_NM_AGR_CATESP") || undefined
        : undefined,
      workplace: workLocation ? text(workLocation, "STD_WORK_LOCESP") || undefined : undefined,
    });
  }

  const rows: RegistroAccumulatorRow[] = [];
  for (const { object, columns, rows: sqlRows } of objectRows) {
    for (const row of sqlRows) {
      const values = new Map<string, number>();
      for (const column of columns) {
        values.set(accumulatorKey(column.table, column.column), number(row, column.alias));
      }
      rows.push({
        object,
        employeeId: text(row, "SCO_ID_HR"),
        hrPeriod: number(row, "SCO_OR_HR_PERIOD"),
        key: KEY_COLUMNS.map((column) => text(row, column)).join("|"),
        allocation: text(row, "SCO_DT_ALLOC").slice(0, 10),
        coefJornada:
          object === "period" ? nullableNumber(row, `H_${HOURS_COLUMNS.coefJornada}`) : null,
        horasAnuConvenio:
          object === "period" ? nullableNumber(row, `H_${HOURS_COLUMNS.horasAnuConvenio}`) : null,
        horasReales:
          object === "period" ? nullableNumber(row, `H_${HOURS_COLUMNS.horasReales}`) : null,
        values,
      });
    }
  }

  const lastPay = new Map(
    lastPayRows.map((row) => [
      `${text(row, "SCO_ID_HR")}|${number(row, "SCO_OR_HR_PERIOD")}`,
      text(row, "LAST_ALLOC").slice(0, 10),
    ]),
  );
  const coefMonths = new Map(
    coefMonthRows.map((row) => [text(row, "SCO_ID_HR"), number(row, "MONTHS")]),
  );

  const parsed = buildRegistroFromPeopleNet({
    organization: input.organization,
    period: { from: input.from, to: input.to },
    items,
    slotRules,
    lastPayNormas: new Set(normas.filter((norma) => norma.lastPay).map((norma) => norma.id)),
    outputColumns,
    people,
    rows,
    lastPay,
    coefMonths,
  });
  const conceptCodes = new Set(Object.values(parsed.conceptCodes).flat());
  return {
    ...parsed,
    warnings: [...warnings, ...parsed.warnings],
    itemColumns: items
      .filter((item) => conceptCodes.has(item.item))
      .map((item) => ({ code: item.item, table: item.table, column: item.column })),
  };
}
