import "server-only";

/**
 * Provider-agnostic chat abstraction. Nothing outside src/lib/ai and
 * src/lib/chat/global-chat-client.ts should talk to a generation API
 * directly — callers ask getChatProvider() for the configured
 * implementation instead.
 */

export type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ChatStatus = {
  configured: boolean;
  model: string | null;
};

export interface ChatProvider {
  readonly name: string;
  streamResponse(options: {
    messages: readonly ChatMessage[];
    abortSignal?: AbortSignal;
  }): AsyncGenerator<string>;
  getStatus(): ChatStatus;
}
