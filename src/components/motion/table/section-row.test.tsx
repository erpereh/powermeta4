// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { Table } from "./index";

afterEach(cleanup);

it("los subtítulos ocupan todas las columnas y conservan las filas y valores en orden", () => {
  const activate = vi.fn();
  render(
    <Table
      data={[
        { id: "section", label: "Complementos compañía", amount: null },
        { id: "pay", label: "Complemento Personal", amount: 12.5 },
      ]}
      columns={[
        { key: "label", header: "Concepto" },
        { key: "amount", header: "Importe" },
      ]}
      getRowId={(row) => row.id}
      getSectionRow={(row) => (row.id === "section" ? row.label : null)}
      onRowActivate={activate}
      autoHeight
    />,
  );
  const subtitle = screen.getByText("Complementos compañía");
  expect(subtitle.getAttribute("colspan")).toBe("3");
  fireEvent.click(subtitle);
  expect(activate).not.toHaveBeenCalled();
  const row = screen.getByText("Complemento Personal").closest("tr");
  expect(row).toBeTruthy();
  expect(within(row!).getByText("12.5")).toBeTruthy();
  fireEvent.click(row!);
  expect(activate).toHaveBeenCalledOnce();
});

it("sin subtítulos mantiene la ordenación normal de una tabla existente", () => {
  render(
    <Table
      data={[
        { label: "Segunda", amount: 20 },
        { label: "Primera", amount: 10 },
      ]}
      columns={[
        { key: "label", header: "Concepto" },
        { key: "amount", header: "Importe", sortable: true },
      ]}
      autoHeight
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: /Importe/ }));
  const rows = screen.getAllByRole("row").slice(1);
  expect(rows.map((row) => within(row).getAllByRole("cell")[0].textContent)).toEqual([
    "Primera",
    "Segunda",
  ]);
  expect(document.querySelector("[data-table-section]")).toBeNull();
});
