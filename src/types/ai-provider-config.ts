export type AiProviderConfigView = {
  id: string;
  name: string;
  baseUrl: string;
  model: string | null;
  hasApiKey: boolean;
};

export type AiProviderConfigInput = {
  name: string;
  baseUrl: string;
  model: string;
  apiKey: string;
};

export type AiProviderConfigUpdate = {
  name: string;
  baseUrl: string;
  model: string;
  apiKey?: string;
};

export const isUsableAiProviderConfig = (config: AiProviderConfigView): boolean => {
  if (!config.hasApiKey) return false;
  if (!config.model?.trim()) return false;
  try {
    const parsed = new URL(config.baseUrl);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};
