import { describe, expect, it } from "vitest";

import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import { parseHirePeople } from "./validate";

const validPerson = {
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
  job: "",
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
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

  it("rejects more people than the template row budget", () => {
    const people = Array.from({ length: MAX_PERSON_COUNT + 1 }, () => validPerson);
    expect(() => parseHirePeople(people)).toThrow(new RegExp(String(MAX_PERSON_COUNT)));
  });
});
