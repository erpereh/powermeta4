"use client";

import { Clock3 } from "lucide-react";
import Link from "next/link";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
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
        <h2 id="recent-tools-heading" className="text-sm font-medium">
          Actividad reciente
        </h2>
      </div>
      {visits.length === 0 ? (
        <Empty className="border py-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Clock3 aria-hidden="true" />
            </EmptyMedia>
            <EmptyTitle>Sin actividad reciente</EmptyTitle>
            <EmptyDescription>Las acciones que uses aparecerán aquí.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <ul className="divide-y divide-border rounded-xl border border-border bg-card">
          {visits.map(({ visit, tool }) => {
            const Icon = TOOL_ICONS[tool.icon];
            const moduleName = getToolModule(tool.moduleId)?.name ?? tool.moduleId;
            return (
              <li key={`${tool.id}-${visit.visitedAt}`}>
                <Link
                  href={tool.route}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-accent/50 hover:text-primary"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate">{tool.name}</span>
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
