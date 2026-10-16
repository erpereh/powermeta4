/** @vitest-environment jsdom */
import { StrictMode, useState } from "react";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CommandPalette } from "@/components/system/command-palette";
import { workspaceStore } from "@/stores/use-workspace-store";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import type { PortalResult } from "@/lib/portal/result";
import { usePortalCommandItems } from "./use-portal-command-items";

const mocks = vi.hoisted(() => ({ search: vi.fn(), navigate: vi.fn() }));
vi.mock("@/app/actions/portal", () => ({ searchPortalDirectoryAction: mocks.search }));
function Harness() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("portal");
  const portal = usePortalCommandItems({
    navigate: mocks.navigate,
    enabled: open && mode === "portal",
  });
  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir</button>
      <button onClick={() => setMode(mode === "portal" ? "chats" : "portal")}>Cambiar modo</button>
      <CommandPalette
        key={mode}
        open={open}
        onOpenChange={setOpen}
        items={mode === "portal" ? portal.items : []}
        onQueryChange={mode === "portal" ? (text) => portal.onQueryChange(text) : undefined}
        status={portal.status}
        placeholder="Buscar portal"
      />
    </>
  );
}
const person: DirectoryEntry = {
  key: "9001",
  employeeId: "9001",
  fullName: "Persona sintética",
  society: "CYC",
  job: null,
  unit: null,
  workCenter: null,
  email: null,
};
const deferred = () => {
  let resolve!: (result: PortalResult<readonly DirectoryEntry[]>) => void;
  const promise = new Promise<PortalResult<readonly DirectoryEntry[]>>((done) => {
    resolve = done;
  });
  return { promise, resolve };
};
beforeEach(() => {
  mocks.search.mockReset();
  mocks.navigate.mockReset();
  mocks.search.mockResolvedValue({ status: "ok", society: "CYC", data: [] });
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    configurable: true,
    value: vi.fn(),
  });
  workspaceStore.setState({
    activeCompanyId: null,
    auth: {
      mode: "meta4",
      username: "synthetic",
      canUseMeta4: true,
      societyCode: "CYC",
      availableSocieties: ["CYC", "COLL"],
    },
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  Reflect.deleteProperty(HTMLElement.prototype, "scrollIntoView");
  workspaceStore.setState({ auth: null });
});
const open = () => fireEvent.click(screen.getByText("Abrir"));
const query = (text: string) =>
  fireEvent.change(screen.getByRole("combobox"), { target: { value: text } });

describe("buscador del portal en StrictMode", () => {
  it("abre y reabre sin actualizar al padre durante render ni reiniciar por callbacks nuevos", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <StrictMode>
        <Harness />
      </StrictMode>,
    );
    open();
    query("organigrama");
    expect(screen.getByRole<HTMLInputElement>("combobox").value).toBe("organigrama");
    await waitFor(() => expect(mocks.search).toHaveBeenCalledWith("organigrama"));
    expect(screen.getByRole<HTMLInputElement>("combobox").value).toBe("organigrama");
    expect(screen.getAllByRole("option").length).toBeGreaterThan(0);
    query("");
    expect(screen.queryByText("Buscando personas…")).toBeNull();
    query("organigrama");
    fireEvent.keyDown(window, { key: "Escape" });
    open();
    expect(screen.getByRole<HTMLInputElement>("combobox").value).toBe("");
    fireEvent.click(screen.getByText("Cambiar modo"));
    expect(screen.getByRole<HTMLInputElement>("combobox").value).toBe("");
    expect(errors.mock.calls.some((args) => String(args[0]).includes("Cannot update"))).toBe(false);
  });
  it("descarta respuestas anteriores y permite navegar a una persona", async () => {
    const old = deferred();
    const current = deferred();
    mocks.search.mockReturnValueOnce(old.promise).mockReturnValueOnce(current.promise);
    render(<Harness />);
    open();
    query("antigua");
    await waitFor(() => expect(mocks.search).toHaveBeenCalledTimes(1));
    query("Persona");
    await waitFor(() => expect(mocks.search).toHaveBeenCalledTimes(2));
    await act(async () => current.resolve({ status: "ok", society: "CYC", data: [person] }));
    await act(async () =>
      old.resolve({ status: "ok", society: "CYC", data: [{ ...person, fullName: "Antigua" }] }),
    );
    expect(screen.queryByText("Antigua")).toBeNull();
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "Enter" });
    expect(mocks.navigate).toHaveBeenCalledWith("/portal/organizacion/personas/9001");
  });
  it("invalida consultas al cerrar y al cambiar de sociedad", async () => {
    const pending = deferred();
    mocks.search.mockReturnValue(pending.promise);
    render(<Harness />);
    open();
    query("Persona");
    await waitFor(() => expect(mocks.search).toHaveBeenCalledTimes(1));
    fireEvent.keyDown(window, { key: "Escape" });
    await act(async () => pending.resolve({ status: "ok", society: "CYC", data: [person] }));
    open();
    expect(screen.queryByText(person.fullName)).toBeNull();
    const next = deferred();
    mocks.search.mockReturnValue(next.promise);
    query("Persona");
    await waitFor(() => expect(mocks.search).toHaveBeenCalledTimes(2));
    act(() =>
      workspaceStore.setState({
        auth: {
          mode: "meta4",
          username: "synthetic",
          canUseMeta4: true,
          societyCode: "COLL",
          availableSocieties: ["CYC", "COLL"],
        },
      }),
    );
    await act(async () => next.resolve({ status: "ok", society: "CYC", data: [person] }));
    expect(screen.queryByText(person.fullName)).toBeNull();
  });
  it("muestra mínimos, errores, vacío e indisponibilidad debug sin bloquear opciones", async () => {
    render(<Harness />);
    open();
    query("a");
    expect(screen.getByRole("status").textContent).toContain("dos caracteres");
    expect(mocks.search).not.toHaveBeenCalled();
    mocks.search.mockRejectedValueOnce(new Error("synthetic"));
    query("Persona");
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("No se ha podido"),
    );
    query("Vacío");
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("Ninguna persona"),
    );
    mocks.search.mockResolvedValueOnce({
      status: "unavailable",
      data: [],
      message: "El modo desarrollo no tiene datos de empleado.",
    });
    query("organigrama");
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("modo desarrollo"),
    );
    expect(screen.getAllByRole("option").length).toBeGreaterThan(0);
  });
});
