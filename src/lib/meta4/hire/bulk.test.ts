import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";

import { HIRE_BULK_COLUMNS } from "@/components/tools/users/hire-form/bulk-columns";
import {
  createHirePersonDraft,
  draftFromBulkValues,
  toHirePersonInput,
} from "@/components/tools/users/hire-form/draft";

import { parseHireBulkWorkbook } from "./bulk-import";
import { pickHirePlace, resolveHireBulkPlaces } from "./bulk-places";
import { buildHireBulkTemplate, HIRE_BULK_FIRST_ROW, HIRE_BULK_KEY_ROW } from "./bulk-template";
import { hireExtraFixture } from "./test-fixtures";
import { HIRE_TEST_CATALOGS, HIRE_TEST_PLACES } from "./test-catalogs";
import type { HirePerson } from "./types";
import { parseHirePeople } from "./validate";

const base: HirePerson = {
  ...hireExtraFixture,
  firstName: "Ana",
  lastName1: "López",
  lastName2: "Ruiz",
  documentType: "1",
  documentNumber: "",
  email: "",
  hireDate: "2026-12-01",
  issuingCountry: "",
  nationality: "724",
  birthProvince: "",
  birthCountry: "",
  gender: "2",
  maritalStatus: "01",
  atradiusJobCode: "0000",
  atradiusCategory: "00",
  department: "1001",
  locationType: "1",
  roadType: "CL",
  city: "",
  province: "",
  community: "",
  country: "",
  legalEntity: "ACYC_ES",
  job: "GR_ACAN",
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
  bankFormatChoice: "iban",
  iban: "ES5200491500061234567890",
  phonePrefix: "+34",
  phoneNumber: "912345678",
  mobilePrefix: "+34",
  mobileNumber: "612345678",
};

const NIF = "TRWAGMYFPDXBNJZSQVHLCKE";
const nif = (n: number) => `${n}${NIF[n % 23]}`;

const cellValue = (person: HirePerson, key: keyof HirePerson): ExcelJS.CellValue => {
  const column = HIRE_BULK_COLUMNS.find((candidate) => candidate.key === key);
  const value = person[key];
  if (typeof value === "boolean") return value ? "Sí" : "No";
  if (column?.kind === "choice") {
    return column.choices?.find((choice) => choice.value === value)?.label ?? "";
  }
  return value;
};

/** Fills the template like RRHH would: IDs without zeros, names and Spanish dates. */
const fillTemplate = async (
  rows: readonly {
    person: HirePerson;
    friendly: Partial<Record<keyof HirePerson, ExcelJS.CellValue>>;
  }[],
) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(new Uint8Array(await buildHireBulkTemplate(HIRE_TEST_CATALOGS)).buffer);
  const sheet = workbook.getWorksheet("Personas");
  if (!sheet) throw new Error("Sin hoja Personas");
  const columnOf = new Map<string, number>();
  sheet.getRow(HIRE_BULK_KEY_ROW).eachCell((cell, column) => {
    columnOf.set(String(cell.value), column);
  });
  rows.forEach(({ person, friendly }, index) => {
    const row = sheet.getRow(HIRE_BULK_FIRST_ROW + index);
    for (const column of HIRE_BULK_COLUMNS) {
      const position = columnOf.get(column.key);
      if (position === undefined) throw new Error(`Falta la columna ${column.key}`);
      row.getCell(position).value =
        column.key in friendly ? (friendly[column.key] ?? null) : cellValue(person, column.key);
    }
  });
  return Buffer.from(await workbook.xlsx.writeBuffer());
};

const searchPlaces = async (query: string) =>
  HIRE_TEST_PLACES.filter((place) => place.name.includes(query.toUpperCase()));

describe("bulk hire Excel", () => {
  it("has one column per person field, each once", () => {
    const keys = Object.keys(toHirePersonInput(createHirePersonDraft(1))).sort();
    expect(HIRE_BULK_COLUMNS.map((column) => column.key).sort()).toEqual(keys);
  });

  it("round-trips three people typed with names, IDs without zeros and Spanish dates", async () => {
    const people = [1, 2, 3].map((index) => ({
      ...base,
      firstName: `Persona${index}`,
      documentNumber: nif(91000000 + index),
      email: `persona${index}@example.test`,
      fusionId: String(9000 + index),
      atradiusId: `A10000${index}`,
    }));
    const bytes = await fillTemplate(
      people.map((person, index) => ({
        person,
        friendly: {
          maritalStatus: 1,
          gender: "mujer",
          nationality: "Española",
          documentType: "NIF",
          city: "madrid",
          hireDate: new Date(Date.UTC(2026, 11, index + 1)),
          birthDate: "03/01/1990",
          keyEmployee: index === 1 ? "Sí" : "No",
          // Branch choices left empty: the data says which applies.
          positionChoice: "",
          bankFormatChoice: "",
          scheduleChoice: "",
        },
      })),
    );

    const parsed = parseHireBulkWorkbook(bytes, HIRE_TEST_CATALOGS);
    expect(parsed.problems).toEqual([]);
    expect(parsed.people.map((person) => person.row)).toEqual([3, 4, 5]);
    const resolved = await resolveHireBulkPlaces(parsed.people, searchPlaces);
    expect(resolved.problems).toEqual([]);

    const drafts = resolved.people.map((person, index) =>
      draftFromBulkValues(index + 1, person.values, person.cityName),
    );
    const valid = parseHirePeople(drafts.map(toHirePersonInput), {
      documentTypes: HIRE_TEST_CATALOGS.documentType,
    });
    expect(valid).toHaveLength(3);
    valid.forEach((person, index) => {
      expect(person).toMatchObject({
        firstName: `Persona${index + 1}`,
        documentNumber: nif(91000001 + index),
        email: `persona${index + 1}@example.test`,
        fusionId: String(9001 + index),
        maritalStatus: "01",
        gender: "2",
        nationality: "724",
        documentType: "1",
        city: "724/13/28/28079",
        province: "724/13/28",
        community: "724/13",
        country: "724",
        hireDate: `2026-12-0${index + 1}`,
        birthDate: "1990-01-03",
        keyEmployee: index === 1,
        positionChoice: "job",
        job: "GR_ACAN",
        bankFormatChoice: "iban",
        scheduleChoice: "full",
        legalContract: "100",
        internalContract: "100A",
      });
    });
    expect(drafts[0]?.pendingValues.cityName).toBe("MADRID");
  });

  it("reports unknown catalog values, wrong choices and unknown places by row", async () => {
    const person = { ...base, documentNumber: nif(91000010) };
    const bytes = await fillTemplate([
      {
        person,
        friendly: {
          maritalStatus: "Viudo",
          scheduleChoice: "Media jornada",
          internalContract: "999",
          city: "Atlantis",
        },
      },
    ]);
    const parsed = parseHireBulkWorkbook(bytes, HIRE_TEST_CATALOGS);
    expect(parsed.problems).toEqual([
      "Fila 3: ID Estado civil: «Viudo» no está en el catálogo de tu sociedad.",
      "Fila 3: Jornada completa / Jornada parcial: «Media jornada» no es una opción válida.",
      "Fila 3: Contrato «100 / 999» no existe en PeopleNet para tu sociedad.",
    ]);
    expect(parsed.people[0]?.values.maritalStatus).toBe("");
    const resolved = await resolveHireBulkPlaces(parsed.people, searchPlaces);
    expect(resolved.problems).toEqual([
      "Fila 3: no se ha encontrado una única población «Atlantis»; elígela en el formulario.",
    ]);
  });

  it("rejects a workbook without the key row", () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Personas").addRow(["Nombre"]);
    return workbook.xlsx.writeBuffer().then((bytes) => {
      expect(parseHireBulkWorkbook(Buffer.from(bytes), HIRE_TEST_CATALOGS).problems).toEqual([
        "No es la plantilla de altas: falta la fila 2 con las claves. Descárgala de nuevo.",
      ]);
    });
  });

  it("prefers the place of the row's province when the name repeats", () => {
    const places = [
      { id: "724/09/08/08001", name: "SANTA CRUZ" },
      { id: "724/13/28/28001", name: "SANTA CRUZ" },
    ];
    expect(pickHirePlace(places, "Santa Cruz", "724/13/28")?.id).toBe("724/13/28/28001");
    expect(pickHirePlace(places, "Santa Cruz", "")).toBeUndefined();
  });
});

describe("Meta4 person IDs written in the file", () => {
  it("formats them like Meta4: BC for interns and four digits in COLL", async () => {
    const { formatHirePersonId, hireCounterProcess } = await import("./existing-people");
    expect(hireCounterProcess(base)).toBe("STD_PERSON");
    expect(hireCounterProcess({ ...base, internalContract: "BEC1" })).toBe("STD_PERSON_BEC");
    expect(formatHirePersonId("STD_PERSON", "CYC", 1820)).toBe("1820");
    expect(formatHirePersonId("STD_PERSON_BEC", "CYC", 203)).toBe("BC203");
    expect(formatHirePersonId("STD_PERSON", "COLL", 28)).toBe("0028");
  });

  it("takes the first ID after the counter that nobody holds, even if the counter did not move", async () => {
    const { hirePersonIdCandidates, pickFreeHirePersonId } = await import("./existing-people");
    const candidates = hirePersonIdCandidates("STD_PERSON", "CYC", 1819, 5);
    expect(candidates.map((candidate) => candidate.id)).toEqual([
      "1820",
      "1821",
      "1822",
      "1823",
      "1824",
    ]);
    // 1820 was created by the previous import; 1821 is already given in this batch.
    expect(pickFreeHirePersonId(candidates, new Set(["1820"]), new Set(["1821"]))).toEqual({
      id: "1822",
      sequence: 1822,
    });
    expect(
      pickFreeHirePersonId(candidates, new Set(candidates.map((c) => c.id)), new Set()),
    ).toBeNull();
  });
});
