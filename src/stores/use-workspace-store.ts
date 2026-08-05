"use client";

import { useStore } from "zustand";

import {
  createInitialWorkspaceState,
  createWorkspaceStore,
  type WorkspaceSnapshotState,
  type WorkspaceStore,
} from "@/stores/workspace-store";

export const workspaceStore = createWorkspaceStore(createInitialWorkspaceState());

export const useWorkspaceStore = <T>(selector: (state: WorkspaceStore) => T): T =>
  useStore(workspaceStore, selector);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isWorkspaceSnapshotState = (value: unknown): value is WorkspaceSnapshotState => {
  if (!isRecord(value)) return false;
  if (!Array.isArray(value.companies) || !isRecord(value.workspaces)) return false;
  if (value.activeCompanyId !== null && typeof value.activeCompanyId !== "string") return false;
  if (!isRecord(value.session)) return false;
  return (
    (value.session.username === null || typeof value.session.username === "string") &&
    (value.session.status === "anonymous" || value.session.status === "authenticated") &&
    (value.session.lastValidatedAt === null || typeof value.session.lastValidatedAt === "string")
  );
};

export const hydrateWorkspaceStore = async (): Promise<boolean> => {
  const response = await fetch("/api/workspace", { cache: "no-store" });
  if (!response.ok) return false;
  const payload: unknown = await response.json();
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("ok" in payload) ||
    payload.ok !== true ||
    !("data" in payload) ||
    !isWorkspaceSnapshotState(payload.data)
  ) {
    return false;
  }

  workspaceStore.getState().applySnapshot(payload.data);
  try {
    window.localStorage.removeItem("powermeta4-workspace-store");
    window.localStorage.removeItem("powermeta4-chat-store");
  } catch {
    // Storage may be disabled; SQLite remains the source of truth.
  }
  return true;
};
