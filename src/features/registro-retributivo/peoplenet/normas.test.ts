import { describe, expect, it } from "vitest";

import { changedNormas, NORMAS } from "@/features/registro-retributivo/peoplenet/normas";

const args = {
  value: 300,
  coefJornada: 0.5,
  coefNormalizacion: 12,
  horasConvenioPeriodo: 1800,
  horasMesTrabajadas: 150,
  horasMesConvenio: 150,
};

describe("normas de M4SSP_IR_X_TIPO_NORMA", () => {
  it("traduce el LN4 de cada norma", () => {
    const apply = (id: string, overrides: Partial<typeof args> = {}) =>
      NORMAS[id]?.fn({ ...args, ...overrides });
    expect(apply("COEF")).toBe(3600);
    expect(apply("CONSUMO")).toBe(36000);
    expect(apply("NC_ND")).toBe(3600);
    expect(apply("NC_SD")).toBe(1800);
    expect(apply("SC_ND")).toBe(7200);
    expect(apply("SC_SD1")).toBe(3600);
    expect(apply("SC_SD2")).toBe(300);
    expect(apply("SC_SD_EX_2")).toBe(7200);
    expect(apply("SC_SD_EX_6")).toBe(1800);
    expect(apply("TOT_3")).toBe(300);
    // Las divisiones por cero devuelven 0, como el `If … = 0 Then Return(0)` del LN4.
    expect(apply("SC_SD1", { horasMesTrabajadas: 0 })).toBe(0);
    expect(apply("NC_ND", { horasMesConvenio: 0 })).toBe(0);
  });

  it("detecta un LN4 cambiado o una norma desconocida", () => {
    expect(
      changedNormas([
        {
          id: "SC_SD1",
          ln4: "'Recibimos 6 argumentos\niValorConcepto = ARG_NUM1\nIf iHorasMesTrabajadas = 0 Then Return(0)\nReturn((iValorConcepto * iHorasConvenioPeriodo) / iHorasMesTrabajadas)",
        },
        { id: "TOT", ln4: "Return(iValorConcepto * 2)" },
        { id: "NUEVA", ln4: "Return(iValorConcepto)" },
      ]),
    ).toEqual(["TOT", "NUEVA"]);
  });
});
