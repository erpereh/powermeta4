import { FeatureDispatch } from "@/components/portal/views/feature-dispatch";
import { getPortalFeature } from "@/lib/portal/registry";
import { getRequestPortalContext } from "@/lib/portal/server";

/** Inicio del portal del empleado. */
export default async function PortalHomePage() {
  const context = await getRequestPortalContext();
  const feature = getPortalFeature("inicio");
  if (!feature) throw new Error("El registro del portal no define el inicio.");
  return <FeatureDispatch feature={feature} context={context} />;
}
