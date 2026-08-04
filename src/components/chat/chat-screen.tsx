"use client";

import { useState } from "react";

import { Thread } from "@/components/assistant-ui/thread";
import { ChatRuntimeProvider } from "@/components/chat/chat-runtime-provider";
import { mockModels } from "@/data/mock-models";
import { useChatStore } from "@/stores/use-chat-store";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ChatScreen() {
  const activeChatId = useChatStore((state) => state.activeChatId);
  const activeChat = useChatStore((state) =>
    state.chats.find((chat) => chat.id === state.activeChatId),
  );
  const [selectedModelId, setSelectedModelId] = useState(mockModels[0].id);

  if (!activeChat) return null;

  return (
    <main className="flex h-svh min-h-0 flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <SidebarTrigger aria-label="Abrir o cerrar navegación" />
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
