import { NextResponse } from "next/server";

import { getCurrentAuthContext, deleteSessionCookie } from "@/lib/auth/session";
import type { ChatMessage, ChatProvider } from "@/lib/ai/chat-provider";
import { getChatProvider } from "@/lib/ai/get-chat-provider";
import {
  ChatHistoryError,
  getChatAncestors,
  textContent,
  toChatHistory,
} from "@/lib/chat/chat-history";
import {
  attachmentRefsFromBranch,
  readChatAttachments,
  readChatSources,
  type ChatSource,
} from "@/lib/chat/chat-data";
import { loadChatAttachmentContext } from "@/lib/chat/attachment-service";
import { getPeopleNetBranch } from "@/lib/chat/peoplenet-branch";
import {
  openPeopleNetRecipe,
  recipeScope,
  sealPeopleNetRecipe,
  type RunRecipe,
} from "@/lib/chat/peoplenet-recipes";
import { runPeopleNetTools } from "@/lib/chat/peoplenet-run";
import { PeopleNetScopeError } from "@/lib/chat/peoplenet-service";
import { getWorkspaceRepository, getWorkspaceScope } from "@/lib/workspace/service";
import { knowledgeRoot, readPointer } from "@/lib/knowledge/manuals/config";
import {
  citedSources,
  groundedAnswer,
  manualContext,
  manualSystem,
  NO_ANSWER_SENTENCE,
} from "@/lib/knowledge/manuals/grounding";
import { retrieveManuals, searchQuestion } from "@/lib/knowledge/manuals/retrieve";
import {
  buildChatContext,
  buildGeneralSystemMessage,
  buildRagSystemMessage,
} from "@/lib/knowledge/prompt";
import { retrieveRelevantChunks } from "@/lib/knowledge/retrieval-service";

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

const attachmentMention =
  /\b(?:adjunt\w*|(?:el|ese|este|aquel|los|estos) (?:archivos?|pdfs?|xlsx|excel|csv|ficheros?|documentos?))\b/i;

const documentaryRequest =
  /\b(?:según (?:el |los )?manual|documentación|paso a paso|cómo (?:se|puedo|funciona)|service pack|ram-?dl|sp\d{5}sp\d{3})\b/i;

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
  const publicIds = new Set(publicHistory.map(({ id }) => id));
  const users = branch.filter(({ role }) => role === "user");
  let search = searchQuestion("");
  let usesFiles = false;
  for (const message of users) {
    if (!publicIds.has(message.id)) {
      search = searchQuestion("");
      usesFiles = false;
      continue;
    }
    const input = textContent(message.content);
    search = searchQuestion(input, search.isDocumental ? search.text : undefined);
    usesFiles =
      Boolean(readChatAttachments(message.content).length) ||
      attachmentMention.test(input) ||
      (usesFiles && search.continuesTopic);
  }
  const availableFiles = attachmentRefsFromBranch(publicHistory);
  const latestContent = users.at(-1)?.content ?? "";
  const latestInput = textContent(latestContent);
  const latestText = latestInput.toLowerCase();
  const namedFiles = availableFiles.filter(({ name }) => latestText.includes(name.toLowerCase()));
  const selectedFileIds = new Set(
    [...namedFiles, ...readChatAttachments(latestContent)].map(({ id }) => id),
  );
  const refs = namedFiles.length
    ? availableFiles.filter(({ id }) => selectedFileIds.has(id))
    : usesFiles
      ? availableFiles
      : [];

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
        let chatProvider: ChatProvider | undefined;
        const localOnly =
          turn.kind === "unavailable" ||
          (turn.kind === "clarify" && /\b(?:escrituras|quita los datos)\b/.test(turn.text));
        const keepDocumentary =
          turn.kind === "general" &&
          (refs.length > 0 ||
            (search.isDocumental &&
              (documentaryRequest.test(latestText) ||
                (search.continuesTopic && users.length > 1))));
        if (
          !localOnly &&
          !keepDocumentary &&
          latestInput.trim() &&
          process.env.AI_PEOPLENET_APPROVED_ENDPOINT?.trim() &&
          process.env.AI_PEOPLENET_APPROVED_MODEL?.trim()
        ) {
          chatProvider = getChatProvider();
          const tools = chatProvider.getPeopleNetTools?.();
          if (tools) {
            const repository = getWorkspaceRepository();
            const assertScope = async () => {
              request.signal.throwIfAborted();
              const current = await getCurrentAuthContext();
              if (
                !current ||
                current.sessionId !== authSession.sessionId ||
                current.authContext.mode !== authSession.authContext.mode ||
                current.authContext.username !== authSession.authContext.username
              )
                throw new PeopleNetScopeError();
              const active = await getWorkspaceScope(current.authContext);
              if (
                active.activeCompanyId !== companyId ||
                !active.companies.some(({ id }) => id === companyId)
              )
                throw new PeopleNetScopeError();
            };
            await assertScope();
            const previous: RunRecipe[] = [];
            const marked = branch
              .filter(
                (message) =>
                  message.role === "assistant" &&
                  message.status === "complete" &&
                  readChatSources(message.content).some(
                    ({ kind }) => kind === "peoplenet-call" || kind === "peoplenet-context",
                  ),
              )
              .slice(-3);
            for (const message of marked) {
              const ciphertext = repository.getPeopleNetRecipe(
                companyId,
                conversationId,
                message.id,
              );
              if (!ciphertext) continue;
              const saved = await openPeopleNetRecipe(
                ciphertext,
                recipeScope(authSession, companyId, conversationId, message.id),
              );
              if (saved) previous.push(saved);
            }
            const last = previous.at(-1);
            const continuesPeopleNet =
              turn.kind !== "general" ||
              search.continuesTopic ||
              /^\p{Lu}[\p{L}'-]+(?: \p{Lu}[\p{L}'-]+){1,3}[.!]?$/u.test(latestInput.trim());
            const pending =
              continuesPeopleNet && last?.needsInput && branch.at(-2)?.id === last.messageId
                ? users.find(({ id }) => id === branch.at(-2)?.parentMessageId)
                : undefined;
            const outcome = await runPeopleNetTools({
              auth: authSession,
              companyId,
              signal: request.signal,
              assertScope,
              provider: tools,
              input: latestInput,
              previous,
              pendingQuestion: pending ? textContent(pending.content) : undefined,
              knownOperational: turn.kind !== "general",
              onOperational: async () => {
                await assertScope();
                if (
                  !(await repository.setMessageSources(
                    companyId,
                    conversationId,
                    assistantMessageId,
                    [{ kind: "peoplenet-context", id: "peoplenet", name: "PeopleNet" }],
                  ))
                )
                  throw new PeopleNetScopeError();
              },
            });
            if (outcome.kind === "operational") {
              await assertScope();
              const ciphertext = await sealPeopleNetRecipe(
                recipeScope(authSession, companyId, conversationId, assistantMessageId),
                {
                  calls: outcome.calls,
                  dependencies: outcome.dependencies,
                  needsInput: outcome.needsInput,
                },
              );
              await assertScope();
              if (
                !(await repository.setMessageSources(
                  companyId,
                  conversationId,
                  assistantMessageId,
                  outcome.sources,
                  { ciphertext, generationId: assistantMessage.generationId ?? null },
                ))
              )
                return;
              if (send({ type: "sources", sources: outcome.sources }))
                send({ type: "content", content: [{ type: "text", text: outcome.text }] });
              return;
            }
          }
        }
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
                text:
                  turn.kind === "unavailable"
                    ? NO_ANSWER_SENTENCE
                    : turn.kind === "clarify"
                      ? turn.text
                      : "Consulta de PeopleNet",
              },
            ],
          });
          return;
        }
        chatProvider ??= getChatProvider();
        if (!chatProvider.getStatus().configured) {
          send({
            type: "error",
            errorCode: "CHAT_CONFIG_UNAVAILABLE",
            message: "IA no configurada. Puedes seguir consultando datos de PeopleNet.",
          });
          return;
        }
        if (search.isDocumental && search.needsLiveData && !refs.length) {
          send({ type: "content", content: [{ type: "text", text: NO_ANSWER_SENTENCE }] });
          return;
        }
        const root = search.isDocumental ? knowledgeRoot() : null;
        const generation = root && (await readPointer(root, "active"));
        if (root && generation) {
          const [report, attachments] = await Promise.all([
            retrieveManuals(search.text, { root, generation, signal: request.signal }).catch(
              (error: unknown) => {
                if (request.signal.aborted) throw error;
                console.error("[rag] índice publicado no disponible para la consulta");
                return null;
              },
            ),
            loadChatAttachmentContext(companyId, conversationId, refs, request.signal),
          ]);
          request.signal.throwIfAborted();
          const evidence = report?.evidence ?? [];
          if (!evidence.length && !attachments.items.length && !refs.length) {
            send({ type: "content", content: [{ type: "text", text: NO_ANSWER_SENTENCE }] });
            return;
          }
          if (attachments.sources.length) {
            if (
              !(await getWorkspaceRepository().setMessageSources(
                companyId,
                conversationId,
                assistantMessageId,
                attachments.sources,
              ))
            )
              return;
            if (!send({ type: "sources", sources: attachments.sources })) return;
          }
          const providerMessages: ChatMessage[] = [
            { role: "system", content: manualSystem(evidence, attachments.items.length > 0) },
            ...messages,
          ];
          if (evidence.length || refs.length) {
            providerMessages.splice(Math.max(1, providerMessages.length - 1), 0, {
              role: "user",
              content: manualContext(evidence, attachments.items, attachments.omitted),
            });
          }
          let accumulated = "";
          let shown = "";
          const strict = evidence.length > 0 && refs.length === 0;
          for await (const delta of chatProvider.streamResponse({
            messages: providerMessages,
            abortSignal: request.signal,
          })) {
            if (request.signal.aborted) return;
            accumulated += delta;
            const nextText = groundedAnswer(accumulated, evidence, strict, false);
            if (nextText === shown) continue;
            shown = nextText;
            if (!send({ type: "content", content: [{ type: "text", text: shown }] })) return;
          }
          const validated = citedSources(accumulated, evidence);
          if (validated.length) {
            const sources = [...validated, ...attachments.sources];
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
          const finished = groundedAnswer(accumulated, evidence, strict, true).trimEnd();
          if (finished !== shown)
            send({ type: "content", content: [{ type: "text", text: finished }] });
          return;
        }
        const [retrieved, attachments] = await Promise.all([
          search.isDocumental
            ? retrieveRelevantChunks(search.text, { signal: request.signal }).catch(
                (error: unknown) => {
                  if (request.signal.aborted) throw error;
                  console.error("[knowledge] error durante la recuperación");
                  return [];
                },
              )
            : Promise.resolve([]),
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
          content: search.isDocumental
            ? buildRagSystemMessage({
                hasManuals: chunks.length > 0,
                hasAttachments: attachments.items.length > 0,
              })
            : buildGeneralSystemMessage(refs.length > 0),
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
          if (error instanceof PeopleNetScopeError) {
            send({
              type: "error",
              errorCode: "COMPANY_MISMATCH",
              message: "La consulta ya no pertenece a la sociedad activa.",
            });
            return;
          }
          console.error(
            "[chat] provider streaming failed",
            error instanceof Error ? { name: error.name } : { name: "unknown" },
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
