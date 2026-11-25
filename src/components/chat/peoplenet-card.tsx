"use client";

import { useAuiState } from "@assistant-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { Button } from "@/components/system";
import { readChatSources } from "@/lib/chat/chat-data";
import {
  PEOPLENET_PAGE_SIZE,
  peopleNetResultSchema,
  type PeopleNetResult,
} from "@/lib/chat/peoplenet-result";
import { getTool } from "@/lib/tools/registry";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export const PeopleNetChatContext = createContext<{
  companyId: string;
  chatId: string;
  autoOpenMessageId: string | null;
} | null>(null);

const number = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 6 });
const display = (value: string | number | null): string =>
  value === null ? "—" : typeof value === "number" ? number.format(value) : value;

export function PeopleNetCard() {
  const context = useContext(PeopleNetChatContext);
  const messageId = useAuiState((state) => state.message.id);
  const complete = useAuiState((state) => state.message.status?.type === "complete");
  const content = useWorkspaceStore((state) => {
    if (!context || state.activeCompanyId !== context.companyId) return undefined;
    const chat = state.workspaces[context.companyId]?.chats.find(({ id }) => id === context.chatId);
    const message = chat?.messages.find(({ id }) => id === messageId);
    if (message?.status !== "complete") return undefined;
    return message.content;
  });
  if (!context || !complete || !content) return null;
  const calls = readChatSources(content).flatMap<{ title?: string; callId?: string }>((source) => {
    if (source.kind === "peoplenet")
      return [{ title: getTool(source.id)?.name, callId: undefined }];
    if (source.kind === "peoplenet-call")
      return [
        {
          title:
            source.action === "analysis" ? "Análisis de PeopleNet" : getTool(source.action)?.name,
          callId: source.id,
        },
      ];
    return [];
  });
  return calls.map(({ title, callId }, index) =>
    title ? (
      <PeopleNetResultCard
        key={`${messageId}/${callId ?? "legacy"}`}
        {...context}
        messageId={messageId}
        callId={callId}
        title={title}
        autoOpen={index === 0 && context.autoOpenMessageId === messageId}
      />
    ) : null,
  );
}

type LoadState =
  | { type: "loading" }
  | { type: "error"; message: string }
  | { type: "ready"; result: PeopleNetResult };

function PeopleNetResultCard({
  companyId,
  chatId,
  messageId,
  callId,
  title,
  autoOpen,
}: {
  companyId: string;
  chatId: string;
  messageId: string;
  callId?: string;
  title: string;
  autoOpen: boolean;
}) {
  const [page, setPage] = useState(autoOpen ? 0 : null);
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<LoadState>({ type: "loading" });

  useEffect(() => {
    if (page === null) return;
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("/api/chat/peoplenet/result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyId,
            conversationId: chatId,
            assistantMessageId: messageId,
            callId,
            page,
          }),
          signal: controller.signal,
          cache: "no-store",
        });
        const data: unknown = await response.json();
        if (controller.signal.aborted) return;
        if (
          !response.ok &&
          typeof data === "object" &&
          data &&
          "message" in data &&
          typeof data.message === "string"
        ) {
          setState({ type: "error", message: data.message });
          return;
        }
        const result = peopleNetResultSchema.safeParse(data);
        if (!response.ok || !result.success) throw new Error("INVALID_PEOPLENET_RESULT");
        setState({ type: "ready", result: result.data });
      } catch {
        if (!controller.signal.aborted)
          setState({ type: "error", message: "No se pudo cargar el resultado de PeopleNet." });
      }
    }
    void load();
    return () => controller.abort();
  }, [attempt, callId, chatId, companyId, messageId, page]);

  function changePage(next: number | null) {
    setState({ type: "loading" });
    setPage(next);
  }

  const result = state.type === "ready" ? state.result : null;
  return (
    <section
      aria-label={title}
      className="my-2 min-w-0 rounded-xl border border-border bg-card p-3 text-sm sm:p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-medium">{title}</h3>
        <Button
          type="button"
          size="sm"
          variant="outline"
          aria-expanded={page !== null}
          onClick={() => changePage(page === null ? 0 : null)}
        >
          {page === null ? "Ver resultado" : "Ocultar resultado"}
        </Button>
      </div>
      {page !== null && state.type === "loading" ? (
        <p className="mt-2 text-muted-foreground" role="status">
          Consultando PeopleNet…
        </p>
      ) : null}
      {page !== null && state.type === "error" ? (
        <div className="mt-2 space-y-2">
          <p role="alert">{state.message}</p>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => {
              setState({ type: "loading" });
              setAttempt((value) => value + 1);
            }}
          >
            Reintentar
          </Button>
        </div>
      ) : null}
      {page !== null && result ? <PeopleNetTable result={result} changePage={changePage} /> : null}
    </section>
  );
}

function PeopleNetTable({
  result,
  changePage,
}: {
  result: PeopleNetResult;
  changePage: (page: number) => void;
}) {
  const start = result.page * PEOPLENET_PAGE_SIZE;
  return (
    <div className="mt-2 space-y-3">
      {result.debug ? (
        <p className="font-medium text-muted-foreground">Datos ficticios · DEBUG</p>
      ) : null}
      {result.filters.length ? (
        <p className="text-muted-foreground">{result.filters.join(" · ")}</p>
      ) : null}
      {result.message ? <p role="status">{result.message}</p> : null}
      {result.calculations.length ? (
        <dl className="grid gap-x-4 gap-y-1 sm:grid-cols-[1fr_auto]">
          {result.calculations.map(({ label, value }, index) => (
            <div className="contents" key={index}>
              <dt>{label}</dt>
              <dd className="font-medium tabular-nums sm:text-end">{display(value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {result.rows.length ? (
        <div
          className="max-w-full overflow-x-auto rounded-md border border-border focus-visible:outline-ring"
          role="region"
          aria-label="Resultados de PeopleNet"
          tabIndex={0}
        >
          <table className="w-full border-collapse text-left">
            <thead className="bg-muted">
              <tr>
                {result.columns.map((label, index) => (
                  <th className="px-2 py-1.5 font-medium" scope="col" key={index}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, index) => (
                <tr className="border-t border-border" key={index}>
                  {row.map((value, index) => (
                    <td
                      className="max-w-80 px-2 py-1.5 align-top wrap-break-word tabular-nums"
                      key={index}
                    >
                      {display(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !result.message && !result.document ? (
        <p role="status">No hay resultados para esos filtros.</p>
      ) : null}
      {result.total > PEOPLENET_PAGE_SIZE ? (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p aria-live="polite" className="text-muted-foreground">
            {start + 1}–{start + result.rows.length} de {result.total}
          </p>
          <div className="flex gap-1">
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={result.page === 0}
              onClick={() => changePage(result.page - 1)}
            >
              Anterior
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={start + PEOPLENET_PAGE_SIZE >= result.total}
              onClick={() => changePage(result.page + 1)}
            >
              Siguiente
            </Button>
          </div>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <a
          href={result.source.href}
          className="rounded-sm underline underline-offset-2 focus-visible:outline-ring"
        >
          Abrir {result.source.label}
        </a>
        {result.document ? (
          <a
            href={result.document.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm underline underline-offset-2 focus-visible:outline-ring"
          >
            {result.document.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
