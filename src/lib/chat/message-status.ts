import type { MessageStatus as RuntimeMessageStatus } from "@assistant-ui/react";

import type { MessageStatus } from "@/types/chat";

export const toRuntimeStatus = (status: MessageStatus): RuntimeMessageStatus => {
  if (status === "complete") return { type: "complete", reason: "stop" };
  if (status === "cancelled") return { type: "incomplete", reason: "cancelled" };
  return { type: "incomplete", reason: status === "failed" ? "error" : "other" };
};

export const toInterruptedStatus = (aborted: boolean): MessageStatus =>
  aborted ? "cancelled" : "failed";
