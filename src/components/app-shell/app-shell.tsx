"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { chatStore } from "@/stores/use-chat-store";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <ChatStoreHydration />
      <AppSidebar />
      <SidebarInset className="min-h-svh min-w-0 bg-background">{children}</SidebarInset>
    </SidebarProvider>
  );
}

function ChatStoreHydration() {
  useEffect(() => {
    void chatStore.persist.rehydrate();
  }, []);

  return null;
}
