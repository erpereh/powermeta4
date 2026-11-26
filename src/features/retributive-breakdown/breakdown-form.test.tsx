/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it, vi } from "vitest";

import { BreakdownForm } from "./breakdown-form";
import { BREAKDOWN_ZIP_NAME } from "./contract";

const files = Array.from(
  { length: 5 },
  (_, index) => new File(["ficticio"], "entrada-" + index + ".xlsx"),
);

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it("envía los cinco Excel seleccionados y descarga el ZIP", async () => {
  const user = userEvent.setup();
  const fetch = vi
    .fn()
    .mockResolvedValue(new Response("zip", { headers: { "content-type": "application/zip" } }));
  vi.stubGlobal("fetch", fetch);
  const blobUrl = vi.fn().mockReturnValue("blob:desglose");
  vi.stubGlobal("URL", { createObjectURL: blobUrl, revokeObjectURL: vi.fn() });
  const downloads: string[] = [];
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
    function (this: HTMLAnchorElement) {
      downloads.push(this.download);
    },
  );
  render(<BreakdownForm />);
  const button = screen.getByRole("button", { name: "Generar y descargar ZIP" });
  expect((button as HTMLButtonElement).disabled).toBe(true);
  await user.upload(screen.getByLabelText("Excel de PeopleNet"), files);
  expect(screen.getByRole("status").textContent).toBe("5 de 5 archivos seleccionados");
  await user.click(button);
  await waitFor(() => expect(downloads).toEqual([BREAKDOWN_ZIP_NAME]));
  expect(fetch).toHaveBeenCalledWith(
    "/api/desglose-retributivo/generate",
    expect.objectContaining({ method: "POST" }),
  );
  const body: unknown = fetch.mock.calls[0][1].body;
  expect(body).toBeInstanceOf(FormData);
  if (!(body instanceof FormData)) throw new Error("Se esperaba multipart.");
  expect(body.getAll("files")).toEqual(files);
});

it("hace visible un error de validación del servidor y permite corregir la selección", async () => {
  const user = userEvent.setup();
  const fetch = vi
    .fn()
    .mockResolvedValue(Response.json({ error: "La agrupación está repetida." }, { status: 422 }));
  vi.stubGlobal("fetch", fetch);
  render(<BreakdownForm />);
  const picker = screen.getByLabelText("Excel de PeopleNet");
  await user.upload(picker, files);
  await user.click(screen.getByRole("button", { name: "Generar y descargar ZIP" }));
  expect((await screen.findByRole("alert")).textContent).toBe("La agrupación está repetida.");
  await user.upload(picker, files.slice(0, 1));
  expect(screen.queryByRole("alert")).toBeNull();
  expect(screen.getByRole("status").textContent).toBe("1 de 5 archivos seleccionados");
});
