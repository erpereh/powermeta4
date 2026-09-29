import { afterEach, describe, expect, it, vi } from "vitest";

import {
  assertHireCatalogSelections,
  type HireCatalogOption,
  type HireCatalogState,
} from "@/lib/meta4/hire/catalogs";
import { parseHirePerson } from "@/lib/meta4/hire/validate";

import {
  createDevHirePersonDraft,
  findDevTestPlace,
  loadDevHirePersonDraft,
} from "./dev-test-data";
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

afterEach(() => vi.restoreAllMocks());

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

  it("selects places whose complete geographic path belongs to the loaded catalogs", () => {
    expect(findDevTestPlace(state.catalogs, [{ ...place, id: "OTHER/COM/PROV/TEST" }, place])).toBe(
      place,
    );
    expect(findDevTestPlace({ ...state.catalogs, community: [] }, [place])).toBeUndefined();
  });

  it("queries Madrid and builds a valid person from the first compatible result without preloaded places", async () => {
    const signal = new AbortController().signal;
    const search = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          ok: true,
          data: [
            { ...place, id: "OTHER/COM/PROV/TEST" },
            place,
            { ...place, id: "ZZ/COM/PROV/SECOND" },
          ],
        }),
        { status: 200 },
      ),
    );

    const draft = await loadDevHirePersonDraft(7, state, now, signal);
    const person = parseHirePerson(toHirePersonInput(draft));
    expect(search).toHaveBeenCalledExactlyOnceWith("/api/hire/places?q=Madrid", { signal });
    expect(person).toMatchObject({
      city: "ZZ/COM/PROV/TEST",
      province: "ZZ/COM/PROV",
      community: "ZZ/COM",
      country: "ZZ",
      legalContract: "LEGAL_TEST",
      internalContract: "INTERNAL_TEST",
    });
    expect(draft.id).toBe(7);
    expect(draft.pendingValues.cityName).toBe(place.name);
    expect(() =>
      assertHireCatalogSelections([person], { ...state.catalogs, place: [place] }, state.society),
    ).not.toThrow();
    expect(state.catalogs.place).toEqual([]);
  });

  it.each([
    {
      name: "HTTP failure",
      response: () => new Response(JSON.stringify({ ok: false }), { status: 500 }),
    },
    {
      name: "unsuccessful API response",
      response: () => new Response(JSON.stringify({ ok: false }), { status: 200 }),
    },
    {
      name: "empty results",
      response: () => new Response(JSON.stringify({ ok: true, data: [] }), { status: 200 }),
    },
    {
      name: "incompatible geography",
      response: () =>
        new Response(
          JSON.stringify({
            ok: true,
            data: [{ ...place, id: "OTHER/COM/PROV/TEST" }],
          }),
          { status: 200 },
        ),
    },
    {
      name: "invalid option",
      response: () =>
        new Response(
          JSON.stringify({
            ok: true,
            data: [{ id: 123, name: place.name }],
          }),
          { status: 200 },
        ),
    },
    {
      name: "invalid JSON",
      response: () => new Response("Invalid JSON", { status: 200 }),
    },
  ])("reports the existing place error for $name", async ({ response }) => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(response());
    await expect(
      loadDevHirePersonDraft(7, state, now, new AbortController().signal),
    ).rejects.toThrow("No se ha encontrado una población compatible para los datos de prueba.");
  });

  it("reports the existing place error when the network request fails", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("Network failure"));
    await expect(
      loadDevHirePersonDraft(7, state, now, new AbortController().signal),
    ).rejects.toThrow("No se ha encontrado una población compatible para los datos de prueba.");
  });
});
