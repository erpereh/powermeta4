import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface PropertyListItem {
  /** Clave estable de la fila. */
  id?: string;
  label: ReactNode;
  value: ReactNode;
  icon?: LucideIcon;
}

export interface PropertyListProps {
  items: readonly PropertyListItem[];
  /** Fila final a todo el ancho (estado, nota o acción). */
  footer?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

/** Tabla clave‑valor de dos columnas con filetes interiores (un `dl`). */
export function PropertyList({
  items,
  footer,
  className,
  "aria-label": ariaLabel,
}: PropertyListProps) {
  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className,
      )}
    >
      <dl aria-label={ariaLabel} className="divide-y divide-border">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id ?? index}
              className="grid min-w-0 gap-1 px-4 py-2.5 text-sm sm:grid-cols-[minmax(9rem,32%)_1fr] sm:gap-4"
            >
              <dt className="flex min-w-0 items-center gap-2 text-muted-foreground">
                {Icon ? <Icon className="size-4 shrink-0" aria-hidden="true" /> : null}
                <span className="min-w-0 truncate">{item.label}</span>
              </dt>
              <dd className="min-w-0 wrap-break-word font-medium text-foreground">{item.value}</dd>
            </div>
          );
        })}
      </dl>
      {footer ? (
        <div className="border-t border-border bg-muted/30 px-4 py-2.5 text-sm">{footer}</div>
      ) : null}
    </div>
  );
}
