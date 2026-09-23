"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/system";
import { TOOL_ICONS, type ToolDefinition } from "@/lib/tools/registry";
import { cn } from "@/lib/utils";

type ToolCardProps = {
  tool: ToolDefinition;
  onVisit?: () => void;
  onUnavailable?: () => void;
};

/** Fila de acción ERP: icono, nombre, descripción breve y estado. */
export function ToolCard({ tool, onVisit, onUnavailable }: ToolCardProps) {
  const Icon = TOOL_ICONS[tool.icon];

  const content = (
    <>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted",
          tool.implemented ? "text-foreground" : "text-muted-foreground",
        )}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-foreground">{tool.name}</span>
        <span className="block truncate text-xs text-muted-foreground">{tool.description}</span>
      </span>
      {tool.implemented ? (
        <ChevronRight
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : (
        <Badge status="neutral" size="sm" showIcon={false} className="shrink-0">
          Próximamente
        </Badge>
      )}
    </>
  );

  const className = cn(
    "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left outline-none",
    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
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
