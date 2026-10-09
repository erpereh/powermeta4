import { beforeEach, describe, expect, it, vi } from "vitest";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { getQuinquenalReport } from "@/lib/peoplenet/quinquenal";
import { exportQuinquenalToXlsx } from "@/lib/quinquenal/export-xlsx";
import { sampleQuinquenalRow } from "@/lib/quinquenal/quinquenal.fixture";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/peoplenet/quinquenal", () => ({ getQuinquenalReport: vi.fn() }));
vi.mock("@/lib/quinquenal/export-xlsx", () => ({ exportQuinquenalToXlsx: vi.fn() }));

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/reports/quinquenal/export", {
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
    society: "CYC",
    companyId: "company-cyc",
    jSessionId: "session",
  });
  vi.mocked(getQuinquenalReport).mockResolvedValue({
    generatedOn: "2026-10-09",
    currentYear: 2026,
    rows: [sampleQuinquenalRow],
  });
  vi.mocked(exportQuinquenalToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/reports/quinquenal/export", () => {
  it("rejects requests without a session", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);

    const response = await post({});

    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(getQuinquenalReport).not.toHaveBeenCalled();
  });

  it("rejects an invalid employee id without reading PeopleNet", async () => {
    const response = await post({ employeeId: "1 OR 1" });

    expect(response.status).toBe(400);
    expect(getQuinquenalReport).not.toHaveBeenCalled();
  });

  it("reads every employee again with the session society and returns the workbook", async () => {
    const response = await post({ organization: "OTRA" });

    expect(response.status).toBe(200);
    expect(getQuinquenalReport).toHaveBeenCalledWith(
      expect.objectContaining({ organization: "CYC", employeeId: undefined }),
    );
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="CONSULTA_QUINQUENAL_2026-10-09.xlsx"',
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("exports a single employee", async () => {
    const response = await post({ employeeId: "9001" });

    expect(getQuinquenalReport).toHaveBeenCalledWith(
      expect.objectContaining({ organization: "CYC", employeeId: "9001" }),
    );
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="CONSULTA_QUINQUENAL_9001_2026-10-09.xlsx"',
    );
  });

  it("answers 404 when there is nothing to export", async () => {
    vi.mocked(getQuinquenalReport).mockResolvedValueOnce({
      generatedOn: "2026-10-09",
      currentYear: 2026,
      rows: [],
    });

    const response = await post({ employeeId: "9999" });

    expect(response.status).toBe(404);
    expect(exportQuinquenalToXlsx).not.toHaveBeenCalled();
  });

  it("hides unexpected PeopleNet errors", async () => {
    vi.mocked(getQuinquenalReport).mockRejectedValueOnce(new Error("connection details"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const response = await post({});
    const body: unknown = await response.json();

    expect(response.status).toBe(500);
    expect(JSON.stringify(body)).not.toContain("connection details");
    spy.mockRestore();
  });
});
