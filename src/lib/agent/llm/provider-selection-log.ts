export type ProviderSelectionLog = {
  source: string;
  companyId: string;
  configCount: number;
  configIds: readonly string[];
  selectedProviderConfigId?: string | null;
  requestedId?: string | null;
  persistedId?: string | null;
  resolvedConfigId?: string | null;
  model?: string | null;
  hasApiKey?: boolean;
};

export const logProviderSelection = (entry: ProviderSelectionLog): void => {
  console.info("[provider-config]", {
    source: entry.source,
    companyId: entry.companyId,
    configCount: entry.configCount,
    configIds: [...entry.configIds],
    selectedProviderConfigId: entry.selectedProviderConfigId ?? null,
    requestedId: entry.requestedId ?? null,
    persistedId: entry.persistedId ?? null,
    resolvedConfigId: entry.resolvedConfigId ?? null,
    model: entry.model ?? null,
    hasApiKey: entry.hasApiKey === true,
  });
};
