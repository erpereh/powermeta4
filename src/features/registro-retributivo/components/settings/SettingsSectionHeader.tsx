import type { ReactNode } from "react";

/** Cabecera común de cada sección de Ajustes: título y para qué sirve. */
export function SettingsSectionHeader({ title, description, actions }: Readonly<{ title: string; description: string; actions?: ReactNode }>) {
  return (
    <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0 max-w-2xl">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}
