import { describe, expect, it } from "vitest";

import { ERP_RECOMMENDATIONS } from "@/data/erp-recommendations";

describe("ERP recommendations", () => {
  it("defines the five categories in the requested initial order", () => {
    expect(ERP_RECOMMENDATIONS.map((category) => category.id)).toEqual([
      "users",
      "companies",
      "payroll",
      "reports",
      "processes",
    ]);
    expect(ERP_RECOMMENDATIONS[0]?.label).toBe("Usuarios");
  });

  it("defines four unique actions for every category", () => {
    for (const category of ERP_RECOMMENDATIONS) {
      expect(category.actions).toHaveLength(4);
      expect(new Set(category.actions.map((action) => action.id)).size).toBe(4);
      expect(category.actions.every((action) => action.label && action.prompt)).toBe(true);
    }
  });

  it("keeps the ERP prompts explicit and non-executable", () => {
    const prompts = Object.fromEntries(
      ERP_RECOMMENDATIONS.flatMap((category) =>
        category.actions.map((action) => [action.id, action.prompt]),
      ),
    );

    expect(prompts).toMatchObject({
      "create-user": "Quiero crear un nuevo usuario",
      "consult-user": "Quiero consultar los datos de un usuario",
      "generate-payroll": "Quiero generar las nóminas de un periodo",
    });
    expect(Object.values(prompts).every((prompt) => prompt.startsWith("Quiero "))).toBe(true);
  });

  it("uses a configured Lucide icon for every category", () => {
    expect(ERP_RECOMMENDATIONS.every((category) => category.icon)).toBe(true);
  });
});
