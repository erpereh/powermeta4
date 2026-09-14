import "server-only";

import type { EmbeddingProvider } from "@/lib/ai/embedding-provider";
import { getEmbeddingProvider } from "@/lib/ai/get-embedding-provider";
import {
  createKnowledgeRepository,
  type KnowledgeRepository,
} from "@/server/database/repositories/knowledge-repository";

import { cosineSimilarity } from "./vector-math";

export type RetrievedChunk = {
  chunkId: string;
  documentId: string;
  documentName: string;
  page: number;
  section: string | null;
  text: string;
  score: number;
};

export type RetrievalOptions = {
  topK?: number;
  minScore?: number;
  repository?: KnowledgeRepository;
  embeddingProvider?: EmbeddingProvider;
};

const DEFAULT_TOP_K = 6;
const DEFAULT_MIN_SCORE = 0.55;
const FTS_CANDIDATE_LIMIT = 200;
/** Small nudge for chunks that also matched the keyword pass - manuals are
 * full of exact codes/model names/units that a purely semantic match can
 * miss, so a keyword hit should not be overruled by a marginally higher
 * cosine score elsewhere. */
const FTS_MATCH_BONUS = 0.05;

const readEnvInt = (name: string, fallback: number): number => {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
};

const readEnvFloat = (name: string, fallback: number): number => {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

/**
 * Hybrid retrieval over the knowledge base: an embedding-based semantic
 * pass (cosine similarity, brute-force in memory - see docs for the scale
 * this is good for) combined with an FTS5 keyword pass, filtered by a
 * configurable confidence threshold. Returns [] rather than weak guesses
 * when nothing clears the bar, which is exactly the signal the chat route
 * uses to say "no encontré información suficiente" instead of guessing.
 */
export const retrieveRelevantChunks = async (
  question: string,
  options: RetrievalOptions = {},
): Promise<RetrievedChunk[]> => {
  const trimmedQuestion = question.trim();
  if (!trimmedQuestion) return [];

  const repository = options.repository ?? createKnowledgeRepository();
  const embeddingProvider = options.embeddingProvider ?? getEmbeddingProvider();
  const topK = options.topK ?? readEnvInt("KB_TOP_K", DEFAULT_TOP_K);
  const minScore = options.minScore ?? readEnvFloat("KB_MIN_SCORE", DEFAULT_MIN_SCORE);

  if (!embeddingProvider.getStatus().configured) return [];

  const allVectors = repository.getAllChunkVectors();
  if (allVectors.length === 0) return [];

  const [questionEmbedding] = await embeddingProvider.embed([trimmedQuestion], "query");
  if (!questionEmbedding) return [];

  const ftsCandidateIds = new Set(
    repository.searchFts(trimmedQuestion, FTS_CANDIDATE_LIMIT).map((hit) => hit.chunkId),
  );

  const ranked = allVectors
    .map((vector) => {
      const cosine = cosineSimilarity(questionEmbedding, vector.embedding);
      const score = ftsCandidateIds.has(vector.chunkId)
        ? Math.min(1, cosine + FTS_MATCH_BONUS)
        : cosine;
      return { chunkId: vector.chunkId, score };
    })
    .sort((a, b) => b.score - a.score);

  const top = ranked.filter((entry) => entry.score >= minScore).slice(0, topK);
  if (top.length === 0) return [];

  const details = repository.getChunksByIds(top.map((entry) => entry.chunkId));
  const detailById = new Map(details.map((detail) => [detail.chunkId, detail]));

  return top.flatMap((entry) => {
    const detail = detailById.get(entry.chunkId);
    if (!detail) return [];
    return [
      {
        chunkId: entry.chunkId,
        documentId: detail.documentId,
        documentName: detail.documentOriginalFileName,
        page: detail.page,
        section: detail.section,
        text: detail.text,
        score: entry.score,
      },
    ];
  });
};

export const getKnowledgeBaseStatus = (
  repository: KnowledgeRepository = createKnowledgeRepository(),
): { documentCount: number; chunkCount: number; lastIndexedAt: string | null } =>
  repository.getStatus();
