"use client";

import NextLink from "next/link";
import { createContext, useContext, type ComponentProps } from "react";
import { SectionNav } from "@/components/system";

export const PortalDebugNavigation = createContext("");
export function usePortalDebugHref() {
  const search = useContext(PortalDebugNavigation);
  const params = new URLSearchParams(search);
  return (href: string): string => {
    if (
      process.env.NODE_ENV !== "development" ||
      !href.startsWith("/portal") ||
      !["debugActor", "debugVariant", "debugScenario"].some((key) => params.has(key))
    )
      return href;
    const [pathname, search] = href.split("?", 2);
    const next = new URLSearchParams(search);
    for (const key of ["debugActor", "debugVariant", "debugScenario"]) {
      const value = params.get(key);
      if (value) next.set(key, value);
    }
    return `${pathname}?${next}`;
  };
}

export function PortalLink(props: ComponentProps<typeof NextLink>) {
  const href = usePortalDebugHref();
  return (
    <NextLink {...props} href={typeof props.href === "string" ? href(props.href) : props.href} />
  );
}

export function PortalSectionNav(props: ComponentProps<typeof SectionNav>) {
  const href = usePortalDebugHref();
  return (
    <SectionNav
      {...props}
      items={props.items.map((item) => ({ ...item, href: href(item.href) }))}
      activeHref={props.activeHref ? href(props.activeHref) : props.activeHref}
    />
  );
}
