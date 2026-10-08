"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { Button, ButtonLink } from "./button";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "./menu";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select";

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
  variant?: "underline" | "pill" | "segment";
  overflow?: "scroll" | "menu";
  /** Optional width for overflow menus; constrained to the viewport. */
  menuWidth?: number;
  revealActive?: boolean;
  className?: string;
}

function SegmentLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <ButtonLink asChild variant="ghost" size="sm" pressScale={1} className={className}>
      <Link {...props} />
    </ButtonLink>
  );
}

/**
 * Navegación entre secciones con enlaces reales, subrayados o pill. Las
 * flechas izquierda/derecha, Inicio y Fin mueven el foco entre enlaces.
 */
export function SectionNav({
  items,
  activeHref,
  variant = "underline",
  overflow = "scroll",
  menuWidth,
  revealActive = true,
  className,
  ...rest
}: SectionNavProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const NavigationLink = variant === "segment" ? SegmentLink : Link;

  useEffect(() => {
    if (!revealActive) return;
    listRef.current
      ?.querySelector<HTMLAnchorElement>('a[aria-current="page"]')
      ?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
  }, [activeHref, revealActive]);

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

  if (overflow === "menu")
    return (
      <AdaptiveSectionNav
        items={items}
        activeHref={activeHref}
        variant={variant}
        menuWidth={menuWidth}
        className={className}
        aria-label={rest["aria-label"]}
      />
    );

  return (
    <nav aria-label={rest["aria-label"]} className={cn("min-w-0", className)}>
      <ul
        ref={listRef}
        onKeyDown={onKeyDown}
        className={cn(
          "no-scrollbar flex min-w-0 gap-1 overflow-x-auto",
          variant === "pill"
            ? "w-fit max-w-full rounded-full bg-card p-1"
            : variant === "segment"
              ? "w-fit max-w-full rounded-lg bg-muted/40 p-1"
              : "border-b border-border",
        )}
      >
        {items.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href} className="shrink-0">
              <NavigationLink
                href={item.href}
                data-section-link
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center gap-1.5 px-3 text-sm whitespace-nowrap transition-colors outline-none",
                  "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60",
                  variant === "pill"
                    ? "h-9 rounded-full"
                    : variant === "segment"
                      ? "h-9 rounded-md"
                      : "h-10 rounded-t-md",
                  active
                    ? variant === "pill"
                      ? "bg-primary font-medium text-primary-foreground"
                      : variant === "segment"
                        ? "bg-background font-medium text-primary shadow-sm ring-1 ring-border"
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
              </NavigationLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Keeps the current route visible; hidden routes remain real links in the menu. */
function AdaptiveSectionNav({
  items,
  activeHref,
  variant = "underline",
  className,
  menuWidth,
  "aria-label": label,
}: SectionNavProps) {
  const router = useRouter();
  const root = useRef<HTMLElement>(null);
  const measurements = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{ visible: string[]; select: boolean }>({
    visible: items.map((item) => item.href),
    select: false,
  });
  useEffect(() => {
    const element = root.current;
    const measure = measurements.current;
    if (!element || !measure) return;
    const update = () => {
      const widths = [...measure.children].map((child) => child.getBoundingClientRect().width);
      const available = element.getBoundingClientRect().width - (variant === "underline" ? 0 : 8);
      const activeIndex = Math.max(
        0,
        items.findIndex((item) => item.href === activeHref),
      );
      const moreWidth = widths[items.length] ?? 88;
      const select =
        window.innerWidth < 768 ||
        (available > 0 && (widths[activeIndex] ?? 0) + moreWidth + 4 > available);
      const total = widths.slice(0, items.length).reduce((sum, width) => sum + width + 4, -4);
      const chosen = new Set<number>();
      if (total <= available || available <= 0) items.forEach((_, index) => chosen.add(index));
      else {
        chosen.add(activeIndex);
        let used = (widths[activeIndex] ?? 0) + moreWidth + 4;
        items.forEach((_, index) => {
          if (index !== activeIndex && used + widths[index] + 4 <= available) {
            chosen.add(index);
            used += widths[index] + 4;
          }
        });
      }
      setLayout({
        visible: items.filter((_, index) => chosen.has(index)).map((item) => item.href),
        select,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    observer.observe(measure);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [items, activeHref, variant]);
  const hidden = items.filter((item) => !layout.visible.includes(item.href));
  return (
    <nav
      ref={root}
      aria-label={label}
      className={cn("relative min-w-0 overflow-x-clip", className)}
    >
      <div
        ref={measurements}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex h-0 overflow-hidden whitespace-nowrap opacity-0"
      >
        {items.map((item) => (
          <span
            key={item.href}
            className="inline-flex shrink-0 items-center gap-1.5 px-3 text-sm font-medium"
          >
            {item.icon}
            {item.label}
            {item.badge ? <span className="px-1.5 text-[10px]">{item.badge}</span> : null}
          </span>
        ))}
        <span className="inline-flex shrink-0 items-center gap-2 px-3 text-sm">
          Más
          <ChevronDown className="size-4" />
        </span>
      </div>
      {layout.select ? (
        <Select value={activeHref ?? undefined} onValueChange={(href) => router.push(href)}>
          <SelectTrigger aria-label={label} className="w-full">
            <span className="min-w-0 truncate">
              {items.find((item) => item.href === activeHref)?.label ?? "Elegir apartado"}
            </span>
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                {item.label}
                {item.badge ? ` · ${item.badge}` : ""}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div
          className={cn(
            "flex min-w-0 items-center gap-1",
            variant === "pill"
              ? "rounded-xl bg-muted/40 p-1"
              : variant === "segment"
                ? "w-fit max-w-full rounded-lg bg-muted/40 p-1"
                : "border-b border-border",
          )}
        >
          <SectionNav
            revealActive={false}
            items={items.filter((item) => layout.visible.includes(item.href))}
            activeHref={activeHref}
            variant={variant}
            aria-label={`${label}: pestañas`}
            className="[&_ul]:overflow-visible [&_ul]:border-0 [&_ul]:bg-transparent [&_ul]:p-0"
          />
          {hidden.length ? (
            <Menu>
              <MenuTrigger asChild>
                <Button variant="ghost" size="sm" className="shrink-0" aria-label={`Más: ${label}`}>
                  Más
                  <ChevronDown className="size-4" aria-hidden="true" />
                </Button>
              </MenuTrigger>
              <MenuContent
                align="end"
                style={menuWidth ? { width: menuWidth, maxWidth: "calc(100vw - 2rem)" } : undefined}
              >
                {hidden.map((item) => (
                  <MenuItem
                    key={item.href}
                    asChild
                    className={
                      menuWidth ? "items-start whitespace-normal wrap-break-word" : undefined
                    }
                  >
                    <Link href={item.href}>
                      {item.label}
                      {item.badge ? ` · ${item.badge}` : ""}
                    </Link>
                  </MenuItem>
                ))}
              </MenuContent>
            </Menu>
          ) : null}
        </div>
      )}
    </nav>
  );
}
