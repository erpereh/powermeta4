"use client";

import Link from "next/link";
import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionNavItem = {
  href: string;
  label: string;
  icon?: ReactNode;
  /** Marca de estado breve (p. ej. «Pendiente»), siempre con texto. */
  badge?: string;
};

export interface SectionNavProps {
  items: readonly SectionNavItem[];
  /** Ruta activa: el elemento con el mismo href se marca con aria-current. */
  activeHref: string | null;
  "aria-label": string;
  variant?: "underline" | "pill";
  className?: string;
}

/**
 * Navegación entre secciones con enlaces reales, subrayados o pill. Las
 * flechas izquierda/derecha, Inicio y Fin mueven el foco entre enlaces.
 */
export function SectionNav({
  items,
  activeHref,
  variant = "underline",
  className,
  ...rest
}: SectionNavProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLAnchorElement>('a[aria-current="page"]')
      ?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
  }, [activeHref]);

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const links = [
      ...(listRef.current?.querySelectorAll<HTMLAnchorElement>("a[data-section-link]") ?? []),
    ];
    const index = links.findIndex((link) => link === document.activeElement);
    if (index < 0) return;
    const next =
      event.key === "ArrowRight"
        ? links[(index + 1) % links.length]
        : event.key === "ArrowLeft"
          ? links[(index - 1 + links.length) % links.length]
          : event.key === "Home"
            ? links[0]
            : event.key === "End"
              ? links.at(-1)
              : null;
    if (!next) return;
    event.preventDefault();
    next.focus();
  };

  return (
    <nav aria-label={rest["aria-label"]} className={cn("min-w-0", className)}>
      <ul
        ref={listRef}
        onKeyDown={onKeyDown}
        className={cn(
          "no-scrollbar flex min-w-0 gap-1 overflow-x-auto",
          variant === "pill"
            ? "w-fit max-w-full rounded-full bg-card p-1"
            : "border-b border-border",
        )}
      >
        {items.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                data-section-link
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center gap-1.5 px-3 text-sm whitespace-nowrap transition-colors outline-none",
                  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60",
                  variant === "pill" ? "h-9 rounded-full" : "h-10 rounded-t-md",
                  active
                    ? variant === "pill"
                      ? "bg-primary font-medium text-primary-foreground"
                      : "font-medium text-foreground after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.icon ? (
                  <span aria-hidden="true" className="[&_svg]:size-4">
                    {item.icon}
                  </span>
                ) : null}
                {item.label}
                {item.badge ? (
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-px text-[10px] font-medium",
                      active && variant === "pill"
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
