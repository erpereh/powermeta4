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
  documentVersion?: number;
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
  signal?: AbortSignal;
};

const FTS_LIMIT = 60;
const STOP_WORDS = new Set(
  "para por con sin del los las una uno unos unas puede como cual cuales cuando donde quien sobre entre que quiero explica puedes hacer puedo dime necesito saber peoplenet meta4 app directamente adjunto adjunta adjuntos adjuntas archivo archivos este esta estos estas extrae dame indica muestra ejemplo convierte elaborar".split(
    " ",
  ),
);
const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
const words = (value: string) => normalize(value).match(/[\p{L}\p{N}]+/gu) ?? [];
const exactCodes = (value: string) => [
  ...new Set(
    [
      ...(value.match(/\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b|\b[A-Z]{2,}\d[A-Z0-9]*\b/gi) ?? []),
      ...(value.match(/\b[A-Z]{2,15}\b/g) ?? []),
    ]
      .map(normalize)
      .filter((code) => code !== "ln4" && !STOP_WORDS.has(code)),
  ),
];
const keywords = (value: string) => [
  ...new Set(words(value).filter((word) => word.length >= 3 && !STOP_WORDS.has(word))),
];

export const buildRetrievalQuestion = (question: string, previousQuestion?: string): string => {
  const latest = question.trim().slice(0, 1200);
  if (!latest || !previousQuestion?.trim()) return latest;
  const needsContext =
    /^(y\b|en la app\b|en ese caso\b|eso\b)/i.test(latest) ||
    (keywords(latest).length <= 2 &&
      /\b(eso|ese|esa|ahi|tambien|directamente)\b/.test(normalize(latest)));
  return needsContext ? `${previousQuestion.trim().slice(0, 700)}\n${latest}` : latest;
};

export const retrieveRelevantChunks = async (
  question: string,
  options: RetrievalOptions = {},
): Promise<RetrievedChunk[]> => {
  const trimmedQuestion = question.trim();
  if (!trimmedQuestion) return [];

  const repository = options.repository ?? createKnowledgeRepository();
  const embeddingProvider = options.embeddingProvider ?? getEmbeddingProvider();
  const topK = Math.min(
    12,
    Math.max(1, Math.floor(options.topK ?? (Number(process.env.KB_TOP_K) || 6))),
  );
  const threshold = options.minScore ?? Number(process.env.KB_MIN_SCORE?.trim() || "0.55");
  const minScore =
    Number.isFinite(threshold) && threshold >= 0 && threshold <= 1 ? threshold : 0.55;

  const terms = keywords(trimmedQuestion).slice(0, 24);
  const aboutLn4 = terms.includes("ln4");
  const codes = exactCodes(trimmedQuestion).slice(0, 12);
  const fts = repository.searchFts(terms.join(" "), FTS_LIMIT);
  const exactHits = codes.length ? repository.searchFts(codes.join(" "), FTS_LIMIT, true) : [];
  const ftsIds = [...new Set([...exactHits, ...fts].map((hit) => hit.chunkId))];
  const ftsRank = new Map(ftsIds.map((id, index) => [id, index]));
  const status = embeddingProvider.getStatus();
  const semantic = new Map<string, number>();

  if (status.configured && status.model && repository.hasVectors(status.model)) {
    const timeout = AbortSignal.timeout(5000);
    const signal = options.signal ? AbortSignal.any([timeout, options.signal]) : timeout;
    try {
      const [query] = await embeddingProvider.embed([trimmedQuestion], "query", signal);
      if (query?.length) {
        for (const vector of repository.getAllChunkVectors(status.model, query.length)) {
          const score = cosineSimilarity(query, vector.embedding);
          if (score >= minScore) semantic.set(vector.chunkId, score);
        }
      }
    } catch {
      options.signal?.throwIfAborted();
    }
  }

  const semanticIds = [...semantic]
    .sort((left, right) => right[1] - left[1])
    .slice(0, Math.max(30, topK * 6))
    .map(([id]) => id);
  const details = repository.getChunksByIds([...new Set([...semanticIds, ...ftsIds])]);
  const ranked = details.flatMap((detail) => {
    const semanticScore = semantic.get(detail.chunkId);
    const index = ftsRank.get(detail.chunkId);
    const contentWords = new Set(words(detail.text));
    const fullTokens = new Set(normalize(detail.text).match(/[\p{L}\p{N}_]+/gu) ?? []);
    const matchedCodes = codes.filter((code) => fullTokens.has(code)).length;
    const shared = terms.filter((term) => contentWords.has(term)).length;
    const ln4Manual = aboutLn4 && /lenguaje.ln4/i.test(detail.documentFileName);
    const sharedSpecific = terms.filter((term) => term !== "ln4" && contentWords.has(term)).length;
    const lexical =
      index !== undefined &&
      (shared >= Math.max(2, Math.ceil(terms.length * 0.65)) ||
        (ln4Manual && sharedSpecific >= 2 && index < 30));
    if (semanticScore === undefined && !matchedCodes && !lexical) return [];
    const bonus = index !== undefined && shared >= 2 ? 0.08 / (1 + index / 8) : 0;
    const domainBonus = ln4Manual && sharedSpecific > 0 ? 0.1 : 0;
    const semanticRank = semanticScore ?? 0;
    const score = matchedCodes
      ? 1 + (0.16 * matchedCodes) / codes.length
      : lexical
        ? 0.64 + (0.12 * shared) / terms.length + 0.06 * semanticRank
        : 0.3 + 0.3 * semanticRank;
    return [
      {
        chunkId: detail.chunkId,
        documentId: detail.documentId,
        documentName: detail.documentOriginalFileName,
        documentVersion: detail.documentVersion,
        page: detail.page,
        section: detail.section,
        text: detail.text,
        score: score + bonus + domainBonus,
      },
    ];
  });

  const selected: RetrievedChunk[] = [];
  for (const chunk of ranked.sort(
    (left, right) => right.score - left.score || left.chunkId.localeCompare(right.chunkId),
  )) {
    const samePage = selected.filter(
      (entry) => entry.documentId === chunk.documentId && entry.page === chunk.page,
    );
    if (samePage.length >= 2 || selected.some((entry) => entry.text.trim() === chunk.text.trim()))
      continue;
    selected.push(chunk);
    if (selected.length >= topK) break;
  }
  return selected;
};

export const getKnowledgeBaseStatus = (
  repository: KnowledgeRepository = createKnowledgeRepository(),
): { documentCount: number; chunkCount: number; lastIndexedAt: string | null } =>
  repository.getStatus();
