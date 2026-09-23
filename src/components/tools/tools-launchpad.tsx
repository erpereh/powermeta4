"use client";

import { useMemo, useState } from "react";

import { SidebarTrigger, Tooltip, useSidebar } from "@/components/system";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { TOOL_REGISTRY } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { ToolCard } from "@/components/tools/tool-card";
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
  const [feedback, setFeedback] = useState("");
  const sidebarOpen = isMobile ? openMobile : open;
  const scopeLabel = getWorkspaceScopeLabel(auth);
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  const filteredTools = useMemo(() => {
    if (moduleFilter === "all") return TOOL_REGISTRY;
    return TOOL_REGISTRY.filter((tool) => tool.moduleId === moduleFilter);
  }, [moduleFilter]);

  const handleToolVisit = (toolId: string) => {
    if (!activeCompanyId) return;
    const tool = TOOL_REGISTRY.find((entry) => entry.id === toolId);
    if (!tool?.implemented) return;
    recordToolVisit(toolId, activeCompanyId);
    void recordToolVisitAction(activeCompanyId, toolId, createClientMutationId()).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const showUnavailable = () => setFeedback("Esta acción estará disponible próximamente.");

  return (
    <main className="flex min-h-svh flex-col bg-background">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-5">
        <Tooltip content={triggerLabel} side="bottom">
          <SidebarTrigger
            aria-label={triggerLabel}
            aria-expanded={sidebarOpen}
            title={triggerLabel}
          />
        </Tooltip>
        <div className="text-sm font-medium text-foreground">Acciones</div>
      </header>

      <div className="mx-auto w-full max-w-3xl space-y-5 px-4 py-5 sm:space-y-6 sm:px-6 sm:py-6">
        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">{scopeLabel}</p>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">Acciones</h1>
          <p className="text-sm text-muted-foreground">
            Accede a las operaciones de tu empresa manualmente.
          </p>
        </section>

        <ToolsSearchTrigger />

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
    </main>
  );
}
