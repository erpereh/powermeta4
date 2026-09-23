"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";

import {
  ThemeToggle as BeuiThemeToggle,
  type ThemeToggleProps as BeuiThemeToggleProps,
} from "@/components/motion/theme-toggle";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = Omit<BeuiThemeToggleProps, "variant">;

/** Toggle circle light/dark (beUI). El producto también expone ThemeModeControl para system. */
export function ThemeToggle({
  start = "center",
  className,
  ...rest
}: ThemeToggleProps) {
  return (
    <BeuiThemeToggle
      variant="circle"
      start={start}
      className={cn(
        "size-9 rounded-full border border-border bg-elevated text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      iconClassName="size-4"
      {...rest}
    />
  );
}

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeModeControlProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  /** Etiqueta accesible del grupo. */
  "aria-label"?: string;
}

/**
 * Fija light | dark | system con next-themes.
 * Light/dark reutilizan el mismo control visual circle de ThemeToggle;
 * system usa el mismo contenedor con next-themes.
 */
export function ThemeModeControl({
  className,
  "aria-label": ariaLabel = "Tema de la interfaz",
  ...rest
}: ThemeModeControlProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current: ThemeMode = !mounted
    ? "system"
    : theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-elevated p-1",
        className,
      )}
      {...rest}
    >
      <button
        type="button"
        aria-label="Tema claro"
        aria-pressed={current === "light"}
        onClick={() => setTheme("light")}
        className={cn(
          "grid size-8 place-items-center rounded-full text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
          current === "light" && "bg-selected text-foreground",
        )}
      >
        <Sun className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Tema oscuro"
        aria-pressed={current === "dark"}
        onClick={() => setTheme("dark")}
        className={cn(
          "grid size-8 place-items-center rounded-full text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
          current === "dark" && "bg-selected text-foreground",
        )}
      >
        <Moon className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Tema del sistema"
        aria-pressed={current === "system"}
        onClick={() => setTheme("system")}
        className={cn(
          "grid size-8 place-items-center rounded-full text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
          current === "system" && "bg-selected text-foreground",
        )}
        title={
          mounted && current === "system"
            ? `Sistema (${resolvedTheme ?? "—"})`
            : "Sistema"
        }
      >
        <Monitor className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
