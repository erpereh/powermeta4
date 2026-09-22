"use client";

import { Button } from "@/components/system";
import { cn } from "@/lib/utils";
import type { AppView } from "@/features/registro-retributivo/types/views";

import { RETRIBUTIVO_NAV_ITEMS } from "./retributivo-nav-items";

type RetributivoInnerNavProps = {
  readonly view: AppView;
  readonly onSelectView: (view: AppView) => void;
  readonly className?: string;
  readonly orientation?: "vertical" | "horizontal";
};

export function RetributivoInnerNav({
  view,
  onSelectView,
  className,
  orientation = "vertical",
}: RetributivoInnerNavProps) {
  const horizontal = orientation === "horizontal";

  return (
    <nav
      aria-label="Navegación de Registro Retributivo"
      className={cn(
        horizontal
          ? "no-scrollbar flex min-w-0 max-w-full gap-1 overflow-x-auto"
          : "flex min-h-0 flex-col gap-1",
        className,
      )}
    >
      {RETRIBUTIVO_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = view === item.id;
        return (
          <Button
            key={item.id}
            type="button"
            variant={active ? "secondary" : "ghost"}
            size="sm"
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-lg",
              horizontal ? "shrink-0" : "w-full justify-start",
            )}
            onClick={() => onSelectView(item.id)}
          >
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}
