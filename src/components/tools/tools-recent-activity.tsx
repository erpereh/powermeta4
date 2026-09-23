"use client";

import { Clock3 } from "lucide-react";
import Link from "next/link";

import { EmptyState } from "@/components/system";
import { TOOL_ICONS, getTool, getToolModule } from "@/lib/tools/registry";
import type { ToolVisit } from "@/types/workspace";

type ToolsRecentActivityProps = {
  recentTools: readonly ToolVisit[];
};

export function ToolsRecentActivity({ recentTools }: ToolsRecentActivityProps) {
  const visits = recentTools
    .flatMap((visit) => {
      const tool = getTool(visit.toolId);
      return tool ? [{ visit, tool }] : [];
    })
    .slice(0, 5);

  return (
    <section className="space-y-3" aria-labelledby="recent-tools-heading">
      <div className="flex items-center gap-2">
        <Clock3 className="size-4 text-muted-foreground" aria-hidden="true" />
        <h2 id="recent-tools-heading" className="text-sm font-medium text-foreground">
          Actividad reciente
        </h2>
      </div>
      {visits.length === 0 ? (
        <EmptyState
          title="Sin actividad reciente"
          description="Las acciones que uses aparecerán aquí."
          icon={<Clock3 aria-hidden="true" />}
          className="py-6"
        />
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {visits.map(({ visit, tool }) => {
            const Icon = TOOL_ICONS[tool.icon];
            const moduleName = getToolModule(tool.moduleId)?.name ?? tool.moduleId;
            return (
              <li key={`${tool.id}-${visit.visitedAt}`}>
                <Link
                  href={tool.route}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-elevated/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-elevated text-muted-foreground">
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-foreground">{tool.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{moduleName}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
