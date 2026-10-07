"use client";

import { useMemo, useState } from "react";

import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { HoverList, SidebarToggle, Surface } from "@/components/system";
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
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const auth = useWorkspaceStore((state) => state.auth);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [moduleFilter, setModuleFilter] = useState<ModuleFilter>("all");
  const [feedback, setFeedback] = useState("");
  const scopeLabel = getWorkspaceScopeLabel(auth);

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
      <div className="px-4 pt-4 md:hidden">
        <SidebarToggle wrapperClassName="-ml-1" />
      </div>

      <div className="mx-auto w-full max-w-3xl space-y-8 px-4 pb-10 pt-8 sm:px-6 sm:pt-16">
        <section className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            {scopeLabel}
          </span>
          <div className="flex items-center gap-2.5">
            <PowermetaLogo compact markClassName="size-7" />
            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Acciones
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Busca una operación de Meta4 o elígela por módulo.
          </p>
        </section>

        <div className="space-y-3">
          <ToolsSearchTrigger />
          <ToolsModuleDock value={moduleFilter} onChange={setModuleFilter} />
        </div>

        <Surface flush className="p-1.5 shadow-xs">
          <HoverList aria-label="Acciones disponibles">
            {filteredTools.map((tool) => (
              <li key={tool.id}>
                <ToolCard
                  tool={tool}
                  onVisit={() => handleToolVisit(tool.id)}
                  onUnavailable={showUnavailable}
                />
              </li>
            ))}
          </HoverList>
        </Surface>

        <ToolsRecentActivity recentTools={workspace?.recentTools ?? []} />

        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>
    </main>
  );
}
