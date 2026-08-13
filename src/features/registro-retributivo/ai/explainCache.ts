import {
  aiExplanationSchema,
  type AiExplanation,
  type ExplainPayload,
  type ExplainRequestType,
} from "@/features/registro-retributivo/ai/explainTypes";

interface CacheRecord {
  readonly storedAt: string;
  readonly explanation: AiExplanation;
}

const memoryCache = new Map<string, CacheRecord>();

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    return `{${Object.entries(value as Record<string, unknown>)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, entry]) => `${JSON.stringify(key)}:${stableStringify(entry)}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function hashString(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(36);
}

export function createAiExplanationCacheKey(
  type: ExplainRequestType,
  payload: ExplainPayload,
  analysisId?: string,
): string {
  return [analysisId || "active", type, payload.rowId, hashString(stableStringify(payload))].join(
    ":",
  );
}

export function readCachedAiExplanation(
  type: ExplainRequestType,
  payload: ExplainPayload,
  analysisId?: string,
): AiExplanation | undefined {
  const record = memoryCache.get(createAiExplanationCacheKey(type, payload, analysisId));
  const parsed = aiExplanationSchema.safeParse(record?.explanation);
  return parsed.success ? parsed.data : undefined;
}

export function writeCachedAiExplanation(
  type: ExplainRequestType,
  payload: ExplainPayload,
  explanation: AiExplanation,
  analysisId?: string,
): void {
  memoryCache.set(createAiExplanationCacheKey(type, payload, analysisId), {
    storedAt: new Date().toISOString(),
    explanation,
  });
}

export function clearAiExplanationCache(): void {
  memoryCache.clear();
}
