import { describe, expect, it } from "vitest";

import { cleanRepeatedBoilerplate } from "./pdf-cleaning";
import type { PdfPage } from "./pdf-extraction";

// Fixture shaped after the real footer pattern found in the sample manuals
// (data extracted from an HTML-to-PDF export): the page counter and the
// document title run together with no separator, followed by a
// generation-date + source-path line, both repeated on every page.
const withRealisticFooter = (pageNumber: number, total: number, body: string): PdfPage => ({
  pageNumber,
  text: `${body}\nPage ${pageNumber} of ${total}Mis Consultas\n07/09/2026file:///C:/Users/local_sperezb7/Temp/1/~hhAC13.htm`,
});

describe("cleanRepeatedBoilerplate", () => {
  it("strips a repeated page-counter + title footer and a repeated generation-date footer", () => {
    const pages: PdfPage[] = [
      withRealisticFooter(1, 4, "Mis Consultas\nMis Consultas\nDesde esta opción se accede a las consultas."),
      withRealisticFooter(2, 4, "Tanto en la edición como la ejecución, puede que no se aplique el filtro."),
      withRealisticFooter(3, 4, "Si la salida elegida es de tipo carta, se preguntará si desea visualizar."),
      withRealisticFooter(4, 4, "La ventana Opciones cuenta con dos pestañas."),
    ];

    const cleaned = cleanRepeatedBoilerplate(pages);

    expect(cleaned).toHaveLength(4);
    for (const page of cleaned) {
      expect(page.text).not.toMatch(/Page \d+ of \d+/);
      expect(page.text).not.toContain("file:///");
    }
    expect(cleaned[1]?.text).toBe(
      "Tanto en la edición como la ejecución, puede que no se aplique el filtro.",
    );
    // The page-1-only duplicated title line is real (if odd) content, not a
    // repeated-across-pages footer, so it must survive.
    expect(cleaned[0]?.text).toContain("Desde esta opción se accede a las consultas.");
  });

  it("does not strip text that merely repeats in the body, only edge lines", () => {
    const pages: PdfPage[] = [
      { pageNumber: 1, text: "Advertencia: revise los datos.\nContenido único de la página uno." },
      { pageNumber: 2, text: "Advertencia: revise los datos.\nContenido único de la página dos." },
      { pageNumber: 3, text: "Advertencia: revise los datos.\nContenido único de la página tres." },
      { pageNumber: 4, text: "Contenido único de la página cuatro.\nAdvertencia: revise los datos." },
    ];

    const cleaned = cleanRepeatedBoilerplate(pages);

    // "Advertencia..." sits at the head on pages 1-3 (a genuine repeated
    // header there) and at the tail on page 4, so it is stripped from all
    // four as an edge-repeated line — but the unique body line is kept.
    expect(cleaned[0]?.text).toBe("Contenido único de la página uno.");
    expect(cleaned[3]?.text).toBe("Contenido único de la página cuatro.");
  });

  it("leaves documents too short to establish a repetition pattern untouched (just whitespace-normalized)", () => {
    const pages: PdfPage[] = [
      { pageNumber: 1, text: "Pie de página\nCuerpo de la página uno." },
      { pageNumber: 2, text: "Pie de página\nCuerpo de la página dos." },
    ];

    const cleaned = cleanRepeatedBoilerplate(pages);

    expect(cleaned[0]?.text).toContain("Pie de página");
    expect(cleaned[1]?.text).toContain("Pie de página");
  });

  it("collapses excess whitespace even when nothing is stripped", () => {
    const pages: PdfPage[] = [
      { pageNumber: 1, text: "Línea uno   con espacios.\n\n\n\nLínea dos.\t\t" },
      { pageNumber: 2, text: "Otra línea.\n\n\n\nMás texto." },
      { pageNumber: 3, text: "Texto final.\n\n\n\nY más." },
    ];

    const cleaned = cleanRepeatedBoilerplate(pages);

    expect(cleaned[0]?.text).toBe("Línea uno con espacios.\n\nLínea dos.");
  });
});
