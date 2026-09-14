import "server-only";

/**
 * Provider-agnostic embedding abstraction, deliberately separate from
 * ChatProvider: the embedding model used to index/search the knowledge base
 * does not have to be the same as the model used to generate answers, and
 * swapping one should never require touching the other.
 */

export type EmbeddingTaskType = "document" | "query";

export type EmbeddingStatus = {
  configured: boolean;
  model: string | null;
  dimensions: number | null;
};

export interface EmbeddingProvider {
  readonly name: string;
  /** Order-preserving: result[i] is the embedding for texts[i]. */
  embed(texts: readonly string[], taskType: EmbeddingTaskType): Promise<number[][]>;
  getStatus(): EmbeddingStatus;
}
