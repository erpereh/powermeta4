import { describe, expect, it } from "vitest";

import {
  SIDEBAR_TOOL_ITEMS,
  STANDALONE_TOOLS,
  TOOL_ICONS,
  TOOL_MODULES,
  TOOL_REGISTRY,
  isStandaloneTool,
  isToolRouteNavigable,
  searchTools,
} from "@/lib/tools/registry";

describe("tool registry", () => {
  it("contains five modules with four actions each", () => {
    expect(TOOL_MODULES.map((module) => module.id)).toEqual([
      "users",
      "companies",
      "payroll",
      "reports",
      "processes",
    ]);
    expect(TOOL_MODULES.every((module) => module.tools.length === 4)).toBe(true);
  });

  it("keeps action IDs, prompts and icons configured", () => {
    const ids = TOOL_REGISTRY.map((tool) => tool.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(TOOL_REGISTRY.every((tool) => tool.aiPrompt.length > 0 && TOOL_ICONS[tool.icon])).toBe(
      true,
    );
    expect(TOOL_REGISTRY.map((tool) => tool.aiPrompt)).toEqual([
      "Quiero crear un nuevo usuario",
      "Quiero consultar los datos de un usuario",
      "Quiero modificar los datos de un usuario",
      "Quiero dar de baja un usuario",
      "Quiero consultar los datos de una empresa",
      "Quiero crear una empresa",
      "Quiero modificar los datos de una empresa",
      "Quiero consultar los centros de trabajo de una empresa",
      "Quiero generar las nóminas de un periodo",
      "Quiero consultar una nómina",
      "Quiero revisar las incidencias de nómina",
      "Quiero regenerar las nóminas de un periodo",
      "Quiero crear un informe",
      "Quiero consultar los informes",
      "Quiero exportar los resultados de un informe",
      "Quiero programar un informe",
      "Quiero ejecutar un proceso",
      "Quiero consultar el estado de un proceso",
      "Quiero revisar los errores de un proceso",
      "Quiero ver los procesos recientes",
    ]);
  });

  it("keeps user actions as external ERP placeholders except the users list", () => {
    const userTools = TOOL_REGISTRY.filter((tool) => tool.moduleId === "users");
    const consult = userTools.find((tool) => tool.id === "users.consult");

    expect(userTools).toHaveLength(4);
    expect(consult).toMatchObject({
      name: "Listado de usuarios",
      description: "Consulta todos los usuarios disponibles en la sociedad actual.",
      route: "/tools/users/list",
      icon: "user-search",
      implemented: true,
    });
    expect(consult?.keywords).toEqual(
      expect.arrayContaining(["usuario", "usuarios", "listado", "consultar", "buscar", "empleado"]),
    );
    expect(
      userTools
        .filter((tool) => tool.id !== "users.consult")
        .every((tool) => !tool.implemented && tool.route === "/tools/users"),
    ).toBe(true);
    expect(userTools.map((tool) => tool.aiPrompt)).toEqual([
      "Quiero crear un nuevo usuario",
      "Quiero consultar los datos de un usuario",
      "Quiero modificar los datos de un usuario",
      "Quiero dar de baja un usuario",
    ]);
    expect(userTools.every((tool) => TOOL_ICONS[tool.icon])).toBe(true);
  });

  it("searches modules, actions, keywords and module names on tools", () => {
    expect(searchTools("nómina").tools.map((tool) => tool.moduleId)).toEqual([
      "payroll",
      "payroll",
      "payroll",
      "payroll",
    ]);
    expect(searchTools("usuarios").modules.map((module) => module.id)).toContain("users");
    expect(searchTools("centro de trabajo").tools[0]?.id).toBe("companies.work-centers");
    expect(searchTools("empresas").tools.some((tool) => tool.moduleId === "companies")).toBe(true);
  });

  it("keeps Registro Retributivo as the only sidebar standalone tool", () => {
    const registro = STANDALONE_TOOLS.find((tool) => tool.id === "registro-retributivo");

    expect(TOOL_MODULES.map((module) => module.name)).toEqual([
      "Usuarios",
      "Empresas",
      "Nóminas",
      "Informes",
      "Procesos",
    ]);
    expect(SIDEBAR_TOOL_ITEMS.map((item) => item.name)).toEqual(["Reg. Retrib."]);
    expect(
      SIDEBAR_TOOL_ITEMS.every((item) => !TOOL_MODULES.some((module) => module.id === item.id)),
    ).toBe(true);
    expect(registro).toMatchObject({
      name: "Registro Retributivo",
      shortName: "Reg. Retrib.",
      route: "/tools/registro-retributivo",
      icon: "registro-retributivo",
      implemented: false,
    });
    expect(registro && TOOL_ICONS[registro.icon]).toBeTruthy();
    expect(registro && isStandaloneTool(registro)).toBe(true);
    expect(registro && isToolRouteNavigable(registro)).toBe(true);
    expect(TOOL_MODULES).toHaveLength(5);
    expect(TOOL_REGISTRY.every((tool) => tool.id !== "registro-retributivo")).toBe(true);
    expect(isToolRouteNavigable(TOOL_REGISTRY.find((tool) => tool.id === "users.create")!)).toBe(
      false,
    );
    expect(isToolRouteNavigable(TOOL_REGISTRY.find((tool) => tool.id === "users.consult")!)).toBe(
      true,
    );
  });

  it("does not include standalone tools in Acciones search", () => {
    expect(searchTools("registro").tools).toEqual([]);
    expect(searchTools("registro").modules).toEqual([]);
    expect(searchTools("retributivo").tools).toEqual([]);
    expect(searchTools("usuario").tools.some((tool) => tool.moduleId === "users")).toBe(true);
  });
});
