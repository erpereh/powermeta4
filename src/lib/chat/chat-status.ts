export type ChatStatus = {
  configured: boolean;
  model: string | null;
};

export const getChatStatusLabel = (status: ChatStatus): string => {
  const model = status.model?.trim();
  return status.configured && model ? `IA · ${model}` : "IA no configurada";
};

export const isChatSendDisabled = (status: ChatStatus, isRunning: boolean): boolean =>
  isRunning || !status.configured || !status.model?.trim();
