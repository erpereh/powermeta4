/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { SectionNav } from "@/components/system";

afterEach(() => {
  cleanup();
});

const items = [
  { href: "/portal", label: "Inicio" },
  { href: "/portal/empleado/datos", label: "Mis datos" },
  { href: "/portal/empleado/tiempo", label: "Tiempo" },
];

describe("SectionNav", () => {
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
