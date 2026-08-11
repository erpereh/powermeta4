/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  loginAction: vi.fn(),
  debugLoginAction: vi.fn(),
}));

vi.mock("@/app/actions/auth", () => ({
  loginAction: mocks.loginAction,
  debugLoginAction: mocks.debugLoginAction,
}));

import { LoginForm } from "./login-form";

beforeEach(() => {
  mocks.loginAction.mockReset();
  mocks.debugLoginAction.mockReset();
  mocks.loginAction.mockResolvedValue({});
  mocks.debugLoginAction.mockResolvedValue({});
});

describe("login form", () => {
  it("shows a separate no-input debug form only when the server enables it", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<LoginForm debugAuthEnabled={false} />);

    expect(screen.getByLabelText("Usuario Meta4")).toBeTruthy();
    expect(screen.getByLabelText("Contraseña")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Entrar en modo debug" })).toBeNull();

    rerender(<LoginForm debugAuthEnabled />);
    const debugButton = screen.getByRole("button", { name: "Entrar en modo debug" });
    expect(screen.getByText("o")).toBeTruthy();

    await user.click(debugButton);
    expect(mocks.debugLoginAction).toHaveBeenCalledOnce();
    expect(mocks.loginAction).not.toHaveBeenCalled();
  });
});
