import type {
  FeatureSection,
  PortalFeature,
  PortalMenuGroup,
  PortalMenuPage,
  PortalMenuSection,
  PortalOriginalDestination,
  PortalProfile,
  PortalVariant,
} from "../types";
import { pendingRead } from "./helpers";
import { originalPageSections } from "./original-pages";

type SectionKey = `consult:${string}` | `form:${string}` | `note:${string}`;
type PageOptions = {
  route?: string;
  select?: readonly SectionKey[];
  writes?: readonly string[];
  source?: string;
  parameters?: Readonly<Record<string, string>>;
  filter?: { item: string; equals: readonly string[] };
  profile?: PortalProfile;
};

/** Las capturas dan etiquetas; solo el JSP o mapa local da un destino verificable. */
export function createPortalMenu(baseFeatures: readonly PortalFeature[]) {
  const features = new Map(baseFeatures.map((feature) => [feature.route, feature]));
  const byId = new Map(baseFeatures.map((feature) => [feature.id, feature]));
  const page = (id: string, title: string, options: PageOptions = {}): PortalMenuPage => {
    const base = byId.get(id);
    if (!base) throw new Error(`Pantalla original desconocida: ${id}`);
    for (const key of options.select ?? []) {
      if (!base.sections?.some((section) => sectionKey(section) === key))
        throw new Error(`Apartado desconocido: ${id}/${key}`);
    }
    const route = options.route ?? base.route;
    const sections = options.select
      ? (base.sections ?? []).filter((section) => options.select?.includes(sectionKey(section)))
      : base.sections;
    const validationTag = sections
      ?.find((section) => section.kind === "form")
      ?.form.write.meta4Method.split("!")[0];
    const scopedSections = sections?.map(
      (section): FeatureSection =>
        section.kind === "consult" && options.filter
          ? {
              ...section,
              consult: {
                ...section.consult,
                rowFilter: options.filter,
                meta4: validationTag
                  ? `${validationTag}!${validationTag}_VAL`
                  : section.consult.meta4,
              },
            }
          : section,
    );
    const featureId =
      route === base.route ? base.id : `menu.${route.slice(8).replaceAll("/", ".")}`;
    const source = options.source ?? base.sources[0];
    const consults = (scopedSections ?? []).flatMap((s) =>
      s.kind === "consult" ? [s.consult] : [],
    );
    const read = options.select
      ? (consults.find((c) => c.read.kind !== "pending")?.read ??
        pendingRead(
          consults.map((c) => c.meta4),
          `Falta el contrato de lectura de ${title}.`,
        ))
      : base.read;
    features.set(route, {
      ...base,
      id: featureId,
      route,
      title,
      sources: options.source ? [options.source] : base.sources,
      profile: options.profile ?? base.profile,
      summary: options.select
        ? title.startsWith("Valida")
          ? "Revisa las solicitudes de tu equipo en este apartado."
          : `Consulta o solicitud de ${title.toLocaleLowerCase("es")}.`
        : base.summary,
      sections:
        originalPageSections(route.split("/").at(-1) ?? "", options.profile ?? base.profile) ??
        scopedSections,
      read,
      view: options.select && base.view !== "my-file" ? "generic" : base.view,
      writes: route.endsWith("/contrasena")
        ? []
        : options.writes
          ? base.writes?.filter((w) => options.writes?.includes(w.id))
          : options.select
            ? []
            : base.writes,
    });
    return {
      featureId,
      title,
      route,
      original: source
        ? { kind: "jsp", path: source, parameters: options.parameters ?? {} }
        : dynamicDestination(title),
    };
  };
  const missing = (
    profile: PortalProfile,
    section: string,
    slug: string,
    title: string,
    detail: string,
    source?: string,
    parameters: Readonly<Record<string, string>> = {},
    modeLabel?: string,
  ): PortalMenuPage => {
    const route = `/portal/${profile}/${section}/${slug}`;
    const featureId = `menu.${profile}.${section}.${slug}`;
    const content = originalPageSections(slug, profile);
    features.set(route, {
      id: featureId,
      route,
      title,
      profile,
      domain:
        profile === "responsable"
          ? section === "tiempo"
            ? "tiempo-equipo"
            : "talento-equipo"
          : section === "tiempo"
            ? "tiempo"
            : section === "retribucion"
              ? "retribucion"
              : section === "datos"
                ? "datos"
                : "talento",
      icon: section === "tiempo" ? "calendar" : "document",
      sensitive: true,
      summary: `Apartado del portal del ${profile}.`,
      view: "generic",
      sources: source ? [source] : [],
      ficha: "implementacion/navegacion-original.md",
      read: pendingRead(source ? [source] : [], detail, source ? ["P02", "P05"] : ["P01", "P06"]),
      sections: content,
    });
    return {
      featureId,
      route,
      title,
      modeLabel,
      original: source ? { kind: "jsp", path: source, parameters } : dynamicDestination(title),
    };
  };
  const e = (id: string, title: string, options?: PageOptions) =>
    page(`empleado.${id}`, title, options);
  const r = (id: string, title: string, options?: PageOptions) =>
    page(`responsable.${id}`, title, options);
  const en = (
    section: string,
    slug: string,
    title: string,
    detail: string,
    source?: string,
    parameters?: Readonly<Record<string, string>>,
    mode?: string,
  ) => missing("empleado", section, slug, title, detail, source, parameters, mode);
  const rn = (
    section: string,
    slug: string,
    title: string,
    detail: string,
    source?: string,
    parameters?: Readonly<Record<string, string>>,
  ) => missing("responsable", section, slug, title, detail, source, parameters);
  const single = (entry: PortalMenuPage): PortalMenuGroup => ({
    id: entry.featureId,
    title: entry.title,
    pages: [entry],
  });
  const group = (id: string, title: string, pages: readonly PortalMenuPage[]): PortalMenuGroup => ({
    id,
    title,
    pages,
  });
  const dynamic = (title: string) =>
    `El menú original contiene «${title}». Su destino y contenido se resuelven mediante la configuración dinámica de Meta4; falta ese contrato (P01/P06).`;
  const menuAccess = (section: string, slug: string, title: string) =>
    en(
      section,
      slug,
      title,
      dynamic(`${title} (acceso del menú dinámico)`),
      undefined,
      {},
      "Menú dinámico",
    );
  const es = (
    id: string,
    title: string,
    icon: PortalMenuSection["icon"],
    groups: readonly PortalMenuGroup[],
  ): PortalMenuSection => ({
    id: `empleado.${id}`,
    profile: "empleado",
    title,
    icon,
    route: `/portal/empleado/${id}`,
    groups,
  });
  const rs = (
    id: string,
    title: string,
    icon: PortalMenuSection["icon"],
    groups: readonly PortalMenuGroup[],
  ): PortalMenuSection => ({
    id: `responsable.${id}`,
    profile: "responsable",
    title,
    icon,
    route: `/portal/responsable/${id}`,
    groups,
  });

  const personal = [
    e("datos.ficha", "Mis datos personales", {
      select: ["consult:correos", "consult:grupo-nivel"],
    }),
    e("datos.direccion-fiscal", "Dirección fiscal"),
    e("datos.teletrabajo", "Domicilio teletrabajo"),
    e("datos.telefonos", "Teléfono"),
    e("datos.correo", "E-mail"),
    e("datos.otras-direcciones", "Otras direcciones"),
    e("datos.estado-civil", "Estado civil"),
    e("datos.pagina-web", "Página Web"),
    e("datos.otras-formas-contacto", "Otras formas de contacto"),
  ];
  const professionalSpecs: readonly (readonly [string, string, string, string, string])[] = [
    ["titulaciones", "Titulaciones", "titulaciones", "titulacion", "sse_g1_p3_mod"],
    ["idiomas", "Idiomas", "idiomas", "idioma", "sse_g1_p3_mod2"],
    [
      "experiencia",
      "Trayectoria profesional externa",
      "experiencia",
      "experiencia",
      "sse_g1_p3_mod3",
    ],
    ["certificados", "Certificados y licencias", "certificados", "certificado", "ssco_g1_p3_mod4"],
    ["formacion-externa", "Formación Externa", "otros-cursos", "otros-cursos", "ssco_g1_p3_mod5"],
    ["asociaciones", "Afiliación a asociaciones", "asociaciones", "asociacion", "ssco_g1_p3_mod6"],
    [
      "informacion-complementaria",
      "Información complementaria",
      "informacion-complementaria",
      "complementaria",
      "ssco_g1_p3_mod7",
    ],
  ];
  const professional = [
    e("datos.profesionales", "Mis datos profesionales", {
      select: professionalSpecs.map<SectionKey>(([, , c]) => `consult:${c}`),
    }),
    ...professionalSpecs.map(([slug, title, consult, form, source]) =>
      e("datos.profesionales", title, {
        route: `/portal/empleado/datos/${slug}`,
        select: [`consult:${consult}`, `form:${form}`],
        source: `sse_g1/${source}.jsp`,
        parameters: { estado: "11" },
      }),
    ),
  ];
  const employeeSections = [
    es("aplicaciones", "Aplicaciones Internas", "link", [
      single(
        page("organizacion.organigrama", "Organigrama", {
          route: "/portal/empleado/aplicaciones/organigrama",
          profile: "empleado",
        }),
      ),
      single(
        page("organizacion.quien-es-quien", "Quién es Quién", {
          route: "/portal/empleado/aplicaciones/quien-es-quien",
          profile: "empleado",
        }),
      ),
      single(
        en(
          "aplicaciones",
          "certificado-haberes",
          "Certificado de Haberes",
          "El certificado de haberes se genera con SSE_CERT_HAB. No es el certificado fiscal de retenciones; falta la generación de este informe (P02/P08).",
          "sse_g2/sse_g2_cert_hab.jsp",
          { estado: "21" },
        ),
      ),
      single(
        e("retribucion.proyecciones", "Informe de proyecciones", {
          route: "/portal/empleado/aplicaciones/proyecciones",
        }),
      ),
      single(e("retribucion.nominas", "Nómina", { route: "/portal/empleado/aplicaciones/nomina" })),
    ]),
    es("herramientas", "Mis herramientas", "tasks", [
      single(
        page("tareas", "Mis tareas", {
          route: "/portal/empleado/herramientas/tareas",
          profile: "empleado",
        }),
      ),
      single(
        page("organizacion.contrasena", "Cambio de contraseña", {
          route: "/portal/empleado/herramientas/contrasena",
          profile: "empleado",
        }),
      ),
      group("arbol", "Árbol de Unidades Organizativas", [
        en(
          "herramientas",
          "arbol",
          "Árbol de Unidades Organizativas",
          "Árbol de unidades del original. Falta el destino específico configurado en SCO_MENU; el organigrama gráfico tiene su propio acceso.",
        ),
        menuAccess("herramientas", "arbol-menu", "Árbol de unidades organizativas"),
      ]),
      group("organigrama-dinamico", "Organigrama dinámico", [
        page("organizacion.organigrama", "Organigrama dinámico", {
          route: "/portal/empleado/herramientas/organigrama-dinamico",
          profile: "empleado",
          source: "sse_g0/ssco_g0_org_chart_dyn.jsp",
        }),
        menuAccess("herramientas", "organigrama-menu", "Organigrama dinámico"),
      ]),
      ...[
        ["casos-rrhh", "Gestión de casos de RRHH"],
        ["buzon-rrhh", "Buzón de RRHH"],
        ["dialogos", "Mis diálogos"],
      ].map(([slug, title]) => single(en("herramientas", slug, title, dynamic(title)))),
    ]),
    es("datos", "Mi información personal", "id-card", [
      group("personales", "Mis datos personales", personal),
      group("profesionales", "Mis datos profesionales", professional),
      single(e("datos.irpf", "Mis datos para el IRPF")),
      single(e("datos.emergencia", "Mis contactos de emergencia (ICE)")),
      single(e("datos.dependientes", "Mis dependientes")),
      single(en("datos", "dossier", "Dossier del empleado", dynamic("Dossier del empleado"))),
      single(
        en(
          "datos",
          "dossier-nuevo",
          "Dossier del empleado NUEVO",
          dynamic("Dossier del empleado NUEVO"),
        ),
      ),
      single(
        en(
          "datos",
          "documentos",
          "Mis documentos a tramitar",
          dynamic("Mis documentos a tramitar"),
        ),
      ),
    ]),
    es("retribucion", "Mis datos económicos", "bank", [
      group("bancarios", "Mis datos bancarios", [
        e("retribucion.cuenta-principal", "Cuenta bancaria principal", {
          select: ["consult:cuenta", "note:Campos pendientes del original"],
        }),
        e("retribucion.cuenta-principal", "Modificar cuenta bancaria principal", {
          route: "/portal/empleado/retribucion/modificar-cuenta-principal",
          select: ["form:cuenta-principal"],
          source: "sse_g2/sse_g2_p1_mod_iban.jsp",
        }),
        e("retribucion.otras-cuentas", "Otras cuentas", {
          select: ["consult:otras"],
          writes: ["otra-cuenta-anular"],
        }),
        e("retribucion.otras-cuentas", "Dar de alta otras cuentas bancarias", {
          route: "/portal/empleado/retribucion/alta-otras-cuentas",
          select: ["form:otra-cuenta"],
          source: "sse_g2/sse_g2_p2_add.jsp",
        }),
        en(
          "retribucion",
          "iban",
          "IBAN",
          "Conversión y validación de cuenta IBAN del original. Falta el contrato de CSP_CONSULTA_IBAN y el formato bancario de cada país.",
        ),
        en(
          "retribucion",
          "alta-cuenta-otro-formato",
          "Dar de alta otras cuentas bancarias otro formato",
          "Alta de cuenta no nacional: formato bancario dependiente del país. El envío SSE_OTHER_PDATA sigue bloqueado.",
          "sse_g2/sse_g2_p2_add_iban.jsp",
        ),
      ]),
      group("retribucion", "Mi retribución", [
        e("retribucion.paquete", "Mi paquete retributivo"),
        e("retribucion.beneficios", "Mi retribución flexible", {
          select: ["consult:actuales", "note:Selección de beneficios"],
          source: "sse_g2/sse_g2_p6.jsp",
        }),
        en(
          "retribucion",
          "simulacion-beneficios",
          "Simulación de beneficios",
          "La simulación calcula precio y aportaciones del plan elegido en Meta4; necesita SSE_BFT_EE_BNFT_ELEC y sus catálogos.",
          "sse_g2/sse_g2_p7.jsp",
          { estado: "21", vista: "0" },
        ),
        en(
          "retribucion",
          "solicitud-beneficios",
          "Solicitud de beneficios",
          "Selecciona plan, opción y cobertura. Los catálogos y la escritura SSE_BFT_EE_BNFT_ELEC necesitan un contrato aprobado.",
          "sse_g2/sse_g2_p7.jsp",
          { estado: "21", vista: "1" },
        ),
        e("retribucion.beneficios", "Historial de beneficios asignados", {
          route: "/portal/empleado/retribucion/historial-beneficios",
          select: ["consult:actuales", "form:baja-beneficio"],
          source: "sse_g2/sse_g2_p11.jsp",
          parameters: { estado: "21", vista: "2" },
        }),
        e("retribucion.prestamos", "Préstamos"),
      ]),
      single(e("retribucion.certificados", "Certificado de Retenciones")),
      single(e("retribucion.nominas", "Últimos recibos")),
      single(e("retribucion.proyecciones", "Informe de Proyecciones")),
    ]),
    es("talento", "Mi puesto de trabajo", "job", [
      group("historial-puestos", "Historial de puestos", [
        e("talento.puesto", "Historial de puestos"),
        en(
          "talento",
          "puesto-nuevo",
          "Historial de puestos",
          dynamic("Historial de puestos (acceso dinámico)"),
          undefined,
          {},
          "Menú dinámico",
        ),
        e("talento.carrera", "Plan de carrera"),
        en(
          "talento",
          "conocimientos",
          "Mis conocimientos",
          "Niveles y experiencia en conocimientos de SSE_H_HR_KNC_LVL. Falta su lectura específica; no se utilizan los historiales de evaluación.",
          "sse_g3/sse_g3_p22.jsp",
          { estado: "31" },
        ),
        en(
          "talento",
          "conocimientos-nuevo",
          "Mis conocimientos",
          dynamic("Mis conocimientos (acceso dinámico)"),
          undefined,
          {},
          "Menú dinámico",
        ),
        en(
          "talento",
          "preferencias",
          "Preferencias profesionales",
          "Preferencias y prioridad de SSE_CR_PREFERENC. Su consulta es independiente del plan de desarrollo.",
          "sse_g3/ssco_g3_p23.jsp",
          { estado: "31" },
        ),
        en(
          "talento",
          "preferencias-nuevo",
          "Mis preferencias profesionales",
          dynamic("Mis preferencias profesionales"),
        ),
      ]),
      group("evaluacion", "Planes de evaluación", [
        en(
          "talento",
          "criterios",
          "Criterios de evaluación",
          "Criterios, escalas y pesos definidos por el proceso de evaluación. Falta la lectura SSM_DEFINE_CRITERIA.",
          "mss_g3/mss_g3_p16.jsp",
          { estado: "31", mss: "0" },
        ),
        en(
          "talento",
          "valoracion-evaluacion",
          "Valoración de evaluación",
          "Autoevaluación con preguntas y escalas del proceso SSCO_H_EVALUTE; falta el contrato del cuestionario.",
          "sse_g3/ssco_evaluate.jsp",
        ),
        menuAccess("talento", "valoracion-evaluacion-menu", "Valoración de evaluación"),
        en(
          "talento",
          "valoracion-seguimiento",
          "Valoración de evaluación de seguimiento",
          "Cuestionario de seguimiento: conserva su fase propia, separada de la evaluación inicial. Falta resolver su destino del menú dinámico (P01/P06).",
        ),
        e("talento.evaluadores", "Evaluadores para tus procesos"),
        en(
          "talento",
          "objetivos",
          "Objetivos",
          "Objetivos y pesos de SSE_OBJETIVES. Falta el contrato de lectura y gestión de objetivos.",
          "sse_g3/sse_g3_p6.jsp",
          { estado: "31" },
        ),
        menuAccess("talento", "objetivos-menu", "Objetivos"),
        en(
          "talento",
          "valoracion-objetivos",
          "Valoración de objetivos",
          "Valoración por objetivo de SSE_OBJETIVES; las notas y el cierre los calcula Meta4.",
          "sse_g3/sse_g3_p17.jsp",
          { estado: "31" },
        ),
        menuAccess("talento", "valoracion-objetivos-menu", "Valoración de objetivos"),
        e("talento.evaluacion", "Mis evaluaciones", {
          select: ["consult:procesos"],
          source: "sse_g3/sse_g3_p5.jsp",
          parameters: { estado: "31" },
        }),
        menuAccess("talento", "evaluaciones-menu", "Mis evaluaciones"),
      ]),
      group("entrevistador", "Yo como entrevistador", [
        en(
          "talento",
          "entrevistas-candidatos",
          "Entrevistas a candidatos",
          "Candidatos asignados al entrevistador. Falta la consulta de selección con alcance de entrevistador; las entrevistas de tu ficha son otra función.",
          "mss_g3/smco_g3_p31.jsp",
          { estado: "31" },
        ),
      ]),
      group("evaluador", "Yo como evaluador", [
        en(
          "talento",
          "procesos-evaluador",
          "Procesos de evaluación",
          "Procesos asignados como evaluador, filtrados en SSCO_H_EVALUTE. Falta su contrato de asignaciones; no se muestran las evaluaciones recibidas.",
          "sse_g3/ssco_evaluator_filter.jsp",
        ),
        menuAccess("talento", "procesos-evaluador-menu", "Procesos de evaluación"),
        en(
          "talento",
          "seguimiento-evaluador",
          "Evaluación de seguimiento",
          "Asignaciones de seguimiento al evaluador y su cuestionario.",
          "sse_g3/ssco_evaluator_seg_filter.jsp",
        ),
        menuAccess("talento", "seguimiento-evaluador-menu", "Evaluación de seguimiento"),
        en(
          "talento",
          "publicar-evaluaciones",
          "Publicar evaluaciones realizadas",
          dynamic("Publicar evaluaciones realizadas"),
        ),
        en(
          "talento",
          "publicar-seguimiento",
          "Publicar evaluaciones de seguimiento realizadas",
          dynamic("Publicar evaluaciones de seguimiento realizadas"),
        ),
      ]),
      group("formacion", "Acciones de formación y desarrollo", [
        e("talento.formacion", "Catálogo de formación", { select: ["consult:curso"] }),
        e("talento.formacion", "Inscripción en cursos", {
          route: "/portal/empleado/talento/inscripcion",
          select: ["form:inscripcion"],
          source: "sse_g3/sse_g3_p7.jsp",
        }),
        menuAccess("talento", "catalogo-formacion-menu", "Catálogo de formación"),
        e("talento.evaluacion-cursos", "Evaluación de cursos"),
        e("talento.formacion-realizada", "Historial de la Formación recibida"),
        e("talento.movilidad", "Movilidad interna"),
        e("talento.entrevistas", "Mis entrevistas"),
        menuAccess("talento", "movilidad-menu", "Movilidad interna"),
        menuAccess("talento", "entrevistas-menu", "Mis entrevistas"),
        e("talento.desarrollo", "Mi plan de desarrollo", {
          select: ["consult:acciones"],
          writes: ["plan-accion"],
          source: "sse_g3/ssco_g3_pdev.jsp",
        }),
        e("talento.documentacion", "Documentación Publicada"),
        menuAccess("talento", "desarrollo-menu", "Mi plan de desarrollo"),
        e("talento.solicitudes-formacion", "Seguimiento de mi formación"),
      ]),
      group(
        "evaluacion-nuevo",
        "Planes de evaluación NUEVO",
        [
          ["procesos-evaluacion-nuevo", "Procesos de evaluación"],
          ["objetivos-nuevo", "Mis objetivos"],
          ["evaluaciones-nuevo", "Mis evaluaciones"],
          ["historial-evaluador-nuevo", "Historial de evaluación del evaluador"],
        ].map(([slug, title]) =>
          en("talento", slug, title, dynamic(`${title} · Planes de evaluación NUEVO`)),
        ),
      ),
      single(
        en("talento", "evaluacion-continua", "Evaluación continua", dynamic("Evaluación continua")),
      ),
    ]),
    es("tiempo", "Mi tiempo de trabajo", "calendar", [
      single(e("tiempo.festivos", "Calendario de festivos")),
      single(
        en("tiempo", "presencias", "Petición de presencias", dynamic("Petición de presencias")),
      ),
      single(e("tiempo.ausencias", "Ausencias laborales")),
      single(
        en(
          "tiempo",
          "ausencias-teletrabajo",
          "Petición de ausencias/teletrabajo",
          dynamic("Petición de ausencias/teletrabajo"),
        ),
      ),
      single(e("tiempo.incidencias", "Petición de incidencias y vacaciones")),
      single(e("tiempo.planificacion", "Planificación GTA")),
      single(e("tiempo.reloj", "Fichaje virtual")),
      single(
        en(
          "tiempo",
          "festivos-gta",
          "Calendario de festivos",
          dynamic("Calendario de festivos GTA"),
          undefined,
          {},
          "GTA",
        ),
      ),
      single(
        e("tiempo.vacaciones", "Comprobante de vacaciones", {
          select: ["consult:bolsa", "consult:aceptadas"],
        }),
      ),
      single(
        en(
          "tiempo",
          "ausencias-gta",
          "Ausencias laborales",
          dynamic("Ausencias laborales GTA"),
          undefined,
          {},
          "GTA",
        ),
      ),
      single(
        en(
          "tiempo",
          "ajuste-bolsa",
          "Petición de ajuste de bolsa",
          dynamic("Petición de ajuste de bolsa"),
        ),
      ),
      single(
        en(
          "tiempo",
          "hoja-presencia",
          "Mi hoja de presencia",
          "Vista mensual de SCO_GTA_EMPLOYEE_PRESENCE_REPR y sus alertas. La representación y el detalle diario los construye Meta4; falta este contrato.",
          "sse_generico/sse_generico_gta_employee_presence_TSheet.jsp",
        ),
      ),
      single(
        en(
          "tiempo",
          "modificacion-fichajes",
          "Petición de modificación de fichajes",
          dynamic("Petición de modificación de fichajes"),
        ),
      ),
    ]),
  ];

  e("datos.ficha", "Resumen completo de la ficha", {
    route: "/portal/empleado/datos/resumen-ficha",
  });
  e("tiempo.vacaciones", "Solicitud de vacaciones", {
    route: "/portal/empleado/tiempo/solicitud-vacaciones",
    select: ["consult:bolsa", "consult:peticiones", "form:solicitud-vacaciones"],
  });
  e("retribucion.beneficios", "Cancelación de beneficios", {
    route: "/portal/empleado/retribucion/cancelar-beneficios",
    select: ["form:baja-beneficio"],
  });
  const managerSections = createManagerSections({ r, rn, page, single, group, rs });
  return { sections: [...employeeSections, ...managerSections], features: [...features.values()] };
}

const sectionKey = (section: FeatureSection): SectionKey =>
  section.kind === "note"
    ? `note:${section.title}`
    : section.kind === "consult"
      ? `consult:${section.consult.id}`
      : `form:${section.form.id}`;
const dynamicDestination = (title: string): PortalOriginalDestination => ({
  kind: "dynamic",
  menuEntry: title,
  dependency: "Configuración del menú SCO_MENU y destino externo (P01/P06)",
});

type ManagerBuilders = {
  r: (id: string, title: string, options?: PageOptions) => PortalMenuPage;
  rn: (
    section: string,
    slug: string,
    title: string,
    detail: string,
    source?: string,
    parameters?: Readonly<Record<string, string>>,
  ) => PortalMenuPage;
  page: (id: string, title: string, options?: PageOptions) => PortalMenuPage;
  single: (page: PortalMenuPage) => PortalMenuGroup;
  group: (id: string, title: string, pages: readonly PortalMenuPage[]) => PortalMenuGroup;
  rs: (
    id: string,
    title: string,
    icon: PortalMenuSection["icon"],
    groups: readonly PortalMenuGroup[],
  ) => PortalMenuSection;
};

function createManagerSections({
  r,
  rn,
  page,
  single,
  group,
  rs,
}: ManagerBuilders): PortalMenuSection[] {
  const pv = (slug: string, title: string, formId: string, label: string, source: string) =>
    r("equipo.validar-personales", title, {
      route: `/portal/responsable/equipo/${slug}`,
      select: ["consult:peticiones", `form:${formId}`],
      source: `mss_g1/${source}.jsp`,
      parameters: { estado: "11" },
      filter: { item: "TIPO", equals: [label] },
    });
  const professional: readonly (readonly [string, string, string, string, string])[] = [
    ["titulaciones", "Valida titulaciones", "validar-titulaciones", "Titulación", "mss_g1_p3_val"],
    ["idiomas", "Valida idiomas", "validar-idiomas", "Idioma", "mss_g1_p3_val2"],
    [
      "experiencia",
      "Valida experiencia profesional",
      "validar-experiencia",
      "Experiencia",
      "mss_g1_p3_val3",
    ],
    [
      "certificados",
      "Valida certificados y licencias",
      "validar-certificados",
      "Certificado o licencia",
      "smco_g1_p3_val4",
    ],
    [
      "otros-cursos",
      "Valida otros cursos",
      "validar-otros-cursos",
      "Otros cursos",
      "smco_g1_p3_val5",
    ],
    [
      "asociaciones",
      "Valida afiliación a asociaciones",
      "validar-asociaciones",
      "Asociación",
      "smco_g1_p3_val6",
    ],
    [
      "complementaria",
      "Valida información complementaria",
      "validar-complementaria",
      "Información complementaria",
      "smco_g1_p3_val7",
    ],
  ];
  return [
    rs("herramientas", "Mis herramientas", "tasks", [
      single(
        page("tareas", "Mis tareas", {
          route: "/portal/responsable/herramientas/tareas",
          source: "mss_generico/mssgenerico_pendientes.jsp",
          parameters: { estado: "0" },
        }),
      ),
      single(r("alcance.poblacion", "Mi alcance")),
      single(r("alcance.delegaciones", "Mis delegaciones")),
    ]),
    rs("equipo", "Información personal", "team", [
      group("personales-equipo", "Datos personales de mis empleados", [
        r("equipo.listado", "Datos personales de mis empleados"),
        pv(
          "validar-direcciones",
          "Valida direcciones",
          "validar-direcciones",
          "Dirección",
          "mss_g1_p1_val",
        ),
        pv(
          "validar-telefonos",
          "Valida teléfonos",
          "validar-telefonos",
          "Teléfono",
          "mss_g1_p1_val3",
        ),
        pv(
          "validar-email",
          "Valida e-mail",
          "validar-email",
          "Correo electrónico",
          "mss_g1_p1_val2",
        ),
        r("equipo.validar-personales", "Valida otras direcciones", {
          route: "/portal/responsable/equipo/validar-otras-direcciones",
          select: ["form:validar-otras-direcciones"],
          source: "mss_g1/mss_g1_p1_val4.jsp",
        }),
        pv(
          "validar-estado-civil",
          "Valida estados civiles",
          "validar-estado-civil",
          "Estado civil",
          "smco_g1_p1_val5",
        ),
        pv(
          "validar-pagina-web",
          "Valida páginas web",
          "validar-pagina-web",
          "Página web",
          "smco_g1_p1_val6",
        ),
        pv(
          "validar-contacto",
          "Valida otras formas de contacto",
          "validar-otras-formas-contacto",
          "Otras formas de contacto",
          "smco_g1_p1_val7",
        ),
      ]),
      group(
        "profesionales-equipo",
        "Datos profesionales",
        professional.map(([slug, title, form, label, source]) =>
          r("equipo.validar-profesionales", title, {
            route: `/portal/responsable/equipo/validar-${slug}`,
            select: ["consult:peticiones", `form:${form}`],
            source: `mss_g1/${source}.jsp`,
            parameters: { estado: "11" },
            filter: { item: "TIPO", equals: [label] },
          }),
        ),
      ),
      single(
        pv(
          "validar-emergencia",
          "Valida contactos de emergencia (ICE)",
          "validar-emergencia",
          "Contacto de emergencia",
          "mss_g1_p4_val",
        ),
      ),
      single(
        pv(
          "validar-dependientes",
          "Valida dependientes",
          "validar-dependientes",
          "Dependiente",
          "mss_g1_p5_val",
        ),
      ),
      single(r("equipo.validar-irpf", "Valida datos para el IRPF")),
      single(r("equipo.ficha", "Dossier del empleado")),
    ]),
    rs("retribucion", "Datos económicos", "salary", [
      single(
        r("retribucion.validaciones", "Valida datos bancarios", {
          route: "/portal/responsable/retribucion/validar-cuenta",
          select: ["consult:cuentas", "form:validar-cuenta"],
          source: "mss_g2/mss_g2_p1_val.jsp",
        }),
      ),
      single(
        r("retribucion.validaciones", "Valida otras cuentas", {
          route: "/portal/responsable/retribucion/validar-otras-cuentas",
          select: ["form:validar-otras-cuentas"],
          source: "mss_g2/mss_g2_p2_val.jsp",
        }),
      ),
      single(
        r("retribucion.salarios", "Datos salariales", {
          select: ["consult:salario"],
          source: "mss_g2/mss_g2_p10.jsp",
          parameters: { estado: "21" },
        }),
      ),
      single(
        rn(
          "retribucion",
          "presupuesto",
          "Analiza el presupuesto de tu unidad organizativa",
          "Presupuesto de la unidad (SMCO_BUDGET). No se sustituye por los salarios individuales; falta el contrato de presupuesto.",
          "mss_g2/smco_g2_p11.jsp",
          { estado: "21" },
        ),
      ),
      single(
        r("retribucion.validaciones", "Valida préstamos", {
          route: "/portal/responsable/retribucion/validar-prestamos",
          select: ["consult:prestamos", "form:validar-prestamos"],
          source: "mss_g2/mss_g2_p5_val.jsp",
        }),
      ),
      single(
        r("retribucion.validaciones", "Valida beneficios", {
          route: "/portal/responsable/retribucion/validar-beneficios",
          select: ["form:validar-beneficios", "form:validar-coberturas"],
          source: "mss_g2/mss_g2_p7_val.jsp",
        }),
      ),
      single(
        r("retribucion.validaciones", "Valida cancelación de beneficios", {
          route: "/portal/responsable/retribucion/validar-cancelacion-beneficios",
          select: ["form:validar-cambios-beneficios"],
          source: "mss_g2/mss_g2_p9_val.jsp",
        }),
      ),
    ]),
    rs("revision", "Revisión de la remuneración", "review", [
      single(
        r("retribucion.revision", "Revisión salarial de los empleados", {
          select: ["consult:revisiones", "note:Recorrido de la revisión", "note:Cálculo"],
          writes: [
            "seleccion",
            "plan",
            "propuesta",
            "aprobacion",
            "exportar",
            "importar",
            "delegar",
          ],
        }),
      ),
      single(
        rn(
          "revision",
          "estado-recomendaciones",
          "Estado de tus recomendaciones de incremento salarial",
          "Estado y comentarios de las propuestas salariales (SSM_SAL_REVIEW). Falta el contrato específico del seguimiento.",
          "mss_g2/mss_g2_p6.jsp",
          { estado: "51" },
        ),
      ),
      single(
        rn(
          "revision",
          "analisis",
          "Analiza tus revisiones salariales",
          "Análisis de revisiones salariales del original; falta su contrato de informe.",
          "mss_g2/mss_g2_p8.jsp",
        ),
      ),
    ]),
    rs("talento", "Puestos de trabajo", "job", [
      group("evaluacion-equipo", "Planes de evaluación", [
        rn(
          "talento",
          "criterios",
          "Criterios de evaluación",
          "Criterios, escalas y pesos de SSM_DEFINE_CRITERIA; falta su contrato.",
          "mss_g3/mss_g3_p16.jsp",
          { estado: "31", mss: "1" },
        ),
        rn(
          "talento",
          "procesos-evaluacion",
          "Procesos de evaluación",
          "Asignaciones del responsable como evaluador; falta el contrato de SMCO_EVALUATOR.",
          "mss_g3/smco_evaluator_filter.jsp",
        ),
        rn(
          "talento",
          "seguimiento-evaluacion",
          "Evaluación de seguimiento",
          "Fase de seguimiento del evaluador; falta la lectura del cuestionario.",
          "mss_g3/smco_evaluator_seg_filter.jsp",
        ),
        rn(
          "talento",
          "objetivos",
          "Definición de objetivos del empleado",
          "Objetivos del empleado por proceso, pesos y situación; falta la lectura SSM_EV_ROL_LV_OBJ.",
          "mss_g3/mss_g3_p15.jsp",
          { estado: "31", proc: "1" },
        ),
        r("talento.evaluacion", "Validación de objetivos del empleado", {
          route: "/portal/responsable/talento/validar-objetivos",
          select: ["form:validar-objetivos"],
          source: "mss_g3/mss_g3_p15_val1.jsp",
        }),
        r("talento.evaluacion", "Historial de evaluación", {
          select: ["consult:historial"],
          source: "mss_g3/mss_g3_p23.jsp",
        }),
        rn(
          "talento",
          "validar-evaluaciones",
          "Valida las evaluaciones",
          "Validación de cuestionarios realizados; falta el contrato de SMCO_EVALUATOR_VAL.",
          "mss_g3/smco_evaluator_val.jsp",
        ),
        r("talento.evaluacion", "Valida los evaluadores", {
          route: "/portal/responsable/talento/validar-evaluadores",
          select: ["form:validar-evaluadores"],
          source: "mss_g3/mss_g3_p4_1_val.jsp",
        }),
      ]),
      group("formacion-equipo", "Acciones de formación y desarrollo", [
        rn(
          "talento",
          "plan-accion",
          "Plan de acción",
          "Acciones profesionales del equipo del original; falta el contrato específico de mss_g3_p17 con mss=1.",
          "mss_g3/mss_g3_p17.jsp",
          { estado: "31", mss: "1" },
        ),
        r("talento.formacion", "Solicita necesidades de formación", {
          route: "/portal/responsable/talento/necesidades-formacion",
          select: ["form:necesidad"],
          source: "mss_g3/mss_g3_p6.jsp",
        }),
        r("talento.formacion", "Sigue las solicitudes de formación", {
          select: ["consult:solicitudes"],
          source: "mss_g3/mss_g3_p13.jsp",
        }),
        r("talento.formacion", "Valida solicitudes de formación", {
          route: "/portal/responsable/talento/validar-formacion",
          select: ["form:validar-formacion"],
          source: "mss_g3/mss_g3_p3_val.jsp",
        }),
        rn(
          "talento",
          "valoracion-cursos",
          "Valoración de cursos",
          "Cuestionarios de valoración del equipo; falta el contrato de SSM_TRAINING_REQUEST.",
          "mss_g3/mss_g3_p11.jsp",
          { estado: "31" },
        ),
        rn(
          "talento",
          "eventos",
          "Eventos actuales convocados",
          "Eventos y asistentes convocados: modo por defecto de mss_g3_p14; falta la consulta de eventos.",
          "mss_g3/mss_g3_p14.jsp",
          { estado: "31" },
        ),
        rn(
          "talento",
          "formacion-realizada",
          "Formaciones realizadas",
          "Cursos realizados del equipo; modo zTLoad=FR distinto de los eventos convocados.",
          "mss_g3/mss_g3_p14.jsp",
          { estado: "31", zTLoad: "FR" },
        ),
        rn(
          "talento",
          "presupuesto-formacion",
          "Analiza el presupuesto para formación de tu unidad organizativa",
          "El mapa antiguo enlaza smco_g3_p32 (también usado para preferencias). Falta confirmar la variante de presupuesto antes de mostrar resultados.",
          "mss_g3/smco_g3_p32.jsp",
          { estado: "21" },
        ),
      ]),
      group("entrevistas-equipo", "Entrevistas", [
        r("talento.entrevistas", "Gestiona entrevistas", { select: ["form:entrevista"] }),
        r("talento.entrevistas", "Entrevistas de mis empleados", {
          route: "/portal/responsable/talento/entrevistas-empleados",
          select: ["consult:entrevistas"],
          source: "mss_g3/smco_g3_p30_list.jsp",
        }),
        r("talento.entrevistas", "Valida entrevistas", {
          route: "/portal/responsable/talento/validar-entrevistas",
          select: ["consult:entrevistas", "form:validar-entrevistas"],
          source: "mss_g3/smco_g3_p30_val.jsp",
        }),
      ]),
      single(r("talento.carrera", "Planes de carrera")),
      single(
        rn(
          "talento",
          "competencias",
          "Competencias del puesto",
          "GAP del nivel actual respecto al puesto y su nivel requerido; falta el contrato específico de SSM_JOB_COMPETENCES.",
          "mss_g3/mss_g3_p9.jsp",
          { estado: "31" },
        ),
      ),
      single(
        r("talento.movimientos", "Valida las solicitudes de movilidad interna", {
          select: ["form:validar-movilidad"],
          source: "mss_g3/mss_g3_p2_val.jsp",
        }),
      ),
      single(
        r("talento.preferencias", "Valida preferencias profesionales", {
          source: "mss_g3/smco_g3_p32_val.jsp",
        }),
      ),
      group("seleccion-equipo", "Selección", [
        r("talento.vacantes", "Solicita una vacante", {
          select: ["form:vacante"],
          source: "mss_g3/mss_g3_p1_wiz1.jsp",
        }),
        r("talento.vacantes", "Sigue los procesos abiertos", {
          route: "/portal/responsable/talento/procesos-abiertos",
          select: ["consult:procesos"],
          source: "mss_g3/mss_g3_p1.jsp",
        }),
        rn(
          "talento",
          "entrevistas-candidatos",
          "Entrevistas a candidatos",
          "Entrevistas de selección con alcance de entrevistador. Las entrevistas de empleados son otro contrato.",
          "mss_g3/smco_g3_p31.jsp",
          { estado: "31" },
        ),
      ]),
    ]),
    rs("tiempo", "Tiempo de trabajo", "calendar", [
      single(
        r("tiempo.vacaciones", "Valida vacaciones", {
          select: ["form:validar-vacaciones"],
          source: "mss_g4/mss_g4_p1_val.jsp",
        }),
      ),
      single(
        r("tiempo.vacaciones", "Consulta vacaciones aceptadas", {
          route: "/portal/responsable/tiempo/vacaciones-aceptadas",
          select: ["consult:vacaciones", "form:filtro-vacaciones", "note:Leyenda"],
          source: "mss_g4/mss_g4_p3.jsp",
        }),
      ),
      single(r("tiempo.ausencias", "Ausencias")),
      single(r("tiempo.bolsas", "Bolsas y ajustes")),
      single(r("tiempo.planificacion", "Planificación GTA")),
    ]),
  ];
}

export const availableMenuPages = (
  group: PortalMenuGroup,
  features: readonly PortalFeature[],
  variant?: PortalVariant,
) =>
  group.pages.filter((page) => {
    const feature = features.find((f) => f.id === page.featureId);
    return feature && (!variant || !feature.availableIn || feature.availableIn.includes(variant));
  });
