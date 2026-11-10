import { getPortalMenuLocation, PORTAL_FEATURES } from "../../src/lib/portal/registry";
import type { PortalFeature } from "../../src/lib/portal/types";

const cell = (value: string) => value.replaceAll("|", " / ").replaceAll("\n", " ");
const menu = (feature: PortalFeature) => {
  const location = getPortalMenuLocation(feature.route);
  return [
    "Portal",
    feature.profile === "responsable" ? "Responsable" : "Empleado",
    location?.section.title,
    location?.group?.title,
    location?.page?.title ?? feature.title,
  ]
    .filter(Boolean)
    .filter((part, i, parts) => part !== parts[i - 1])
    .join(" > ");
};
const consults = (feature: PortalFeature) =>
  (feature.sections ?? []).flatMap((section) =>
    section.kind === "consult" ? [section.consult] : [],
  );
const custom = new Set([
  "home",
  "manager-home",
  "tasks",
  "directory",
  "orgchart",
  "my-file",
  "payslips",
  "projections",
  "certificates",
  "holidays",
]);

/** Matriz exhaustiva por funcionalidad y apartado; nunca acredita la VM a partir de muestras. */
export function readonlyMatrix(): string {
  const lines = [
    "# Matriz de consultas y guía DEBUG",
    "",
    "> Generado por `npm run portal:docs`. Complementa `auditoria-fuentes.md`, que contrasta las fuentes BASE/CYC/IBER/COLL.",
    "",
    "La implementación es por apartado. «Preparado» indica código de lectura; «dependencia» conserva un contrato incompleto. «Muestra» solo prueba presentación con datos ficticios y no acredita tablas, permisos, escalas ni fórmulas. Las pruebas de proveedor cubren los cuatro escenarios; la revisión visual por ruta se registra en continuidad-solo-lectura.md, sin inferir que todas las rutas se hayan probado manualmente.",
    "",
    "Persona por defecto: 90000 Clara, responsable de 90001 Ana y 90002 Luis; 90003 Marta depende de Luis. 91001 Eva es ajena a ese equipo. Todas son ficticias. Variantes BASE/CYC/IBER/COLL. Escenarios: full, partial, empty, error. Las URL de la tabla son reproducibles desde una sesión DEBUG válida, con NODE_ENV=development y POWERMETA4_DEBUG_AUTH=true. Sin persistencia nueva.",
    "",
    "Consultar aplica texto, mes, campo y valor exacto; responsable permite persona solo dentro del equipo recalculado en servidor. Excel/PDF vuelve a leer con los mismos filtros. Si un apartado no tiene contrato, la consulta real conserva su dependencia y no ejecuta métodos nativos. Las escrituras siguen bloqueadas.",
    "",
    "## Guía funcional completa",
    "",
    "| Menú exacto | URL reproducible | Persona / escenario | Acciones y filtros | Resultado esperado en DEBUG | Implementación / prueba DEBUG / VM |",
    "| --- | --- | --- | --- | --- | --- |",
  ];
  for (const feature of PORTAL_FEATURES) {
    const specs = consults(feature);
    const known = specs.filter((spec) => spec.reader !== "dependency");
    const samples = specs.filter((spec) => spec.fields.some((field) => field.item));
    const actor = feature.profile === "responsable" ? "90000" : "90001";
    const url = `${feature.route}?debugActor=${actor}&debugVariant=${feature.availableIn?.[0] ?? "CYC"}&debugScenario=full`;
    const actions = specs.length
      ? "Consultar; q, period, field/value" +
        (feature.profile === "responsable" ? ", employee autorizado" : "") +
        "; Excel/PDF de apartados"
      : feature.view === "payslips"
        ? "Paga inicial/final; actual/retroactiva/ambas; consultar; Excel/PDF"
        : feature.view === "directory"
          ? "Buscar ≥2 caracteres; abrir ficha pública"
          : feature.view === "orgchart"
            ? "Filtrar; expandir; centrar; abrir ficha pública"
            : feature.view === "projections"
              ? "Ejercicio; tablas/gráficas; Excel/PDF; matrícula según excepción de sociedad"
              : feature.view === "certificates"
                ? "Ejercicio; previsualizar/descargar PDF; matrícula según excepción de sociedad"
                : feature.view === "holidays"
                  ? "Consultar festivos del año actual"
                  : custom.has(feature.view)
                    ? "Navegar/abrir apartados de lectura"
                    : "Revisar dependencia y formularios bloqueados";
    const expected = samples.length
      ? `${samples.length} apartado(s) con muestras; full: hasta 90 filas, ceros y fechas; partial: campos ausentes y fallo independiente; empty: sin filas; error: error simulado. ${specs.length - samples.length} sin estructura, dependencia visible.`
      : custom.has(feature.view)
        ? "Vista especializada con muestra; comprobar escenarios y límites en continuidad."
        : "Dependencia explícita; no se inventan campos ni resultados.";
    const code = specs.length
      ? `${known.length}/${specs.length} lectores preparados`
      : feature.read.kind === "pending"
        ? "Dependencia"
        : "Vista especializada";
    lines.push(
      `| ${cell(menu(feature))} | [${feature.route}](${url}) | ${actor} / full; repetir partial, empty, error | ${cell(actions)} | ${cell(expected)} | ${code}; DEBUG: ${samples.length || custom.has(feature.view) ? "muestra disponible, prueba visual individual no implícita" : "sin muestra de contenido desconocido"}; VM: pendiente de auditoría nueva |`,
    );
  }
  lines.push(
    "",
    "## Contratos, lectores, permisos y carencias por apartado",
    "",
    "| Función / apartado | Fuentes y variante | Ítems / controles | Lector y alcance | Contrato / carencia | Código / DEBUG / VM |",
    "| --- | --- | --- | --- | --- | --- |",
  );
  for (const feature of PORTAL_FEATURES) {
    const specs = consults(feature);
    for (const section of feature.sections ?? [])
      if (section.kind === "query" && section.query.form) {
        const form = section.query.form;
        lines.push(
          `| \`${feature.id}/consulta:${form.id}\` · ${cell(form.title)} | ${cell(feature.sources.join(", "))}; ${feature.availableIn?.join(", ") ?? "BASE/CYC/IBER/COLL"} | ${cell(form.fields.map((field) => `${field.label} (${field.name})`).join("; "))} | Consulta bloqueada; validación local, sin escritura | \`${cell(form.dependency.method)}\`; faltan reglas/contrato: ${form.dependency.pending.join(", ")} | Controles conservados / no se simula un cálculo desconocido / pendiente |`,
        );
      }
    for (const spec of specs) {
      const dependency =
        spec.read.kind === "pending"
          ? spec.read.detail
          : `Tablas: ${spec.read.kind === "sql" ? spec.read.tables.join(", ") : "SOAP"}. Contrastar columnas, filtros y permisos efectivos.`;
      lines.push(
        `| \`${feature.id}/${spec.id}\` · ${cell(spec.title)} | ${cell(feature.sources.join(", "))}; ${feature.availableIn?.join(", ") ?? "BASE/CYC/IBER/COLL"} | ${cell(spec.fields.map((field) => `${field.label} (${field.item ?? "sin ítem"})`).join("; "))} | ${spec.reader}; ${spec.query?.scope ?? (feature.profile === "responsable" ? "equipo / contrato pendiente" : "identidad propia / contrato pendiente")} | \`${cell(spec.meta4)}\`. ${cell(dependency)} | ${spec.reader === "dependency" ? "Dependencia" : "Preparado"} / ${spec.fields.some((field) => field.item) ? "muestra de presentación" : "sin estructura"} / pendiente nueva evidencia |`,
      );
    }
    if (!specs.length)
      lines.push(
        `| \`${feature.id}\` | ${cell(feature.sources.join(", ") || "Destino dinámico")}; ${feature.availableIn?.join(", ") ?? "BASE/CYC/IBER/COLL"} | ${cell((feature.sections ?? []).flatMap((section) => (section.kind === "form" ? section.form.fields.map((field) => field.label) : [])).join("; ") || "Vista especializada / sin estructura de consulta")} | ${feature.view} | ${cell(feature.read.kind === "pending" ? feature.read.detail : "Consultar contrato principal y fuentes en estado.md")} | ${feature.read.kind === "pending" ? "Dependencia" : "Código existente"} / ${custom.has(feature.view) ? "muestra especializada" : "dependencia visible"} / pendiente nueva evidencia |`,
      );
  }
  return `${lines.join("\n")}\n`;
}
