import type { ThreadMessageLike } from "@assistant-ui/react";

export type MessageRole = "user" | "assistant";

export type PersistedMessageStatus = "running" | "complete" | "incomplete" | "cancelled" | "failed";
export type MessageStatus = PersistedMessageStatus;
export type MessageContent = ThreadMessageLike["content"];

export type ChatIconName =
  | "folder"
  | "briefcase"
  | "code"
  | "book"
  | "brain"
  | "lightbulb"
  | "rocket"
  | "flask"
  | "chart"
  | "palette"
  | "heart"
  | "wrench";

export type ChatColorName =
  | "neutral"
  | "blue"
  | "cyan"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "pink"
  | "purple";

export type Message = {
  id: string;
  conversationId?: string;
  role: MessageRole;
  content: MessageContent;
  createdAt: string;
  updatedAt?: string;
  status: MessageStatus;
  parentMessageId?: string | null;
  generationId?: string | null;
  sequence?: number;
  errorCode?: string | null;
};

export type Chat = {
  id: string;
  title: string;
  favorite: boolean;
  icon?: ChatIconName;
  iconColor?: ChatColorName;
  updatedAt: string;
  headMessageId?: string | null;
  messages: Message[];
};
