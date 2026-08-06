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
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { recordToolVisitAction } from "@/app/actions/workspace";
import { TOOL_ICONS, type ToolDefinition, type ToolModuleDefinition } from "@/lib/tools/registry";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";

export function ModuleWorkspace({ module }: { module: ToolModuleDefinition }) {
  const { isMobile, open, openMobile } = useSidebar();
  const companies = useWorkspaceStore((state) => state.companies);
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const activeCompany = companies.find((company) => company.id === activeCompanyId);
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
        <div className="text-sm font-medium">{module.name}</div>
      </header>

      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-8 sm:px-8 sm:py-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/tools">Herramientas</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{module.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="space-y-3">
          <p className="text-sm text-muted-foreground">{activeCompany?.name}</p>
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary">
              <ModuleIcon className="size-6" />
            </span>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{module.name}</h1>
              <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
                {module.description}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby={`${module.id}-actions-heading`}>
          <h2 id={`${module.id}-actions-heading`} className="text-lg font-medium">
            Acciones disponibles
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
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

        <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
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
    <>
      <div className="flex items-start justify-between gap-3">
        <Icon className="size-5 text-primary" />
        {tool.implemented ? (
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : null}
      </div>
      <p className="mt-5 font-medium">{tool.name}</p>
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
        className="group rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/40 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={tool.route}
      onClick={onVisit}
      className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
    >
      {content}
    </Link>
  );
}
