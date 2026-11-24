/**
 * Builds every row Meta4 writes for one hire, as the transfer category
 * SAVE_HIRE and the LDB would: no database access, so it can be checked
 * before anything is written. `write.ts` inserts the result in one transaction.
 */
import { bankAccountParts, cellsForPerson } from "../cells";
import { Meta4HireError } from "../errors";
import type { HirePerson } from "../types";
import { createItemResolver, hireColumnValues, type ItemValue, type ResolvedItem } from "./items";
import type { HireModel, HireModelColumn, HireModelTable } from "./model-types";
import {
  INTERNAL_EXPERIENCE_COMMENT,
  familyName,
  formatIban,
  globalAddress,
  globalName,
  needsRetirementRow,
  parkingSpace,
  roleName,
} from "./rules";

export type SqlScalar = string | number | Date | null;

export type HireRow = {
  table: string;
  /** Columns to insert; columns left out take the SQL Server default. */
  values: Record<string, SqlScalar>;
};

/** Read before planning (lookups.ts); null when PeopleNet has no such entry. */
export type HireLookups = {
  jobName: string | null;
  positionName: string | null;
  placeName: string | null;
  provinceName: string | null;
  countryName: string | null;
  /** `M4SSP_BANK_BIC_CODES` for the bank of a Spanish IBAN. */
  bic: string | null;
};

export type HirePlanInput = {
  model: HireModel;
  person: HirePerson;
  personId: string;
  society: string;
  /** Meta4 user and role that own the rows (`ID_SECUSER`, `ID_APPROLE`). */
  secUser: string;
  appRole: string;
  now: Date;
  lookups: HireLookups;
};

/** A transfer record Meta4 does not save because a value it needs came empty. */
export type SkippedHireRow = { table: string; missing: string[] };

export type HirePlan = {
  rows: HireRow[];
  /** Records left out like Meta4 does (e.g. annual gross row without amount). */
  skipped: SkippedHireRow[];
  /** Audit rows; `write.ts` adds `ID_EXECUTION` from `M4RDC_SEQUENCE`. */
  audit: HireRow[];
};

/**
 * Tables every CYC hire of 2026 has (69/69), fed by required form fields.
 * Their rows are never skipped: a missing required value is an error, and the
 * plan fails if one of them is not written.
 */
export const HIRE_CORE_TABLES: ReadonlySet<string> = new Set([
  "STD_PERSON",
  "STD_PERSON1",
  "STD_HR",
  "STD_HR_PERIOD",
  "STD_ADDRESS",
  // STD_HR_NAT is not here: nationality is optional and Meta4 adds no row without it.
  "STD_HT_MAR_STAT",
  "M4SCO_HR_ROLE",
  "M4SCO_H_HR_WLOC",
  "M4SCO_H_HR_WUNIT",
  "M4SCO_H_HR_RO_TIME",
  "M4SCO_H_HR_LEGENT",
  "M4SSP_H_CATEGORIA",
  "M4SSP_H_CENT_COS",
  "M4SSP_HT_SIT_IRPF",
  "M4CYC_H_ESTRUCTURA",
]);

/** The only audit tables Meta4 fills on a hire (rows since 2026 in PeopleNet). */
export const AUDITED_TABLES: ReadonlySet<string> = new Set([
  "STD_HR_PERIOD",
  "M4SCO_H_HR_JOB",
  "M4SCO_H_HR_WLOC",
  "M4SCO_H_HR_WUNIT",
]);

/**
 * Never written by the hire:
 * - M4SSP_TMP_DATCONT: contract scratch table SRCO_DELETE_TMP_DATA empties once
 *   SRSP_PASAR_TMP_A_PERIOD has moved it to the period.
 * - M4VCH_DMD_COMPNTS: dictionary table the payroll-values groups only read.
 * - M4SSP_H_IRPF: filled by the payroll IRPF calculation (its required columns
 *   are its results; only 8 of 62 real hires have a row saved with the hire).
 */
const NOT_WRITTEN: ReadonlySet<string> = new Set([
  "M4SSP_TMP_DATCONT",
  "M4VCH_DMD_COMPNTS",
  "M4SSP_H_IRPF",
]);

/**
 * Groups the Spanish localization replaces with its own: PERIOD_PAYMENT_DATA
 * (SRCO) takes the payroll currency, usually empty, while every real hire has
 * `M4SCO_PAYMENT_DATA.ID_CURRENCY_DATA`, which SRSP_PERIOD_DATOSPAGO_SAVE copies
 * from the payment data. Both would add a payment row; real hires have one.
 */
const SUPERSEDED_GROUPS: ReadonlySet<string> = new Set(["PERIOD_PAYMENT_DATA"]);

/**
 * CYC history tables Meta4 only fills when their own value comes with the hire:
 * a job code alone does not create an equivalence row (none of the 69 real
 * hires of 2026 has one).
 */
const MAIN_VALUE: Readonly<Record<string, string>> = {
  M4CSP_H_EQUIV_CAT_JOB_CYC: "CSP_ID_EQUIV_CAT_JOB_CYC",
  M4CSP_H_CAT_PER_CYC: "CSP_ID_CAT_PER_CYC",
  M4CSP_H_CAT_TEORICA: "ID_CAT_TEORICA",
};

const PERSON_KEY_TYPES = new Set(["STD_ID_PERSON", "STD_ID_HR"]);
/** Some SSP tables type their person key as SSP_VARSTRING9: the name decides too. */
const PERSON_KEY_NAME = /^(?:STD_|SCO_|SSP_|CSP_)?ID_(?:HR|PERSON)$/;

/** Key columns of the person; a non-key column typed as a person ID (SFR_OTHER_ID) is not one. */
const isPersonKey = (column: HireModelColumn): boolean =>
  (column.pk !== undefined && column.type !== undefined && PERSON_KEY_TYPES.has(column.type)) ||
  PERSON_KEY_NAME.test(column.name);

/** Catalog nodes (no person key) are only read by the transfer, never written. */
const isPersonTable = (definition: HireModelTable): boolean => definition.columns.some(isPersonKey);
const ORDINAL_FUNCTIONS = new Set([9, 10]);
const HIRE_ARGUMENT_NODE = "SRCO_PA_HIRE.";
const END_OF_TIME = "4000-01-01";

const isDateType = (sqlType: string) => /date|time/.test(sqlType);
const isNumberType = (sqlType: string) =>
  /^(numeric|decimal|int|bigint|smallint|tinyint|float|real|money|smallmoney|bit)$/.test(sqlType);

const excelSerialToDate = (serial: number): Date =>
  new Date(Date.UTC(1899, 11, 30) + Math.round(serial * 86_400_000));

const isoToDate = (value: string): Date | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(value);
  if (!match) return null;
  return new Date(
    Date.UTC(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3]),
      Number(match[4] ?? 0),
      Number(match[5] ?? 0),
    ),
  );
};

const planError = (message: string, detail: string): Meta4HireError =>
  new Meta4HireError("META4_HIRE_VALIDATION", message, [{ message: detail }]);

/** Converts an item value to the column's SQL type; never echoes the value in errors. */
const toSql = (table: string, column: HireModelColumn, value: ItemValue | Date): SqlScalar => {
  if (value === null || value === "") return null;
  if (value instanceof Date) return value;
  if (isDateType(column.sqlType)) {
    const date = typeof value === "number" ? excelSerialToDate(value) : isoToDate(value);
    if (!date) throw planError("Una fecha del alta no es válida.", `${table}.${column.name}`);
    return date;
  }
  if (isNumberType(column.sqlType)) {
    const number = typeof value === "number" ? value : Number(value.replace(",", "."));
    if (!Number.isFinite(number)) {
      throw planError("Un número del alta no es válido.", `${table}.${column.name}`);
    }
    return number;
  }
  const text = typeof value === "number" ? String(value) : value;
  if (column.length !== undefined && column.length > 0 && text.length > column.length) {
    throw planError(
      "Un dato del alta es más largo de lo que admite PeopleNet.",
      `${table}.${column.name}: máximo ${column.length} caracteres.`,
    );
  }
  return text;
};

/** Value an empty column takes when Meta4 saves it (extended type default). */
const ldbDefault = (
  column: HireModelColumn,
  input: HirePlanInput,
): ItemValue | Date | undefined => {
  if (isPersonKey(column)) return input.personId;
  if (column.name === "ID_ORGANIZATION") {
    return column.type === "ID_ORG_MONO" ? (column.defaultArgs ?? "0000") : input.society;
  }
  if (column.name === "ID_SECUSER") return input.secUser;
  if (column.name === "ID_APPROLE") return input.appRole;
  switch (column.defaultFunction) {
    case 2:
      return new Date(Date.UTC(input.now.getFullYear(), input.now.getMonth(), input.now.getDate()));
    case 3:
    case 5:
      return input.now;
    case 6:
    case 7:
    case 8:
      return column.defaultArgs ?? undefined;
    case 17:
      return input.society;
    default:
      return undefined;
  }
};

type DraftRecord = { node: string; columns: Map<string, ItemValue>; hasData: boolean };

const recordKey = (node: string, group: string): string =>
  `${node}#${/\+\+(\d+)$/.exec(group)?.[1] ?? "0"}`;

const tableOf = (column: string): string => column.slice(0, column.indexOf("."));
const columnOf = (column: string): string => column.slice(column.indexOf(".") + 1);

const tableModel = (model: HireModel, table: string): HireModelTable => {
  const found = model.tables[table];
  if (!found)
    throw new Meta4HireError("META4_HIRE_CONFIG", `El modelo del alta no tiene ${table}.`);
  return found;
};

/** Items the hire Meta4Object fills itself before SAVE_HIRE copies them. */
const calculatedItems = (input: HirePlanInput): Record<string, ItemValue> => {
  const { person, personId, lookups } = input;
  const surnames = familyName(person.lastName1, person.lastName2);
  const bank = bankAccountParts(person);
  const hasIban = bank.iban !== "";
  const hasAccount = hasIban || bank.account !== "";
  const role =
    person.positionChoice === "position"
      ? lookups.positionName && roleName("position", lookups.positionName)
      : lookups.jobName && roleName("job", lookups.jobName);
  const currency = person.payrollCurrency || "EUR";
  const bankItems = (node: string): Record<string, ItemValue> => ({
    [`${node}.PLCO_IBAN_COMPLETE`]: hasIban ? 1 : hasAccount ? 0 : null,
    [`${node}.SCO_GB_IBAN`]: hasIban ? formatIban(bank.iban) : null,
    [`${node}.SCO_IBAN_CODE`]: hasIban ? bank.ibanCountry : null,
    [`${node}.SCO_IBAN_KEY`]: null,
    [`${node}.SCO_ID_BANK_BRANCH`]: bank.bankBranch || null,
    [`${node}.SCO_ID_BANK`]: bank.bank || null,
    [`${node}.SCO_ID_BRANCH`]: bank.branch || null,
    [`${node}.SSP_DC`]: bank.controlDigits || null,
    [`${node}.SCO_ACCOUNT_NUMBER`]: bank.account || null,
    [`${node}.SSP_BIC_CODE`]: hasAccount ? lookups.bic : null,
    [`${node}.SCO_OR_ACCOUNT`]: hasAccount ? 1 : null,
  });
  return {
    [`${HIRE_ARGUMENT_NODE}SRCO_ARG_ID_PERSON`]: personId,
    [`${HIRE_ARGUMENT_NODE}SRCO_ID_PERSON_TO_TRANSFER`]: personId,
    [`${HIRE_ARGUMENT_NODE}SRCO_PERSON_MAINPAYEE`]: personId,
    [`${HIRE_ARGUMENT_NODE}SRCO_DT_HIRE_PARAM`]: person.hireDate,
    [`${HIRE_ARGUMENT_NODE}SRCO_ARG_DT_HIRE`]: person.hireDate,
    // New period and role: Meta4 numbers them with the next ordinal (1).
    [`${HIRE_ARGUMENT_NODE}SRCO_ARG_OR_HR_PERIOD`]: null,
    [`${HIRE_ARGUMENT_NODE}SRCO_ARG_OR_HR_ROLE`]: null,
    "SRCO_PA_HIRE_WIZ_ORG.SCO_DT_START": person.hireDate,
    "SRCO_PA_HIRE_WIZ_ORG.SCO_MAIN_ROLE": "1",
    "SRCO_PA_HIRE_WIZ_ORG.SCO_N_ROLE": role || null,
    "SRCO_PA_HIRE_WIZ_PERS_DATA.STD_N_FAMILY_NAME_1": surnames,
    "SRCO_PA_HIRE_WIZ_PERS_DATA.SCO_GB_NAME": globalName(surnames, person.firstName),
    ...bankItems("SRCO_PA_HIRE_WIZ_PAYROLL"),
    ...bankItems("SRSP_PA_HIRE_WIZ_DATOS_PAGO"),
    "SRSP_PA_HIRE_WIZ_DATOS_PAGO.SRSP_EMP_CHECK": hasAccount ? "1" : null,
    "SRSP_PA_HIRE_WIZ_DATOS_PAGO.SRSP_ID_BENEFICIARIO": hasAccount ? personId : null,
    "SRCO_PA_HIRE_WIZ_PAYROLL.SRSP_ID_CURRENCY_NOM": currency,
    "SRCO_PA_HIRE_WIZ_PAYROLL.SRCO_SAL_DATA_ID_CURRENCY": currency,
    "SRCO_PA_HIRE_WIZ_PAY.SRCO_SAL_DATA_ID_CURRENCY": currency,
    "SRSP_PA_HIRE_WIZ_PROF.SRSP_ID_CURRENCY": currency,
    // Account currency: the template's ESP is stale; PeopleNet accounts since 2026 are EUR.
    "SRSP_PA_HIRE_WIZ_DATOS_PAGO.ID_CURRENCY_2":
      person.accountCurrency || person.paymentCurrency || "EUR",
    "SRCO_PA_HIRE_WIZ_PAYROLL.ID_CURRENCY_2":
      person.accountCurrency || person.paymentCurrency || "EUR",
    // Exchange type of the salary data: 1 in every PeopleNet row since 2026.
    "SRCO_PA_HIRE_WIZ_PAYROLL.SRCO_SAL_DATA_EX_TYPE": "1",
    "SRCO_PA_HIRE_WIZ_PAY.SRCO_SAL_DATA_EX_TYPE": "1",
  };
};

/** SAVE_HIRE copies, group by group, into one record per maintenance node (`++N` = another one). */
const transferRecords = (
  input: HirePlanInput,
  resolve: (item: string) => ResolvedItem,
): DraftRecord[] => {
  const records = new Map<string, DraftRecord>();
  for (const group of input.model.groups) {
    if (SUPERSEDED_GROUPS.has(group.group)) continue;
    const valueOf = (map: (typeof group.maps)[number] & { kind: "copy" }) => {
      const source = map.from ? resolve(map.from) : { value: null, personal: false };
      return { source, value: source.value ?? map.default ?? null };
    };
    // A group that gives a key another value (e-mail location type 9 vs 2) fills another record.
    const ownRecord = new Set<string>();
    for (const map of group.maps) {
      if (map.kind !== "copy" || !map.pk) continue;
      const existing = records.get(recordKey(map.node, group.group));
      const { value } = valueOf(map);
      if (
        value !== null &&
        existing &&
        map.columns.some(
          (column) => existing.columns.has(column) && existing.columns.get(column) !== value,
        )
      ) {
        ownRecord.add(map.node);
      }
    }
    for (const map of group.maps) {
      if (map.kind !== "copy" || map.columns.length === 0) continue;
      const { source, value } = valueOf(map);
      const key = ownRecord.has(map.node)
        ? `${map.node}#${group.group}`
        : recordKey(map.node, group.group);
      const record = records.get(key) ?? { node: map.node, columns: new Map(), hasData: false };
      records.set(key, record);
      if (value === null || value === "") continue;
      for (const column of map.columns) record.columns.set(column, value);
      // Hire arguments (ID, dates, ordinals) and fixed values alone never make Meta4 add a record.
      if (source.value !== null && map.from && !map.from.startsWith(HIRE_ARGUMENT_NODE)) {
        record.hasData = true;
      }
    }
  }
  return [...records.values()].filter((record) => record.hasData);
};

/** One row per physical table of each record's logic object (split objects get both). */
/** Tables every hire writes even without data: SRCO_INSERT_HR adds the STD_HR record. */
const ALWAYS_WRITTEN = ["STD_HR"] as const;

const recordRows = (model: HireModel, records: readonly DraftRecord[]): Draft[] => {
  const rows: Draft[] = [];
  for (const record of records) {
    const written = [...record.columns.keys()]
      .map(tableOf)
      .filter((table) => !NOT_WRITTEN.has(table) && isPersonTable(tableModel(model, table)));
    const tables = new Set(written);
    for (const table of written) {
      const object = tableModel(model, table).object;
      for (const [other, definition] of Object.entries(model.tables)) {
        if (definition.object === object && !other.startsWith("AUC_") && !NOT_WRITTEN.has(other)) {
          tables.add(other);
        }
      }
    }
    for (const table of tables) {
      const definition = tableModel(model, table);
      const names = new Set(definition.columns.map((column) => column.name));
      const values = new Map<string, ItemValue | Date>();
      for (const [column, value] of record.columns) {
        if (tableOf(column) !== table) continue;
        values.set(physicalColumn(table, columnOf(column), names), value);
      }
      const main = MAIN_VALUE[table];
      if (main && !values.get(main)) continue;
      rows.push({ table, values, optional: true });
    }
  }
  for (const table of ALWAYS_WRITTEN) {
    if (!rows.some((row) => row.table === table)) rows.push({ table, values: new Map() });
  }
  return rows;
};

/** Multilingual logic fields are saved in the Spanish column (`SCO_N_ROLE` -> `SCO_N_ROLEESP`). */
const physicalColumn = (table: string, column: string, names: ReadonlySet<string>): string => {
  if (names.has(column)) return column;
  if (names.has(`${column}ESP`)) return `${column}ESP`;
  throw new Meta4HireError("META4_HIRE_CONFIG", `El modelo del alta no tiene ${table}.${column}.`);
};

const text = (value: ItemValue | Date | undefined): string =>
  value === null || value === undefined || value instanceof Date ? "" : String(value);

/** Columns Meta4 calculates while saving (rules.ts). */
const applySaveRules = (
  rows: { table: string; values: Map<string, ItemValue | Date> }[],
  input: HirePlanInput,
): void => {
  for (const row of rows) {
    const v = row.values;
    if (row.table === "STD_ADDRESS") {
      const zip = text(v.get("STD_ZIP_CODE"));
      if (zip) v.set("SSP_DISTRIT_POSTAL", zip);
      v.set(
        "SCO_GB_ADDRESS",
        globalAddress({
          roadType: text(v.get("SSP_ID_SIGLA_DOMIC")),
          line1: text(v.get("STD_ADDRESS_LINE_1")),
          streetNumber: text(v.get("SSP_NUM_VIA")),
          block: text(v.get("SSP_BLOQUE")),
          staircase: text(v.get("SSP_ESCALERA")),
          floor: text(v.get("SSP_PISO")),
          door: text(v.get("SSP_PUERTA")),
          postalCode: text(v.get("SSP_DISTRIT_POSTAL")) || zip,
          placeName: v.get("STD_ID_GEO_PLACE") ? input.lookups.placeName : null,
          provinceName: v.get("STD_ID_SUB_GEO_DIV") ? input.lookups.provinceName : null,
          countryName: v.get("STD_ID_COUNTRY") ? input.lookups.countryName : null,
        }),
      );
    }
    if (row.table === "M4SCO_PERSON_BANK") {
      const gbIban = v.get("SCO_GB_IBAN");
      if (gbIban) v.set("SCO_GB_BANK", gbIban);
      else if (text(v.get("SCO_ID_BANK_BRANCH")) && text(v.get("SCO_ACCOUNT_NUMBER"))) {
        v.set(
          "SCO_GB_BANK",
          `${text(v.get("SCO_ID_BANK_BRANCH"))} ${text(v.get("SCO_ACCOUNT_NUMBER"))}`,
        );
      }
    }
    if (row.table === "M4CYC_H_ESTRUCTURA" && v.get("ID_ESTRUCTURA") !== undefined) {
      v.set("CSP_PLAZA_GARAJE", parkingSpace(text(v.get("ID_ESTRUCTURA"))));
    }
  }
};

/** Rows SRCO_SAVE_HIRE and CSP_ACT_CV add after the transfer. */
const afterSaveRows = (
  rows: readonly { table: string; values: Map<string, ItemValue | Date> }[],
  input: HirePlanInput,
  resolve: (item: string) => ResolvedItem,
) => {
  const extra: { table: string; values: Map<string, ItemValue | Date> }[] = [];
  // The role's job code becomes its job history row (role TI logic, not a transfer copy).
  const jobCode = resolve("SRCO_PA_HIRE_WIZ_ORG.STD_ID_JOB_CODE").value;
  if (jobCode && rows.some((row) => row.table === "M4SCO_HR_ROLE")) {
    extra.push({
      table: "M4SCO_H_HR_JOB",
      values: new Map<string, ItemValue | Date>([
        ["SCO_ID_JOB_CODE", jobCode],
        ["SCO_DT_START", input.person.hireDate],
      ]),
    });
  }
  const hrType = text(resolve(`${HIRE_ARGUMENT_NODE}SRCO_ARG_ID_HR_TYPE`).value);
  if (needsRetirementRow(hrType, input.personId)) {
    extra.push({
      table: "M4CSP_H_COMP_JUBILACION",
      values: new Map<string, ItemValue | Date>([
        ["CSP_ID_TIPO_JUBILACION", "1"],
        ["DT_START", input.person.hireDate],
        ["DT_END", END_OF_TIME],
      ]),
    });
  }
  const job = jobCode;
  if (job) {
    extra.push({
      table: "STD_HR_PREV_JOBS",
      values: new Map<string, ItemValue | Date>([
        ["CSP_EXP_INT", "1"],
        ["CSP_ID_PREV_JOB", job],
        ["CSP_N_PREV_JOB", input.lookups.jobName],
        ["SCO_COMMENT", INTERNAL_EXPERIENCE_COMMENT],
        ["STD_DT_START", input.person.hireDate],
        ["STD_DT_END", END_OF_TIME],
      ]),
    });
  }
  return extra;
};

/** Keys, LDB defaults, ordinals and SQL types for every row; required gaps are errors. */
type Draft = { table: string; values: Map<string, ItemValue | Date>; optional?: boolean };

const finishRows = (
  drafts: readonly Draft[],
  input: HirePlanInput,
  skipped: SkippedHireRow[],
): HireRow[] => {
  const nextOrdinal = new Map<string, number>();
  return drafts.flatMap((draft): HireRow[] => {
    const definition = tableModel(input.model, draft.table);
    const values: Record<string, SqlScalar> = {};
    for (const column of definition.columns) {
      const raw = draft.values.has(column.name)
        ? (draft.values.get(column.name) ?? null)
        : (ldbDefault(column, input) ?? null);
      values[column.name] = raw === null ? null : toSql(draft.table, column, raw);
    }
    // Ordinals: next number among rows that share the rest of the primary key.
    for (const column of definition.columns) {
      if (values[column.name] !== null || !ORDINAL_FUNCTIONS.has(column.defaultFunction ?? 0))
        continue;
      const scope = definition.columns
        .filter((other) => other.pk !== undefined && other.name !== column.name)
        .map((other) => `${other.name}=${String(values[other.name] ?? "")}`)
        .join("|");
      const key = `${draft.table}.${column.name}|${column.pk === undefined ? "" : scope}`;
      const next = (nextOrdinal.get(key) ?? 0) + 1;
      nextOrdinal.set(key, next);
      values[column.name] = next;
    }
    const missing = definition.columns.filter(
      (column) => column.required && !column.sqlDefault && values[column.name] === null,
    );
    if (missing.length > 0) {
      const names = missing.map((column) => column.name);
      // A transfer record whose own mapped value came empty is not saved (Meta4 skips it).
      if (
        draft.optional &&
        !HIRE_CORE_TABLES.has(draft.table) &&
        missing.every(
          (column) =>
            draft.values.has(column.name) ||
            mappedColumns(input.model, draft.table).has(column.name),
        )
      ) {
        skipped.push({ table: draft.table, missing: names });
        return [];
      }
      throw planError(
        "Faltan datos obligatorios para grabar el alta en PeopleNet.",
        names.map((name) => `${draft.table}.${name}`).join(", "),
      );
    }
    for (const column of definition.columns) {
      if (values[column.name] === null) delete values[column.name];
    }
    return [{ table: draft.table, values }];
  });
};

/** Columns some SAVE_HIRE step writes into, per table. */
const mappedColumnsCache = new WeakMap<HireModel, Map<string, Set<string>>>();
const mappedColumns = (model: HireModel, table: string): ReadonlySet<string> => {
  let byTable = mappedColumnsCache.get(model);
  if (!byTable) {
    byTable = new Map();
    for (const group of model.groups) {
      for (const map of group.maps) {
        if (map.kind !== "copy") continue;
        for (const column of map.columns) {
          const name = columnOf(column);
          const set = byTable.get(tableOf(column)) ?? new Set<string>();
          set.add(name);
          set.add(`${name}ESP`);
          byTable.set(tableOf(column), set);
        }
      }
    }
    mappedColumnsCache.set(model, byTable);
  }
  return byTable.get(table) ?? new Set();
};

const auditRows = (rows: readonly HireRow[], input: HirePlanInput): HireRow[] => {
  const order = new Map<string, number>();
  return rows.flatMap((row) => {
    const audit = input.model.tables[row.table]?.audit;
    if (!audit || !AUDITED_TABLES.has(row.table)) return [];
    const definition = tableModel(input.model, audit);
    const next = (order.get(audit) ?? 0) + 1;
    order.set(audit, next);
    const values: Record<string, SqlScalar> = {};
    for (const column of definition.columns) {
      if (column.name === "ID_EXECUTION") continue;
      if (column.name === "ID_ORDER") values.ID_ORDER = next;
      else if (column.name === "ID_TYPE") values.ID_TYPE = "I";
      else if (column.name === "DT_OPER") values.DT_OPER = input.now;
      else if (row.values[column.name] !== undefined)
        values[column.name] = row.values[column.name] ?? null;
    }
    return [{ table: audit, values }];
  });
};

export const planHire = (input: HirePlanInput): HirePlan => {
  const columns = hireColumnValues(input.model, cellsForPerson(input.person, input.personId));
  const resolve = createItemResolver(input.model, columns, calculatedItems(input));
  const drafts = recordRows(input.model, transferRecords(input, resolve));
  applySaveRules(drafts, input);
  const skipped: SkippedHireRow[] = [];
  const rows = finishRows([...drafts, ...afterSaveRows(drafts, input, resolve)], input, skipped);
  const absent = [...HIRE_CORE_TABLES].filter((table) => !rows.some((row) => row.table === table));
  if (absent.length > 0) {
    throw planError("Faltan datos para grabar el alta completa en PeopleNet.", absent.join(", "));
  }
  return { rows, skipped, audit: auditRows(rows, input) };
};
