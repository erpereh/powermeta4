import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Contenedor de toolbar + viewport de scroll para tablas semánticas especiales
 * (cabeceras multinivel, celdas expandibles) donde Table de system no encaja.
 * Misma densidad/tokens que el resto de superficies de producto.
 */
export function DataTableShell({
  toolbar,
  summary,
  children,
  empty,
  className,
  viewportClassName = "max-h-[70dvh]",
}: Readonly<{
  toolbar?: ReactNode;
  summary?: ReactNode;
  children: ReactNode;
  empty?: ReactNode;
  className?: string;
  viewportClassName?: string;
}>) {
  return (
    <div
      data-surface="table-shell"
      className={cn(
        "flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      {toolbar ? (
        <div data-slot="table-toolbar" className="min-w-0 shrink-0 border-b border-border px-4 py-4 sm:px-5">
          {toolbar}
        </div>
      ) : null}
      {summary ? (
        <div data-slot="table-summary" className="min-w-0 shrink-0 border-b border-border bg-muted/40 px-4 py-3 sm:px-5">
          {summary}
        </div>
      ) : null}
      <div
        data-slot="table-viewport"
        className={cn("min-w-0 w-full max-w-full overflow-auto", viewportClassName)}
      >
        {children}
        {empty}
      </div>
    </div>
  );
}
