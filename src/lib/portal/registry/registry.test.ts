import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { assertReadOnlySql } from "../peoplenet/query";
import { SOAP_CATALOG } from "../soap/catalog.generated";
import { PORTAL_READER_FIELDS } from "./readers";
import {
  getDomainForRoute,
  getPortalFeatureByRoute,
  getPortalFeatureBySource,
  getProfileDomains,
  getProfileForRoute,
  PORTAL_DOMAINS,
  PORTAL_FEATURES,
  searchPortalFeatures,
} from "./index";

const DOCS = path.resolve(__dirname, "../../../../docs/portal");

/** Rutas lógicas documentadas en los índices de dominio de docs/portal. */
const documentedRoutes = (): Set<string> => {
  const routes = new Set<string>();
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry === "README.md") {
        for (const match of readFileSync(full, "utf8").matchAll(
          /^\| \[([^\]]+\.(?:jsp|html|js))\]/gm,
        )) {
          routes.add(match[1].toLowerCase());
        }
      }
    }
  };
  walk(DOCS);
  return routes;
};

describe("registro del portal", () => {
  it("cada apartado tiene lector, contrato y campos conectados respaldados", () => {
    for (const feature of PORTAL_FEATURES) {
      const queries = (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult" ? [section.consult] : [],
      );
      expect(new Set(queries.map((query) => query.id)).size, feature.id).toBe(queries.length);
      for (const query of queries) {
        expect(query.read).toBeDefined();
        if (query.reader === "dependency") expect(query.read.kind).toBe("pending");
        else if (query.reader === "sql") {
          const where = `${feature.id}/${query.id}`;
          const sqlQuery = query.query;
          expect(sqlQuery, where).toBeDefined();
          if (!sqlQuery) continue;
          expect(() => assertReadOnlySql(sqlQuery.statement), where).not.toThrow();
          expect(query.read).toMatchObject({ kind: "sql", tables: sqlQuery.tables });
          for (const field of query.fields)
            expect(
              new RegExp(`\\bAS\\s+${field.item}\\b`, "i").test(sqlQuery.statement),
              `${where}/${field.item}`,
            ).toBe(true);
          // Solo parámetros que pone el servidor, y el filtro de su alcance.
          for (const [, param] of sqlQuery.statement.matchAll(/@(\w+)/g))
            expect(
              ["organization", "today", "employeeId", "team"],
              `${where}: @${param}`,
            ).toContain(param);
          // Los catálogos compartidos (p. ej. publicaciones de RR. HH.) no dependen de la sociedad.
          if (sqlQuery.scope !== "society")
            expect(sqlQuery.statement, where).toContain("@organization");
          if (query.download) expect(sqlQuery.statement, where).toMatch(/\bAS DOC_KEY\b/);
          if (sqlQuery.scope === "own") expect(sqlQuery.statement, where).toContain("@employeeId");
          else if (sqlQuery.scope === "team")
            expect(sqlQuery.statement, where).toMatch(/IN \(@team\)/);
          // Un catálogo de la sociedad nunca recibe una matrícula.
          else expect(sqlQuery.statement, where).not.toMatch(/@employeeId|@team/);
        } else {
          const fields: readonly string[] = PORTAL_READER_FIELDS[query.reader];
          for (const field of query.fields)
            expect(
              fields.includes(field.item ?? ""),
              `${feature.id}/${query.id}/${field.label}`,
            ).toBe(true);
        }
      }
    }
  });
  it("tiene identificadores y rutas únicas bajo /portal", () => {
    const ids = PORTAL_FEATURES.map((feature) => feature.id);
    const routes = PORTAL_FEATURES.map((feature) => feature.route);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(routes).size).toBe(routes.length);
    for (const route of routes)
      expect(route === "/portal" || route.startsWith("/portal/")).toBe(true);
  });

  it("enlaza cada pantalla con una ficha existente y fuentes documentadas", () => {
    const documented = documentedRoutes();
    for (const feature of PORTAL_FEATURES) {
      expect(existsSync(path.join(DOCS, feature.ficha)), feature.ficha).toBe(true);
      for (const source of feature.sources) {
        expect(documented.has(source.toLowerCase()), `${feature.id}: ${source}`).toBe(true);
      }
    }
  });

  it("solo declara servicios SOAP presentes en el catálogo generado", () => {
    for (const feature of PORTAL_FEATURES) {
      const read = feature.read;
      if (read.kind !== "soap") continue;
      const contract = Object.entries(SOAP_CATALOG).find(
        ([service]) => service === read.service,
      )?.[1];
      expect(contract, feature.id).toBeDefined();
      expect(contract?.operations.some((operation) => operation.operation === read.operation)).toBe(
        true,
      );
    }
  });

  it("toda escritura queda bloqueada con un pendiente y su método Meta4", () => {
    for (const feature of PORTAL_FEATURES) {
      const writes = [
        ...(feature.writes ?? []),
        ...(feature.sections ?? []).flatMap((section) =>
          section.kind === "form" ? [section.form.write] : [],
        ),
      ];
      for (const write of writes) {
        expect(write.meta4Method.length, `${feature.id}/${write.id}`).toBeGreaterThan(0);
        expect(write.pending.length, `${feature.id}/${write.id}`).toBeGreaterThan(0);
      }
    }
  });

  it("cada dominio tiene pantallas y una ruta resoluble", () => {
    for (const domain of PORTAL_DOMAINS) {
      expect(
        PORTAL_FEATURES.some((feature) => feature.domain === domain.id),
        domain.id,
      ).toBe(true);
      expect(getDomainForRoute(domain.route)?.id).toBe(domain.id);
    }
  });

  it("deriva el perfil de la URL y los dominios por perfil", () => {
    expect(getProfileForRoute("/portal/responsable/equipo")).toBe("responsable");
    expect(getProfileForRoute("/portal/empleado/datos")).toBe("empleado");
    expect(getProfileDomains("empleado").map((domain) => domain.id)).toContain("organizacion");
    expect(
      getProfileDomains("responsable").every((domain) => domain.profile === "responsable"),
    ).toBe(true);
  });

  it("busca sin acentos y resuelve rutas y fuentes", () => {
    expect(searchPortalFeatures("nomina").map((feature) => feature.id)).toContain(
      "empleado.retribucion.nominas",
    );
    expect(getPortalFeatureByRoute("/portal/empleado/tiempo/vacaciones/")?.id).toBe(
      "empleado.tiempo.vacaciones",
    );
    expect(getPortalFeatureBySource("mss_g4/mss_g4_p1_val.jsp")?.id).toBe(
      "responsable.tiempo.vacaciones",
    );
  });
});
