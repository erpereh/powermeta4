/** @vitest-environment jsdom */
import { StrictMode } from "react";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PanelResizeHandle } from "./panel-resize-handle";
import { usePanelWidth } from "./use-panel-width";
import { Drawer } from "./drawer";
import { Modal } from "./modal";

let intrinsic = 700;
let available = 1200;
function Harness({
  open = true,
  side = "right",
  text = "Contenido",
}: {
  open?: boolean;
  side?: "left" | "right";
  text?: string;
}) {
  const panel = usePanelWidth({ open });
  return (
    <div ref={panel.containerRef}>
      {open ? (
        <aside ref={panel.panelRef} id="panel" style={{ width: panel.width }}>
          <p>{text}</p>
          {panel.resizable && panel.width ? (
            <PanelResizeHandle
              controls="panel"
              side={side}
              width={panel.width}
              min={panel.min}
              max={panel.max}
              onWidthChange={panel.setWidth}
            />
          ) : null}
        </aside>
      ) : null}
    </div>
  );
}
beforeEach(() => {
  intrinsic = 700;
  available = 1200;
  vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => available);
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
    return new DOMRect(0, 0, intrinsic, 800);
  });
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
const width = () => Number(screen.getByRole("separator").getAttribute("aria-valuenow"));

describe("ancho de paneles", () => {
  it("mide contenido, respeta mínimos y límites y limpia la medición", () => {
    render(
      <StrictMode>
        <Harness />
      </StrictMode>,
    );
    expect(width()).toBe(720);
    expect(document.querySelectorAll("aside")).toHaveLength(1);
    const handle = screen.getByRole("separator", { name: "Cambiar ancho del panel" });
    expect(handle.getAttribute("aria-controls")).toBe("panel");
    fireEvent.keyDown(handle, { key: "Home" });
    expect(width()).toBe(416);
    fireEvent.keyDown(handle, { key: "End" });
    expect(width()).toBe(1080);
    fireEvent.keyDown(handle, { key: "ArrowLeft" });
    expect(width()).toBe(1080);
    fireEvent.keyDown(handle, { key: "ArrowRight", shiftKey: true });
    expect(width()).toBe(1016);
  });
  it("adapta cargas asíncronas hasta el ajuste manual y recalcula al reabrir", async () => {
    const { rerender } = render(<Harness />);
    intrinsic = 800;
    rerender(<Harness text="Más información" />);
    await waitFor(() => expect(width()).toBe(820));
    fireEvent.keyDown(screen.getByRole("separator"), { key: "Home" });
    intrinsic = 1000;
    rerender(<Harness text="Todavía más información" />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 35));
    });
    expect(width()).toBe(416);
    rerender(<Harness open={false} />);
    rerender(<Harness />);
    expect(width()).toBe(1020);
  });
  it("limita el ancho manual al cambiar ventana y ocupa el contenedor móvil", async () => {
    render(<Harness />);
    fireEvent.keyDown(screen.getByRole("separator"), { key: "End" });
    available = 900;
    fireEvent(window, new Event("resize"));
    await waitFor(() => expect(width()).toBe(810));
    available = 390;
    fireEvent(window, new Event("resize"));
    await waitFor(() => expect(screen.queryByRole("separator")).toBeNull());
    expect(screen.getByRole("complementary").style.width).toBe("390px");
  });
  it.each(["left", "right"] as const)("arrastra y cancela el borde de un panel %s", (side) => {
    class TestPointerEvent extends MouseEvent {
      pointerId = 1;
      isPrimary = true;
    }
    vi.stubGlobal("PointerEvent", TestPointerEvent);
    render(<Harness side={side} />);
    const handle = screen.getByRole("separator");
    handle.setPointerCapture = vi.fn();
    handle.hasPointerCapture = vi.fn(() => true);
    handle.releasePointerCapture = vi.fn();
    fireEvent.pointerDown(handle, { clientX: 100, button: 0 });
    fireEvent.pointerMove(handle, { clientX: 140 });
    expect(width()).toBe(side === "right" ? 680 : 760);
    fireEvent.pointerCancel(handle);
    fireEvent.pointerMove(handle, { clientX: 200 });
    expect(width()).toBe(side === "right" ? 680 : 760);
    expect(handle.releasePointerCapture).toHaveBeenCalledWith(1);
  });
  it("el Drawer contiene Tab, respeta Escape y devuelve el foco", async () => {
    const close = vi.fn();
    const { rerender } = render(
      <>
        <button>Disparador</button>
        <Drawer open={false} onOpenChange={close} title="Detalle">
          <button>Acción final</button>
        </Drawer>
      </>,
    );
    const trigger = screen.getByRole("button", { name: "Disparador" });
    trigger.focus();
    rerender(
      <>
        <button>Disparador</button>
        <Drawer open onOpenChange={close} title="Detalle">
          <button>Acción final</button>
        </Drawer>
      </>,
    );
    const first = screen.getByRole("button", { name: "Cerrar panel" });
    await waitFor(() => expect(document.activeElement).toBe(first));
    const last = screen.getByRole("separator");
    last.focus();
    fireEvent.keyDown(last, { key: "Tab" });
    expect(document.activeElement).toBe(first);
    fireEvent.keyDown(first, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toBe(last);
    fireEvent.keyDown(last, { key: "Escape" });
    expect(close).toHaveBeenCalledWith(false);
    rerender(
      <>
        <button>Disparador</button>
        <Drawer open={false} onOpenChange={close} title="Detalle" />
      </>,
    );
    expect(document.activeElement).toBe(trigger);
  });
  it("Escape cierra solo la ventana anidada y mantiene el Drawer", async () => {
    const closeDrawer = vi.fn();
    const closeModal = vi.fn();
    render(
      <Drawer open onOpenChange={closeDrawer} title="Panel exterior">
        <Modal open onOpenChange={closeModal} title="Ventana interior">
          <button>Interior</button>
        </Modal>
      </Drawer>,
    );
    await screen.findByRole("dialog", { name: "Ventana interior" });
    fireEvent.keyDown(window, { key: "Escape" });
    expect(closeModal).toHaveBeenCalledWith(false);
    expect(closeDrawer).not.toHaveBeenCalled();
  });
});
