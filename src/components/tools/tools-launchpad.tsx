"use client";

import { useMemo, useState } from "react";

import { HoverList, PageHeader, Surface } from "@/components/system";
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
      <PageHeader title="Inicio" />

      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">{scopeLabel}</p>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">Acciones</h1>
        </section>

        <div className="space-y-3">
          <ToolsSearchTrigger />
          <ToolsModuleDock value={moduleFilter} onChange={setModuleFilter} />
        </div>

        <Surface flush className="p-1.5">
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
