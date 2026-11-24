import { describe, expect, it, vi } from "vitest";

import type { Meta4OperationalContext } from "@/lib/meta4/operational-context";

import { Meta4HireError } from "../errors";
import { hireExtraFixture } from "../test-fixtures";
import type { HirePerson } from "../types";
import type { HireLookups } from "./plan";
import { hireRowOwner, launchDirectHire, type DirectHireDeps } from "./service";

const context: Meta4OperationalContext = {
  mode: "meta4",
  username: "rrhh.user",
  society: "CYC",
  companyId: "company-cyc",
  jSessionId: "session",
};

const person = (documentNumber: string): HirePerson => ({
  ...hireExtraFixture,
  firstName: "Ana",
  lastName1: "Lopez",
  lastName2: "",
  documentType: "1",
  documentNumber,
  email: "ana@example.test",
  hireDate: "2026-10-01",
  issuingCountry: "724",
  nationality: "724",
  birthProvince: "",
  birthCountry: "724",
  gender: "2",
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
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
  job: "RDCI",
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
});

const lookups: HireLookups = {
  jobName: "Puesto",
  positionName: null,
  placeName: "Madrid",
  provinceName: "Madrid",
  countryName: "España",
  bic: "BSCHESMMXXX",
  categoryGroup: "02",
};

const deps = (overrides: Partial<DirectHireDeps> = {}) => {
  let next = 1830;
  const created = new Map<string, string>();
  const write = vi.fn<NonNullable<DirectHireDeps["write"]>>(async (_model, plan, target) => {
    expect(plan.rows.length).toBeGreaterThan(20);
    created.set(target.document, target.personId);
  });
  return {
    write,
    created,
    deps: {
      choosePersonId: async () => {
        const sequence = next++;
        return { id: String(sequence), sequence, process: "STD_PERSON" as const, counter: 1829 };
      },
      loadLookups: async () => lookups,
      countSameName: async () => 0,
      loadUser: async () => ({
        secUser: "RRHH.USER",
        appRole: "M4_USER",
        access: { mask: "M4ADM", objects: null },
      }),
      write,
      findExistingDocuments: async (documents: readonly string[]) =>
        new Map(
          documents.flatMap((d) => (created.has(d) ? [[d, created.get(d) ?? ""] as const] : [])),
        ),
      now: () => new Date(Date.UTC(2026, 10, 24)),
      dryRun: false,
      log: () => undefined,
      ...overrides,
    } satisfies DirectHireDeps,
  };
};

describe("launchDirectHire", () => {
  it("writes each person in its own transaction and raises the counter with it", async () => {
    const { deps: d, write } = deps();
    const result = await launchDirectHire(context, [person("00000001R"), person("00000002W")], d);
    expect(result).toMatchObject({
      personCount: 2,
      personIds: ["1830", "1831"],
    });
    expect(write).toHaveBeenCalledTimes(2);
    expect(write.mock.calls[0]?.[2]).toEqual({
      personId: "1830",
      document: "00000001R",
      counter: { society: "CYC", process: "STD_PERSON", sequence: 1830 },
    });
  });

  it("stops before writing when the bank of a Spanish IBAN has no BIC", async () => {
    const { deps: d, write } = deps({ loadLookups: async () => ({ ...lookups, bic: null }) });
    const error = await launchDirectHire(context, [person("00000001R")], d).catch(
      (e: unknown) => e,
    );
    expect(error).toBeInstanceOf(Meta4HireError);
    expect((error as Meta4HireError).issues[0]).toMatchObject({ person: 1, field: "iban" });
    expect(write).not.toHaveBeenCalled();
  });

  it("refuses, as Meta4's security does, a role that may not insert in every table", async () => {
    const log = vi.fn();
    const { deps: d, write } = deps({
      log,
      loadUser: async () => ({
        secUser: "EMPLEADO",
        appRole: "M4EMPLOYEE",
        access: { mask: "M4EMPLOYEE", objects: new Set(["STD_PERSON"]) },
      }),
    });
    const error = await launchDirectHire(context, [person("00000001R")], d).catch(
      (e: unknown) => e,
    );
    expect(error).toBeInstanceOf(Meta4HireError);
    const hireError = error as Meta4HireError;
    expect(hireError.code).toBe("META4_HIRE_PERMISSION");
    expect(hireError.message).toBe(
      "Tu usuario de Meta4 no tiene permiso para dar de alta a personas.",
    );
    expect(hireError.issues.every((issue) => issue.person === undefined)).toBe(true);
    expect(hireError.issues[0]?.message).toContain("rol M4EMPLOYEE");
    expect(log).toHaveBeenCalledWith(
      expect.objectContaining({
        role: "M4EMPLOYEE",
        objects: expect.stringContaining("CYC_H_ESTRUCTURA"),
      }),
    );
    expect(write).not.toHaveBeenCalled();
  });

  it("warns like Meta4 when someone already has the same name", async () => {
    const { deps: d } = deps({ countSameName: async () => 1 });
    const result = await launchDirectHire(context, [person("00000001R")], d);
    expect(result.warnings?.[0]).toContain("mismo nombre");
  });

  it("says who is already hired and who was not written when one fails", async () => {
    let calls = 0;
    const { deps: d } = deps();
    const failing: DirectHireDeps = {
      ...d,
      write: async (model, plan, target) => {
        calls += 1;
        if (calls === 2) throw new Error("connection lost");
        await d.write(model, plan, target);
      },
    };
    const error = await launchDirectHire(
      context,
      [person("00000001R"), person("00000002W"), person("00000003A")],
      failing,
    ).catch((e: unknown) => e);
    expect((error as Meta4HireError).message).toContain(
      "Se ha dado de alta a 1 de 3 personas (IDs 1830)",
    );
  });

  it("fails when the person is not in STD_PERSON with its ID after the transaction", async () => {
    const { deps: d } = deps({ findExistingDocuments: async () => new Map() });
    const error = await launchDirectHire(context, [person("00000001R")], d).catch(
      (e: unknown) => e,
    );
    expect((error as Meta4HireError).code).toBe("META4_HIRE_IMPORT_FAILED");
  });

  it("simulates with real reads and writes nothing in plan mode", async () => {
    const { deps: d, write } = deps({ dryRun: true });
    const error = await launchDirectHire(context, [person("00000001R")], d).catch(
      (e: unknown) => e,
    );
    expect((error as Meta4HireError).message).toContain("no se ha grabado nada");
    expect((error as Meta4HireError).issues[0]?.message).toMatch(
      /Persona 1 \(ID 1830\): \d+ filas .*STD_PERSON 1/,
    );
    expect(write).not.toHaveBeenCalled();
  });

  it("stamps the stored user and its connection role, as Meta4 does", () => {
    expect(
      hireRowOwner("rrhh.user", {
        user: "RRHH.USER",
        connectionRole: "M4_USER",
        defaultRole: "M4ADM",
      }),
    ).toEqual({ secUser: "RRHH.USER", appRole: "M4_USER" });
    expect(
      hireRowOwner("rrhh.user", {
        user: "RRHH.USER",
        connectionRole: null,
        defaultRole: "M4EMPLOYEE",
      }),
    ).toEqual({ secUser: "RRHH.USER", appRole: "M4EMPLOYEE" });
    expect(() => hireRowOwner("nadie", undefined)).toThrow(Meta4HireError);
  });
});
