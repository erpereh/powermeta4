"use client";

import { Check } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

import { useAccent } from "@/hooks/use-accent";
import { ACCENT_PRESETS } from "@/lib/theme/accent";
import { cn } from "@/lib/utils";

export interface AccentControlProps
  extends Omit<ComponentPropsWithoutRef<"fieldset">, "children"> {
  /** Nombre accesible del grupo. */
  legend?: string;
}

/**
 * Selector del color de acento. Radios nativos (teclado con flechas); cada
 * muestra declara su propio `data-accent`, así `bg-primary` pinta el color
 * del preset en el modo claro u oscuro activo.
 */
export function AccentControl({
  legend = "Color de acento",
  className,
  ...rest
}: AccentControlProps) {
  const [accent, setAccent] = useAccent();

  return (
    <fieldset className={cn("min-w-0", className)} {...rest}>
      <legend className="sr-only">{legend}</legend>
      <div className="flex flex-wrap gap-3">
        {ACCENT_PRESETS.map((preset) => {
          const checked = accent === preset.id;
          return (
            <label
              key={preset.id}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-full border border-border bg-elevated py-1 pr-3 pl-1 text-sm text-foreground transition-colors hover:bg-muted",
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
                checked && "border-primary bg-selected text-selected-foreground",
              )}
            >
              <input
                type="radio"
                name="accent"
                value={preset.id}
                checked={checked}
                onChange={() => setAccent(preset.id)}
                className="sr-only"
              />
              <span
                data-accent={preset.id}
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                {checked ? <Check className="size-3.5" /> : null}
              </span>
              {preset.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
