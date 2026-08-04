"use client";

import { useStore } from "zustand";

import {
  createInitialWorkspaces,
  createPersistedWorkspaceStore,
  type WorkspaceStore,
} from "@/stores/workspace-store";

export const workspaceStore = createPersistedWorkspaceStore(createInitialWorkspaces());

export const useWorkspaceStore = <T>(selector: (state: WorkspaceStore) => T): T =>
  useStore(workspaceStore, selector);
