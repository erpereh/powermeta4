import { AgentProviderConfigError, AgentProviderRuntimeError } from "@/lib/agent/errors";
import { logProviderSelection } from "@/lib/agent/llm/provider-selection-log";
import type { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import type { AiProviderRuntimeConfig } from "@/server/database/repositories/ai-provider-config-repository";
import type { CompanyId } from "@/types/workspace";

export const resolveUsableProviderConfig = async (options: {
  companyId: CompanyId;
  requestedId: string | null;
  persistedId: string | null;
  repository: ReturnType<typeof createAiProviderConfigRepository>;
}): Promise<AiProviderRuntimeConfig> => {
  const usable = options.repository.listUsable(options.companyId);
  const requested =
    options.requestedId && usable.some((config) => config.id === options.requestedId)
      ? options.requestedId
      : null;
  const persisted =
    options.persistedId && usable.some((config) => config.id === options.persistedId)
      ? options.persistedId
      : null;
  const selected = requested ?? persisted;
  logProviderSelection({
    source: "resolve-usable",
    companyId: options.companyId,
    configCount: usable.length,
    configIds: usable.map((config) => config.id),
    requestedId: options.requestedId,
    persistedId: options.persistedId,
    resolvedConfigId: selected,
    model: selected ? (usable.find((config) => config.id === selected)?.model ?? null) : null,
    hasApiKey: selected
      ? (usable.find((config) => config.id === selected)?.hasApiKey ?? false)
      : false,
  });
  if (!selected) {
    throw new AgentProviderConfigError("Configura un modelo en Ajustes para usar el asistente.");
  }
  try {
    return await options.repository.resolveRuntime(options.companyId, selected);
  } catch (error) {
    if (error instanceof AgentProviderConfigError) throw error;
    throw new AgentProviderRuntimeError(
      "No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.",
    );
  }
};
