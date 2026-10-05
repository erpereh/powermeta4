import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DomainOverview } from "@/components/portal/views/domain-overview";
import { FeatureDispatch } from "@/components/portal/views/feature-dispatch";
import { getPortalFeatureByRoute, PORTAL_DOMAINS } from "@/lib/portal/registry";
import { getRequestPortalContext } from "@/lib/portal/server";

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
      PORTAL_DOMAINS.find((domain) => domain.route === route)?.title)
    : undefined;
  return { title: `${title ?? "Portal"} · powermeta4` };
}

/** Cada ruta del portal sale del registro único; lo demás es 404. */
export default async function PortalRoutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const route = routeOf(slug);
  if (!route) notFound();
  const feature = getPortalFeatureByRoute(route);
  const domain = PORTAL_DOMAINS.find((candidate) => candidate.route === route);
  if (!feature && !domain) notFound();
  const context = await getRequestPortalContext();
  if (feature) return <FeatureDispatch feature={feature} context={context} />;
  if (!domain) notFound();
  return (
    <DomainOverview domain={domain} variant={context.mode === "meta4" ? context.variant : null} />
  );
}
