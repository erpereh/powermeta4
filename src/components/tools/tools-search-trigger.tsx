"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

type ToolsSearchTriggerProps = {
  onOpen: () => void;
};

export function ToolsSearchTrigger({ onOpen }: ToolsSearchTriggerProps) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onOpen}
      className="h-10 w-full justify-between gap-2 bg-background px-3 text-muted-foreground shadow-none"
      aria-label="Buscar usuarios, nóminas, informes, procesos"
    >
      <span className="flex items-center gap-2 truncate">
        <Search className="size-4 shrink-0" aria-hidden="true" />
        <span className="truncate text-sm">Buscar usuarios, nóminas, informes, procesos...</span>
      </span>
      <kbd className="hidden shrink-0 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
        Ctrl+K
      </kbd>
    </Button>
  );
}
