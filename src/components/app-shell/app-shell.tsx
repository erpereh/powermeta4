"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { workspaceStore } from "@/stores/use-workspace-store";

const WorkspaceHydrationContext = createContext(false);

export const useWorkspaceHydrated = () => useContext(WorkspaceHydrationContext);

export function AppShell({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;

    void (async () => {
      try {
        await Promise.resolve(workspaceStore.persist.rehydrate());
        workspaceStore.getState().migrateLegacyChatState();
      } finally {
        if (mounted) setHydrated(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <WorkspaceHydrationContext.Provider value={hydrated}>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <SidebarInset className="min-h-svh min-w-0 bg-background">{children}</SidebarInset>
      </SidebarProvider>
    </WorkspaceHydrationContext.Provider>
  );
}
