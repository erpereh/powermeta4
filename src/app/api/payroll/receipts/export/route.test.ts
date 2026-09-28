import { beforeEach, describe, expect, it, vi } from "vitest";

import { sampleReceipt } from "@/components/tools/payroll/payroll-receipt.fixture";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { exportReceiptsToPdf } from "@/lib/payroll/receipt-export-pdf";
import { exportReceiptsToXlsx } from "@/lib/payroll/receipt-export-xlsx";
import { getPayrollReceiptRange } from "@/lib/peoplenet/payroll-receipt";
import type { PayrollReceiptEntry } from "@/types/payroll-receipt";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/peoplenet/payroll-receipt", () => ({
  getPayrollReceiptRange: vi.fn(),
  PayrollReceiptError: class PayrollReceiptError extends Error {},
}));
vi.mock("@/lib/payroll/receipt-export-pdf", () => ({ exportReceiptsToPdf: vi.fn() }));
vi.mock("@/lib/payroll/receipt-export-xlsx", () => ({ exportReceiptsToXlsx: vi.fn() }));

const entry = (id: string, paymentDate: string): PayrollReceiptEntry => ({
  id,
  paymentDate,
  payName: "Paga",
  receipt: sampleReceipt,
});

const parameters = {
  employeeId: "1013",
  fromPaymentDate: "2026-03-25",
  toPaymentDate: "2026-04-25",
  paymentType: "current",
  currency: { mode: "calculation" },
};

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/payroll/receipts/export", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
  );

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getCurrentAuthContext).mockResolvedValue(
    {} as Awaited<ReturnType<typeof getCurrentAuthContext>>,
  );
  vi.mocked(getMeta4OperationalContext).mockResolvedValue({
    mode: "meta4",
    username: "tester",
    society: "IBER",
    companyId: "company-iber",
    jSessionId: "session",
  });
  vi.mocked(getPayrollReceiptRange).mockResolvedValue({
    receipts: [entry("2026-03-25", "2026-03-25"), entry("2026-04-25", "2026-04-25")],
    missing: [],
  });
  vi.mocked(exportReceiptsToPdf).mockResolvedValue(new Uint8Array([37, 80, 68, 70]));
  vi.mocked(exportReceiptsToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/payroll/receipts/export", () => {
  it("rejects requests without a session", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);

    const response = await post({ parameters, format: "pdf" });

    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(getPayrollReceiptRange).not.toHaveBeenCalled();
  });

  it("regenerates the chosen receipt with the server society and returns a PDF", async () => {
    const response = await post({ parameters, format: "pdf", receiptIds: ["2026-04-25"] });

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/pdf");
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="nomina_1013_2026-04-25.pdf"',
    );
    expect(getPayrollReceiptRange).toHaveBeenCalledWith(
      expect.objectContaining({ organization: "IBER", employeeId: "1013" }),
    );
    expect(vi.mocked(exportReceiptsToPdf).mock.calls[0]?.[0].map((item) => item.id)).toEqual([
      "2026-04-25",
    ]);
  });

  it("exports every receipt of the range to Excel when no IDs are given", async () => {
    const response = await post({ parameters, format: "xlsx" });

    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="nominas_1013_2026-03-25_2026-04-25.xlsx"',
    );
    expect(vi.mocked(exportReceiptsToXlsx).mock.calls[0]?.[0]).toHaveLength(2);
  });

  it.each([
    [{ parameters, format: "docx" }, "El formato de descarga no es válido."],
    [
      { parameters: { ...parameters, employeeId: "10 13" }, format: "pdf" },
      "La matrícula no es válida.",
    ],
    [{ parameters, format: "pdf", receiptIds: ["../etc"] }, "Las nóminas elegidas no son válidas."],
    [{ parameters, format: "pdf", receiptIds: [] }, "Las nóminas elegidas no son válidas."],
  ])("rejects invalid input %#", async (body, message) => {
    const response = await post(body);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ ok: false, message });
    expect(getPayrollReceiptRange).not.toHaveBeenCalled();
  });

  it("returns 404 when none of the chosen receipts exist", async () => {
    const response = await post({ parameters, format: "pdf", receiptIds: ["2026-01-25"] });

    expect(response.status).toBe(404);
    expect(exportReceiptsToPdf).not.toHaveBeenCalled();
  });
});
