/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ActiveAnalysisCard } from "./ActiveAnalysisCard";

const state = vi.hoisted(() => vi.fn());
vi.mock("@/features/registro-retributivo/state/AppState", () => ({ useAppState: state }));
afterEach(() => {
  cleanup();
  state.mockReset();
});
describe("indicador del análisis", () => {
  it("conserva la fecha sin indicador de IA", () => {
    state.mockReturnValue({
      activeAnalysis: { createdAt: "2026-10-08T13:28:00.000Z" },
    });
    render(<ActiveAnalysisCard />);
    expect(screen.queryByText("IA no configurada")).toBeNull();
    expect(screen.queryByText("IA disponible")).toBeNull();
    expect(screen.getByText(/8 oct 2026/)).toBeTruthy();
  });
});
