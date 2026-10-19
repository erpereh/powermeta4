import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { extractText } from "unpdf";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

// Solo sustituye la sesión/contexto: carga debug, generadores y respuesta son reales.
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: async () => ({ authContext: { mode: "debug" } }),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/portal/context", () => ({
  getPortalContext: async () => ({ mode: "unavailable", reason: "debug" }),
}));

beforeEach(() => {
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
});
afterEach(() => vi.unstubAllEnvs());

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/portal/projections/export", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
  );

describe("descarga de proyecciones con generadores reales", () => {
  it.each([undefined, "0042"])("descarga ambos formatos para la selección %s", async (employee) => {
    const id = employee ?? "DEMO-01";
    for (const format of ["pdf", "xlsx"]) {
      const response = await post({ format, year: "2025", employee });
      expect(response.status).toBe(200);
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(response.headers.get("content-disposition")).toBe(
        `attachment; filename="Proyeccion_${id}_2025.${format}"`,
      );
      const bytes = await response.arrayBuffer();
      if (format === "pdf") {
        expect(response.headers.get("content-type")).toBe("application/pdf");
        const document = await PDFDocument.load(bytes);
        expect(document.getPageCount()).toBeGreaterThan(0);
        const { text } = await extractText(new Uint8Array(bytes), { mergePages: true });
        expect(text).toContain(id);
        expect(text).toContain("Informe de compensación total 2025");
      } else {
        expect(response.headers.get("content-type")).toContain("spreadsheetml");
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(bytes);
        expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["Resumen", "Desglose"]);
        expect(workbook.worksheets[0].getCell("A1").value).toContain("2025");
        expect(workbook.worksheets[0].getCell("A2").value).toContain(id);
      }
    }
  });

  it("rechaza ejercicios o matrículas inválidos y la muestra vacía sin generar archivos", async () => {
    expect((await post({ format: "pdf", year: "otro" })).status).toBe(400);
    expect((await post({ format: "xlsx", employee: "../otro" })).status).toBe(400);
    expect((await post({ format: "pdf", scenario: "empty" })).status).toBe(404);
  });
});
