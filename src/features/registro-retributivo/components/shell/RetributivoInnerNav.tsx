"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AppView } from "@/features/registro-retributivo/types/views";

import { RETRIBUTIVO_NAV_ITEMS } from "./retributivo-nav-items";

type RetributivoInnerNavProps = {
  readonly view: AppView;
  readonly onSelectView: (view: AppView) => void;
  readonly className?: string;
};

export function RetributivoInnerNav({ view, onSelectView, className }: RetributivoInnerNavProps) {
  return (
    <nav
      aria-label="Navegación de Registro Retributivo"
      className={cn("flex min-h-0 flex-col gap-1", className)}
    >
      {RETRIBUTIVO_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = view === item.id;
        return (
          <Button
            key={item.id}
            type="button"
            variant={active ? "secondary" : "ghost"}
            aria-current={active ? "page" : undefined}
            className="w-full justify-start"
            onClick={() => onSelectView(item.id)}
          >
            <Icon data-icon="inline-start" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}
