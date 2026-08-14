"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { rewriteDisambiguationText } from "@/lib/agent/runner";
import type { ActionResult } from "@/lib/local-database/dtos";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getWorkspaceSnapshot } from "@/lib/workspace/service";
import { getDatabase } from "@/server/database/client";
import { createAgentPrivacyRepository } from "@/server/database/repositories/agent-privacy-repository";
import type { CompanyId } from "@/types/workspace";

const errorResult = (error: unknown): ActionResult<never> => {
  const message = error instanceof Error ? error.message : "No se pudo completar la operación.";
  return {
    ok: false,
    errorCode: "AGENT_OPERATION_FAILED",
    message: message.length > 180 ? "No se pudo completar la operación." : message,
  };
};

const readId = (value: unknown, label: string): string => {
  if (typeof value !== "string" || !value.trim() || value.length > 160) {
    throw new Error(`${label} no es válido.`);
  }
  return value.trim();
};

export async function confirmAgentDisambiguationAction(input: {
  companyId: CompanyId;
  conversationId: string;
  pendingId: string;
  choiceId: string;
}): Promise<ActionResult<{ rewrittenText: string }>> {
  try {
    const authSession = await requireAuthContext();
    const snapshot = await getWorkspaceSnapshot(authSession.authContext);
    const companyId = readId(input.companyId, "La empresa");
    if (snapshot.activeCompanyId !== companyId) {
      throw new Error("La empresa no coincide con la sesión activa.");
    }
    const conversationId = readId(input.conversationId, "La conversación");
    const pendingId = readId(input.pendingId, "La desambiguación");
    const choiceId = readId(input.choiceId, "La opción");
    const privacy = createAgentPrivacyRepository(getDatabase(), createDpapiAdapter());
    const pending = privacy.getPendingDisambiguation(
      pendingId,
      companyId as CompanyId,
      conversationId,
    );
    if (!pending) throw new Error("La desambiguación ya no está disponible.");
    const chosen = pending.candidates.find((candidate) => candidate.choiceId === choiceId);
    if (!chosen) throw new Error("La opción seleccionada no es válida.");
    await privacy.bindEmployee(conversationId, companyId as CompanyId, chosen.employeeId);
    await privacy.deletePendingDisambiguation(pendingId, companyId as CompanyId);
    return {
      ok: true,
      data: { rewrittenText: rewriteDisambiguationText(pending.originalText, chosen.fullName) },
    };
  } catch (error) {
    return errorResult(error);
  }
}
