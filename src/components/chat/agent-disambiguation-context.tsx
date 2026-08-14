"use client";

import { createContext, useContext } from "react";

export type ConfirmDisambiguation = (pendingId: string, choiceId: string) => Promise<void>;

const AgentDisambiguationContext = createContext<ConfirmDisambiguation | null>(null);

export const AgentDisambiguationProvider = AgentDisambiguationContext.Provider;

export const useConfirmDisambiguation = (): ConfirmDisambiguation | null =>
  useContext(AgentDisambiguationContext);
