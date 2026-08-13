"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  TOOL_ICONS,
  TOOL_MODULES,
  isToolRouteNavigable,
  searchTools,
  type RegistryTool,
} from "@/lib/tools/registry";

type ToolsCommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectTool: (tool: RegistryTool) => void;
  onUnavailable: () => void;
};

export function ToolsCommandPalette({
  open,
  onOpenChange,
  onSelectTool,
  onUnavailable,
}: ToolsCommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchTools(query), [query]);

  const groupedTools = useMemo(() => {
    const modulesWithTools = TOOL_MODULES.map((module) => ({
      module,
      tools: results.tools.filter((tool) => tool.moduleId === module.id),
    }));
    return modulesWithTools.filter((group) => group.tools.length > 0);
  }, [results.tools]);

  const handleSelect = (tool: RegistryTool) => {
    onOpenChange(false);
    setQuery("");
    if (!isToolRouteNavigable(tool)) {
      onUnavailable();
      return;
    }
    onSelectTool(tool);
    router.push(tool.route);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setQuery("");
      }}
      title="Buscar herramientas"
      description="Busca y abre una herramienta o acción"
    >
      <Command shouldFilter={false}>
        <CommandInput placeholder="Buscar herramientas..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>No hay herramientas que coincidan.</CommandEmpty>
          {results.standalone.length > 0 && (
            <CommandGroup>
              {results.standalone.map((tool) => {
                const Icon = TOOL_ICONS[tool.icon];
                return (
                  <CommandItem key={tool.id} value={tool.id} onSelect={() => handleSelect(tool)}>
                    <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="min-w-0 truncate">{tool.name}</span>
                    {!tool.implemented && (
                      <span className="ml-auto text-xs text-muted-foreground">Próximamente</span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
          {groupedTools.map(({ module, tools }) => (
            <CommandGroup key={module.id} heading={module.name}>
              {tools.map((tool) => {
                const Icon = TOOL_ICONS[tool.icon];
                return (
                  <CommandItem key={tool.id} value={tool.id} onSelect={() => handleSelect(tool)}>
                    <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="min-w-0 truncate">{tool.name}</span>
                    {!tool.implemented && (
                      <span className="ml-auto text-xs text-muted-foreground">Próximamente</span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
