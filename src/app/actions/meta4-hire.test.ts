import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/auth/session", () => ({
  requireAuthContext: vi.fn(),
}));

vi.mock("@/lib/meta4/hire/service", () => ({
  launchMeta4Hire: vi.fn(),
}));

import { requireAuthContext } from "@/lib/auth/session";
import { launchMeta4Hire } from "@/lib/meta4/hire/service";

import { launchMeta4HireAction } from "./meta4-hire";

const requireAuth = vi.mocked(requireAuthContext);
const launchHire = vi.mocked(launchMeta4Hire);

const person = {
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

afterEach(() => {
  requireAuth.mockReset();
  launchHire.mockReset();
});

describe("launchMeta4HireAction", () => {
  it("validates input then launches hire without echoing personal data", async () => {
    requireAuth.mockResolvedValue({
      sessionId: "session",
      cookieHash: "hash",
      authContext: {
        mode: "meta4",
        username: "user",
        canUseMeta4: true,
        societyCode: "CYC",
        availableSocieties: ["CYC"],
      },
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
      lastValidatedAt: new Date("2026-08-01T00:00:00.000Z"),
    });
    launchHire.mockResolvedValue({
      personCount: 1,
      returnCode: "0.0",
      fileName: "AltaPersonas_JORGE.SALVADOR_2026-09-22_11-12-34.xls",
      filePath: String.raw`\\WMETA4PRE2\powermeta4\import_users_excel\AltaPersonas_JORGE.SALVADOR_2026-09-22_11-12-34.xls`,
    });

    const result = await launchMeta4HireAction([person]);
    expect(result).toEqual({
      ok: true,
      data: { personCount: 1, fileName: "AltaPersonas_JORGE.SALVADOR_2026-09-22_11-12-34.xls" },
    });
    expect(launchHire).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(result)).not.toContain(person.email);
    expect(JSON.stringify(result)).not.toContain("WMETA4PRE2");
  });

  it("returns a validation error before calling Meta4", async () => {
    const result = await launchMeta4HireAction([]);
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected failure");
    expect(result.errorCode).toBe("META4_HIRE_VALIDATION");
    expect(launchHire).not.toHaveBeenCalled();
  });
});
