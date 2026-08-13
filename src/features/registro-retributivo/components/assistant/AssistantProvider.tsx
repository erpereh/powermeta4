"use client";

import { createContext, useContext, type ReactNode } from "react";

type AssistantContextValue = {
  readonly ready: boolean;
  readonly continuePersonInAssistant: (personId: string) => Promise<void>;
};

const AssistantContext = createContext<AssistantContextValue | undefined>(undefined);

export function AssistantProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <AssistantContext.Provider value={undefined}>{children}</AssistantContext.Provider>;
}

export function useOptionalAssistant(): AssistantContextValue | undefined {
  return useContext(AssistantContext);
}

export function useAssistant(): AssistantContextValue {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error("El asistente retributivo todavía no está disponible.");
  }
  return context;
}
