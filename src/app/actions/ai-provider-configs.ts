"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getWorkspaceSnapshot } from "@/lib/workspace/service";
import { getDatabase } from "@/server/database/client";
import { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import type {
  AiProviderConfigInput,
  AiProviderConfigView,
} from "@/types/ai-provider-config";
import type { ActionResult } from "@/lib/local-database/dtos";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const errorResult = (error: unknown): ActionResult<never> => {
  const message = error instanceof Error ? error.message : "No se pudo completar la operación.";
  return {
    ok: false,
    errorCode: "AI_PROVIDER_CONFIG_OPERATION_FAILED",
    message: message.length > 180 ? "No se pudo completar la operación." : message,
  };
};

const readTrimmedString = (value: unknown, label: string): string => {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} es obligatorio.`);
  return value.trim();
};

const validateInput = (value: unknown): AiProviderConfigInput => {
  if (!isRecord(value)) throw new Error("La configuración de IA no es válida.");
  const name = readTrimmedString(value.name, "El nombre");
  const baseUrl = readTrimmedString(value.baseUrl, "La Base URL");
  const apiKey = readTrimmedString(value.apiKey, "La API key");

  if (name.length > 120) throw new Error("El nombre no puede superar 120 caracteres.");
  if (apiKey.length > 4096) throw new Error("La API key no puede superar 4096 caracteres.");

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(baseUrl);
  } catch {
    throw new Error("La Base URL debe ser una URL válida.");
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error("La Base URL debe usar http o https.");
  }
  if (baseUrl.length > 2048) throw new Error("La Base URL no puede superar 2048 caracteres.");

  return { name, baseUrl, apiKey };
};

const toSafeView = (value: unknown): AiProviderConfigView => {
  if (
    !isRecord(value) ||
    typeof value.id !== "string" ||
    typeof value.name !== "string" ||
    typeof value.baseUrl !== "string" ||
    typeof value.hasApiKey !== "boolean"
  ) {
    throw new Error("La configuración de IA devuelta no es válida.");
  }
  return {
    id: value.id,
    name: value.name,
    baseUrl: value.baseUrl,
    hasApiKey: value.hasApiKey,
  };
};

const requireActiveCompany = async () => {
  const authSession = await requireAuthContext();
  const snapshot = await getWorkspaceSnapshot(authSession.authContext);
  if (!snapshot.activeCompanyId) throw new Error("No hay una empresa activa.");
  return snapshot.activeCompanyId;
};

const getRepository = () =>
  createAiProviderConfigRepository(getDatabase(), createDpapiAdapter());

export async function getAiProviderConfigsAction(): Promise<ActionResult<AiProviderConfigView[]>> {
  try {
    const companyId = await requireActiveCompany();
    return { ok: true, data: getRepository().list(companyId).map(toSafeView) };
  } catch (error) {
    return errorResult(error);
  }
}

export async function createAiProviderConfigAction(
  input: AiProviderConfigInput,
): Promise<ActionResult<AiProviderConfigView>> {
  try {
    const companyId = await requireActiveCompany();
    return {
      ok: true,
      data: toSafeView(await getRepository().create(companyId, validateInput(input))),
    };
  } catch (error) {
    return errorResult(error);
  }
}

export async function deleteAiProviderConfigAction(
  id: string,
): Promise<ActionResult<null>> {
  try {
    const configId = readTrimmedString(id, "La configuración");
    if (configId.length > 160) throw new Error("La configuración no es válida.");
    const companyId = await requireActiveCompany();
    await getRepository().delete(companyId, configId);
    return { ok: true, data: null };
  } catch (error) {
    return errorResult(error);
  }
}
