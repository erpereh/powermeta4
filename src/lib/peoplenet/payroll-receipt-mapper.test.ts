import { describe, expect, it } from "vitest";

import {
  buildPeriodLabel,
  buildWorkerName,
  formatIban,
  mapPayrollPays,
  mapPayrollReceipt,
  type PayrollReceiptRows,
} from "./payroll-receipt-mapper";
import type { ReceiptTemplate, ReceiptTemplateLine } from "./payroll-receipt-template";

const utc = (iso: string) => new Date(`${iso}T00:00:00.000Z`);

type Cell = { column: string; level: "period" | "role" };
const P = (column: string): Cell => ({ column, level: "period" });
const R = (column: string): Cell => ({ column, level: "role" });

const line = (
  rowId: string,
  concept: string,
  cells: Partial<Pick<ReceiptTemplateLine, "units" | "price" | "earning" | "deduction">>,
  options: Partial<
    Pick<ReceiptTemplateLine, "section" | "level" | "perRecord" | "unitsFormat">
  > = {},
): ReceiptTemplateLine => ({
  rowId,
  concept,
  section: "concept",
  level: 0,
  perRecord: false,
  unitsFormat: "decimal",
  ...options,
  ...cells,
});

/** Plantilla mínima con los conceptos del recibo de ejemplo. */
const template: ReceiptTemplate = {
  lines: [
    line(
      "salario",
      "Salario Base",
      { units: R("SSP_U_CONC_FIJ_ROL"), price: R("SSP_P_SAL_BASE"), earning: R("SSP_SAL_BASE") },
      { perRecord: true },
    ),
    line("sb-org", "Complemento salario base organigrama", {
      price: R("CSP_P_COMP_SB_ORG"),
      earning: R("CSP_I_COMP_SB_ORG"),
    }),
    line("puesto", "Complemento Puesto de trabajo", { earning: R("CSP_I_COMP_PTO_TRA") }),
    line("personal", "Complemento Personal", { earning: R("CSP_I_COMP_PERSONAL") }),
    line("paga-extra", "Paga Extra Prorrateada", { earning: P("CSP_TOT_PAGA_EXTRA") }),
    line("teletrabajo", "Abono Teletrabajo", { earning: P("CSP_I_ABONO_TELETRABAJO") }),
    line("desc-seguro", "Descuento Seguro Medico", { earning: P("CSP_DES_SEG_MEG") }),
    line("especie-seguro", "Especie Seguro Medico", { earning: P("CSP_INM_SEG_MED") }),
    line("seguro", "Seguro Médico", { earning: P("CYC_SEG_SALUD") }),
    line(
      "irpf",
      "Retención a Cuenta del IRPF",
      { units: P("SSP_PORC_IRPF"), price: P("SSP_BASE_IRPF"), deduction: P("SSP_IRPF") },
      { unitsFormat: "percentage" },
    ),
    ...[
      "SSP_IRPF_PAGOS_ESP",
      "SSP_COT_RG_GEN_IND",
      "SSP_COT_DFPS_IND",
      "SSP_COT_IND_RG_MEI",
      "SSP_COT_IND_CAS_INT1",
      "SSP_COT_IND_CAS_INT2",
      "SSP_COT_IND_CAS_INT3",
      "CSP_I_CUOTA_GRUP_EMP",
      "CSP_I_APOR_PER_PLAN_PENSION",
    ].map((column) => line(column, column, { deduction: P(column) })),
    line(
      "coste",
      "Coste Empresa",
      { deduction: P("SSP_COSTE_SS_EMP") },
      { section: "informative" },
    ),
    line(
      "coste-cc",
      "Cotiz. Contingencias Comunes Empresa",
      { deduction: P("SSP_CERN_COT_CC") },
      { section: "informative", level: 1 },
    ),
  ],
  columns: { period: new Map(), role: new Map() },
  unresolvedItems: [],
};

/** Importes de una paga real de CYC; los datos personales son ficticios. */
const rows: PayrollReceiptRows = {
  template,
  period: {
    SCO_OR_HR_PERIOD: 1,
    ID_CURRENCY: "EUR",
    SCO_DT_PAY_START: utc("2026-04-01"),
    SCO_DT_PAY_END: utc("2026-04-30"),
    SSP_U_CONC_FIJOS: 1,
    SSP_P_EXT_PRORRAT: 651.51,
    CSP_TOT_PAGA_EXTRA: 651.51,
    CSP_I_ABONO_TELETRABAJO: 32,
    CSP_DES_SEG_MEG: -41.67,
    CSP_INM_SEG_MED: -32.61,
    CYC_SEG_SALUD: 74.28,
    SSP_PORC_IRPF: 34.16,
    SSP_BASE_IRPF: 7735.57,
    SSP_IRPF: 2642.47,
    SSP_PORC_IRPF_P_E: 34.16,
    SSP_TOT_PAGOS_ESP: 134.14,
    SSP_IRPF_PAGOS_ESP: 45.82,
    SSP_PORC_IN_COT_RG: 4.7,
    SSP_BASE_REG_GEN: 5101.2,
    SSP_COT_RG_GEN_IND: 239.76,
    SSP_PORC_IND_DFPS: 1.65,
    SSP_COT_DFPS_IND: 84.17,
    SSP_PORC_IND_COT_MEI: 0.15,
    SSP_COT_IND_RG_MEI: 7.65,
    SSP_PORC_IND_CAS_INT1: 0.19,
    SSP_BAS_CAS_INT1: 510.12,
    SSP_COT_IND_CAS_INT1: 0.97,
    SSP_PORC_IND_CAS_INT2: 0.21,
    SSP_BAS_CAS_INT2: 2040.48,
    SSP_COT_IND_CAS_INT2: 4.29,
    SSP_PORC_IND_CAS_INT3: 0.24,
    SSP_BAS_CAS_INT3: 3488.06,
    SSP_COT_IND_CAS_INT3: 8.37,
    CSP_I_CUOTA_GRUP_EMP: 4,
    CSP_I_APOR_PER_PLAN_PENSION: 250,
    CSP_COT_SEG_VIDA: 90.43,
    SSP_COSTE_SS_EMP: 1708.71,
    SSP_CERN_COT_CC: 1203.88,
    SSP_BASE_TOT_RG_RE: 11139.86,
    SSP_PRORRATA: null,
    SSP_TOTAL_REG_GEN: 11139.86,
    SSP_BASE_RG_RECIBO: 5101.2,
    SSP_BASE_ACC_RECIB: 5101.2,
    SSP_TOTAL_DEVENGOS: 7809.85,
    SSP_TOTAL_RETENIDO: 3287.5,
    SSP_LIQUIDO: 4522.35,
    CSP_REC_BASE_IRPF: 59385.01,
    CSP_REC_RET_IRPF: 20151.2,
    CSP_REC_CUOTA_SS: 1295.72,
  },
  roles: [
    {
      SCO_OR_HR_ROLE: 1,
      SCO_DT_START_SLICE: utc("2026-04-01"),
      SSP_U_CONC_FIJ_ROL: 1,
      SSP_P_SAL_BASE: 2606.04,
      SSP_SAL_BASE: 2606.04,
      CSP_P_COMP_SB_ORG: 2976.18,
      CSP_I_COMP_SB_ORG: 2976.18,
      CSP_U_COMP_PTO_TRA: 1,
      CSP_P_COMP_PTO_TRA: 1536.66,
      CSP_I_COMP_PTO_TRA: 1536.66,
      CSP_P_COMP_PERSONAL: 7.46,
      CSP_I_COMP_PERSONAL: 7.46,
    },
  ],
  hrPeriod: { SSP_NUM_MATRICULA: "9001", SSP_FEC_ANTIGUEDAD: utc("2004-03-01") },
  person: {
    STD_N_FIRST_NAME: "Ana",
    STD_N_FAM_NAME_1: "Pérez Gómez",
    STD_N_MAIDEN_NAME: "Gómez",
    STD_SSN: "00000000T",
    STD_SS_NUMBER: "280000000000",
    SSP_PROV_NUM_SS: "28",
    SSP_NUM_SS: "00000000",
    SSP_DIG_NUM_SS: "01",
  },
  legalEntity: { STD_N_LEG_ENT: "ACYC España", SSP_ID_LEGAL: "A00000000" },
  contributionAccount: { SSP_NUM_CUENTA_COT: "28000000000" },
  contributionGroup: { SSP_ID_GRUP_TARIFA: "1" },
  category: { SSP_NM_CATEGORESP: "Grupo I – Nivel 1", SCO_OR_HR_ROLE: 1 },
  workLocation: { STD_WORK_LOCESP: "Madrid - Centro" },
  payments: [{ SCO_PAYORDPRIM: 4522.35, SCO_GB_IBAN: "ES0000000000000000000001" }],
  employeeId: "9001",
};

describe("mapPayrollReceipt", () => {
  it("builds the Meta4 receipt and its lines add up to Meta4 totals", () => {
    const receipt = mapPayrollReceipt(rows);

    expect(receipt.periodLabel).toBe("Del 1 al 30 Abril 2026");
    expect(receipt.worker).toEqual({
      employeeId: "9001",
      fullName: "Ana Pérez Gómez",
      nationalId: "00000000T",
      socialSecurityNumber: "280000000001",
      contributionGroup: "1",
    });
    expect(receipt.seniorityDate).toBe("2004-03-01");
    expect(receipt.workCenter).toBe("Madrid - Centro");
    expect(receipt.totals).toEqual({ accrued: 7809.85, deducted: 3287.5, netPay: 4522.35 });
    expect(receipt.accumulated.socialSecurityQuota).toBe(1295.72);
    expect(receipt.bases.extraPayProration).toBe(0);
    expect(receipt.bankPayments).toEqual([
      { account: "ES00 0000 0000 0000 0000 0001", amount: 4522.35 },
    ]);
    expect(receipt.unmapped).toEqual({ accrued: 0, deducted: 0 });

    const concepts = receipt.lines.filter((line) => line.section === "concept");
    expect(concepts[0]).toMatchObject({ concept: "Salario Base", units: 1, earning: 2606.04 });
    expect(concepts.find((line) => line.id === "rirpf")).toMatchObject({
      units: 34.16,
      unitsFormat: "percentage",
      price: 7735.57,
      deduction: 2642.47,
    });
    expect(receipt.lines.find((line) => line.id === "rcoste-cc")).toMatchObject({
      section: "informative",
      level: 1,
    });
  });

  it("omits zero concepts and reports totals not covered by mapped lines", () => {
    const receipt = mapPayrollReceipt({
      ...rows,
      period: { ...rows.period, CSP_I_ABONO_TELETRABAJO: 0, SSP_TOTAL_DEVENGOS: 7900 },
    });

    expect(receipt.lines.some((line) => line.id === "rteletrabajo")).toBe(false);
    expect(receipt.unmapped).toEqual({ accrued: 122.15, deducted: 0 });
  });

  it("keeps one set of role lines per role slice", () => {
    const [role] = rows.roles;
    const receipt = mapPayrollReceipt({
      ...rows,
      roles: [{ ...role, SCO_DT_START_SLICE: utc("2026-04-16") }, role ?? {}],
    });

    const salaries = receipt.lines.filter((line) => line.concept === "Salario Base");
    expect(salaries.map((line) => line.id)).toEqual([
      "rsalario-1-2026-04-01",
      "rsalario-1-2026-04-16",
    ]);
  });
});

describe("payroll receipt helpers", () => {
  it("does not repeat the second surname already in the family name", () => {
    expect(buildWorkerName("Ana", "Pérez Gómez", "Gómez")).toBe("Ana Pérez Gómez");
    expect(buildWorkerName("Ana", "Pérez", "Gómez")).toBe("Ana Pérez Gómez");
  });

  it("formats period labels and IBANs like the Meta4 receipt", () => {
    expect(buildPeriodLabel("2026-03-01", "2026-03-30")).toBe("Del 1 al 30 Marzo 2026");
    expect(buildPeriodLabel("2026-03-15", "2026-04-14")).toBe("Del 15/03/2026 al 14/04/2026");
    expect(formatIban("ES00 0000000000000000 0001")).toBe("ES00 0000 0000 0000 0000 0001");
  });

  it("maps the pay calendar and skips rows without a payment date", () => {
    expect(
      mapPayrollPays([
        {
          SCO_DT_ACCRUED: utc("2026-03-24"),
          PAY_NAME: "Incrementos 2026",
          SCO_DT_START: utc("2026-03-01"),
          SCO_DATE_END: utc("2026-03-31"),
        },
        { SCO_DT_ACCRUED: null, PAY_NAME: "Sin fecha", SCO_DT_START: null, SCO_DATE_END: null },
      ]),
    ).toEqual([
      {
        paymentDate: "2026-03-24",
        name: "Incrementos 2026",
        startDate: "2026-03-01",
        endDate: "2026-03-31",
      },
    ]);
  });
});
