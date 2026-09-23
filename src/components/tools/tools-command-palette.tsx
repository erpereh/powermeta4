"use client";

import { type CommandItem } from "@/components/system";
import {
  TOOL_ICONS,
  TOOL_MODULES,
  TOOL_REGISTRY,
  type ToolDefinition,
} from "@/lib/tools/registry";

export function createToolsCommandItems({
  onSelectTool,
  onUnavailable,
}: {
  onSelectTool: (tool: ToolDefinition) => void;
  onUnavailable: () => void;
}): CommandItem[] {
  return TOOL_REGISTRY.map((tool) => {
    const module = TOOL_MODULES.find((entry) => entry.id === tool.moduleId);
    return {
      id: tool.id,
      label: tool.name,
      group: module?.name ?? "Acciones",
      keywords: [...tool.keywords, tool.description, module?.name ?? ""],
      icon: TOOL_ICONS[tool.icon],
      badge: tool.implemented ? undefined : (
        <span className="text-xs text-muted-foreground">Próximamente</span>
      ),
      onSelect: () => {
        if (!tool.implemented) {
          onUnavailable();
          return;
        }
        onSelectTool(tool);
      },
    };
  });
}
