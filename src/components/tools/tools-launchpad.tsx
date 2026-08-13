"use client";

import { useEffect, useMemo, useState } from "react";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { TOOL_REGISTRY, type ToolDefinition } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { ToolCard } from "@/components/tools/tool-card";
import { ToolsCommandPalette } from "@/components/tools/tools-command-palette";
import { ToolsModuleDock, type ModuleFilter } from "@/components/tools/tools-module-dock";
import { ToolsRecentActivity } from "@/components/tools/tools-recent-activity";
import { ToolsSearchTrigger } from "@/components/tools/tools-search-trigger";

export function ToolsLaunchpad() {
  const { isMobile, open, openMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const auth = useWorkspaceStore((state) => state.auth);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [moduleFilter, setModuleFilter] = useState<ModuleFilter>("all");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const sidebarOpen = isMobile ? openMobile : open;
  const scopeLabel = getWorkspaceScopeLabel(auth);
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  const filteredTools = useMemo(() => {
    if (moduleFilter === "all") return TOOL_REGISTRY;
    return TOOL_REGISTRY.filter((tool) => tool.moduleId === moduleFilter);
  }, [moduleFilter]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleToolVisit = (toolId: string) => {
    if (!activeCompanyId) return;
    const tool = TOOL_REGISTRY.find((entry) => entry.id === toolId);
    if (!tool?.implemented) return;
    recordToolVisit(toolId, activeCompanyId);
    void recordToolVisitAction(activeCompanyId, toolId, createClientMutationId()).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const handlePaletteSelect = (tool: ToolDefinition) => {
    if (tool.implemented) handleToolVisit(tool.id);
  };

  const showUnavailable = () => setFeedback("Esta acción estará disponible próximamente.");

  return (
    <main className="flex min-h-svh flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger
              aria-label={triggerLabel}
              aria-expanded={sidebarOpen}
              title={triggerLabel}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">{triggerLabel}</TooltipContent>
        </Tooltip>
        <div className="text-sm font-medium">Acciones</div>
      </header>

      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6">
        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">{scopeLabel}</p>
          <h1 className="text-xl font-semibold tracking-tight">Acciones</h1>
          <p className="text-sm text-muted-foreground">
            Accede a las operaciones de tu empresa manualmente.
          </p>
        </section>

        <ToolsSearchTrigger onOpen={() => setPaletteOpen(true)} />

        <ToolsModuleDock value={moduleFilter} onChange={setModuleFilter} />

        <section className="grid gap-2 sm:grid-cols-2" aria-label="Acciones disponibles">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onVisit={() => handleToolVisit(tool.id)}
              onUnavailable={showUnavailable}
            />
          ))}
        </section>

        <ToolsRecentActivity recentTools={workspace?.recentTools ?? []} />

        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>

      <ToolsCommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onSelectTool={handlePaletteSelect}
        onUnavailable={showUnavailable}
      />
    </main>
  );
}
