import { describe, expect, it } from "vitest";

import {
  evaluateReceiptTemplate,
  resolveReceiptTemplate,
  templateColumns,
  type PeopleNetRow,
} from "./payroll-receipt-template";

const columnRows: PeopleNetRow[] = [
  ...["SCO_ID_HR", "SSP_U_CONC_FIJ_ROL", "SSP_P_SAL_BASE", "SSP_SAL_BASE", "SCO_OR_HR_ROLE"].map(
    (column) => ({ TABLE_NAME: "M4SCO_AC_HR_ROLE", COLUMN_NAME: column }),
  ),
  ...["SCO_ID_HR", "CSP_P_COMP_PTO_TRA", "CSP_I_COMP_PTO_TRA"].map((column) => ({
    TABLE_NAME: "M4CSP_AC_HR_ROLE",
    COLUMN_NAME: column,
  })),
  ...["SSP_PORC_IRPF", "SSP_BASE_IRPF", "SSP_IRPF", "SSP_COSTE_SS_EMP", "SSP_CERN_COT_CC"].map(
    (column) => ({ TABLE_NAME: "M4SCO_AC_HR_PERIOD", COLUMN_NAME: column }),
  ),
  ...["SSP_TOT_PAGOS_ESP", "CSP_I_TARJETA_COMIDA"].map((column) => ({
    TABLE_NAME: "M4CSP_AC_HR_PERIOD",
    COLUMN_NAME: column,
  })),
];

/** Filas de M4SCO_ROWS × M4SCO_ROW_COL_DEF como las devuelve la consulta de la plantilla. */
const cell = (
  row: { order: number; id: number; records?: string; slices?: string },
  column: number,
  values: PeopleNetRow,
): PeopleNetRow => ({
  SCO_ORDER: row.order,
  SCO_ID_ROW: row.id,
  SCO_NM_ROWESP: "",
  SCO_RECORDS: row.records ?? "0",
  SCO_SLICES: row.slices ?? "0",
  SCO_ID_COLUMN: column,
  ...values,
});

const salary = { order: 10010, id: 1, records: "1" };
const post = { order: 10100, id: 2, slices: "1" };
const irpf = { order: 20010, id: 3 };
const food = { order: 5100685, id: 4 };
const cost = { order: 7200000, id: 5 };
const costChild = { order: 7200005, id: 6 };
const zero = { order: 30000, id: 7 };
const unknown = { order: 7100740, id: 8 };

const definitionRows: PeopleNetRow[] = [
  // Orden de llegada distinto al de Meta4: la plantilla lo ordena por SCO_ORDER.
  cell(irpf, 1, {
    SFR_ID_SOURCE_ITEM: "SSP_PORC_IRPF",
    SFR_ID_SOURCE_NODE: "SSP_RP_AC_PER",
    SCO_BEF_AFT: "A",
    SCO_CONSTANT: "%",
  }),
  cell(irpf, 2, { SFR_ID_SOURCE_ITEM: "SSP_BASE_IRPF1", SFR_ID_SOURCE_NODE: "SSP_RP_AC_PER" }),
  cell(irpf, 3, { SCO_LABELESP: "Retención a Cuenta del IRPF" }),
  cell(irpf, 5, { SFR_ID_SOURCE_ITEM: "SSP_IRPF", SFR_ID_SOURCE_NODE: "SSP_RP_AC_PER" }),
  cell(salary, 1, {
    SFR_ID_SOURCE_ITEM: "SSP_U_CONC_FIJOS_ROL",
    SFR_ID_SOURCE_NODE: "SSP_RP_AC_ROLE",
  }),
  cell(salary, 2, { SFR_ID_SOURCE_ITEM: "SSP_P_SAL_BASE", SFR_ID_SOURCE_NODE: "SSP_RP_AC_ROLE" }),
  cell(salary, 3, { SCO_LABELESP: "Salario Base" }),
  cell(salary, 4, { SFR_ID_SOURCE_ITEM: "SSP_SAL_BASE", SFR_ID_SOURCE_NODE: "SSP_RP_AC_ROLE" }),
  cell(post, 2, { PC_ITEM: "CSP_P_COMP_PTO_TRA", PC_TI: "CSP_HRROLE_CALC" }),
  cell(post, 3, { SCO_LABELESP: "Complemento Puesto de trabajo" }),
  cell(post, 4, { PC_ITEM: "CSP_I_COMP_PTO_TRA", PC_TI: "CSP_HRROLE_CALC" }),
  cell(food, 3, { SCO_LABELESP: "*** Comida Tarjeta ***" }),
  cell(food, 4, { PC_ITEM: "CSP_I_TARJETA_COMIDA", PC_TI: "CSP_HRPERIOD_CALC" }),
  cell(cost, 3, { SCO_LABELESP: "*** Coste Empresa ***" }),
  cell(cost, 5, { SCO_ID_PRT_ITEM: "SSP_COSTE_SS_EMP" }),
  cell(costChild, 3, { SCO_LABELESP: "     Cotiz. Contingencias Comunes Empresa" }),
  cell(costChild, 5, { SCO_ID_PRT_ITEM: "SSP_CERN_COT_CC" }),
  cell(zero, 3, { SCO_LABELESP: "\tCotizacion CC Vacaciones" }),
  cell(zero, 5, { SCO_ID_PRT_ITEM: "SSP_IRPF" }),
  cell(unknown, 3, { SCO_LABELESP: "     Lote Navidad" }),
  cell(unknown, 4, { SCO_ID_PRT_ITEM: "CYC_LOTE_NAVIDAD_INFO" }),
];

const repositoryRows: PeopleNetRow[] = [
  {
    ID_ITEM: "SSP_U_CONC_FIJOS_ROL",
    ID_READ_OBJECT: "SCO_AC_HR_ROLE",
    REAL_NAME: "SSP_U_CONC_FIJ_ROL",
  },
  { ID_ITEM: "SSP_BASE_IRPF1", ID_READ_OBJECT: "SCO_AC_HR_PERIOD", REAL_NAME: "SSP_BASE_IRPF" },
];

const template = resolveReceiptTemplate({ definitionRows, repositoryRows, columnRows });

describe("resolveReceiptTemplate", () => {
  it("translates Meta4 items to physical columns in Meta4 order", () => {
    expect(template.lines.map((line) => line.rowId)).toEqual(["1", "2", "3", "7", "4", "5", "6"]);
    expect(template.lines[0]).toMatchObject({
      concept: "Salario Base",
      section: "concept",
      perRecord: true,
      units: { column: "SSP_U_CONC_FIJ_ROL", level: "role" },
      earning: { column: "SSP_SAL_BASE", level: "role" },
    });
    expect(template.lines[2]).toMatchObject({
      unitsFormat: "percentage",
      price: { column: "SSP_BASE_IRPF", level: "period" },
    });
    expect(template.unresolvedItems).toEqual(["CYC_LOTE_NAVIDAD_INFO"]);
  });

  it("classifies starred and space-indented labels as informative", () => {
    const byId = new Map(template.lines.map((line) => [line.rowId, line]));
    expect(byId.get("4")).toMatchObject({
      concept: "Comida Tarjeta",
      section: "informative",
      level: 0,
    });
    expect(byId.get("6")).toMatchObject({ section: "informative", level: 1 });
    // Un tabulador no es sangría de desglose en el recibo.
    expect(byId.get("7")).toMatchObject({
      concept: "Cotizacion CC Vacaciones",
      section: "concept",
    });
  });

  it("lists only columns that exist, with their physical table", () => {
    expect(templateColumns(template, "role")).toEqual([
      "SSP_U_CONC_FIJ_ROL",
      "SSP_P_SAL_BASE",
      "SSP_SAL_BASE",
      "CSP_P_COMP_PTO_TRA",
      "CSP_I_COMP_PTO_TRA",
    ]);
    expect(template.columns.role.get("CSP_I_COMP_PTO_TRA")).toBe("B");
    expect(template.columns.role.get("SCO_ID_HR")).toBe("A");
  });
});

describe("evaluateReceiptTemplate", () => {
  const period: PeopleNetRow = {
    SSP_PORC_IRPF: 34.16,
    SSP_BASE_IRPF: 7735.57,
    SSP_IRPF: 2642.47,
    CSP_I_TARJETA_COMIDA: 213.41,
    SSP_COSTE_SS_EMP: 1708.71,
    SSP_CERN_COT_CC: 1203.88,
  };
  const role = (slice: string, salaryAmount: number, postAmount: number): PeopleNetRow => ({
    SCO_OR_HR_ROLE: 1,
    SCO_DT_START_SLICE: new Date(`${slice}T00:00:00.000Z`),
    SSP_U_CONC_FIJ_ROL: 1,
    SSP_P_SAL_BASE: 2606.04,
    SSP_SAL_BASE: salaryAmount,
    CSP_P_COMP_PTO_TRA: 1536.66,
    CSP_I_COMP_PTO_TRA: postAmount,
  });

  it("fills the lines and omits zero amounts", () => {
    const lines = evaluateReceiptTemplate(template, period, [role("2026-04-01", 2606.04, 1536.66)]);

    expect(lines.map((line) => line.concept)).toEqual([
      "Salario Base",
      "Complemento Puesto de trabajo",
      "Retención a Cuenta del IRPF",
      "Cotizacion CC Vacaciones",
      "Comida Tarjeta",
      "Coste Empresa",
      "Cotiz. Contingencias Comunes Empresa",
    ]);
    expect(lines[2]).toMatchObject({
      id: "r3",
      units: 34.16,
      unitsFormat: "percentage",
      price: 7735.57,
      deduction: 2642.47,
    });
  });

  it("repeats per-record lines for each role slice", () => {
    const lines = evaluateReceiptTemplate(template, { ...period, SSP_IRPF: 0 }, [
      role("2026-04-01", 1303.02, 768.33),
      role("2026-04-16", 1303.02, 768.33),
    ]);

    const salaries = lines.filter((line) => line.concept === "Salario Base");
    expect(salaries.map((line) => line.id)).toEqual(["r1-1-2026-04-01", "r1-1-2026-04-16"]);
    expect(salaries.map((line) => line.earning)).toEqual([1303.02, 1303.02]);
  });
});
