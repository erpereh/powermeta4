import "server-only";

import { setTimeout } from "node:timers/promises";

import { getEmbeddingProvider } from "@/lib/ai/get-embedding-provider";
import { EmbeddingProviderError } from "@/lib/ai/providers/http-compatible";
import { createKnowledgeRepository } from "@/server/database/repositories/knowledge-repository";

const BATCH_SIZE = 24;

export async function embedIndexedManuals(maxVectors: number, log: (message: string) => void) {
  const repository = createKnowledgeRepository();
  const provider = getEmbeddingProvider();
  const { configured, model, dimensions: configuredDimensions } = provider.getStatus();
  if (!configured || !model)
    throw new Error("Configura el proveedor de embeddings o ejecuta kb:ingest -- --lexical.");

  let dimensions = configuredDimensions;
  let indexed = 0;
  let retries = 0;

  while (indexed < maxVectors) {
    const batch = repository.getPendingEmbeddings(
      model,
      dimensions ?? 0,
      Math.min(BATCH_SIZE, maxVectors - indexed),
    );
    if (!batch.length) return { indexed, pending: false, rateLimited: false };
    let embeddings: number[][];
    try {
      embeddings = await provider.embed(
        batch.map(({ text }) => text),
        "document",
      );
    } catch (error) {
      if (!(error instanceof EmbeddingProviderError) || error.code !== "EMBEDDING_RATE_LIMITED")
        throw error;
      if (retries >= 2 || !error.retryAfterMs) return { indexed, pending: true, rateLimited: true };
      retries += 1;
      const wait = Math.min(error.retryAfterMs + 2500, 60_000);
      log(`Cuota temporal de embeddings. Reintento del lote en ${Math.ceil(wait / 1000)} s.`);
      await setTimeout(wait);
      continue;
    }

    const batchDimensions = dimensions ?? embeddings[0]?.length;
    if (
      !batchDimensions ||
      embeddings.length !== batch.length ||
      embeddings.some(
        (vector) =>
          vector.length !== batchDimensions || vector.some((value) => !Number.isFinite(value)),
      )
    ) {
      throw new Error("El proveedor devolvió vectores incompatibles.");
    }
    dimensions = batchDimensions;
    repository.setChunkEmbeddings(
      model,
      dimensions,
      batch.map(({ id }, index) => {
        const vector = embeddings[index];
        if (!vector) throw new Error("Falta un vector del lote.");
        return { id, vector };
      }),
    );
    indexed += batch.length;
    retries = 0;
    log(`  Vectores guardados: ${indexed}`);
  }
  const pending = repository.getPendingEmbeddings(model, dimensions ?? 0, 1).length > 0;
  return { indexed, pending, rateLimited: false };
}
