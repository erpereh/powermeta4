/** @vitest-environment jsdom */
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalResult } from "@/lib/portal/result";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import { workspaceStore } from "@/stores/use-workspace-store";
import { mockPortalLayout } from "@/test/portal-layout";
const mocks = vi.hoisted(() => ({ search: vi.fn() }));
vi.mock("@/app/actions/portal", () => ({ searchPortalDirectoryAction: mocks.search }));
import { DirectorySearch } from "./directory-search";
const person = (name: string): DirectoryEntry => ({
  key: name,
  society: "CYC",
  employeeId: "001471",
  fullName: name,
  job: null,
  unit: null,
  email: null,
  workCenter: null,
});
const deferred = () => {
  let resolve!: (result: PortalResult<readonly DirectoryEntry[]>) => void;
  const promise = new Promise<PortalResult<readonly DirectoryEntry[]>>((done) => {
    resolve = done;
  });
  return { promise, resolve };
};
const search = async (text: string) => {
  fireEvent.change(screen.getByRole("searchbox", { name: "Buscar personas" }), {
    target: { value: text },
  });
  await act(async () => {
    vi.advanceTimersByTime(300);
  });
};
beforeEach(() => {
  mockPortalLayout();
  vi.useFakeTimers();
  mocks.search.mockReset();
  workspaceStore.setState({
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
  vi.unstubAllGlobals();
  vi.useRealTimers();
  workspaceStore.setState({ auth: null });
});
describe("búsqueda accesible del directorio", () => {
  it("descarta respuestas obsoletas y conserva enlaces navegables", async () => {
    const old = deferred();
    const current = deferred();
    mocks.search.mockReturnValueOnce(old.promise).mockReturnValueOnce(current.promise);
    render(<DirectorySearch />);
    await search("Ana");
    await search("Eva");
    await act(async () => {
      current.resolve({ status: "ok", society: "CYC", data: [person("Eva")] });
    });
    await act(async () => {
      old.resolve({ status: "ok", society: "CYC", data: [person("Ana")] });
    });
    expect(screen.queryByText("Ana")).toBeNull();
    const link = screen.getByRole("link", { name: /Eva/ });
    expect(link.getAttribute("href")).toBe("/portal/organizacion/personas/001471");
    expect(link.className).toContain("focus-visible:ring");
  });
  it("muestra rechazos de búsqueda y sale del estado de carga", async () => {
    mocks.search.mockRejectedValue(new Error("synthetic"));
    render(<DirectorySearch />);
    await search("Ana");
    expect(screen.getByRole("alert").textContent).toContain("No se ha podido completar");
    expect(screen.queryByLabelText("Buscando personas")).toBeNull();
  });
  it("no muestra la respuesta de otra sociedad", async () => {
    mocks.search.mockResolvedValue({ status: "ok", society: "COLL", data: [person("Ajena")] });
    render(<DirectorySearch />);
    await search("Ajena");
    expect(screen.queryByText("Ajena")).toBeNull();
    expect(screen.getByRole("alert").textContent).toContain("La sociedad ha cambiado");
  });
});
