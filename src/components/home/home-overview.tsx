"use client";

import Link from "next/link";
import { ArrowUpRight, Bookmark, Clock3, MessageCircle } from "lucide-react";

import { useChatStore } from "@/stores/use-chat-store";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import type { Chat } from "@/types/chat";

export function HomeOverview() {
  const chats = useChatStore((state) => state.chats);
  const favorites = chats.filter((chat) => chat.favorite);
  const recentChats = [...chats]
    .filter((chat) => chat.messages.length > 0)
    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt))
    .slice(0, 3);

  return (
    <main className="min-h-svh bg-background">
      <header className="flex h-14 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <SidebarTrigger aria-label="Abrir o cerrar navegación" />
        <div className="text-sm font-medium">Inicio</div>
      </header>

      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-8 sm:py-12">
        <section className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Para empezar
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Piensa con más estructura.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Un punto de partida tranquilo para explorar ideas, redactar mejor y convertir
            conversaciones en próximos pasos.
          </p>
        </section>

        <section className="grid gap-3 sm:grid-cols-3" aria-label="Resumen de actividad">
          <SummaryCard icon={MessageCircle} label="Conversaciones" value={chats.length} />
          <SummaryCard icon={Bookmark} label="Favoritos" value={favorites.length} />
          <SummaryCard icon={Clock3} label="Con actividad" value={recentChats.length} />
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Actividad reciente</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tus conversaciones con contenido.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Abrir chat <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div className="divide-y divide-border/70">
              {recentChats.map((chat) => (
                <Link
                  key={chat.id}
                  href="/"
                  className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 hover:text-primary"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{chat.title}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {chat.messages.length} {chat.messages.length === 1 ? "mensaje" : "mensajes"}
                    </span>
                  </span>
                  {chat.favorite && <RecentChatIcon chat={chat} />}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/35 p-5 sm:p-6">
            <p className="text-sm font-medium">Empieza por aquí</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Elige una acción para empezar.
            </p>
            <div className="mt-5 space-y-2">
              {[
                ["Programar", "Organiza una tarea"],
                ["Redactar", "Dale forma a una idea"],
                ["Analizar", "Encuentra lo importante"],
              ].map(([label, description]) => (
                <Link
                  key={label}
                  href="/"
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card px-3 py-2.5 text-sm transition-colors hover:border-primary/40 hover:bg-card/80"
                >
                  <span>
                    <span className="block font-medium">{label}</span>
                    <span className="block text-xs text-muted-foreground">{description}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function RecentChatIcon({ chat }: { chat: Chat }) {
  const Icon = CHAT_ICONS[chat.icon ?? DEFAULT_CHAT_ICON];
  const colorClass = CHAT_COLORS[chat.iconColor ?? DEFAULT_CHAT_COLOR].className;

  return <Icon aria-hidden="true" className={`size-3.5 shrink-0 ${colorClass}`} />;
}

function SummaryCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MessageCircle;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-muted-foreground">{label}</span>
        <Icon className="size-4 text-primary" />
      </div>
      <p className="mt-5 text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}
