/** @vitest-environment jsdom */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SidebarProvider } from "@/components/system";
import { PortalShell, type PortalShellContext } from "./portal-shell";

const route = vi.hoisted(() => ({ pathname: "/portal/empleado/datos/idiomas" }));
vi.mock("next/navigation", () => ({ usePathname: () => route.pathname }));
vi.mock("@/components/app-shell/app-command-palette", () => ({
  useOptionalAppCommandPalette: () => null,
}));
beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
  );
  HTMLElement.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
const context: PortalShellContext = {
  mode: "unavailable",
  message: "Sesión de prueba sin datos personales",
};
const view = (value: PortalShellContext = context) => (
  <SidebarProvider>
    <PortalShell context={value}>
      <p>Contenido</p>
    </PortalShell>
  </SidebarProvider>
);

describe("pestañas del portal", () => {
  it("selecciona grupo y página desde una URL directa y conserva enlaces reales", () => {
    route.pathname = "/portal/empleado/datos/idiomas";
    render(view());
    const main = within(screen.getByRole("navigation", { name: "Apartados del empleado" }));
    const nested = within(
      screen.getByRole("navigation", { name: "Páginas de Mis datos profesionales" }),
    );
    expect(
      main.getByRole("link", { name: "Mis datos profesionales" }).getAttribute("aria-current"),
    ).toBe("page");
    expect(nested.getByRole("link", { name: "Idiomas" }).getAttribute("aria-current")).toBe("page");
    expect(nested.getByRole("link", { name: "Titulaciones" }).getAttribute("href")).toBe(
      "/portal/empleado/datos/titulaciones",
    );
    expect(screen.getByRole("navigation", { name: "Ruta" }).textContent).toContain(
      "Mi información personal",
    );
  });
  it("actualiza la selección al volver de página y al cambiar de perfil", () => {
    route.pathname = "/portal/empleado/datos/idiomas";
    const { rerender } = render(view());
    route.pathname = "/portal/empleado/datos/titulaciones";
    rerender(view());
    expect(
      within(screen.getByRole("navigation", { name: "Páginas de Mis datos profesionales" }))
        .getByRole("link", { name: "Titulaciones" })
        .getAttribute("aria-current"),
    ).toBe("page");
    route.pathname = "/portal/responsable/equipo/validar-idiomas";
    rerender(view());
    expect(screen.queryByRole("navigation", { name: "Apartados del empleado" })).toBeNull();
    expect(
      within(screen.getByRole("navigation", { name: "Páginas de Datos profesionales" }))
        .getByRole("link", { name: "Valida idiomas" })
        .getAttribute("aria-current"),
    ).toBe("page");
    expect(
      within(screen.getByRole("navigation", { name: "Perfil del portal" }))
        .getByRole("link", { name: "Responsable" })
        .getAttribute("aria-current"),
    ).toBe("page");
  });
  it("no añade una segunda fila a una página directa y respeta la variante del servidor", () => {
    route.pathname = "/portal/empleado/aplicaciones/internas";
    const meta4: PortalShellContext = {
      mode: "meta4",
      society: "CYC",
      variant: "CYC",
      person: null,
      identityMessage: "Sin ficha",
    };
    const { rerender } = render(view(meta4));
    const nav = screen.getByRole("navigation", { name: "Apartados del empleado" });
    expect(within(nav).getByRole("link", { name: "Informe de proyecciones" })).toBeTruthy();
    expect(screen.queryByRole("navigation", { name: /^Páginas de/ })).toBeNull();
    rerender(view({ ...meta4, society: "BASE", variant: "BASE" }));
    expect(within(nav).queryByRole("link", { name: "Informe de proyecciones" })).toBeNull();
    expect(
      within(screen.getByRole("navigation", { name: "Ruta" }))
        .getAllByRole("link", { name: "Aplicaciones Internas" })
        .map((link) => link.getAttribute("href")),
    ).toContain("/portal/empleado/aplicaciones");
    expect(screen.getAllByRole("button", { name: /barra lateral/ })).toHaveLength(1);
  });
});
