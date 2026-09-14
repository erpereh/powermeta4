import "server-only";

import type { ChatProvider } from "@/lib/ai/chat-provider";
import { httpCompatibleChatProvider, PROVIDER_NAME } from "@/lib/ai/providers/http-compatible";

export class UnsupportedChatProviderError extends Error {
  constructor(readonly provider: string) {
    super(`El proveedor de chat "${provider}" no está soportado.`);
    this.name = "UnsupportedChatProviderError";
  }
}

/**
 * The single place that decides which ChatProvider implementation backs
 * the chat. Everything else (the chat route, the retrieval pipeline) talks
 * to the ChatProvider interface only — switching providers in the future
 * means adding a case here, not touching any caller.
 */
export const getChatProvider = (): ChatProvider => {
  const configured = (process.env.AI_PROVIDER ?? PROVIDER_NAME).trim().toLowerCase();
  switch (configured) {
    case PROVIDER_NAME:
      return httpCompatibleChatProvider;
    default:
      throw new UnsupportedChatProviderError(configured);
  }
};
