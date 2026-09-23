import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SurfaceProps extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  /** Título opcional del bloque; se renderiza como h2. */
  title?: ReactNode;
  description?: ReactNode;
  /** Acciones alineadas a la derecha de la cabecera. */
  actions?: ReactNode;
  /** Sin padding interno (listas y tablas a sangre). */
  flush?: boolean;
}

/**
 * Superficie única de producto (sustituye a Card). Un solo nivel: no anidar
 * Surface dentro de Surface; separar el contenido con espacio y divisores.
 */
export function Surface({
  title,
  description,
  actions,
  flush = false,
  className,
  children,
  ...rest
}: SurfaceProps) {
  const hasHeader = Boolean(title || description || actions);

  return (
    <section
      className={cn(
        "min-w-0 rounded-xl border border-border bg-card text-card-foreground",
        className,
      )}
      {...rest}
    >
      {hasHeader ? (
        <header
          className={cn(
            "flex min-w-0 flex-wrap items-start justify-between gap-x-4 gap-y-2 px-4 pt-4 sm:px-5",
            flush ? "pb-3" : "pb-0",
          )}
        >
          <div className="min-w-0 space-y-0.5">
            {title ? (
              <h2 className="text-sm font-semibold text-foreground">{title}</h2>
            ) : null}
            {description ? (
              <p className="text-xs text-muted-foreground">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </header>
      ) : null}
      {flush ? children : <div className="p-4 sm:p-5">{children}</div>}
    </section>
  );
}
