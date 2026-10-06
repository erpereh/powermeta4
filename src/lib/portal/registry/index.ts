import type {
  PortalDomain,
  PortalDomainId,
  PortalFeature,
  PortalProfile,
  PortalVariant,
} from "../types";
import { PORTAL_DOMAINS } from "./domains";
import { EMPLEADO_CONOCIMIENTO } from "./empleado-conocimiento";
import { EMPLEADO_DATOS } from "./empleado-datos";
import { EMPLEADO_RETRIBUCION } from "./empleado-retribucion";
import { EMPLEADO_TALENTO } from "./empleado-talento";
import { EMPLEADO_TIEMPO } from "./empleado-tiempo";
import { RESPONSABLE_ALCANCE, RESPONSABLE_EQUIPO } from "./responsable-equipo";
import { RESPONSABLE_RETRIBUCION } from "./responsable-retribucion";
import { RESPONSABLE_TALENTO } from "./responsable-talento";
import { RESPONSABLE_TIEMPO } from "./responsable-tiempo";
import { TRANSVERSAL } from "./transversal";
import { availableMenuPages, createPortalMenu } from "./menu";

export { PORTAL_DOMAINS } from "./domains";

/** Registro único de pantallas del portal: navegación, búsqueda, contratos y docs. */
const BASE_FEATURES: readonly PortalFeature[] = [
  ...TRANSVERSAL,
  ...EMPLEADO_DATOS,
  ...EMPLEADO_RETRIBUCION,
  ...EMPLEADO_TIEMPO,
  ...EMPLEADO_TALENTO,
  ...EMPLEADO_CONOCIMIENTO,
  ...RESPONSABLE_ALCANCE,
  ...RESPONSABLE_EQUIPO,
  ...RESPONSABLE_RETRIBUCION,
  ...RESPONSABLE_TALENTO,
  ...RESPONSABLE_TIEMPO,
];

const menu = createPortalMenu(BASE_FEATURES);
export const PORTAL_FEATURES: readonly PortalFeature[] = menu.features;
export const PORTAL_MENU = menu.sections;
export const getPortalSections = (profile: PortalProfile) =>
  PORTAL_MENU.filter((section) => section.profile === profile);
export const getPortalMenuPages = (
  group: (typeof PORTAL_MENU)[number]["groups"][number],
  variant?: PortalVariant,
) => availableMenuPages(group, PORTAL_FEATURES, variant);
export const getPortalSectionHref = (
  section: (typeof PORTAL_MENU)[number],
  variant?: PortalVariant,
) =>
  section.groups.flatMap((group) => getPortalMenuPages(group, variant))[0]?.route ?? section.route;

/** Coincidencia exacta de página; no se infiere la sección por prefijos compartidos. */
export const getPortalMenuLocation = (route: string) => {
  const path = normalizeRoute(route);
  const menuPath =
    path === "/portal/organizacion/organigrama"
      ? "/portal/empleado/aplicaciones/organigrama"
      : path;
  for (const section of PORTAL_MENU) {
    for (const group of section.groups) {
      const page = group.pages.find((page) => page.route === menuPath);
      if (page) return { section, group, page };
    }
    if (section.route === path) return { section, group: undefined, page: undefined };
  }
  const feature = PORTAL_FEATURES.find((feature) => feature.route === path);
  if (feature && feature.domain !== "inicio") {
    const sectionId: Partial<Record<PortalDomainId, string>> = {
      tareas: "empleado.herramientas",
      organizacion: "empleado.aplicaciones",
      datos: "empleado.datos",
      retribucion: "empleado.retribucion",
      talento: "empleado.talento",
      tiempo: "empleado.tiempo",
      conocimiento: "empleado.talento",
      alcance: "responsable.herramientas",
      equipo: "responsable.equipo",
      "retribucion-equipo": "responsable.retribucion",
      "talento-equipo": "responsable.talento",
      "tiempo-equipo": "responsable.tiempo",
    };
    const section = PORTAL_MENU.find((section) => section.id === sectionId[feature.domain]);
    if (section) return { section, group: undefined, page: undefined };
  }
  return undefined;
};

/** Las antiguas raíces por dominio abren ahora la primera página de su sección. */
export const getPortalMenuRedirect = (
  route: string,
  variant?: PortalVariant,
): string | undefined => {
  if (
    ["/portal/empleado/aplicaciones/internas", "/portal/empleado/datos/aplicaciones"].includes(
      normalizeRoute(route),
    )
  )
    return "/portal/empleado/aplicaciones/organigrama";
  const section = PORTAL_MENU.find((section) => section.route === normalizeRoute(route));
  const href = section ? getPortalSectionHref(section, variant) : undefined;
  return href && href !== normalizeRoute(route) ? href : undefined;
};

const normalizeRoute = (route: string): string => route.replace(/\/+$/, "") || "/";

export const getPortalFeatureByRoute = (route: string): PortalFeature | undefined => {
  const wanted = normalizeRoute(route);
  return PORTAL_FEATURES.find((feature) => feature.route === wanted);
};

/** Pantalla de powermeta4 que sustituye a una página JSP del original. */
export const getPortalFeatureBySource = (source: string): PortalFeature | undefined => {
  const [path, query] = source.split("?", 2);
  const wanted = path.toLowerCase();
  const parameters = new URLSearchParams(query);
  const page = PORTAL_MENU.flatMap((section) =>
    section.groups.flatMap((group) => group.pages),
  ).find(
    (page) =>
      page.original.kind === "jsp" &&
      page.original.path.toLowerCase() === wanted &&
      [...parameters].every(
        ([key, value]) => page.original.kind === "jsp" && page.original.parameters[key] === value,
      ),
  );
  if (page) return getPortalFeature(page.featureId);
  return PORTAL_FEATURES.find((feature) =>
    feature.sources.some((candidate) => candidate.toLowerCase() === wanted),
  );
};

export const getPortalFeature = (id: string): PortalFeature | undefined =>
  PORTAL_FEATURES.find((feature) => feature.id === id);

export const getPortalDomain = (id: PortalDomainId): PortalDomain | undefined =>
  PORTAL_DOMAINS.find((domain) => domain.id === id);

/** Dominios transversales visibles con cualquier perfil. */
const SHARED_DOMAINS: readonly PortalDomainId[] = ["organizacion", "tareas"];

export const getProfileDomains = (profile: PortalProfile): PortalDomain[] =>
  PORTAL_DOMAINS.filter(
    (domain) =>
      domain.profile === profile || (profile === "empleado" && SHARED_DOMAINS.includes(domain.id)),
  );

export const isFeatureAvailable = (feature: PortalFeature, variant: PortalVariant): boolean =>
  !feature.availableIn || feature.availableIn.includes(variant);

export const getDomainFeatures = (
  domainId: PortalDomainId,
  variant?: PortalVariant,
): PortalFeature[] =>
  PORTAL_FEATURES.filter(
    (feature) =>
      feature.domain === domainId &&
      (variant === undefined || isFeatureAvailable(feature, variant)),
  );

/** Dominio al que pertenece una ruta del portal (para navegación y migas). */
export const getDomainForRoute = (pathname: string): PortalDomain | undefined => {
  const path = normalizeRoute(pathname);
  return [...PORTAL_DOMAINS]
    .sort((a, b) => b.route.length - a.route.length)
    .find((domain) => path === domain.route || path.startsWith(`${domain.route}/`));
};

/** El perfil de la URL: `/portal/responsable/...` y tareas son del responsable. */
export const getProfileForRoute = (pathname: string): PortalProfile =>
  pathname.startsWith("/portal/responsable") ? "responsable" : "empleado";

const fold = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

/** Búsqueda de funciones del portal; todas las palabras deben aparecer. */
export const searchPortalFeatures = (query: string, variant?: PortalVariant): PortalFeature[] => {
  const terms = fold(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return PORTAL_FEATURES.filter((feature) => {
    if (variant && !isFeatureAvailable(feature, variant)) return false;
    const location = getPortalMenuLocation(feature.route);
    const domain = location
      ? `${location.section.title} ${location.group?.title ?? ""}`
      : (getPortalDomain(feature.domain)?.title ?? "");
    const haystack = fold(
      [feature.title, feature.summary, domain, ...(feature.keywords ?? [])].join(" "),
    );
    return terms.every((term) => haystack.includes(term));
  });
};
