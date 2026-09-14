import "server-only";

import type { EmbeddingProvider } from "@/lib/ai/embedding-provider";
import { httpCompatibleEmbeddingProvider, PROVIDER_NAME } from "@/lib/ai/providers/http-compatible";

export class UnsupportedEmbeddingProviderError extends Error {
  constructor(readonly provider: string) {
    super(`El proveedor de embeddings "${provider}" no está soportado.`);
    this.name = "UnsupportedEmbeddingProviderError";
  }
}

/**
 * Mirrors get-chat-provider.ts, kept separate on purpose: the embedding
 * model used to index/search the knowledge base can be swapped
 * independently of the model used to generate answers.
 */
export const getEmbeddingProvider = (): EmbeddingProvider => {
  const configured = (process.env.EMBEDDING_PROVIDER ?? PROVIDER_NAME).trim().toLowerCase();
  switch (configured) {
    case PROVIDER_NAME:
      return httpCompatibleEmbeddingProvider;
    default:
      throw new UnsupportedEmbeddingProviderError(configured);
  }
};
