import { NextResponse } from "next/server";

import { getCurrentAuthContext, deleteSessionCookie } from "@/lib/auth/session";
import { ChatHistoryError, buildChatHistory } from "@/lib/chat/chat-history";
import { GlobalChatError, streamGlobalChat } from "@/lib/chat/global-chat-client";
import { getWorkspaceRepository, getWorkspaceSnapshot } from "@/lib/workspace/service";

export const runtime = "nodejs";

type InternalChatEvent =
  | { type: "content"; content: [{ type: "text"; text: string }] }
  | { type: "error"; errorCode: string; message: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const readId = (value: unknown): string | null =>
  typeof value === "string" && value.trim() && value.length <= 160 ? value.trim() : null;

const encodeSse = (payload: InternalChatEvent): string => `data: ${JSON.stringify(payload)}\n\n`;

const isAbortError = (error: unknown, abortSignal: AbortSignal): boolean =>
  abortSignal.aborted ||
  (isRecord(error) && typeof error.name === "string" && error.name === "AbortError");

const toInternalError = (error: unknown): Extract<InternalChatEvent, { type: "error" }> => {
  if (error instanceof GlobalChatError) {
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
        for await (const delta of streamGlobalChat({ messages, abortSignal: request.signal })) {
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
