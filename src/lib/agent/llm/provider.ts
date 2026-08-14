import { AgentProviderConfigError } from "@/lib/agent/errors";
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
  if (!selected) {
    throw new AgentProviderConfigError("Configura un modelo en Ajustes para usar el asistente.");
  }
  return options.repository.resolveRuntime(options.companyId, selected);
};
