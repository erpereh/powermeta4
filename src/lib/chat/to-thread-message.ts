import {
  fromThreadMessageLike,
  type MessageStatus as RuntimeMessageStatus,
  type ThreadMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";

import { toAssistantUiMessageStatus } from "@/lib/chat/message-status";
import type { Message } from "@/types/chat";

export const toThreadMessageLike = (message: Message): ThreadMessageLike =>
  message.role === "assistant"
    ? {
        role: message.role,
        id: message.id,
        createdAt: new Date(message.createdAt),
        content: message.content,
        status: toAssistantUiMessageStatus(message.status, message.errorCode),
      }
    : {
        role: message.role,
        id: message.id,
        createdAt: new Date(message.createdAt),
        content: message.content,
      };

export const toThreadMessage = (message: Message): ThreadMessage => {
  const status: RuntimeMessageStatus =
    message.role === "assistant"
      ? toAssistantUiMessageStatus(message.status, message.errorCode)
      : { type: "complete", reason: "stop" };
  return fromThreadMessageLike(toThreadMessageLike(message), message.id, status);
};
