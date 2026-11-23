import { HIRE_CATALOG_FIELD_IDS, type HireCatalogFieldId } from "@/lib/meta4/hire/catalogs";
import type { HirePerson } from "@/lib/meta4/hire/types";

import { HIRE_FIELD_META } from "./field-metadata";

/**
 * Columns of the bulk hire template: one row per person, the technical key on
 * the second row so the upload does not depend on column order or labels.
 */
export type HireBulkKind =
  | "text"
  | "number"
  | "date"
  | "datetime"
  | "catalog"
  | "contract"
  | "place"
  | "choice"
  | "check";

export type HireBulkChoice = { value: string; label: string };

export type HireBulkColumn = {
  key: keyof HirePerson;
  label: string;
  kind: HireBulkKind;
  required: boolean;
  choices?: readonly HireBulkChoice[];
  catalog?: HireCatalogFieldId;
};

const CHOICES = {
  positionChoice: [
    { value: "job", label: "Puesto" },
    { value: "position", label: "Posición" },
  ],
  occupationType: [
    { value: "hours", label: "Horas" },
    { value: "ejc", label: "EJC" },
    { value: "headcount", label: "Efectivos" },
  ],
  ssNumberChoice: [
    { value: "assigned", label: "Con Núm. S.S. asignado" },
    { value: "unassigned", label: "Sin Núm. S.S. asignado" },
  ],
  scheduleChoice: [
    { value: "full", label: "Jornada completa" },
    { value: "partial", label: "Jornada parcial" },
  ],
  disabilityChoice: [
    { value: "without", label: "Sin minusvalía" },
    { value: "with", label: "Con minusvalía" },
  ],
  bankFormatChoice: [
    { value: "iban", label: "IBAN" },
    { value: "other", label: "Otro formato" },
  ],
  hourType: [
    { value: "1", label: "Semanales" },
    { value: "2", label: "Mensuales" },
    { value: "3", label: "Anuales" },
  ],
  partialScheduleType: [
    { value: "R", label: "Regular" },
    { value: "I", label: "Irregular" },
  ],
} as const satisfies Partial<Record<keyof HirePerson, readonly HireBulkChoice[]>>;

/** Parts of compound fields, which have no label of their own in the form. */
const PART_LABELS: Partial<Record<keyof HirePerson, string>> = {
  phonePrefix: "Teléfono · prefijo",
  phoneNumber: "Teléfono · número",
  mobilePrefix: "Móvil · prefijo",
  mobileNumber: "Móvil · número",
  addressLine1: "Dirección, Línea 1",
  addressLine2: "Dirección, Línea 2",
  ssNumberPrefix: "Núm. S.S. · provincia",
  ssNumberBody: "Núm. S.S. · número",
  ssNumberSuffix: "Núm. S.S. · dígito",
  replacedSsPrefix: "Nº S.S. del sustituido · provincia",
  replacedSsBody: "Nº S.S. del sustituido · número",
  replacedSsSuffix: "Nº S.S. del sustituido · dígito",
};

const COMPOUND_PARTS: Partial<Record<string, readonly (keyof HirePerson)[]>> = {
  phone: ["phonePrefix", "phoneNumber"],
  mobile: ["mobilePrefix", "mobileNumber"],
  address: ["addressLine1", "addressLine2"],
  ssNumber: ["ssNumberPrefix", "ssNumberBody", "ssNumberSuffix"],
  replacedPersonSsNumber: ["replacedSsPrefix", "replacedSsBody", "replacedSsSuffix"],
};

/** Required in the template although the form only marks the group. */
const REQUIRED_PARTS = new Set<keyof HirePerson>(["addressLine1"]);

const CATALOG_IDS = new Set<string>(HIRE_CATALOG_FIELD_IDS);
const isCatalogField = (key: string): key is HireCatalogFieldId => CATALOG_IDS.has(key);
const isChoiceField = (key: string): key is keyof typeof CHOICES => Object.hasOwn(CHOICES, key);

const kindOf = (key: keyof HirePerson, metaKind: string): HireBulkKind => {
  if (key === "city") return "place";
  if (key === "legalContract" || key === "internalContract") return "contract";
  if (isChoiceField(key)) return "choice";
  if (isCatalogField(key)) return "catalog";
  if (metaKind === "checkbox") return "check";
  if (metaKind === "date") return "date";
  if (metaKind === "datetime-local") return "datetime";
  if (metaKind === "number") return "number";
  return "text";
};

const buildColumns = (): HireBulkColumn[] => {
  const columns: HireBulkColumn[] = [];
  for (const [id, meta] of Object.entries(HIRE_FIELD_META)) {
    const parts = COMPOUND_PARTS[id];
    if (parts) {
      for (const key of parts) {
        columns.push({
          key,
          label: PART_LABELS[key] ?? key,
          kind: "text",
          required: REQUIRED_PARTS.has(key),
        });
      }
      continue;
    }
    // UI-only groups (project, bank account) have no person key of their own.
    if (id === "project" || id === "bankAccount") continue;
    const key = id as keyof HirePerson;
    const kind = kindOf(key, meta.kind);
    columns.push({
      key,
      label: meta.label,
      kind,
      required: meta.requiredForCurrentHire,
      ...(isChoiceField(key) ? { choices: CHOICES[key] } : {}),
      ...(isCatalogField(key) ? { catalog: key } : {}),
    });
  }
  return columns;
};

export const HIRE_BULK_COLUMNS: readonly HireBulkColumn[] = buildColumns();
