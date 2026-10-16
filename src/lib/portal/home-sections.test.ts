import { describe, expect, it } from "vitest";

import { getPortalHomeSections } from "./home-sections";
import { getPortalFeatureByRoute } from "./registry";

describe("apartados del inicio del portal", () => {
  it("mantiene nombres, orden y destinos de los grupos del empleado", () => {
    const sections = getPortalHomeSections("empleado", "CYC");
    expect(sections.map((section) => section.title)).toEqual([
      "Aplicaciones Internas",
      "Mis herramientas",
      "Mi información personal",
      "Mis datos económicos",
      "Mi puesto de trabajo",
      "Mi tiempo de trabajo",
    ]);
    expect(sections[0].items[0]).toMatchObject({
      title: "Organigrama",
      href: "/portal/empleado/aplicaciones/organigrama",
    });
    expect(sections[2].items.map((item) => item.title)).toEqual([
      "Mis datos personales",
      "Mis datos profesionales",
      "Mis datos para el IRPF",
      "Mis contactos de emergencia (ICE)",
      "Mis dependientes",
      "Dossier del empleado",
      "Dossier del empleado NUEVO",
      "Mis documentos a tramitar",
    ]);
    expect(sections[2].items[0].href).toBe("/portal/empleado/datos");
    expect(sections[2].items[1].href).toBe("/portal/empleado/datos/profesionales");
    expect(JSON.parse(JSON.stringify(sections))).toEqual(sections);
  });

  it("genera los seis apartados propios del responsable", () => {
    const sections = getPortalHomeSections("responsable", "CYC");
    expect(sections.map((section) => section.title)).toEqual([
      "Mis herramientas",
      "Información personal",
      "Datos económicos",
      "Revisión de la remuneración",
      "Puestos de trabajo",
      "Tiempo de trabajo",
    ]);
    expect(sections[0].items[0].href).toBe("/portal/responsable/herramientas/tareas");
    expect(sections[1].items[0].href).toBe("/portal/responsable/equipo");
    expect(sections[3].tone).toBe("violet");
  });

  it.each(["BASE", "CYC", "IBER", "COLL"] as const)(
    "solo expone destinos disponibles de la variante %s y conserva grupos homónimos",
    (variant) => {
      for (const profile of ["empleado", "responsable"] as const) {
        const sections = getPortalHomeSections(profile, variant);
        for (const section of sections) {
          expect(section.items.length).toBeGreaterThan(0);
          for (const item of section.items) {
            const feature = getPortalFeatureByRoute(item.href);
            expect(feature, item.href).toBeDefined();
            if (feature?.availableIn) expect(feature.availableIn).toContain(variant);
          }
        }
      }
      const time = getPortalHomeSections("empleado", variant).find(
        (section) => section.id === "empleado.tiempo",
      );
      expect(time?.items.filter((item) => item.title === "Calendario de festivos")).toHaveLength(2);
    },
  );
});
