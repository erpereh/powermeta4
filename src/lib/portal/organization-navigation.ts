/** Estado de presentación del árbol; nunca aporta sociedad ni identidad al servidor. */
export type OrgSearchParams = Readonly<Record<string, string | string[] | undefined>>;

export const isOrgEmployeeId = (value: string): boolean => /^[A-Za-z0-9]{1,20}$/.test(value);

export const getOrgSelection = (
  params: OrgSearchParams,
): { status: "tree" | "invalid" } | { status: "selected"; employeeId: string } => {
  const value = params.persona;
  if (value === undefined) return { status: "tree" };
  return typeof value === "string" && isOrgEmployeeId(value)
    ? { status: "selected", employeeId: value }
    : { status: "invalid" };
};

export const orgTreeState = (params: URLSearchParams, defaultOpen: readonly string[]) => ({
  query: (params.get("filtro") ?? "").slice(0, 120),
  expanded: new Set(
    params.has("ramas")
      ? (params.get("ramas") ?? "").slice(0, 16000).split("\n").filter(Boolean)
      : defaultOpen,
  ),
});

/** Solo conserva los parámetros conocidos, en la ruta de organigrama del registro. */
export const orgChartHref = (
  route: string,
  params: URLSearchParams,
  employeeId?: string,
): string => {
  const next = new URLSearchParams();
  if (params.has("filtro")) next.set("filtro", (params.get("filtro") ?? "").slice(0, 120));
  if (params.has("ramas")) next.set("ramas", (params.get("ramas") ?? "").slice(0, 16000));
  if (employeeId && isOrgEmployeeId(employeeId)) next.set("persona", employeeId);
  const query = next.toString();
  return query ? `${route}?${query}` : route;
};

/** Ausente: equipo raíz abierto; vacío: todas las personas contraídas. */
export const orgExpandedPeople = (params: URLSearchParams, rootId: string): ReadonlySet<string> =>
  new Set(
    params.has("equipos")
      ? (params.get("equipos") ?? "").slice(0, 16000).split(",").filter(isOrgEmployeeId)
      : [rootId],
  );

export const orgExpandedHref = (
  route: string,
  params: URLSearchParams,
  rootId: string,
  ids: ReadonlySet<string>,
) => {
  const next = new URLSearchParams(orgChartHref(route, params, rootId).split("?")[1]);
  next.set("equipos", [...ids].filter(isOrgEmployeeId).sort().join(",").slice(0, 16000));
  return `${route}?${next}`;
};
