import * as XLSX from "xlsx";

import {
  HIRE_BULK_COLUMNS,
  type HireBulkColumn,
} from "@/components/tools/users/hire-form/bulk-columns";

import {
  contractOptionId,
  GEO_SEPARATOR,
  HIRE_CATALOG_FIELDS,
  lastGeoSegment,
  type HireCatalogOption,
  type HireCatalogs,
} from "./catalogs";
import { MAX_PERSON_COUNT } from "./mapping";
import type { HirePerson } from "./types";

/** Same layout as bulk-template.ts (kept here so the parser has no server deps). */
const SHEET = "Personas";
const KEY_ROW = 2;

export type HireBulkValues = Partial<Record<keyof HirePerson, string | boolean>>;

/** One person read from the template; `cityQuery` is resolved against PeopleNet. */
export type HireBulkPerson = { row: number; values: HireBulkValues; cityQuery: string };

export type HireBulkParseResult = { people: HireBulkPerson[]; problems: string[] };

const COLUMN_BY_KEY = new Map<string, HireBulkColumn>(
  HIRE_BULK_COLUMNS.map((column) => [column.key, column]),
);

const fold = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();

const pad = (value: number): string => String(value).padStart(2, "0");

/** Excel serial date → parts, read as UTC so the day never shifts. */
const fromSerial = (serial: number): Date => new Date(Math.round((serial - 25569) * 86_400_000));

const isoDate = (date: Date): string =>
  `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;

const readDateText = (raw: unknown, withTime: boolean): string => {
  if (typeof raw === "number" && Number.isFinite(raw)) {
    const date = fromSerial(raw);
    return withTime
      ? `${isoDate(date)}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`
      : isoDate(date);
  }
  const text = String(raw ?? "").trim();
  const spanish = /^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:\s+(\d{1,2}):(\d{2}))?$/.exec(text);
  if (spanish) {
    const date = `${spanish[3]}-${pad(Number(spanish[2]))}-${pad(Number(spanish[1]))}`;
    if (!withTime) return date;
    return `${date}T${pad(Number(spanish[4] ?? 0))}:${spanish[5] ?? "00"}`;
  }
  const iso = /^(\d{4}-\d{2}-\d{2})(?:[ T](\d{1,2}):(\d{2}))?/.exec(text);
  if (iso) {
    if (!withTime) return iso[1] ?? text;
    return `${iso[1]}T${pad(Number(iso[2] ?? 0))}:${iso[3] ?? "00"}`;
  }
  return text;
};

const cellText = (raw: unknown): string => {
  if (raw === undefined || raw === null) return "";
  if (typeof raw === "number") return String(raw);
  return String(raw).trim();
};

const YES = new Set(["si", "s", "x", "1", "true", "verdadero", "yes"]);

/**
 * Catalog value typed as ID, ID without the zeros Excel drops, last segment of
 * a geographic path, or exact name.
 */
const matchCatalog = (
  options: readonly HireCatalogOption[],
  raw: string,
  geo: boolean,
): HireCatalogOption | undefined => {
  if (!raw) return undefined;
  const exact = options.find((option) => option.id === raw);
  if (exact) return exact;
  const folded = fold(raw);
  const byId = options.find((option) => fold(option.id) === folded);
  if (byId) return byId;
  if (/^\d+$/.test(raw)) {
    const numeric = options.filter(
      (option) => /^\d+$/.test(option.id) && Number(option.id) === Number(raw),
    );
    if (numeric.length === 1) return numeric[0];
  }
  if (geo) {
    const bySegment = options.filter(
      (option) =>
        fold(lastGeoSegment(option.id)) === folded ||
        Number(lastGeoSegment(option.id)) === Number(raw),
    );
    if (bySegment.length === 1) return bySegment[0];
  }
  const byName = options.filter((option) => fold(option.name) === folded);
  return byName.length === 1 ? byName[0] : undefined;
};

const isGeoField = (key: keyof HirePerson): boolean =>
  ["province", "community", "country", "birthProvince", "birthCommunity", "birthCountry"].includes(
    key,
  );

const readValue = (
  column: HireBulkColumn,
  raw: unknown,
  catalogs: HireCatalogs,
  problem: (message: string) => void,
): string | boolean => {
  switch (column.kind) {
    case "date":
      return readDateText(raw, false);
    case "datetime":
      return readDateText(raw, true);
    case "check":
      return YES.has(fold(cellText(raw)));
    case "choice": {
      const text = cellText(raw);
      if (!text) return "";
      const folded = fold(text);
      const choice = column.choices?.find(
        (candidate) => fold(candidate.value) === folded || fold(candidate.label) === folded,
      );
      if (!choice) problem(`${column.label}: «${text}» no es una opción válida.`);
      return choice?.value ?? "";
    }
    case "catalog": {
      const text = cellText(raw);
      if (!text || !column.catalog) return text;
      const { source } = HIRE_CATALOG_FIELDS[column.catalog];
      const option = matchCatalog(catalogs[source], text, isGeoField(column.key));
      if (!option) {
        problem(`${column.label}: «${text}» no está en el catálogo de tu sociedad.`);
        return "";
      }
      return option.id;
    }
    default:
      return cellText(raw);
  }
};

/** Choices the template lets you leave empty when the data already says which branch applies. */
const applyBranchDefaults = (values: HireBulkValues): void => {
  const has = (key: keyof HirePerson) => typeof values[key] === "string" && values[key] !== "";
  if (!has("positionChoice")) {
    if (has("position")) values.positionChoice = "position";
    else if (has("job")) values.positionChoice = "job";
  }
  if (values.positionChoice === "position" && !has("occupationType")) {
    if (has("occupationHours")) values.occupationType = "hours";
    else if (has("occupationEjc")) values.occupationType = "ejc";
    else if (has("occupationHeadcount")) values.occupationType = "headcount";
  }
  if (!has("ssNumberChoice")) {
    values.ssNumberChoice = has("ssNumberBody") ? "assigned" : "unassigned";
  }
  if (!has("scheduleChoice")) {
    values.scheduleChoice = has("partialSchedulePercent") ? "partial" : "full";
  }
  if (!has("disabilityChoice")) {
    values.disabilityChoice = has("disabilityPercent") ? "with" : "without";
  }
  if (!has("bankFormatChoice")) {
    if (has("iban")) values.bankFormatChoice = "iban";
    else if (has("bankBranch") || has("accountNumber")) values.bankFormatChoice = "other";
  }
};

const checkContract = (
  values: HireBulkValues,
  catalogs: HireCatalogs,
  problem: (message: string) => void,
): void => {
  const legalContract = typeof values.legalContract === "string" ? values.legalContract : "";
  const internalContract =
    typeof values.internalContract === "string" ? values.internalContract : "";
  if (!legalContract && !internalContract) return;
  const id = contractOptionId({ legalContract, internalContract });
  if (!catalogs.contract.some((option) => option.id === id)) {
    problem(
      `Contrato «${legalContract} / ${internalContract}» no existe en PeopleNet para tu sociedad.`,
    );
  }
};

/**
 * Reads the bulk template. Unknown catalog values and choices are reported per
 * row and left empty, so the form shows them as pending instead of guessing.
 */
export const parseHireBulkWorkbook = (
  bytes: Buffer,
  catalogs: HireCatalogs,
): HireBulkParseResult => {
  const workbook = XLSX.read(bytes, { type: "buffer", cellDates: false, cellText: false });
  const sheet = workbook.Sheets[SHEET] ?? workbook.Sheets[workbook.SheetNames[0] ?? ""];
  if (!sheet || !sheet["!ref"]) {
    return { people: [], problems: ["El fichero no tiene la hoja «Personas»."] };
  }
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  const keyByColumn = new Map<number, HireBulkColumn>();
  for (let column = range.s.c; column <= range.e.c; column += 1) {
    const key = sheet[XLSX.utils.encode_cell({ r: KEY_ROW - 1, c: column })]?.v;
    const spec = typeof key === "string" ? COLUMN_BY_KEY.get(key.trim()) : undefined;
    if (spec) keyByColumn.set(column, spec);
  }
  if (![...keyByColumn.values()].some((spec) => spec.key === "documentNumber")) {
    return {
      people: [],
      problems: [
        "No es la plantilla de altas: falta la fila 2 con las claves. Descárgala de nuevo.",
      ],
    };
  }

  const people: HireBulkPerson[] = [];
  const problems: string[] = [];
  for (let rowIndex = KEY_ROW; rowIndex <= range.e.r; rowIndex += 1) {
    const cells = [...keyByColumn.entries()].map(([column, spec]) => ({
      spec,
      raw: sheet[XLSX.utils.encode_cell({ r: rowIndex, c: column })]?.v,
    }));
    if (cells.every(({ raw }) => cellText(raw) === "")) continue;
    const row = rowIndex + 1;
    if (people.length >= MAX_PERSON_COUNT) {
      problems.push(`Solo se cargan ${MAX_PERSON_COUNT} personas; la fila ${row} y siguientes no.`);
      break;
    }
    const values: HireBulkValues = {};
    let cityQuery = "";
    const problem = (message: string) => problems.push(`Fila ${row}: ${message}`);
    for (const { spec, raw } of cells) {
      if (spec.kind === "place") {
        const text = cellText(raw);
        if (text.split(GEO_SEPARATOR).length === 4) values.city = text;
        else cityQuery = text;
        continue;
      }
      values[spec.key] = readValue(spec, raw, catalogs, problem);
    }
    applyBranchDefaults(values);
    checkContract(values, catalogs, problem);
    people.push({ row, values, cityQuery });
  }
  if (people.length === 0 && problems.length === 0) {
    problems.push("La hoja «Personas» no tiene ninguna persona a partir de la fila 3.");
  }
  return { people, problems };
};
