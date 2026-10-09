import { beforeEach, describe, expect, it, vi } from "vitest";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { exportPayrollReportToXlsx } from "@/lib/payroll-reports/export-xlsx";
import { sampleRunDetail } from "@/lib/payroll-reports/payroll-report.fixture";
import { getPayrollReportRun } from "@/lib/peoplenet/payroll-reports";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/peoplenet/payroll-reports", () => ({ getPayrollReportRun: vi.fn() }));
vi.mock("@/lib/payroll-reports/export-xlsx", () => ({
  exportPayrollReportToXlsx: vi.fn(),
  payrollReportFileName: () => "Normal_Inf 0001_20261091154.xlsx",
}));

const key = {
  reportId: "01",
  runAt: "2026-10-06T10:49:34.000Z",
  accruedOn: "2026-09-25",
  payFrequency: "004",
};

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/reports/payroll-results/export", {
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
    society: "COLL",
    companyId: "company-coll",
    jSessionId: "session",
  });
  vi.mocked(getPayrollReportRun).mockResolvedValue(sampleRunDetail);
  vi.mocked(exportPayrollReportToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/reports/payroll-results/export", () => {
  it("rejects requests without a session", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);

    const response = await post(key);

    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(getPayrollReportRun).not.toHaveBeenCalled();
  });

  it("rejects an invalid run key without reading PeopleNet", async () => {
    const response = await post({ ...key, reportId: "01' OR 1=1" });

    expect(response.status).toBe(400);
    expect(getPayrollReportRun).not.toHaveBeenCalled();
  });

  it("reads the run again with the session society and returns the workbook", async () => {
    const response = await post({ ...key, organization: "CYC" });

    expect(response.status).toBe(200);
    expect(getPayrollReportRun).toHaveBeenCalledWith("COLL", key);
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="Normal_Inf 0001_20261091154.xlsx"',
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("answers 404 for runs without data", async () => {
    vi.mocked(getPayrollReportRun).mockResolvedValueOnce({ ...sampleRunDetail, rows: [] });

    const response = await post(key);

    expect(response.status).toBe(404);
    expect(exportPayrollReportToXlsx).not.toHaveBeenCalled();
  });

  it("hides unexpected PeopleNet errors", async () => {
    vi.mocked(getPayrollReportRun).mockRejectedValueOnce(new Error("connection details"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const response = await post(key);
    const body: unknown = await response.json();

    expect(response.status).toBe(500);
    expect(JSON.stringify(body)).not.toContain("connection details");
    spy.mockRestore();
  });
});
