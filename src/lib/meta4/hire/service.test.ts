import { describe, expect, it, vi } from "vitest";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import {
  Meta4SessionRequiredError,
  SessionExpiredError,
  type AuthenticatedSoapOperation,
} from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";

import { buildHireFileName, buildHireFilePath } from "./filename";
import { Meta4HireError } from "./errors";
import { createSerializedQueue } from "./mutex";
import { launchMeta4Hire } from "./service";
import { hireExtraFixture } from "./test-fixtures";
import type { HirePerson } from "./types";

const loadCatalogs = vi.hoisted(() => vi.fn());
vi.mock("./catalog-queries", () => ({
  loadHireCatalogsForLaunch: loadCatalogs,
}));
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
  referenceModelWeek: [],
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
  department: [],
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

const IMPORT_DIRECTORY = String.raw`\\WMETA4PRE2\powermeta4\import_users_excel`;
const HIRE_NOW = new Date(2026, 8, 22, 11, 12, 34);
const exampleFileName = buildHireFileName("JORGE.SALVADOR", HIRE_NOW);
const exampleFilePath = buildHireFilePath(IMPORT_DIRECTORY, exampleFileName);

type SoapExecute = <T>(operation: AuthenticatedSoapOperation<T>) => Promise<T>;

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

const successBody = `
  <soap:Envelope>
    <soap:Body>
      <SRTC_LAUNCH_IMPORTResponse>
        <SRTC_LAUNCH_IMPORTReturn>
          <return>0.0</return>
        </SRTC_LAUNCH_IMPORTReturn>
      </SRTC_LAUNCH_IMPORTResponse>
    </soap:Body>
  </soap:Envelope>`;

describe("launchMeta4Hire service", () => {
  it("writes and calls SOAP with the same import UNC path", async () => {
    let callCount = 0;
    const executeSoap: SoapExecute = async (operation) => {
      callCount += 1;
      expect(operation.url).toBe("https://example.test/SRTC_LAUNCH_IMPORT");
      expect(operation.xml).toContain("ARG_ID_GROUP_INTERFACE>INIT_EMPLOYEES_FD<");
      expect(operation.xml).toContain(`ARG_PATH_FILE>${exampleFilePath}<`);
      expect(operation.xml).not.toContain(`ARG_PATH_FILE>${IMPORT_DIRECTORY}<`);
      expect(operation.xml).not.toContain("SOAPAction");
      expect(operation.xml).not.toContain("jsession-should-not-leak");
      expect(operation.xml).not.toContain(person.firstName);
      return operation.parseResponse(new Response(successBody, { status: 200 }));
    };

    const preserved = Buffer.from("excel-preserved-bytes");
    const editHireWorkbook = vi.fn(async () => preserved);
    const writeHireFile = vi.fn(async (_destination: string, _bytes: Buffer) => undefined);
    const verifyHireFile = vi.fn(async (_destination: string) => undefined);

    const result = await launchMeta4Hire(AUTH_SESSION, [person], {
      getOperationalContext: async () => ({
        mode: "meta4",
        username: "JORGE.SALVADOR",
        society: "CYC",
        jSessionId: "jsession-should-not-leak",
        companyId: "company-cyc",
      }),
      executeSoap,
      editHireWorkbook,
      writeHireFile,
      verifyHireFile,
      hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
      hireDirectory: IMPORT_DIRECTORY,
      now: () => HIRE_NOW,
      templatePath: "./fuentes/HIRE/Hire_1_PERSONA.xls",
      serialize: createSerializedQueue(),
    });

    expect(result).toEqual({
      personCount: 1,
      returnCode: "0.0",
      fileName: exampleFileName,
      filePath: exampleFilePath,
    });
    expect(callCount).toBe(1);
    expect(editHireWorkbook).toHaveBeenCalledTimes(1);
    expect(writeHireFile).toHaveBeenCalledTimes(1);
    expect(verifyHireFile).toHaveBeenCalledTimes(1);
    expect(writeHireFile.mock.calls.at(0)?.[0]).toBe(exampleFilePath);
    expect(verifyHireFile.mock.calls.at(0)?.[0]).toBe(exampleFilePath);
    expect(writeHireFile.mock.calls.at(0)?.[0]).toBe(verifyHireFile.mock.calls.at(0)?.[0]);
    expect(exampleFileName).toBe("AltaPersonas_JORGE.SALVADOR_2026-09-22_11-12-34.xls");
    expect(exampleFilePath.endsWith(`\\${exampleFileName}`)).toBe(true);
    expect(exampleFilePath).not.toBe(IMPORT_DIRECTORY);
    expect(writeHireFile.mock.calls.at(0)?.[1]).toBe(preserved);
  });

  it("never accepts a client society and keeps logs free of personal data", async () => {
    const logs: Array<{ message: string; details: Record<string, string> }> = [];
    const getOperationalContext = vi.fn(async () => ({
      mode: "meta4" as const,
      username: "user",
      society: "IBER" as const,
      jSessionId: "server-jsession",
      companyId: "company-iber",
    }));

    await launchMeta4Hire(AUTH_SESSION, [person], {
      getOperationalContext,
      executeSoap: async (operation) => {
        expect(operation.xml).not.toContain("CYC");
        expect(operation.xml).toContain(
          `ARG_PATH_FILE>${buildHireFilePath(IMPORT_DIRECTORY, buildHireFileName("user", HIRE_NOW))}<`,
        );
        return operation.parseResponse(new Response(successBody, { status: 200 }));
      },
      editHireWorkbook: async () => Buffer.from("excel-preserved-bytes"),
      writeHireFile: async () => undefined,
      verifyHireFile: async () => undefined,
      hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
      hireDirectory: IMPORT_DIRECTORY,
      now: () => HIRE_NOW,
      serialize: createSerializedQueue(),
      log: (message, details) => {
        logs.push({ message, details });
      },
    });

    expect(getOperationalContext).toHaveBeenCalledTimes(1);
    expect(loadCatalogs).toHaveBeenLastCalledWith("IBER", ["724/28/28/28079"]);
    expect(logs[0]?.details).toMatchObject({
      operation: "SRTC_LAUNCH_IMPORT",
      code: "OK",
      personCount: "1",
    });
    const serialized = JSON.stringify(logs);
    expect(serialized).not.toContain(person.firstName);
    expect(serialized).not.toContain(person.email);
    expect(serialized).not.toContain(person.documentNumber);
  });

  it("rethrows known system errors and wraps unclassified failures", async () => {
    const common = {
      getOperationalContext: async () => ({
        mode: "meta4" as const,
        username: "user",
        society: "CYC" as const,
        jSessionId: "jsession",
        companyId: "company-cyc",
      }),
      editHireWorkbook: async () => Buffer.from("excel-preserved-bytes"),
      writeHireFile: async () => undefined,
      verifyHireFile: async () => undefined,
      hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
      hireDirectory: IMPORT_DIRECTORY,
      now: () => HIRE_NOW,
      serialize: createSerializedQueue(),
    };

    const known = [
      new Meta4SessionRequiredError(),
      new SessionExpiredError(),
      new Meta4SoapFaultError("boom", "soap:Server"),
      new Meta4HttpError(500),
      new Meta4HireError("META4_HIRE_IMPORT_FAILED", "rechazado"),
    ];

    for (const error of known) {
      await expect(
        launchMeta4Hire(AUTH_SESSION, [person], {
          ...common,
          editHireWorkbook: async () => {
            throw error;
          },
        }),
      ).rejects.toBe(error);
    }

    await expect(
      launchMeta4Hire(AUTH_SESSION, [person], {
        ...common,
        editHireWorkbook: async () => {
          throw new Error("disk melted");
        },
      }),
    ).rejects.toMatchObject({ code: "META4_HIRE_FETCH_FAILED" });
  });

  it("rejects payment IDs outside the society catalogs before touching Excel", async () => {
    const editHireWorkbook = vi.fn(async () => Buffer.from("excel-preserved-bytes"));
    await expect(
      launchMeta4Hire(AUTH_SESSION, [person, { ...person, companyBank: "0009" }], {
        getOperationalContext: async () => ({
          mode: "meta4" as const,
          username: "user",
          society: "CYC" as const,
          jSessionId: "jsession",
          companyId: "company-cyc",
        }),
        editHireWorkbook,
        hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
        hireDirectory: IMPORT_DIRECTORY,
        serialize: createSerializedQueue(),
      }),
    ).rejects.toMatchObject({
      code: "META4_HIRE_VALIDATION",
      message: expect.stringMatching(/Persona 2: «0009» .*ID Banco empresa.*CYC/),
    });
    expect(editHireWorkbook).not.toHaveBeenCalled();

    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, accountCurrency: "XXX" }], {
        getOperationalContext: async () => ({
          mode: "meta4" as const,
          username: "user",
          society: "CYC" as const,
          jSessionId: "jsession",
          companyId: "company-cyc",
        }),
        editHireWorkbook,
        hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
        hireDirectory: IMPORT_DIRECTORY,
        serialize: createSerializedQueue(),
      }),
    ).rejects.toMatchObject({ message: expect.stringMatching(/Moneda de la cuenta/) });

    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, legalEntity: "IBER" }], {
        getOperationalContext: async () => ({
          mode: "meta4" as const,
          username: "user",
          society: "CYC" as const,
          jSessionId: "jsession",
          companyId: "company-cyc",
        }),
        editHireWorkbook,
        hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
        hireDirectory: IMPORT_DIRECTORY,
        serialize: createSerializedQueue(),
      }),
    ).rejects.toMatchObject({ message: expect.stringMatching(/«IBER» .*ID Empresa.*CYC/) });

    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, payrollAgreement: "0004" }], {
        getOperationalContext: async () => ({
          mode: "meta4" as const,
          username: "user",
          society: "CYC" as const,
          jSessionId: "jsession",
          companyId: "company-cyc",
        }),
        editHireWorkbook,
        hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
        hireDirectory: IMPORT_DIRECTORY,
        serialize: createSerializedQueue(),
      }),
    ).rejects.toMatchObject({ message: expect.stringMatching(/«0004» .*ID Convenio.*CYC/) });

    await expect(
      launchMeta4Hire(AUTH_SESSION, [{ ...person, province: "724/08/08" }], {
        getOperationalContext: async () => ({
          mode: "meta4" as const,
          username: "user",
          society: "CYC" as const,
          jSessionId: "jsession",
          companyId: "company-cyc",
        }),
        loadCatalogs: async () => ({
          ...(await loadCatalogs()),
          province: [{ id: "724/08/08", name: "Barcelona" }],
          community: [{ id: "724/28", name: "Madrid" }],
        }),
        editHireWorkbook,
        hireUrl: "https://example.test/SRTC_LAUNCH_IMPORT",
        hireDirectory: IMPORT_DIRECTORY,
        serialize: createSerializedQueue(),
      }),
    ).rejects.toMatchObject({
      message: expect.stringMatching(/ID Población no pertenece a ID Provincia/),
    });
    expect(editHireWorkbook).not.toHaveBeenCalled();
  });
});
