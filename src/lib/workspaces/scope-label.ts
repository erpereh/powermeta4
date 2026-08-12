import type { AuthView } from "@/types/session";

export const getWorkspaceScopeLabel = (auth: AuthView | null | undefined): string => {
  if (!auth) return "—";
  if (auth.mode === "debug") return "Modo desarrollo";
  if (auth.societyCode) return auth.societyCode;
  return "Meta4";
};
