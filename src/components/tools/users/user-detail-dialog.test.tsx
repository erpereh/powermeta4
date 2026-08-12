/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { getMeta4EmployeeDetailViewAction } from "@/app/actions/meta4-employee-detail";

vi.mock("@/app/actions/meta4-employee-detail", () => ({
  getMeta4EmployeeDetailViewAction: vi.fn(),
}));

import { UserDetailDialog } from "./user-detail-dialog";

const mockedAction = vi.mocked(getMeta4EmployeeDetailViewAction);

afterEach(() => {
  cleanup();
  mockedAction.mockReset();
});

describe("UserDetailDialog", () => {
  it("shows a loading skeleton before the view resolves", () => {
    mockedAction.mockReturnValue(new Promise(() => {}));

    render(<UserDetailDialog employeeId="1013" open onOpenChange={() => {}} />);

    expect(screen.getByText("Detalle del empleado")).toBeTruthy();
    expect(document.querySelector('[aria-busy="true"]')).toBeTruthy();
  });

  it("shows a destructive alert when the view is unavailable", async () => {
    mockedAction.mockResolvedValue({
      available: false,
      employeeId: "1013",
      displayName: null,
      message: "No se ha encontrado el detalle del empleado en Meta4.",
      sections: [],
      emails: [],
    });

    render(<UserDetailDialog employeeId="1013" open onOpenChange={() => {}} />);

    await waitFor(() => {
      expect(
        screen.getByText("No se ha encontrado el detalle del empleado en Meta4."),
      ).toBeTruthy();
    });
  });

  it("renders sections, fields and formats the sentinel end date as Vigente", async () => {
    mockedAction.mockResolvedValue({
      available: true,
      employeeId: "1013",
      displayName: "Alberto Olalla Coronas",
      message: null,
      sections: [
        {
          id: "identity",
          title: "Datos personales",
          fields: [{ key: "nombre", label: "Nombre", value: "Alberto" }],
        },
      ],
      emails: [{ email: "aolalla@creditoycaucion.es", dateRange: "1 mar 2004 – Vigente" }],
    });

    render(<UserDetailDialog employeeId="1013" open onOpenChange={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText("Alberto Olalla Coronas")).toBeTruthy();
    });
    expect(screen.getByText("Datos personales")).toBeTruthy();
    expect(screen.getByText("Nombre")).toBeTruthy();
    expect(screen.getByText("Alberto")).toBeTruthy();
    expect(screen.getByText("aolalla@creditoycaucion.es")).toBeTruthy();
    expect(screen.getByText("1 mar 2004 – Vigente")).toBeTruthy();
  });

  it("refetches when employeeId changes", async () => {
    mockedAction.mockResolvedValue({
      available: true,
      employeeId: "1013",
      displayName: "Alberto Olalla",
      message: null,
      sections: [],
      emails: [],
    });

    const { rerender } = render(<UserDetailDialog employeeId="1013" open onOpenChange={() => {}} />);
    await waitFor(() => expect(mockedAction).toHaveBeenCalledWith("1013"));

    mockedAction.mockResolvedValue({
      available: true,
      employeeId: "2000",
      displayName: "Otro Empleado",
      message: null,
      sections: [],
      emails: [],
    });
    rerender(<UserDetailDialog employeeId="2000" open onOpenChange={() => {}} />);

    await waitFor(() => expect(mockedAction).toHaveBeenCalledWith("2000"));
    await waitFor(() => expect(screen.getByText("Otro Empleado")).toBeTruthy());
  });
});
