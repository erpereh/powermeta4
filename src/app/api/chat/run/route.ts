import { NextResponse } from "next/server";

import { getCurrentAuthContext, deleteSessionCookie } from "@/lib/auth/session";
import type { ChatMessage } from "@/lib/ai/chat-provider";
import { getChatProvider } from "@/lib/ai/get-chat-provider";
import { ChatHistoryError, buildChatHistory } from "@/lib/chat/chat-history";
import { getWorkspaceRepository, getWorkspaceSnapshot } from "@/lib/workspace/service";
import { buildRagSystemMessage } from "@/lib/knowledge/prompt";
import { retrieveRelevantChunks } from "@/lib/knowledge/retrieval-service";

export const runtime = "nodejs";

type InternalChatEvent =
  | { type: "content"; content: [{ type: "text"; text: string }] }
  | { type: "error"; errorCode: string; message: string };

// Any ChatProvider implementation is expected to throw an error shaped like
// this on failure (see src/lib/ai/providers/http-compatible.ts, which
// reuses global-chat-client.ts's GlobalChatError for exactly these codes).
// Duck-typed on purpose: the route never imports a concrete provider's
// error class, only the small string contract.
const CHAT_ERROR_CODES = new Set([
  "CHAT_CONFIG_UNAVAILABLE",
  "CHAT_AUTH_FAILED",
  "CHAT_MODEL_NOT_FOUND",
  "CHAT_RATE_LIMITED",
  "CHAT_NETWORK_ERROR",
  "CHAT_INVALID_RESPONSE",
]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const readId = (value: unknown): string | null =>
  typeof value === "string" && value.trim() && value.length <= 160 ? value.trim() : null;

const encodeSse = (payload: InternalChatEvent): string => `data: ${JSON.stringify(payload)}\n\n`;

const isAbortError = (error: unknown, abortSignal: AbortSignal): boolean =>
  abortSignal.aborted ||
  (isRecord(error) && typeof error.name === "string" && error.name === "AbortError");

const toInternalError = (error: unknown): Extract<InternalChatEvent, { type: "error" }> => {
  if (
    isRecord(error) &&
    typeof error.code === "string" &&
    CHAT_ERROR_CODES.has(error.code) &&
    typeof error.message === "string" &&
    error.message.trim()
  ) {
    return { type: "error", errorCode: error.code, message: error.message };
  }
  return {
    type: "error",
    errorCode: "CHAT_INVALID_RESPONSE",
    message: "La respuesta del proveedor de chat no es válida.",
  };
};

export async function POST(request: Request) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errorCode: "INVALID_BODY" }, { status: 400 });
  }
  if (!isRecord(body)) {
    return NextResponse.json({ ok: false, errorCode: "INVALID_BODY" }, { status: 400 });
  }

  const companyId = readId(body.companyId);
  const conversationId = readId(body.conversationId);
  const assistantMessageId = readId(body.assistantMessageId);
  if (!companyId || !conversationId || !assistantMessageId) {
    return NextResponse.json({ ok: false, errorCode: "INVALID_BODY" }, { status: 400 });
  }

  const snapshot = await getWorkspaceSnapshot(authSession.authContext);
  const activeAndAuthorized =
    snapshot.activeCompanyId === companyId &&
    snapshot.companies.some((company) => company.id === companyId);
  if (!activeAndAuthorized) {
    return NextResponse.json({ ok: false, errorCode: "COMPANY_MISMATCH" }, { status: 403 });
  }

  let conversation;
  try {
    conversation = await getWorkspaceRepository().getConversation(companyId, conversationId);
  } catch {
    return NextResponse.json({ ok: false, errorCode: "CONVERSATION_NOT_FOUND" }, { status: 404 });
  }

  const assistantMessage = conversation.messages.find(
    (message) => message.id === assistantMessageId,
  );
  if (!assistantMessage || assistantMessage.role !== "assistant") {
    return NextResponse.json(
      { ok: false, errorCode: "ASSISTANT_MESSAGE_NOT_FOUND" },
      { status: 404 },
    );
  }

  let messages;
  try {
    messages = buildChatHistory(conversation.messages, assistantMessageId);
  } catch (error) {
    if (error instanceof ChatHistoryError) {
      return NextResponse.json({ ok: false, errorCode: error.code }, { status: 400 });
    }
    throw error;
  }

  const latestQuestion =
    messages.length > 0 && messages[messages.length - 1]!.role === "user"
      ? messages[messages.length - 1]!.content
      : "";

  // Knowledge-base lookup happens once per turn, before the provider is
  // ever called - the provider only ever sees the (few) relevant fragments,
  // never the full manuals. A retrieval failure degrades to "no context
  // found" rather than breaking the chat turn.
  const retrievedChunks = await retrieveRelevantChunks(latestQuestion).catch((error: unknown) => {
    console.error("[knowledge] retrieval failed", error instanceof Error ? error.message : error);
    return [];
  });

  const chatProvider = getChatProvider();
  console.info("[knowledge] query", {
    provider: chatProvider.name,
    chunkCount: retrievedChunks.length,
    sources: retrievedChunks.map((chunk) => ({
      document: chunk.documentName,
      page: chunk.page,
      score: Number(chunk.score.toFixed(3)),
    })),
  });

  const systemMessage: ChatMessage = { role: "system", content: buildRagSystemMessage(retrievedChunks) };
  const providerMessages: ChatMessage[] = [systemMessage, ...messages];

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: InternalChatEvent): boolean => {
        if (request.signal.aborted || controller.desiredSize === null) return false;
        try {
          controller.enqueue(encoder.encode(encodeSse(event)));
          return true;
        } catch {
          return false;
        }
      };

      try {
        let accumulated = "";
        for await (const delta of chatProvider.streamResponse({
          messages: providerMessages,
          abortSignal: request.signal,
        })) {
          if (request.signal.aborted) return;
          accumulated += delta;
          if (!send({ type: "content", content: [{ type: "text", text: accumulated }] })) return;
        }
      } catch (error) {
        if (!isAbortError(error, request.signal)) {
          send(toInternalError(error));
        }
      } finally {
        if (controller.desiredSize !== null) controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
