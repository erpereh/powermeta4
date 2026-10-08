/** @vitest-environment jsdom */
import { StrictMode, useSyncExternalStore } from "react";
import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { toDirectoryEntry } from "@/lib/portal/data/organization-core";
import type { PersonHierarchy } from "@/lib/portal/data/person-hierarchy-core";
import { workspaceStore } from "@/stores/use-workspace-store";
import { PersonOrgChart } from "./person-org-chart";

const device = vi.hoisted(() => ({ mobile: false }));
vi.mock("@/hooks/use-mobile", () => ({ useIsMobile: () => device.mobile }));
vi.mock("next/navigation", () => ({
  useSearchParams: () => {
    const search = useSyncExternalStore(
      (notify) => {
        window.addEventListener("popstate", notify);
        return () => window.removeEventListener("popstate", notify);
      },
      () => window.location.search,
    );
    return new URLSearchParams(search);
  },
}));
const route = "/portal/empleado/aplicaciones/organigrama";
const person = (id: string) =>
  toDirectoryEntry({
    ID_EMPLEADO: id,
    ID_ORGANIZATION: "CYC",
    NOMBRE: `Persona ${id}`,
    N_PUESTO: "Puesto",
  })!;
const team = (id: string, children: string[]): PersonHierarchy => ({
  person: person(id),
  manager: null,
  managerStatus: "none",
  reports: children.map(person),
  omittedReports: 0,
});
const file = (id: string) => ({
  person: person(id),
  managerId: null,
  emails: [],
  sections: [
    { id: "puesto", title: "Puesto", fields: [{ label: "Tipo", value: "Ficha pública" }] },
  ],
});
const response = (data: unknown, society = "CYC") =>
  new Response(JSON.stringify({ status: "ok", society, data }), { status: 200 });
const fetchMock = vi.fn();
beforeEach(() => {
  device.mobile = false;
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  workspaceStore.setState({ activeCompanyId: null, auth: null });
  window.history.replaceState(null, "", `${route}?persona=1`);
  const push = window.history.pushState.bind(window.history);
  vi.spyOn(window.history, "pushState").mockImplementation((data, unused, url) => {
    push(data, unused, url);
    window.dispatchEvent(new Event("popstate"));
  });
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function (this: HTMLElement) {
      const region = this.getAttribute("role") === "region";
      return {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: region ? 800 : 0,
        bottom: region ? 600 : 0,
        width: region ? 800 : 0,
        height: region ? 600 : 0,
        toJSON: () => ({}),
      };
    },
  );
  fetchMock.mockImplementation(async (url: string) =>
    response(
      url.endsWith("/person")
        ? file(url.split("/").at(-2)!)
        : team(url.split("/").at(-2)!, url.includes("/2/") ? ["4"] : []),
    ),
  );
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  workspaceStore.setState({ activeCompanyId: null, auth: null });
});
const show = () => render(<PersonOrgChart hierarchy={team("1", ["2", "3"])} route={route} />);

describe("organigrama interactivo", () => {
  it("expande varios niveles y restaura descendientes sin repetir consultas", async () => {
    fetchMock.mockImplementation(async (url: string) =>
      response(
        team(
          url.split("/").at(-2)!,
          url.includes("/2/") ? ["4"] : url.includes("/3/") ? ["6"] : ["5"],
        ),
      ),
    );
    show();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 2" }));
    await user.click(await screen.findByRole("button", { name: "Desplegar equipo de Persona 4" }));
    expect(
      await screen.findByRole("button", { name: "Ver información de Persona 5" }),
    ).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 3" }));
    expect(
      await screen.findByRole("button", { name: "Ver información de Persona 6" }),
    ).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Contraer equipo de Persona 2" }));
    expect(screen.queryByRole("button", { name: "Ver información de Persona 5" })).toBeNull();
    expect(screen.getByRole("button", { name: "Ver información de Persona 6" })).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 2" }));
    expect(screen.getByRole("button", { name: "Ver información de Persona 5" })).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(new URLSearchParams(window.location.search).get("equipos")).toBe("1,2,3,4");
  });
  it("restaura solo equipos alcanzables de la URL y muestra equipos vacíos", async () => {
    window.history.replaceState(null, "", `${route}?persona=1&equipos=1,2,99`);
    show();
    expect(
      await screen.findByRole("button", { name: "Ver información de Persona 4" }),
    ).toBeTruthy();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 3" }));
    await waitFor(() =>
      expect(
        within(screen.getByRole("article", { name: "Persona 3" })).getByText("Sin subordinados"),
      ).toBeTruthy(),
    );
    act(() => {
      window.history.replaceState(null, "", `${route}?persona=1&equipos=1`);
      window.dispatchEvent(new Event("popstate"));
    });
    expect(screen.queryByRole("button", { name: "Ver información de Persona 4" })).toBeNull();
  });
  it("reintenta errores y conserva cámara y ficha al ampliar y cerrar", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Sin conexión"));
    show();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 2" }));
    expect(await screen.findByText("Sin conexión")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Reintentar equipo de Persona 2" }));
    await screen.findByRole("button", { name: "Ver información de Persona 4" });
    await user.click(screen.getByRole("button", { name: "Ver información de Persona 2" }));
    expect(
      await within(screen.getByRole("complementary")).findByText("Ficha pública"),
    ).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Acercar" }));
    const zoom = screen.getByLabelText("Zoom").textContent;
    await user.click(screen.getByRole("button", { name: "Ampliar ventana" }));
    expect(screen.getByRole("dialog", { name: "Organigrama de Persona 1" })).toBeTruthy();
    expect(screen.getByLabelText("Zoom").textContent).toBe(zoom);
    expect(screen.getByRole("complementary").textContent).toContain("Ficha pública");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(screen.getByLabelText("Zoom").textContent).toBe(zoom);
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Ampliar ventana" }));
  });
  it("zoom con rueda cancela scroll y las flechas desplazan sin afectar controles", () => {
    show();
    const region = screen.getByRole("region");
    const before = document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform;
    const wheel = new WheelEvent("wheel", {
      deltaY: -100,
      clientX: 100,
      clientY: 100,
      cancelable: true,
      bubbles: true,
    });
    act(() => region.dispatchEvent(wheel));
    expect(wheel.defaultPrevented).toBe(true);
    expect(document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform).not.toBe(
      before,
    );
    const moved = document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform;
    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform).not.toBe(
      moved,
    );
    const current = document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform;
    fireEvent.keyDown(screen.getByRole("button", { name: "Acercar" }), { key: "ArrowRight" });
    expect(document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform).toBe(current);
    fireEvent.keyDown(region, { key: "+", ctrlKey: true });
    expect(document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform).toBe(current);
  });
  it("arrastra el fondo y hace zoom con dos dedos sin arrastrar los botones", () => {
    class TestPointerEvent extends MouseEvent {
      readonly pointerId: number;
      readonly pointerType: string;
      constructor(type: string, init: PointerEventInit = {}) {
        super(type, init);
        this.pointerId = init.pointerId ?? 0;
        this.pointerType = init.pointerType ?? "mouse";
      }
    }
    vi.stubGlobal("PointerEvent", TestPointerEvent);
    show();
    const region = screen.getByRole("region");
    region.setPointerCapture = vi.fn();
    const transform = () =>
      document.querySelector<HTMLElement>("[data-org-camera]")!.style.transform;
    const before = transform();
    fireEvent.pointerDown(screen.getByRole("button", { name: "Desplegar equipo de Persona 2" }), {
      pointerId: 1,
      clientX: 100,
      clientY: 100,
    });
    fireEvent.pointerMove(region, { pointerId: 1, clientX: 140, clientY: 120 });
    expect(transform()).toBe(before);
    expect(region.setPointerCapture).not.toHaveBeenCalled();
    fireEvent.pointerDown(region, { pointerId: 1, clientX: 100, clientY: 100 });
    fireEvent.pointerMove(region, { pointerId: 1, clientX: 140, clientY: 120 });
    expect(transform()).not.toBe(before);
    fireEvent.pointerUp(region, { pointerId: 1 });
    const scale = Number(screen.getByLabelText("Zoom").textContent?.replace("%", ""));
    fireEvent.pointerDown(region, {
      pointerId: 2,
      pointerType: "touch",
      clientX: 100,
      clientY: 100,
    });
    fireEvent.pointerDown(region, {
      pointerId: 3,
      pointerType: "touch",
      clientX: 200,
      clientY: 100,
    });
    fireEvent.pointerMove(region, {
      pointerId: 3,
      pointerType: "touch",
      clientX: 300,
      clientY: 100,
    });
    expect(Number(screen.getByLabelText("Zoom").textContent?.replace("%", ""))).toBeCloseTo(
      Math.min(200, scale * 2),
      -1,
    );
    fireEvent.pointerCancel(region, { pointerId: 2 });
    fireEvent.pointerUp(region, { pointerId: 3 });
    expect(region.className).not.toContain("cursor-grabbing");
  });
  it("la ficha móvil desactiva el lienzo y devuelve el foco al cerrarse", async () => {
    device.mobile = true;
    show();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Ver información de Persona 2" }));
    await screen.findByText("Ficha pública");
    expect(document.querySelector('[role="region"]')?.hasAttribute("inert")).toBe(true);
    expect(screen.queryByRole("button", { name: "Acercar" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "Cerrar información" }));
    await waitFor(() =>
      expect(document.activeElement).toBe(
        screen.getByRole("button", { name: "Ver información de Persona 2" }),
      ),
    );
    expect(screen.getByRole("region").hasAttribute("inert")).toBe(false);
    expect(screen.getByRole("button", { name: "Acercar" }).closest('[role="region"]')).toBeNull();
  });
  it("recupera cargas abortadas durante el montaje de StrictMode", async () => {
    window.history.replaceState(null, "", `${route}?persona=1&equipos=1,2`);
    fetchMock.mockImplementationOnce(() => new Promise<Response>(() => {}));
    render(
      <StrictMode>
        <PersonOrgChart hierarchy={team("1", ["2", "3"])} route={route} />
      </StrictMode>,
    );
    expect(
      await screen.findByRole("button", { name: "Ver información de Persona 4" }),
    ).toBeTruthy();
    expect(fetchMock.mock.calls[0][1].signal.aborted).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
  it("descarta lecturas tardías al cambiar raíz o sociedad", async () => {
    let finish: ((value: Response) => void) | undefined;
    fetchMock.mockImplementationOnce(
      () =>
        new Promise<Response>((resolve) => {
          finish = resolve;
        }),
    );
    const { rerender } = show();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Desplegar equipo de Persona 2" }));
    const signal: AbortSignal = fetchMock.mock.calls[0][1].signal;
    rerender(<PersonOrgChart hierarchy={team("3", [])} route={route} />);
    expect(signal.aborted).toBe(true);
    await act(async () => {
      finish?.(response(team("2", ["4"])));
    });
    expect(screen.queryByRole("button", { name: "Ver información de Persona 4" })).toBeNull();
    fetchMock.mockResolvedValueOnce(response(file("3"), "IBER"));
    await user.click(screen.getByRole("button", { name: "Ver información de Persona 3" }));
    expect(
      await screen.findByText("La sociedad ha cambiado. Vuelve a abrir el organigrama."),
    ).toBeTruthy();
    expect(screen.queryByText("Ficha pública")).toBeNull();
    fetchMock.mockImplementationOnce(
      () =>
        new Promise<Response>((resolve) => {
          finish = resolve;
        }),
    );
    await user.click(screen.getByRole("button", { name: "Reintentar ficha" }));
    const contextSignal: AbortSignal = fetchMock.mock.calls.at(-1)![1].signal;
    act(() => workspaceStore.setState({ activeCompanyId: "otro-contexto" }));
    expect(contextSignal.aborted).toBe(true);
    await act(async () => {
      finish?.(response(file("3")));
    });
    expect(screen.queryByRole("complementary")).toBeNull();
    expect(screen.queryByText("Ficha pública")).toBeNull();
  });
});
