/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  loginAction: vi.fn(),
  debugLoginAction: vi.fn(),
  quickLoginAction: vi.fn(),
}));

vi.mock("@/app/actions/auth", () => ({
  loginAction: mocks.loginAction,
  debugLoginAction: mocks.debugLoginAction,
  quickLoginAction: mocks.quickLoginAction,
}));

import { LoginForm } from "./login-form";

beforeEach(() => {
  mocks.loginAction.mockReset();
  mocks.debugLoginAction.mockReset();
  mocks.loginAction.mockResolvedValue({});
  mocks.debugLoginAction.mockResolvedValue({});
  mocks.quickLoginAction.mockReset();
  mocks.quickLoginAction.mockResolvedValue({});
});

afterEach(() => {
  cleanup();
});

describe("login form", () => {
  it("offers the development quick login only when the server passes a username", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<LoginForm debugAuthEnabled={false} />);
    expect(screen.queryByRole("button", { name: /Entrar como/ })).toBeNull();

    rerender(<LoginForm debugAuthEnabled={false} quickLoginUsername="JORGE.SALVADOR" />);
    await user.click(screen.getByRole("button", { name: "Entrar como JORGE.SALVADOR" }));
    expect(mocks.quickLoginAction).toHaveBeenCalledTimes(1);
    expect(mocks.loginAction).not.toHaveBeenCalled();
  });

  it("shows a separate no-input debug form only when the server enables it", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<LoginForm debugAuthEnabled={false} />);

    expect(screen.getByLabelText("Usuario Meta4")).toBeTruthy();
    expect(screen.getByLabelText("Contraseña")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Entrar en modo debug" })).toBeNull();

    rerender(<LoginForm debugAuthEnabled />);
    const debugButton = screen.getByRole("button", { name: "Entrar en modo debug" });
    expect(
      screen.getByText((content, element) => {
        return (
          content === "o" &&
          element !== null &&
          element.classList.contains("bg-card") &&
          element.classList.contains("text-muted-foreground")
        );
      }),
    ).toBeTruthy();

    await user.click(debugButton);
    expect(mocks.debugLoginAction).toHaveBeenCalledOnce();
    expect(mocks.loginAction).not.toHaveBeenCalled();
  });

  it("calls loginAction and not debugLoginAction when submitting Entrar", async () => {
    const user = userEvent.setup();
    render(<LoginForm debugAuthEnabled={false} />);
    await user.type(screen.getByLabelText("Usuario Meta4"), "usuario");
    await user.type(screen.getByLabelText("Contraseña"), "secreto");

    await user.click(screen.getByRole("button", { name: /^Entrar$/ }));

    expect(mocks.loginAction).toHaveBeenCalledOnce();
    expect(mocks.debugLoginAction).not.toHaveBeenCalled();
  });

  it("shows a role=alert when loginAction returns an error", async () => {
    const user = userEvent.setup();
    mocks.loginAction.mockResolvedValue({ error: "Credenciales no válidas" });
    render(<LoginForm debugAuthEnabled={false} />);
    await user.type(screen.getByLabelText("Usuario Meta4"), "usuario");
    await user.type(screen.getByLabelText("Contraseña"), "secreto");

    await user.click(screen.getByRole("button", { name: /^Entrar$/ }));

    const alert = await screen.findByRole("alert");
    expect(alert.textContent).toBe("Credenciales no válidas");
    expect(mocks.debugLoginAction).not.toHaveBeenCalled();
  });
});
