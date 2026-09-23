import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CalloutStatus = "info" | "success" | "error";

export interface CalloutProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  status?: CalloutStatus;
  title: ReactNode;
  children?: ReactNode;
  /** Acción opcional (p. ej. reintentar) al final del bloque. */
  action?: ReactNode;
}

const STATUS_ICON = {
  info: Info,
  success: CheckCircle2,
  error: AlertCircle,
} as const;

const STATUS_CLASS: Record<CalloutStatus, string> = {
  info: "border-border bg-muted/40 [&_[data-callout-icon]]:text-muted-foreground",
  success: "border-border bg-selected/60 [&_[data-callout-icon]]:text-primary",
  error: "border-destructive/30 bg-destructive/5 [&_[data-callout-icon]]:text-destructive",
};

/** Aviso en línea de producto (sustituye a Alert). Los errores se anuncian con role=alert. */
export function Callout({
  status = "info",
  title,
  children,
  action,
  className,
  ...rest
}: CalloutProps) {
  const Icon = STATUS_ICON[status];

  return (
    <div
      role={status === "error" ? "alert" : "status"}
      className={cn(
        "flex min-w-0 items-start gap-3 rounded-xl border px-4 py-3 text-sm",
        STATUS_CLASS[status],
        className,
      )}
      {...rest}
    >
      <Icon data-callout-icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="font-medium text-foreground">{title}</p>
        {children ? <div className="text-muted-foreground">{children}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
