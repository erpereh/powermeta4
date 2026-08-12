"use client";

import { TOOL_ICONS, TOOL_MODULES, type ToolModuleId } from "@/lib/tools/registry";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type ModuleFilter = "all" | ToolModuleId;

type ToolsModuleDockProps = {
  value: ModuleFilter;
  onChange: (value: ModuleFilter) => void;
};

export function ToolsModuleDock({ value, onChange }: ToolsModuleDockProps) {
  return (
    <Tabs value={value} onValueChange={(next) => onChange(next as ModuleFilter)} className="gap-0">
      <ScrollArea className="w-full">
        <TabsList
          variant="line"
          className="h-auto w-max min-w-full justify-start gap-0 rounded-none border-b border-border bg-transparent p-0"
        >
          <TabsTrigger
            value="all"
            className="rounded-none px-3 py-2 text-muted-foreground after:bg-primary data-active:text-primary"
          >
            Todos
          </TabsTrigger>
          {TOOL_MODULES.map((module) => {
            const Icon = TOOL_ICONS[module.icon];
            return (
              <Tooltip key={module.id}>
                <TooltipTrigger asChild>
                  <TabsTrigger
                    value={module.id}
                    className="gap-1.5 rounded-none px-3 py-2 text-muted-foreground after:bg-primary data-active:text-primary"
                  >
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                    <span className="hidden sm:inline">{module.name}</span>
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="sm:hidden">
                  {module.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Tabs>
  );
}
