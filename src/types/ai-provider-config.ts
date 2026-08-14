export type AiProviderConfigView = {
  id: string;
  name: string;
  baseUrl: string;
  hasApiKey: boolean;
};

export type AiProviderConfigInput = {
  name: string;
  baseUrl: string;
  apiKey: string;
};
