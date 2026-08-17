import { describe, expect, it } from "vitest";

import { toExportedMessageRepository } from "@/lib/chat/message-repository";
import { visibleMessages } from "@/lib/chat/visible-messages";
import type { Chat, Message } from "@/types/chat";

const at = "2026-08-17T10:00:00.000Z";

const message = (
  id: string,
  role: Message["role"],
  parentMessageId: string | null,
  createdAt = at,
): Message => ({
  id,
  role,
  parentMessageId,
  content: [{ type: "text", text: id }],
  createdAt,
  status: "complete",
});

const chatOf = (messages: Message[], headMessageId: string | null): Chat => ({
  id: "chat-1",
  title: "Prueba",
  favorite: false,
  updatedAt: at,
  headMessageId,
  messages,
});

describe("toExportedMessageRepository", () => {
  it("exports a child before its parent in createdAt/id order as parent-first", () => {
    const parent = message("user-zzzz", "user", null, at);
    const child = message("assistant-aaaa", "assistant", parent.id, at);
    const chat = chatOf([child, parent], child.id);
    const exported = toExportedMessageRepository(chat);

    expect(exported.messages.map((item) => item.message.id)).toEqual([parent.id, child.id]);
    expect(exported.messages.map((item) => item.parentId)).toEqual([null, parent.id]);
    expect(exported.headId).toBe(child.id);
  });

  it("treats a missing parent as a root instead of exporting an orphan edge", () => {
    const orphan = message("assistant-1", "assistant", "missing-parent");
    const chat = chatOf([orphan], orphan.id);
    const exported = toExportedMessageRepository(chat);

    expect(exported.messages).toHaveLength(1);
    expect(exported.messages[0]?.parentId).toBeNull();
    expect(exported.headId).toBe(orphan.id);
  });

  it("falls back to the visible branch tip when headId is missing from the exported set", () => {
    const user = message("user-1", "user", null);
    const assistant = message("assistant-1", "assistant", user.id);
    const chat = chatOf([user, assistant], "ghost-head");
    const exported = toExportedMessageRepository(chat);

    expect(exported.headId).toBe(assistant.id);
    expect(exported.messages.map((item) => item.message.id)).toEqual([user.id, assistant.id]);
  });

  it("does not change visibleMessages for a linear conversation", () => {
    const user = message("user-1", "user", null);
    const assistant = message("assistant-1", "assistant", user.id);
    const chat = chatOf([assistant, user], assistant.id);
    const visible = visibleMessages(chat);
    const exported = toExportedMessageRepository(chat);

    expect(visible.map((item) => item.id)).toEqual([user.id, assistant.id]);
    expect(exported.messages.map((item) => item.message.id)).toEqual([user.id, assistant.id]);
  });
});
