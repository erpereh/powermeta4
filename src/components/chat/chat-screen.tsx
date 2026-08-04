"use client";

import { useState } from "react";

import { Thread } from "@/components/assistant-ui/thread";
import { ChatRuntimeProvider } from "@/components/chat/chat-runtime-provider";
import { mockModels } from "@/data/mock-models";
import { useChatStore } from "@/stores/use-chat-store";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ChatScreen() {
  const { isMobile, open, openMobile } = useSidebar();
  const activeChatId = useChatStore((state) => state.activeChatId);
  const activeChat = useChatStore((state) =>
    state.chats.find((chat) => chat.id === state.activeChatId),
  );
  const [selectedModelId, setSelectedModelId] = useState(mockModels[0].id);
  const sidebarOpen = isMobile ? openMobile : open;
  const sidebarTriggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";

  if (!activeChat) return null;

  return (
    <main className="flex h-svh min-h-0 flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger
              aria-label={sidebarTriggerLabel}
              aria-expanded={sidebarOpen}
              title={sidebarTriggerLabel}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">{sidebarTriggerLabel}</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-5" />
        <div className="min-w-0">
          <h1 className="truncate text-sm font-medium">{activeChat.title}</h1>
        </div>
      </header>

      <div className="min-h-0 flex-1">
        <ChatRuntimeProvider
          key={activeChatId}
          chatId={activeChatId}
          selectedModelId={selectedModelId}
        >
          <Thread
            models={mockModels}
            selectedModelId={selectedModelId}
            onModelChange={setSelectedModelId}
          />
        </ChatRuntimeProvider>
      </div>
    </main>
  );
}
