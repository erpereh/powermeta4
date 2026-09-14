import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { runMigrations } from "@/server/database/migrations";
import { createKnowledgeRepository } from "./knowledge-repository";

const databases: DatabaseSync[] = [];

const createRepository = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  databases.push(database);
  return { database, repository: createKnowledgeRepository(database) };
};

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

const baseDocumentInput = {
  id: "doc-1",
  fileName: "manual-1.pdf",
  originalFileName: "Manual 1.pdf",
  relativePath: "uploads/manuals/manual-1.pdf",
  checksum: "hash-a",
  byteSize: 1024,
  pageCount: 3,
  metadata: { source: "test" },
  embeddingModel: "test-embedding-model",
  embeddingDims: 4,
};

describe("knowledge repository", () => {
  it("creates a document on first upsert and reindexes (bumping version) on the next", () => {
    const { repository } = createRepository();

    const first = repository.upsertDocument(baseDocumentInput);
    expect(first.created).toBe(true);
    expect(first.document.version).toBe(1);
    expect(first.document.metadata).toEqual({ source: "test" });

    const second = repository.upsertDocument({ ...baseDocumentInput, checksum: "hash-b" });
    expect(second.created).toBe(false);
    expect(second.document.id).toBe(first.document.id);
    expect(second.document.version).toBe(2);
    expect(second.document.checksum).toBe("hash-b");

    expect(repository.listDocuments()).toHaveLength(1);
  });

  it("replaces chunks for a document and keeps the FTS index in sync", () => {
    const { repository } = createRepository();
    const { document } = repository.upsertDocument(baseDocumentInput);

    repository.replaceChunks(document.id, [
      {
        id: "chunk-1",
        chunkIndex: 0,
        pageNumber: 1,
        sectionTitle: "Introducción",
        charStart: 0,
        charEnd: 40,
        text: "La presion maxima de la valvula X es 16 bar.",
        embedding: [1, 0, 0, 0],
        embeddingModel: "test-embedding-model",
        embeddingDims: 4,
      },
      {
        id: "chunk-2",
        chunkIndex: 1,
        pageNumber: 2,
        sectionTitle: null,
        charStart: 40,
        charEnd: 80,
        text: "El sensor de temperatura se instala en el panel frontal.",
        embedding: [0, 1, 0, 0],
        embeddingModel: "test-embedding-model",
        embeddingDims: 4,
      },
    ]);

    const vectors = repository.getAllChunkVectors();
    expect(vectors).toHaveLength(2);
    expect(Array.from(vectors.find((v) => v.chunkId === "chunk-1")!.embedding)).toEqual([1, 0, 0, 0]);

    const ftsHits = repository.searchFts("valvula presion", 10);
    expect(ftsHits.some((hit) => hit.chunkId === "chunk-1")).toBe(true);

    const details = repository.getChunksByIds(["chunk-1"]);
    expect(details).toHaveLength(1);
    expect(details[0]).toMatchObject({
      chunkId: "chunk-1",
      documentOriginalFileName: "Manual 1.pdf",
      page: 1,
      section: "Introducción",
    });

    // Reindexing (replaceChunks again) must drop the old chunks, not append.
    repository.replaceChunks(document.id, [
      {
        id: "chunk-3",
        chunkIndex: 0,
        pageNumber: 1,
        sectionTitle: null,
        charStart: 0,
        charEnd: 10,
        text: "Contenido actualizado.",
        embedding: [0, 0, 1, 0],
        embeddingModel: "test-embedding-model",
        embeddingDims: 4,
      },
    ]);
    expect(repository.getAllChunkVectors()).toHaveLength(1);
    expect(repository.searchFts("valvula", 10)).toHaveLength(0);
  });

  it("cascades chunk deletion when the parent document is removed", () => {
    const { repository } = createRepository();
    const { document } = repository.upsertDocument(baseDocumentInput);
    repository.replaceChunks(document.id, [
      {
        id: "chunk-1",
        chunkIndex: 0,
        pageNumber: 1,
        sectionTitle: null,
        charStart: 0,
        charEnd: 10,
        text: "Texto de prueba.",
        embedding: [1, 1, 1, 1],
        embeddingModel: "test-embedding-model",
        embeddingDims: 4,
      },
    ]);

    repository.deleteDocument(document.id);

    expect(repository.listDocuments()).toHaveLength(0);
    expect(repository.getAllChunkVectors()).toHaveLength(0);
  });

  it("reports document and chunk counts via getStatus", () => {
    const { repository } = createRepository();
    expect(repository.getStatus()).toEqual({
      documentCount: 0,
      chunkCount: 0,
      lastIndexedAt: null,
    });

    const { document } = repository.upsertDocument(baseDocumentInput);
    repository.replaceChunks(document.id, [
      {
        id: "chunk-1",
        chunkIndex: 0,
        pageNumber: 1,
        sectionTitle: null,
        charStart: 0,
        charEnd: 5,
        text: "Hola",
        embedding: [1, 0, 0, 0],
        embeddingModel: "test-embedding-model",
        embeddingDims: 4,
      },
    ]);

    const status = repository.getStatus();
    expect(status.documentCount).toBe(1);
    expect(status.chunkCount).toBe(1);
    expect(status.lastIndexedAt).toBeTruthy();
  });

  it("never throws on an FTS5-hostile query string", () => {
    const { repository } = createRepository();
    expect(() => repository.searchFts('"unterminated OR (broken', 5)).not.toThrow();
    expect(repository.searchFts("", 5)).toEqual([]);
  });
});
