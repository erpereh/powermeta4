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
import type { HirePerson } from "./types";

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
  firstName: "Ana",
  lastName1: "López",
  lastName2: "",
  documentType: "DNI",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
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
        expect(operation.xml).toContain(`ARG_PATH_FILE>${buildHireFilePath(IMPORT_DIRECTORY, buildHireFileName("user", HIRE_NOW))}<`);
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
});
