import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { DomainOverview } from "@/components/portal/views/domain-overview";
import { FeatureDispatch } from "@/components/portal/views/feature-dispatch";
import {
  getPortalFeatureByRoute,
  getPortalMenuLocation,
  getPortalMenuRedirect,
  PORTAL_DOMAINS,
} from "@/lib/portal/registry";
import { getRequestPortalContext } from "@/lib/portal/server";
import type { OrgSearchParams } from "@/lib/portal/organization-navigation";
import { requireAuthContext } from "@/lib/auth/session";
import { canUsePortalDebug } from "@/lib/portal/read-provider";
import { debugSelection } from "@/lib/portal/read-model";

const SEGMENT = /^[a-z0-9-]{1,60}$/;

const routeOf = (slug: string[]): string | null =>
  slug.length === 0 || slug.length > 4 || !slug.every((segment) => SEGMENT.test(segment))
    ? null
    : `/portal/${slug.join("/")}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const route = routeOf((await params).slug);
  const title = route
    ? (getPortalFeatureByRoute(route)?.title ??
      getPortalMenuLocation(route)?.section.title ??
      PORTAL_DOMAINS.find((domain) => domain.route === route)?.title)
    : undefined;
  return { title: `${title ?? "Portal"} · powermeta4` };
}

/** Cada ruta del portal sale del registro único; lo demás es 404. */
export default async function PortalRoutePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<OrgSearchParams>;
}) {
  const { slug } = await params;
  const route = routeOf(slug);
  if (!route) notFound();
  const feature = getPortalFeatureByRoute(route);
  const domain = PORTAL_DOMAINS.find((candidate) => candidate.route === route);
  const menuLocation = getPortalMenuLocation(route);
  const context = await getRequestPortalContext();
  const search = await searchParams;
  const debug = context.mode === "unavailable" && context.reason === "debug" && canUsePortalDebug(await requireAuthContext(), context) ? debugSelection(search) : null;
  const destination = getPortalMenuRedirect(
    route,
    context.mode === "meta4" ? context.variant : debug?.variant,
  );
  if (destination) redirect(debug ? `${destination}?${new URLSearchParams({ debugActor: debug.actor, debugVariant: debug.variant, debugScenario: debug.scenario })}` : destination);
  if (!feature && !domain && !menuLocation) notFound();
  if (feature)
    return (
      <FeatureDispatch
        feature={feature}
        context={context}
        readSearchParams={search}
        debug={debug}
        orgSearchParams={feature.view === "orgchart" ? await searchParams : undefined}
        projectionSearchParams={
          feature.view === "projections" || feature.view === "certificates"
            ? await searchParams
            : undefined
        }
      />
    );
  if (!domain) notFound();
  return (
    <DomainOverview domain={domain} variant={context.mode === "meta4" ? context.variant : null} />
  );
}
