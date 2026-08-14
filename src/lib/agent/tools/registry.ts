import type { AnyAgentTool } from "@/lib/agent/tools/types";

const tools = new Map<string, AnyAgentTool>();

export const registerAgentTool = (tool: AnyAgentTool): void => {
  tools.set(tool.id, tool);
};

export const getAgentTool = (id: string): AnyAgentTool | undefined => tools.get(id);

export const listAgentTools = (): AnyAgentTool[] => [...tools.values()];

export const clearAgentToolsForTests = (): void => {
  tools.clear();
};

export const toOpenAiToolDefinitions = (definitions: readonly AnyAgentTool[]) =>
  definitions.map((tool) => ({
    type: "function" as const,
    function: {
      name: tool.id,
      description: tool.description,
      parameters: tool.jsonSchema,
    },
  }));
