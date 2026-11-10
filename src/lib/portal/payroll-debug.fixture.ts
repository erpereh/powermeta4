import "server-only";
import type {
  PayrollPayOption,
  PayrollPaymentType,
  PayrollReceiptEntry,
} from "@/types/payroll-receipt";
import { DEBUG_ACTORS, type PortalDebugSelection } from "./read-model";

export const debugPays: readonly PayrollPayOption[] = ["10", "09", "08"].map((month) => ({
  paymentDate: `2026-${month}-25`,
  name: `${month}/2026 · muestra`,
  startDate: `2026-${month}-01`,
  endDate: `2026-${month}-28`,
  category: "ordinary",
}));

/** Importes completamente inventados; no usa los recibos de referencia del proyecto. */
export function debugPayslips(
  selection: PortalDebugSelection,
  from: string,
  to: string,
  paymentType: PayrollPaymentType,
): PayrollReceiptEntry[] {
  if (selection.scenario === "empty") return [];
  const actor = DEBUG_ACTORS.find((person) => person.id === selection.actor) ?? DEBUG_ACTORS[0];
  const accrued =
    paymentType === "retroactive" ? 150 : paymentType === "current-and-retroactive" ? 2450 : 2300;
  const deducted =
    paymentType === "retroactive" ? 30 : paymentType === "current-and-retroactive" ? 490 : 460;
  return debugPays
    .filter((pay) => pay.paymentDate >= from && pay.paymentDate <= to)
    .map((pay) => ({
      id: pay.paymentDate,
      paymentDate: pay.paymentDate,
      payName: pay.name,
      receipt: {
        paymentType,
        currencyId: "EUR",
        company: {
          name: "Empresa ficticia · DEBUG",
          taxId: "FICTICIO",
          socialSecurityRegistration: "FICTICIO",
        },
        periodLabel: `${pay.startDate} a ${pay.endDate}`,
        worker: {
          employeeId: actor.id,
          fullName: actor.name.split(" · ")[0],
          nationalId: "FICTICIO",
          socialSecurityNumber: "FICTICIO",
          contributionGroup: "1",
        },
        workCenter: "Madrid · muestra",
        professionalGroup: "Grupo II",
        seniorityDate: "2020-02-03",
        lines: [
          {
            id: "salario",
            section: "concept",
            level: 0,
            concept:
              paymentType === "retroactive"
                ? "Atrasos de salario · muestra"
                : "Salario y atrasos según modo · muestra",
            units: 1,
            unitsFormat: "decimal",
            price: accrued,
            percentage: null,
            earning: accrued,
            deduction: null,
          },
          {
            id: "retencion",
            section: "concept",
            level: 0,
            concept: "Retención ficticia",
            units: 20,
            unitsFormat: "percentage",
            price: accrued,
            percentage: null,
            earning: null,
            deduction: deducted,
          },
        ],
        bases: {
          totalRemuneration: accrued,
          extraPayProration: 0,
          totalBase: accrued,
          generalRegimeBase: accrued,
          unemploymentBase: accrued,
        },
        totals: { accrued, deducted, netPay: accrued - deducted },
        accumulated: { irpfBase: accrued * 3, irpfQuota: deducted * 3, socialSecurityQuota: 0 },
        bankPayments:
          paymentType === "retroactive"
            ? []
            : [{ account: "CUENTA FICTICIA SIN VALIDEZ", amount: accrued - deducted }],
        beneficiaryPayments: [],
        unmapped: { accrued: selection.scenario === "partial" ? 15 : 0, deducted: 0 },
      },
    }));
}
