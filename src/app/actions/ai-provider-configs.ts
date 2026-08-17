"use server";

import { ProviderValidationError } from "@/lib/agent/errors";
import { probeOpenAiCompatibleProvider } from "@/lib/agent/llm/validate-provider";
import { normalizeProviderBaseUrl } from "@/lib/agent/llm/provider-url";
import { requireAuthContext } from "@/lib/auth/session";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getWorkspaceRepository, getWorkspaceSnapshot } from "@/lib/workspace/service";
import { getDatabase } from "@/server/database/client";
import { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import type {
  AiProviderConfigInput,
  AiProviderConfigUpdate,
  AiProviderConfigView,
} from "@/types/ai-provider-config";
import type { ActionResult } from "@/lib/local-database/dtos";
import type { CompanyId } from "@/types/workspace";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const errorResult = (error: unknown): ActionResult<never> => {
  if (error instanceof ProviderValidationError) {
    return { ok: false, errorCode: error.errorCode, message: error.message };
  }
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

const validateBaseFields = (value: Record<string, unknown>) => {
  const name = readTrimmedString(value.name, "El nombre");
  const rawBaseUrl = readTrimmedString(value.baseUrl, "La Base URL");
  const model = readTrimmedString(value.model, "El model id");

  if (name.length > 120) throw new Error("El nombre no puede superar 120 caracteres.");
  if (model.length > 200) throw new Error("El model id no puede superar 200 caracteres.");
  if (rawBaseUrl.length > 2048) throw new Error("La Base URL no puede superar 2048 caracteres.");

  const baseUrl = normalizeProviderBaseUrl(rawBaseUrl);
  return { name, baseUrl, model };
};

const validateInput = (value: unknown): AiProviderConfigInput => {
  if (!isRecord(value)) throw new Error("La configuración de IA no es válida.");
  const apiKey = readTrimmedString(value.apiKey, "La API key");
  if (apiKey.length > 4096) throw new Error("La API key no puede superar 4096 caracteres.");
  return { ...validateBaseFields(value), apiKey };
};

const validateUpdate = (value: unknown): AiProviderConfigUpdate => {
  if (!isRecord(value)) throw new Error("La configuración de IA no es válida.");
  const base = validateBaseFields(value);
  if (value.apiKey === undefined || value.apiKey === "") return base;
  const apiKey = readTrimmedString(value.apiKey, "La API key");
  if (apiKey.length > 4096) throw new Error("La API key no puede superar 4096 caracteres.");
  return { ...base, apiKey };
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
  const model =
    typeof value.model === "string" && value.model.trim() ? value.model.trim() : null;
  return {
    id: value.id,
    name: value.name,
    baseUrl: value.baseUrl,
    model,
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

const selectIfNoneSelected = async (companyId: CompanyId, configId: string): Promise<void> => {
  const authSession = await requireAuthContext();
  const snapshot = await getWorkspaceSnapshot(authSession.authContext);
  const selected =
    snapshot.workspaces[companyId]?.preferences.selectedProviderConfigId ?? null;
  if (!selected) {
    await getWorkspaceRepository().setSelectedProviderConfig(companyId, configId);
  }
};

export async function getAiProviderConfigsAction(): Promise<ActionResult<AiProviderConfigView[]>> {
  try {
    const companyId = await requireActiveCompany();
    return { ok: true, data: getRepository().list(companyId).map(toSafeView) };
  } catch (error) {
    return errorResult(error);
  }
}

export async function probeAiProviderConfigAction(
  input: AiProviderConfigInput,
): Promise<ActionResult<null>> {
  try {
    await requireActiveCompany();
    const validated = validateInput(input);
    await probeOpenAiCompatibleProvider({
      baseUrl: validated.baseUrl,
      apiKey: validated.apiKey,
      model: validated.model,
    });
    return { ok: true, data: null };
  } catch (error) {
    return errorResult(error);
  }
}

export async function createAiProviderConfigAction(
  input: AiProviderConfigInput,
): Promise<ActionResult<AiProviderConfigView>> {
  try {
    const companyId = await requireActiveCompany();
    const validated = validateInput(input);
    await probeOpenAiCompatibleProvider({
      baseUrl: validated.baseUrl,
      apiKey: validated.apiKey,
      model: validated.model,
    });
    const created = await getRepository().create(companyId, validated);
    await selectIfNoneSelected(companyId, created.id);
    return { ok: true, data: toSafeView(created) };
  } catch (error) {
    return errorResult(error);
  }
}

export async function updateAiProviderConfigAction(
  id: string,
  input: AiProviderConfigUpdate,
): Promise<ActionResult<AiProviderConfigView>> {
  try {
    const configId = readTrimmedString(id, "La configuración");
    if (configId.length > 160) throw new Error("La configuración no es válida.");
    const companyId = await requireActiveCompany();
    const validated = validateUpdate(input);
    const repository = getRepository();
    const apiKey =
      validated.apiKey ?? (await repository.readApiKey(companyId, configId));
    await probeOpenAiCompatibleProvider({
      baseUrl: validated.baseUrl,
      apiKey,
      model: validated.model,
    });
    return {
      ok: true,
      data: toSafeView(await repository.update(companyId, configId, validated)),
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
    const authSession = await requireAuthContext();
    const snapshot = await getWorkspaceSnapshot(authSession.authContext);
    if (!snapshot.activeCompanyId) throw new Error("No hay una empresa activa.");
    await getRepository().delete(snapshot.activeCompanyId, configId);
    await getWorkspaceSnapshot(authSession.authContext);
    return { ok: true, data: null };
  } catch (error) {
    return errorResult(error);
  }
}
