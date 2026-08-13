/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import RegistroRetributivoPage from "@/app/(app)/tools/registro-retributivo/page";

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
});

describe("Registro Retributivo page", () => {
  it("renders the placeholder title and coming-soon copy", () => {
    render(
      <TooltipProvider>
        <SidebarProvider>
          <RegistroRetributivoPage />
        </SidebarProvider>
      </TooltipProvider>,
    );

    expect(screen.getAllByText("Registro Retributivo").length).toBeGreaterThan(0);
    expect(screen.getByText("Próximamente")).toBeTruthy();
    expect(screen.getByText("Esta herramienta estará disponible próximamente.")).toBeTruthy();
    expect(
      screen.getByText("Consulta y genera información para el registro retributivo."),
    ).toBeTruthy();
  });
});
