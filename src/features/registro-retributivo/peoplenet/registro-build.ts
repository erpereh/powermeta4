import { NORMAS } from "@/features/registro-retributivo/peoplenet/normas";
import { createInternalCheck } from "@/features/registro-retributivo/parsers/registroRetributivoParser";
import type {
  AvailableConceptCodes,
  ConceptBlockKey,
  MoneyByBlock,
  RegistroConceptAmount,
  RegistroEmployee,
  RegistroParseResult,
  RetributionBlock,
} from "@/features/registro-retributivo/types";
import { roundMoney } from "@/features/registro-retributivo/utils/money";

/**
 * Reproducción del Registro Retributivo de PeopleNet con datos leídos por
 * `SELECT`. Meta4 calcula en `CYC_IR_CALC_RETRIB` (`SSP_PROCESS_ACUM`, versión
 * de CYC/IBER) y escribe `M4SSP_IR_AC_RETRIB`, que `CYC_IR_GEN_REG_RET` suma
 * en el Excel y después borra. Este módulo hace lo mismo en memoria:
 *
 * 1. Recorre cada registro del acumulado (alta, rol y Seguridad Social) con sus
 *    horas: coeficiente de jornada, horas anuales de convenio (1800 si no hay),
 *    horas de convenio del mes (anuales / 12), del periodo (mes × meses) y
 *    horas reales del mes.
 * 2. Cada item de `M4SSP_IR_ITEM_REG_RETRIB` pasa por las reglas de
 *    `M4SSP_IR_ITEM_MAP_ACUM` que coinciden con su clasificación,
 *    subclasificación y norma. Sin norma suma el importe; con norma aplica su
 *    LN4 (`normas.ts`), que en las normas «última paga» solo cuenta en la
 *    última paga mensual ordinaria del periodo.
 * 3. Las casillas 1–15 son los bloques del Excel; las columnas «Conceptos …»
 *    son el desglose por item de las casillas 13–15 (periodo completo).
 */

/** Objetos lógicos que `SSP_GET_SQL_SENTENCES` procesa por separado y en este orden. */
export const REGISTRO_OBJECTS = ["period", "role", "ss"] as const;
export type RegistroObject = (typeof REGISTRO_OBJECTS)[number];

/** Tablas físicas de cada objeto de escritura de los items. */
export const REGISTRO_ACCUMULATOR_TABLES = {
  CSP_AC_HR_PERIOD: ["M4CSP_AC_HR_PERIOD"],
  SCO_AC_HR_PERIOD: ["M4SCO_AC_HR_PERIOD"],
  CSP_AC_HR_ROLE: ["M4CSP_AC_HR_ROLE"],
  SCO_AC_HR_ROLE: ["M4SCO_AC_HR_ROLE"],
  // `SSP_ACUMULADO_SS` se reparte físicamente entre dos tablas.
  SSP_ACUMULADO_SS: ["M4SSP_ACUMULADO_SS", "M4SSP_ACUMULADO_S1"],
} as const satisfies Record<string, readonly string[]>;

export type RegistroAccumulatorObject = keyof typeof REGISTRO_ACCUMULATOR_TABLES;
export type RegistroAccumulatorTable =
  (typeof REGISTRO_ACCUMULATOR_TABLES)[RegistroAccumulatorObject][number];

export const isRegistroAccumulatorObject = (value: string): value is RegistroAccumulatorObject =>
  Object.hasOwn(REGISTRO_ACCUMULATOR_TABLES, value);

export const objectOfTable = (table: RegistroAccumulatorTable): RegistroObject =>
  table.endsWith("_ROLE") ? "role" : table.includes("ACUMULADO") ? "ss" : "period";

export interface RegistroItemConfig {
  readonly ti: string;
  readonly item: string;
  readonly table: RegistroAccumulatorTable;
  readonly column: string;
  /** `SAL`, `CSAL` o `ESAL`. */
  readonly classification: string;
  readonly subclassification: string;
  readonly normType: string;
  /** `SSP_SIGNO`: 1 resta el acumulado; 0 lo suma. */
  readonly sign: number;
  /** `SSP_COEFICIENTE` (argumento de las normas con coeficiente). */
  readonly coefficient: number | null;
  readonly start: string;
  readonly end: string;
}

/** `M4SSP_IR_ITEM_MAP_ACUM`: a qué casilla `SCO_I_CPTO_n` suma cada combinación. */
export interface RegistroSlotRule {
  readonly sequence: number;
  /** Número de la casilla `SCO_I_CPTO_n`. */
  readonly slot: number;
  readonly classification: string;
  /** `null` = cualquier subclasificación. */
  readonly subclassification: string | null;
  /** `null` = importe real sin normalizar. */
  readonly normType: string | null;
}

/** Columnas «Conceptos …» del Excel (`M4SSP_OUTPUT_COLUMNS` + `M4SSP_IR_COLUMNS_CONFIG`). */
export interface RegistroOutputColumn {
  readonly code: string;
  readonly group: string;
  readonly order: number;
  /** Casilla `SCO_I_CPTO_n` de la columna, si la configuración la trae. */
  readonly slot: number | null;
}

export interface RegistroPersonInfo {
  readonly name?: string;
  readonly nif?: string;
  readonly sex?: string;
  readonly category?: string;
  readonly personalCategoryGroup?: string;
  readonly workplace?: string;
  readonly seniorityDate?: string;
}

/** Un registro del acumulado ya unido (estándar + `CSP_`), como `SSP_IR_AC_NOMINA`. */
export interface RegistroAccumulatorRow {
  readonly object: RegistroObject;
  readonly employeeId: string;
  readonly hrPeriod: number;
  /** Clave de `M4SSP_IR_AC_RETRIB`: alta, imputación, pago, frecuencias y tramo. */
  readonly key: string;
  readonly allocation: string;
  readonly coefJornada: number | null;
  readonly horasAnuConvenio: number | null;
  readonly horasReales: number | null;
  /** Importe por `tabla.columna`. */
  readonly values: ReadonlyMap<string, number>;
}

export interface RegistroPeopleNetData {
  readonly organization: string;
  readonly period: { readonly from: string; readonly to: string };
  readonly items: readonly RegistroItemConfig[];
  readonly slotRules: readonly RegistroSlotRule[];
  /** `SSP_IND_NORMA_LAST_PAY` por norma. */
  readonly lastPayNormas: ReadonlySet<string>;
  readonly outputColumns: readonly RegistroOutputColumn[];
  /** Población del informe (`SRSP_IR_HR_PERIODS_TO_PROCESS`), por `SCO_ID_HR`. */
  readonly people: ReadonlyMap<string, RegistroPersonInfo>;
  readonly rows: readonly RegistroAccumulatorRow[];
  /** Última paga mensual ordinaria (`SSP_IR_AC_RH_LAST_PAY`) por `persona|alta`. */
  readonly lastPay: ReadonlyMap<string, string>;
  /** Meses con aportación definida (`CYC_IR_AUX_NORMA_MES`) por persona. */
  readonly coefMonths: ReadonlyMap<string, number>;
}

export const accumulatorKey = (table: string, column: string): string => `${table}.${column}`;

/**
 * Primera casilla de las columnas de concepto de cada bloque (Salario,
 * C. Salarial, Extrasalarial) y objeto, fijadas en el LN4 de `SSP_PROCESS_ACUM`.
 */
const CONCEPT_SLOT_STARTS: Readonly<Record<string, Record<RegistroObject, readonly number[]>>> = {
  CYC: { period: [16, 46, 81], role: [41, 61, 97], ss: [42, 80, 105] },
  IBER: { period: [16, 43, 83], role: [38, 60, 101], ss: [39, 94, 104] },
};

/** Casillas de cada bloque del Excel (`M4SSP_IR_COLUMNS_CONFIG`, traza). */
const SLOTS = {
  normalizedPlusVariables: [1, 2, 3],
  normalized: [4, 5, 6],
  periodComplete: [13, 14, 15],
} as const;

const NON_NORMALIZED_SLOTS = {
  salaryComplementVariable: 7,
  extraSalaryVariable: 8,
  salaryPpe: 9,
  salaryComplementPpe: 10,
  salaryIt: 11,
  salaryComplementIt: 12,
} as const satisfies Record<keyof RegistroEmployee["nonNormalized"], number>;

const PERIOD_COMPLETE_SLOTS = new Set<number>(SLOTS.periodComplete);

const BLOCKS: Record<ConceptBlockKey, RetributionBlock> = {
  salary: "Salario",
  salaryComplement: "C. Salarial",
  extraSalary: "Extrasalarial",
};

const BLOCK_INDEX: Record<ConceptBlockKey, number> = {
  salary: 0,
  salaryComplement: 1,
  extraSalary: 2,
};

const GROUP_BLOCKS: Record<string, ConceptBlockKey> = {
  "conceptos salario": "salary",
  "conceptos c. salarial": "salaryComplement",
  "conceptos extrasalarial": "extraSalary",
};

export const blockFromGroup = (group: string): ConceptBlockKey | undefined =>
  GROUP_BLOCKS[group.trim().toLowerCase()];

const isActiveInPeriod = (item: RegistroItemConfig, period: RegistroPeopleNetData["period"]) =>
  item.start <= period.to && item.end >= period.from;

/** Filtro de reglas de `SSP_PROCESS_ACUM`: clasificación + (subclasificación) + (norma). */
const ruleMatches = (rule: RegistroSlotRule, item: RegistroItemConfig): boolean =>
  rule.classification === item.classification &&
  (rule.subclassification === null || rule.subclassification === item.subclassification) &&
  (rule.normType === null || rule.normType === item.normType);

/** `DateDiff(inicio, fin, M4_MONTH) + 1`: el informe va de día 1 a fin de mes. */
export const monthsInPeriod = (from: string, to: string): number => {
  const [fromYear = 0, fromMonth = 0] = from.split("-").map(Number);
  const [toYear = 0, toMonth = 0] = to.split("-").map(Number);
  return (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;
};

interface RowHours {
  readonly coefJornada: number;
  readonly horasMesConvenio: number;
  readonly horasMesTrabajadas: number;
}

/** Horas del registro tal como las fija `SSP_PROCESS_ACUM` al crear el acumulado. */
const hoursOf = (row: RegistroAccumulatorRow): RowHours => {
  const anual = row.horasAnuConvenio ? row.horasAnuConvenio : 1800;
  const horasMesConvenio = Math.round(anual / 12);
  return {
    coefJornada: row.coefJornada ?? 1,
    horasMesConvenio,
    horasMesTrabajadas: row.horasReales ?? horasMesConvenio,
  };
};

const emptyMoney = (): MoneyByBlock => ({
  salary: 0,
  salaryComplement: 0,
  extraSalary: 0,
  total: 0,
});

const money = (slots: ReadonlyMap<number, number>, [a, b, c]: readonly number[]): MoneyByBlock => {
  const salary = roundMoney(slots.get(a ?? 0) ?? 0);
  const salaryComplement = roundMoney(slots.get(b ?? 0) ?? 0);
  const extraSalary = roundMoney(slots.get(c ?? 0) ?? 0);
  return {
    salary,
    salaryComplement,
    extraSalary,
    total: roundMoney(salary + salaryComplement + extraSalary),
  };
};

interface EmployeeCalculation {
  readonly slots: Map<number, number>;
  /** Desglose del periodo completo por `objeto|item`. */
  readonly concepts: Map<string, number>;
}

const conceptKey = (object: RegistroObject, item: string) => `${object}|${item}`;

/** `SSP_PROCESS_ACUM` para los registros de una persona. */
function calculateEmployee(
  employeeId: string,
  rows: readonly RegistroAccumulatorRow[],
  itemsByObject: ReadonlyMap<RegistroObject, readonly RegistroItemConfig[]>,
  rules: readonly RegistroSlotRule[],
  data: RegistroPeopleNetData,
  months: number,
): EmployeeCalculation {
  const slots = new Map<number, number>();
  // Las horas se fijan con el primer registro de cada clave (el del alta) y los
  // de rol y Seguridad Social las reutilizan, como `FindRegister` en Meta4.
  const hoursByKey = new Map<string, RowHours>();
  // Las columnas de concepto se escriben con `SetValue` en el acumulado de la
  // clave: el último registro de la clave para el mismo item prevalece.
  const conceptsByKey = new Map<string, Map<string, number>>();
  const coefMonths = data.coefMonths.get(employeeId) ?? 0;

  for (const object of REGISTRO_OBJECTS) {
    const items = itemsByObject.get(object) ?? [];
    for (const row of rows) {
      if (row.object !== object) continue;
      let hours = hoursByKey.get(row.key);
      if (!hours) {
        hours = hoursOf(row);
        hoursByKey.set(row.key, hours);
      }
      const horasConvenioPeriodo = Math.round(hours.horasMesConvenio * months);
      const lastPay = data.lastPay.get(`${row.employeeId}|${row.hrPeriod}`);
      const rowConcepts = new Map<string, number>();

      for (const item of items) {
        let value = row.values.get(accumulatorKey(item.table, item.column)) ?? 0;
        if (item.sign === 1) value = -value;
        for (const rule of rules) {
          if (!ruleMatches(rule, item)) continue;
          let normalized = 0;
          if (rule.normType === null) {
            if (item.normType === "COEF_A" && coefMonths > 0) value = value / coefMonths;
            slots.set(rule.slot, (slots.get(rule.slot) ?? 0) + value);
          } else {
            const norma = NORMAS[rule.normType];
            const coefficient =
              item.normType === "COEF_A" && coefMonths > 0
                ? 1 / coefMonths
                : (item.coefficient ?? 1);
            normalized = norma
              ? norma.fn({
                  value,
                  coefJornada: hours.coefJornada,
                  coefNormalizacion: coefficient,
                  horasConvenioPeriodo,
                  horasMesTrabajadas: hours.horasMesTrabajadas,
                  horasMesConvenio: hours.horasMesConvenio,
                })
              : 0;
            if (data.lastPayNormas.has(rule.normType) && lastPay !== row.allocation) normalized = 0;
            slots.set(rule.slot, (slots.get(rule.slot) ?? 0) + normalized);
          }
          if (PERIOD_COMPLETE_SLOTS.has(rule.slot)) {
            const key = conceptKey(object, item.item);
            rowConcepts.set(key, (rowConcepts.get(key) ?? 0) + normalized);
          }
        }
      }

      const keyConcepts = conceptsByKey.get(row.key) ?? new Map<string, number>();
      for (const [key, amount] of rowConcepts) keyConcepts.set(key, amount);
      conceptsByKey.set(row.key, keyConcepts);
    }
  }

  const concepts = new Map<string, number>();
  for (const keyConcepts of conceptsByKey.values()) {
    for (const [key, amount] of keyConcepts) concepts.set(key, (concepts.get(key) ?? 0) + amount);
  }
  return { slots, concepts };
}

interface ConceptColumn {
  readonly code: string;
  readonly blockKey: ConceptBlockKey;
  readonly object: RegistroObject | null;
}

/**
 * Objeto de cada columna de concepto. Un item configurado en varias TI ocupa
 * una casilla en cada objeto; la casilla de la columna dice cuál se muestra.
 */
function resolveColumns(
  data: RegistroPeopleNetData,
  completeItems: readonly RegistroItemConfig[],
): ConceptColumn[] {
  const starts = CONCEPT_SLOT_STARTS[data.organization];
  const seen = new Set<string>();
  return [...data.outputColumns]
    .sort((a, b) => a.order - b.order)
    .flatMap((column): ConceptColumn[] => {
      const blockKey = blockFromGroup(column.group);
      if (!blockKey || seen.has(`${column.slot ?? column.code}`)) return [];
      seen.add(`${column.slot ?? column.code}`);
      const objects = [
        ...new Set(
          completeItems
            .filter((item) => item.item === column.code)
            .map((item) => objectOfTable(item.table)),
        ),
      ];
      let object = objects[0] ?? null;
      if (objects.length > 1 && starts && column.slot !== null) {
        const index = BLOCK_INDEX[blockKey];
        const slot = column.slot;
        object =
          objects
            .filter((candidate) => (starts[candidate][index] ?? Infinity) <= slot)
            .sort((a, b) => (starts[b][index] ?? 0) - (starts[a][index] ?? 0))[0] ?? object;
      }
      return [{ code: column.code, blockKey, object }];
    });
}

export function buildRegistroFromPeopleNet(data: RegistroPeopleNetData): RegistroParseResult {
  const warnings: string[] = [];
  const months = monthsInPeriod(data.period.from, data.period.to);
  const activeItems = data.items.filter((item) => isActiveInPeriod(item, data.period));
  const rules = [...data.slotRules].sort((a, b) => a.slot - b.slot || a.sequence - b.sequence);

  const itemsByObject = new Map<RegistroObject, RegistroItemConfig[]>();
  for (const item of activeItems) {
    const object = objectOfTable(item.table);
    itemsByObject.set(object, [...(itemsByObject.get(object) ?? []), item]);
  }
  const completeItems = activeItems.filter((item) =>
    rules.some((rule) => PERIOD_COMPLETE_SLOTS.has(rule.slot) && ruleMatches(rule, item)),
  );

  const unknownNormas = [
    ...new Set(
      rules.flatMap((rule) => (rule.normType && !NORMAS[rule.normType] ? [rule.normType] : [])),
    ),
  ];
  if (unknownNormas.length) {
    warnings.push(`Normas sin fórmula conocida (cuentan 0): ${unknownNormas.join(", ")}.`);
  }

  const columns = resolveColumns(data, completeItems);
  if (columns.length === 0) {
    warnings.push("No se ha encontrado la configuración de columnas REG_RETRIB del Registro.");
  }
  const conceptCodes: AvailableConceptCodes = {
    salary: columns.filter((column) => column.blockKey === "salary").map((column) => column.code),
    salaryComplement: columns
      .filter((column) => column.blockKey === "salaryComplement")
      .map((column) => column.code),
    extraSalary: columns
      .filter((column) => column.blockKey === "extraSalary")
      .map((column) => column.code),
  };

  const rowsByEmployee = new Map<string, RegistroAccumulatorRow[]>();
  for (const row of data.rows) {
    rowsByEmployee.set(row.employeeId, [...(rowsByEmployee.get(row.employeeId) ?? []), row]);
  }

  const records = [...data.people.keys()]
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
    .map((employeeId, index): RegistroEmployee => {
      const person = data.people.get(employeeId) ?? {};
      const calculation = calculateEmployee(
        employeeId,
        rowsByEmployee.get(employeeId) ?? [],
        itemsByObject,
        rules,
        data,
        months,
      );
      const concepts: RegistroConceptAmount[] = columns.map((column) => ({
        block: BLOCKS[column.blockKey],
        blockKey: column.blockKey,
        code: column.code,
        amount: column.object
          ? roundMoney(calculation.concepts.get(conceptKey(column.object, column.code)) ?? 0)
          : 0,
      }));
      const slot = (n: number) => roundMoney(calculation.slots.get(n) ?? 0);

      return {
        sourceRow: index + 1,
        employeeNumber: employeeId,
        workerName: person.name,
        workerNif: person.nif,
        sex: person.sex,
        category: person.category,
        personalCategoryGroup: person.personalCategoryGroup,
        workplace: person.workplace,
        seniorityDate: person.seniorityDate,
        normalizedPlusVariables: money(calculation.slots, SLOTS.normalizedPlusVariables),
        normalized: money(calculation.slots, SLOTS.normalized),
        periodComplete: money(calculation.slots, SLOTS.periodComplete),
        // «Última situación» agrupa por puesto, convenio y categoría en la
        // generación del Excel; ninguna comparativa la usa y no se reproduce.
        lastSituation: emptyMoney(),
        nonNormalized: {
          salaryComplementVariable: slot(NON_NORMALIZED_SLOTS.salaryComplementVariable),
          extraSalaryVariable: slot(NON_NORMALIZED_SLOTS.extraSalaryVariable),
          salaryPpe: slot(NON_NORMALIZED_SLOTS.salaryPpe),
          salaryComplementPpe: slot(NON_NORMALIZED_SLOTS.salaryComplementPpe),
          salaryIt: slot(NON_NORMALIZED_SLOTS.salaryIt),
          salaryComplementIt: slot(NON_NORMALIZED_SLOTS.salaryComplementIt),
        },
        excelBreakdownDiffs: { salary: 0, salaryComplement: 0, extraSalary: 0 },
        concepts,
        raw: { origen: "PeopleNet" },
      };
    });

  const sumBlock = (record: RegistroEmployee, blockKey: ConceptBlockKey) =>
    roundMoney(
      record.concepts
        .filter((concept) => concept.blockKey === blockKey)
        .reduce((sum, concept) => sum + concept.amount, 0),
    );

  return {
    sheetName: "PeopleNet",
    headerRows: { group: 0, subheader: 0, firstData: 0 },
    columnMap: {},
    conceptCodes,
    records,
    internalChecks: records.map((record) =>
      createInternalCheck({
        employee: record,
        salaryBreakdown: sumBlock(record, "salary"),
        salaryComplementBreakdown: sumBlock(record, "salaryComplement"),
        extraSalaryBreakdown: sumBlock(record, "extraSalary"),
      }),
    ),
    warnings,
    normalizedAvailable: true,
  };
}
