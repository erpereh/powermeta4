"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Network, Search } from "lucide-react";
import { useMemo } from "react";

import { Button, EmptyState, Input } from "@/components/system";
import type { OrgNode } from "@/lib/portal/data/organization-core";
import { orgChartHref, orgTreeState } from "@/lib/portal/organization-navigation";
import { cn } from "@/lib/utils";

const fold = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

/** Nodos que contienen el texto (o lo contienen sus descendientes). */
const filterTree = (nodes: readonly OrgNode[], needle: string): OrgNode[] =>
  nodes.flatMap((node) => {
    if (!needle) return [node];
    const children = filterTree(node.children, needle);
    const matches =
      fold(node.name).includes(needle) ||
      node.people.some((person) => fold(person.fullName).includes(needle));
    return matches || children.length > 0
      ? [{ ...node, children: matches ? node.children : children }]
      : [];
  });

function OrgBranch({
  node,
  depth,
  expanded,
  toggle,
  forceOpen,
  personHref,
}: {
  node: OrgNode;
  depth: number;
  expanded: ReadonlySet<string>;
  toggle: (key: string) => void;
  forceOpen: boolean;
  personHref: (employeeId: string) => string;
}) {
  const open = forceOpen || expanded.has(node.key);
  const panelId = `org-${node.key.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
  const hasContent = node.children.length > 0 || node.people.length > 0;
  return (
    <li className="min-w-0">
      <div
        className={cn(
          "flex min-w-0 items-center gap-2 rounded-lg py-1.5 pr-2",
          depth > 0 && "pl-1",
        )}
      >
        <button
          type="button"
          onClick={() => toggle(node.key)}
          aria-expanded={hasContent ? open : undefined}
          aria-controls={hasContent ? panelId : undefined}
          disabled={!hasContent}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-md px-1.5 py-1 text-left outline-none hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/60 disabled:cursor-default disabled:hover:bg-transparent"
        >
          <ChevronRight
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform",
              open && "rotate-90",
              !hasContent && "opacity-0",
            )}
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
            {node.name}
          </span>
          <span className="shrink-0 text-[11px] text-muted-foreground">{node.levelLabel}</span>
          <span className="shrink-0 rounded-full bg-muted px-2 py-px text-[11px] tabular-nums text-muted-foreground">
            {node.total} {node.total === 1 ? "persona" : "personas"}
          </span>
        </button>
      </div>
      {open && hasContent ? (
        <div id={panelId} className="ml-4 border-l border-border pl-3">
          {node.people.length > 0 ? (
            <ul className="flex min-w-0 flex-col py-1" aria-label={`Personas de ${node.name}`}>
              {node.people.map((person) => (
                <li key={person.key} className="min-w-0">
                  <Link
                    href={personHref(person.employeeId)}
                    prefetch={false}
                    className="flex min-w-0 items-baseline gap-2 rounded-md px-2 py-1 text-sm outline-none hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    <span className="truncate text-foreground">{person.fullName}</span>
                    {person.job ? (
                      <span className="truncate text-xs text-muted-foreground">{person.job}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {node.children.length > 0 ? (
            <ul className="flex min-w-0 flex-col">
              {node.children.map((child) => (
                <OrgBranch
                  key={child.key}
                  node={child}
                  depth={depth + 1}
                  expanded={expanded}
                  toggle={toggle}
                  forceOpen={forceOpen}
                  personHref={personHref}
                />
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

/** El filtro y la expansión pertenecen a la URL y se recuperan al volver del gráfico. */
export function OrgTree({ roots, route }: { roots: readonly OrgNode[]; route: string }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { query, expanded } = orgTreeState(
    params,
    roots.map((node) => node.key),
  );
  const needle = fold(query.trim());
  const visible = useMemo(() => filterTree(roots, needle), [roots, needle]);

  const update = (nextQuery: string, nextExpanded: ReadonlySet<string>) => {
    const next = new URLSearchParams();
    if (nextQuery) next.set("filtro", nextQuery.slice(0, 120));
    next.set("ramas", [...nextExpanded].join("\n"));
    window.history.replaceState(null, "", orgChartHref(route, next));
  };
  const toggle = (key: string) => {
    const next = new Set(expanded);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    update(query, next);
  };

  if (roots.length === 0) {
    return (
      <EmptyState
        icon={<Network />}
        title="Sin unidades"
        description="La sociedad no tiene personas con unidad informada en ORO."
      />
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex min-w-0 flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1 basis-64">
          <Input
            type="search"
            label="Filtrar unidades o personas"
            value={query}
            onChange={(value) => update(value, expanded)}
            leftIcon={<Search className="size-4" aria-hidden="true" />}
          />
        </div>
        <Button variant="secondary" size="sm" onClick={() => update(query, new Set())}>
          Contraer todo
        </Button>
      </div>
      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Ninguna unidad ni persona coincide con el filtro.
        </p>
      ) : (
        <ul
          className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-2"
          aria-label="Organigrama"
        >
          {visible.map((node) => (
            <OrgBranch
              key={node.key}
              node={node}
              depth={0}
              expanded={expanded}
              toggle={toggle}
              forceOpen={needle !== ""}
              personHref={(employeeId) => orgChartHref(route, params, employeeId)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
