"use client";

import { Search } from "lucide-react";

import { useOptionalAppCommandPalette } from "@/components/app-shell/app-command-palette";
import { Button } from "@/components/system";

type ToolsSearchTriggerProps = {
  onOpen?: () => void;
};

export function ToolsSearchTrigger({ onOpen }: ToolsSearchTriggerProps) {
  const palette = useOptionalAppCommandPalette();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        onOpen?.();
        palette?.openCommandPalette("actions");
      }}
      className="h-10 w-full justify-between gap-2 rounded-xl border-border bg-card px-3 text-muted-foreground hover:bg-elevated/60"
      aria-label="Buscar usuarios, nóminas, informes, procesos"
    >
      <span className="flex min-w-0 items-center gap-2 truncate">
        <Search className="size-4 shrink-0" aria-hidden="true" />
        <span className="truncate text-sm">Buscar usuarios, nóminas, informes, procesos...</span>
      </span>
      <kbd className="hidden shrink-0 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
        Ctrl+K
      </kbd>
    </Button>
  );
}
