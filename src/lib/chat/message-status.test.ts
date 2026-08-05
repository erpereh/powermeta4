import { describe, expect, it } from "vitest";

import { toInterruptedStatus, toRuntimeStatus } from "@/lib/chat/message-status";

describe("assistant message statuses", () => {
  it("keeps incomplete, cancelled and failed messages non-complete in assistant-ui", () => {
    expect(toRuntimeStatus("incomplete")).toEqual({ type: "incomplete", reason: "other" });
    expect(toRuntimeStatus("cancelled")).toEqual({ type: "incomplete", reason: "cancelled" });
    expect(toRuntimeStatus("failed")).toEqual({ type: "incomplete", reason: "error" });
    expect(toRuntimeStatus("complete")).toEqual({ type: "complete", reason: "stop" });
  });

  it("distinguishes cancellation from generation failure", () => {
    expect(toInterruptedStatus(true)).toBe("cancelled");
    expect(toInterruptedStatus(false)).toBe("failed");
  });
});
