import { beforeEach, describe, expect, it, vi } from "vitest";

import type { PortalSqlParam, PortalSqlRow } from "@/lib/portal/peoplenet/query";

const mocks = vi.hoisted(() => ({ runPortalSelect: vi.fn() }));

vi.mock("@/lib/portal/peoplenet/query", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/portal/peoplenet/query")>()),
  runPortalSelect: mocks.runPortalSelect,
}));

import { loadRegistroFromPeopleNet } from "@/features/registro-retributivo/peoplenet/registro-query";
import { assertReadOnlySql } from "@/lib/portal/peoplenet/query";

const day = (iso: string) => new Date(`${iso}T00:00:00Z`);
const keyRow = (allocation: string) => ({
  SCO_ID_HR: "1023",
  SCO_OR_HR_PERIOD: 1,
  SCO_DT_ALLOC: day(allocation),
  SCO_DT_PAYMENT: day(allocation),
  SCO_DT_START_SLICE: day(allocation.replace(/-\d\d$/, "-01")),
  SCO_PAY_FREQ_ALLOC: "004",
  SCO_PAY_FREQ_PAY: "004",
});

const item = (overrides: PortalSqlRow): PortalSqlRow => ({
  ID_TI: "SCO_AUX_AC_HRPERIOD2",
  SSP_DT_START: day("1800-01-01"),
  SSP_DT_END: day("4000-01-01"),
  SSP_ID_TIPO_CLAS: "SAL",
  SSP_ID_TIPO_SUBCLAS: "GEN",
  SSP_ID_TIPO_NORMA: "NO_NOR",
  SSP_SIGNO: 0,
  SSP_COEFICIENTE: null,
  ...overrides,
});

const rule = (sequence: number, overrides: PortalSqlRow): PortalSqlRow => ({
  ID_ORGANIZATION: "0000",
  SCO_SEQUENCE: sequence,
  ID_ITEM_ACUM: "SCO_I_CPTO_13",
  ID_ITEM_CLAS: "SSP_ID_TIPO_CLAS",
  SCO_VALUE_CLAS: "SAL",
  ID_ITEM_SUBCLAS: null,
  SCO_VALUE_SUBCLAS: null,
  ID_ITEM_NORMA: "SSP_ID_TIPO_NORMA",
  SCO_VALUE_NORMA: "NO_NOR",
  ...overrides,
});

const rowsFor = (statement: string): PortalSqlRow[] => {
  if (statement.includes("FROM M4SSP_IR_ITEM_REG_RETRIB")) {
    return [
      item({
        ID_ITEM: "SSP_SAL_BASE",
        ID_WRITE_OBJECT: "SCO_AC_HR_PERIOD",
        REAL_NAME: "SSP_SAL_BASE",
      }),
      item({
        ID_TI: "SSP_AUX_ACUM_SS",
        ID_ITEM: "SSP_B60_PREST_ENF_6075",
        ID_WRITE_OBJECT: "SSP_ACUMULADO_SS",
        REAL_NAME: "SSP_B60_P_ENF_6075",
        SSP_ID_TIPO_SUBCLAS: "IT",
      }),
      item({
        ID_ITEM: "SSP_SIN_COLUMNA",
        ID_WRITE_OBJECT: "SCO_AC_HR_PERIOD",
        REAL_NAME: "NO_EXISTE",
      }),
    ];
  }
  if (statement.includes("FROM M4SSP_IR_ITEM_MAP_ACUM")) {
    return [
      rule(1, {}),
      // La secuencia se repite en otra casilla: no es un duplicado.
      rule(1, { ID_ITEM_ACUM: "SCO_I_CPTO_11", SCO_VALUE_NORMA: null, ID_ITEM_NORMA: null }),
      // Subclasificación declarada sin valor: Meta4 nunca la casa.
      rule(2, { ID_ITEM_SUBCLAS: "SSP_ID_TIPO_SUBCLAS" }),
    ];
  }
  if (statement.includes("FROM M4SSP_IR_X_TIPO_NORMA")) {
    return [
      {
        SSP_ID_TIPO_NORMA: "NO_NOR",
        SSP_IND_NORMA_LAST_PAY: 0,
        SCO_LN4_CODE: "'Recibimos 6 argumentos\niValorConcepto = ARG_NUM1\nReturn(iValorConcepto)",
      },
      { SSP_ID_TIPO_NORMA: "TOT_2", SSP_IND_NORMA_LAST_PAY: 0, SCO_LN4_CODE: "Return(0)" },
    ];
  }
  if (statement.includes("FROM M4SSP_OUTPUT_COLUMNS")) {
    return [
      {
        SSP_NM_COLUMN: " SSP_SAL_BASE ",
        SSP_NM_GROUP: "Conceptos Salario",
        SSP_ORDER: 1200,
        ID_ITEM: "SCO_I_CPTO_16",
      },
      {
        SSP_NM_COLUMN: "SSP_B60_PREST_ENF_6075",
        SSP_NM_GROUP: "Conceptos Salario",
        SSP_ORDER: 1201,
        ID_ITEM: "SCO_I_CPTO_42",
      },
    ];
  }
  if (statement.includes("INFORMATION_SCHEMA.COLUMNS")) {
    return [
      { TABLE_NAME: "M4SCO_AC_HR_PERIOD", COLUMN_NAME: "SSP_SAL_BASE" },
      { TABLE_NAME: "M4SCO_AC_HR_PERIOD", COLUMN_NAME: "SSP_COEF_JORNADA" },
      { TABLE_NAME: "M4SCO_AC_HR_PERIOD", COLUMN_NAME: "SSP_HOR_ANU_CONV" },
      { TABLE_NAME: "M4SSP_ACUMULADO_S1", COLUMN_NAME: "SSP_B60_P_ENF_6075" },
    ];
  }
  if (statement.includes("LAST_ALLOC")) {
    return [{ SCO_ID_HR: "1023", SCO_OR_HR_PERIOD: 1, LAST_ALLOC: day("2025-12-25") }];
  }
  if (statement.includes("FROM M4SCO_AC_HR_PERIOD A")) {
    return [
      { ...keyRow("2025-01-25"), H_SSP_COEF_JORNADA: 1, H_SSP_HOR_ANU_CONV: 1800, C0: 10000 },
      { ...keyRow("2025-12-25"), H_SSP_COEF_JORNADA: 1, H_SSP_HOR_ANU_CONV: null, C0: 11000 },
    ];
  }
  if (statement.includes("FROM M4SSP_ACUMULADO_SS A"))
    return [{ ...keyRow("2025-12-25"), C0: 120.5 }];
  if (statement.includes("FROM M4SSP_H_CATEGORIA")) {
    return [
      {
        SCO_ID_HR: "1023",
        SSP_FEC_INICIO: day("2024-01-01"),
        SSP_NM_CATEGORESP: "Técnico",
        CSP_NM_AGR_CATESP: null,
      },
      {
        SCO_ID_HR: "1023",
        SSP_FEC_INICIO: day("2025-06-01"),
        SSP_NM_CATEGORESP: "Técnico senior",
        CSP_NM_AGR_CATESP: "Técnicos",
      },
    ];
  }
  if (statement.includes("FROM M4SCO_H_HR_WLOC")) return [];
  if (statement.includes("STD_PERSON")) {
    return [
      {
        STD_ID_HR: "1023",
        STD_DT_END: day("4000-01-01"),
        SSP_FEC_ANTIGUEDAD: day("2004-03-23"),
        STD_N_FIRST_NAME: "Ana",
        STD_N_FAM_NAME_1: "Pérez",
        STD_N_MAIDEN_NAME: "",
        STD_SSN: "00000000T",
        GENDER: "Mujer",
      },
    ];
  }
  throw new Error(`Consulta inesperada: ${statement.slice(0, 80)}`);
};

describe("loadRegistroFromPeopleNet", () => {
  beforeEach(() => {
    mocks.runPortalSelect.mockReset();
    mocks.runPortalSelect.mockImplementation(async (statement: string) => rowsFor(statement));
  });

  it("lee el registro con SELECT, columnas validadas y matrículas como parámetros", async () => {
    const result = await loadRegistroFromPeopleNet({
      organization: "CYC",
      from: "2025-01-01",
      to: "2025-12-31",
      employeeIds: ["1023"],
    });

    const calls = mocks.runPortalSelect.mock.calls as [string, Record<string, PortalSqlParam>?][];
    for (const [statement, params] of calls) {
      expect(() => assertReadOnlySql(statement)).not.toThrow();
      expect(statement).not.toContain("'1023'");
      if (statement.includes("@employee0"))
        expect(params?.employee0).toMatchObject({ value: "1023" });
      if (statement.includes("@organization"))
        expect(params?.organization).toMatchObject({ value: "CYC" });
    }
    // La columna inexistente nunca se interpola en una consulta.
    expect(calls.some(([statement]) => statement.includes("NO_EXISTE"))).toBe(false);

    const [employee] = result.records;
    expect(employee).toMatchObject({
      employeeNumber: "1023",
      workerName: "Ana Pérez",
      sex: "Mujer",
      category: "Técnico senior",
      personalCategoryGroup: "Técnicos",
      seniorityDate: "2004-03-23",
    });
    expect(employee?.concepts.map((concept) => [concept.code, concept.amount])).toEqual([
      ["SSP_SAL_BASE", 21000],
      ["SSP_B60_PREST_ENF_6075", 120.5],
    ]);
    expect(employee?.periodComplete.salary).toBe(21120.5);
    // La regla de la casilla 11 (real sin norma) también cuenta: «Salario IT».
    expect(employee?.nonNormalized.salaryIt).toBe(21120.5);
    expect(result.warnings).toContain(
      "La columna NO_EXISTE del item SSP_SIN_COLUMNA no existe en SCO_AC_HR_PERIOD.",
    );
    expect(result.warnings).toContain(
      "El LN4 de estas normas ha cambiado en PeopleNet y se aplica la fórmula conocida: TOT_2.",
    );
    // Las horas solo se leen del alta y solo si existen sus columnas.
    const periodQuery =
      calls.find(([statement]) => statement.includes("JOIN M4CSP_AC_HR_PERIOD B"))?.[0] ?? "";
    expect(periodQuery).toContain("[H_SSP_COEF_JORNADA]");
    expect(periodQuery).not.toContain("SSP_HORAS_REALES_EQ");
    expect(calls.some(([statement]) => statement.includes("CYC_APORTACION_DEFINIDA"))).toBe(false);
  });
});
