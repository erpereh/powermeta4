import { FeatureDispatch } from "@/components/portal/views/feature-dispatch";
import { getPortalFeature } from "@/lib/portal/registry";
import { getRequestPortalContext } from "@/lib/portal/server";
import { requireAuthContext } from "@/lib/auth/session";
import { canUsePortalDebug } from "@/lib/portal/read-provider";
import { debugSelection, type PortalReadParams } from "@/lib/portal/read-model";

/** Inicio del portal del empleado. */
export default async function PortalHomePage({ searchParams }: { searchParams: Promise<PortalReadParams> }) {
  const context = await getRequestPortalContext();
  const feature = getPortalFeature("inicio");
  if (!feature) throw new Error("El registro del portal no define el inicio.");
  const params = await searchParams;
  const debug = canUsePortalDebug(await requireAuthContext(), context) ? debugSelection(params) : null;
  return <FeatureDispatch feature={feature} context={context} debug={debug} readSearchParams={params} />;
}
