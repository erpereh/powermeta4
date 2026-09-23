"use client";

import Link from "next/link";

import { HoverList } from "@/components/system";
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
    <section className="space-y-2" aria-labelledby="recent-tools-heading">
      <h2
        id="recent-tools-heading"
        className="px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground"
      >
        Actividad reciente
      </h2>
      {visits.length === 0 ? (
        <p className="px-3 text-sm text-muted-foreground">
          Las acciones que uses aparecerán aquí.
        </p>
      ) : (
        <HoverList aria-labelledby="recent-tools-heading">
          {visits.map(({ visit, tool }) => {
            const Icon = TOOL_ICONS[tool.icon];
            const moduleName = getToolModule(tool.moduleId)?.name ?? tool.moduleId;
            return (
              <li key={`${tool.id}-${visit.visitedAt}`}>
                <Link
                  href={tool.route}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-foreground">{tool.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{moduleName}</span>
                </Link>
              </li>
            );
          })}
        </HoverList>
      )}
    </section>
  );
}
