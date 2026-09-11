import { describe, expect, it } from "vitest";

import { ChatHistoryError, buildChatHistory } from "@/lib/chat/chat-history";
import type { Message, MessageContent } from "@/types/chat";

const at = "2026-09-11T12:00:00.000Z";

const message = (
  id: string,
  role: Message["role"],
  parentMessageId: string | null,
  content: MessageContent,
): Message => ({
  id,
  role,
  parentMessageId,
  content,
  createdAt: at,
  status: "complete",
});

const text = (value: string): MessageContent => [{ type: "text", text: value }];

describe("buildChatHistory", () => {
  it("reconstructs the first turn and excludes the assistant message being generated", () => {
    const user = message("user-1", "user", null, text("Hola"));
    const assistant = message("assistant-1", "assistant", user.id, []);

    expect(buildChatHistory([assistant, user], assistant.id)).toEqual([
      { role: "user", content: "Hola" },
    ]);
  });

  it("preserves legacy string content when building model history", () => {
    const user = message("user-legacy", "user", null, "Hola" as MessageContent);
    const assistant = message("assistant-legacy", "assistant", user.id, []);

    expect(buildChatHistory([assistant, user], assistant.id)).toEqual([
      { role: "user", content: "Hola" },
    ]);
  });

  it("reconstructs the chronological ancestors for a second turn", () => {
    const userOne = message("user-1", "user", null, text("Primera pregunta"));
    const assistantOne = message("assistant-1", "assistant", userOne.id, text("Primera respuesta"));
    const userTwo = message("user-2", "user", assistantOne.id, text("Segunda pregunta"));
    const assistantTwo = message("assistant-2", "assistant", userTwo.id, []);

    expect(
      buildChatHistory([assistantTwo, userTwo, assistantOne, userOne], assistantTwo.id),
    ).toEqual([
      { role: "user", content: "Primera pregunta" },
      { role: "assistant", content: "Primera respuesta" },
      { role: "user", content: "Segunda pregunta" },
    ]);
  });

  it("follows only the selected branch and ignores legacy custom parts", () => {
    const root = message("user-root", "user", null, text("Elige una rama"));
    const leftAssistant = message("assistant-left", "assistant", root.id, text("Rama izquierda"));
    const rightAssistant = message("assistant-right", "assistant", root.id, text("Rama derecha"));
    const rightUser = message("user-right", "user", rightAssistant.id, [
      { type: "data", name: "legacy", data: { ignored: true } },
      { type: "text", text: "Continúa a la derecha" },
    ]);
    const target = message("assistant-target", "assistant", rightUser.id, []);

    expect(
      buildChatHistory([leftAssistant, target, root, rightUser, rightAssistant], target.id),
    ).toEqual([
      { role: "user", content: "Elige una rama" },
      { role: "assistant", content: "Rama derecha" },
      { role: "user", content: "Continúa a la derecha" },
    ]);
  });

  it("rejects a message graph with a missing parent", () => {
    const target = message("assistant-1", "assistant", "missing-user", []);

    expect(() => buildChatHistory([target], target.id)).toThrow(ChatHistoryError);
  });

  it("rejects a message graph with a parent cycle", () => {
    const user = message("user-1", "user", "assistant-1", text("Pregunta"));
    const assistant = message("assistant-1", "assistant", user.id, []);

    expect(() => buildChatHistory([user, assistant], assistant.id)).toThrow(ChatHistoryError);
  });
});
