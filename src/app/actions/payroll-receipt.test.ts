import { beforeEach, describe, expect, it, vi } from "vitest";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { getPayrollReceiptRange, PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";
import type { PayrollReceiptParameters } from "@/types/payroll-receipt";

import { getPayrollReceiptAction } from "./payroll-receipt";

vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/peoplenet/payroll-receipt", () => ({
  getPayrollReceiptRange: vi.fn(),
  PayrollReceiptError: class PayrollReceiptError extends Error {
    constructor(
      readonly code: string,
      message: string,
    ) {
      super(message);
    }
  },
}));

const parameters: PayrollReceiptParameters = {
  employeeId: " 1013 ",
  fromPaymentDate: "2026-01-25",
  toPaymentDate: "2026-04-25",
  payFilter: "ordinary",
  paymentType: "current",
  currency: { mode: "calculation" },
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(requireAuthContext).mockResolvedValue(
    {} as Awaited<ReturnType<typeof requireAuthContext>>,
  );
  vi.mocked(getMeta4OperationalContext).mockResolvedValue({
    mode: "meta4",
    username: "tester",
    society: "CYC",
    companyId: "company-cyc",
    jSessionId: "session",
  });
  vi.mocked(getPayrollReceiptRange).mockResolvedValue({ receipts: [], missing: [] });
});

describe("getPayrollReceiptAction", () => {
  it("queries the range with the society resolved on the server", async () => {
    const result = await getPayrollReceiptAction(parameters);

    expect(result).toEqual({ ok: true, receipts: [], missing: [] });
    expect(getPayrollReceiptRange).toHaveBeenCalledWith({
      organization: "CYC",
      employeeId: "1013",
      fromPaymentDate: "2026-01-25",
      toPaymentDate: "2026-04-25",
      payFilter: "ordinary",
      paymentType: "current",
      currency: { mode: "calculation" },
    });
  });

  it("normalizes another currency ID", async () => {
    await getPayrollReceiptAction({
      ...parameters,
      currency: { mode: "other", currencyId: " usd " },
    });

    expect(getPayrollReceiptRange).toHaveBeenCalledWith(
      expect.objectContaining({ currency: { mode: "other", currencyId: "USD" } }),
    );
  });

  it.each([
    [{ employeeId: "10 13" }, "La matrícula no es válida."],
    [{ fromPaymentDate: "2026-13-01" }, "El periodo de liquidación no es válido."],
    [{ toPaymentDate: "25/04/2026" }, "El periodo de liquidación no es válido."],
    [
      { fromPaymentDate: "2026-04-25", toPaymentDate: "2026-01-25" },
      "La paga inicial debe ser anterior o igual a la final.",
    ],
    [{ currency: { mode: "other", currencyId: "EU-R" } }, "El ID de moneda no es válido."],
  ] satisfies [Partial<PayrollReceiptParameters>, string][])(
    "rejects invalid parameters %# before reading PeopleNet",
    async (override, message) => {
      const result = await getPayrollReceiptAction({ ...parameters, ...override });

      expect(result).toEqual({ ok: false, message });
      expect(getMeta4OperationalContext).not.toHaveBeenCalled();
      expect(getPayrollReceiptRange).not.toHaveBeenCalled();
    },
  );

  it.each(["retroactive", "current-and-retroactive"] as const)(
    "passes the %s pay type to PeopleNet",
    async (paymentType) => {
      await getPayrollReceiptAction({ ...parameters, paymentType });

      expect(getPayrollReceiptRange).toHaveBeenCalledWith(expect.objectContaining({ paymentType }));
    },
  );

  it("returns receipt and session errors with their own message", async () => {
    vi.mocked(getPayrollReceiptRange).mockRejectedValueOnce(
      new PayrollReceiptError(
        "RANGE_TOO_LARGE",
        "El rango incluye 30 pagas; elige como máximo 24.",
      ),
    );
    expect(await getPayrollReceiptAction(parameters)).toEqual({
      ok: false,
      message: "El rango incluye 30 pagas; elige como máximo 24.",
    });

    vi.mocked(getMeta4OperationalContext).mockRejectedValueOnce(new Meta4SessionRequiredError());
    expect(await getPayrollReceiptAction(parameters)).toEqual({
      ok: false,
      message: new Meta4SessionRequiredError().message,
    });
  });

  it("hides unexpected PeopleNet errors behind a generic message", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.mocked(getPayrollReceiptRange).mockRejectedValueOnce(
      new Error("Login failed for user 'reader'"),
    );

    expect(await getPayrollReceiptAction(parameters)).toEqual({
      ok: false,
      message: "No se ha podido cargar el recibo de nómina desde PeopleNet.",
    });
    expect(JSON.stringify(log.mock.calls)).not.toContain("reader");
    log.mockRestore();
  });
});
