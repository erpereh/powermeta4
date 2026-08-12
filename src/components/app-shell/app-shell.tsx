"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import { SettingsDialog } from "@/components/settings/settings-dialog";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { hydrateWorkspaceStore } from "@/stores/use-workspace-store";

const WorkspaceHydrationContext = createContext(false);
const SettingsDialogContext = createContext<{
  openSettings: () => void;
} | null>(null);

export const useWorkspaceHydrated = () => useContext(WorkspaceHydrationContext);

export const useSettingsDialog = () => {
  const context = useContext(SettingsDialogContext);
  if (!context) {
    throw new Error("useSettingsDialog debe usarse dentro de AppShell.");
  }
  return context;
};

export function AppShell({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    void (async () => {
      try {
        await hydrateWorkspaceStore();
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
      <SettingsDialogContext.Provider value={{ openSettings: () => setSettingsOpen(true) }}>
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <SidebarInset className="min-h-svh min-w-0 bg-background">{children}</SidebarInset>
        </SidebarProvider>
        <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
      </SettingsDialogContext.Provider>
    </WorkspaceHydrationContext.Provider>
  );
}
