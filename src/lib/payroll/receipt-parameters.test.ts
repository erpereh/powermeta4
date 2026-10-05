import { describe, expect, it } from "vitest";

import { parsePayrollReceiptParameters } from "./receipt-parameters";

const valid = {
  employeeId: " 1013 ",
  fromPaymentDate: "2026-01-25",
  toPaymentDate: "2026-04-25",
  payFilter: "revision",
  paymentType: "retroactive",
  currency: { mode: "other", currencyId: " usd " },
};

describe("parsePayrollReceiptParameters", () => {
  it("normalizes valid parameters", () => {
    expect(parsePayrollReceiptParameters(valid)).toEqual({
      ok: true,
      value: {
        employeeId: "1013",
        fromPaymentDate: "2026-01-25",
        toPaymentDate: "2026-04-25",
        payFilter: "revision",
        paymentType: "retroactive",
        currency: { mode: "other", currencyId: "USD" },
      },
    });
  });

  it.each([
    [null, "Los parámetros de la consulta no son válidos."],
    [[], "Los parámetros de la consulta no son válidos."],
    [{ ...valid, employeeId: 1013 }, "La matrícula no es válida."],
    [{ ...valid, toPaymentDate: "2026-02-30T00:00" }, "El periodo de liquidación no es válido."],
    [
      { ...valid, fromPaymentDate: "2026-05-25" },
      "La paga inicial debe ser anterior o igual a la final.",
    ],
    [{ ...valid, currency: { mode: "other" } }, "El ID de moneda no es válido."],
    [{ ...valid, paymentType: "bonus" }, "El tipo de pagas no es válido."],
    [{ ...valid, payFilter: "extras" }, "El grupo de pagas no es válido."],
  ])("rejects %j", (input, message) => {
    expect(parsePayrollReceiptParameters(input)).toEqual({ ok: false, message });
  });
});
