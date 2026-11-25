import { describe, expect, it, vi } from "vitest";

import type { ResolvedAuthSession } from "@/lib/auth/service";

import { Meta4HireError } from "./errors";
import { createSerializedQueue } from "./mutex";
import { launchMeta4Hire, type LaunchMeta4HireDeps } from "./service";
import { hireExtraFixture } from "./test-fixtures";
import type { HireLaunchResult, HirePerson } from "./types";

const loadCatalogs = vi.hoisted(() => vi.fn());
const findExistingHireDocuments = vi.hoisted(() =>
  vi.fn(async (_documents: readonly string[]) => new Map<string, string>()),
);
vi.mock("./existing-people", async (importOriginal) => ({
  ...(await importOriginal<typeof import("./existing-people")>()),
  findExistingHireDocuments,
}));
vi.mock("./catalog-queries", () => ({
  loadHireCatalogsForLaunch: loadCatalogs,
}));
vi.mock("./direct/service", () => ({ launchDirectHire: vi.fn() }));

loadCatalogs.mockResolvedValue({
  currency: [{ id: "EUR", name: "Euro" }],
  paymentType: [{ id: "4", name: "Transferencia Bancaria" }],
  companyBank: [{ id: "0001", name: "0001 - Crédito y Caución S.A." }],
  agreement: [{ id: "0001", name: "Convenio de Empresa" }],
  adjustmentType: [{ id: "0", name: "Ninguno" }],
  salaryType: [{ id: "1", name: "Mensual" }],
  union: [{ id: "UGT", name: "Unión General de Trabajadores" }],
  irpfType: [{ id: "NAC", name: "Nacional" }],
  perceptionKey: [{ id: "A", name: "Empleados por cuenta ajena" }],
  referenceModelWeek: [
    { id: "001/1", name: "Modelo 1", detail: "Semana 004" },
    { id: "002/2", name: "Modelo 2", detail: "Semana 005" },
  ],
  documentType: [{ id: "1", name: "NIF" }],
  country: [{ id: "724", name: "España" }],
  nationality: [{ id: "724", name: "Española" }],
  community: [{ id: "724/28", name: "Madrid" }],
  province: [{ id: "724/28/28", name: "Madrid" }],
  place: [{ id: "724/28/28/28079", name: "MADRID" }],
  gender: [],
  maritalStatus: [{ id: "01", name: "Soltero/a" }],
  atradiusJob: [{ id: "0000", name: "Sin datos" }],
  atradiusCategory: [{ id: "00", name: "Sin datos" }],
  department: [{ id: "0000", name: "Sin datos" }],
  locationType: [{ id: "1", name: "Domicilio" }],
  roadType: [{ id: "CL", name: "Calle" }],
  legalEntity: [{ id: "ACYC_ES", name: "ACYC España" }],
  job: [{ id: "RDCI", name: "Responsable" }],
  position: [],
  workUnit: [{ id: "00", name: "Pendiente de definir" }],
  workLocation: [{ id: "724", name: "España" }],
  category: [{ id: "I1", name: "Categoría I1" }],
  costCenter: [{ id: "000000", name: "Sin Centro de Costo" }],
  startReason: [{ id: "001", name: "Nueva Alta" }],
  structure: [{ id: "0", name: "Empleado" }],
  functionalWorkCenter: [{ id: "O_CEN1", name: "Oficinas Centrales" }],
  variableCompensationMode: [{ id: "1", name: "Modelo CYC" }],
  tc1Header: [{ id: "0000", name: "Grupos sin Cotizaciones" }],
  tariffGroup: [{ id: "1", name: "Ingenieros y licenciados" }],
  ssOccupation: [],
  ssAgreement: [],
  contract: [
    { id: "100/100A", name: "Ordinario Indefinido", detail: "Contrato Mujer Reincorporada Indef" },
  ],
  laborRelation: [],
  reductionReason: [],
  substitutionCause: [],
  unemploymentCondition: [],
  specialLaborRelation: [],
  socialExclusion: [],
});

const AUTH_SESSION = {
  sessionId: "internal-meta4-session",
  cookieHash: "hash-only",
  authContext: {
    mode: "meta4" as const,
    username: "user",
    canUseMeta4: true,
    societyCode: "CYC" as const,
    availableSocieties: ["CYC"],
  },
  expiresAt: new Date("2026-09-01T00:00:00.000Z"),
  lastValidatedAt: new Date("2026-08-01T00:00:00.000Z"),
} satisfies ResolvedAuthSession;

const person: HirePerson = {
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

const CYC_CONTEXT = {
  mode: "meta4" as const,
  username: "user",
  society: "CYC" as const,
  jSessionId: "session",
  companyId: "company-cyc",
};

const hired: HireLaunchResult = { personCount: 1, personIds: ["1830"] };

const setup = (overrides: LaunchMeta4HireDeps = {}) => {
  const directHire = vi.fn(async (..._args: unknown[]) => hired);
  const deps: LaunchMeta4HireDeps = {
    getOperationalContext: async () => CYC_CONTEXT,
    serialize: createSerializedQueue(),
    directHire,
    ...overrides,
  };
  return { directHire, deps };
};

describe("launchMeta4Hire service", () => {
  it.each([
    { field: "department", value: "nonexistent", label: /ID Department/ },
    { field: "birthCommunity", value: "nonexistent", label: /ID Comunidad nacimiento/ },
    { field: "birthCommunity", value: "724/28", label: /ID Comunidad nacimiento/ },
    { field: "referenceModelWeek", value: "001/2", label: /Modelo\/Semana/ },
  ] as const)("rejects invalid $field before writing", async ({ field, value, label }) => {
    const { directHire, deps } = setup();
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, [field]: value }], deps),
    ).rejects.toMatchObject({
      code: "META4_HIRE_VALIDATION",
      message: expect.stringMatching(label),
    });
    expect(directHire).not.toHaveBeenCalled();
  });

  it("validates the raw birth community against its country and province and forwards the four fields", async () => {
    const { directHire, deps } = setup({
      loadCatalogs: async () => ({
        ...(await loadCatalogs()),
        country: [
          { id: "724", name: "España" },
          { id: "620", name: "Portugal" },
        ],
        community: [
          { id: "724/28", name: "Madrid" },
          { id: "620/28", name: "Otra comunidad" },
          { id: "724/09", name: "Cataluña" },
        ],
      }),
    });
    const populated = {
      ...person,
      birthCountry: "724",
      birthCommunity: "28",
      birthProvince: "724/28/28",
      extrasDate: "2024-02-29",
      referenceModelWeek: "001/1",
    };
    await launchMeta4Hire(AUTH_SESSION, [populated], deps);
    expect(directHire.mock.calls[0]?.[1]).toEqual([populated]);
    directHire.mockClear();
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...populated, birthCommunity: "09" }], deps),
    ).rejects.toMatchObject({
      message: expect.stringMatching(/Provincia nacimiento no pertenece a ID Comunidad nacimiento/),
    });
    await expect(
      launchMeta4Hire(
        AUTH_SESSION,
        [{ ...populated, birthCountry: "620", birthCommunity: "09", birthProvince: "" }],
        deps,
      ),
    ).rejects.toMatchObject({ message: expect.stringMatching(/ID Comunidad nacimiento/) });
    expect(directHire).not.toHaveBeenCalled();
  });

  it("stops before writing when a document already exists in PeopleNet or repeats in the batch", async () => {
    const { directHire, deps } = setup();
    findExistingHireDocuments.mockResolvedValueOnce(new Map([["00000000T", "1815"]]));
    const existing = await launchMeta4Hire(AUTH_SESSION, [person], deps).catch(
      (error: unknown) => error,
    );
    expect(existing).toBeInstanceOf(Meta4HireError);
    expect((existing as Meta4HireError).issues).toEqual([
      expect.objectContaining({
        person: 1,
        field: "documentNumber",
        message: expect.stringContaining("1815"),
      }),
    ]);
    expect(findExistingHireDocuments).toHaveBeenLastCalledWith(["00000000T"]);

    const repeated = await launchMeta4Hire(
      AUTH_SESSION,
      [person, { ...person, documentNumber: "00000000-t" }],
      deps,
    ).catch((error: unknown) => error);
    expect((repeated as Meta4HireError).issues).toEqual([
      expect.objectContaining({
        person: 2,
        field: "documentNumber",
        message: expect.stringContaining("Persona 1"),
      }),
    ]);

    findExistingHireDocuments.mockRejectedValueOnce(new Error("timeout"));
    await expect(launchMeta4Hire(AUTH_SESSION, [person], deps)).rejects.toMatchObject({
      code: "META4_HIRE_CATALOG_UNAVAILABLE",
    });
    expect(directHire).not.toHaveBeenCalled();
  });

  it("rejects payment IDs outside the society catalogs before writing", async () => {
    const { directHire, deps } = setup();
    await expect(
      launchMeta4Hire(AUTH_SESSION, [person, { ...person, companyBank: "0009" }], deps),
    ).rejects.toMatchObject({
      code: "META4_HIRE_VALIDATION",
      message: expect.stringMatching(/Persona 2: «0009» .*ID Banco empresa.*CYC/),
    });
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, accountCurrency: "XXX" }], deps),
    ).rejects.toMatchObject({ message: expect.stringMatching(/Moneda de la cuenta/) });
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, legalEntity: "IBER" }], deps),
    ).rejects.toMatchObject({ message: expect.stringMatching(/«IBER» .*ID Empresa.*CYC/) });
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, payrollAgreement: "0004" }], deps),
    ).rejects.toMatchObject({ message: expect.stringMatching(/«0004» .*ID Convenio.*CYC/) });
    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, province: "724/08/08" }], {
        ...deps,
        loadCatalogs: async () => ({
          ...(await loadCatalogs()),
          province: [{ id: "724/08/08", name: "Barcelona" }],
          community: [{ id: "724/28", name: "Madrid" }],
        }),
      }),
    ).rejects.toMatchObject({
      message: expect.stringMatching(/ID Población no pertenece a ID Provincia/),
    });
    expect(directHire).not.toHaveBeenCalled();
  });

  it("takes the society from the server context, never from the client, and writes directly", async () => {
    const getOperationalContext = vi.fn(async () => ({
      ...CYC_CONTEXT,
      society: "IBER" as const,
      companyId: "company-iber",
    }));
    const { directHire, deps } = setup({ getOperationalContext });
    const result = await launchMeta4Hire(AUTH_SESSION, [person], deps);
    expect(result).toEqual(hired);
    expect(getOperationalContext).toHaveBeenCalledTimes(1);
    expect(loadCatalogs).toHaveBeenLastCalledWith("IBER", ["724/28/28/28079"]);
    expect(directHire).toHaveBeenCalledTimes(1);
    expect(directHire.mock.calls[0]?.[0]).toMatchObject({ society: "IBER", username: "user" });
  });

  it("serializes hires in this process", async () => {
    const order: string[] = [];
    let release: () => void = () => undefined;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const directHire = vi.fn(async (_context: unknown, people: unknown) => {
      const name = (people as HirePerson[])[0]?.firstName ?? "";
      order.push(`start ${name}`);
      if (name === "Ana") await gate;
      order.push(`end ${name}`);
      return hired;
    });
    const { deps } = setup({ directHire });
    const first = launchMeta4Hire(AUTH_SESSION, [person], deps);
    const second = launchMeta4Hire(
      AUTH_SESSION,
      [{ ...person, firstName: "Luis", documentNumber: "11111111H" }],
      deps,
    );
    await vi.waitFor(() => expect(order).toEqual(["start Ana"]));
    release();
    await Promise.all([first, second]);
    expect(order).toEqual(["start Ana", "end Ana", "start Luis", "end Luis"]);
  });
});
