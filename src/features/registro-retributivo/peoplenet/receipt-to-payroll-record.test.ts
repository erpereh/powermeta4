import { describe, expect, it } from "vitest";

import { receiptToPayrollRecord } from "@/features/registro-retributivo/peoplenet/receipt-to-payroll-record";
import type { PayrollReceipt, PayrollReceiptLine } from "@/types/payroll-receipt";

const line = (overrides: Partial<PayrollReceiptLine>): PayrollReceiptLine => ({
  id: "r1",
  section: "concept",
  level: 0,
  concept: "Salario Base",
  units: null,
  unitsFormat: "decimal",
  price: null,
  percentage: null,
  earning: null,
  deduction: null,
  ...overrides,
});

const receipt = (lines: PayrollReceiptLine[]): PayrollReceipt => ({
  paymentType: "current-and-retroactive",
  currencyId: "EUR",
  company: { name: "", taxId: "", socialSecurityRegistration: "" },
  periodLabel: "Del 1 al 31 Enero 2025",
  worker: {
    employeeId: "1023",
    fullName: "",
    nationalId: "",
    socialSecurityNumber: "",
    contributionGroup: "",
  },
  workCenter: "",
  professionalGroup: "",
  seniorityDate: null,
  lines,
  bases: {
    totalRemuneration: 0,
    extraPayProration: 0,
    totalBase: 0,
    generalRegimeBase: 0,
    unemploymentBase: 0,
  },
  totals: { accrued: 2100, deducted: 300, netPay: 1800 },
  accumulated: { irpfBase: 0, irpfQuota: 0, socialSecurityQuota: 0 },
  bankPayments: [],
  beneficiaryPayments: [],
  unmapped: { accrued: 0, deducted: 0 },
});

describe("receiptToPayrollRecord", () => {
  it("convierte las líneas del recibo con la misma clasificación que los PDF", () => {
    const record = receiptToPayrollRecord({
      employeeId: "1023",
      paymentDate: "2025-01-25",
      payName: "Enero 2025",
      receipt: receipt([
        line({ concept: "Salario Base", earning: 2000 }),
        line({ id: "r2", concept: "Retención IRPF", deduction: 250 }),
        line({ id: "r3", concept: "Anticipo", deduction: 50 }),
        line({ id: "r4", section: "informative", concept: "Seguro Médico", earning: 40 }),
        line({ id: "r5", concept: "Plus vacío", earning: 0 }),
      ]),
    });

    expect(record.employeeNumber).toBe("1023");
    expect(record.sourceFile).toBe("PeopleNet · Enero 2025 (2025-01-25)");
    expect(record.periodStart).toBe("2025-01-01");
    expect(record.periodEnd).toBe("2025-01-31");
    expect(record.totalDevengado).toBe(2100);
    expect(record.concepts).toEqual([
      { name: "Salario Base", amount: 2000, type: "devengo" },
      { name: "Retención IRPF", amount: 250, type: "retencion" },
      // Una línea solo de descuento nunca se compara como devengo.
      { name: "Anticipo", amount: 50, type: "deduccion" },
      { name: "Seguro Médico", amount: 40, type: "informativo" },
    ]);
  });
});
