/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { mockPortalLayout } from "@/test/portal-layout";

import { SectionNav } from "@/components/system";
const push = vi.hoisted(() => vi.fn());
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  push.mockClear();
});

const items = [
  { href: "/portal", label: "Inicio" },
  { href: "/portal/empleado/datos", label: "Mis datos" },
  { href: "/portal/empleado/tiempo", label: "Tiempo" },
];

describe("SectionNav", () => {
  it("mantiene visible la ruta activa y ofrece los demás enlaces en Más", async () => {
    mockPortalLayout(270);
    vi.stubGlobal("innerWidth", 1024);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        const width = this.tagName === "SPAN" ? 100 : 270;
        return {
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          bottom: 40,
          right: width,
          width,
          height: 40,
          toJSON: () => ({}),
        };
      },
    );
    const user = userEvent.setup();
    render(
      <SectionNav
        aria-label="Apartados"
        overflow="menu"
        items={items}
        activeHref="/portal/empleado/tiempo"
      />,
    );
    expect(screen.getByRole("link", { name: "Tiempo" }).getAttribute("aria-current")).toBe("page");
    expect(screen.queryByRole("link", { name: "Mis datos" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "Más: Apartados" }));
    expect(screen.getByRole("menuitem", { name: "Mis datos" }).getAttribute("href")).toBe(
      "/portal/empleado/datos",
    );
    await user.keyboard("{Escape}");
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Más: Apartados" }));
  });
  it.each([390, 1024])(
    "usa selector con etiqueta legible en móvil o sin espacio a %i px",
    async (width) => {
      mockPortalLayout(160);
      vi.stubGlobal("innerWidth", width);
      const user = userEvent.setup();
      render(
        <SectionNav
          aria-label="Apartados"
          overflow="menu"
          items={items}
          activeHref="/portal/empleado/datos"
        />,
      );
      const selector = screen.getByRole("button", { name: "Apartados" });
      expect(selector.textContent).toContain("Mis datos");
      expect(selector.textContent).not.toContain("/portal");
      await user.click(selector);
      await user.click(screen.getByRole("option", { name: "Tiempo" }));
      expect(push).toHaveBeenCalledWith("/portal/empleado/tiempo");
    },
  );
  it.each(["underline", "pill"] as const)(
    "marca la sección activa y permite teclado en %s",
    async (variant) => {
      const user = userEvent.setup();
      const { rerender } = render(
        <SectionNav
          aria-label="Apartados"
          items={items}
          activeHref="/portal/empleado/datos"
          variant={variant}
        />,
      );

      expect(screen.getByRole("navigation", { name: "Apartados" })).toBeTruthy();
      const active = screen.getByRole("link", { name: "Mis datos" });
      expect(active.getAttribute("aria-current")).toBe("page");
      expect(active.getAttribute("href")).toBe("/portal/empleado/datos");
      expect(screen.getByRole("link", { name: "Inicio" }).getAttribute("aria-current")).toBeNull();

      active.focus();
      await user.keyboard("{ArrowRight}");
      expect(document.activeElement?.textContent).toContain("Tiempo");
      await user.keyboard("{ArrowRight}");
      expect(document.activeElement?.textContent).toContain("Inicio");
      await user.keyboard("{End}");
      expect(document.activeElement?.textContent).toContain("Tiempo");
      await user.keyboard("{Home}");
      expect(document.activeElement?.textContent).toContain("Inicio");
      await user.keyboard("{ArrowLeft}");
      expect(document.activeElement?.textContent).toContain("Tiempo");
      rerender(
        <SectionNav aria-label="Apartados" items={items} activeHref="/portal" variant={variant} />,
      );
      expect(active.getAttribute("aria-current")).toBeNull();
      expect(screen.getByRole("link", { name: "Inicio" }).getAttribute("aria-current")).toBe(
        "page",
      );
    },
  );
});
