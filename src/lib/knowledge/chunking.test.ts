import { describe, expect, it } from "vitest";

import { chunkDocument, chunkPageText, detectSectionTitle } from "./chunking";
import type { PdfPage } from "./pdf-extraction";

describe("chunkPageText", () => {
  it("returns a single chunk when the page fits within the chunk size", () => {
    const text = "Primera línea.\nSegunda línea.\nTercera línea.";
    const chunks = chunkPageText(text, { chunkSizeChars: 1000, overlapChars: 50 });
    expect(chunks).toHaveLength(1);
    expect(chunks[0]?.text).toBe(text);
    expect(chunks[0]?.charStart).toBe(0);
    expect(chunks[0]?.charEnd).toBe(text.length);
  });

  it("splits a long page into multiple chunks that carry the offsets forward", () => {
    const lines = Array.from({ length: 20 }, (_, i) => `Línea número ${i} con algo de contenido.`);
    const text = lines.join("\n");

    const chunks = chunkPageText(text, { chunkSizeChars: 200, overlapChars: 40 });

    expect(chunks.length).toBeGreaterThan(1);
    // Offsets must be monotonic and point back into the original text.
    for (const chunk of chunks) {
      expect(text.slice(chunk.charStart, chunk.charEnd).trim()).toBe(chunk.text);
    }
  });

  it("preserves overlap between consecutive chunks so context is not lost at a cut", () => {
    const lines = Array.from({ length: 12 }, (_, i) => `Frase ${i}: contenido representativo de prueba.`);
    const text = lines.join("\n");

    const chunks = chunkPageText(text, { chunkSizeChars: 150, overlapChars: 60 });

    expect(chunks.length).toBeGreaterThan(1);
    for (let i = 1; i < chunks.length; i += 1) {
      const previous = chunks[i - 1]!;
      const current = chunks[i]!;
      const previousLines = new Set(previous.text.split("\n"));
      const currentLines = current.text.split("\n");
      const overlaps = currentLines.some((line) => previousLines.has(line));
      expect(overlaps).toBe(true);
    }
  });

  it("hard-splits a single line that is longer than the whole chunk budget", () => {
    const longLine = "x".repeat(500);
    const chunks = chunkPageText(longLine, { chunkSizeChars: 100, overlapChars: 10 });

    expect(chunks.length).toBeGreaterThanOrEqual(5);
    expect(chunks.map((c) => c.text).join("")).toBe(longLine);
  });

  it("returns no chunks for blank input", () => {
    expect(chunkPageText("   \n\n  ", { chunkSizeChars: 100, overlapChars: 10 })).toEqual([]);
  });
});

describe("detectSectionTitle", () => {
  it("picks a short, unpunctuated first line as the section title", () => {
    expect(detectSectionTitle("Mis Consultas\nDesde esta opción se accede...")).toBe("Mis Consultas");
  });

  it("returns null when the first line looks like a full sentence", () => {
    expect(
      detectSectionTitle("Desde esta opción se accede a las consultas del usuario con permisos."),
    ).toBeNull();
  });

  it("returns null when the first line is too long", () => {
    expect(detectSectionTitle(`${"palabra ".repeat(20)}\nresto`)).toBeNull();
  });

  it("returns null for blank text", () => {
    expect(detectSectionTitle("   \n  ")).toBeNull();
  });
});

describe("chunkDocument", () => {
  it("never lets a chunk span two pages, and assigns a document-wide increasing chunkIndex", () => {
    const pages: PdfPage[] = [
      { pageNumber: 1, text: "Sección Uno\nContenido de la página uno." },
      { pageNumber: 2, text: "Sección Dos\nContenido de la página dos." },
    ];

    const chunks = chunkDocument(pages, { chunkSizeChars: 1000, overlapChars: 20 });

    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toMatchObject({ chunkIndex: 0, pageNumber: 1, sectionTitle: "Sección Uno" });
    expect(chunks[1]).toMatchObject({ chunkIndex: 1, pageNumber: 2, sectionTitle: "Sección Dos" });
  });

  it("assigns increasing chunkIndex across multiple chunks within the same page", () => {
    const longBody = Array.from({ length: 10 }, (_, i) => `Línea ${i} con contenido de relleno.`).join(
      "\n",
    );
    const pages: PdfPage[] = [{ pageNumber: 1, text: longBody }];

    const chunks = chunkDocument(pages, { chunkSizeChars: 120, overlapChars: 20 });

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.every((chunk) => chunk.pageNumber === 1)).toBe(true);
    expect(chunks.map((chunk) => chunk.chunkIndex)).toEqual(chunks.map((_, i) => i));
  });
});
