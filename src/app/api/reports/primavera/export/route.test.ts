import { beforeEach, describe, expect, it, vi } from "vitest";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { getPrimaveraReport } from "@/lib/peoplenet/primavera";
import { exportPrimaveraToXlsx } from "@/lib/primavera/export-xlsx";
import type { PrimaveraReport } from "@/types/primavera";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/peoplenet/primavera", () => ({ getPrimaveraReport: vi.fn() }));
vi.mock("@/lib/primavera/export-xlsx", () => ({
  exportPrimaveraToXlsx: vi.fn(),
  primaveraFileName: vi.fn(() => "Primavera_COLL_2026-10_M4PRENOMINA_20261118_0905.xlsx"),
}));

const report: PrimaveraReport = {
  society: "COLL",
  legalEntity: "COLL",
  database: "M4PRENOMINA",
  year: 2026,
  fromMonth: 10,
  toMonth: 10,
  wholeYear: false,
  months: [{ month: 10, rows: [], mismatches: 0, status: "empty" }],
};

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/reports/primavera/export", {
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
  vi.mocked(getPrimaveraReport).mockResolvedValue(report);
  vi.mocked(exportPrimaveraToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/reports/primavera/export", () => {
  it("rejects requests without a session", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);

    const response = await post({ year: 2026 });

    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(getPrimaveraReport).not.toHaveBeenCalled();
  });

  it("rejects an invalid period without reading PeopleNet", async () => {
    const response = await post({ year: 2026, fromMonth: 11, toMonth: 2 });

    expect(response.status).toBe(400);
    expect(getPrimaveraReport).not.toHaveBeenCalled();
  });

  it("reads again with the session society and returns the workbook", async () => {
    const response = await post({ year: 2026, fromMonth: 10, society: "CYC" });

    expect(response.status).toBe(200);
    expect(getPrimaveraReport).toHaveBeenCalledWith(
      "COLL",
      expect.objectContaining({ year: 2026, fromMonth: 10, toMonth: 10 }),
    );
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="Primavera_COLL_2026-10_M4PRENOMINA_20261118_0905.xlsx"',
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
});
