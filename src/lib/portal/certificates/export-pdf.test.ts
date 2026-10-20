import { PDFDict, PDFDocument, PDFName } from "pdf-lib";
import { getDocumentProxy } from "unpdf";
import { describe, expect, it } from "vitest";

import { certificateDebugData } from "./debug.fixture";
import { renderCertificatePdf } from "./export-pdf";
import type { WithholdingCertificate } from "./types";

type Placed = { text: string; x: number; y: number; size: number };

const placedText = async (bytes: Uint8Array): Promise<Placed[][]> => {
  const pdf = await getDocumentProxy(new Uint8Array(bytes));
  const pages: Placed[][] = [];
  for (let index = 1; index <= pdf.numPages; index += 1) {
    const content = await (await pdf.getPage(index)).getTextContent();
    pages.push(
      content.items.flatMap((item) =>
        "str" in item && item.str.trim()
          ? [
              {
                text: item.str,
                x: item.transform[4],
                y: item.transform[5],
                size: item.transform[0],
              },
            ]
          : [],
      ),
    );
  }
  return pages;
};

/**
 * Valores ficticios con la misma longitud que los del PDF de referencia de
 * `CYC_RP_CERT_HAB_2025`, para comparar posiciones con las del original.
 */
const certificate: WithholdingCertificate = {
  year: 2025,
  fields: {
    perceptorNif: "00000000T",
    perceptorNombre: "Ejemplo Muestra, Persona",
    pagadorNif: "A00000000",
    pagadorNombre: "Empresa de Ejemplo",
    trabajoDinerariasIntegro: 123456.78,
    trabajoDinerariasRetenciones: 12345.67,
    trabajoEspecieValoracion: 1234.56,
    trabajoEspecieIngresosEfectuados: 123.45,
    trabajoEspecieIngresosRepercutidos: 123.45,
    incapacidadDinerariasIntegro: 0,
    gastosDeducibles: 1234.56,
    lugar: "MADRID",
    ejercicio: 2025,
  },
  arrears: [{ ejercicio: 2024, integro: 1234.56, retenciones: 123.45 }],
  refunds: [],
  issuedAt: "2026-10-20",
  signer: "Firmante de Ejemplo ",
};

// Posiciones del PDF que genera el portal original (inicio de cada texto).
const ORIGINAL: readonly (readonly [page: number, text: string, x: number, y: number])[] = [
  [0, "2025", 536.567, 692.681],
  [0, "00000000T", 41.894, 761.508],
  [0, "Ejemplo Muestra, Persona", 149.157, 761.508],
  [0, "A00000000", 41.894, 720.26],
  [0, "Empresa de Ejemplo", 148.421, 720.26],
  [0, "123456,78", 429.382, 640.181],
  [0, "12345,67", 525.614, 640.181],
  [0, "1234,56", 346.823, 617.563],
  [0, "1234,56", 529.886, 471.803],
  [0, "2024", 69.476, 381.945],
  [0, "1234,56", 157.102, 381.945],
  [0, "123,45", 254.606, 381.945],
  [1, "00000000T", 44.728, 762.102],
  [1, "MADRID", 53.15, 91.878],
  [1, "20", 363.807, 91.878],
  [1, "Octubre", 394.043, 91.878],
  [1, "2026", 532.598, 91.878],
  [1, "Firmante de Ejemplo", 86.909, 60.228],
];

describe("PDF del certificado de retenciones", () => {
  it("encadena dos páginas por certificado y dibuja la firma del diseño", async () => {
    const bytes = await renderCertificatePdf([certificate, certificate]);
    const document = await PDFDocument.load(bytes);
    expect(document.getPageCount()).toBe(4);
    const images = (index: number) => {
      const resources = document.getPage(index).node.Resources();
      const xobjects = resources?.lookup(PDFName.of("XObject"), PDFDict);
      return xobjects?.keys().length ?? 0;
    };
    // Página 1: plantilla. Página 2: plantilla y firma.
    expect([images(0), images(1), images(2), images(3)]).toEqual([1, 2, 1, 2]);
  });

  it("genera dos páginas A4 con la plantilla del original", async () => {
    const pdf = await getDocumentProxy(await renderCertificatePdf([certificate]));
    expect(pdf.numPages).toBe(2);
    for (const index of [1, 2]) {
      const viewport = (await pdf.getPage(index)).getViewport({ scale: 1 });
      expect([viewport.width, viewport.height]).toEqual([595, 842]);
    }
  });

  it("pinta cada dato en la misma posición que el informe original", async () => {
    const pages = await placedText(await renderCertificatePdf([certificate]));
    for (const [page, text, x, y] of ORIGINAL) {
      const found = pages[page]?.filter((item) => item.text === text) ?? [];
      expect(
        found.some((item) => Math.abs(item.x - x) < 0.6 && Math.abs(item.y - y) < 0.1),
        `${text} en (${x}, ${y}) de la página ${page + 1}`,
      ).toBe(true);
    }
    expect(pages[1]?.find((item) => item.text === "Firmante de Ejemplo")?.size).toBe(6);
  });

  it("deja en blanco los ceros y conserva el título en ambas páginas", async () => {
    const pages = await placedText(await renderCertificatePdf([certificate]));
    expect(pages.flat().some((item) => item.text === "0,00")).toBe(false);
    for (const page of pages)
      expect(
        page.some((item) => item.text.startsWith("Certificado de retenciones e ingresos")),
      ).toBe(true);
  });

  it("genera la muestra de desarrollo de cualquier ejercicio con la misma plantilla", async () => {
    const today = new Date(2026, 9, 20);
    for (const year of [2025, 2024, 2023]) {
      const data = certificateDebugData({ status: "selected", year }, { status: "own" }, today);
      expect(data?.certificates).toHaveLength(1);
      if (!data) continue;
      const pages = await placedText(await renderCertificatePdf(data.certificates));
      expect(pages[0]?.some((item) => item.text === String(year))).toBe(true);
    }
    expect(
      certificateDebugData({ status: "selected", year: 2026 }, { status: "own" }, today),
    ).toBeNull();
  });
});
