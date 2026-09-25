import { describe, expect, it } from "vitest";

import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import { hireExtraFixture } from "./test-fixtures";
import { parseHirePeople } from "./validate";

const validPerson = {
  ...hireExtraFixture,
  firstName: "Ana",
  lastName1: "López",
  lastName2: "",
  documentType: "1",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
  issuingCountry: "",
  nationality: "",
  birthProvince: "",
  birthCountry: "",
  gender: "",
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
  job: "RDCI",
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
  project: "000000",
  startReason: "001",
  structure: "0",
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
};

describe("parseHirePeople", () => {
  it("accepts one valid person and trims fields", () => {
    const people = parseHirePeople([
      {
        ...validPerson,
        firstName: "  Ana  ",
        lastName2: "  ",
      },
    ]);
    expect(people).toEqual([{ ...validPerson, firstName: "Ana", lastName2: "" }]);
  });

  it("accepts PeopleNet IDs with spaces or apostrophes and rejects control characters", () => {
    const [person] = parseHirePeople([
      { ...validPerson, atradiusCategory: "B3 Manager", birthProvince: "804/804/L'V" },
    ]);
    expect(person?.atradiusCategory).toBe("B3 Manager");
    expect(person?.birthProvince).toBe("804/804/L'V");
    expect(() => parseHirePeople([{ ...validPerson, tc1Header: "00\n28" }])).toThrow(
      /ID Cabecera TC1 no es un ID válido/,
    );
  });

  it("rejects an empty list", () => {
    expect(() => parseHirePeople([])).toThrow(Meta4HireError);
    expect(() => parseHirePeople([])).toThrow(/al menos una persona/);
  });

  it("rejects missing name, document, email or hire date", () => {
    expect(() => parseHirePeople([{ ...validPerson, firstName: "" }])).toThrow(/nombre/);
    expect(() => parseHirePeople([{ ...validPerson, documentNumber: " " }])).toThrow(
      /número de documento/,
    );
    expect(() => parseHirePeople([{ ...validPerson, email: "nolemail" }])).toThrow(/correo/);
    expect(() => parseHirePeople([{ ...validPerson, hireDate: "01/10/2026" }])).toThrow(
      /AAAA-MM-DD/,
    );
    expect(() => parseHirePeople([{ ...validPerson, hireDate: "2026-13-01" }])).toThrow(
      /fecha válida/,
    );
  });

  it("requires the chosen Puesto/Posición, confirmed required address and project", () => {
    expect(() => parseHirePeople([{ ...validPerson, positionChoice: "" }])).toThrow(/Puesto \/ Posición.*obligatorio/);
    expect(() => parseHirePeople([{ ...validPerson, job: "" }])).toThrow(/ID Puesto/);
    expect(() => parseHirePeople([{ ...validPerson, project: "" }])).toThrow(/Proyecto/);
    expect(() => parseHirePeople([{ ...validPerson, addressLine1: "" }])).toThrow(/dirección línea 1/);
    expect(() => parseHirePeople([{ ...validPerson, streetNumber: "" }])).toThrow(/número de vía/);
    expect(() => parseHirePeople([{ ...validPerson, postalCode: "" }])).toThrow(/código postal/);
    const [position] = parseHirePeople([{ ...validPerson, positionChoice: "position", job: "retained", position: "POS01", occupationType: "ejc", occupationEjc: "0.5", occupationHours: "99" }]);
    expect(position).toMatchObject({ job: "", position: "POS01", occupationEjc: "0.5", occupationHours: "" });
    expect(() => parseHirePeople([{ ...validPerson, positionChoice: "position", position: "" }])).toThrow(/ID Posición/);
  });

  it("validates active SS, partial schedule, disability and bank branches and drops retained values", () => {
    const [normal] = parseHirePeople([{ ...validPerson, ssNumberPrefix: "28", partialSchedulePercent: "50", disabilityPercent: "33", bankBranch: "00491500", accountNumber: "123" }]);
    expect(normal).toMatchObject({ ssNumberPrefix: "", partialSchedulePercent: "", disabilityPercent: "", bankBranch: "", accountNumber: "" });
    expect(() => parseHirePeople([{ ...validPerson, ssNumberChoice: "assigned", ssNumberPrefix: "28" }])).toThrow(/número de S.S./);
    expect(() => parseHirePeople([{ ...validPerson, scheduleChoice: "partial", partialSchedulePercent: "50" }])).toThrow(/Tipo de horas/);
    expect(() => parseHirePeople([{ ...validPerson, disabilityChoice: "with", disabilityPercent: "" }])).toThrow(/minusvalía/);
    expect(() => parseHirePeople([{ ...validPerson, bankFormatChoice: "other", bankBranch: "00491500", accountNumber: "" }])).toThrow(/número de cuenta/);
    expect(() => parseHirePeople([{ ...validPerson, iban: "ES5200491500061234567891" }])).toThrow(/IBAN/);
    const [other] = parseHirePeople([{ ...validPerson, bankFormatChoice: "other", iban: "invalid retained", bankBranch: "00491500", accountNumber: "000123456789" }]);
    expect(other).toMatchObject({ iban: "", bankBranch: "00491500", accountNumber: "000123456789" });
  });

  it("rejects impossible dates, non-finite numbers and invalid fixed IDs", () => {
    expect(() => parseHirePeople([{ ...validPerson, birthDate: "2026-02-30" }])).toThrow(/fecha válida/);
    expect(() => parseHirePeople([{ ...validPerson, contractEnd: "2027-01-01T25:00" }])).toThrow(/hora no válida/);
    expect(() => parseHirePeople([{ ...validPerson, annualGross: "Infinity" }])).toThrow(/número no válido/);
    expect(() => parseHirePeople([{ ...validPerson, legalReductionPercent: "101" }])).toThrow(/número no válido/);
    expect(() => parseHirePeople([{ ...validPerson, scheduleChoice: "partial", partialSchedulePercent: "50", hourType: "9", numberOfHours: "20", partialScheduleType: "R", weeklyWorkDays: "5" }])).toThrow(/Tipo de horas/);
    expect(() => parseHirePeople([{ ...validPerson, keyEmployee: "Si" }])).toThrow(/Empleado clave/);
  });

  it("rejects more people than the template row budget", () => {
    const people = Array.from({ length: MAX_PERSON_COUNT + 1 }, () => validPerson);
    expect(() => parseHirePeople(people)).toThrow(new RegExp(String(MAX_PERSON_COUNT)));
  });
});
