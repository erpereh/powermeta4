/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

import { ToolsCommandPalette } from "./tools-command-palette";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  HTMLElement.prototype.scrollIntoView = vi.fn();
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

describe("tools command palette", () => {
  it("searches Acciones ERP and excludes Registro Retributivo", async () => {
    const user = userEvent.setup();
    render(
      <ToolsCommandPalette
        open
        onOpenChange={() => undefined}
        onSelectTool={() => undefined}
        onUnavailable={() => undefined}
      />,
    );

    expect(screen.getByPlaceholderText("Buscar acciones...")).toBeTruthy();
    expect(screen.getByText("Listado de usuarios")).toBeTruthy();
    expect(screen.queryByText("Registro Retributivo")).toBeNull();
    expect(screen.queryByText("Reg. Retrib.")).toBeNull();

    await user.type(screen.getByPlaceholderText("Buscar acciones..."), "registro");
    expect(screen.getByText("No hay acciones que coincidan.")).toBeTruthy();
    expect(screen.queryByText("Registro Retributivo")).toBeNull();

    await user.clear(screen.getByPlaceholderText("Buscar acciones..."));
    await user.type(screen.getByPlaceholderText("Buscar acciones..."), "usuario");
    expect(screen.getByText("Listado de usuarios")).toBeTruthy();
    expect(screen.getByText("Crear nuevo usuario")).toBeTruthy();
  });
});
