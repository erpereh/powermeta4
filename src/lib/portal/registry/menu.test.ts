import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { validatePortalForm } from "../forms/validate";
import { getPortalSidebarItems, isPortalSidebarItemActive } from "../navigation";
import {
  getPortalFeature,
  getPortalFeatureByRoute,
  getPortalFeatureBySource,
  getPortalMenuLocation,
  getPortalMenuPages,
  getPortalMenuRedirect,
  getPortalSectionHref,
  getPortalSections,
  getProfileForRoute,
  PORTAL_FEATURES,
  PORTAL_MENU,
  searchPortalFeatures,
} from "./index";

const employeeGroups = [
  [
    "Aplicaciones Internas",
    "Organigrama",
    "Quién es Quién",
    "Certificado de Haberes",
    "Informe de proyecciones",
    "Nómina",
  ],
  [
    "Mis tareas",
    "Cambio de contraseña",
    "Árbol de Unidades Organizativas",
    "Organigrama dinámico",
    "Gestión de casos de RRHH",
    "Buzón de RRHH",
    "Mis diálogos",
  ],
  [
    "Mis datos personales",
    "Mis datos profesionales",
    "Mis datos para el IRPF",
    "Mis contactos de emergencia (ICE)",
    "Mis dependientes",
    "Dossier del empleado",
    "Dossier del empleado NUEVO",
    "Mis documentos a tramitar",
  ],
  [
    "Mis datos bancarios",
    "Mi retribución",
    "Certificado de Retenciones",
    "Últimos recibos",
    "Informe de Proyecciones",
  ],
  [
    "Historial de puestos",
    "Planes de evaluación",
    "Yo como entrevistador",
    "Yo como evaluador",
    "Acciones de formación y desarrollo",
    "Planes de evaluación NUEVO",
    "Evaluación continua",
  ],
  [
    "Calendario de festivos",
    "Petición de presencias",
    "Ausencias laborales",
    "Petición de ausencias/teletrabajo",
    "Petición de incidencias y vacaciones",
    "Planificación GTA",
    "Fichaje virtual",
    "Calendario de festivos",
    "Comprobante de vacaciones",
    "Ausencias laborales",
    "Petición de ajuste de bolsa",
    "Mi hoja de presencia",
    "Petición de modificación de fichajes",
  ],
];

describe("navegación original del portal", () => {
  it("cubre los destinos del menú español del responsable de la copia local", () => {
    const source = readFileSync(
      path.resolve("clon_portal/portal/libreria/menu_mss_esp.js"),
      "utf8",
    );
    const destinations = [...source.matchAll(/mlinks\d+\[\d+\]="([^"]+)"/g)]
      .map((match) => match[1].split("/JSP/")[1]?.split("?")[0])
      .filter(Boolean);
    const pages = getPortalSections("responsable").flatMap((section) =>
      section.groups.flatMap((group) => group.pages),
    );
    for (const destination of destinations)
      expect(
        pages.some((page) => page.original.kind === "jsp" && page.original.path === destination),
        destination,
      ).toBe(true);
  });
  it("reproduce el orden y los nombres de las seis secciones y sus pestañas", () => {
    const sections = getPortalSections("empleado");
    expect(sections.map((section) => section.title)).toEqual([
      "Aplicaciones Internas",
      "Mis herramientas",
      "Mi información personal",
      "Mis datos económicos",
      "Mi puesto de trabajo",
      "Mi tiempo de trabajo",
    ]);
    expect(sections.map((section) => section.groups.map((group) => group.title))).toEqual(
      employeeGroups,
    );
    expect(getPortalSections("responsable").map((section) => section.title)).toEqual([
      "Mis herramientas",
      "Información personal",
      "Datos económicos",
      "Revisión de la remuneración",
      "Puestos de trabajo",
      "Tiempo de trabajo",
    ]);
  });
  it("incluye todas las subpáginas de datos personales, profesionales y bancarios", () => {
    const nested = getPortalSections("empleado")
      .flatMap((section) => section.groups)
      .filter((group) => ["personales", "profesionales", "bancarios"].includes(group.id));
    expect(nested.map((group) => group.pages.map((page) => page.title))).toEqual([
      [
        "Mis datos personales",
        "Dirección fiscal",
        "Domicilio teletrabajo",
        "Teléfono",
        "E-mail",
        "Otras direcciones",
        "Estado civil",
        "Página Web",
        "Otras formas de contacto",
      ],
      [
        "Mis datos profesionales",
        "Titulaciones",
        "Idiomas",
        "Trayectoria profesional externa",
        "Certificados y licencias",
        "Formación Externa",
        "Afiliación a asociaciones",
        "Información complementaria",
      ],
      [
        "Cuenta bancaria principal",
        "Modificar cuenta bancaria principal",
        "Otras cuentas",
        "Dar de alta otras cuentas bancarias",
        "IBAN",
        "Dar de alta otras cuentas bancarias otro formato",
      ],
    ]);
  });
  it("cubre las subpáginas retributivas, de carrera, evaluación y formación en su orden original", () => {
    const groups = getPortalSections("empleado").flatMap((section) => section.groups);
    const titles = (id: string) =>
      groups.find((group) => group.id === id)?.pages.map((page) => page.title);
    expect(titles("retribucion")).toEqual([
      "Mi paquete retributivo",
      "Mi retribución flexible",
      "Simulación de beneficios",
      "Solicitud de beneficios",
      "Historial de beneficios asignados",
      "Préstamos",
    ]);
    expect(titles("historial-puestos")).toEqual([
      "Historial de puestos",
      "Historial de puestos",
      "Plan de carrera",
      "Mis conocimientos",
      "Mis conocimientos",
      "Preferencias profesionales",
      "Mis preferencias profesionales",
    ]);
    expect(titles("evaluacion")).toEqual([
      "Criterios de evaluación",
      "Valoración de evaluación",
      "Valoración de evaluación",
      "Valoración de evaluación de seguimiento",
      "Evaluadores para tus procesos",
      "Objetivos",
      "Objetivos",
      "Valoración de objetivos",
      "Valoración de objetivos",
      "Mis evaluaciones",
      "Mis evaluaciones",
    ]);
    expect(titles("entrevistador")).toEqual(["Entrevistas a candidatos"]);
    expect(titles("evaluador")).toEqual([
      "Procesos de evaluación",
      "Procesos de evaluación",
      "Evaluación de seguimiento",
      "Evaluación de seguimiento",
      "Publicar evaluaciones realizadas",
      "Publicar evaluaciones de seguimiento realizadas",
    ]);
    expect(titles("formacion")).toEqual([
      "Catálogo de formación",
      "Inscripción en cursos",
      "Catálogo de formación",
      "Evaluación de cursos",
      "Historial de la Formación recibida",
      "Movilidad interna",
      "Mis entrevistas",
      "Movilidad interna",
      "Mis entrevistas",
      "Mi plan de desarrollo",
      "Documentación Publicada",
      "Mi plan de desarrollo",
      "Seguimiento de mi formación",
    ]);
    expect(titles("evaluacion-nuevo")).toEqual([
      "Procesos de evaluación",
      "Mis objetivos",
      "Mis evaluaciones",
      "Historial de evaluación del evaluador",
    ]);
  });
  it("cada página y entrada de sidebar resuelve a una pantalla y a su sección exacta", () => {
    for (const section of PORTAL_MENU) {
      expect(getPortalFeatureByRoute(getPortalSectionHref(section))).toBeDefined();
      for (const group of section.groups)
        for (const page of group.pages) {
          expect(getPortalFeatureByRoute(page.route)?.id).toBe(page.featureId);
          expect(getPortalMenuLocation(`${page.route}/`)).toMatchObject({
            section: { id: section.id },
            group: { id: group.id },
            page: { featureId: page.featureId },
          });
          expect(getProfileForRoute(page.route)).toBe(section.profile);
          expect(getPortalFeature(page.featureId)?.profile).toBe(section.profile);
          expect(page.title).not.toMatch(/^>|favorit/i);
          expect(
            page.route
              .slice(8)
              .split("/")
              .every((part) => /^[a-z0-9-]{1,60}$/.test(part)),
          ).toBe(true);
        }
    }
    for (const profile of ["empleado", "responsable"] as const) {
      const items = getPortalSidebarItems(profile);
      expect(items[0].name).toBe("Inicio");
      for (const item of items) expect(isPortalSidebarItemActive(item.route, item)).toBe(true);
    }
    expect(PORTAL_FEATURES.some((feature) => /favorit/i.test(feature.title))).toBe(false);
  });
  it("conserva destinos contextuales, parámetros y versiones distintas", () => {
    expect(getPortalFeatureBySource("sse_g2/sse_g2_p7.jsp?vista=0")?.route).toBe(
      "/portal/empleado/retribucion/simulacion-beneficios",
    );
    expect(getPortalFeatureBySource("sse_g2/sse_g2_p7.jsp?vista=1")?.route).toBe(
      "/portal/empleado/retribucion/solicitud-beneficios",
    );
    const simulation = getPortalMenuLocation(
      "/portal/empleado/retribucion/simulacion-beneficios",
    )?.page;
    const request = getPortalMenuLocation(
      "/portal/empleado/retribucion/solicitud-beneficios",
    )?.page;
    expect(simulation?.original).toMatchObject({
      kind: "jsp",
      path: "sse_g2/sse_g2_p7.jsp",
      parameters: { vista: "0" },
    });
    expect(request?.original).toMatchObject({
      kind: "jsp",
      path: "sse_g2/sse_g2_p7.jsp",
      parameters: { vista: "1" },
    });
    expect(
      getPortalMenuLocation("/portal/responsable/talento/formacion-realizada")?.page?.original,
    ).toMatchObject({ parameters: { zTLoad: "FR" } });
    expect(getPortalMenuLocation("/portal/empleado/aplicaciones/nomina")?.section.id).toBe(
      "empleado.aplicaciones",
    );
    expect(getPortalMenuLocation("/portal/empleado/retribucion/nominas")?.section.id).toBe(
      "empleado.retribucion",
    );
    const dynamic = getPortalMenuLocation("/portal/empleado/talento/puesto-nuevo");
    expect(dynamic?.page?.original.kind).toBe("dynamic");
    expect(dynamic?.page?.route).not.toBe("/portal/empleado/talento/puesto");
  });
  it("abre la primera página disponible y conserva búsqueda y rutas anteriores", () => {
    expect(getPortalSidebarItems("empleado")[1].route).toBe("/portal/empleado/aplicaciones");
    expect(getPortalMenuRedirect("/portal/empleado/aplicaciones", "BASE")).toBe(
      "/portal/empleado/aplicaciones/organigrama",
    );
    expect(getPortalMenuRedirect("/portal/empleado/aplicaciones", "CYC")).toBe(
      "/portal/empleado/aplicaciones/internas",
    );
    expect(getPortalMenuRedirect("/portal/empleado/retribucion")).toBe(
      "/portal/empleado/retribucion/cuenta-principal",
    );
    expect(getPortalMenuRedirect("/portal/responsable/revision")).toBe(
      "/portal/responsable/retribucion/revision",
    );
    const applications = getPortalSections("empleado")[0];
    const projections = applications.groups.find(
      (group) => group.title === "Informe de proyecciones",
    )!;
    expect(getPortalMenuPages(projections, "BASE")).toEqual([]);
    expect(getPortalMenuPages(projections, "CYC")).toHaveLength(1);
    expect(searchPortalFeatures("idiomas").map((feature) => feature.route)).toContain(
      "/portal/empleado/datos/idiomas",
    );
    expect(getPortalFeatureByRoute("/portal/empleado/datos/cv")).toBeDefined();
    expect(getPortalFeatureByRoute("/portal/organizacion")).toBeDefined();
  });
  it("separa contenido y formularios sin reemplazar funciones por datos ajenos", () => {
    const ids = (route: string) =>
      getPortalFeatureByRoute(route)?.sections?.map((s) =>
        s.kind === "note"
          ? s.title
          : s.kind === "form"
            ? `form:${s.form.id}`
            : `consult:${s.consult.id}`,
      );
    expect(ids("/portal/empleado/datos/idiomas")).toEqual(["consult:idiomas", "form:idioma"]);
    expect(ids("/portal/empleado/datos/titulaciones")).toEqual([
      "consult:titulaciones",
      "form:titulacion",
    ]);
    expect(ids("/portal/empleado/retribucion/modificar-cuenta-principal")).toEqual([
      "form:cuenta-principal",
    ]);
    expect(ids("/portal/empleado/retribucion/cuenta-principal")).not.toContain(
      "form:cuenta-principal",
    );
    const history = getPortalFeatureByRoute("/portal/empleado/retribucion/historial-beneficios")
      ?.sections?.[0];
    expect(history?.kind === "consult" && history.consult.query?.statement).not.toContain(
      "SUS_DT_END >= @today",
    );
    for (const route of [
      "/portal/empleado/talento/procesos-evaluador",
      "/portal/empleado/talento/conocimientos",
      "/portal/empleado/talento/objetivos",
      "/portal/empleado/talento/entrevistas-candidatos",
    ]) {
      expect(getPortalFeatureByRoute(route)?.read.kind).toBe("pending");
    }
    const validation = getPortalFeatureByRoute("/portal/responsable/equipo/validar-idiomas");
    const query = validation?.sections?.find((section) => section.kind === "consult");
    expect(query?.kind === "consult" && query.consult.rowFilter).toEqual({
      item: "TIPO",
      equals: ["Idioma"],
    });
    expect(ids("/portal/responsable/equipo/validar-idiomas")).toEqual([
      "consult:peticiones",
      "form:validar-idiomas",
    ]);
  });
  it("valida las contraseñas como el original y conserva el envío bloqueado", () => {
    const section = getPortalFeatureByRoute("/portal/empleado/herramientas/contrasena")
      ?.sections?.[0];
    if (section?.kind !== "form") throw new Error("Se esperaba el formulario original");
    expect(section.form.fields.every((field) => field.type === "password")).toBe(true);
    expect(
      validatePortalForm(section.form, {
        M4_CURRENT_PASSWORD: "original",
        M4_NEW_PASSWORD: "original",
        M4_RETYPE_PASSWORD: "distinta",
      }),
    ).toMatchObject({
      M4_NEW_PASSWORD: expect.any(String),
      M4_RETYPE_PASSWORD: expect.any(String),
    });
    expect(section.form.write.pending).toContain("P04");
  });
});
