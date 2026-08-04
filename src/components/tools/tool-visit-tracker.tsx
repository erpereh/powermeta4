"use client";

import { useEffect } from "react";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

export function ToolVisitTracker({ toolId }: { toolId: string }) {
  const hydrated = useWorkspaceHydrated();
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);

  useEffect(() => {
    if (!hydrated) return;
    recordToolVisit(toolId);
  }, [hydrated, recordToolVisit, toolId]);

  return null;
}
