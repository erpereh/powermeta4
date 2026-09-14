import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { createMockEmbeddingProvider } from "@/lib/ai/providers/mock-provider";
import { runMigrations } from "@/server/database/migrations";
import {
  createKnowledgeRepository,
  type KnowledgeRepository,
} from "@/server/database/repositories/knowledge-repository";

import { retrieveRelevantChunks } from "./retrieval-service";

const databases: DatabaseSync[] = [];

const createRepository = (): KnowledgeRepository => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  databases.push(database);
  return createKnowledgeRepository(database);
};

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

const seedDocumentWithChunks = (
  repository: KnowledgeRepository,
  chunks: Array<{ id: string; text: string; embedding: number[]; page?: number }>,
) => {
  const { document } = repository.upsertDocument({
    id: "doc-1",
    fileName: "manual.pdf",
    originalFileName: "Manual de prueba.pdf",
    relativePath: "uploads/manuals/manual.pdf",
    checksum: "hash",
    byteSize: 10,
    pageCount: 1,
    metadata: {},
    embeddingModel: "test-model",
    embeddingDims: chunks[0]?.embedding.length ?? 3,
  });
  repository.replaceChunks(
    document.id,
    chunks.map((chunk, index) => ({
      id: chunk.id,
      chunkIndex: index,
      pageNumber: chunk.page ?? 1,
      sectionTitle: null,
      charStart: 0,
      charEnd: chunk.text.length,
      text: chunk.text,
      embedding: chunk.embedding,
      embeddingModel: "test-model",
      embeddingDims: chunk.embedding.length,
    })),
  );
  return document;
};

describe("retrieveRelevantChunks", () => {
  it("ranks chunks by cosine similarity to the question and returns citation metadata", async () => {
    const repository = createRepository();
    seedDocumentWithChunks(repository, [
      { id: "chunk-a", text: "Presión máxima de la válvula.", embedding: [1, 0, 0] },
      { id: "chunk-b", text: "Instalación del sensor de temperatura.", embedding: [0, 1, 0] },
      { id: "chunk-c", text: "Presión de trabajo recomendada.", embedding: [0.9, 0.1, 0] },
    ]);
    const embeddingProvider = createMockEmbeddingProvider({
      vectorFor: () => [1, 0, 0],
    });

    const results = await retrieveRelevantChunks("¿cuál es la presión máxima?", {
      repository,
      embeddingProvider,
      topK: 2,
      minScore: 0.5,
    });

    expect(results.map((r) => r.chunkId)).toEqual(["chunk-a", "chunk-c"]);
    expect(results[0]).toMatchObject({
      documentName: "Manual de prueba.pdf",
      page: 1,
      text: "Presión máxima de la válvula.",
    });
    expect(results[0]!.score).toBeGreaterThanOrEqual(results[1]!.score);
  });

  it("excludes results below the confidence threshold instead of guessing", async () => {
    const repository = createRepository();
    seedDocumentWithChunks(repository, [
      { id: "chunk-a", text: "Contenido relacionado.", embedding: [1, 0, 0] },
      { id: "chunk-b", text: "Contenido no relacionado.", embedding: [0, 1, 0] },
    ]);
    const embeddingProvider = createMockEmbeddingProvider({ vectorFor: () => [1, 0, 0] });

    const results = await retrieveRelevantChunks("pregunta", {
      repository,
      embeddingProvider,
      minScore: 0.99,
    });

    expect(results).toHaveLength(1);
    expect(results[0]!.chunkId).toBe("chunk-a");
  });

  it("returns an empty list, not a guess, when nothing clears the threshold", async () => {
    const repository = createRepository();
    seedDocumentWithChunks(repository, [
      { id: "chunk-a", text: "Contenido no relacionado en absoluto.", embedding: [0, 1, 0] },
    ]);
    const embeddingProvider = createMockEmbeddingProvider({ vectorFor: () => [1, 0, 0] });

    const results = await retrieveRelevantChunks("pregunta totalmente ajena", {
      repository,
      embeddingProvider,
      minScore: 0.5,
    });

    expect(results).toEqual([]);
  });

  it("gives a keyword (FTS) match a small bonus that can push a borderline chunk over the threshold", async () => {
    const repository = createRepository();
    // Both chunks are equidistant (cosine 0.6) from the question embedding;
    // only "codigo especial ABC123" also matches the question's keywords.
    seedDocumentWithChunks(repository, [
      { id: "chunk-keyword", text: "El codigo especial ABC123 identifica la pieza.", embedding: [0.6, 0.8, 0] },
      { id: "chunk-plain", text: "Otro contenido cualquiera sin relación textual.", embedding: [0.6, 0.8, 0] },
    ]);
    const embeddingProvider = createMockEmbeddingProvider({ vectorFor: () => [1, 0, 0] });

    const results = await retrieveRelevantChunks("codigo especial ABC123", {
      repository,
      embeddingProvider,
      minScore: 0.62,
    });

    expect(results.map((r) => r.chunkId)).toEqual(["chunk-keyword"]);
  });

  it("returns [] when the embedding provider is not configured", async () => {
    const repository = createRepository();
    seedDocumentWithChunks(repository, [{ id: "chunk-a", text: "Texto.", embedding: [1, 0, 0] }]);
    const embeddingProvider = createMockEmbeddingProvider({ configured: false });

    expect(await retrieveRelevantChunks("pregunta", { repository, embeddingProvider })).toEqual([]);
  });

  it("returns [] when the knowledge base has no chunks yet", async () => {
    const repository = createRepository();
    const embeddingProvider = createMockEmbeddingProvider();

    expect(await retrieveRelevantChunks("pregunta", { repository, embeddingProvider })).toEqual([]);
  });

  it("returns [] for a blank question without calling the embedding provider", async () => {
    const repository = createRepository();
    let embedCalls = 0;
    const embeddingProvider = createMockEmbeddingProvider();
    const originalEmbed = embeddingProvider.embed.bind(embeddingProvider);
    embeddingProvider.embed = async (...args) => {
      embedCalls += 1;
      return originalEmbed(...args);
    };

    expect(await retrieveRelevantChunks("   ", { repository, embeddingProvider })).toEqual([]);
    expect(embedCalls).toBe(0);
  });
});
