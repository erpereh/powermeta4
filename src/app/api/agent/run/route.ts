import { NextResponse } from "next/server";

import { getCurrentAuthContext, deleteSessionCookie } from "@/lib/auth/session";
import { runAgentTurn } from "@/lib/agent/runner";
import type { AgentContentPart } from "@/lib/agent/runner";
import { resolveUsableProviderConfig } from "@/lib/agent/llm/provider";
import { logProviderSelection } from "@/lib/agent/llm/provider-selection-log";
import { buildAgentTools } from "@/lib/agent/tools/build";
import { visibleMessages } from "@/lib/chat/visible-messages";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getMeta4EmployeeDetail } from "@/lib/meta4/users/employee-detail-service";
import { listMeta4Users } from "@/lib/meta4/users/service";
import { getWorkspaceRepository, getWorkspaceSnapshot } from "@/lib/workspace/service";
import { getDatabase } from "@/server/database/client";
import { createAgentPrivacyRepository } from "@/server/database/repositories/agent-privacy-repository";
import { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import type { CompanyId } from "@/types/workspace";
import type { MessageContent } from "@/types/chat";

export const runtime = "nodejs";

const LIST_CACHE_TTL_MS = 60_000;
const listCache = new Map<
  string,
  { expiresAt: number; society: string; users: Awaited<ReturnType<typeof listMeta4Users>>["users"] }
>();

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const readId = (value: unknown): string | null =>
  typeof value === "string" && value.trim() && value.length <= 160 ? value.trim() : null;

const toMessageContent = (parts: AgentContentPart[]): MessageContent =>
  parts as unknown as MessageContent;

const encodeSse = (payload: unknown): string => `data: ${JSON.stringify(payload)}\n\n`;

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
  const requestedProviderConfigId = readId(body.providerConfigId);
  if (!companyId || !conversationId || !assistantMessageId) {
    return NextResponse.json({ ok: false, errorCode: "INVALID_BODY" }, { status: 400 });
  }

  const snapshot = await getWorkspaceSnapshot(authSession.authContext);
  if (snapshot.activeCompanyId !== companyId) {
    return NextResponse.json({ ok: false, errorCode: "COMPANY_MISMATCH" }, { status: 403 });
  }

  const database = getDatabase();
  const dpapi = createDpapiAdapter();
  const privacy = createAgentPrivacyRepository(database, dpapi);
  const providerRepo = createAiProviderConfigRepository(database, dpapi);
  const usable = providerRepo.listUsable(companyId as CompanyId);
  const persistedId =
    snapshot.workspaces[companyId as CompanyId]?.preferences.selectedProviderConfigId ?? null;
  logProviderSelection({
    source: "agent-run",
    companyId,
    configCount: usable.length,
    configIds: usable.map((config) => config.id),
    selectedProviderConfigId: requestedProviderConfigId,
    requestedId: requestedProviderConfigId,
    persistedId,
    model: usable.find((config) => config.id === (requestedProviderConfigId ?? persistedId))?.model ?? null,
    hasApiKey:
      usable.find((config) => config.id === (requestedProviderConfigId ?? persistedId))?.hasApiKey ??
      false,
  });

  let chat;
  try {
    chat = await getWorkspaceRepository().getConversation(companyId as CompanyId, conversationId);
  } catch {
    return NextResponse.json({ ok: false, errorCode: "CONVERSATION_NOT_FOUND" }, { status: 404 });
  }

  const cacheKey = `${authSession.authContext.username}:${companyId}`;
  const listUsers = async () => {
    const cached = listCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return { society: cached.society, users: cached.users };
    }
    const listed = await listMeta4Users(authSession);
    listCache.set(cacheKey, {
      expiresAt: Date.now() + LIST_CACHE_TTL_MS,
      society: listed.society,
      users: listed.users,
    });
    return listed;
  };

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (payload: unknown) => controller.enqueue(encoder.encode(encodeSse(payload)));
      try {
        const result = await runAgentTurn({
          companyId: companyId as CompanyId,
          conversationId,
          assistantMessageId,
          messages: visibleMessages(chat),
          privacy,
          listUsers,
          tools: buildAgentTools({
            listUsers: async () => (await listUsers()).users,
            getDetail: (employeeId) => getMeta4EmployeeDetail(employeeId),
          }),
          resolveProvider: () =>
            resolveUsableProviderConfig({
              companyId: companyId as CompanyId,
              requestedId: requestedProviderConfigId,
              persistedId,
              repository: providerRepo,
            }),
          fetchImpl: fetch,
          abortSignal: request.signal,
        });
        send({ type: "content", content: toMessageContent(result.content) });
      } catch (error) {
        const message =
          error instanceof Error && error.message
            ? error.message
            : "No se pudo completar la respuesta del asistente.";
        send({ type: "error", message });
      } finally {
        controller.close();
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
