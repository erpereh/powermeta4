import type { MessageContent } from "@/types/chat";

export class ChatRuntimeAdapterError extends Error {
  constructor(
    readonly code: string,
    message = "No se pudo ejecutar el chat.",
  ) {
    super(message);
    this.name = "ChatRuntimeAdapterError";
  }
}

type InternalChatEvent =
  | { type: "content"; content: TextMessageContent }
  | { type: "error"; errorCode: string; message: string };

type TextMessageContent = Array<{ type: "text"; text: string }>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isAbortError = (error: unknown, abortSignal?: AbortSignal): boolean =>
  abortSignal?.aborted === true ||
  (isRecord(error) && typeof error.name === "string" && error.name === "AbortError");

const parseContent = (value: unknown): TextMessageContent | null => {
  if (!Array.isArray(value)) return null;
  const content: Array<{ type: "text"; text: string }> = [];
  for (const part of value) {
    if (!isRecord(part) || part.type !== "text" || typeof part.text !== "string") return null;
    content.push({ type: "text", text: part.text });
  }
  return content;
};

const parseSseEvent = (block: string): InternalChatEvent | null => {
  const dataLines = block
    .split("\n")
    .filter((line) => line.startsWith("data:"))
    .map((line) => {
      const value = line.slice(5);
      return value.startsWith(" ") ? value.slice(1) : value;
    });
  if (dataLines.length === 0) return null;

  let payload: unknown;
  try {
    payload = JSON.parse(dataLines.join("\n")) as unknown;
  } catch {
    throw new ChatRuntimeAdapterError(
      "CHAT_RUNTIME_INVALID_RESPONSE",
      "La respuesta del chat no es válida.",
    );
  }
  if (!isRecord(payload) || typeof payload.type !== "string") {
    throw new ChatRuntimeAdapterError(
      "CHAT_RUNTIME_INVALID_RESPONSE",
      "La respuesta del chat no es válida.",
    );
  }
  if (payload.type === "content") {
    const content = parseContent(payload.content);
    if (!content) {
      throw new ChatRuntimeAdapterError(
        "CHAT_RUNTIME_INVALID_RESPONSE",
        "La respuesta del chat no es válida.",
      );
    }
    return { type: "content", content };
  }
  if (
    payload.type === "error" &&
    typeof payload.errorCode === "string" &&
    /^[A-Z][A-Z0-9_]{0,63}$/.test(payload.errorCode) &&
    typeof payload.message === "string" &&
    payload.message.trim()
  ) {
    return { type: "error", errorCode: payload.errorCode, message: payload.message };
  }
  throw new ChatRuntimeAdapterError(
    "CHAT_RUNTIME_INVALID_RESPONSE",
    "La respuesta del chat no es válida.",
  );
};

export async function* runGlobalChatStream(options: {
  companyId: string;
  conversationId: string | undefined;
  assistantMessageId: string | undefined;
  abortSignal?: AbortSignal;
}): AsyncGenerator<{ content: MessageContent }> {
  let response: Response;
  try {
    response = await fetch("/api/chat/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyId: options.companyId,
        conversationId: options.conversationId,
        assistantMessageId: options.assistantMessageId,
      }),
      signal: options.abortSignal,
    });
  } catch (error) {
    if (isAbortError(error, options.abortSignal)) throw error;
    throw new ChatRuntimeAdapterError("CHAT_NETWORK_ERROR");
  }
  if (!response.ok) {
    const code =
      response.status === 401 || response.status === 403
        ? "CHAT_AUTH_FAILED"
        : response.status === 429
          ? "CHAT_RATE_LIMITED"
          : "CHAT_INVALID_RESPONSE";
    throw new ChatRuntimeAdapterError(code);
  }
  if (!response.body) throw new ChatRuntimeAdapterError("CHAT_INVALID_RESPONSE");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let receivedText = false;

  const consume = function* (block: string): Generator<{ content: MessageContent }> {
    const event = parseSseEvent(block);
    if (!event) return;
    if (event.type === "error") throw new ChatRuntimeAdapterError(event.errorCode, event.message);
    if (event.content.some((part) => part.text.trim())) receivedText = true;
    yield { content: event.content };
  };

  try {
    while (true) {
      const next = await reader.read();
      if (next.done) break;
      buffer = `${buffer}${decoder.decode(next.value, { stream: true })}`.replace(/\r\n?/g, "\n");
      const blocks = buffer.split("\n\n");
      buffer = blocks.pop() ?? "";
      for (const block of blocks) yield* consume(block);
    }
    buffer = `${buffer}${decoder.decode()}`.replace(/\r\n?/g, "\n");
    if (buffer.trim()) yield* consume(buffer);
  } catch (error) {
    if (isAbortError(error, options.abortSignal)) throw error;
    if (error instanceof ChatRuntimeAdapterError) throw error;
    throw new ChatRuntimeAdapterError("CHAT_NETWORK_ERROR");
  } finally {
    reader.releaseLock();
  }
  if (!receivedText) {
    throw new ChatRuntimeAdapterError(
      "CHAT_INVALID_RESPONSE",
      "La respuesta del chat no es válida.",
    );
  }
}
