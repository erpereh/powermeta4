import { NextResponse } from "next/server";

import { getCurrentAuthContext, deleteSessionCookie } from "@/lib/auth/session";
import type { ChatMessage } from "@/lib/ai/chat-provider";
import { getChatProvider } from "@/lib/ai/get-chat-provider";
import { ChatHistoryError, getChatAncestors, toChatHistory } from "@/lib/chat/chat-history";
import { attachmentRefsFromBranch, type ChatSource } from "@/lib/chat/chat-data";
import { loadChatAttachmentContext } from "@/lib/chat/attachment-service";
import { getPeopleNetBranch } from "@/lib/chat/peoplenet-branch";
import { getWorkspaceRepository, getWorkspaceScope } from "@/lib/workspace/service";
import { buildChatContext, buildRagSystemMessage } from "@/lib/knowledge/prompt";
import { buildRetrievalQuestion, retrieveRelevantChunks } from "@/lib/knowledge/retrieval-service";

export const runtime = "nodejs";

type InternalChatEvent =
  | { type: "content"; content: [{ type: "text"; text: string }] }
  | { type: "sources"; sources: ChatSource[] }
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
  "CHAT_SERVICE_UNAVAILABLE",
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

  const snapshot = await getWorkspaceScope(authSession.authContext);
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
  if (assistantMessage.status !== "running") {
    return NextResponse.json(
      { ok: false, errorCode: "ASSISTANT_MESSAGE_NOT_RUNNING" },
      { status: 409 },
    );
  }

  let branch;
  try {
    branch = getChatAncestors(conversation.messages, assistantMessageId);
  } catch (error) {
    if (error instanceof ChatHistoryError) {
      return NextResponse.json({ ok: false, errorCode: error.code }, { status: 400 });
    }
    throw error;
  }

  const { turn, publicHistory } = getPeopleNetBranch(branch);
  const messages = toChatHistory(publicHistory);
  const [latest, previous] = messages
    .filter((message) => message.role === "user")
    .slice(-2)
    .reverse();
  const question = buildRetrievalQuestion(latest?.content ?? "", previous?.content);
  const refs = attachmentRefsFromBranch(publicHistory);

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
        if (turn.kind !== "general") {
          if (turn.kind === "query") {
            const sources: ChatSource[] = [
              { kind: "peoplenet", id: turn.query.action, name: "PeopleNet" },
            ];
            if (
              request.signal.aborted ||
              !(await getWorkspaceRepository().setMessageSources(
                companyId,
                conversationId,
                assistantMessageId,
                sources,
              ))
            )
              return;
            if (!send({ type: "sources", sources })) return;
          }
          send({
            type: "content",
            content: [
              {
                type: "text",
                text: turn.kind === "clarify" ? turn.text : "Consulta de PeopleNet",
              },
            ],
          });
          return;
        }
        const chatProvider = getChatProvider();
        if (!chatProvider.getStatus().configured) {
          send({
            type: "error",
            errorCode: "CHAT_CONFIG_UNAVAILABLE",
            message: "IA no configurada. Puedes seguir consultando datos de PeopleNet.",
          });
          return;
        }
        const [retrieved, attachments] = await Promise.all([
          retrieveRelevantChunks(question, { signal: request.signal }).catch((error: unknown) => {
            if (request.signal.aborted) throw error;
            console.error("[knowledge] error durante la recuperación");
            return [];
          }),
          loadChatAttachmentContext(companyId, conversationId, refs, request.signal),
        ]);
        request.signal.throwIfAborted();

        const chunks = retrieved.slice(0, 6);
        const manualSources = new Map<string, ChatSource>();
        for (const chunk of chunks) {
          manualSources.set(`${chunk.documentId}:${chunk.page}`, {
            kind: "manual",
            id: chunk.documentId,
            name: chunk.documentName.split("/").at(-1) ?? chunk.documentName,
            page: chunk.page,
            version: chunk.documentVersion ?? 1,
          });
        }
        const sources = [...manualSources.values(), ...attachments.sources];
        const systemMessage: ChatMessage = {
          role: "system",
          content: buildRagSystemMessage({
            hasManuals: chunks.length > 0,
            hasAttachments: attachments.items.length > 0,
          }),
        };
        const providerMessages: ChatMessage[] = [systemMessage, ...messages];
        if (chunks.length || refs.length) {
          providerMessages.splice(Math.max(1, providerMessages.length - 1), 0, {
            role: "user",
            content: buildChatContext(chunks, attachments.items, attachments.omitted),
          });
        }
        if (sources.length) {
          if (
            !(await getWorkspaceRepository().setMessageSources(
              companyId,
              conversationId,
              assistantMessageId,
              sources,
            ))
          )
            return;
          if (!send({ type: "sources", sources })) return;
        }
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
          console.error(
            "[chat] provider streaming failed",
            error instanceof Error
              ? {
                  name: error.name,
                  message: error.message,
                  code: (error as { code?: string }).code,
                }
              : error,
          );
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
