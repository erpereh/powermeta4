import { describe, expect, it } from "vitest";

import {
  assertHireCatalogSelections,
  type HireCatalogOption,
  type HireCatalogState,
} from "@/lib/meta4/hire/catalogs";
import { parseHirePerson } from "@/lib/meta4/hire/validate";

import { createDevHirePersonDraft, findDevTestPlace, getDevTestPlaceQuery } from "./dev-test-data";
import { toHirePersonInput } from "./draft";

const options = (id: string): HireCatalogOption[] => [{ id, name: `Opción ${id}` }];
const place: HireCatalogOption = { id: "ZZ/COM/PROV/TEST", name: "Villa de Prueba" };
const state = {
  status: "ready",
  society: "IBER",
  catalogs: {
    documentType: options("DOC_TEST"),
    country: options("ZZ"),
    nationality: [],
    community: options("ZZ/COM"),
    province: options("ZZ/COM/PROV"),
    place: [],
    gender: [],
    maritalStatus: options("MARITAL_TEST"),
    atradiusJob: options("ATRADIUS_JOB_TEST"),
    atradiusCategory: options("ATRADIUS_CATEGORY_TEST"),
    department: options("DEPARTMENT_TEST"),
    locationType: options("LOCATION_TEST"),
    roadType: options("ROAD_TEST"),
    legalEntity: options("ENTITY_TEST"),
    job: options("JOB_TEST"),
    position: options("POSITION_TEST"),
    workUnit: options("UNIT_TEST"),
    workLocation: options("WORK_LOCATION_TEST"),
    category: options("CATEGORY_TEST"),
    costCenter: options("COST_TEST"),
    startReason: options("REASON_TEST"),
    structure: options("STRUCTURE_TEST"),
    functionalWorkCenter: options("CENTER_TEST"),
    currency: options("CUR_TEST"),
    paymentType: options("PAYMENT_TEST"),
    companyBank: options("BANK_TEST"),
    agreement: options("AGREEMENT_TEST"),
    adjustmentType: options("ADJUSTMENT_TEST"),
    salaryType: options("SALARY_TEST"),
    union: [],
    irpfType: options("IRPF_TEST"),
    perceptionKey: options("PERCEPTION_TEST"),
    referenceModelWeek: [],
    variableCompensationMode: options("17"),
    tc1Header: options("TC1_TEST"),
    tariffGroup: options("TARIFF_TEST"),
    ssOccupation: [],
    ssAgreement: [],
    contract: options("LEGAL_TEST/INTERNAL_TEST"),
    laborRelation: [],
    reductionReason: [],
    substitutionCause: [],
    unemploymentCondition: [],
    specialLaborRelation: [],
    socialExclusion: [],
  },
} satisfies Extract<HireCatalogState, { status: "ready" }>;
const now = new Date(2026, 8, 29, 0, 30);

describe("development hire test data", () => {
  it("builds a valid person from the supplied catalogs without changing them", () => {
    const draft = createDevHirePersonDraft(7, state, place, now);
    const person = parseHirePerson(toHirePersonInput(draft));
    expect(() =>
      assertHireCatalogSelections([person], { ...state.catalogs, place: [place] }, state.society),
    ).not.toThrow();
    expect(draft.id).toBe(7);
    expect(person).toMatchObject({
      firstName: "Prueba",
      lastName1: "Automática",
      lastName2: "Persona 7",
      email: "persona-7@example.test",
      hireDate: "2026-09-29",
      documentType: "DOC_TEST",
      department: "DEPARTMENT_TEST",
      legalEntity: "ENTITY_TEST",
      legalContract: "LEGAL_TEST",
      internalContract: "INTERNAL_TEST",
      job: "JOB_TEST",
      position: "",
      city: place.id,
      province: "ZZ/COM/PROV",
      community: "ZZ/COM",
      country: "ZZ",
      ssNumberChoice: "unassigned",
      scheduleChoice: "full",
      disabilityChoice: "without",
      bankFormatChoice: "iban",
      issuingCountry: "",
      referenceModelWeek: "",
      keyEmployee: false,
    });
    expect(draft.pendingValues.cityName).toBe(place.name);
    expect(person.documentNumber).not.toBe(
      createDevHirePersonDraft(8, state, place, now).current.documentNumber,
    );
    expect(state.catalogs.place).toEqual([]);
    expect(state.catalogs.department).toEqual(options("DEPARTMENT_TEST"));
  });

  it("uses a catalog position and hours when no jobs are available", () => {
    const positionState = { ...state, catalogs: { ...state.catalogs, job: [] } };
    const person = parseHirePerson(
      toHirePersonInput(createDevHirePersonDraft(1, positionState, place, now)),
    );
    expect(person).toMatchObject({
      positionChoice: "position",
      job: "",
      position: "POSITION_TEST",
      occupationType: "hours",
      occupationHours: "40",
    });
  });

  it("rejects missing required catalog options and incompatible geography", () => {
    expect(() =>
      createDevHirePersonDraft(
        1,
        { ...state, catalogs: { ...state.catalogs, department: [] } },
        place,
        now,
      ),
    ).toThrow(/ID Department/);
    expect(() =>
      createDevHirePersonDraft(1, state, { ...place, id: "OTHER/COM/PROV/TEST" }, now),
    ).toThrow(/ID Provincia/);
    expect(() =>
      createDevHirePersonDraft(
        1,
        { ...state, catalogs: { ...state.catalogs, job: [], position: [] } },
        place,
        now,
      ),
    ).toThrow(/puestos ni posiciones/);
  });

  it("selects compatible places and derives the search from a coherent province", () => {
    expect(findDevTestPlace(state.catalogs, [{ ...place, id: "OTHER/COM/PROV/TEST" }, place])).toBe(
      place,
    );
    expect(getDevTestPlaceQuery(state.catalogs)).toBe("Opción ZZ/COM/PROV");
    expect(getDevTestPlaceQuery({ ...state.catalogs, community: [] })).toBeUndefined();
  });
});
