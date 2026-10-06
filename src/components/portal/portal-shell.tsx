"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import type { ReactNode } from "react";

import { useOptionalAppCommandPalette } from "@/components/app-shell/app-command-palette";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  PageHeader,
  SectionNav,
  Tooltip,
} from "@/components/system";
import {
  getDomainForRoute,
  getPortalFeatureByRoute,
  getPortalMenuLocation,
  getPortalMenuPages,
  getProfileForRoute,
} from "@/lib/portal/registry";
import type { PortalProfile, PortalVariant } from "@/lib/portal/types";
import { cn } from "@/lib/utils";

export type PortalShellPerson = {
  fullName: string;
  employeeId: string;
  job: string | null;
  unit: string | null;
  workCenter: string | null;
};

export type PortalShellContext =
  | {
      mode: "meta4";
      society: string;
      variant: PortalVariant;
      person: PortalShellPerson | null;
      identityMessage: string | null;
    }
  | { mode: "unavailable"; message: string };

const PROFILE_LINKS: readonly { profile: PortalProfile; href: string; label: string }[] = [
  { profile: "empleado", href: "/portal", label: "Empleado" },
  { profile: "responsable", href: "/portal/responsable", label: "Responsable" },
];

function ProfileSwitch({ active }: { active: PortalProfile }) {
  return (
    <nav aria-label="Perfil del portal" className="shrink-0">
      <ul className="flex rounded-full border border-border bg-muted/40 p-0.5">
        {PROFILE_LINKS.map((item) => {
          const current = item.profile === active;
          return (
            <li key={item.profile}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "inline-flex h-8 items-center rounded-full px-3 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                  current
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function PortalBreadcrumb({ pathname }: { pathname: string }) {
  const domain = getDomainForRoute(pathname);
  const feature = getPortalFeatureByRoute(pathname);
  const location = getPortalMenuLocation(pathname);
  const crumbs: { href: string; label: string }[] = [{ href: "/portal", label: "Portal" }];
  if (pathname.startsWith("/portal/responsable"))
    crumbs.push({ href: "/portal/responsable", label: "Responsable" });
  if (location) {
    crumbs.push({ href: location.section.route, label: location.section.title });
    if (location.group && location.group.title !== location.page?.title)
      crumbs.push({ href: location.group.pages[0].route, label: location.group.title });
  } else if (domain && domain.route !== pathname)
    crumbs.push({ href: domain.route, label: domain.title });
  const last =
    feature?.title ??
    (domain?.route === pathname
      ? domain.title
      : pathname === "/portal"
        ? "Inicio"
        : pathname.includes("/personas/")
          ? "Ficha"
          : null);
  const filtered = crumbs.filter(
    (crumb) => crumb.href !== pathname || crumb.label !== feature?.title,
  );
  return (
    <Breadcrumb aria-label="Ruta">
      <BreadcrumbList className="flex-nowrap overflow-hidden">
        {filtered.map((crumb, index) => (
          <span key={`${crumb.href}:${index}`} className="contents">
            <BreadcrumbItem className="hidden min-w-0 sm:inline-flex">
              <BreadcrumbLink asChild>
                <Link href={crumb.href} className="truncate">
                  {crumb.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:inline-flex" />
          </span>
        ))}
        <BreadcrumbItem className="min-w-0">
          <BreadcrumbPage className="truncate font-medium text-foreground">
            {last ?? "Portal"}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/** Marco del portal: perfil y pestañas principales derivadas de la URL. */
export function PortalShell({
  context,
  children,
}: {
  context: PortalShellContext;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const palette = useOptionalAppCommandPalette();
  const profile = getProfileForRoute(pathname);
  const location = getPortalMenuLocation(pathname);
  const variant = context.mode === "meta4" ? context.variant : undefined;
  const groups =
    location?.section.groups.flatMap((group) => {
      const first = getPortalMenuPages(group, variant)[0];
      return first
        ? [
            {
              href: first.route,
              label: group.title,
              badge: group.pages.length === 1 ? first.modeLabel : undefined,
            },
          ]
        : [];
    }) ?? [];
  const activeGroupHref = location?.group
    ? (getPortalMenuPages(location.group, variant)[0]?.route ?? null)
    : null;
  const person = context.mode === "meta4" ? context.person : null;

  return (
    <div data-portal-root className="flex min-h-svh min-w-0 flex-col">
      <PageHeader
        title={<PortalBreadcrumb pathname={pathname} />}
        actions={
          palette ? (
            <Tooltip content="Buscar en el portal (Ctrl+K)" side="bottom">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Buscar en el portal"
                aria-keyshortcuts="Control+K"
                onClick={() => palette.openCommandPalette("portal")}
              >
                <Search className="size-4" aria-hidden="true" />
              </Button>
            </Tooltip>
          ) : null
        }
      />
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-wrap items-center gap-x-4 gap-y-3 px-4 pt-4 sm:px-6">
          <div className="flex min-w-0 basis-full items-center gap-3 sm:basis-0 sm:flex-1">
            {person ? <Avatar name={person.fullName} size="md" /> : null}
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground">
                {person?.fullName ??
                  (profile === "responsable" ? "Portal del responsable" : "Portal del empleado")}
              </p>
              <p className="line-clamp-2 text-xs text-muted-foreground sm:truncate">
                {person
                  ? [person.job, person.unit, person.workCenter].filter(Boolean).join(" · ") ||
                    `Matrícula ${person.employeeId}`
                  : context.mode === "meta4"
                    ? (context.identityMessage ?? "")
                    : context.message}
              </p>
            </div>
            {context.mode === "meta4" ? (
              <span
                className="ml-1 hidden shrink-0 rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:inline"
                title={`Variante del portal: ${context.variant}`}
              >
                {context.society}
              </span>
            ) : null}
          </div>
          <ProfileSwitch active={profile} />
        </div>
        {location ? (
          <div className="mx-auto w-full max-w-6xl min-w-0 px-2 pt-2 sm:px-4">
            <SectionNav
              aria-label={
                profile === "responsable" ? "Apartados del responsable" : "Apartados del empleado"
              }
              items={groups}
              activeHref={activeGroupHref}
            />
          </div>
        ) : null}
      </div>
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col gap-6 px-4 py-6 sm:px-6">
        {children}
      </div>
    </div>
  );
}
