import { describe, expect, it } from "vitest";

import { toThreadMessage, toThreadMessageLike } from "@/lib/chat/to-thread-message";
import type { Message } from "@/types/chat";

const baseUserMessage: Message = {
  id: "user-1",
  role: "user",
  content: [{ type: "text", text: "Hola" }],
  createdAt: "2026-08-14T10:00:00.000Z",
  status: "complete",
};

const baseAssistantMessage: Message = {
  id: "assistant-1",
  role: "assistant",
  content: [{ type: "text", text: "Hola, ¿en qué te ayudo?" }],
  createdAt: "2026-08-14T10:00:01.000Z",
  status: "complete",
};

describe("toThreadMessageLike", () => {
  it("never puts a status key on a user message", () => {
    const like = toThreadMessageLike(baseUserMessage);
    expect("status" in like).toBe(false);
  });

  it("preserves the exact user text 1013 without inserting a newline", () => {
    const message: Message = {
      ...baseUserMessage,
      content: [{ type: "text", text: "1013" }],
    };
    const like = toThreadMessageLike(message);
    const content = like.content;
    const text =
      typeof content === "string"
        ? content
        : content
            .filter((part) => part.type === "text")
            .map((part) => ("text" in part ? part.text : ""))
            .join("");
    expect(JSON.stringify(text)).toBe('"1013"');
    expect([...text].map((char) => char.codePointAt(0))).toEqual([49, 48, 49, 51]);
    expect(text).not.toContain("\n");
    const thread = toThreadMessage(message);
    expect(thread.role).toBe("user");
  });

  it("puts a status key on an assistant message", () => {
    const like = toThreadMessageLike(baseAssistantMessage);
    expect(like.status).toEqual({ type: "complete", reason: "stop" });
  });
});

describe("toThreadMessage", () => {
  it("converts a user message without throwing (regression: status is only supported for assistant messages)", () => {
    expect(() => toThreadMessage(baseUserMessage)).not.toThrow();
    const result = toThreadMessage(baseUserMessage);
    expect(result.role).toBe("user");
  });

  it("converts a mixed user/assistant history the way messageRepository does, without throwing", () => {
    const history: Message[] = [
      baseUserMessage,
      baseAssistantMessage,
      { ...baseUserMessage, id: "user-2", createdAt: "2026-08-14T10:00:02.000Z" },
    ];
    expect(() => history.map(toThreadMessage)).not.toThrow();
  });

  it.each([
    ["running", { type: "running" }],
    ["complete", { type: "complete", reason: "stop" }],
    ["cancelled", { type: "incomplete", reason: "cancelled" }],
    ["incomplete", { type: "incomplete", reason: "other" }],
  ] as const)("maps assistant status %s to the correct runtime status", (status, expected) => {
    const message: Message = { ...baseAssistantMessage, status };
    const result = toThreadMessage(message);
    expect(result.status).toEqual(expected);
  });

  it("maps a failed assistant message with an errorCode", () => {
    const message: Message = { ...baseAssistantMessage, status: "failed", errorCode: "MODEL_REQUEST_FAILED" };
    const result = toThreadMessage(message);
    expect(result.status).toEqual({
      type: "incomplete",
      reason: "error",
      error: { code: "MODEL_REQUEST_FAILED" },
    });
  });
});
