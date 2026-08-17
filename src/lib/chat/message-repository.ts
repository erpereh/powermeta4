import type { ExportedMessageRepository } from "@assistant-ui/react";

import { toThreadMessage } from "@/lib/chat/to-thread-message";
import { visibleMessages } from "@/lib/chat/visible-messages";
import type { Chat, Message } from "@/types/chat";

const compareMessages = (left: Message, right: Message): number =>
  left.createdAt.localeCompare(right.createdAt) || left.id.localeCompare(right.id);

const withResolvableParent = (messages: readonly Message[]): Message[] => {
  const ids = new Set(messages.map((message) => message.id));
  return messages.map((message) => {
    const parentId = message.parentMessageId ?? null;
    if (parentId && !ids.has(parentId)) {
      return { ...message, parentMessageId: null };
    }
    return message;
  });
};

const topologicalMessages = (messages: readonly Message[]): Message[] => {
  const resolved = withResolvableParent(messages);
  const children = new Map<string | null, Message[]>();
  for (const message of resolved) {
    const parentId = message.parentMessageId ?? null;
    const siblings = children.get(parentId) ?? [];
    siblings.push(message);
    children.set(parentId, siblings);
  }
  for (const siblings of children.values()) {
    siblings.sort(compareMessages);
  }

  const ordered: Message[] = [];
  const visited = new Set<string>();
  const visit = (parentId: string | null) => {
    for (const child of children.get(parentId) ?? []) {
      if (visited.has(child.id)) continue;
      visited.add(child.id);
      ordered.push(child);
      visit(child.id);
    }
  };
  visit(null);

  for (const message of resolved) {
    if (visited.has(message.id)) continue;
    visited.add(message.id);
    ordered.push({ ...message, parentMessageId: null });
    visit(message.id);
  }

  return ordered;
};

export const toExportedMessageRepository = (chat: Chat): ExportedMessageRepository => {
  const ordered = topologicalMessages(chat.messages);
  const exportedIds = new Set(ordered.map((message) => message.id));
  const visible = visibleMessages({ ...chat, messages: ordered });
  const headCandidate = chat.headMessageId;
  const headId =
    (headCandidate && exportedIds.has(headCandidate) ? headCandidate : null) ??
    visible.at(-1)?.id ??
    ordered.at(-1)?.id ??
    null;

  return {
    headId,
    messages: ordered.map((message) => ({
      message: toThreadMessage(message),
      parentId: message.parentMessageId ?? null,
    })),
  };
};
