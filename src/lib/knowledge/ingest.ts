import "server-only";

import { createHash, randomUUID } from "node:crypto";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import type { EmbeddingProvider } from "@/lib/ai/embedding-provider";
import { getEmbeddingProvider } from "@/lib/ai/get-embedding-provider";
import { resolveLocalDataPaths } from "@/server/database/paths";
import {
  createKnowledgeRepository,
  type KnowledgeChunkInput,
  type KnowledgeRepository,
} from "@/server/database/repositories/knowledge-repository";

import { chunkDocument, DEFAULT_CHUNKING_OPTIONS, type ChunkingOptions } from "./chunking";
import { cleanRepeatedBoilerplate } from "./pdf-cleaning";
import { extractPdfPages, type ExtractedPdf } from "./pdf-extraction";

const MANUALS_SUBDIR = "manuals";

export type IngestOutcome =
  | { status: "created"; fileName: string; chunkCount: number }
  | { status: "reindexed"; fileName: string; chunkCount: number }
  | { status: "skipped"; fileName: string; reason: string }
  | { status: "error"; fileName: string; message: string };

export type IngestSummary = { outcomes: IngestOutcome[] };

export type IngestOptions = {
  sourceDir: string;
  chunking?: ChunkingOptions;
  repository?: KnowledgeRepository;
  embeddingProvider?: EmbeddingProvider;
  /** Injected for tests; defaults to the real POWERMETA4_DATA_DIR/uploads. */
  uploadsDir?: string;
  /** Injected for tests, so they don't need a real parseable PDF fixture. */
  extractPdf?: (data: Uint8Array) => Promise<ExtractedPdf>;
  log?: (outcome: IngestOutcome) => void;
  prioritizePayroll?: boolean;
  lexicalOnly?: boolean;
};

/** ASCII, hyphenated, lower-case, bounded length - safe to use as a file
 * name and inside a validated `uploads/manuals/<name>` relative path. */
export const sanitizeFileName = (originalName: string): string => {
  const base = originalName.replace(/\.pdf$/i, "");
  const slug = base
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 80);
  return `${slug || "documento"}.pdf`;
};

const sha256 = (data: Uint8Array): string => createHash("sha256").update(data).digest("hex");

const listSourcePdfFiles = async (sourceDir: string): Promise<string[]> => {
  const visit = async (directory: string, relativeDirectory = ""): Promise<string[]> => {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async (entry) => {
        const relativePath = path.posix.join(relativeDirectory, entry.name);
        if (entry.isDirectory()) {
          return visit(path.join(directory, entry.name), relativePath);
        }
        return entry.isFile() && /\.pdf$/i.test(entry.name) ? [relativePath] : [];
      }),
    );
    return files.flat();
  };

  return (await visit(sourceDir)).sort((a, b) => a.localeCompare(b));
};

/**
 * Ingests every PDF in sourceDir and its subdirectories into the knowledge
 * base: unchanged files (same content hash and embedding model as last time)
 * are skipped, new files are indexed, and changed files are fully reindexed
 * (old chunks replaced). Never processes anything at question-answering time
 * - this is meant to run offline, e.g. via `npm run kb:ingest`.
 */
export const ingestManualsDirectory = async (options: IngestOptions): Promise<IngestSummary> => {
  const repository = options.repository ?? createKnowledgeRepository();
  const embeddingProvider = options.embeddingProvider ?? getEmbeddingProvider();
  const chunking = options.chunking ?? DEFAULT_CHUNKING_OPTIONS;
  const extractPdf = options.extractPdf ?? extractPdfPages;
  const uploadsDir = options.uploadsDir ?? resolveLocalDataPaths().uploadsDir;
  const manualsDir = path.join(uploadsDir, MANUALS_SUBDIR);
  await mkdir(manualsDir, { recursive: true });

  const embeddingStatus = embeddingProvider.getStatus();
  if (!options.lexicalOnly && (!embeddingStatus.configured || !embeddingStatus.model)) {
    throw new Error(
      "El proveedor de embeddings no está configurado (revisa EMBEDDING_MODEL/AI_BASE_URL/AI_API_KEY).",
    );
  }
  const embeddingModel = options.lexicalOnly ? "lexical" : (embeddingStatus.model ?? "lexical");

  const ingestOneFile = async (originalFileName: string): Promise<IngestOutcome> => {
    const sourcePath = path.join(options.sourceDir, originalFileName);
    const bytes = new Uint8Array(await readFile(sourcePath));
    const checksum = sha256(bytes);
    const sourceKey = sha256(Buffer.from(originalFileName));
    const slug = sanitizeFileName(path.posix.basename(originalFileName));
    const storedFileName = `${sourceKey.slice(0, 16)}-${checksum.slice(0, 16)}-${slug}`;
    const relativePath = `uploads/${MANUALS_SUBDIR}/${storedFileName}`;
    const existing = documentsBySource.get(originalFileName);
    const recipe = { source: originalFileName, ...chunking };
    if (
      existing &&
      existing.checksum === checksum &&
      (options.lexicalOnly || existing.embeddingModel === embeddingModel) &&
      (options.lexicalOnly ||
        !embeddingStatus.dimensions ||
        existing.embeddingDims === embeddingStatus.dimensions) &&
      existing.metadata.chunkSizeChars === chunking.chunkSizeChars &&
      existing.metadata.overlapChars === chunking.overlapChars
    ) {
      return { status: "skipped", fileName: originalFileName, reason: "sin cambios" };
    }

    const extracted = await extractPdf(bytes.slice());
    const cleanedPages = cleanRepeatedBoilerplate(extracted.pages);
    const documentChunks = chunkDocument(cleanedPages, chunking);
    if (documentChunks.length === 0) {
      throw new Error("No se extrajo texto del PDF (¿está escaneado como imagen?).");
    }

    const embeddings = options.lexicalOnly
      ? documentChunks.map(() => [])
      : await embeddingProvider.embed(
          documentChunks.map((chunk) => chunk.text),
          "document",
        );
    if (embeddings.length !== documentChunks.length) {
      throw new Error("El proveedor de embeddings devolvió un número de vectores inesperado.");
    }
    const embeddingDims = options.lexicalOnly ? 1 : (embeddings[0]?.length ?? 0);

    if (
      !options.lexicalOnly &&
      (!embeddingDims ||
        embeddings.some(
          (vector) =>
            vector.length !== embeddingDims || vector.some((value) => !Number.isFinite(value)),
        ))
    ) {
      throw new Error("El proveedor de embeddings devolvió vectores incompatibles.");
    }
    const documentInput = {
      id: existing?.id ?? randomUUID(),
      fileName: storedFileName,
      originalFileName,
      relativePath,
      checksum,
      byteSize: bytes.byteLength,
      pageCount: extracted.pageCount,
      metadata: recipe,
      embeddingModel,
      embeddingDims,
    };

    const chunkInputs: KnowledgeChunkInput[] = documentChunks.map((chunk, index) => ({
      id: randomUUID(),
      chunkIndex: chunk.chunkIndex,
      pageNumber: chunk.pageNumber,
      sectionTitle: chunk.sectionTitle,
      charStart: chunk.charStart,
      charEnd: chunk.charEnd,
      text: chunk.text,
      embedding: embeddings[index]!,
      embeddingModel,
      embeddingDims,
    }));
    const storedPath = path.join(manualsDir, storedFileName);
    if (existing?.relativePath !== relativePath) await writeFile(storedPath, bytes);
    try {
      repository.publishDocument(documentInput, chunkInputs);
    } catch (error) {
      if (existing?.relativePath !== relativePath) await rm(storedPath, { force: true });
      throw error;
    }
    if (
      existing &&
      existing.relativePath !== relativePath &&
      existing.relativePath.startsWith("uploads/manuals/") &&
      path.posix.dirname(existing.relativePath) === "uploads/manuals"
    ) {
      await rm(path.join(manualsDir, path.posix.basename(existing.relativePath)), { force: true });
    }

    return {
      status: existing ? "reindexed" : "created",
      fileName: originalFileName,
      chunkCount: documentChunks.length,
    };
  };

  const documentsBySource = new Map(
    repository
      .listDocuments()
      .map((document) => [
        typeof document.metadata.source === "string"
          ? document.metadata.source
          : document.originalFileName,
        document,
      ]),
  );
  const fileNames = await listSourcePdfFiles(options.sourceDir);
  if (options.prioritizePayroll) {
    const priority = (file: string) =>
      /Lenguaje_LN4|Elementos_de_Nómina|GestionNomina/i.test(file) ? 0 : 1;
    fileNames.sort((left, right) => priority(left) - priority(right));
  }
  const outcomes: IngestOutcome[] = [];
  for (const fileName of fileNames) {
    let quotaReached = false;
    const outcome = await ingestOneFile(fileName).catch((error: unknown): IngestOutcome => {
      quotaReached =
        error instanceof Error && "code" in error && error.code === "EMBEDDING_RATE_LIMITED";
      return {
        status: "error",
        fileName,
        message: error instanceof Error ? error.message : "Error desconocido.",
      };
    });
    outcomes.push(outcome);
    options.log?.(outcome);
    if (quotaReached) break;
  }
  return { outcomes };
};
