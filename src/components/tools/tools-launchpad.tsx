"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock3, Search } from "lucide-react";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { recordToolVisitAction } from "@/app/actions/workspace";
import {
  TOOL_ICONS,
  TOOL_MODULES,
  getQuickTools,
  getTool,
  searchTools,
  type ToolDefinition,
} from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";

export function ToolsLaunchpad() {
  const { isMobile, open, openMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const companies = useWorkspaceStore((state) => state.companies);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const [query, setQuery] = useState("");
  const [feedback, setFeedback] = useState("");
  const sidebarOpen = isMobile ? openMobile : open;
  const activeCompany = companies.find((company) => company.id === activeCompanyId);
  const results = useMemo(() => searchTools(query), [query]);
  const modules = query.trim() ? results.modules : TOOL_MODULES;
  const quickTools = getQuickTools();
  const recentVisits = (workspace?.recentTools ?? [])
    .flatMap((visit) => {
      const tool = getTool(visit.toolId);
      return tool ? [{ visit, tool }] : [];
    })
    .slice(0, 5);
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  const handleToolVisit = (toolId: string) => {
    if (!activeCompanyId) return;
    recordToolVisit(toolId, activeCompanyId);
    void recordToolVisitAction(activeCompanyId, toolId, createClientMutationId()).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

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
        <div className="text-sm font-medium">Herramientas</div>
      </header>

      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-8 sm:py-12">
        <section className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{activeCompany?.name}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Herramientas</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Gestiona las operaciones de tu empresa manualmente o con ayuda del asistente.
          </p>
        </section>

        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar una herramienta o acción..."
            aria-label="Buscar una herramienta o acción"
            className="h-11 pl-9"
          />
        </div>

        {!query.trim() && (
          <section className="space-y-4" aria-labelledby="quick-tools-heading">
            <div className="flex items-center justify-between gap-3">
              <h2 id="quick-tools-heading" className="text-lg font-medium">
                Acceso rápido
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickTools.map((tool) => {
                return (
                  <QuickToolCard
                    key={tool.id}
                    tool={tool}
                    onClick={() => handleToolVisit(tool.id)}
                    onUnavailable={() =>
                      setFeedback("Esta herramienta estará disponible próximamente.")
                    }
                  />
                );
              })}
            </div>
          </section>
        )}

        <section className="space-y-4" aria-labelledby="modules-heading">
          <div className="flex items-center justify-between gap-3">
            <h2 id="modules-heading" className="text-lg font-medium">
              {query.trim() ? "Resultados" : "Módulos"}
            </h2>
            {query.trim() && (
              <p className="text-sm text-muted-foreground">
                {results.tools.length} {results.tools.length === 1 ? "acción" : "acciones"}
              </p>
            )}
          </div>
          {modules.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No hay herramientas que coincidan con tu búsqueda.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {modules.map((module) => {
                const Icon = TOOL_ICONS[module.icon];
                const matchingTools = query.trim()
                  ? module.tools.filter((tool) =>
                      results.tools.some((result) => result.id === tool.id),
                    )
                  : module.tools;
                return (
                  <Link
                    key={module.id}
                    href={module.route}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-medium">{module.name}</span>
                          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                          {module.description}
                        </span>
                      </span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2.5 py-1">
                        {module.tools.length} herramientas
                      </span>
                      {query.trim() && matchingTools.length > 0 && (
                        <span className="rounded-full bg-muted px-2.5 py-1">
                          {matchingTools.length} coinciden
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <section className="space-y-4" aria-labelledby="recent-tools-heading">
          <div className="flex items-center gap-2">
            <Clock3 className="size-4 text-muted-foreground" />
            <h2 id="recent-tools-heading" className="text-lg font-medium">
              Actividad reciente
            </h2>
          </div>
          {recentVisits.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              Todavía no hay actividad en este workspace.
            </div>
          ) : (
            <div className="divide-y divide-border rounded-2xl border border-border bg-card px-4">
              {recentVisits.map(({ visit, tool }) => {
                const Icon = TOOL_ICONS[tool.icon];
                return (
                  <Link
                    key={`${tool.id}-${visit.visitedAt}`}
                    href={tool.route}
                    className="flex items-center gap-3 py-3 text-sm hover:text-primary"
                  >
                    <Icon className="size-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0 flex-1 truncate">{tool.name}</span>
                    <span className="text-xs text-muted-foreground">{tool.moduleId}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {feedback}
        </div>
      </div>
    </main>
  );
}

function QuickToolCard({
  tool,
  onClick,
  onUnavailable,
}: {
  tool: ToolDefinition;
  onClick: () => void;
  onUnavailable: () => void;
}) {
  const Icon = TOOL_ICONS[tool.icon];
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <Icon className="size-5 text-primary" />
        {tool.implemented && (
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>
      <p className="mt-5 text-sm font-medium">{tool.name}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{tool.description}</p>
      {!tool.implemented && (
        <p className="mt-4 text-xs text-muted-foreground">Disponible próximamente</p>
      )}
    </>
  );

  if (!tool.implemented) {
    return (
      <button
        type="button"
        onClick={onUnavailable}
        className="group rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/40 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={tool.route}
      onClick={onClick}
      className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
    >
      {content}
    </Link>
  );
}
