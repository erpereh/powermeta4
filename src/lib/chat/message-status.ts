import type { MessageStatus as RuntimeMessageStatus } from "@assistant-ui/react";

import type { PersistedMessageStatus } from "@/types/chat";

export const toAssistantUiMessageStatus = (
  status: PersistedMessageStatus,
  errorCode?: string | null,
): RuntimeMessageStatus => {
  if (status === "running") return { type: "running" };
  if (status === "complete") return { type: "complete", reason: "stop" };
  if (status === "cancelled") return { type: "incomplete", reason: "cancelled" };
  if (status === "failed") {
    return {
      type: "incomplete",
      reason: "error",
      ...(errorCode ? { error: { code: errorCode } } : {}),
    };
  }
  return { type: "incomplete", reason: "other" };
};

export const toInterruptedStatus = (
  aborted: boolean,
): Extract<PersistedMessageStatus, "cancelled" | "failed"> => (aborted ? "cancelled" : "failed");
