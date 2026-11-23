"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

import { Thread } from "@/components/assistant-ui/thread";
import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { ChatRuntimeProvider } from "@/components/chat/chat-runtime-provider";
import { ChatSources } from "@/components/chat/chat-sources";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";
import { createConversationAction, selectConversationAction } from "@/app/actions/workspace";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { Drawer, PageHeader } from "@/components/system";
import type { GlobalChatStatus } from "@/lib/chat/global-chat-client";
import type { CompanyId } from "@/types/workspace";

type ChatScreenProps = {
  requestedChatId?: string;
  chatStatus: GlobalChatStatus;
};

const sourcesMedia = "(min-width: 64rem)";
const subscribeSourcesMedia = (onChange: () => void) => {
  const query = window.matchMedia(sourcesMedia);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const isWideScreen = () => window.matchMedia(sourcesMedia).matches;

export function ChatScreen({ requestedChatId, chatStatus }: ChatScreenProps) {
  const router = useRouter();
  const hydrated = useWorkspaceHydrated();
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const createChat = useWorkspaceStore((state) => state.createChat);
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const sourcesId = useId();
  const wideScreen = useSyncExternalStore(subscribeSourcesMedia, isWideScreen, () => false);
  const activeChat = requestedChatId
    ? workspace?.chats.find((chat) => chat.id === requestedChatId)
    : workspace?.chats.find((chat) => chat.id === workspace.activeChatId);

  useEffect(() => {
    if (!hydrated) return;

    if (requestedChatId) {
      if (!activeChat || !companyId) {
        router.replace("/home");
      } else if (workspace?.activeChatId !== requestedChatId) {
        selectChat(requestedChatId, companyId);
        void selectConversationAction(companyId, requestedChatId, createClientMutationId()).then(
          (result) => {
            if (!result.ok) void hydrateWorkspaceStore();
          },
        );
      }
      return;
    }

    if (!activeChat && companyId) {
      const chatId = createChat(companyId);
      void createConversationAction(companyId, chatId, createClientMutationId()).then((result) => {
        if (!result.ok) {
          void hydrateWorkspaceStore();
          return;
        }
        router.replace(`/chat/${chatId}`);
      });
    }
  }, [
    activeChat,
    companyId,
    createChat,
    hydrated,
    requestedChatId,
    router,
    selectChat,
    workspace?.activeChatId,
  ]);

  if (!hydrated || !companyId || !activeChat || !workspace) return null;

  return (
    <main className="flex h-svh min-h-0 flex-col">
      <PageHeader
        className="pb-1 sm:pt-3"
        title={
          <h1 className="min-w-0 truncate text-sm font-medium text-muted-foreground">
            {activeChat.title}
          </h1>
        }
        actions={
          <TooltipIconButton
            tooltip={sourcesOpen ? "Ocultar fuentes" : "Mostrar fuentes"}
            type="button"
            aria-expanded={sourcesOpen}
            aria-controls={sourcesOpen ? sourcesId : undefined}
            aria-label="Fuentes"
            variant={sourcesOpen ? "secondary" : "ghost"}
            onClick={() => setSourcesOpen((open) => !open)}
          >
            {sourcesOpen ? (
              <PanelRightClose className="size-4" />
            ) : (
              <PanelRightOpen className="size-4" />
            )}
          </TooltipIconButton>
        }
      />

      <div className="flex min-h-0 min-w-0 flex-1">
        <div className="min-w-0 flex-1">
          <ChatRuntimeProvider
            key={`${companyId}:${activeChat.id}`}
            companyId={companyId as CompanyId}
            chatId={activeChat.id}
            chatStatus={chatStatus}
          >
            <Thread chatStatus={chatStatus} />
          </ChatRuntimeProvider>
        </div>
        {wideScreen && sourcesOpen ? (
          <aside
            id={sourcesId}
            aria-label="Fuentes"
            className="w-[min(22rem,32vw)] shrink-0 overflow-y-auto overscroll-contain border-s border-border px-4 py-4"
          >
            <h2 className="mb-4 text-sm font-semibold">Fuentes</h2>
            <ChatSources chat={activeChat} companyId={companyId} />
          </aside>
        ) : null}
        {!wideScreen && sourcesOpen ? (
          <Drawer open={sourcesOpen} onOpenChange={setSourcesOpen} title="Fuentes">
            <div id={sourcesId}>
              <ChatSources chat={activeChat} companyId={companyId} />
            </div>
          </Drawer>
        ) : null}
      </div>
    </main>
  );
}
