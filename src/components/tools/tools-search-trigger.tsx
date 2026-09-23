"use client";

import { Search } from "lucide-react";

import { useOptionalAppCommandPalette } from "@/components/app-shell/app-command-palette";

type ToolsSearchTriggerProps = {
  onOpen?: () => void;
};

/** Campo de búsqueda que abre el command-palette de beUI con las acciones ERP. */
export function ToolsSearchTrigger({ onOpen }: ToolsSearchTriggerProps) {
  const palette = useOptionalAppCommandPalette();

  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        palette?.openCommandPalette("actions");
      }}
      aria-label="Buscar usuarios, nóminas, informes, procesos"
      className="flex h-11 w-full items-center gap-2 rounded-full border border-border bg-card px-4 text-left text-muted-foreground outline-none transition-colors hover:border-foreground/20 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Search className="size-4 shrink-0" aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate text-sm">
        Buscar usuarios, nóminas, informes, procesos...
      </span>
      <kbd className="hidden shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">
        Ctrl K
      </kbd>
    </button>
  );
}
