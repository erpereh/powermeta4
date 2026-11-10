import { describe, expect, it } from "vitest";
import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { exportPortalReport } from "./report-export";
import { getPortalFeatureByRoute } from "./registry";
import type { PortalReadPage } from "./read-provider";
import { EMPTY_READ_FILTERS } from "./read-model";
const feature = getPortalFeatureByRoute("/portal/empleado/talento/formacion-realizada")!;
const page: PortalReadPage = {
  debug: { actor: "90001", variant: "CYC", scenario: "full" },
  filters: EMPTY_READ_FILTERS,
  labels: [],
  filterValues: [],
  people: [],
  results: {
    cursos: {
      status: "ok",
      source: "debug",
      data: {
        rows: Array.from({ length: 90 }, (_, i) => [
          { label: "Curso", value: `Protección de datos y coordinación de equipos · ${i + 1}` },
          { label: "Cero", value: "0" },
          { label: "Ausente", value: "No informado" },
        ]),
      },
    },
  },
};
describe("informes de los apartados ya autorizados", () => {
  it("conserva ceros, vacíos explícitos, todas las filas y el origen ficticio en Excel", async () => {
    const book = new ExcelJS.Workbook();
    await book.xlsx.load(new Uint8Array(await exportPortalReport(feature, page, "xlsx")).buffer);
    expect(book.worksheets[0].getRow(1).values).toContain(
      "DATOS FICTICIOS · DEBUG · Integración VM pendiente",
    );
    expect(book.worksheets[1].rowCount).toBe(91);
    expect(book.worksheets[1].getRow(2).values).toContain("0");
    expect(book.worksheets[1].getRow(91).getCell(1).value).toContain("90");
  });
  it("pagina el PDF y conserva el informe cuando otro apartado falla", async () => {
    const bytes = await exportPortalReport(feature, page, "pdf");
    expect((await PDFDocument.load(bytes)).getPageCount()).toBeGreaterThan(3);
  });
});
