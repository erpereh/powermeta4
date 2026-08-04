"use client";

import { useMemo, useState } from "react";
import { Bell, CheckCircle2, Info, Lightbulb } from "lucide-react";

import { mockInboxItems } from "@/data/mock-inbox";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";

type InboxFilter = "all" | "unread" | "read";

const filters: { id: InboxFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "unread", label: "Sin leer" },
  { id: "read", label: "Leídas" },
];

export function InboxList() {
  const [filter, setFilter] = useState<InboxFilter>("all");
  const filteredItems = useMemo(
    () =>
      mockInboxItems.filter(
        (item) => filter === "all" || (filter === "unread" ? !item.read : item.read),
      ),
    [filter],
  );
  const unreadCount = mockInboxItems.filter((item) => !item.read).length;

  return (
    <main className="min-h-svh bg-background">
      <header className="flex h-14 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <SidebarTrigger aria-label="Abrir o cerrar navegación" />
        <div className="text-sm font-medium">Bandeja de entrada</div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Mantén el ritmo
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">Bandeja de entrada</h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Novedades y recordatorios para mantener el ritmo.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bell className="size-4" />
            {unreadCount} sin leer
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                filter === item.id
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-4 divide-y divide-border/70 rounded-2xl border border-border bg-card">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No hay elementos en este filtro.
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon =
                item.kind === "tip" ? Lightbulb : item.kind === "system" ? Info : CheckCircle2;
              return (
                <article key={item.id} className="flex gap-4 p-4 sm:p-5">
                  <span
                    className={cn(
                      "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl",
                      item.read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h2 className="text-sm font-medium">{item.title}</h2>
                      <time className="text-xs text-muted-foreground">{item.timestamp}</time>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {!item.read && (
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                      aria-label="Sin leer"
                    />
                  )}
                </article>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
