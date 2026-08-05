"use server";

import { requireSession } from "@/lib/auth/session";
import type { ActionResult, WorkspaceSnapshot } from "@/lib/local-database/dtos";
import type { Chat, Message, MessageContent, MessageRole, MessageStatus } from "@/types/chat";
import type { Company, CompanyId } from "@/types/workspace";

import { getWorkspaceRepository, getWorkspaceSnapshot } from "@/lib/workspace/service";

const ok = <T>(data: T): ActionResult<T> => ({ ok: true, data });

const errorResult = (error: unknown): ActionResult<never> => {
  const message = error instanceof Error ? error.message : "No se pudo completar la operación.";
  const safeMessage = message.length > 180 ? "No se pudo completar la operación." : message;
  return { ok: false, errorCode: "WORKSPACE_OPERATION_FAILED", message: safeMessage };
};

const requireId = (value: string, label: string): string => {
  if (!value || value.length > 160) throw new Error(`${label} no es válido.`);
  return value;
};

export async function getWorkspaceSnapshotAction(): Promise<ActionResult<WorkspaceSnapshot>> {
  try {
    const session = await requireSession();
    return ok(await getWorkspaceSnapshot(session.username));
  } catch (error) {
    return errorResult(error);
  }
}

export async function createCompanyAction(name: string): Promise<ActionResult<Company>> {
  try {
    await requireSession();
    return ok(await getWorkspaceRepository().createCompany({ name }));
  } catch (error) {
    return errorResult(error);
  }
}

export async function deleteCompanyAction(
  companyId: CompanyId,
): Promise<ActionResult<{ activeCompanyId: CompanyId }>> {
  try {
    await requireSession();
    return ok({
      activeCompanyId: await getWorkspaceRepository().deleteCompany(
        requireId(companyId, "La empresa"),
      ),
    });
  } catch (error) {
    return errorResult(error);
  }
}

export async function setActiveCompanyAction(companyId: CompanyId): Promise<ActionResult<null>> {
  try {
    await requireSession();
    await getWorkspaceRepository().setActiveCompany(requireId(companyId, "La empresa"));
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function createConversationAction(
  companyId: CompanyId,
  conversationId?: string,
): Promise<ActionResult<Chat>> {
  try {
    await requireSession();
    return ok(
      await getWorkspaceRepository().createConversation(
        requireId(companyId, "La empresa"),
        conversationId ? requireId(conversationId, "La conversación") : undefined,
      ),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function selectConversationAction(
  companyId: CompanyId,
  conversationId: string,
): Promise<ActionResult<null>> {
  try {
    await requireSession();
    await getWorkspaceRepository().setActiveConversation(
      requireId(companyId, "La empresa"),
      requireId(conversationId, "La conversación"),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function deleteConversationAction(
  companyId: CompanyId,
  conversationId: string,
): Promise<ActionResult<null>> {
  try {
    await requireSession();
    await getWorkspaceRepository().deleteConversation(
      requireId(companyId, "La empresa"),
      requireId(conversationId, "La conversación"),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function updateConversationAction(
  companyId: CompanyId,
  conversationId: string,
  patch: { title?: string; favorite?: boolean; icon?: string | null; iconColor?: string | null },
): Promise<ActionResult<Chat>> {
  try {
    await requireSession();
    return ok(
      await getWorkspaceRepository().updateConversation(
        requireId(companyId, "La empresa"),
        requireId(conversationId, "La conversación"),
        patch,
      ),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function upsertMessageAction(input: {
  companyId: CompanyId;
  conversationId: string;
  id: string;
  role: MessageRole;
  content: MessageContent;
  status: MessageStatus;
}): Promise<ActionResult<Message>> {
  try {
    await requireSession();
    return ok(
      await getWorkspaceRepository().upsertMessage({
        ...input,
        companyId: requireId(input.companyId, "La empresa"),
        conversationId: requireId(input.conversationId, "La conversación"),
        id: requireId(input.id, "El mensaje"),
      }),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function updateMessageAction(input: {
  companyId: CompanyId;
  conversationId: string;
  messageId: string;
  content?: MessageContent;
  status?: MessageStatus;
}): Promise<ActionResult<Message>> {
  try {
    await requireSession();
    return ok(
      await getWorkspaceRepository().updateMessage({
        ...input,
        companyId: requireId(input.companyId, "La empresa"),
        conversationId: requireId(input.conversationId, "La conversación"),
        messageId: requireId(input.messageId, "El mensaje"),
      }),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function setSelectedModelAction(
  companyId: CompanyId,
  modelId: string,
): Promise<ActionResult<null>> {
  try {
    await requireSession();
    await getWorkspaceRepository().setSelectedModel(
      requireId(companyId, "La empresa"),
      requireId(modelId, "El modelo"),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function recordToolVisitAction(
  companyId: CompanyId,
  toolId: string,
): Promise<ActionResult<null>> {
  try {
    await requireSession();
    await getWorkspaceRepository().recordToolVisit(
      requireId(companyId, "La empresa"),
      requireId(toolId, "La herramienta"),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}
