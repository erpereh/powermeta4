"use client";

import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

import { attachmentDownloadUrl, readChatSources, type ChatSource } from "@/lib/chat/chat-data";
import { getMessagePlainText } from "@/lib/chat/to-thread-message";
import { visibleMessages } from "@/lib/chat/visible-messages";
import type { Chat } from "@/types/chat";

type ManualSource = Extract<ChatSource, { kind: "manual" }>;

function groupManuals(sources: readonly ChatSource[]) {
  const groups = new Map<string, ManualSource[]>();
  for (const source of sources) {
    if (source.kind !== "manual") continue;
    const pages = groups.get(source.id);
    if (pages) pages.push(source);
    else groups.set(source.id, [source]);
  }
  return groups;
}

export function ChatSources({ chat, companyId }: { chat: Chat; companyId: string }) {
  const branch = visibleMessages(chat);
  const byId = new Map(branch.map((message) => [message.id, message]));
  const turns = branch.toReversed().flatMap((message) => {
    if (message.role !== "assistant") return [];
    const sources = readChatSources(message.content).filter(({ kind }) => kind !== "peoplenet");
    if (!sources.length) return [];
    const question = byId.get(message.parentMessageId ?? "");
    return [
      {
        id: message.id,
        title: question ? getMessagePlainText(question.content).trim() : "",
        sources,
      },
    ];
  });

  if (!turns.length) {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Aquí aparecerán las fuentes consultadas en esta conversación.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {turns.map(({ id, title, sources }) => (
        <section key={id} className="space-y-2">
          <h3 className="line-clamp-2 wrap-anywhere text-sm font-medium" title={title}>
            {title || "Respuesta"}
          </h3>
          <ul className="space-y-1.5">
            {[...groupManuals(sources)].map(([documentId, pages]) => {
              const name = pages[0]?.name;
              return (
                <li key={documentId} className="rounded-lg border border-border px-2.5 py-2">
                  <p className="flex items-start gap-2 text-sm">
                    <BookOpen
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 wrap-anywhere">{name}</span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {pages.map(({ page, version }) => (
                      <a
                        key={page}
                        href={`/api/chat/sources?${new URLSearchParams({ id: documentId, version: String(version) })}#page=${page}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Página ${page} de ${name}`}
                        className="inline-flex min-h-8 items-center gap-1 rounded-md bg-muted px-2 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
                      >
                        Pág. {page} <ExternalLink className="size-3" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </li>
              );
            })}
            {sources
              .filter((source) => source.kind === "attachment")
              .map((source) => (
                <li key={source.id}>
                  <a
                    href={attachmentDownloadUrl(companyId, chat.id, source.id)}
                    download={source.name}
                    className="flex min-h-11 items-center gap-2 rounded-lg border border-border px-2.5 py-2 text-sm hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
                  >
                    <FileText
                      className="size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block wrap-anywhere">{source.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {source.partial ? "Adjunto · Lectura parcial" : "Adjunto · Descargar"}
                      </span>
                    </span>
                    <Download
                      className="size-3.5 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
