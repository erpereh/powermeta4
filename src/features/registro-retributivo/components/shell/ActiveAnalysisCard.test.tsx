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
  it.each([false, true])(
    "conserva la fecha y muestra IA disponible solo cuando procede (%s)",
    (configured) => {
      state.mockReturnValue({
        activeAnalysis: { createdAt: "2026-10-08T13:28:00.000Z" },
        aiStatus: { configured, enabled: configured },
      });
      render(<ActiveAnalysisCard />);
      expect(screen.queryByText("IA no configurada")).toBeNull();
      expect(Boolean(screen.queryByText("IA disponible"))).toBe(configured);
      expect(screen.getByText(/8 oct 2026/)).toBeTruthy();
    },
  );
});
