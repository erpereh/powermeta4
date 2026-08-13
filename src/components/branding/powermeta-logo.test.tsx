/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { POWERMETA_LOGO_SRC, PowermetaLogo } from "./powermeta-logo";

afterEach(() => {
  cleanup();
});

describe("PowermetaLogo", () => {
  it("renders the development fallback mark and wordmark without a broken official asset", () => {
    const { container } = render(<PowermetaLogo />);

    expect(screen.getByText("powermeta4")).toBeTruthy();
    expect(container.querySelector("svg")).toBeTruthy();
    expect(container.querySelector(`img[src="${POWERMETA_LOGO_SRC}"]`)).toBeNull();
  });

  it("renders only the mark in compact mode", () => {
    const { container } = render(<PowermetaLogo compact />);

    expect(screen.queryByText("powermeta4")).toBeNull();
    expect(container.querySelector("svg")).toBeTruthy();
    expect(container.querySelector(`img[src="${POWERMETA_LOGO_SRC}"]`)).toBeNull();
  });
});
