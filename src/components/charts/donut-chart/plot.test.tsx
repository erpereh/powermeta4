// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { DonutChart, DonutChartPlot } from "../donut-chart";

const preference = vi.hoisted(() => ({ reduce: false }));
vi.mock("@/hooks/use-reduced-motion", () => ({
  useReducedMotion: () => preference.reduce,
}));
vi.mock("motion/react", async () => ({
  ...(await vi.importActual<typeof import("motion/react")>("motion/react")),
  useInView: () => false,
}));
afterEach(cleanup);

it("muestra los arcos cuando la preferencia reducida se conoce después del primer render", () => {
  const segments = [
    { id: "fixed", name: "Fija", value: 100, color: "var(--chart-1)" },
    { id: "variable", name: "Variable", value: 10, color: "var(--chart-2)" },
  ];
  const chart = (activeId: string | null = null) => (
    <DonutChart segments={segments} activeId={activeId}>
      <DonutChartPlot />
    </DonutChart>
  );
  const { container, rerender } = render(chart());
  const arcs = () => [...container.querySelectorAll("svg > g:first-of-type > path")];
  expect(arcs().map((path) => path.getAttribute("opacity"))).toEqual(["0", "0"]);
  preference.reduce = true;
  rerender(chart());
  expect(arcs().map((path) => path.getAttribute("opacity"))).toEqual(["1", "1"]);
  rerender(chart("variable"));
  expect(arcs().map((path) => path.getAttribute("opacity"))).toEqual(["0.3", "1"]);
});
