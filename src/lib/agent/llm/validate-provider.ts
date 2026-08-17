import { ProviderValidationError } from "@/lib/agent/errors";
import {
  geminiRequestHeaders,
  isGoogleGenerativeLanguageHost,
  looksLikeGeminiGenerateContent,
  resolveGeminiGenerateContentUrl,
  toGeminiGenerateContentBody,
} from "@/lib/agent/llm/google-gemini";
import { resolveChatCompletionsUrl, providerHostForLog } from "@/lib/agent/llm/provider-url";
import type { OpenAiChatMessage, OpenAiToolDefinition } from "@/lib/agent/llm/openai-compatible";

const SYNTHETIC_MESSAGES: OpenAiChatMessage[] = [
  { role: "system", content: "Reply only with OK" },
  { role: "user", content: "OK" },
];

const TEST_TOOL: OpenAiToolDefinition = {
  type: "function",
  function: {
    name: "test_tool",
    description: "Synthetic connectivity probe. Call with value PING.",
    parameters: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
      required: ["value"],
    },
  },
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const logProbeFailure = (info: {
  host: string;
  status: number | null;
  errorCode: string;
}): void => {
  console.info("[provider-config]", {
    source: "probe",
    host: info.host,
    status: info.status,
    errorCode: info.errorCode,
  });
};

const fail = (
  errorCode: string,
  message: string,
  host: string,
  status: number | null,
): never => {
  logProbeFailure({ host, status, errorCode });
  throw new ProviderValidationError(errorCode, message);
};

const inspectErrorHint = (raw: unknown): string => {
  if (!isRecord(raw)) return "";
  const error = raw.error;
  if (typeof error === "string") return error.toLowerCase();
  if (!isRecord(error)) return "";
  const parts = [error.code, error.type, error.message, error.status];
  return parts
    .filter((part): part is string | number => typeof part === "string" || typeof part === "number")
    .map((part) => String(part).toLowerCase())
    .join(" ");
};

const looksLikeModelError = (hint: string): boolean =>
  hint.includes("model") ||
  hint.includes("not_found") ||
  hint.includes("not found") ||
  hint.includes("does not exist") ||
  hint.includes("unknown model");

const looksLikeAuthError = (hint: string): boolean =>
  hint.includes("api key") ||
  hint.includes("api_key") ||
  hint.includes("unauthenticated") ||
  hint.includes("unauthorized") ||
  hint.includes("permission") ||
  hint.includes("invalid key");

const looksLikeToolsError = (hint: string): boolean =>
  hint.includes("tool") ||
  hint.includes("function call") ||
  hint.includes("function_call") ||
  hint.includes("tools are not supported") ||
  hint.includes("tool_choice");

const looksLikeCompatibleShape = (raw: unknown): boolean => {
  if (!isRecord(raw) || !Array.isArray(raw.choices) || raw.choices.length === 0) return false;
  const first = raw.choices[0];
  if (!isRecord(first)) return false;
  return isRecord(first.message) || typeof first.text === "string";
};

const mapHttpFailure = (status: number, hint: string, host: string, toolsProbe: boolean): never => {
  if (status === 401 || status === 403 || looksLikeAuthError(hint)) {
    return fail("PROVIDER_API_KEY_INVALID", "API key no válida.", host, status);
  }
  if (toolsProbe && (status === 400 || status === 422) && looksLikeToolsError(hint)) {
    return fail(
      "PROVIDER_TOOLS_UNSUPPORTED",
      "El modelo no admite las herramientas requeridas por powermeta4.",
      host,
      status,
    );
  }
  if (status === 404 && looksLikeModelError(hint)) {
    return fail(
      "PROVIDER_MODEL_UNAVAILABLE",
      "El modelo indicado no existe o no está disponible.",
      host,
      status,
    );
  }
  if (status === 400 && looksLikeModelError(hint)) {
    return fail(
      "PROVIDER_MODEL_UNAVAILABLE",
      "El modelo indicado no existe o no está disponible.",
      host,
      status,
    );
  }
  if (status === 404) {
    return fail("PROVIDER_BASE_URL_INCOMPATIBLE", "La Base URL no es compatible.", host, status);
  }
  return fail(
    "PROVIDER_INVALID_RESPONSE",
    "El proveedor respondió con un formato no válido.",
    host,
    status,
  );
};

const postJson = async (options: {
  url: string;
  headers: Record<string, string>;
  body: unknown;
  fetchImpl: typeof fetch;
  abortSignal?: AbortSignal;
}): Promise<{ status: number; raw: unknown; ok: boolean }> => {
  const response = await options.fetchImpl(options.url, {
    method: "POST",
    headers: options.headers,
    body: JSON.stringify(options.body),
    signal: options.abortSignal,
  });
  let raw: unknown = null;
  try {
    raw = await response.json();
  } catch {
    raw = null;
  }
  return { status: response.status, raw, ok: response.ok };
};

export const probeOpenAiCompatibleProvider = async (options: {
  baseUrl: string;
  apiKey: string;
  model: string;
  fetchImpl?: typeof fetch;
  abortSignal?: AbortSignal;
}): Promise<void> => {
  const fetchImpl = options.fetchImpl ?? fetch;
  const host = providerHostForLog(options.baseUrl);
  const gemini = isGoogleGenerativeLanguageHost(options.baseUrl);
  let url: string;
  try {
    url = gemini
      ? resolveGeminiGenerateContentUrl(options.baseUrl, options.model)
      : resolveChatCompletionsUrl(options.baseUrl);
  } catch {
    return fail("PROVIDER_BASE_URL_INCOMPATIBLE", "La Base URL no es compatible.", host, null);
  }

  const openaiChatBody = {
    model: options.model,
    temperature: 0,
    messages: SYNTHETIC_MESSAGES,
  };
  const openaiToolsBody = {
    ...openaiChatBody,
    tools: [TEST_TOOL],
    tool_choice: "auto",
  };
  const geminiChatBody = toGeminiGenerateContentBody({ messages: SYNTHETIC_MESSAGES });
  const geminiToolsBody = toGeminiGenerateContentBody({
    messages: SYNTHETIC_MESSAGES,
    tools: [TEST_TOOL],
  });
  const headers = gemini
    ? geminiRequestHeaders(options.apiKey)
    : {
        Authorization: `Bearer ${options.apiKey}`,
        "Content-Type": "application/json",
      };
  const looksSuccessful = gemini ? looksLikeGeminiGenerateContent : looksLikeCompatibleShape;

  const requestProbe = async (body: unknown) => {
    try {
      return await postJson({
        url,
        headers,
        body,
        fetchImpl,
        abortSignal: options.abortSignal,
      });
    } catch (error) {
      if (error instanceof ProviderValidationError) throw error;
      return fail("PROVIDER_UNREACHABLE", "No se ha podido conectar con el proveedor.", host, null);
    }
  };

  const chatResult = await requestProbe(gemini ? geminiChatBody : openaiChatBody);
  if (!chatResult.ok) {
    mapHttpFailure(chatResult.status, inspectErrorHint(chatResult.raw), host, false);
  }
  if (!looksSuccessful(chatResult.raw)) {
    return fail(
      "PROVIDER_INVALID_RESPONSE",
      "El proveedor respondió con un formato no válido.",
      host,
      chatResult.status,
    );
  }

  const toolsResult = await requestProbe(gemini ? geminiToolsBody : openaiToolsBody);
  if (!toolsResult.ok) {
    mapHttpFailure(toolsResult.status, inspectErrorHint(toolsResult.raw), host, true);
  }
  if (!looksSuccessful(toolsResult.raw)) {
    return fail(
      "PROVIDER_INVALID_RESPONSE",
      "El proveedor respondió con un formato no válido.",
      host,
      toolsResult.status,
    );
  }
};
