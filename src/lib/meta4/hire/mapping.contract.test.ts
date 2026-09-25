import path from "node:path";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { HIRE_FIELD_META } from "@/components/tools/users/hire-form/field-metadata";

import { HIRE_DATA_SHEET, MANUAL_COLUMNS, WRITTEN_COLUMNS } from "./mapping";

/** Independent, explicit contract for every UI input written to AltaNueva. */
const EXPECTED_COLUMNS = {
  firstName: ["R"],
  lastName1: ["O", "P"],
  lastName2: ["Q"],
  documentType: ["V", "W"],
  issuingCountry: ["AA", "AB"],
  nationality: ["AE", "AF"],
  birthProvince: ["AG", "AH"],
  birthCountry: ["AO", "AP"],
  gender: ["AQ", "AR"],
  maritalStatus: ["AS", "AT"],
  atradiusJobCode: ["AM"],
  atradiusCategory: ["T"],
  locationType: ["BB", "BC"],
  roadType: ["BD", "BE"],
  city: ["BQ", "BR"],
  province: ["BW", "BX"],
  community: ["CB", "CC"],
  country: ["CE", "CF"],
  legalEntity: ["CH", "CI"],
  job: ["CK", "CL"],
  position: ["CM", "CN"],
  workUnit: ["CS", "CT"],
  workLocation: ["CU", "CV"],
  category: ["CW", "CX"],
  startReason: ["DB", "DC"],
  structure: ["AZ"],
  functionalWorkCenter: ["BA"],
  documentNumber: ["X", "Y"],
  legalRepresentativeNif: ["Z"],
  birthDate: ["AC", "AD"],
  atradiusId: ["IS"],
  phonePrefix: ["AU"],
  phoneNumber: ["AV", "IO"],
  mobilePrefix: ["AW"],
  mobileNumber: ["AX"],
  addressLine1: ["BH"],
  addressLine2: ["BI"],
  streetNumber: ["BL"],
  buildingBlock: ["BM"],
  staircase: ["BN"],
  floor: ["BO"],
  door: ["BP"],
  postalCode: ["CG"],
  occupationHours: ["CP"],
  occupationEjc: ["CQ"],
  occupationHeadcount: ["CR"],
  project: ["CZ"],
  keyEmployee: ["DF", "DG"],
  strategicEmployee: ["DH", "DI"],
  email: ["AY", "IQ"],
  hireDate: ["D", "E"],
  ssNumberChoice: ["DU", "DV"],
  ssNumberPrefix: ["DW"],
  ssNumberBody: ["DX"],
  ssNumberSuffix: ["DY"],
  contractEnd: ["EM", "EN"],
  partialSchedulePercent: ["EQ"],
  hourType: ["ES", "ET"],
  numberOfHours: ["EU"],
  partialScheduleType: ["EV", "EW"],
  weeklyWorkDays: ["EX"],
  legalReductionPercent: ["EY"],
  replacedSsPrefix: ["FF"],
  replacedSsBody: ["FG"],
  replacedSsSuffix: ["FH"],
  disabilityPercent: ["FO"],
  contractSeniorityStart: ["FP", "FQ"],
  womanMaternity24: ["FR", "FS"],
  underrepresentedWoman: ["FT", "FU"],
  activeInsertionIncome: ["FV", "FW"],
  reliefContract: ["FX", "FY"],
  readmittedDisabled: ["FZ", "GA"],
  firstSelfEmployedWorker: ["GB", "GC"],
  probationDays: ["GD"],
  probationEnd: ["DL", "DM"],
  additionalClause: ["GE"],
  annualGross: ["GJ"],
  seniorityDate: ["GN", "GO"],
  timeManagementPay: ["HR", "HS"],
  tc1Header: ["DZ", "EA"],
  tariffGroup: ["EB", "EC"],
  ssOccupation: ["ED", "EE"],
  ssAgreement: ["EF", "EG"],
  legalContract: ["EI", "EJ"],
  internalContract: ["EK", "EL"],
  laborRelation: ["EO", "EP"],
  reductionReason: ["EZ", "FA"],
  substitutionCause: ["FD", "FE"],
  unemploymentCondition: ["FI", "FJ"],
  specialLaborRelation: ["FK", "FL"],
  socialExclusion: ["FM", "FN"],
  adjustmentType: ["GF", "GG"],
  payrollAgreement: ["GH", "GI"],
  salaryType: ["GL", "GM"],
  union: ["GR", "GS"],
  payrollCurrency: ["GV", "GW"],
  irpfType: ["HB", "HC"],
  perceptionKey: ["HD", "HE"],
  variableCompensationMode: ["IU"],
  paymentCurrency: ["HT", "HU"],
  paymentType: ["HV", "HW"],
  companyBank: ["HX", "HY"],
  accountCurrency: ["IJ", "IK"],
  iban: ["GQ"],
  bankBranch: ["HZ", "IA"],
  accountNumber: ["ID"],
} as const;

const COMPOUND_PARTS = {
  phone: ["phonePrefix", "phoneNumber"],
  mobile: ["mobilePrefix", "mobileNumber"],
  address: ["addressLine1", "addressLine2"],
  ssNumber: ["ssNumberPrefix", "ssNumberBody", "ssNumberSuffix"],
  replacedPersonSsNumber: ["replacedSsPrefix", "replacedSsBody", "replacedSsSuffix"],
} as const;

const templatePath = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const technicalId = (header: unknown): string | null =>
  typeof header === "string" ? (header.split(".").at(-1)?.replace(/##$/, "") ?? null) : null;

describe("AltaNueva exact mapping contract", () => {
  it("writes exactly the reviewed columns for all 99 integrated fields", () => {
    expect(MANUAL_COLUMNS).toEqual(EXPECTED_COLUMNS);
    const expectedKeys = new Set<string>();
    for (const [field, meta] of Object.entries(HIRE_FIELD_META)) {
      if (meta.integration !== "connected") continue;
      const parts = COMPOUND_PARTS[field as keyof typeof COMPOUND_PARTS];
      for (const key of parts ?? [field]) expectedKeys.add(key);
    }
    expect(new Set(Object.keys(EXPECTED_COLUMNS))).toEqual(expectedKeys);
    expect(new Set(WRITTEN_COLUMNS)).toEqual(new Set(Object.values(EXPECTED_COLUMNS).flat()));
    expect(new Set(WRITTEN_COLUMNS).size).toBe(WRITTEN_COLUMNS.length);
    for (const excluded of ["ER", "GP", "HO", "HP", "GY", "HA", "IB", "IC", "IE", "IF", "IG", "IH", "II"]) {
      expect(WRITTEN_COLUMNS, excluded).not.toContain(excluded);
    }
  });

  it("matches each technical identifier against row 5 of Hire_1_PERSONA.xls", () => {
    const sheet = XLSX.readFile(templatePath, { sheetRows: 5 }).Sheets[HIRE_DATA_SHEET];
    expect(sheet).toBeDefined();
    for (const [field, meta] of Object.entries(HIRE_FIELD_META)) {
      if (meta.integration !== "connected" || meta.mapping.status !== "confirmed") continue;
      const parts = COMPOUND_PARTS[field as keyof typeof COMPOUND_PARTS];
      const columns = (parts ?? [field]).flatMap(
        (key) => EXPECTED_COLUMNS[key as keyof typeof EXPECTED_COLUMNS],
      );
      const bound = columns.map((column) => technicalId(sheet[`${column}5`]?.v)).filter(Boolean);
      expect(new Set(bound), field).toEqual(new Set(meta.mapping.identifiers));
      for (const column of columns) {
        if (technicalId(sheet[`${column}5`]?.v)) continue;
        const next = XLSX.utils.encode_col(XLSX.utils.decode_col(column) + 1);
        expect(columns, `${field}: visible ${column}`).toContain(next);
        expect(technicalId(sheet[`${next}5`]?.v), `${field}: ${next}`).toBeTruthy();
      }
    }
  }, 30_000);
});
