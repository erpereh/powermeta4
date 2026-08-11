"use server";

import { requireAuthContext } from "@/lib/auth/session";
import type { ActionResult, WorkspaceSnapshot } from "@/lib/local-database/dtos";
import type {
  Chat,
  Message,
  MessageContent,
  MessageRole,
  PersistedMessageStatus,
} from "@/types/chat";
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

const requireMutationId = (value: string | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[4-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) {
    throw new Error("El clientMutationId no es válido.");
  }
  return value;
};

const requireErrorCode = (value: string | null | undefined): string | null | undefined => {
  if (value === null || value === undefined) return value;
  if (!/^[A-Z][A-Z0-9_]{0,63}$/.test(value)) throw new Error("El código de error no es válido.");
  return value;
};

export async function getWorkspaceSnapshotAction(): Promise<ActionResult<WorkspaceSnapshot>> {
  try {
    const authSession = await requireAuthContext();
    return ok(await getWorkspaceSnapshot(authSession.authContext));
  } catch (error) {
    return errorResult(error);
  }
}

export async function createCompanyAction(
  name: string,
  clientMutationId?: string,
  companyId?: string,
): Promise<ActionResult<Company>> {
  try {
    await requireAuthContext();
    return ok(
      await getWorkspaceRepository().createCompany({
        name,
        id: companyId ? requireId(companyId, "La empresa") : undefined,
        clientMutationId: requireMutationId(clientMutationId),
      }),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function deleteCompanyAction(
  companyId: CompanyId,
  clientMutationId?: string,
): Promise<ActionResult<{ activeCompanyId: CompanyId }>> {
  try {
    await requireAuthContext();
    return ok({
      activeCompanyId: await getWorkspaceRepository().deleteCompany(
        requireId(companyId, "La empresa"),
        requireMutationId(clientMutationId),
      ),
    });
  } catch (error) {
    return errorResult(error);
  }
}

export async function setActiveCompanyAction(
  companyId: CompanyId,
  clientMutationId?: string,
): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().setActiveCompany(
      requireId(companyId, "La empresa"),
      requireMutationId(clientMutationId),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function createConversationAction(
  companyId: CompanyId,
  conversationId?: string,
  clientMutationId?: string,
): Promise<ActionResult<Chat>> {
  try {
    await requireAuthContext();
    return ok(
      await getWorkspaceRepository().createConversation(
        requireId(companyId, "La empresa"),
        conversationId ? requireId(conversationId, "La conversación") : undefined,
        requireMutationId(clientMutationId),
      ),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function selectConversationAction(
  companyId: CompanyId,
  conversationId: string,
  clientMutationId?: string,
): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().setActiveConversation(
      requireId(companyId, "La empresa"),
      requireId(conversationId, "La conversación"),
      requireMutationId(clientMutationId),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function deleteConversationAction(
  companyId: CompanyId,
  conversationId: string,
  clientMutationId?: string,
): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().deleteConversation(
      requireId(companyId, "La empresa"),
      requireId(conversationId, "La conversación"),
      requireMutationId(clientMutationId),
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
  clientMutationId?: string,
): Promise<ActionResult<Chat>> {
  try {
    await requireAuthContext();
    return ok(
      await getWorkspaceRepository().updateConversation(
        requireId(companyId, "La empresa"),
        requireId(conversationId, "La conversación"),
        patch,
        requireMutationId(clientMutationId),
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
  status: PersistedMessageStatus;
  parentMessageId?: string | null;
  generationId?: string | null;
  sequence?: number;
  errorCode?: string | null;
  clientMutationId?: string;
}): Promise<ActionResult<Message>> {
  try {
    await requireAuthContext();
    return ok(
      await getWorkspaceRepository().upsertMessage({
        ...input,
        companyId: requireId(input.companyId, "La empresa"),
        conversationId: requireId(input.conversationId, "La conversación"),
        id: requireId(input.id, "El mensaje"),
        errorCode: requireErrorCode(input.errorCode),
        clientMutationId: requireMutationId(input.clientMutationId),
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
  status?: PersistedMessageStatus;
  generationId?: string | null;
  sequence?: number;
  errorCode?: string | null;
  clientMutationId?: string;
}): Promise<ActionResult<Message>> {
  try {
    await requireAuthContext();
    return ok(
      await getWorkspaceRepository().updateMessage({
        ...input,
        companyId: requireId(input.companyId, "La empresa"),
        conversationId: requireId(input.conversationId, "La conversación"),
        messageId: requireId(input.messageId, "El mensaje"),
        errorCode: requireErrorCode(input.errorCode),
        clientMutationId: requireMutationId(input.clientMutationId),
      }),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function finalizeMessageAction(input: {
  companyId: CompanyId;
  conversationId: string;
  messageId: string;
  content?: MessageContent;
  status: Extract<PersistedMessageStatus, "complete" | "cancelled" | "failed">;
  generationId?: string | null;
  sequence: number;
  errorCode?: string | null;
  clientMutationId?: string;
}): Promise<ActionResult<Message>> {
  try {
    await requireAuthContext();
    if (input.status !== "complete" && input.status !== "cancelled" && input.status !== "failed") {
      throw new Error("El estado terminal no es válido.");
    }
    return ok(
      await getWorkspaceRepository().finalizeMessage({
        ...input,
        companyId: requireId(input.companyId, "La empresa"),
        conversationId: requireId(input.conversationId, "La conversación"),
        messageId: requireId(input.messageId, "El mensaje"),
        errorCode: requireErrorCode(input.errorCode),
        clientMutationId: requireMutationId(input.clientMutationId),
      }),
    );
  } catch (error) {
    return errorResult(error);
  }
}

export async function setConversationHeadAction(input: {
  companyId: CompanyId;
  conversationId: string;
  headMessageId: string | null;
  clientMutationId?: string;
}): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().setConversationHead(
      requireId(input.companyId, "La empresa"),
      requireId(input.conversationId, "La conversación"),
      input.headMessageId ? requireId(input.headMessageId, "El mensaje") : null,
      requireMutationId(input.clientMutationId),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function setSelectedModelAction(
  companyId: CompanyId,
  modelId: string,
  clientMutationId?: string,
): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().setSelectedModel(
      requireId(companyId, "La empresa"),
      requireId(modelId, "El modelo"),
      requireMutationId(clientMutationId),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}

export async function recordToolVisitAction(
  companyId: CompanyId,
  toolId: string,
  clientMutationId?: string,
): Promise<ActionResult<null>> {
  try {
    await requireAuthContext();
    await getWorkspaceRepository().recordToolVisit(
      requireId(companyId, "La empresa"),
      requireId(toolId, "La herramienta"),
      requireMutationId(clientMutationId),
    );
    return ok(null);
  } catch (error) {
    return errorResult(error);
  }
}
