import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Dossier } from "@/lib/payroll-reconciliation/types";
import { DEFAULT_PARAMETERS } from "@/lib/payroll-reconciliation/types";
import { snapshot } from "@/lib/payroll-reconciliation/snapshot";
import { demoReport } from "@/lib/payroll-reconciliation/demo";
import { reconcile } from "@/lib/payroll-reconciliation/engine";

const mocks = vi.hoisted(() => ({
  auth: vi.fn(),
  context: vi.fn(),
  debug: vi.fn(),
  company: vi.fn(),
  get: vi.fn(),
  list: vi.fn(),
  save: vi.fn(),
  remove: vi.fn(),
  read: vi.fn(),
  runs: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({ getCurrentAuthContext: mocks.auth }));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: mocks.context }));
vi.mock("@/lib/auth/debug-config", () => ({ isDebugAuthEnabled: mocks.debug }));
vi.mock("@/features/registro-retributivo/server/company-scope", () => ({
  resolveRetributivoCompanyId: mocks.company,
}));
vi.mock("@/lib/peoplenet/payroll-reports", () => ({
  getPayrollReportRun: mocks.read,
  listPayrollReportRuns: mocks.runs,
}));
vi.mock("@/server/database/repositories/payroll-reconciliation-repository", () => ({
  reconciliationRepository: () => ({
    get: mocks.get,
    list: mocks.list,
    save: mocks.save,
    remove: mocks.remove,
  }),
}));
import { GET, POST, PATCH } from "./route";
import { POST as exportRoute } from "./export/route";
import { POST as previewRoute } from "./preview/route";
import { matchesProxyMatcher } from "@/proxy";

const request = (method: string, body?: unknown, extra: Record<string, string> = {}) =>
  new Request("http://localhost/api/payroll/reconciliation", {
    method,
    headers: { "content-type": "application/json", ...extra },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
const create = () => ({
  title: "Prueba",
  period: "2026-10",
  populationConfirmed: true,
  demo: true,
});
let dossier: Dossier;
beforeEach(() => {
  vi.resetAllMocks();
  mocks.auth.mockResolvedValue({ authContext: { mode: "debug" } });
  mocks.debug.mockReturnValue(true);
  mocks.company.mockReturnValue("company-a");
  const base = {
    period: "2026-10",
    current: snapshot(demoReport("2026-10"), true),
    previous: snapshot(demoReport("2026-10", true), true),
    sources: [],
    parameters: DEFAULT_PARAMETERS,
  };
  dossier = {
    ...base,
    id: "11111111-1111-4111-a111-111111111111",
    title: "Prueba",
    revision: 1,
    createdAt: "2026-10-01",
    updatedAt: "2026-10-01",
    demo: true,
    annotations: [],
    result: reconcile(base),
  };
  mocks.get.mockImplementation(() => structuredClone(dossier));
  mocks.list.mockReturnValue([]);
  mocks.save.mockImplementation((_scope, record) => record);
});
describe("reconciliation boundaries", () => {
  it("requires auth on all routes, including proxy exceptions", async () => {
    mocks.auth.mockResolvedValue(null);
    for (const handler of [POST, exportRoute, previewRoute])
      expect((await handler(request("POST", {}))).status).toBe(401);
    expect(mocks.read).not.toHaveBeenCalled();
  });
  it("gates synthetic data strictly and rejects foreign origins/context switches", async () => {
    mocks.debug.mockReturnValue(false);
    expect((await POST(request("POST", create()))).status).toBe(403);
    mocks.debug.mockReturnValue(true);
    expect((await POST(request("POST", create(), { origin: "https://other.test" }))).status).toBe(
      403,
    );
    expect(
      (await POST(request("POST", create(), { "x-powermeta4-company": "company-b" }))).status,
    ).toBe(409);
    expect(mocks.save).not.toHaveBeenCalled();
  });
  it("creates a partial saved dossier and reopens it without reading SQL", async () => {
    const created = await POST(request("POST", create()));
    expect(created.status).toBe(200);
    const body = await created.json();
    expect(body.data.result.controls).toHaveLength(16);
    expect(body.data.sources).toEqual([]);
    expect(
      (await GET(new Request(`http://localhost/api/payroll/reconciliation?id=${dossier.id}`)))
        .status,
    ).toBe(200);
    expect(mocks.read).not.toHaveBeenCalled();
    expect(mocks.context).not.toHaveBeenCalled();
  });
  it("rejects client society/results, stale revisions, and stale findings", async () => {
    expect((await POST(request("POST", { ...create(), society: "CYC" }))).status).toBe(400);
    expect(
      (
        await PATCH(
          request("PATCH", {
            id: dossier.id,
            revision: 2,
            action: "parameters",
            parameters: DEFAULT_PARAMETERS,
          }),
        )
      ).status,
    ).toBe(409);
    expect(
      (
        await PATCH(
          request("PATCH", {
            id: dossier.id,
            revision: 1,
            action: "review",
            findingId: "obsolete",
            fingerprint: "x".repeat(64),
            state: "Diferencia justificada",
            comment: "No altera importes",
          }),
        )
      ).status,
    ).toBe(409);
    expect(mocks.save).not.toHaveBeenCalled();
  });
  it("exports saved snapshots without silently updating PeopleNet", async () => {
    const response = await exportRoute(request("POST", { id: dossier.id, revision: 1 }));
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("spreadsheetml");
    expect(mocks.read).not.toHaveBeenCalled();
    expect((await exportRoute(request("POST", { id: dossier.id, revision: 2 }))).status).toBe(409);
  });
  it("uses only the server society for real report reads", async () => {
    mocks.auth.mockResolvedValue({ authContext: { mode: "meta4" } });
    mocks.context.mockResolvedValue({ companyId: "company-c", society: "CYC", username: "TEST" });
    const data = demoReport("2026-10");
    mocks.read.mockResolvedValue(data);
    const key = {
      reportId: "01_C",
      runAt: "2026-10-16T10:00:00.000Z",
      accruedOn: "2026-10-25",
      payFrequency: "001",
    };
    expect(
      (await POST(request("POST", { ...create(), demo: false, currentKey: key }))).status,
    ).toBe(200);
    expect(mocks.read).toHaveBeenCalledWith("CYC", key);
  });
  it("excludes only the three bounded reconciliation body handlers from proxy cloning", () => {
    for (const path of ["preview", "analyze", "export"])
      expect(matchesProxyMatcher(`/api/payroll/reconciliation/${path}`)).toBe(false);
    expect(matchesProxyMatcher("/api/payroll/reconciliation")).toBe(true);
    expect(matchesProxyMatcher("/api/payroll/reconciliation/anything")).toBe(true);
  });
});
