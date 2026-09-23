"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/system";
import { cn } from "@/lib/utils";
import type { AppView } from "@/features/registro-retributivo/types/views";

import { RETRIBUTIVO_NAV_ITEMS } from "./retributivo-nav-items";

type RetributivoInnerNavProps = {
  readonly view: AppView;
  readonly onSelectView: (view: AppView) => void;
  readonly className?: string;
};

function isAppView(value: string): value is AppView {
  return RETRIBUTIVO_NAV_ITEMS.some((item) => item.id === value);
}

/**
 * Navegación de vistas con Tabs underline de beUI. En pantallas estrechas
 * solo la pestaña activa muestra su etiqueta (patrón expandable-tabs); el
 * resto conserva el nombre accesible mediante texto sr-only.
 */
export function RetributivoInnerNav({
  view,
  onSelectView,
  className,
}: RetributivoInnerNavProps) {
  return (
    <nav aria-label="Navegación de Registro Retributivo" className={cn("min-w-0 max-w-full", className)}>
      <Tabs
        variant="underline"
        value={view}
        onValueChange={(value) => {
          if (isAppView(value)) onSelectView(value);
        }}
      >
        <TabsList className="border-b-0" wrapperClassName="max-w-full">
          {RETRIBUTIVO_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <TabsTrigger key={item.id} value={item.id} className="gap-2">
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className={cn(!active && "sr-only md:not-sr-only")}>{item.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
}
