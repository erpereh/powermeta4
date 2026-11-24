import { describe, expect, it } from "vitest";

import { Meta4HireError } from "../errors";
import { hireExtraFixture } from "../test-fixtures";
import type { HirePerson } from "../types";
import modelJson from "./model.generated.json";
import type { HireModel } from "./model-types";
import { AUDITED_TABLES, planHire, type HireLookups, type HirePlanInput } from "./plan";

const model = modelJson as HireModel;

const person: HirePerson = {
  ...hireExtraFixture,
  firstName: "Ana",
  lastName1: "Lopez",
  lastName2: "Garcia",
  documentType: "1",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
  issuingCountry: "724",
  nationality: "724",
  birthProvince: "28",
  birthCountry: "724",
  gender: "2",
  maritalStatus: "01",
  atradiusJobCode: "0000",
  atradiusCategory: "00",
  locationType: "1",
  roadType: "CL",
  city: "724/28/28/28079",
  province: "724/28/28",
  community: "724/28",
  country: "724",
  legalEntity: "ACYC_ES",
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
  job: "RDCI",
  startReason: "001",
  structure: "1",
  functionalWorkCenter: "O_CEN1",
  tc1Header: "0000",
  tariffGroup: "1",
  ssOccupation: "",
  ssAgreement: "",
  legalContract: "100",
  internalContract: "100A",
  laborRelation: "",
  reductionReason: "",
  substitutionCause: "",
  unemploymentCondition: "",
  specialLaborRelation: "",
  socialExclusion: "",
  payrollAgreement: "0001",
  adjustmentType: "0",
  salaryType: "1",
  payrollCurrency: "",
  union: "",
  irpfType: "NAC",
  perceptionKey: "A",
  variableCompensationMode: "1",
  paymentCurrency: "EUR",
  paymentType: "4",
  companyBank: "0001",
  accountCurrency: "",
  birthDate: "1990-05-05",
  phonePrefix: "34",
  phoneNumber: "911111111",
  mobilePrefix: "34",
  mobileNumber: "611111111",
};

const lookups: HireLookups = {
  jobName: "Responsable de ejemplo",
  positionName: null,
  placeName: "Madrid",
  provinceName: "Madrid",
  countryName: "España",
  bic: "BSCHESMMXXX",
};

const now = new Date(Date.UTC(2026, 10, 24, 9, 30));

const input = (overrides: Partial<HirePlanInput> = {}): HirePlanInput => ({
  model,
  person,
  personId: "1830",
  society: "CYC",
  secUser: "RRHH.USER",
  appRole: "M4_USER",
  now,
  lookups,
  ...overrides,
});

const rowsOf = (plan: ReturnType<typeof planHire>, table: string) =>
  plan.rows.filter((row) => row.table === table);

const only = (plan: ReturnType<typeof planHire>, table: string) => {
  const rows = rowsOf(plan, table);
  expect(rows, table).toHaveLength(1);
  return rows[0]?.values ?? {};
};

describe("planHire", () => {
  it("writes the tables every 2026 CYC hire has, one row each", () => {
    const plan = planHire(input());
    for (const table of [
      "STD_PERSON",
      "STD_PERSON1",
      "STD_HR",
      "STD_HR_PERIOD",
      "STD_ADDRESS",
      "STD_HR_NAT",
      "STD_HT_MAR_STAT",
      "M4SCO_HR_ROLE",
      "M4SCO_H_HR_JOB",
      "M4SCO_H_HR_WLOC",
      "M4SCO_H_HR_WUNIT",
      "M4SCO_H_HR_RO_TIME",
      "M4SCO_H_HR_LEGENT",
      "M4SCO_H_TYPE_ADJ",
      "M4SCO_PERSON_BANK",
      "M4SCO_PAYMENT_DATA",
      "M4SSP_H_CONTRATOS",
      "M4SSP_H_CATEGORIA",
      "M4SSP_H_CENT_COS",
      "M4SSP_HT_SIT_IRPF",
      "M4CYC_H_ESTRUCTURA",
      "M4CSP_H_ATRADIUS_JOB",
      "M4CSP_H_CATEG_ATRADIUS",
      "M4CSP_H_COMP_JUBILACION",
      "STD_HR_PREV_JOBS",
    ]) {
      expect(rowsOf(plan, table), table).toHaveLength(1);
    }
  });

  it("writes no nationality row when the optional nationality is empty, like Meta4", () => {
    const plan = planHire(input({ person: { ...person, nationality: "" } }));
    expect(rowsOf(plan, "STD_HR_NAT")).toHaveLength(0);
    expect(rowsOf(plan, "STD_PERSON")).toHaveLength(1);
  });

  it("never writes scratch, catalog or payroll tables", () => {
    const tables = new Set(planHire(input()).rows.map((row) => row.table));
    for (const table of [
      "M4SSP_TMP_DATCONT",
      "M4VCH_DMD_COMPNTS",
      "M4SSP_H_IRPF",
      "M4SSP_CONTRATO_INT",
      "M4SSP_H_TP_IRPF_PR",
      "M4CSP_H_EQUIV_CAT_JOB_CYC",
    ]) {
      expect(tables.has(table), table).toBe(false);
    }
  });

  it("stamps keys, society, user and Meta4 defaults", () => {
    const plan = planHire(input());
    const personRow = only(plan, "STD_PERSON");
    expect(personRow).toMatchObject({
      ID_ORGANIZATION: "0000",
      STD_ID_PERSON: "1830",
      ID_SECUSER: "RRHH.USER",
      ID_APPROLE: "M4_USER",
      DT_LAST_UPDATE: now,
      SUS_VETERAN: 0,
    });
    expect(personRow).not.toHaveProperty("SFR_OTHER_ID");
    expect(only(plan, "STD_HR")).not.toHaveProperty("SFR_OTHER_ID");
    expect(only(plan, "STD_HR_PERIOD")).toMatchObject({
      ID_ORGANIZATION: "CYC",
      STD_ID_HR: "1830",
      STD_OR_HR_PERIOD: 1,
      STD_DT_START: new Date(Date.UTC(2026, 9, 1)),
      STD_DT_END: new Date(Date.UTC(4000, 0, 1)),
      STD_ID_HR_TYPE: "01",
      STD_ID_HRP_SRT_REA: "001",
      CSP_ID_TIPO_JORNADA: 1,
    });
  });

  it("calculates the names, address, account and role like Meta4", () => {
    const plan = planHire(input());
    expect(only(plan, "STD_PERSON")).toMatchObject({
      STD_N_FAM_NAME_1: "Lopez Garcia",
      SSP_PRIM_APELLIDO: "Lopez",
      SCO_GB_NAME: "Lopez Garcia, Ana",
    });
    expect(only(plan, "STD_ADDRESS")).toMatchObject({
      SSP_DISTRIT_POSTAL: "28001",
      SCO_GB_ADDRESS: " CL Calle Ejemplo 1 28001 Madrid Madrid España",
    });
    expect(only(plan, "M4SCO_PERSON_BANK")).toMatchObject({
      SCO_GB_IBAN: "ES52 0049 1500 0612 3456 7890",
      SCO_GB_BANK: "ES52 0049 1500 0612 3456 7890",
      SCO_ID_BANK_BRANCH: "00491500",
      SCO_ACCOUNT_NUMBER: "1234567890",
      SCO_IBAN_CODE: "ES",
      SSP_BIC_CODE: "BSCHESMMXXX",
      ID_CURRENCY: "EUR",
      SCO_OR_ACCOUNT: 1,
    });
    expect(only(plan, "M4SCO_PERSON_BANK")).not.toHaveProperty("SCO_IBAN_KEY");
    expect(only(plan, "M4SCO_HR_ROLE")).toMatchObject({
      SCO_N_ROLEESP: "J-Responsable de ejemplo",
      SCO_MAIN_ROLE: "1",
      SCO_OR_HR_ROLE: 1,
    });
    expect(only(plan, "M4SCO_H_HR_JOB")).toMatchObject({
      SCO_ID_JOB_CODE: "RDCI",
      SCO_OR_HR_ROLE: 1,
    });
    expect(only(plan, "M4CYC_H_ESTRUCTURA")).toMatchObject({ CSP_PLAZA_GARAJE: "S" });
    expect(only(plan, "M4SCO_PAYMENT_DATA")).toMatchObject({
      SCO_ID_PERSON: "1830",
      SCO_EMP_CHECK: "1",
      ID_CURRENCY_DATA: "EUR",
    });
  });

  it("adds both e-mails and numbers the phones", () => {
    const plan = planHire(input());
    expect(
      rowsOf(plan, "STD_EMAIL").map((row) => [
        row.values.STD_ID_LOCAT_TYPE,
        row.values.STD_OR_MAIL,
      ]),
    ).toEqual(
      expect.arrayContaining([
        ["9", expect.any(Number)],
        ["2", expect.any(Number)],
      ]),
    );
    expect(rowsOf(plan, "STD_PHONE_FAX").map((row) => row.values.STD_OR_PHONE)).toEqual([1, 2]);
  });

  it("adds the after-save rows: retirement for employees, internal experience for the job", () => {
    const plan = planHire(input());
    expect(only(plan, "M4CSP_H_COMP_JUBILACION")).toMatchObject({
      CSP_ID_TIPO_JUBILACION: "1",
      DT_START: new Date(Date.UTC(2026, 9, 1)),
    });
    expect(only(plan, "STD_HR_PREV_JOBS")).toMatchObject({
      CSP_EXP_INT: "1",
      CSP_ID_PREV_JOB: "RDCI",
      CSP_N_PREV_JOB: "Responsable de ejemplo",
    });
    expect(rowsOf(planHire(input({ personId: "BC205" })), "M4CSP_H_COMP_JUBILACION")).toHaveLength(
      0,
    );
  });

  it("audits only the tables Meta4 audits on a hire", () => {
    const plan = planHire(input());
    expect(plan.audit.map((row) => row.table).sort()).toEqual(
      ["AUC_H_HR_JOB", "AUC_H_HR_WLOCATION", "AUC_H_HR_WUNIT", "AUC_STD_HR_PERIOD"].sort(),
    );
    expect(AUDITED_TABLES.size).toBe(4);
    for (const row of plan.audit) {
      expect(row.values).toMatchObject({ ID_TYPE: "I", ID_ORDER: 1, DT_OPER: now });
      expect(row.values).not.toHaveProperty("ID_EXECUTION");
    }
  });

  it("skips the annual gross row without amount and keeps it in skipped", () => {
    const plan = planHire(input());
    expect(rowsOf(plan, "M4SCO_PERIO_VALUES")).toHaveLength(0);
  });

  it("refuses a plan that misses a required value, without echoing data", () => {
    const error = (() => {
      try {
        planHire(input({ person: { ...person, startReason: "" } }));
        return null;
      } catch (caught) {
        return caught;
      }
    })();
    expect(error).toBeInstanceOf(Meta4HireError);
    expect((error as Meta4HireError).issues[0]?.message).toContain(
      "STD_HR_PERIOD.STD_ID_HRP_SRT_REA",
    );
  });
});
