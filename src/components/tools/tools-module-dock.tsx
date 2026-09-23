"use client";

import { TOOL_ICONS, TOOL_MODULES, type ToolModuleId } from "@/lib/tools/registry";
import { Tabs, TabsList, TabsTrigger } from "@/components/system";

export type ModuleFilter = "all" | ToolModuleId;

type ToolsModuleDockProps = {
  value: ModuleFilter;
  onChange: (value: ModuleFilter) => void;
};

export function ToolsModuleDock({ value, onChange }: ToolsModuleDockProps) {
  return (
    <Tabs
      value={value}
      onValueChange={(next) => onChange(next as ModuleFilter)}
      className="w-full min-w-0"
    >
      <TabsList className="gap-0.5" wrapperClassName="w-full min-w-0">
        <TabsTrigger value="all" className="px-3 py-1.5 text-xs sm:text-sm">
          Todos
        </TabsTrigger>
        {TOOL_MODULES.map((module) => {
          const Icon = TOOL_ICONS[module.icon];
          return (
            <TabsTrigger
              key={module.id}
              value={module.id}
              className="gap-1.5 px-2.5 py-1.5 text-xs sm:gap-2 sm:px-3 sm:text-sm"
            >
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{module.name}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
