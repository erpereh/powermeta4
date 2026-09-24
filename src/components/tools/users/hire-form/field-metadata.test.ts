import path from "node:path";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { HIRE_DATA_SHEET, MANUAL_COLUMNS } from "@/lib/meta4/hire/mapping";

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
  it("classifies every field and reserves red only for unresolved Excel mappings", () => {
    const entries = Object.entries(HIRE_FIELD_META);
    expect(entries).toHaveLength(113);
    expect(entries.filter(([, field]) => field.integration === "connected")).toHaveLength(54);
    expect(entries.filter(([, field]) => field.mapping.status === "confirmed")).toHaveLength(96);
    expect(entries.filter(([, field]) => field.mapping.status === "unconfirmed")).toHaveLength(11);
    expect(entries.filter(([, field]) => field.mapping.status === "ui-only")).toHaveLength(6);
    expect(
      entries.filter(([, field]) => field.mapping.status === "unconfirmed").map(([id]) => id),
    ).toEqual([
      "birthCommunity",
      "department",
      "fax",
      "project",
      "specificFic",
      "extrasDate",
      "referenceModelWeek",
      "personBankOrdinal",
      "iban",
      "bankBranch",
      "bic",
    ]);
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
      } else if (field.mapping.status === "unconfirmed") {
        expect(hireFieldMappingTooltip(fieldId)).toBe("Mapping pendiente de confirmar");
      } else {
        expect(hireFieldMappingTooltip(fieldId)).toBe("Control de UI · sin mapping directo");
      }
    }

    expect(hireFieldVisualStatus("firstName")).toBe("normal");
    expect(hireFieldVisualStatus("positionChoice")).toBe("normal");
    expect(hireFieldVisualStatus("ssNumberChoice")).toBe("confirmed-pending");
    expect(hireFieldVisualStatus("birthCommunity")).toBe("unconfirmed");
    expect(hireFieldLabelClass("firstName")).toBe("text-foreground");
    expect(hireFieldLabelClass("legalRepresentativeNif")).toBe("text-hire-pending");
    expect(hireFieldLabelClass("fax")).toBe("text-destructive");
    expect(hireFieldMappingTooltip("email")).toBe("STD_EMAIL / STD_EMAIL_ATRADIUS");
    expect(hireFieldMappingTooltip("payrollCurrency")).toBe("ID_CURRENCY");
    expect(hireFieldMappingTooltip("accountCurrency")).toBe("ID_CURRENCY_2");
  });

  it("finds every confirmed identifier in AltaNueva technical headers", () => {
    const workbook = XLSX.readFile(templatePath, { sheetRows: 5 });
    const sheet = workbook.Sheets[HIRE_DATA_SHEET];
    expect(sheet).toBeDefined();
    const row = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: "" })[4];
    const identifiers = new Set(row.map(shortIdentifier).filter((value) => value !== null));
    expect(sheet.AM4?.v).toBe("real_SCO_BIRTH_ID_GEO_DIV");
    expect(sheet.AM5?.v).toBe("SRCO_PA_HIRE_WIZ_PERS_DATA.CSP_ID_ATRADIUS_JOB");
    expect(sheet.GQ4?.v).toBe("real_SSP_FEC_EXTRAS");
    expect(sheet.GQ5?.v).toBe("SRSP_PA_HIRE_WIZ_DATOS_PAGO.SCO_GB_IBAN");

    for (const [id, field] of Object.entries(HIRE_FIELD_META)) {
      if (field.mapping.status !== "confirmed") continue;
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
        .map((column) => shortIdentifier(sheet[`${column}5`]?.v))
        .filter((value) => value !== null);
      for (const identifier of mapping.identifiers) {
        expect(writtenIdentifiers, `${field}: ${identifier}`).toContain(identifier);
      }
    }
  }, 30_000);
});
