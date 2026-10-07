import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface StatTileProps {
  label: ReactNode;
  value: ReactNode;
  /** Nota o explicación breve bajo la cifra. */
  note?: ReactNode;
  icon?: LucideIcon;
  /** Acento semántico opcional de la cifra (clases estáticas del llamador). */
  valueClassName?: string;
  className?: string;
  children?: ReactNode;
}

/** Cifra destacada: etiqueta pequeña, valor grande y nota opcional. */
export function StatTile({
  label,
  value,
  note,
  icon: Icon,
  valueClassName,
  className,
  children,
}: StatTileProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1.5 rounded-xl border border-border bg-card p-4 text-card-foreground",
        className,
      )}
    >
      <p className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
        {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden="true" /> : null}
        <span className="truncate">{label}</span>
      </p>
      <p
        className={cn(
          "truncate text-xl font-semibold tracking-tight text-foreground tabular-nums",
          valueClassName,
        )}
      >
        {value}
      </p>
      {note ? <p className="text-xs text-muted-foreground">{note}</p> : null}
      {children}
    </div>
  );
}
