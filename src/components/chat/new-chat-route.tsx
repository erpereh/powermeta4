"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export function NewChatRoute() {
  const router = useRouter();
  const hydrated = useWorkspaceHydrated();
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const createChat = useWorkspaceStore((state) => state.createChat);
  const createdRef = useRef(false);

  useEffect(() => {
    if (!hydrated) return;
    if (createdRef.current) return;
    createdRef.current = true;
    const chatId = createChat(companyId);
    router.replace(`/chat/${chatId}`);
  }, [companyId, createChat, hydrated, router]);

  return (
    <main className="flex min-h-svh items-center justify-center px-4 text-sm text-muted-foreground">
      Preparando un nuevo chat...
    </main>
  );
}
