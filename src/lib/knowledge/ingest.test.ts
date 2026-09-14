import { DatabaseSync } from "node:sqlite";
import { mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { createMockEmbeddingProvider } from "@/lib/ai/providers/mock-provider";
import { runMigrations } from "@/server/database/migrations";
import { createKnowledgeRepository } from "@/server/database/repositories/knowledge-repository";
import type { ExtractedPdf } from "@/lib/knowledge/pdf-extraction";

import { ingestManualsDirectory, sanitizeFileName } from "./ingest";

const decoder = new TextDecoder();

// The real PDF parser is injected out in tests: the fixture "PDF" bytes are
// just the page text UTF-8 encoded, so tests can control extracted content
// directly and cheaply, without needing a real parseable PDF binary.
const fakeExtractPdf = async (data: Uint8Array): Promise<ExtractedPdf> => ({
  pageCount: 1,
  pages: [{ pageNumber: 1, text: decoder.decode(data) }],
});

let sourceDir: string;
let uploadsDir: string;
const databases: DatabaseSync[] = [];

const createRepository = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  databases.push(database);
  return createKnowledgeRepository(database);
};

beforeEach(async () => {
  sourceDir = await mkdtemp(path.join(tmpdir(), "powermeta4-kb-source-"));
  uploadsDir = await mkdtemp(path.join(tmpdir(), "powermeta4-kb-uploads-"));
});

afterEach(async () => {
  while (databases.length > 0) databases.pop()?.close();
  await rm(sourceDir, { recursive: true, force: true });
  await rm(uploadsDir, { recursive: true, force: true });
});

describe("sanitizeFileName", () => {
  it("produces an ascii, hyphenated, lower-case name from an accented Spanish title", () => {
    expect(sanitizeFileName("Metodología de manejo de datos virtuales.pdf")).toBe(
      "metodologia-de-manejo-de-datos-virtuales.pdf",
    );
  });

  it("falls back to a generic name when nothing alphanumeric survives", () => {
    expect(sanitizeFileName("____.pdf")).toBe("documento.pdf");
  });
});

describe("ingestManualsDirectory", () => {
  it("indexes a new PDF: extracts, chunks, embeds, stores, and copies it into managed uploads", async () => {
    await writeFile(
      path.join(sourceDir, "Manual de prueba.pdf"),
      "La presión máxima de la válvula X es de 16 bar.\nInstale el sensor en el panel frontal.",
    );
    const repository = createRepository();

    const summary = await ingestManualsDirectory({
      sourceDir,
      uploadsDir,
      repository,
      embeddingProvider: createMockEmbeddingProvider({ dimensions: 16 }),
      extractPdf: fakeExtractPdf,
      chunking: { chunkSizeChars: 1000, overlapChars: 20 },
    });

    expect(summary.outcomes).toEqual([
      { status: "created", fileName: "Manual de prueba.pdf", chunkCount: expect.any(Number) },
    ]);

    const documents = repository.listDocuments();
    expect(documents).toHaveLength(1);
    expect(documents[0]).toMatchObject({
      originalFileName: "Manual de prueba.pdf",
      fileName: "manual-de-prueba.pdf",
      relativePath: "uploads/manuals/manual-de-prueba.pdf",
      version: 1,
      embeddingDims: 16,
    });

    expect(repository.getAllChunkVectors().length).toBeGreaterThan(0);

    const copiedFiles = await readdir(path.join(uploadsDir, "manuals"));
    expect(copiedFiles).toEqual(["manual-de-prueba.pdf"]);
    const copiedContent = await readFile(path.join(uploadsDir, "manuals", "manual-de-prueba.pdf"), "utf8");
    expect(copiedContent).toContain("presión máxima de la válvula X");
  });

  it("skips a file whose content and embedding model have not changed", async () => {
    const filePath = path.join(sourceDir, "manual.pdf");
    await writeFile(filePath, "Contenido estable del manual.");
    const repository = createRepository();
    const runOptions = {
      sourceDir,
      uploadsDir,
      repository,
      embeddingProvider: createMockEmbeddingProvider(),
      extractPdf: fakeExtractPdf,
    };

    const first = await ingestManualsDirectory(runOptions);
    expect(first.outcomes[0]?.status).toBe("created");

    const second = await ingestManualsDirectory(runOptions);
    expect(second.outcomes).toEqual([
      { status: "skipped", fileName: "manual.pdf", reason: "sin cambios" },
    ]);
  });

  it("reindexes a file whose content changed, replacing (not duplicating) its chunks", async () => {
    const filePath = path.join(sourceDir, "manual.pdf");
    await writeFile(filePath, "Versión uno del contenido.");
    const repository = createRepository();
    const runOptions = {
      sourceDir,
      uploadsDir,
      repository,
      embeddingProvider: createMockEmbeddingProvider(),
      extractPdf: fakeExtractPdf,
    };

    await ingestManualsDirectory(runOptions);
    const firstDocumentId = repository.listDocuments()[0]!.id;

    await writeFile(filePath, "Versión dos, completamente distinta y más larga del contenido.");
    const second = await ingestManualsDirectory(runOptions);

    expect(second.outcomes[0]).toMatchObject({ status: "reindexed", fileName: "manual.pdf" });
    const documents = repository.listDocuments();
    expect(documents).toHaveLength(1);
    expect(documents[0]!.id).toBe(firstDocumentId);
    expect(documents[0]!.version).toBe(2);

    const vectors = repository.getAllChunkVectors();
    expect(vectors.every((v) => v.documentId === firstDocumentId)).toBe(true);
    const chunkDetails = repository.getChunksByIds(vectors.map((v) => v.chunkId));
    expect(chunkDetails.every((c) => c.text.includes("Versión dos"))).toBe(true);
  });

  it("does not fail the whole batch when one file fails to extract", async () => {
    await writeFile(path.join(sourceDir, "vacio.pdf"), "");
    await writeFile(path.join(sourceDir, "bueno.pdf"), "Contenido con texto real.");
    const repository = createRepository();

    const summary = await ingestManualsDirectory({
      sourceDir,
      uploadsDir,
      repository,
      embeddingProvider: createMockEmbeddingProvider(),
      extractPdf: async (data) => ({
        pageCount: 1,
        pages: [{ pageNumber: 1, text: decoder.decode(data) }],
      }),
    });

    const byFile = Object.fromEntries(summary.outcomes.map((o) => [o.fileName, o.status]));
    expect(byFile["vacio.pdf"]).toBe("error");
    expect(byFile["bueno.pdf"]).toBe("created");
    expect(repository.listDocuments()).toHaveLength(1);
  });

  it("throws before touching anything when the embedding provider is not configured", async () => {
    await writeFile(path.join(sourceDir, "manual.pdf"), "Contenido.");
    const repository = createRepository();

    await expect(
      ingestManualsDirectory({
        sourceDir,
        uploadsDir,
        repository,
        embeddingProvider: createMockEmbeddingProvider({ configured: false, model: null }),
        extractPdf: fakeExtractPdf,
      }),
    ).rejects.toThrow(/no está configurado/);

    expect(repository.listDocuments()).toHaveLength(0);
  });
});
