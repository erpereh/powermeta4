import path from "node:path";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { HIRE_DATA_SHEET, HIRE_IMPORT_HEADERS, MANUAL_COLUMNS } from "@/lib/meta4/hire/mapping";

import {
  HIRE_FIELD_META,
  hireFieldLabelClass,
  hireFieldMappingTooltip,
  hireFieldVisualStatus,
  type CurrentFieldId,
} from "./field-metadata";

const templatePath = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const shortIdentifier = (header: unknown): string | null => {
  if (typeof header !== "string" || header.length === 0) return null;
  return header.split(".").at(-1)?.replace(/##$/, "") ?? null;
};

describe("Meta4 hire field mappings", () => {
  it("classifies every field with confirmed mappings and six UI-only controls", () => {
    const entries = Object.entries(HIRE_FIELD_META);
    expect(entries).toHaveLength(109);
    expect(entries.filter(([, field]) => field.integration === "connected")).toHaveLength(103);
    expect(entries.filter(([, field]) => field.mapping.status === "confirmed")).toHaveLength(103);
    expect(entries.filter(([, field]) => field.mapping.status === "unconfirmed")).toHaveLength(0);
    expect(entries.filter(([, field]) => field.mapping.status === "ui-only")).toHaveLength(6);
    expect(
      entries.filter(([, field]) => field.mapping.status === "ui-only").map(([id]) => id),
    ).toEqual([
      "positionChoice",
      "occupationType",
      "scheduleChoice",
      "disabilityChoice",
      "bankFormatChoice",
      "bankAccount",
    ]);

    for (const [id, field] of entries) {
      const fieldId = id as keyof typeof HIRE_FIELD_META;
      if (field.mapping.status === "confirmed") {
        expect(field.mapping.identifiers.length).toBeGreaterThan(0);
        expect(new Set(field.mapping.identifiers).size).toBe(field.mapping.identifiers.length);
        expect(hireFieldMappingTooltip(fieldId)).toBe(field.mapping.identifiers.join(" / "));
      } else {
        expect(hireFieldMappingTooltip(fieldId)).toBe("Control de UI · sin mapping directo");
      }
    }

    expect(hireFieldVisualStatus("firstName")).toBe("normal");
    expect(hireFieldVisualStatus("positionChoice")).toBe("normal");
    expect(hireFieldVisualStatus("ssNumberChoice")).toBe("normal");
    for (const field of [
      "birthCommunity",
      "department",
      "extrasDate",
      "referenceModelWeek",
    ] as const) {
      expect(hireFieldVisualStatus(field)).toBe("normal");
      expect(hireFieldLabelClass(field)).toBe("text-foreground");
    }
    expect(hireFieldMappingTooltip("birthCommunity")).toBe("SCO_BIRTH_ID_GEO_DIV");
    expect(hireFieldMappingTooltip("department")).toBe("CSP_ID_DEPARTMENT");
    expect(hireFieldMappingTooltip("extrasDate")).toBe("SSP_FEC_EXTRAS");
    expect(hireFieldMappingTooltip("referenceModelWeek")).toBe("SCO_ID_REF_MOD / SCO_OR_REF_MOD");
    expect(hireFieldLabelClass("firstName")).toBe("text-foreground");
    expect(hireFieldLabelClass("legalRepresentativeNif")).toBe("text-foreground");
    expect(hireFieldMappingTooltip("email")).toBe("STD_EMAIL / STD_EMAIL_ATRADIUS");
    expect(hireFieldMappingTooltip("payrollCurrency")).toBe("ID_CURRENCY");
    expect(hireFieldMappingTooltip("accountCurrency")).toBe("ID_CURRENCY_2");
  });

  it("finds configured import items and preserves only the Department alias override", () => {
    const workbook = XLSX.readFile(templatePath, { sheetRows: 5 });
    const sheet = workbook.Sheets[HIRE_DATA_SHEET];
    expect(sheet).toBeDefined();
    const row = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: "" })[4];
    const importHeaders = new Map<string, string>(Object.entries(HIRE_IMPORT_HEADERS));
    const identifiers = new Set(
      [...row, ...importHeaders.values()].map(shortIdentifier).filter((value) => value !== null),
    );
    expect(sheet.AM4?.v).toBe("real_SCO_BIRTH_ID_GEO_DIV");
    expect(sheet.AM5?.v).toBe("SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_ATRADIUS_JOB");
    expect(sheet.GQ4?.v).toBe("real_SSP_FEC_EXTRAS");
    expect(sheet.GQ5?.v).toBe("SRSP_PA_HIRE_WIZ_DATOS_PAGO.SCO_GB_IBAN");

    const overrides = {
      department: { columns: ["ER"], identifiers: ["CSP_ID_DEPARTMENT"] },
    } as const;
    for (const [id, override] of Object.entries(overrides)) {
      const field = id as keyof typeof overrides;
      expect(MANUAL_COLUMNS[field]).toEqual(override.columns);
      expect(HIRE_FIELD_META[field].mapping).toEqual({
        status: "confirmed",
        identifiers: override.identifiers,
      });
    }

    for (const [id, field] of Object.entries(HIRE_FIELD_META)) {
      if (field.mapping.status !== "confirmed") continue;
      if (Object.hasOwn(overrides, id)) continue;
      for (const identifier of field.mapping.identifiers) {
        expect(identifiers.has(identifier), `${id}: ${identifier}`).toBe(true);
      }
    }

    const current: CurrentFieldId[] = [
      "firstName",
      "lastName1",
      "lastName2",
      "documentType",
      "documentNumber",
      "email",
      "hireDate",
      "issuingCountry",
      "nationality",
      "birthProvince",
      "birthCountry",
      "gender",
      "maritalStatus",
      "atradiusJobCode",
      "atradiusCategory",
      "locationType",
      "roadType",
      "city",
      "province",
      "community",
      "country",
      "legalEntity",
      "job",
      "position",
      "workUnit",
      "workLocation",
      "category",
      "startReason",
      "structure",
      "functionalWorkCenter",
      "tc1Header",
      "tariffGroup",
      "ssOccupation",
      "ssAgreement",
      "legalContract",
      "internalContract",
      "laborRelation",
      "reductionReason",
      "substitutionCause",
      "unemploymentCondition",
      "specialLaborRelation",
      "socialExclusion",
      "variableCompensationMode",
      "payrollAgreement",
      "adjustmentType",
      "salaryType",
      "payrollCurrency",
      "union",
      "irpfType",
      "perceptionKey",
      "paymentCurrency",
      "paymentType",
      "companyBank",
      "accountCurrency",
    ];
    for (const field of current) {
      const mapping = HIRE_FIELD_META[field].mapping;
      expect(mapping.status).toBe("confirmed");
      if (mapping.status !== "confirmed") continue;
      const writtenIdentifiers = MANUAL_COLUMNS[field]
        .map((column) => shortIdentifier(importHeaders.get(column) ?? sheet[`${column}5`]?.v))
        .filter((value) => value !== null);
      for (const identifier of mapping.identifiers) {
        expect(writtenIdentifiers, `${field}: ${identifier}`).toContain(identifier);
      }
    }
  }, 30_000);
});
