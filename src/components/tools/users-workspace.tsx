"use client";

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
import { TOOL_ICONS, getToolModule, type ToolDefinition } from "@/lib/tools/registry";
import { COMPANIES } from "@/lib/workspaces/companies";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import { USER_ROLE_LABELS, USER_STATUS_LABELS } from "@/lib/users/validation";

export function UsersWorkspace() {
  const { isMobile, open, openMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const users = useWorkspaceStore((state) => state.workspaces[state.activeCompanyId]?.users ?? []);
  const activeCompany = COMPANIES.find((company) => company.id === activeCompanyId) ?? COMPANIES[0];
  const sidebarOpen = isMobile ? openMobile : open;
  const triggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";
  const module = getToolModule("users");
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);
  const implementedTools = module?.tools.filter((tool) => tool.implemented) ?? [];

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
        <div className="text-sm font-medium">Usuarios</div>
      </header>

      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-8 sm:px-8 sm:py-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/home">Herramientas</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Usuarios</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="space-y-3">
          <p className="text-sm text-muted-foreground">{activeCompany.name}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Usuarios</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Administra las personas que utilizan este workspace.
          </p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2" aria-label="Acciones de usuarios">
          {implementedTools.map((tool) => (
            <ActionCard key={tool.id} tool={tool} onVisit={() => recordToolVisit(tool.id)} />
          ))}
        </section>

        <section className="space-y-4" aria-labelledby="users-recent-heading">
          <div className="flex items-center justify-between gap-3">
            <h2 id="users-recent-heading" className="text-lg font-medium">
              Usuarios recientes
            </h2>
            <span className="text-sm text-muted-foreground">{users.length}</span>
          </div>
          {users.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              Todavía no hay usuarios en este workspace.
            </div>
          ) : (
            <div className="divide-y divide-border rounded-2xl border border-border bg-card px-4">
              {users.slice(0, 5).map((user) => (
                <Link
                  key={user.id}
                  href={`/tools/users/${user.id}`}
                  className="flex items-center gap-3 py-3 hover:text-primary"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      {user.firstName} {user.lastName}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {USER_ROLE_LABELS[user.role]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {USER_STATUS_LABELS[user.status]}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {module && (
          <section className="space-y-4" aria-labelledby="users-catalog-heading">
            <h2 id="users-catalog-heading" className="text-lg font-medium">
              Catálogo de acciones
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {module.tools.map((tool) => {
                const Icon = TOOL_ICONS[tool.icon];
                return (
                  <Link
                    key={tool.id}
                    href={tool.route}
                    onClick={() => recordToolVisit(tool.id)}
                    className="rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:bg-accent"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <Icon className="size-5 text-primary" />
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </div>
                    <p className="mt-4 text-sm font-medium">{tool.name}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {tool.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function ActionCard({ tool, onVisit }: { tool: ToolDefinition; onVisit: () => void }) {
  const Icon = TOOL_ICONS[tool.icon];

  return (
    <Link
      href={tool.route}
      onClick={onVisit}
      className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <Icon className="size-5 text-primary" />
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <p className="mt-5 font-medium">{tool.name}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{tool.description}</p>
    </Link>
  );
}
