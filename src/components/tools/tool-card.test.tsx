/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ToolCard } from "@/components/tools/tool-card";
import { TOOL_REGISTRY } from "@/lib/tools/registry";

afterEach(() => {
  cleanup();
});

describe("ToolCard", () => {
  it("links implemented ERP actions", () => {
    const tool = TOOL_REGISTRY.find((entry) => entry.id === "users.consult");
    if (!tool) throw new Error("expected users.consult");

    render(<ToolCard tool={tool} />);

    expect(screen.getByRole("link").getAttribute("href")).toBe(tool.route);
    expect(screen.getByText("Listado de usuarios")).toBeTruthy();
  });

  it("keeps unimplemented ERP actions as non-navigating buttons", () => {
    const onUnavailable = vi.fn();
    const tool = TOOL_REGISTRY.find((entry) => entry.id === "users.create");
    if (!tool) throw new Error("expected users.create");

    render(<ToolCard tool={tool} onUnavailable={onUnavailable} />);

    expect(screen.queryByRole("link")).toBeNull();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
