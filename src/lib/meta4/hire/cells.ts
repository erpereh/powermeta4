/**
 * Cells of the AltaNueva row for one person, shared by the Excel writer and the
 * direct PeopleNet writer so both send Meta4 exactly the same values.
 */
import {
  HIRE_CATALOG_FIELD_IDS,
  HIRE_CATALOG_FIELDS,
  HIRE_CONTRACT_FIELDS,
  lastGeoSegment,
  parseReferenceModelOptionId,
  type HireCatalogFieldId,
} from "./catalogs";
import { spanishControlDigits, splitSpanishIban } from "./bank";
import {
  DERIVED_COLUMNS,
  HIRE_COST_CENTER_LIST_VALUE,
  HIRE_PERSON_ID_COLUMN,
  MANUAL_COLUMNS,
  toExcelSerialDate,
  toExcelSerialDateTime,
} from "./mapping";
import type { HirePerson } from "./types";

export type CellEdit =
  | { column: string; kind: "text"; value: string }
  | { column: string; kind: "literal"; value: string }
  | { column: string; kind: "number"; value: number }
  | { column: string; kind: "clear" };

const columnIndex = (column: string): number =>
  [...column].reduce((value, char) => value * 26 + char.charCodeAt(0) - 64, 0);
export const adjacentCellRuns = (cells: readonly CellEdit[]) => {
  const runs: { first: string; last: string; cells: CellEdit[] }[] = [];
  for (const cell of [...cells].sort((a, b) => columnIndex(a.column) - columnIndex(b.column))) {
    const previous = runs.at(-1);
    if (previous && columnIndex(cell.column) === columnIndex(previous.last) + 1) {
      previous.cells.push(cell);
      previous.last = cell.column;
    } else runs.push({ first: cell.column, last: cell.column, cells: [cell] });
  }
  return runs;
};

const textCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "text", value },
  );

/** Catalog IDs such as "0001" must reach the import as text, never as numbers. */
const literalCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "literal", value },
  );

const numberCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "number", value: Number(value) },
  );

const dateCells = (columns: readonly string[], value: string, dateTime = false): CellEdit[] =>
  columns.map((column) =>
    value === ""
      ? { column, kind: "clear" }
      : {
          column,
          kind: "number",
          value: dateTime ? toExcelSerialDateTime(value) : toExcelSerialDate(value),
        },
  );

/** Visible Si/No and bound PeopleNet code from SRCO_VALIDATION A:E. */
const checkCells = (
  columns: readonly [string, string],
  value: boolean,
  code: "number" | "letter",
): CellEdit[] => [
  { column: columns[0], kind: "text", value: value ? "Si" : "No" },
  code === "number"
    ? { column: columns[1], kind: "number", value: value ? 1 : 0 }
    : { column: columns[1], kind: "text", value: value ? "S" : "N" },
];

const choiceCells = (
  columns: readonly [string, string],
  label: string,
  code: string | number,
): CellEdit[] => {
  if (label === "") return textCells(columns, "");
  return [
    { column: columns[0], kind: "text", value: label },
    typeof code === "number"
      ? { column: columns[1], kind: "number", value: code }
      : { column: columns[1], kind: "text", value: code },
  ];
};

const HOUR_TYPE_LABELS: Record<string, string> = {
  "1": "Semanales",
  "2": "Mensuales",
  "3": "Anuales",
};

/** The template stores these IDs as numbers (GG = GF+0, IU = 1). */
const NUMERIC_CATALOG_FIELDS: ReadonlySet<HireCatalogFieldId> = new Set([
  "adjustmentType",
  "variableCompensationMode",
]);

type BankAccountParts = {
  iban: string;
  /** Bank + branch (HZ/IA). */
  bankBranch: string;
  bank: string;
  branch: string;
  account: string;
  controlDigits: string;
  ibanCountry: string;
  ibanKey: string;
};

/**
 * Every account cell of DATOS_PAGO from the chosen format, so no part of the
 * template's sample account survives. A Spanish IBAN also fills its CCC parts;
 * "Otro formato" is a Spanish CCC (bank + branch and account) without IBAN.
 */
export const bankAccountParts = (person: HirePerson): BankAccountParts => {
  const empty: BankAccountParts = {
    iban: "",
    bankBranch: "",
    bank: "",
    branch: "",
    account: "",
    controlDigits: "",
    ibanCountry: "",
    ibanKey: "",
  };
  if (person.bankFormatChoice === "iban" && person.iban) {
    const spanish = splitSpanishIban(person.iban);
    const international = {
      ...empty,
      iban: person.iban,
      ibanCountry: person.iban.slice(0, 2),
      ibanKey: person.iban.slice(2, 4),
    };
    if (!spanish) return international;
    return {
      ...international,
      bankBranch: `${spanish.bank}${spanish.branch}`,
      bank: spanish.bank,
      branch: spanish.branch,
      account: spanish.account,
      controlDigits: spanish.controlDigits,
    };
  }
  if (person.bankFormatChoice === "other" && person.bankBranch && person.accountNumber) {
    const bank = person.bankBranch.slice(0, 4);
    const branch = person.bankBranch.slice(4);
    return {
      ...empty,
      bankBranch: person.bankBranch,
      bank,
      branch,
      account: person.accountNumber,
      controlDigits: spanishControlDigits(bank, branch, person.accountNumber),
    };
  }
  return empty;
};

const bankCells = (person: HirePerson): CellEdit[] => {
  const parts = bankAccountParts(person);
  return [
    ...literalCells(MANUAL_COLUMNS.iban, parts.iban),
    ...literalCells(MANUAL_COLUMNS.bankBranch, parts.bankBranch),
    ...literalCells(MANUAL_COLUMNS.accountNumber, parts.account),
    ...literalCells(DERIVED_COLUMNS.bankId, parts.bank),
    ...literalCells(DERIVED_COLUMNS.branchId, parts.branch),
    ...literalCells(DERIVED_COLUMNS.controlDigits, parts.controlDigits),
    ...literalCells(DERIVED_COLUMNS.ibanCountry, parts.ibanCountry),
    ...literalCells(DERIVED_COLUMNS.ibanKey, parts.ibanKey),
  ];
};

export const cellsForPerson = (person: HirePerson, personId = ""): CellEdit[] => {
  const hireSerial = toExcelSerialDate(person.hireDate);
  return [
    ...textCells(MANUAL_COLUMNS.firstName, person.firstName),
    ...textCells(MANUAL_COLUMNS.lastName1, person.lastName1),
    ...textCells(MANUAL_COLUMNS.lastName2, person.lastName2),
    ...textCells(MANUAL_COLUMNS.documentNumber, person.documentNumber),
    ...textCells(MANUAL_COLUMNS.email, person.email),
    ...MANUAL_COLUMNS.hireDate.map(
      (column): CellEdit => ({ column, kind: "number", value: hireSerial }),
    ),
    ...HIRE_CATALOG_FIELD_IDS.flatMap((field) => {
      // Only these optional currencies inherit the template when left empty.
      if ((field === "payrollCurrency" || field === "accountCurrency") && person[field] === "") {
        return [];
      }
      if (field === "referenceModelWeek") {
        const [model, ordinal] = parseReferenceModelOptionId(person[field]);
        const [modelColumn, ordinalColumn] = MANUAL_COLUMNS.referenceModelWeek;
        return [...literalCells([modelColumn], model), ...literalCells([ordinalColumn], ordinal)];
      }
      return NUMERIC_CATALOG_FIELDS.has(field) && /^\d+$/.test(person[field])
        ? MANUAL_COLUMNS[field].map(
            (column): CellEdit => ({ column, kind: "number", value: Number(person[field]) }),
          )
        : literalCells(
            MANUAL_COLUMNS[field],
            HIRE_CATALOG_FIELDS[field].geo ? lastGeoSegment(person[field]) : person[field],
          );
    }),
    ...HIRE_CONTRACT_FIELDS.flatMap((field) => literalCells(MANUAL_COLUMNS[field], person[field])),
    ...literalCells(MANUAL_COLUMNS.legalRepresentativeNif, person.legalRepresentativeNif),
    ...dateCells(MANUAL_COLUMNS.birthDate, person.birthDate),
    ...literalCells(MANUAL_COLUMNS.atradiusId, person.atradiusId),
    ...literalCells(MANUAL_COLUMNS.fusionId, person.fusionId),
    ...literalCells(MANUAL_COLUMNS.phonePrefix, person.phonePrefix),
    ...literalCells(MANUAL_COLUMNS.phoneNumber, person.phoneNumber),
    ...literalCells(MANUAL_COLUMNS.mobilePrefix, person.mobilePrefix),
    ...literalCells(MANUAL_COLUMNS.mobileNumber, person.mobileNumber),
    ...textCells(MANUAL_COLUMNS.addressLine1, person.addressLine1),
    ...textCells(MANUAL_COLUMNS.addressLine2, person.addressLine2),
    ...literalCells(MANUAL_COLUMNS.streetNumber, person.streetNumber),
    ...textCells(MANUAL_COLUMNS.buildingBlock, person.buildingBlock),
    ...textCells(MANUAL_COLUMNS.staircase, person.staircase),
    ...textCells(MANUAL_COLUMNS.floor, person.floor),
    ...textCells(MANUAL_COLUMNS.door, person.door),
    ...literalCells(MANUAL_COLUMNS.postalCode, person.postalCode),
    ...numberCells(MANUAL_COLUMNS.occupationHours, person.occupationHours),
    ...numberCells(MANUAL_COLUMNS.occupationEjc, person.occupationEjc),
    ...numberCells(MANUAL_COLUMNS.occupationHeadcount, person.occupationHeadcount),
    ...checkCells(MANUAL_COLUMNS.keyEmployee, person.keyEmployee, "number"),
    ...checkCells(MANUAL_COLUMNS.strategicEmployee, person.strategicEmployee, "number"),
    ...choiceCells(
      MANUAL_COLUMNS.ssNumberChoice,
      person.ssNumberChoice === ""
        ? ""
        : person.ssNumberChoice === "assigned"
          ? "Con Núm. S.S."
          : "Sin Núm. S.S.",
      person.ssNumberChoice === "assigned" ? 1 : 0,
    ),
    ...literalCells(MANUAL_COLUMNS.ssNumberPrefix, person.ssNumberPrefix),
    ...literalCells(MANUAL_COLUMNS.ssNumberBody, person.ssNumberBody),
    ...literalCells(MANUAL_COLUMNS.ssNumberSuffix, person.ssNumberSuffix),
    ...dateCells(MANUAL_COLUMNS.contractEnd, person.contractEnd, true),
    ...numberCells(MANUAL_COLUMNS.partialSchedulePercent, person.partialSchedulePercent),
    ...choiceCells(
      MANUAL_COLUMNS.hourType,
      HOUR_TYPE_LABELS[person.hourType] ?? "",
      Number(person.hourType),
    ),
    ...numberCells(MANUAL_COLUMNS.numberOfHours, person.numberOfHours),
    ...choiceCells(
      MANUAL_COLUMNS.partialScheduleType,
      person.partialScheduleType === ""
        ? ""
        : person.partialScheduleType === "R"
          ? "Regular"
          : "Irregular",
      person.partialScheduleType,
    ),
    ...numberCells(MANUAL_COLUMNS.weeklyWorkDays, person.weeklyWorkDays),
    ...numberCells(MANUAL_COLUMNS.legalReductionPercent, person.legalReductionPercent),
    ...literalCells(MANUAL_COLUMNS.replacedSsPrefix, person.replacedSsPrefix),
    ...literalCells(MANUAL_COLUMNS.replacedSsBody, person.replacedSsBody),
    ...literalCells(MANUAL_COLUMNS.replacedSsSuffix, person.replacedSsSuffix),
    ...numberCells(MANUAL_COLUMNS.disabilityPercent, person.disabilityPercent),
    ...dateCells(MANUAL_COLUMNS.contractSeniorityStart, person.contractSeniorityStart),
    ...checkCells(MANUAL_COLUMNS.womanMaternity24, person.womanMaternity24, "letter"),
    ...checkCells(MANUAL_COLUMNS.underrepresentedWoman, person.underrepresentedWoman, "letter"),
    ...checkCells(MANUAL_COLUMNS.activeInsertionIncome, person.activeInsertionIncome, "letter"),
    ...checkCells(MANUAL_COLUMNS.reliefContract, person.reliefContract, "letter"),
    ...checkCells(MANUAL_COLUMNS.readmittedDisabled, person.readmittedDisabled, "letter"),
    ...checkCells(MANUAL_COLUMNS.firstSelfEmployedWorker, person.firstSelfEmployedWorker, "letter"),
    ...numberCells(MANUAL_COLUMNS.probationDays, person.probationDays),
    ...dateCells(MANUAL_COLUMNS.probationEnd, person.probationEnd),
    ...textCells(MANUAL_COLUMNS.additionalClause, person.additionalClause),
    ...numberCells(MANUAL_COLUMNS.annualGross, person.annualGross),
    ...dateCells(MANUAL_COLUMNS.seniorityDate, person.seniorityDate),
    ...dateCells(MANUAL_COLUMNS.extrasDate, person.extrasDate),
    ...checkCells(MANUAL_COLUMNS.timeManagementPay, person.timeManagementPay, "number"),
    ...bankCells(person),
    ...literalCells(MANUAL_COLUMNS.project, HIRE_COST_CENTER_LIST_VALUE),
    // Without an ID the template cell stays empty and Meta4 takes its counter.
    ...(personId === "" ? [] : literalCells([HIRE_PERSON_ID_COLUMN], personId)),
  ];
};
