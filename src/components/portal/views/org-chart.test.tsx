/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { buildOrgTree } from "@/lib/portal/data/organization-core";
import { buildPersonHierarchy } from "@/lib/portal/data/person-hierarchy-core";
import { OrgTree } from "./org-tree";
import { PersonOrgChart } from "./person-org-chart";
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(window.location.search),
}));
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
const route = "/portal/empleado/herramientas/organigrama-dinamico";
const root = {
  ID_ORGANIZATION: "CYC",
  ID_EMPLEADO: "1",
  NOMBRE: "Ana",
  N_PUESTO: "Dirección",
  ID_RESPONSABLE: "9",
  COMPUTA: "1",
  ID_UNIDAD: "U",
  N_UNIDAD: "Unidad",
};
const roots = buildOrgTree([root]);

describe("árbol y gráfico del organigrama", () => {
  it("vuelve a solicitar la foto al cambiar de sociedad aunque la matrícula coincida", () => {
    const requested: string[] = [];
    class RequestedImage extends EventTarget {
      complete = false;
      set src(value: string) {
        requested.push(value);
      }
    }
    vi.stubGlobal("Image", RequestedImage);
    window.history.replaceState(null, "", `${route}?persona=1`);
    const { rerender } = render(
      <PersonOrgChart hierarchy={buildPersonHierarchy("1", "CYC", [root], [])} route={route} />,
    );
    rerender(
      <PersonOrgChart
        hierarchy={buildPersonHierarchy("1", "IBER", [{ ...root, ID_ORGANIZATION: "IBER" }], [])}
        route={route}
      />,
    );
    expect(requested).toEqual(["/api/portal/photos/1", "/api/portal/photos/1"]);
  });
  it("una persona abre el gráfico en la sección de origen y conserva filtro y ramas", () => {
    window.history.replaceState(null, "", route);
    const { rerender } = render(<OrgTree roots={roots} route={route} />);
    fireEvent.change(screen.getByRole("searchbox", { name: "Filtrar unidades o personas" }), {
      target: { value: "Ana" },
    });
    rerender(<OrgTree roots={roots} route={route} />);
    const person = screen.getByRole("link", { name: /Ana/ });
    const url = new URL(person.getAttribute("href")!, window.location.origin);
    expect(url.pathname).toBe(route);
    expect(url.searchParams.get("persona")).toBe("1");
    expect(url.searchParams.get("filtro")).toBe("Ana");
    expect(url.searchParams.has("ramas")).toBe(true);
    // Recarga / vuelta desde el gráfico: el árbol vuelve a leer la URL, sin estado global.
    cleanup();
    render(<OrgTree roots={roots} route={route} />);
    expect(screen.getByRole("searchbox").getAttribute("value")).toBe("Ana");
  });
  it("contrae con teclado y recupera ese estado desde la URL", async () => {
    window.history.replaceState(null, "", route);
    const user = userEvent.setup();
    const { rerender } = render(<OrgTree roots={roots} route={route} />);
    const collapse = screen.getByRole("button", { name: "Contraer todo" });
    collapse.focus();
    await user.keyboard("{Enter}");
    rerender(<OrgTree roots={roots} route={route} />);
    expect(new URLSearchParams(window.location.search).get("ramas")).toBe("");
    expect(screen.queryByRole("link", { name: /Ana/ })).toBeNull();
  });
  it("separa subir, abrir equipo y volver, usando fotos con fallback", () => {
    window.history.replaceState(null, "", `${route}?persona=1&filtro=Ana&ramas=U`);
    const hierarchy = buildPersonHierarchy(
      "1",
      "CYC",
      [root],
      [
        { ...root, ID_EMPLEADO: "9", NOMBRE: "Eva", ID_RESPONSABLE: null },
        { ...root, ID_EMPLEADO: "2", NOMBRE: "Luis", ID_RESPONSABLE: "1" },
      ],
    );
    render(<PersonOrgChart hierarchy={hierarchy} route={route} />);
    expect(screen.getByRole("region", { name: "Jerarquía de Ana" }).getAttribute("tabindex")).toBe(
      "0",
    );
    expect(
      screen.getByRole("link", { name: /Subir al responsable/ }).getAttribute("href"),
    ).toContain("persona=9");
    expect(
      screen.getByRole("link", { name: "Abrir equipo de Luis" }).getAttribute("href"),
    ).toContain("persona=2");
    const back = screen.getByRole("link", { name: "Volver al organigrama" }).getAttribute("href")!;
    expect(back).toBe(`${route}?filtro=Ana&ramas=U`);
    expect(screen.queryByRole("link", { name: /Quién/ })).toBeNull();
    expect(screen.getByText("A", { selector: '[data-slot="avatar-fallback"]' })).toBeTruthy();
  });
  it("muestra estados de persona ausente, sin responsable y sin equipo", () => {
    window.history.replaceState(null, "", route);
    const { rerender } = render(<PersonOrgChart hierarchy={null} route={route} />);
    expect(screen.getByRole("status").textContent).toContain("no está disponible");
    rerender(
      <PersonOrgChart
        hierarchy={buildPersonHierarchy("1", "CYC", [{ ...root, ID_RESPONSABLE: null }], [])}
        route={route}
      />,
    );
    expect(screen.getByText("No hay responsable informado.")).toBeTruthy();
    expect(screen.getByText("Sin dependientes directos disponibles.")).toBeTruthy();
    expect(screen.queryByRole("link", { name: /Subir/ })).toBeNull();
  });
});
