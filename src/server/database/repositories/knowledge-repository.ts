import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";
import { bufferToVector, vectorToBuffer } from "@/lib/knowledge/vector-math";

export type KnowledgeDocument = {
  id: string;
  fileName: string;
  originalFileName: string;
  relativePath: string;
  checksum: string;
  byteSize: number;
  pageCount: number;
  version: number;
  metadata: Record<string, unknown>;
  embeddingModel: string;
  embeddingDims: number;
  indexedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type KnowledgeChunkInput = {
  id: string;
  chunkIndex: number;
  pageNumber: number;
  sectionTitle: string | null;
  charStart: number;
  charEnd: number;
  text: string;
  embedding: readonly number[];
  embeddingModel: string;
  embeddingDims: number;
};

export type KnowledgeChunkVector = {
  chunkId: string;
  documentId: string;
  embedding: Float32Array;
};

export type KnowledgeChunkDetail = {
  chunkId: string;
  documentId: string;
  documentFileName: string;
  documentOriginalFileName: string;
  page: number;
  section: string | null;
  text: string;
};

export type FtsCandidate = { chunkId: string; bm25: number };

type Row = Record<string, unknown>;

const stringValue = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;
const numberValue = (value: unknown, fallback = 0): number =>
  typeof value === "number" ? value : Number(value ?? fallback);
const nullableString = (value: unknown): string | null =>
  typeof value === "string" ? value : null;

const parseMetadata = (value: unknown): Record<string, unknown> => {
  if (typeof value !== "string") return {};
  try {
    const parsed = JSON.parse(value) as unknown;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
};

const mapDocument = (row: Row): KnowledgeDocument => ({
  id: stringValue(row.id),
  fileName: stringValue(row.file_name),
  originalFileName: stringValue(row.original_file_name),
  relativePath: stringValue(row.relative_path),
  checksum: stringValue(row.checksum),
  byteSize: numberValue(row.byte_size),
  pageCount: numberValue(row.page_count),
  version: numberValue(row.version, 1),
  metadata: parseMetadata(row.metadata_json),
  embeddingModel: stringValue(row.embedding_model),
  embeddingDims: numberValue(row.embedding_dims),
  indexedAt: stringValue(row.indexed_at),
  createdAt: stringValue(row.created_at),
  updatedAt: stringValue(row.updated_at),
});

/**
 * Escapes a free-text user query into a safe FTS5 MATCH expression: every
 * token becomes a quoted literal (so punctuation such as ':' or '-' can
 * never be parsed as FTS5 query syntax) and tokens are OR'd together so the
 * keyword pass favors recall — final ranking/filtering happens in
 * retrieval-service by combining this with the semantic (embedding) score.
 */
export const buildFtsMatchExpression = (query: string): string | null => {
  const tokens = query
    .split(/[^\p{L}\p{N}]+/u)
    .map((token) => token.trim())
    .filter((token) => token.length > 0)
    .map((token) => `"${token.replaceAll('"', '""')}"`);
  if (tokens.length === 0) return null;
  return tokens.join(" OR ");
};

export const createKnowledgeRepository = (database: DatabaseSync = getDatabase()) => {
  const findDocumentByPath = (relativePath: string): KnowledgeDocument | null => {
    const row = database
      .prepare("SELECT * FROM kb_documents WHERE relative_path = ?")
      .get(relativePath) as Row | undefined;
    return row ? mapDocument(row) : null;
  };

  const listDocuments = (): KnowledgeDocument[] =>
    (
      database
        .prepare("SELECT * FROM kb_documents ORDER BY original_file_name ASC, id ASC")
        .all() as Row[]
    ).map(mapDocument);

  const upsertDocument = (input: {
    id: string;
    fileName: string;
    originalFileName: string;
    relativePath: string;
    checksum: string;
    byteSize: number;
    pageCount: number;
    metadata: Record<string, unknown>;
    embeddingModel: string;
    embeddingDims: number;
  }): { document: KnowledgeDocument; created: boolean } =>
    withTransaction(database, () => {
      const timestamp = new Date().toISOString();
      const existing = database
        .prepare("SELECT * FROM kb_documents WHERE relative_path = ?")
        .get(input.relativePath) as Row | undefined;
      const metadataJson = JSON.stringify(input.metadata ?? {});

      if (existing) {
        const id = stringValue(existing.id);
        database
          .prepare(
            `UPDATE kb_documents SET
               file_name = ?, original_file_name = ?, checksum = ?, byte_size = ?,
               page_count = ?, version = version + 1, metadata_json = ?,
               embedding_model = ?, embedding_dims = ?, indexed_at = ?, updated_at = ?
             WHERE id = ?`,
          )
          .run(
            input.fileName,
            input.originalFileName,
            input.checksum,
            input.byteSize,
            input.pageCount,
            metadataJson,
            input.embeddingModel,
            input.embeddingDims,
            timestamp,
            timestamp,
            id,
          );
        const updated = database.prepare("SELECT * FROM kb_documents WHERE id = ?").get(id) as Row;
        return { document: mapDocument(updated), created: false };
      }

      database
        .prepare(
          `INSERT INTO kb_documents
             (id, file_name, original_file_name, relative_path, checksum, byte_size,
              page_count, version, metadata_json, embedding_model, embedding_dims,
              indexed_at, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          input.id,
          input.fileName,
          input.originalFileName,
          input.relativePath,
          input.checksum,
          input.byteSize,
          input.pageCount,
          metadataJson,
          input.embeddingModel,
          input.embeddingDims,
          timestamp,
          timestamp,
          timestamp,
        );
      const created = database
        .prepare("SELECT * FROM kb_documents WHERE id = ?")
        .get(input.id) as Row;
      return { document: mapDocument(created), created: true };
    });

  const replaceChunks = (documentId: string, chunks: readonly KnowledgeChunkInput[]): void =>
    withTransaction(database, () => {
      database.prepare("DELETE FROM kb_chunks WHERE document_id = ?").run(documentId);
      const insert = database.prepare(
        `INSERT INTO kb_chunks
           (id, document_id, chunk_index, page_number, section_title, char_start,
            char_end, text, embedding, embedding_model, embedding_dims, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      );
      const timestamp = new Date().toISOString();
      for (const chunk of chunks) {
        insert.run(
          chunk.id,
          documentId,
          chunk.chunkIndex,
          chunk.pageNumber,
          chunk.sectionTitle,
          chunk.charStart,
          chunk.charEnd,
          chunk.text,
          vectorToBuffer(chunk.embedding),
          chunk.embeddingModel,
          chunk.embeddingDims,
          timestamp,
        );
      }
    });

  const deleteDocument = (documentId: string): void =>
    withTransaction(database, () => {
      database.prepare("DELETE FROM kb_documents WHERE id = ?").run(documentId);
    });

  const getAllChunkVectors = (): KnowledgeChunkVector[] =>
    (
      database.prepare("SELECT id, document_id, embedding FROM kb_chunks").all() as Row[]
    ).map((row) => ({
      chunkId: stringValue(row.id),
      documentId: stringValue(row.document_id),
      embedding: bufferToVector(row.embedding as Uint8Array),
    }));

  const searchFts = (query: string, limit: number): FtsCandidate[] => {
    const matchExpression = buildFtsMatchExpression(query);
    if (!matchExpression) return [];
    try {
      return (
        database
          .prepare(
            "SELECT chunk_id, bm25(kb_chunks_fts) AS score FROM kb_chunks_fts WHERE kb_chunks_fts MATCH ? ORDER BY score LIMIT ?",
          )
          .all(matchExpression, limit) as Row[]
      ).map((row) => ({ chunkId: stringValue(row.chunk_id), bm25: numberValue(row.score) }));
    } catch {
      // Defensive: never let a keyword-search edge case break retrieval —
      // the semantic (embedding) pass still runs independently.
      return [];
    }
  };

  const getChunksByIds = (ids: readonly string[]): KnowledgeChunkDetail[] => {
    if (ids.length === 0) return [];
    const placeholders = ids.map(() => "?").join(", ");
    return (
      database
        .prepare(
          `SELECT kb_chunks.id AS chunk_id, kb_chunks.document_id, kb_chunks.page_number,
                  kb_chunks.section_title, kb_chunks.text,
                  kb_documents.file_name AS document_file_name,
                  kb_documents.original_file_name AS document_original_file_name
             FROM kb_chunks
             JOIN kb_documents ON kb_documents.id = kb_chunks.document_id
            WHERE kb_chunks.id IN (${placeholders})`,
        )
        .all(...ids) as Row[]
    ).map((row) => ({
      chunkId: stringValue(row.chunk_id),
      documentId: stringValue(row.document_id),
      documentFileName: stringValue(row.document_file_name),
      documentOriginalFileName: stringValue(row.document_original_file_name),
      page: numberValue(row.page_number),
      section: nullableString(row.section_title),
      text: stringValue(row.text),
    }));
  };

  const getStatus = (): { documentCount: number; chunkCount: number; lastIndexedAt: string | null } => {
    const documentCount = numberValue(
      (database.prepare("SELECT COUNT(*) AS c FROM kb_documents").get() as Row).c,
    );
    const chunkCount = numberValue(
      (database.prepare("SELECT COUNT(*) AS c FROM kb_chunks").get() as Row).c,
    );
    const lastIndexedAt = nullableString(
      (database.prepare("SELECT MAX(indexed_at) AS m FROM kb_documents").get() as Row).m,
    );
    return { documentCount, chunkCount, lastIndexedAt };
  };

  return {
    findDocumentByPath,
    listDocuments,
    upsertDocument,
    replaceChunks,
    deleteDocument,
    getAllChunkVectors,
    searchFts,
    getChunksByIds,
    getStatus,
  };
};

export type KnowledgeRepository = ReturnType<typeof createKnowledgeRepository>;
