"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TOOL_ICONS, isToolRouteNavigable, type RegistryTool } from "@/lib/tools/registry";

type ToolCardProps = {
  tool: RegistryTool;
  onVisit?: () => void;
  onUnavailable?: () => void;
};

export function ToolCard({ tool, onVisit, onUnavailable }: ToolCardProps) {
  const Icon = TOOL_ICONS[tool.icon];
  const navigable = isToolRouteNavigable(tool);

  const content = (
    <div className="flex min-h-[4.75rem] items-center gap-3 px-3 py-2.5">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-sm font-medium">{tool.name}</span>
          {!tool.implemented && (
            <Badge variant="secondary" className="shrink-0 text-[10px]">
              Próximamente
            </Badge>
          )}
        </span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
          {tool.description}
        </span>
      </span>
      {tool.implemented && (
        <ArrowUpRight
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </div>
  );

  const className =
    "group block rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/30 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  if (!navigable) {
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
