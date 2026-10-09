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
  /** Soft section header for grouped rows; plain preserves the existing appearance. */
  headerTone?: "plain" | "muted";
}

/**
 * Superficie única de producto (sustituye a Card). Un solo nivel: no anidar
 * Surface dentro de Surface; separar el contenido con espacio y divisores.
 * Con cabecera, el título queda en un marco suave y el contenido en una
 * tarjeta interior; sin cabecera, solo la tarjeta.
 */
export function Surface({
  title,
  description,
  actions,
  flush = false,
  headerTone = "plain",
  className,
  children,
  ...rest
}: SurfaceProps) {
  const hasHeader = Boolean(title || description || actions);
  const body = flush ? children : <div className="p-4 sm:p-5">{children}</div>;

  if (!hasHeader) {
    return (
      <section
        className={cn(
          "min-w-0 rounded-xl border border-border/70 bg-card text-card-foreground shadow-xs",
          className,
        )}
        {...rest}
      >
        {body}
      </section>
    );
  }

  return (
    <section
      data-header-tone={headerTone}
      className={cn(
        "min-w-0 rounded-2xl border border-border/60 bg-muted/50 p-1 text-card-foreground",
        className,
      )}
      {...rest}
    >
      <header className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 pt-1.5 pb-2">
        <div className="min-w-0 space-y-0.5">
          {title ? (
            <h2 className="text-sm font-normal text-muted-foreground">{title}</h2>
          ) : null}
          {description ? (
            <p className="text-xs text-muted-foreground/80">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </header>
      <div className="min-w-0 overflow-hidden rounded-xl border border-border/60 bg-card shadow-xs">
        {body}
      </div>
    </section>
  );
}
