"use client";

import Link from "next/link";
import { ChevronDown, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button, IconChip, Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/system";
import type { PortalHomeSection } from "@/lib/portal/home-sections";
import { PORTAL_ICON_TONES } from "@/lib/theme/icon-tones";

import { PORTAL_ICONS } from "./portal-icons";

/** Tab sale del menú junto al disparador, aunque el contenido viva en un portal. */
function tabFromTrigger(trigger: HTMLButtonElement | null, backwards: boolean) {
  if (!trigger) return;
  const controls = Array.from(
    document.querySelectorAll<HTMLElement>("a[href], button, input, select, textarea, [tabindex]"),
  ).filter(
    (element) =>
      element.tabIndex >= 0 &&
      !element.matches(":disabled") &&
      !element.closest('[role="menu"], [hidden], [inert], [aria-hidden="true"]') &&
      (element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0),
  );
  const index = controls.indexOf(trigger);
  const next = controls[index + (backwards ? -1 : 1)];
  (next ?? trigger).focus();
}

export function PortalHomeSections({ sections }: { sections: readonly PortalHomeSection[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeId = useRef<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keyboard = useRef(false);
  const restoreFocus = useRef(false);
  const triggers = useRef(new Map<string, HTMLButtonElement>());

  function clearTimer() {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  }

  useEffect(
    () => () => {
      if (timer.current !== null) clearTimeout(timer.current);
    },
    [],
  );

  function changeOpen(id: string | null) {
    clearTimer();
    activeId.current = id;
    setOpenId(id);
  }

  function focusFirstItem(id: string) {
    const contentId = triggers.current.get(id)?.getAttribute("aria-controls");
    if (contentId)
      document.getElementById(contentId)?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
  }

  function openOnHover(id: string) {
    clearTimer();
    if (activeId.current === id) return;
    timer.current = setTimeout(() => {
      keyboard.current = false;
      restoreFocus.current = false;
      changeOpen(id);
    }, 150);
  }

  function closeOnLeave(id: string) {
    clearTimer();
    if (keyboard.current) return;
    timer.current = setTimeout(() => {
      if (activeId.current === id) {
        restoreFocus.current = false;
        changeOpen(null);
      }
    }, 250);
  }

  return (
    <div
      data-portal-home-sections
      className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-6 py-4 sm:grid-cols-2 sm:gap-y-10 sm:py-6 lg:grid-cols-3"
    >
      {sections.map((section) => (
        <Menu
          key={section.id}
          modal={false}
          open={openId === section.id}
          onOpenChange={(next) => {
            if (next || activeId.current === section.id) changeOpen(next ? section.id : null);
          }}
        >
          <MenuTrigger asChild>
            <Button
              ref={(node) => {
                if (node) triggers.current.set(section.id, node);
                else triggers.current.delete(section.id);
              }}
              variant="ghost"
              pressScale={1}
              className="group mx-auto h-auto min-h-44 w-full max-w-64 flex-col gap-3 rounded-2xl border border-transparent bg-transparent px-3 py-5 text-center text-foreground hover:bg-transparent data-open:border-ring/70 data-open:bg-transparent"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") openOnHover(section.id);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") closeOnLeave(section.id);
              }}
              onPointerDown={() => {
                clearTimer();
                keyboard.current = false;
                restoreFocus.current = true;
              }}
              onKeyDown={(event) => {
                clearTimer();
                keyboard.current = true;
                restoreFocus.current = true;
                if (event.key === "ArrowDown" && activeId.current === section.id) {
                  event.preventDefault();
                  focusFirstItem(section.id);
                }
              }}
            >
              <IconChip
                icon={section.id.endsWith(".herramientas") ? Wrench : PORTAL_ICONS[section.icon]}
                tone={section.tone}
                size="xl"
                appearance="solid"
                className="border border-tone-solid-foreground/20 shadow-sm transition-transform motion-safe:group-hover:-translate-y-1"
              />
              <span className="text-base leading-snug font-semibold whitespace-normal wrap-break-word">
                {section.title}
              </span>
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-muted-foreground transition-transform group-data-open:rotate-180"
              />
            </Button>
          </MenuTrigger>
          <MenuContent
            align="center"
            sideOffset={8}
            collisionPadding={16}
            loop
            className="w-80 max-w-[calc(100vw-2rem)] p-2 data-closed:hidden"
            onOpenAutoFocus={(event) => {
              if (!restoreFocus.current || keyboard.current) event.preventDefault();
              if (keyboard.current) focusFirstItem(section.id);
            }}
            onCloseAutoFocus={(event) => {
              if (!restoreFocus.current || activeId.current !== null) event.preventDefault();
            }}
            onPointerEnter={clearTimer}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") closeOnLeave(section.id);
            }}
            onEscapeKeyDown={() => {
              restoreFocus.current = true;
              clearTimer();
            }}
            onKeyDown={(event) => {
              clearTimer();
              keyboard.current = true;
              restoreFocus.current = true;
              if (event.key === "Tab") {
                event.preventDefault();
                restoreFocus.current = false;
                changeOpen(null);
                tabFromTrigger(triggers.current.get(section.id) ?? null, event.shiftKey);
              }
            }}
          >
            {section.items.map((item) => (
              <MenuItem
                key={item.id}
                asChild
                className="min-h-11 gap-3 px-3 py-2.5 whitespace-normal wrap-break-word focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              >
                <Link href={item.href}>
                  <IconChip
                    icon={PORTAL_ICONS[item.icon]}
                    tone={PORTAL_ICON_TONES[item.icon]}
                    appearance="plain"
                    size="xs"
                  />
                  <span className="min-w-0">{item.title}</span>
                </Link>
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      ))}
    </div>
  );
}
