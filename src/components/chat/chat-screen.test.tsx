/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";

import type { GlobalChatStatus } from "@/lib/chat/global-chat-client";
import type { Chat } from "@/types/chat";
import type { CompanyId, WorkspaceData } from "@/types/workspace";

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
}));

vi.mock("@/stores/use-workspace-store", () => ({
  hydrateWorkspaceStore: vi.fn(),
  useWorkspaceStore: (selector: (state: typeof workspaceState & { createChat: () => string; selectChat: () => void }) => unknown) =>
    selector({
      ...workspaceState,
      createChat: () => "chat-1",
      selectChat: () => undefined,
    }),
}));

vi.mock("@/components/chat/chat-runtime-provider", () => ({
  ChatRuntimeProvider: ({ children, chatStatus }: { children: ReactNode; chatStatus: GlobalChatStatus }) => (
    <div data-testid="runtime" data-configured={String(chatStatus.configured)} data-model={chatStatus.model ?? "none"}>
      {children}
    </div>
  ),
}));

vi.mock("@/components/assistant-ui/thread", () => ({
  // Mirrors src/lib/chat/chat-status.ts's getChatStatusLabel: no label at
  // all once configured - never reveals which model/provider is active.
  Thread: ({ chatStatus }: { chatStatus: GlobalChatStatus }) => (
    <div>
      <p>{chatStatus.configured && chatStatus.model ? "" : "IA no configurada"}</p>
      <button type="button" disabled={!chatStatus.configured}>Enviar mensaje</button>
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

const workspaceWith = (): WorkspaceData => ({
  chats: [CHAT],
  activeChatId: CHAT.id,
  recentTools: [],
});

beforeEach(() => {
  workspaceState = {
    activeCompanyId: "company-1",
    workspaces: { "company-1": workspaceWith() },
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
  vi.unstubAllGlobals();
});

const renderChat = (chatStatus: GlobalChatStatus) =>
  render(
    <TooltipProvider>
      <SidebarProvider>
        <ChatScreen requestedChatId="chat-1" chatStatus={chatStatus} />
      </SidebarProvider>
    </TooltipProvider>,
  );

describe("ChatScreen global chat status", () => {
  it("forwards an incomplete global configuration and blocks send", () => {
    renderChat({ configured: false, model: null });

    expect(screen.getByText("IA no configurada")).toBeTruthy();
    expect((screen.getByRole("button", { name: "Enviar mensaje" }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByTestId("runtime").getAttribute("data-configured")).toBe("false");
    expect(screen.getByTestId("runtime").getAttribute("data-model")).toBe("none");
  });

  it("forwards the configured model internally without ever displaying it", () => {
    renderChat({ configured: true, model: "gemini-2.5-flash" });

    expect(screen.queryByText(/gemini/i)).toBeNull();
    expect((screen.getByRole("button", { name: "Enviar mensaje" }) as HTMLButtonElement).disabled).toBe(false);
    expect(screen.getByTestId("runtime").getAttribute("data-configured")).toBe("true");
    expect(screen.getByTestId("runtime").getAttribute("data-model")).toBe("gemini-2.5-flash");
    expect(screen.queryByRole("combobox")).toBeNull();
  });
});
