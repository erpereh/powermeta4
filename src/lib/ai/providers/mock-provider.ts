import "server-only";

import type { ChatMessage, ChatProvider } from "@/lib/ai/chat-provider";
import type { EmbeddingProvider } from "@/lib/ai/embedding-provider";

/**
 * Test-only provider implementations. They exist so the RAG pipeline and
 * the chat route can be exercised end-to-end (retrieval -> prompt ->
 * provider) without ever making a real network call, and so a future
 * provider swap can be proven ("the rest of the app does not know which
 * provider it's talking to") without depending on network access in CI.
 */

export type MockChatProviderOptions = {
  respond?: (messages: readonly ChatMessage[]) => string;
  configured?: boolean;
  model?: string | null;
};

export const createMockChatProvider = (options: MockChatProviderOptions = {}): ChatProvider => {
  const respond = options.respond ?? (() => "Respuesta simulada.");
  return {
    name: "mock",
    async *streamResponse({ messages }) {
      const text = respond(messages);
      for (const chunk of text.match(/.{1,8}/g) ?? [text]) {
        yield chunk;
      }
    },
    getStatus: () => ({
      configured: options.configured ?? true,
      model: options.model ?? "mock-chat-model",
    }),
  };
};

export type MockEmbeddingProviderOptions = {
  dimensions?: number;
  configured?: boolean;
  model?: string | null;
  /** Override to control exactly which vector a given text maps to. */
  vectorFor?: (text: string) => number[];
};

/**
 * Deterministic bag-of-characters embedding: same text -> same vector,
 * textually similar strings -> similar vectors. Good enough to make
 * retrieval-service tests meaningful without a real embedding model.
 */
const deterministicVector = (text: string, dimensions: number): number[] => {
  const vector = Array.from<number>({ length: dimensions }).fill(0);
  const normalized = text.toLowerCase();
  for (let i = 0; i < normalized.length; i += 1) {
    const bucket = normalized.charCodeAt(i) % dimensions;
    vector[bucket] = (vector[bucket] ?? 0) + 1;
  }
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => value / norm);
};

export const createMockEmbeddingProvider = (
  options: MockEmbeddingProviderOptions = {},
): EmbeddingProvider => {
  const dimensions = options.dimensions ?? 32;
  const vectorFor = options.vectorFor ?? ((text: string) => deterministicVector(text, dimensions));
  return {
    name: "mock",
    embed: async (texts) => texts.map((text) => vectorFor(text)),
    getStatus: () => ({
      configured: options.configured ?? true,
      model: options.model ?? "mock-embedding-model",
      dimensions,
    }),
  };
};
