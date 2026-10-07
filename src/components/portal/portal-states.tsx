import { CircleAlert, Lock, PlugZap } from "lucide-react";
import type { ReactNode } from "react";

import { Callout, IconChip } from "@/components/system";
import { PENDING_LABELS } from "@/lib/portal/pending";
import type { PendingId, WriteOperation } from "@/lib/portal/types";
import { cn } from "@/lib/utils";

function PendingChips({ pending }: { pending: readonly PendingId[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Pendientes">
      {pending.map((id) => (
        <li
          key={id}
          title={PENDING_LABELS[id].detail}
          className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
        >
          <span className="tabular-nums">{id}</span> · {PENDING_LABELS[id].title}
        </li>
      ))}
    </ul>
  );
}

/**
 * Estado honesto de una lectura sin contrato real: explica qué lee el
 * original y qué falta, sin mostrar datos simulados.
 */
export function DependencyState({
  title = "Datos pendientes de conexión",
  message,
  pending,
  meta4 = [],
  className,
  children,
}: {
  title?: string;
  message: string;
  pending: readonly PendingId[];
  meta4?: readonly string[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:p-5",
        className,
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <IconChip icon={PlugZap} tone="amber" size="md" />
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground [overflow-wrap:anywhere]">{message}</p>
        </div>
      </div>
      {meta4.length > 0 ? (
        <p className="min-w-0 break-words text-xs text-muted-foreground [overflow-wrap:anywhere]">
          <span className="font-medium text-foreground">Lectura original: </span>
          <code className="font-mono">{meta4.join(" · ")}</code>
        </p>
      ) : null}
      <PendingChips pending={pending} />
      {children}
    </div>
  );
}

/** Aviso fijo junto al envío: el método Meta4 y por qué no se ejecuta. */
export function WriteBlockedNotice({
  write,
  id,
  mode = "request",
}: {
  write: WriteOperation;
  id?: string;
  mode?: "request" | "query";
}) {
  return (
    <div
      id={id}
      className="flex min-w-0 items-start gap-2.5 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-xs text-muted-foreground"
    >
      <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      <p className="min-w-0 break-words [overflow-wrap:anywhere]">
        <span className="font-medium text-foreground">
          {mode === "query" ? "Consulta no disponible." : "Envío no disponible."}
        </span>{" "}
        El original ejecuta <code className="font-mono text-foreground">{write.meta4Method}</code>
        {write.arguments ? (
          <>
            {" "}
            (<code className="font-mono">{write.arguments}</code>)
          </>
        ) : null}
        .{" "}
        {mode === "query"
          ? `Su cálculo solo existe en el runtime Meta4 y no hay un servicio publicado para ejecutarlo (${write.pending.join(", ")}). No se muestra ningún resultado estimado.`
          : `No hay un servicio publicado ni autorización de escritura para hacerlo desde powermeta4 (${write.pending.join(", ")}). Nada se envía ni se guarda.`}
      </p>
    </div>
  );
}

export function PortalError({ message }: { message: string }) {
  return (
    <Callout status="error" title="No se han podido cargar los datos">
      {message}
    </Callout>
  );
}

export function SensitiveLocked({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 text-sm"
    >
      <CircleAlert className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <div className="min-w-0 space-y-1">
        <p className="font-medium text-foreground">Alcance pendiente de verificación</p>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
