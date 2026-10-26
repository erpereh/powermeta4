import { beforeEach, describe, expect, it, vi } from "vitest";

import type { PeopleNetRegistro } from "@/features/registro-retributivo/peoplenet/registro-query";
import type { RegistroEmployee } from "@/features/registro-retributivo/types";
import type { PayrollReceipt } from "@/types/payroll-receipt";

const mocks = vi.hoisted(() => ({
  loadRegistroFromPeopleNet: vi.fn(),
  getPayrollReceiptsForSociety: vi.fn(),
}));

vi.mock("@/features/registro-retributivo/peoplenet/registro-query", () => ({
  loadRegistroFromPeopleNet: mocks.loadRegistroFromPeopleNet,
}));
vi.mock("@/lib/peoplenet/payroll-receipt", () => ({
  getPayrollReceiptsForSociety: mocks.getPayrollReceiptsForSociety,
}));

import {
  compactPayrollRecords,
  runRetributivoPeopleNetAnalyze,
} from "@/features/registro-retributivo/server/run-peoplenet-analyze";

const money = { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 };

const employee = (employeeNumber: string, salary: number): RegistroEmployee => ({
  sourceRow: 1,
  employeeNumber,
  workerName: `Persona ${employeeNumber}`,
  normalizedPlusVariables: money,
  normalized: money,
  periodComplete: { ...money, salary, total: salary },
  lastSituation: money,
  nonNormalized: {
    salaryComplementVariable: 0,
    extraSalaryVariable: 0,
    salaryPpe: 0,
    salaryComplementPpe: 0,
    salaryIt: 0,
    salaryComplementIt: 0,
  },
  excelBreakdownDiffs: { salary: 0, salaryComplement: 0, extraSalary: 0 },
  concepts: [
    { block: "Salario", blockKey: "salary", code: "SSP_SAL_BASE", amount: salary },
    { block: "C. Salarial", blockKey: "salaryComplement", code: "CSP_I_PAGA_25_ANYOS", amount: 0 },
  ],
  raw: {},
});

const registro: PeopleNetRegistro = {
  sheetName: "PeopleNet",
  headerRows: { group: 0, subheader: 0, firstData: 0 },
  columnMap: {},
  conceptCodes: {
    salary: ["SSP_SAL_BASE"],
    salaryComplement: ["CSP_I_PAGA_25_ANYOS"],
    extraSalary: [],
  },
  records: [employee("1023", 2000)],
  internalChecks: [],
  warnings: [],
  normalizedAvailable: false,
  itemColumns: [{ code: "SSP_SAL_BASE", table: "M4SCO_AC_HR_PERIOD", column: "SSP_SAL_BASE" }],
};

const receipt = (salary: number): PayrollReceipt => ({
  paymentType: "current-and-retroactive",
  currencyId: "EUR",
  company: { name: "", taxId: "", socialSecurityRegistration: "" },
  periodLabel: "Del 1 al 31 Enero 2025",
  worker: {
    employeeId: "",
    fullName: "",
    nationalId: "",
    socialSecurityNumber: "",
    contributionGroup: "",
  },
  workCenter: "",
  professionalGroup: "",
  seniorityDate: null,
  lines: [
    {
      id: "r1",
      section: "concept",
      level: 0,
      // Texto propio de la sociedad: se enlaza por columna, no por el mapa de IBER.
      concept: "Sueldo Base CYC",
      units: null,
      unitsFormat: "decimal",
      price: null,
      percentage: null,
      earning: salary,
      deduction: null,
    },
  ],
  bases: {
    totalRemuneration: 0,
    extraPayProration: 0,
    totalBase: 0,
    generalRegimeBase: 0,
    unemploymentBase: 0,
  },
  totals: { accrued: salary, deducted: 0, netPay: salary },
  accumulated: { irpfBase: 0, irpfQuota: 0, socialSecurityQuota: 0 },
  bankPayments: [],
  beneficiaryPayments: [],
  unmapped: { accrued: 0, deducted: 0 },
});

describe("runRetributivoPeopleNetAnalyze", () => {
  beforeEach(() => {
    mocks.loadRegistroFromPeopleNet.mockResolvedValue(registro);
    mocks.getPayrollReceiptsForSociety.mockResolvedValue({
      receipts: [
        {
          employeeId: "1023",
          paymentDate: "2025-01-25",
          payName: "Enero 2025",
          receipt: receipt(1000),
        },
        {
          employeeId: "1023",
          paymentDate: "2025-02-25",
          payName: "Febrero 2025",
          receipt: receipt(1000),
        },
        // Fuera de la población del Registro (entidad legal excluida, por ejemplo).
        {
          employeeId: "9999",
          paymentDate: "2025-01-25",
          payName: "Enero 2025",
          receipt: receipt(500),
        },
      ],
      lineSources: [
        {
          concept: "Sueldo Base CYC",
          table: "M4SCO_AC_HR_PERIOD",
          column: "SSP_SAL_BASE",
          informative: false,
        },
      ],
    });
  });

  it("compara recibos y registro del mismo periodo sin ficheros", async () => {
    const result = await runRetributivoPeopleNetAnalyze("CYC", {
      from: "2025-01-01",
      to: "2025-12-31",
      employeeIds: [],
      tolerance: 1,
      conceptMap: [],
      excludedEmployeeIds: [],
    });

    expect(mocks.loadRegistroFromPeopleNet).toHaveBeenCalledWith({
      organization: "CYC",
      from: "2025-01-01",
      to: "2025-12-31",
      employeeIds: undefined,
    });
    expect(result.source).toBe("peoplenet");
    expect(result.period).toEqual({ from: "2025-01-01", to: "2025-12-31" });
    expect(result.normalizedAvailable).toBe(false);
    expect(result.people.map((row) => [row.employeeNumber, row.status, row.payrollCount])).toEqual([
      ["1023", "OK", 2],
    ]);
    expect(result.summary.pdfsAnalyzed).toBe(2);
    expect(result.criteria).toContain(
      "Personas con nómina fuera de la población del Registro (no se comparan): 1.",
    );
    expect(result.payrollRecords).toEqual([
      expect.objectContaining({
        sourceFile: "PeopleNet · 2 recibos",
        concepts: [{ name: "Sueldo Base CYC", amount: 2000, type: "devengo" }],
      }),
    ]);
    expect(result.registroEmployees[0]?.concepts.map((concept) => concept.code)).toEqual([
      "SSP_SAL_BASE",
    ]);
    expect(result.registroConceptCodes?.salaryComplement).toEqual(["CSP_I_PAGA_25_ANYOS"]);
  });

  it("deja que el mapa del usuario prevalezca sobre el automático", async () => {
    const result = await runRetributivoPeopleNetAnalyze("CYC", {
      from: "2025-01-01",
      to: "2025-12-31",
      employeeIds: ["1023"],
      tolerance: 1,
      conceptMap: [
        {
          pdfConcept: "Sueldo Base CYC",
          normalizedPdfConcept: "sueldo base cyc",
          block: "Salario",
          blockKey: "salary",
          status: "Ignorado",
          includedInComparison: false,
        },
      ],
      excludedEmployeeIds: [],
    });
    expect(result.people[0]?.salaryPdf).toBe(0);
    expect(result.employeeIdsFilter).toEqual(["1023"]);
  });
});

describe("compactPayrollRecords", () => {
  it("no devuelve nada sin recibos", () => {
    expect(compactPayrollRecords([])).toEqual([]);
  });
});
