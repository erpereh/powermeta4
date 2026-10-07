"use client";

import { TOOL_ICONS, TOOL_MODULES, type ToolModuleId } from "@/lib/tools/registry";
import { MODULE_TONES } from "@/lib/theme/icon-tones";
import { IconChip, Tabs, TabsList, TabsTrigger } from "@/components/system";

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
              <IconChip icon={Icon} tone={MODULE_TONES[module.id]} size="xs" />
              <span>{module.name}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
