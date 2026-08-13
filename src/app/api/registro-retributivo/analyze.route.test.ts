import { readFileSync } from "node:fs";
import path from "node:path";

import { beforeEach, describe, expect, it, vi } from "vitest";
import * as XLSX from "xlsx";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));

import { POST as analyzePost } from "./analyze/route";
import { ANALYZE_USER_ERROR } from "@/features/registro-retributivo/server/run-analyze";

const debugSession = {
  authContext: {
    mode: "debug" as const,
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
  },
};

const meta4Session = {
  authContext: {
    mode: "meta4" as const,
    username: "usuario",
    canUseMeta4: true,
    societyCode: "IBER" as const,
  },
};

const buildRegistroFile = (): File => {
  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet([
    [
      "Empleado",
      "Empleado",
      "Puesto",
      "Puesto",
      "Total retribuciones normalizadas + variables",
      "Total retribuciones normalizadas + variables",
      "Total retribuciones normalizadas + variables",
      "Retribuciones periodo completo",
      "Retribuciones periodo completo",
      "Retribuciones periodo completo",
      "Conceptos salario",
    ],
    [
      "ID RH",
      "Sexo",
      "Puesto",
      "Puesto",
      "Salario",
      "C. Salarial",
      "Extrasalarial",
      "Salario",
      "C. Salarial",
      "Extrasalarial",
      "SAL_BASE",
    ],
    ["E001", "Mujer", "Analista", "Analista", 1000, 200, 50, 1000, 200, 50, 1000],
  ]);
  XLSX.utils.book_append_sheet(workbook, sheet, "Empleados");
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }) as Buffer;
  return new File([new Uint8Array(buffer)], "registro.xlsx", {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
};

const pdfFile = (name: string, bytes: Uint8Array = new Uint8Array([0x25, 0x50, 0x44, 0x46])): File =>
  new File([Buffer.from(bytes)], name, { type: "application/pdf" });

const analyzeRequest = (formData: FormData): Request =>
  new Request("http://localhost/api/registro-retributivo/analyze", {
    method: "POST",
    body: formData,
  });

const filledForm = (pdfCount = 1): FormData => {
  const formData = new FormData();
  formData.append("registro", buildRegistroFile());
  formData.append("tolerance", "1");
  formData.append("enableAI", "false");
  formData.append("reviewThreshold", "1");
  formData.append("incidentThreshold", "50");
  formData.append("conceptMap", "[]");
  formData.append("excludedEmployeeIds", "[]");
  for (let index = 0; index < pdfCount; index += 1) {
    formData.append("pdfs", pdfFile(`recibo-${index + 1}.pdf`));
  }
  return formData;
};

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
  mocks.getCurrentAuthContext.mockResolvedValue(debugSession);
});

describe("registro-retributivo analyze FormData", () => {
  it("does not set a manual multipart Content-Type in the client fetch", () => {
    const source = readFileSync(
      path.join(process.cwd(), "src/features/registro-retributivo/state/AppState.tsx"),
      "utf8",
    );
    expect(source).toContain('fetch("/api/registro-retributivo/analyze", { method: "POST", body: formData })');
    expect(source).not.toMatch(/registro-retributivo\/analyze[\s\S]{0,200}content-type/i);
  });

  it("parses Excel plus one PDF without a FormData TypeError", async () => {
    const response = await analyzePost(analyzeRequest(filledForm(1)));
    expect(response.status).not.toBe(500);
    const payload = (await response.json()) as { error?: string; people?: unknown[] };
    expect(payload.error ?? "").not.toMatch(/Failed to parse body as FormData/i);
    expect(Array.isArray(payload.people)).toBe(true);
  });

  it("parses Excel plus multiple PDFs", async () => {
    const response = await analyzePost(analyzeRequest(filledForm(3)));
    expect(response.status).toBeLessThan(500);
    const payload = (await response.json()) as { error?: string; people?: unknown[] };
    expect(payload.error ?? "").not.toMatch(/Failed to parse body as FormData/i);
    expect(Array.isArray(payload.people)).toBe(true);
  });

  it("parses a multipart body larger than the 10MB Proxy clone limit", async () => {
    const formData = new FormData();
    formData.append("registro", buildRegistroFile());
    formData.append("pdfs", pdfFile("grande.pdf", new Uint8Array(11 * 1024 * 1024)));
    const request = analyzeRequest(formData);
    expect(request.headers.get("content-type")).toMatch(/multipart\/form-data; boundary=/);
    const response = await analyzePost(request);
    const payload = (await response.json()) as { error?: string; people?: unknown[] };
    expect(payload.error ?? "").not.toMatch(/Failed to parse body as FormData/i);
    expect(response.status).not.toBe(401);
  });

  it("returns 400 when registro is missing", async () => {
    const formData = new FormData();
    formData.append("pdfs", pdfFile("recibo.pdf"));
    const response = await analyzePost(analyzeRequest(formData));
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      error: "Falta el Excel del Registro Retributivo.",
    });
  });

  it("returns 400 when PDFs are missing", async () => {
    const formData = new FormData();
    formData.append("registro", buildRegistroFile());
    const response = await analyzePost(analyzeRequest(formData));
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      error: "No hay PDFs de nominas para analizar.",
    });
  });

  it("returns 401 without a session and does not consume a missing body as success", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);
    const response = await analyzePost(analyzeRequest(filledForm()));
    expect(response.status).toBe(401);
    expect(mocks.deleteSessionCookie).toHaveBeenCalledOnce();
  });

  it("allows debug sessions without SOAP", async () => {
    const response = await analyzePost(analyzeRequest(filledForm()));
    expect(response.status).not.toBe(401);
  });

  it("allows Meta4 sessions to reach analyze", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(meta4Session);
    const response = await analyzePost(analyzeRequest(filledForm()));
    expect(response.status).not.toBe(401);
  });

  it("maps a truncated multipart parse failure to a product error", async () => {
    const request = {
      formData: async () => {
        throw new TypeError("Failed to parse body as FormData.");
      },
    } as unknown as Request;
    const response = await analyzePost(request);
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: ANALYZE_USER_ERROR,
      hint: "Comprueba los archivos seleccionados e inténtalo de nuevo.",
    });
  });
});
