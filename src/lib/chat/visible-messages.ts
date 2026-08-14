import type { Chat, Message } from "@/types/chat";

export const visibleMessages = (chat: Chat): Message[] => {
  const byId = new Map(chat.messages.map((message) => [message.id, message]));
  let currentId = chat.headMessageId ?? chat.messages.at(-1)?.id ?? null;
  const path: Message[] = [];
  const visited = new Set<string>();
  while (currentId && !visited.has(currentId)) {
    visited.add(currentId);
    const current = byId.get(currentId);
    if (!current) break;
    path.push(current);
    currentId = current.parentMessageId ?? null;
  }
  return path.reverse();
};
