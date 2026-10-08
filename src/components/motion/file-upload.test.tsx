/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FileUpload, FileUploadList, type FileUploadItem } from "@/components/system";

afterEach(cleanup);
const items: FileUploadItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: String(index),
  name: `Recibo ${index + 1}.pdf`,
  size: 1024,
  status: "success",
}));

describe("cola reutilizable de FileUpload", () => {
  it("mantiene la lista completa por defecto fuera del portal", () => {
    render(<FileUpload value={items} />);
    expect(screen.getAllByRole("button", { name: /^Remove Recibo/ })).toHaveLength(5);
  });
  it("el límite visual conserva los ocultos al eliminar y calcular el máximo", async () => {
    const onValueChange = vi.fn();
    const onRemove = vi.fn();
    render(
      <FileUpload
        value={items}
        maxFiles={5}
        maxVisibleItems={3}
        onValueChange={onValueChange}
        onRemove={onRemove}
      />,
    );
    expect(screen.getAllByRole("button", { name: /^Remove Recibo/ })).toHaveLength(3);
    expect(
      screen.getByRole("button", { name: /Upload limit reached/ }).hasAttribute("disabled"),
    ).toBe(true);
    await userEvent.setup().click(screen.getByRole("button", { name: "Remove Recibo 1.pdf" }));
    expect(onValueChange).toHaveBeenCalledWith(items.slice(1));
    expect(onRemove).toHaveBeenCalledWith(items[0]);
  });
  it("la lista independiente conserva errores, tamaños y eliminación sin inventar reintentos", async () => {
    const onRemove = vi.fn();
    const failed: FileUploadItem = { ...items[0], status: "error", error: "No se ha cargado" };
    render(<FileUploadList items={[failed]} onRemove={onRemove} />);
    expect(screen.getByText(/No se ha cargado/)).toBeTruthy();
    expect(screen.getByText(/1.0 KB/)).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Retry/ })).toBeNull();
    await userEvent.setup().click(screen.getByRole("button", { name: "Remove Recibo 1.pdf" }));
    expect(onRemove).toHaveBeenCalledWith(failed);
  });
});
