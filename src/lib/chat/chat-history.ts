import "server-only";

import type { Message, MessageContent } from "@/types/chat";

export type ChatHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export class ChatHistoryError extends Error {
  readonly code = "CHAT_HISTORY_INVALID";

  constructor() {
    super("No se pudo reconstruir el historial de la conversación.");
    this.name = "ChatHistoryError";
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isTextPart = (value: unknown): value is { type: "text"; text: string } =>
  isRecord(value) && value.type === "text" && typeof value.text === "string";

const textContent = (content: MessageContent): string => {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .filter(isTextPart)
    .map((part) => part.text)
    .join("");
};

export const buildChatHistory = (
  messages: readonly Message[],
  assistantMessageId: string,
): ChatHistoryMessage[] => {
  const messagesById = new Map(messages.map((message) => [message.id, message]));
  const ancestors: Message[] = [];
  const visited = new Set<string>();
  let currentId: string | null = assistantMessageId;

  while (currentId) {
    if (visited.has(currentId)) throw new ChatHistoryError();
    visited.add(currentId);
    const current = messagesById.get(currentId);
    if (!current) throw new ChatHistoryError();
    ancestors.push(current);
    currentId = current.parentMessageId ?? null;
  }

  return ancestors
    .reverse()
    .slice(0, -1)
    .flatMap((message) => {
      const content = textContent(message.content);
      return content.trim() ? [{ role: message.role, content }] : [];
    });
};
