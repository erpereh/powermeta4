import {
  fromThreadMessageLike,
  type MessageStatus as RuntimeMessageStatus,
  type ThreadMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";

import { toAssistantUiMessageStatus } from "@/lib/chat/message-status";
import type { Message, MessageContent } from "@/types/chat";

export const getMessagePlainText = (content: MessageContent): string => {
  if (typeof content === "string") return content;
  return content
    .filter((part) => part.type === "text")
    .map((part) => ("text" in part ? part.text : ""))
    .join("");
};

const assistantStatus = (message: Message): RuntimeMessageStatus =>
  toAssistantUiMessageStatus(
    message.status,
    message.errorCode,
    message.status === "failed" && !message.errorCode
      ? getMessagePlainText(message.content)
      : null,
  );

export const toThreadMessageLike = (message: Message): ThreadMessageLike =>
  message.role === "assistant"
    ? {
        role: message.role,
        id: message.id,
        createdAt: new Date(message.createdAt),
        content: message.content,
        status: assistantStatus(message),
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
      ? assistantStatus(message)
      : { type: "complete", reason: "stop" };
  return fromThreadMessageLike(toThreadMessageLike(message), message.id, status);
};
