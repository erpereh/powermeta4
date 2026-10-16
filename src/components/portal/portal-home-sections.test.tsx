/** @vitest-environment jsdom */
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getPortalHomeSections } from "@/lib/portal/home-sections";
import { mockPortalLayout } from "@/test/portal-layout";

import { PortalHomeSections } from "./portal-home-sections";

beforeEach(() => {
  vi.useFakeTimers();
  mockPortalLayout();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal(
    "PointerEvent",
    class extends MouseEvent {
      pointerType: string;
      constructor(type: string, init: PointerEventInit = {}) {
        super(type, init);
        this.pointerType = init.pointerType ?? "mouse";
      }
    },
  );
  HTMLElement.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
const advance = async (ms: number) =>
  act(async () => {
    if (vi.isFakeTimers()) await vi.advanceTimersByTimeAsync(ms);
    else await new Promise((resolve) => setTimeout(resolve, ms));
  });
const view = (profile: "empleado" | "responsable" = "empleado") =>
  render(
    <>
      <button>Anterior</button>
      <PortalHomeSections sections={getPortalHomeSections(profile, "CYC")} />
      <button>Siguiente</button>
    </>,
  );
const hover = (element: HTMLElement) => fireEvent.pointerEnter(element, { pointerType: "mouse" });
const leave = (element: HTMLElement) => fireEvent.pointerLeave(element, { pointerType: "mouse" });
const click = (element: HTMLElement, pointerType = "mouse") =>
  fireEvent.pointerDown(element, { pointerType, button: 0, ctrlKey: false });

describe("botones desplegables del inicio", () => {
  it("abre a los 150 ms sin mover el foco y permite cruzar hasta el menú", async () => {
    view();
    const previous = screen.getByRole("button", { name: "Anterior" });
    previous.focus();
    const trigger = screen.getByRole("button", { name: "Mi información personal" });
    hover(trigger);
    await advance(149);
    expect(screen.queryByRole("menu")).toBeNull();
    await advance(1);
    const menu = screen.getByRole("menu", { name: "Mi información personal" });
    expect(document.activeElement).toBe(previous);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(within(menu).getAllByRole("menuitem")).toHaveLength(8);
    expect(
      within(menu).getByRole("menuitem", { name: "Mis datos profesionales" }).getAttribute("href"),
    ).toBe("/portal/empleado/datos/profesionales");
    leave(trigger);
    await advance(200);
    hover(menu);
    await advance(300);
    expect(screen.getByRole("menu")).toBe(menu);
    leave(menu);
    await advance(249);
    expect(screen.getByRole("menu")).toBe(menu);
    await advance(1);
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(previous);
  });

  it("cancela un hover breve y cambia de apartado manteniendo un único menú", async () => {
    view();
    const apps = screen.getByRole("button", { name: "Aplicaciones Internas" });
    const tools = screen.getByRole("button", { name: "Mis herramientas" });
    hover(apps);
    await advance(100);
    leave(apps);
    await advance(300);
    expect(screen.queryByRole("menu")).toBeNull();
    hover(apps);
    await advance(150);
    leave(apps);
    hover(tools);
    await advance(150);
    expect(screen.getAllByRole("menu")).toHaveLength(1);
    expect(screen.getByRole("menu", { name: "Mis herramientas" })).toBeTruthy();
    expect(apps.getAttribute("aria-expanded")).toBe("false");
  });

  it.each(["mouse", "touch"])("alterna con %s y cierra al pulsar fuera", async (pointerType) => {
    view();
    const trigger = screen.getByRole("button", { name: "Aplicaciones Internas" });
    if (pointerType === "touch") {
      fireEvent.pointerEnter(trigger, { pointerType });
      await advance(200);
      expect(screen.queryByRole("menu")).toBeNull();
    }
    click(trigger, pointerType);
    await advance(0);
    expect(screen.getByRole("menu")).toBeTruthy();
    click(trigger, pointerType);
    await advance(0);
    expect(screen.queryByRole("menu")).toBeNull();
    click(trigger, pointerType);
    await advance(0);
    fireEvent.pointerDown(screen.getByRole("button", { name: "Siguiente" }), {
      pointerType,
      button: 0,
    });
    await advance(0);
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it.each(["{Enter}", " ", "{ArrowDown}"])(
    "abre con %s, navega y restaura el foco con Escape",
    async (key) => {
      vi.useRealTimers();
      const user = userEvent.setup();
      view();
      const trigger = screen.getByRole("button", { name: "Aplicaciones Internas" });
      trigger.focus();
      await user.keyboard(key);
      await advance(0);
      const items = screen.getAllByRole("menuitem");
      expect(document.activeElement).toBe(items[0]);
      await user.keyboard("{ArrowDown}");
      await advance(0);
      expect(document.activeElement).toBe(items[1]);
      leave(trigger);
      await advance(300);
      expect(screen.getByRole("menu")).toBeTruthy();
      await user.keyboard("{Escape}");
      await advance(1);
      expect(screen.queryByRole("menu")).toBeNull();
      expect(document.activeElement).toBe(trigger);
    },
  );

  it("permite entrar por teclado en un menú abierto con hover y salir con Tab", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();
    view();
    const trigger = screen.getByRole("button", { name: "Aplicaciones Internas" });
    trigger.focus();
    hover(trigger);
    await advance(150);
    await user.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(screen.getAllByRole("menuitem")[0]);
    await user.tab();
    await advance(1);
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Mis herramientas" }));
  });

  it("Tab recorre los botones y Mayús+Tab sale al control anterior", async () => {
    vi.useRealTimers();
    const user = userEvent.setup();
    view();
    screen.getByRole("button", { name: "Anterior" }).focus();
    await user.tab();
    const trigger = screen.getByRole("button", { name: "Aplicaciones Internas" });
    expect(document.activeElement).toBe(trigger);
    expect(screen.queryByRole("menu")).toBeNull();
    await user.keyboard("{Enter}");
    await user.tab({ shift: true });
    await advance(1);
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Anterior" }));
  });

  it("muestra los destinos del responsable sin anidar controles", async () => {
    const { container } = view("responsable");
    click(screen.getByRole("button", { name: "Información personal" }));
    await advance(0);
    expect(
      screen
        .getByRole("menuitem", { name: "Datos personales de mis empleados" })
        .getAttribute("href"),
    ).toBe("/portal/responsable/equipo");
    expect(container.querySelector("button button, button a, a button")).toBeNull();
  });

  it("limpia los temporizadores al desmontar", async () => {
    const { unmount } = view();
    hover(screen.getByRole("button", { name: "Aplicaciones Internas" }));
    unmount();
    await advance(500);
    expect(screen.queryByRole("menu")).toBeNull();
  });
});
