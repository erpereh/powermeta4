import { describe, expect, it } from "vitest";

import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import { hireExtraFixture } from "./test-fixtures";
import {
  collectHirePersonIssues,
  hireDocumentKind,
  isValidNie,
  isValidNif,
  isValidSsNumber,
  parseHirePeople,
} from "./validate";

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

  it("accepts the four fields, requires Department and preserves optional empty values", () => {
    const [person] = parseHirePeople([
      {
        ...validPerson,
        birthCommunity: "13",
        department: "0010",
        extrasDate: "2024-02-29",
        referenceModelWeek: "001/02",
        SCO_ID_WEEK_MDL: "004",
      },
    ]);
    expect(person).toMatchObject({
      birthCommunity: "13",
      department: "0010",
      extrasDate: "2024-02-29",
      referenceModelWeek: "001/02",
    });
    expect(person).not.toHaveProperty("SCO_ID_WEEK_MDL");
    expect(parseHirePeople([validPerson])[0]).toMatchObject({
      birthCommunity: "",
      extrasDate: "",
      referenceModelWeek: "",
    });
    expect(() => parseHirePeople([{ ...validPerson, department: "" }])).toThrow(
      /ID Department.*obligatorio/,
    );
    expect(() => parseHirePeople([{ ...validPerson, extrasDate: "2026-02-30" }])).toThrow(
      /fecha de extras.*fecha válida/,
    );
    expect(() => parseHirePeople([{ ...validPerson, extrasDate: "29/02/2024" }])).toThrow(
      /AAAA-MM-DD/,
    );
    for (const referenceModelWeek of ["001", "001/", "/1", "001/1/004"]) {
      expect(() => parseHirePeople([{ ...validPerson, referenceModelWeek }])).toThrow(
        /Modelo\/Semana.*par no válido/,
      );
    }
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

  it("requires the chosen Puesto/Posición, confirmed required address", () => {
    expect(() => parseHirePeople([{ ...validPerson, positionChoice: "" }])).toThrow(/Puesto \/ Posición.*obligatorio/);
    expect(() => parseHirePeople([{ ...validPerson, job: "" }])).toThrow(/ID Puesto/);
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
    const [other] = parseHirePeople([{ ...validPerson, bankFormatChoice: "other", iban: "invalid retained", bankBranch: "00491500", accountNumber: "1234567890" }]);
    expect(other).toMatchObject({ iban: "", bankBranch: "00491500", accountNumber: "1234567890" });
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

  it("collects every problem at once, one per field, with the person number", () => {
    const { issues } = collectHirePersonIssues({ ...validPerson, firstName: "", email: "x", postalCode: "" });
    expect(new Set(issues.map((issue) => issue.field))).toEqual(
      new Set(["postalCode", "firstName", "email"]),
    );
    try {
      parseHirePeople([validPerson, { ...validPerson, firstName: "" }]);
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(Meta4HireError);
      expect(error instanceof Meta4HireError && error.issues).toEqual([
        { person: 2, field: "firstName", message: "El campo nombre es obligatorio." },
      ]);
    }
  });

  it("checks NIF and NIE control letters by document type name", () => {
    expect(isValidNif("00000000T")).toBe(true);
    expect(isValidNif("00000000A")).toBe(false);
    expect(isValidNie("X1234567L")).toBe(true);
    expect(isValidNie("X1234567A")).toBe(false);
    const types = [
      { id: "1", name: "N.I.F." },
      { id: "6", name: "NIE" },
      { id: "2", name: "Pasaporte" },
    ];
    expect(hireDocumentKind("1", types)).toBe("nif");
    expect(hireDocumentKind("6", types)).toBe("nie");
    expect(hireDocumentKind("2", types)).toBe("other");
    const context = { documentTypes: types };
    expect(() => parseHirePeople([{ ...validPerson, documentNumber: "90000001A" }], context)).toThrow(/NIF/);
    expect(parseHirePeople([{ ...validPerson, documentNumber: "00000000-t" }], context)[0]?.documentNumber).toBe("00000000T");
    expect(() => parseHirePeople([{ ...validPerson, documentType: "6", documentNumber: "X1234567A" }], context)).toThrow(/NIE/);
    expect(parseHirePeople([{ ...validPerson, documentType: "2", documentNumber: "PAA123456" }], context)[0]?.documentNumber).toBe("PAA123456");
    // Without catalogs only the generic rules run.
    expect(parseHirePeople([{ ...validPerson, documentNumber: "90000001A" }])[0]?.documentNumber).toBe("90000001A");
  });

  it("validates phones, postal code against province and text lengths", () => {
    const [person] = parseHirePeople([{ ...validPerson, phonePrefix: "0034", phoneNumber: "912 345 678", mobilePrefix: "34", mobileNumber: "612345678" }]);
    expect(person).toMatchObject({ phonePrefix: "+34", phoneNumber: "912345678", mobilePrefix: "+34", mobileNumber: "612345678" });
    expect(() => parseHirePeople([{ ...validPerson, mobilePrefix: "+34", mobileNumber: "62620912" }])).toThrow(/9 dígitos/);
    expect(() => parseHirePeople([{ ...validPerson, mobilePrefix: "+34", mobileNumber: "912345678" }])).toThrow(/6 o 7/);
    expect(() => parseHirePeople([{ ...validPerson, phonePrefix: "+34" }])).toThrow(/indica el número/);
    expect(() => parseHirePeople([{ ...validPerson, phoneNumber: "912345678" }])).toThrow(/prefijo/);
    expect(() => parseHirePeople([{ ...validPerson, postalCode: "50001" }])).toThrow(/debe empezar por 28/);
    expect(() => parseHirePeople([{ ...validPerson, postalCode: "2800" }])).toThrow(/5 dígitos/);
    expect(parseHirePeople([{ ...validPerson, country: "620", province: "620/11/11", community: "620/11", city: "620/11/11/1106", postalCode: "1000-001" }])[0]?.postalCode).toBe("1000-001");
    expect(() => parseHirePeople([{ ...validPerson, firstName: "A".repeat(51) }])).toThrow(/máximo 50/);
    expect(() => parseHirePeople([{ ...validPerson, atradiusId: "12A" }])).toThrow(/ID Atradius/);
  });

  it("validates Social Security numbers and the substitution pair", () => {
    expect(isValidSsNumber("28", "1234567", "42")).toBe(true);
    expect(isValidSsNumber("28", "1234567", "43")).toBe(false);
    expect(isValidSsNumber("54", "1234567", "42")).toBe(false);
    const assigned = { ...validPerson, ssNumberChoice: "assigned" as const, ssNumberPrefix: "28", ssNumberBody: "1234567" };
    expect(parseHirePeople([{ ...assigned, ssNumberSuffix: "42" }])[0]?.ssNumberSuffix).toBe("42");
    expect(() => parseHirePeople([{ ...assigned, ssNumberSuffix: "43" }])).toThrow(/dígitos de control no corresponden/);
    expect(() => parseHirePeople([{ ...validPerson, replacedSsPrefix: "28", replacedSsBody: "1234567", replacedSsSuffix: "42" }])).toThrow(/Causa sustitución/);
    expect(() => parseHirePeople([{ ...validPerson, replacedSsPrefix: "28" }])).toThrow(/número de S.S. del sustituido/);
    expect(() => parseHirePeople([{ ...validPerson, substitutionCause: "01" }])).toThrow(/sustituido: obligatorio/);
  });

  it("checks dates against the hire date and the minor rule", () => {
    expect(() => parseHirePeople([{ ...validPerson, birthDate: "2026-10-02" }])).toThrow(/anterior a la fecha de alta/);
    expect(() => parseHirePeople([{ ...validPerson, birthDate: "2012-01-01" }])).toThrow(/16 años/);
    expect(() => parseHirePeople([{ ...validPerson, birthDate: "2009-01-01" }])).toThrow(/menores de 18/);
    expect(parseHirePeople([{ ...validPerson, birthDate: "2009-01-01", legalRepresentativeNif: "00000000T" }])[0]?.legalRepresentativeNif).toBe("00000000T");
    expect(() => parseHirePeople([{ ...validPerson, legalRepresentativeNif: "12345678A" }])).toThrow(/Representante legal/);
    expect(() => parseHirePeople([{ ...validPerson, contractEnd: "2026-09-30T10:00" }])).toThrow(/Fin de contrato/);
    expect(() => parseHirePeople([{ ...validPerson, probationEnd: "2026-09-01" }])).toThrow(/periodo prueba/);
    expect(() => parseHirePeople([{ ...validPerson, seniorityDate: "2026-11-01" }])).toThrow(/antigüedad/);
    expect(() => parseHirePeople([{ ...validPerson, hireDate: "1899-12-31" }])).toThrow(/entre 1900 y 2100/);
  });

  it("validates number ranges, decimals and related pairs", () => {
    expect(parseHirePeople([{ ...validPerson, annualGross: "32000,25" }])[0]?.annualGross).toBe("32000.25");
    expect(() => parseHirePeople([{ ...validPerson, annualGross: "0" }])).toThrow(/Bruto anual/);
    expect(() => parseHirePeople([{ ...validPerson, annualGross: "1.234" }])).toThrow(/2 decimales/);
    expect(() => parseHirePeople([{ ...validPerson, probationDays: "1.5" }])).toThrow(/Días de prueba/);
    const partial = { ...validPerson, scheduleChoice: "partial" as const, partialSchedulePercent: "50", hourType: "1", numberOfHours: "20", partialScheduleType: "R", weeklyWorkDays: "5" };
    expect(parseHirePeople([partial])[0]?.numberOfHours).toBe("20");
    expect(() => parseHirePeople([{ ...partial, partialSchedulePercent: "100" }])).toThrow(/Jornada parcial/);
    expect(() => parseHirePeople([{ ...partial, numberOfHours: "200" }])).toThrow(/Número de horas/);
    expect(() => parseHirePeople([{ ...partial, weeklyWorkDays: "8" }])).toThrow(/Días de trabajo/);
    expect(() => parseHirePeople([{ ...partial, partialScheduleType: "I" }])).toThrow(/Modelo\/Semana/);
    expect(() => parseHirePeople([{ ...validPerson, timeManagementPay: true }])).toThrow(/Modelo\/Semana/);
    expect(() => parseHirePeople([{ ...validPerson, legalReductionPercent: "25" }])).toThrow(/Motivo de reducción/);
    expect(() => parseHirePeople([{ ...validPerson, reductionReason: "01" }])).toThrow(/% Reducción/);
  });

  it("checks the Spanish account inside the IBAN and the other format digits", () => {
    expect(() => parseHirePeople([{ ...validPerson, iban: "ES520049150006123456789" }])).toThrow(/24 caracteres/);
    // Valid mod-97 but wrong national control digits (07 instead of 06).
    expect(() => parseHirePeople([{ ...validPerson, iban: "ES8700491500071234567890" }])).toThrow(/cuenta no son válidos/);
    expect(() => parseHirePeople([{ ...validPerson, bankFormatChoice: "other", bankBranch: "0049150", accountNumber: "1234567890" }])).toThrow(/8 dígitos/);
  });
});
