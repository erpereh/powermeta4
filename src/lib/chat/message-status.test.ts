import { describe, expect, it } from "vitest";

import { toAssistantUiMessageStatus, toInterruptedStatus } from "@/lib/chat/message-status";

describe("assistant message statuses", () => {
  it("keeps incomplete, cancelled and failed messages non-complete in assistant-ui", () => {
    expect(toAssistantUiMessageStatus("incomplete")).toEqual({
      type: "incomplete",
      reason: "other",
    });
    expect(toAssistantUiMessageStatus("cancelled")).toEqual({
      type: "incomplete",
      reason: "cancelled",
    });
    expect(toAssistantUiMessageStatus("failed")).toEqual({ type: "incomplete", reason: "error" });
    expect(toAssistantUiMessageStatus("complete")).toEqual({ type: "complete", reason: "stop" });
  });

  it("distinguishes cancellation from generation failure", () => {
    expect(toInterruptedStatus(true)).toBe("cancelled");
    expect(toInterruptedStatus(false)).toBe("failed");
  });
});
