import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
  getMeta4OperationalContext: vi.fn(),
  runRetributivoPeopleNetAnalyze: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));
vi.mock("@/lib/meta4/operational-context", () => ({
  getMeta4OperationalContext: mocks.getMeta4OperationalContext,
}));
vi.mock("@/features/registro-retributivo/server/run-peoplenet-analyze", () => ({
  PEOPLENET_RESULT_MAX_BYTES: 2_000,
  runRetributivoPeopleNetAnalyze: mocks.runRetributivoPeopleNetAnalyze,
}));

import { POST } from "./analyze-peoplenet/route";
import { PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";

const session = { authContext: { mode: "meta4", username: "usuario", canUseMeta4: true } };

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/registro-retributivo/analyze-peoplenet", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
  );

describe("POST /api/registro-retributivo/analyze-peoplenet", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.getCurrentAuthContext.mockResolvedValue(session);
    mocks.getMeta4OperationalContext.mockResolvedValue({ society: "CYC" });
    mocks.runRetributivoPeopleNetAnalyze.mockResolvedValue({ people: [], source: "peoplenet" });
  });

  it("exige sesión", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);
    const response = await post({ from: "2025-01-01", to: "2025-12-31", tolerance: 1 });
    expect(response.status).toBe(401);
    expect(mocks.runRetributivoPeopleNetAnalyze).not.toHaveBeenCalled();
  });

  it("rechaza un periodo inválido sin consultar PeopleNet", async () => {
    const response = await post({ from: "2025-12-31", to: "2025-01-01", tolerance: 1 });
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "La fecha hasta debe ser posterior a la fecha desde.",
    });
    expect(mocks.getMeta4OperationalContext).not.toHaveBeenCalled();
  });

  it("rechaza un cuerpo que no es JSON", async () => {
    const response = await post("no-json");
    expect(response.status).toBe(400);
  });

  it("usa la sociedad de la sesión, nunca la del navegador", async () => {
    const response = await post({
      from: "2025-01-01",
      to: "2025-12-31",
      tolerance: 1,
      organization: "IBER",
      employeeIds: ["1023"],
    });
    expect(response.status).toBe(200);
    expect(mocks.runRetributivoPeopleNetAnalyze).toHaveBeenCalledWith(
      "CYC",
      expect.objectContaining({ from: "2025-01-01", to: "2025-12-31", employeeIds: ["1023"] }),
    );
  });

  it("pide acotar con matrículas un análisis que no se podría guardar", async () => {
    mocks.runRetributivoPeopleNetAnalyze.mockResolvedValueOnce({
      summary: { uniquePeople: 900 },
      people: [{ detail: "x".repeat(3_000) }],
    });
    const response = await post({ from: "2025-01-01", to: "2025-12-31", tolerance: 1 });
    expect(response.status).toBe(413);
    expect((await response.json()).error).toMatch(/900 personas.*matrículas/);
  });

  it("devuelve el motivo de un rango demasiado grande y oculta los errores internos", async () => {
    mocks.runRetributivoPeopleNetAnalyze.mockRejectedValueOnce(
      new PayrollReceiptError("RANGE_TOO_LARGE", "El periodo debe tener entre 1 y 366 días."),
    );
    const tooLarge = await post({ from: "2025-01-01", to: "2025-12-31", tolerance: 1 });
    expect(tooLarge.status).toBe(400);

    vi.spyOn(console, "error").mockImplementation(() => undefined);
    mocks.runRetributivoPeopleNetAnalyze.mockRejectedValueOnce(
      new Error("Login failed for user 'x'"),
    );
    const failed = await post({ from: "2025-01-01", to: "2025-12-31", tolerance: 1 });
    expect(failed.status).toBe(500);
    expect(JSON.stringify(await failed.json())).not.toContain("Login failed");
  });
});
