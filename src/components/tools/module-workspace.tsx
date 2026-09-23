"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Callout, HoverList, PageHeader, Surface } from "@/components/system";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { ToolCard } from "@/components/tools/tool-card";
import { TOOL_ICONS, type ToolModuleDefinition } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";

export function ModuleWorkspace({ module }: { module: ToolModuleDefinition }) {
  const auth = useWorkspaceStore((state) => state.auth);
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const scopeLabel = getWorkspaceScopeLabel(auth);
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [feedback, setFeedback] = useState("");
  const ModuleIcon = TOOL_ICONS[module.icon];
  const headingId = `${module.id}-actions-heading`;

  const handleToolVisit = (toolId: string) => {
    if (!activeCompanyId) return;
    recordToolVisit(toolId, activeCompanyId);
    void recordToolVisitAction(activeCompanyId, toolId, createClientMutationId()).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const showUnavailable = () => setFeedback("Esta herramienta estará disponible próximamente.");

  return (
    <main className="flex min-h-svh flex-col bg-background">
      <PageHeader title={module.name} />

      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <Link
          href="/home"
          className="-ml-1 inline-flex items-center gap-1 rounded-md px-1 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Acciones
        </Link>

        <section className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
            <ModuleIcon className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 space-y-1">
            <p className="text-xs text-muted-foreground">{scopeLabel}</p>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">{module.name}</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">{module.description}</p>
          </div>
        </section>

        <section className="space-y-2" aria-labelledby={headingId}>
          <h2
            id={headingId}
            className="px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground"
          >
            Acciones disponibles
          </h2>
          <Surface flush className="p-1.5">
            <HoverList aria-labelledby={headingId}>
              {module.tools.map((tool) => (
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
        </section>

        <Callout title="Sin conexión ERP en esta fase">
          Las acciones se conectarán a sistemas ERP externos en una futura fase.
        </Callout>
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>
    </main>
  );
}
