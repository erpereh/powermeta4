/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";

import type { AiProviderConfigView } from "@/types/ai-provider-config";
import type { Chat } from "@/types/chat";
import type { CompanyId, WorkspaceData } from "@/types/workspace";

const setSelectedProviderConfig = vi.fn();
const setSelectedProviderConfigAction = vi.fn();

let workspaceState: {
  activeCompanyId: CompanyId;
  workspaces: Record<string, WorkspaceData>;
};

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
}));

vi.mock("@/components/app-shell/app-shell", () => ({
  useWorkspaceHydrated: () => true,
}));

vi.mock("@/app/actions/workspace", () => ({
  createConversationAction: vi.fn(),
  selectConversationAction: vi.fn(),
  setSelectedProviderConfigAction: (...args: unknown[]) => setSelectedProviderConfigAction(...args),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  hydrateWorkspaceStore: vi.fn(),
  useWorkspaceStore: (selector: (state: typeof workspaceState & { createChat: () => string; selectChat: () => void; setSelectedProviderConfig: typeof setSelectedProviderConfig }) => unknown) =>
    selector({
      ...workspaceState,
      createChat: () => "chat-1",
      selectChat: () => undefined,
      setSelectedProviderConfig,
    }),
}));

vi.mock("@/components/chat/chat-runtime-provider", () => ({
  ChatRuntimeProvider: ({
    children,
    selectedProviderConfigId,
  }: {
    children: ReactNode;
    selectedProviderConfigId: string | null;
  }) => <div data-testid="runtime" data-selected={selectedProviderConfigId ?? "none"}>{children}</div>,
}));

vi.mock("@/components/assistant-ui/thread", () => ({
  Thread: ({
    models,
    selectedProviderConfigId,
  }: {
    models: { id: string; name: string }[];
    selectedProviderConfigId: string | null;
  }) => (
    <div>
      {models.length === 0 || !selectedProviderConfigId ? (
        <p>Configura un modelo en Ajustes</p>
      ) : (
        <div>
          <span>{models.find((model) => model.id === selectedProviderConfigId)?.name}</span>
          <button type="button">Enviar mensaje</button>
        </div>
      )}
    </div>
  ),
}));

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatScreen } from "./chat-screen";

const CHAT: Chat = {
  id: "chat-1",
  title: "Nuevo chat",
  favorite: false,
  updatedAt: "2026-08-17T10:00:00.000Z",
  messages: [],
};

const GEMINI: AiProviderConfigView = {
  id: "config-gemini",
  name: "Gemini",
  baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
  model: "gemini-2.5-flash-lite",
  hasApiKey: true,
};

const workspaceWith = (
  configs: AiProviderConfigView[],
  selectedProviderConfigId: string | null,
): WorkspaceData => ({
  chats: [CHAT],
  activeChatId: CHAT.id,
  recentTools: [],
  preferences: { selectedProviderConfigId },
  aiProviderConfigs: configs,
});

beforeEach(() => {
  setSelectedProviderConfig.mockReset();
  setSelectedProviderConfigAction.mockReset().mockResolvedValue({ ok: true, data: null });
  workspaceState = {
    activeCompanyId: "company-1",
    workspaces: {
      "company-1": workspaceWith([], null),
    },
  };
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
});

afterEach(() => {
  cleanup();
});

const renderChat = () =>
  render(
    <TooltipProvider>
      <SidebarProvider>
        <ChatScreen requestedChatId="chat-1" />
      </SidebarProvider>
    </TooltipProvider>,
  );

describe("ChatScreen provider picker", () => {
  it("blocks send and asks to configure a model when there are no configs", () => {
    renderChat();
    expect(screen.getByText("Configura un modelo en Ajustes")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Enviar mensaje" })).toBeNull();
    expect(screen.getByTestId("runtime").getAttribute("data-selected")).toBe("none");
  });

  it("shows a newly hydrated Gemini config in the picker even if stored selection is null", () => {
    workspaceState.workspaces["company-1"] = workspaceWith([GEMINI], null);
    renderChat();
    expect(screen.getByText("Gemini")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Enviar mensaje" })).toBeTruthy();
    expect(screen.getByTestId("runtime").getAttribute("data-selected")).toBe("config-gemini");
    expect(setSelectedProviderConfig).toHaveBeenCalledWith("config-gemini", "company-1");
  });
});
