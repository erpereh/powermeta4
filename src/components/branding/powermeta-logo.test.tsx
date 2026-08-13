/** @vitest-environment jsdom */

import { existsSync } from "node:fs";
import path from "node:path";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { POWERMETA_MARK_SRC, PowermetaLogo } from "./powermeta-logo";

afterEach(() => {
  cleanup();
});

const OLD_INLINE_MARK =
  "M5 5h10v4H9v6H5V5Zm12 0h10v10h-4V9h-6V5ZM5 17h4v6h6v4H5V17Zm18 0h4v10H17v-4h6v-6Z";

describe("PowermetaLogo", () => {
  it("uses the official mark asset from public/brand", () => {
    expect(existsSync(path.join(process.cwd(), "public/brand/powermeta4-mark.svg"))).toBe(true);
    expect(existsSync(path.join(process.cwd(), "powermeta4-mark.svg"))).toBe(false);
  });

  it("renders the isotipo and wordmark without the old inline mark", () => {
    const { container } = render(<PowermetaLogo />);

    expect(screen.getByText("powermeta4")).toBeTruthy();
    expect(container.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
    expect(container.querySelector("svg")).toBeNull();
    expect(container.querySelector(`path[d="${OLD_INLINE_MARK}"]`)).toBeNull();
    expect(container.querySelector(".bg-sidebar-primary")).toBeNull();
  });

  it("renders only the isotipo in compact mode", () => {
    const { container } = render(<PowermetaLogo compact />);

    expect(screen.queryByText("powermeta4")).toBeNull();
    expect(container.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
    expect(container.querySelector("svg")).toBeNull();
  });
});
