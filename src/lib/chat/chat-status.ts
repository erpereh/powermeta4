export type ChatStatus = {
  configured: boolean;
  model: string | null;
};

// Deliberately never surfaces which model/provider is configured (same
// reasoning as the system prompt in src/lib/knowledge/prompt.ts: the
// assistant's own identity, not the underlying vendor). Only shown when
// something is actually wrong, so misconfiguration is still visible.
export const getChatStatusLabel = (status: ChatStatus): string => {
  const model = status.model?.trim();
  return status.configured && model ? "" : "IA no configurada";
};

export const isChatSendDisabled = (status: ChatStatus, isRunning: boolean): boolean =>
  isRunning || !status.configured || !status.model?.trim();
