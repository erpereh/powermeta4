import "server-only";

import { getGlobalChatStatus, streamGlobalChat } from "@/lib/chat/global-chat-client";
import type { ChatProvider } from "@/lib/ai/chat-provider";
import type { EmbeddingProvider, EmbeddingStatus, EmbeddingTaskType } from "@/lib/ai/embedding-provider";

/**
 * The one provider implementation the app ships with: it speaks the
 * standard HTTP chat-completions/embeddings protocol already configured via
 * AI_BASE_URL/AI_API_KEY (see src/lib/chat/global-chat-client.ts), which
 * many services implement compatibly. Nothing here is tied to a specific
 * vendor — swapping the configured endpoint/model is a config change, not a
 * code change. A future provider (a different protocol entirely) would live
 * next to this file and be wired in via get-chat-provider.ts /
 * get-embedding-provider.ts.
 */

export const PROVIDER_NAME = "http-compatible";

export const httpCompatibleChatProvider: ChatProvider = {
  name: PROVIDER_NAME,
  streamResponse: (options) =>
    streamGlobalChat({ messages: options.messages, abortSignal: options.abortSignal }),
  getStatus: getGlobalChatStatus,
};

export class EmbeddingConfigurationError extends Error {
  readonly code = "EMBEDDING_CONFIG_UNAVAILABLE";
  constructor() {
    super("El proveedor de embeddings no está configurado.");
    this.name = "EmbeddingConfigurationError";
  }
}

export type EmbeddingErrorCode =
  | "EMBEDDING_CONFIG_UNAVAILABLE"
  | "EMBEDDING_AUTH_FAILED"
  | "EMBEDDING_MODEL_NOT_FOUND"
  | "EMBEDDING_RATE_LIMITED"
  | "EMBEDDING_NETWORK_ERROR"
  | "EMBEDDING_INVALID_RESPONSE";

const EMBEDDING_ERROR_MESSAGES: Record<EmbeddingErrorCode, string> = {
  EMBEDDING_CONFIG_UNAVAILABLE: "El proveedor de embeddings no está configurado.",
  EMBEDDING_AUTH_FAILED: "No se pudo autenticar con el proveedor de embeddings.",
  EMBEDDING_MODEL_NOT_FOUND: "El modelo de embeddings configurado no está disponible.",
  EMBEDDING_RATE_LIMITED: "El proveedor de embeddings ha limitado las solicitudes.",
  EMBEDDING_NETWORK_ERROR: "No se pudo conectar con el proveedor de embeddings.",
  EMBEDDING_INVALID_RESPONSE: "La respuesta del proveedor de embeddings no es válida.",
};

export class EmbeddingProviderError extends Error {
  constructor(readonly code: EmbeddingErrorCode) {
    super(EMBEDDING_ERROR_MESSAGES[code]);
    this.name = "EmbeddingProviderError";
  }
}

const EMBEDDINGS_PATH = "/embeddings";
const CHAT_COMPLETIONS_PATH = "/chat/completions";

const requiredSetting = (
  name: "AI_BASE_URL" | "AI_API_KEY" | "EMBEDDING_MODEL" | "EMBEDDING_BASE_URL" | "EMBEDDING_API_KEY",
): string => {
  const value = process.env[name]?.trim();
  if (!value) throw new EmbeddingConfigurationError();
  return value;
};

/** Falls back to the chat connection (AI_BASE_URL/AI_API_KEY) when no
 * embedding-specific value is set, so a single-provider setup (chat and
 * embeddings on the same service) needs zero extra configuration. Setting
 * EMBEDDING_BASE_URL/EMBEDDING_API_KEY points embeddings at a different
 * service entirely, independent of whatever the chat model uses. */
const requiredSettingWithFallback = (
  name: "EMBEDDING_BASE_URL" | "EMBEDDING_API_KEY",
  fallbackName: "AI_BASE_URL" | "AI_API_KEY",
): string => process.env[name]?.trim() || requiredSetting(fallbackName);

const resolveEmbeddingsUrl = (baseUrl: string): string => {
  let parsed: URL;
  try {
    parsed = new URL(baseUrl.trim());
  } catch {
    throw new EmbeddingConfigurationError();
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new EmbeddingConfigurationError();
  }
  parsed.hash = "";
  parsed.search = "";
  let path = parsed.pathname.replace(/\/+$/, "") || "";
  // Forgive a pasted-in chat-completions URL (an easy mistake when a
  // provider's docs show that URL prominently) by treating it as the
  // same base the chat-completions resolver would have started from.
  if (path.endsWith(CHAT_COMPLETIONS_PATH)) {
    path = path.slice(0, -CHAT_COMPLETIONS_PATH.length);
  }
  parsed.pathname = path.endsWith(EMBEDDINGS_PATH) ? path : `${path}${EMBEDDINGS_PATH}`;
  return parsed.toString();
};

const readDimensions = (): number | null => {
  const raw = process.env.EMBEDDING_DIMENSIONS?.trim();
  if (!raw) return null;
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

const readEmbeddingConfiguration = () => ({
  endpoint: resolveEmbeddingsUrl(requiredSettingWithFallback("EMBEDDING_BASE_URL", "AI_BASE_URL")),
  apiKey: requiredSettingWithFallback("EMBEDDING_API_KEY", "AI_API_KEY"),
  model: requiredSetting("EMBEDDING_MODEL"),
  dimensions: readDimensions(),
});

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const errorForStatus = (status: number): EmbeddingProviderError => {
  if (status === 401 || status === 403) return new EmbeddingProviderError("EMBEDDING_AUTH_FAILED");
  if (status === 404) return new EmbeddingProviderError("EMBEDDING_MODEL_NOT_FOUND");
  if (status === 429) return new EmbeddingProviderError("EMBEDDING_RATE_LIMITED");
  return new EmbeddingProviderError("EMBEDDING_INVALID_RESPONSE");
};

/**
 * The embeddings response follows the standard proto3-JSON convention of
 * omitting fields left at their default value, so the first item's `index`
 * (default 0) is routinely absent from the payload. Treat a missing index
 * as 0 rather than as "unknown position".
 */
const parseEmbeddingItem = (value: unknown): { index: number; embedding: number[] } | null => {
  if (!isRecord(value) || !Array.isArray(value.embedding)) return null;
  const embedding = value.embedding.filter((entry): entry is number => typeof entry === "number");
  if (embedding.length !== value.embedding.length || embedding.length === 0) return null;
  const index = typeof value.index === "number" && Number.isInteger(value.index) ? value.index : 0;
  return { index, embedding };
};

// The configured endpoint hard-caps how many inputs one request can embed
// ("at most 100 requests can be in one batch"); other compatible services
// may cap differently or not at all. Splitting is this provider's own
// responsibility - callers just ask to embed N texts and get N vectors
// back, in order, regardless of how many requests that took underneath.
const MAX_BATCH_SIZE = 100;

const embedOneRequest = async (texts: readonly string[]): Promise<number[][]> => {
  const configuration = readEmbeddingConfiguration();
  let response: Response;
  try {
    response = await fetch(configuration.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${configuration.apiKey}`,
        "Content-Type": "application/json",
      },
      // Deliberately just {model, input, dimensions} - see the comment on
      // embedBatch below for why no other field is sent.
      body: JSON.stringify({
        model: configuration.model,
        input: texts,
        ...(configuration.dimensions ? { dimensions: configuration.dimensions } : {}),
      }),
    });
  } catch {
    throw new EmbeddingProviderError("EMBEDDING_NETWORK_ERROR");
  }
  if (!response.ok) throw errorForStatus(response.status);

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new EmbeddingProviderError("EMBEDDING_INVALID_RESPONSE");
  }
  if (!isRecord(payload) || !Array.isArray(payload.data)) {
    throw new EmbeddingProviderError("EMBEDDING_INVALID_RESPONSE");
  }

  const items = payload.data.map(parseEmbeddingItem);
  if (items.some((item) => item === null) || items.length !== texts.length) {
    throw new EmbeddingProviderError("EMBEDDING_INVALID_RESPONSE");
  }
  const ordered = Array.from<number[]>({ length: texts.length });
  for (const item of items) {
    const parsed = item as { index: number; embedding: number[] };
    if (parsed.index < 0 || parsed.index >= texts.length || ordered[parsed.index]) {
      throw new EmbeddingProviderError("EMBEDDING_INVALID_RESPONSE");
    }
    ordered[parsed.index] = parsed.embedding;
  }
  return ordered;
};

const chunk = <T>(items: readonly T[], size: number): T[][] => {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) groups.push(items.slice(i, i + size));
  return groups;
};

/** taskType stays part of the EmbeddingProvider interface (some providers
 * support asymmetric document/query embeddings) but is not sent on the wire
 * here: the configured endpoint rejects unknown fields outright (400,
 * "Cannot find field") rather than ignoring them, so a generic client
 * cannot safely assume any such extra field is harmless. */
const embedBatch = async (
  texts: readonly string[],
  _taskType: EmbeddingTaskType,
): Promise<number[][]> => {
  const results: number[][] = [];
  for (const group of chunk(texts, MAX_BATCH_SIZE)) {
    results.push(...(await embedOneRequest(group)));
  }
  return results;
};

export const httpCompatibleEmbeddingProvider: EmbeddingProvider = {
  name: PROVIDER_NAME,
  embed: embedBatch,
  getStatus: (): EmbeddingStatus => {
    try {
      const configuration = readEmbeddingConfiguration();
      return { configured: true, model: configuration.model, dimensions: configuration.dimensions };
    } catch (error) {
      if (error instanceof EmbeddingConfigurationError) {
        return { configured: false, model: null, dimensions: null };
      }
      throw error;
    }
  },
};
