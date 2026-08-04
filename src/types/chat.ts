export type MessageRole = "user" | "assistant";

export type MessageStatus = "complete" | "running" | "incomplete";

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
  role: MessageRole;
  content: string;
  createdAt: string;
  status: MessageStatus;
};

export type Chat = {
  id: string;
  title: string;
  favorite: boolean;
  icon?: ChatIconName;
  iconColor?: ChatColorName;
  updatedAt: string;
  messages: Message[];
};
