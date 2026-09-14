import "server-only";

export type GlobalChatStatus = {
  configured: boolean;
  model: string | null;
};

export type GlobalChatErrorCode =
  | "CHAT_CONFIG_UNAVAILABLE"
  | "CHAT_AUTH_FAILED"
  | "CHAT_MODEL_NOT_FOUND"
  | "CHAT_RATE_LIMITED"
  | "CHAT_SERVICE_UNAVAILABLE"
  | "CHAT_NETWORK_ERROR"
  | "CHAT_INVALID_RESPONSE";

const ERROR_MESSAGES: Record<GlobalChatErrorCode, string> = {
  CHAT_CONFIG_UNAVAILABLE: "El chat global no está configurado.",
  CHAT_AUTH_FAILED: "No se pudo autenticar con el proveedor de chat.",
  CHAT_MODEL_NOT_FOUND: "El modelo configurado no está disponible.",
  CHAT_RATE_LIMITED: "El proveedor de chat ha limitado las solicitudes.",
  CHAT_SERVICE_UNAVAILABLE:
    "El proveedor de chat está saturado ahora mismo. Inténtalo de nuevo en unos segundos.",
  CHAT_NETWORK_ERROR: "No se pudo conectar con el proveedor de chat.",
  CHAT_INVALID_RESPONSE: "La respuesta del proveedor de chat no es válida.",
};

export class GlobalChatError extends Error {
  constructor(readonly code: GlobalChatErrorCode) {
    super(ERROR_MESSAGES[code]);
    this.name = "GlobalChatError";
  }
}

export class GlobalChatConfigurationError extends GlobalChatError {
  constructor() {
    super("CHAT_CONFIG_UNAVAILABLE");
    this.name = "GlobalChatConfigurationError";
  }
}

const CHAT_COMPLETIONS_PATH = "/chat/completions";

const requiredSetting = (name: "AI_BASE_URL" | "AI_API_KEY" | "AI_MODEL"): string => {
  const value = process.env[name]?.trim();
  if (!value) throw new GlobalChatConfigurationError();
  return value;
};

export const resolveGlobalChatCompletionsUrl = (baseUrl: string): string => {
  let parsed: URL;
  try {
    parsed = new URL(baseUrl.trim());
  } catch {
    throw new GlobalChatConfigurationError();
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new GlobalChatConfigurationError();
  }
  parsed.hash = "";
  parsed.search = "";
  const path = parsed.pathname.replace(/\/+$/, "") || "";
  parsed.pathname = path.endsWith(CHAT_COMPLETIONS_PATH) ? path : `${path}${CHAT_COMPLETIONS_PATH}`;
  return parsed.toString();
};

const readGlobalChatConfiguration = () => ({
  endpoint: resolveGlobalChatCompletionsUrl(requiredSetting("AI_BASE_URL")),
  apiKey: requiredSetting("AI_API_KEY"),
  model: requiredSetting("AI_MODEL"),
});

export type GlobalChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isAbortError = (error: unknown, abortSignal?: AbortSignal): boolean =>
  abortSignal?.aborted === true ||
  (isRecord(error) && typeof error.name === "string" && error.name === "AbortError");

type ParsedSseEvent =
  | { type: "done" }
  | { type: "delta"; contents: string[] }
  | { type: "ignore" }
  | { type: "invalid" };

const parseSseEvent = (block: string): ParsedSseEvent => {
  const dataLines = block
    .split("\n")
    .filter((line) => line.startsWith("data:"))
    .map((line) => {
      const value = line.slice(5);
      return value.startsWith(" ") ? value.slice(1) : value;
    });
  if (dataLines.length === 0) return { type: "ignore" };
  const data = dataLines.join("\n");
  if (data.trim() === "[DONE]") return { type: "done" };
  try {
    const parsed = JSON.parse(data) as unknown;
    if (!isRecord(parsed) || !Array.isArray(parsed.choices)) return { type: "invalid" };
    const contents: string[] = [];
    for (const choice of parsed.choices) {
      if (!isRecord(choice) || !isRecord(choice.delta)) return { type: "invalid" };
      const content = choice.delta.content;
      if (content !== null && content !== undefined && typeof content !== "string") {
        return { type: "invalid" };
      }
      if (typeof content === "string") contents.push(content);
    }
    return { type: "delta", contents };
  } catch {
    return { type: "invalid" };
  }
};

const errorForStatus = (status: number): GlobalChatError => {
  if (status === 401 || status === 403) return new GlobalChatError("CHAT_AUTH_FAILED");
  if (status === 404) return new GlobalChatError("CHAT_MODEL_NOT_FOUND");
  if (status === 429) return new GlobalChatError("CHAT_RATE_LIMITED");
  // 502/503/504 are the standard "upstream temporarily unavailable" gateway
  // statuses - observed in practice from Gemini's OpenAI-compatible endpoint
  // as a 503 "This model is currently experiencing high demand" during
  // demand spikes, which clears up within a couple of seconds. Distinct
  // from CHAT_INVALID_RESPONSE (a structurally malformed response) - this
  // is a transient condition worth retrying (see fetchChatCompletion).
  if (status === 502 || status === 503 || status === 504) {
    return new GlobalChatError("CHAT_SERVICE_UNAVAILABLE");
  }
  return new GlobalChatError("CHAT_INVALID_RESPONSE");
};

const RETRYABLE_STATUSES = new Set([502, 503, 504]);
const MAX_FETCH_ATTEMPTS = 4;
const RETRY_DELAYS_MS = [400, 900, 1800];

const sleep = (ms: number, abortSignal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (abortSignal?.aborted) {
      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
      return;
    }
    const timer = setTimeout(resolve, ms);
    abortSignal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
      },
      { once: true },
    );
  });

/**
 * Retries only the initial connection (before any content has been yielded
 * to the caller), and only for transient "upstream unavailable" statuses -
 * never for auth/rate-limit/not-found, which won't resolve by retrying.
 */
const fetchChatCompletion = async (
  configuration: { endpoint: string; apiKey: string; model: string },
  messages: readonly GlobalChatMessage[],
  abortSignal?: AbortSignal,
): Promise<Response> => {
  for (let attempt = 0; attempt < MAX_FETCH_ATTEMPTS; attempt += 1) {
    let response: Response;
    try {
      response = await fetch(configuration.endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${configuration.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: configuration.model,
          messages,
          stream: true,
        }),
        signal: abortSignal,
      });
    } catch (error) {
      if (isAbortError(error, abortSignal)) throw error;
      throw new GlobalChatError("CHAT_NETWORK_ERROR");
    }
    if (response.ok) return response;
    const statusError = errorForStatus(response.status);
    const isLastAttempt = attempt === MAX_FETCH_ATTEMPTS - 1;
    if (!RETRYABLE_STATUSES.has(response.status) || isLastAttempt) throw statusError;
    await sleep(RETRY_DELAYS_MS[attempt] ?? RETRY_DELAYS_MS.at(-1)!, abortSignal);
  }
  // Unreachable - the loop always returns or throws - but keeps TS satisfied.
  throw new GlobalChatError("CHAT_SERVICE_UNAVAILABLE");
};

export async function* streamGlobalChat(options: {
  messages: readonly GlobalChatMessage[];
  abortSignal?: AbortSignal;
}): AsyncGenerator<string> {
  const configuration = readGlobalChatConfiguration();
  const response = await fetchChatCompletion(configuration, options.messages, options.abortSignal);
  if (!response.body) throw new GlobalChatError("CHAT_INVALID_RESPONSE");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let receivedDone = false;
  let receivedText = false;

  try {
    while (!receivedDone) {
      const next = await reader.read();
      if (next.done) break;
      buffer = `${buffer}${decoder.decode(next.value, { stream: true })}`.replace(/\r\n?/g, "\n");
      const blocks = buffer.split("\n\n");
      buffer = blocks.pop() ?? "";
      for (const block of blocks) {
        const event = parseSseEvent(block);
        if (event.type === "invalid") throw new GlobalChatError("CHAT_INVALID_RESPONSE");
        if (event.type === "done") {
          receivedDone = true;
          break;
        }
        if (event.type === "delta") {
          for (const content of event.contents) {
            if (content.trim()) receivedText = true;
            yield content;
          }
        }
      }
    }
  } catch (error) {
    if (isAbortError(error, options.abortSignal)) throw error;
    if (error instanceof GlobalChatError) throw error;
    throw new GlobalChatError("CHAT_NETWORK_ERROR");
  } finally {
    reader.releaseLock();
  }
  buffer = `${buffer}${decoder.decode()}`.replace(/\r\n?/g, "\n");
  if (buffer.trim()) {
    const event = parseSseEvent(buffer);
    if (event.type === "invalid") throw new GlobalChatError("CHAT_INVALID_RESPONSE");
    if (event.type === "done") receivedDone = true;
    if (event.type === "delta") {
      for (const content of event.contents) {
        if (content.trim()) receivedText = true;
        yield content;
      }
    }
  }
  if (!receivedDone || !receivedText) {
    throw new GlobalChatError("CHAT_INVALID_RESPONSE");
  }
}

export const getGlobalChatStatus = (): GlobalChatStatus => {
  try {
    const configuration = readGlobalChatConfiguration();
    return { configured: true, model: configuration.model };
  } catch (error) {
    if (error instanceof GlobalChatConfigurationError) {
      return { configured: false, model: null };
    }
    throw error;
  }
};
