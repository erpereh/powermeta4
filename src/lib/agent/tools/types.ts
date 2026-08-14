import { z } from "zod";

export type AgentToolMutation = "read" | "write";
export type AgentToolPrivacyInput = "entity-refs-only";
export type AgentToolPrivacyOutput = "local-template" | "tokenized-values";

export type AgentToolContext = {
  conversationId: string;
  companyId: string;
  resolveEmployeeRef: (token: string) => Promise<string>;
};

export type AgentToolDefinition<TInput, TResult> = {
  id: string;
  description: string;
  inputSchema: z.ZodType<TInput>;
  jsonSchema: Record<string, unknown>;
  permissions: readonly string[];
  mutation: AgentToolMutation;
  privacy: {
    input: AgentToolPrivacyInput;
    output: AgentToolPrivacyOutput;
  };
  execute: (input: TInput, context: AgentToolContext) => Promise<TResult>;
  render: (result: TResult) => string;
};

export type AnyAgentTool = AgentToolDefinition<unknown, unknown>;
