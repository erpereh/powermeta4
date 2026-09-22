"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger, Tooltip, useSidebar } from "@/components/system";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { TOOL_ICONS, type ToolDefinition, type ToolModuleDefinition } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { cn } from "@/lib/utils";

export function ModuleWorkspace({ module }: { module: ToolModuleDefinition }) {
  const { isMobile, open, openMobile } = useSidebar();
  const auth = useWorkspaceStore((state) => state.auth);
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const scopeLabel = getWorkspaceScopeLabel(auth);
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [feedback, setFeedback] = useState("");
  const ModuleIcon = TOOL_ICONS[module.icon];

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
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-5">
        <Tooltip content={triggerLabel} side="bottom">
          <SidebarTrigger
            aria-label={triggerLabel}
            aria-expanded={sidebarOpen}
            title={triggerLabel}
          />
        </Tooltip>
        <div className="min-w-0 truncate text-sm font-medium text-foreground">{module.name}</div>
      </header>

      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/home">Acciones</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{module.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="space-y-3">
          <p className="text-xs text-muted-foreground">{scopeLabel}</p>
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-elevated text-primary sm:size-11">
              <ModuleIcon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 space-y-1">
              <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {module.name}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {module.description}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3" aria-labelledby={`${module.id}-actions-heading`}>
          <h2 id={`${module.id}-actions-heading`} className="text-sm font-medium text-foreground">
            Acciones disponibles
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {module.tools.map((tool) => (
              <ToolActionCard
                key={tool.id}
                tool={tool}
                onVisit={() => handleToolVisit(tool.id)}
                onUnavailable={showUnavailable}
              />
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-dashed border-border bg-elevated/40 px-4 py-5 text-center text-sm text-muted-foreground">
          Las acciones se conectarán a sistemas ERP externos en una futura fase.
        </div>
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>
    </main>
  );
}

function ToolActionCard({
  tool,
  onVisit,
  onUnavailable,
}: {
  tool: ToolDefinition;
  onVisit: () => void;
  onUnavailable: () => void;
}) {
  const Icon = TOOL_ICONS[tool.icon];
  const content = (
    <div className="flex min-h-[4.75rem] max-h-[6.25rem] items-center gap-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-foreground">{tool.name}</span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
          {tool.description}
        </span>
        {!tool.implemented ? (
          <span className="mt-1 block text-[11px] text-muted-foreground">
            Disponible próximamente
          </span>
        ) : null}
      </span>
      {tool.implemented ? (
        <ArrowUpRight
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );

  const className = cn(
    "group block rounded-xl border border-border bg-card px-3 py-2.5 text-left",
    "transition-colors hover:border-primary/35 hover:bg-elevated/60",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  );

  if (!tool.implemented) {
    return (
      <button type="button" onClick={onUnavailable} className={className}>
        {content}
      </button>
    );
  }

  return (
    <Link href={tool.route} onClick={onVisit} className={className}>
      {content}
    </Link>
  );
}
