import { describe, expect, it } from "vitest";

import { classifyPay, matchesPayFilter } from "./pay-category";

describe("classifyPay", () => {
  it.each([
    ["Abril 2026", "1", "ordinary"],
    ["Febrero", "1", "ordinary"],
    ["Septiembre 2026", "1", "ordinary"],
    ["Revisión Convenio 2026", "1", "revision"],
    ["Revision Convenio 2022 Valencia", "1", "revision"],
    ["Paga Revisión Admvos. Conv. Madrid", "1", "revision"],
    ["Incrementos 2026", "1", "revision"],
    ["Paga incrementos 2025", "1", "revision"],
    ["Retribución Variable 2025", "2", "variable"],
    ["Noviembre complementaria", "2", "variable"],
    ["Unión pagas 24-03 y 25-03 retro", "1", "other"],
    ["Noviembre RETRO LIMPIA GRUPOS", "1", "other"],
    ["Febrero creta retros", "1", "other"],
    ["Programa desarrollo 2022", "1", "other"],
  ])("classifies «%s» (tipo %s) as %s", (name, payType, category) => {
    expect(classifyPay(name, payType)).toBe(category);
  });

  it("matches the «all» filter and the pay's own group only", () => {
    expect(matchesPayFilter("revision", "all")).toBe(true);
    expect(matchesPayFilter("revision", "revision")).toBe(true);
    expect(matchesPayFilter("revision", "ordinary")).toBe(false);
  });
});
