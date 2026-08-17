import { ProviderValidationError } from "@/lib/agent/errors";
import { resolveChatCompletionsUrl, providerHostForLog } from "@/lib/agent/llm/provider-url";

const SYNTHETIC_MESSAGES = [
  { role: "system", content: "Reply only with OK" },
  { role: "user", content: "OK" },
] as const;

const TEST_TOOL = {
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
} as const;

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

const postCompletions = async (options: {
  url: string;
  apiKey: string;
  body: unknown;
  fetchImpl: typeof fetch;
  abortSignal?: AbortSignal;
}): Promise<{ status: number; raw: unknown; ok: boolean }> => {
  const response = await options.fetchImpl(options.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json",
    },
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
  let url: string;
  try {
    url = resolveChatCompletionsUrl(options.baseUrl);
  } catch {
    return fail("PROVIDER_BASE_URL_INCOMPATIBLE", "La Base URL no es compatible.", host, null);
  }

  const chatBody = {
    model: options.model,
    temperature: 0,
    messages: SYNTHETIC_MESSAGES,
  };
  const toolsBody = {
    ...chatBody,
    tools: [TEST_TOOL],
    tool_choice: "auto",
  };

  const requestCompletions = async (body: unknown) => {
    try {
      return await postCompletions({
        url,
        apiKey: options.apiKey,
        body,
        fetchImpl,
        abortSignal: options.abortSignal,
      });
    } catch (error) {
      if (error instanceof ProviderValidationError) throw error;
      return fail("PROVIDER_UNREACHABLE", "No se ha podido conectar con el proveedor.", host, null);
    }
  };

  const chatResult = await requestCompletions(chatBody);
  if (!chatResult.ok) {
    mapHttpFailure(chatResult.status, inspectErrorHint(chatResult.raw), host, false);
  }
  if (!looksLikeCompatibleShape(chatResult.raw)) {
    return fail(
      "PROVIDER_INVALID_RESPONSE",
      "El proveedor respondió con un formato no válido.",
      host,
      chatResult.status,
    );
  }

  const toolsResult = await requestCompletions(toolsBody);
  if (!toolsResult.ok) {
    mapHttpFailure(toolsResult.status, inspectErrorHint(toolsResult.raw), host, true);
  }
  if (!looksLikeCompatibleShape(toolsResult.raw)) {
    return fail(
      "PROVIDER_INVALID_RESPONSE",
      "El proveedor respondió con un formato no válido.",
      host,
      toolsResult.status,
    );
  }
};
