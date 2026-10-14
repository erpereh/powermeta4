import { describe, expect, it } from "vitest";
import { buildDonut } from "./model";

describe("anillo de beUI con beneficios pequeños", () => {
  it("mantiene el importe y la cuota de los segmentos pequeños sin extremos superpuestos", () => {
    const result = buildDonut(
      [
        { id: "salary", name: "Salario", color: "", value: 999 },
        { id: "aid", name: "Ayuda", color: "", value: 1 },
      ],
      { radius: 83, thickness: 18, gap: 0, rounded: false },
    );
    expect(result.total).toBe(1000);
    expect(result.placed[1].share).toBe(0.001);
    expect(result.placed[1].path).not.toMatch(/NaN|Infinity/);
    expect(
      buildDonut([{ id: "zero", name: "Cero", color: "", value: 0 }], {
        radius: 83,
        thickness: 18,
        gap: 0,
      }).placed,
    ).toEqual([]);
  });
});
