import "server-only";

import { getPrismaClient } from "@/lib/local-database/client";

import { createWorkspaceRepository } from "./repository";

const globalForWorkspace = globalThis as {
  __powermeta4WorkspaceRepository?: ReturnType<typeof createWorkspaceRepository>;
};

const getRepository = () => {
  if (!globalForWorkspace.__powermeta4WorkspaceRepository) {
    globalForWorkspace.__powermeta4WorkspaceRepository =
      createWorkspaceRepository(getPrismaClient());
  }
  return globalForWorkspace.__powermeta4WorkspaceRepository;
};

export const getWorkspaceSnapshot = (username: string) => getRepository().getSnapshot(username);

export const getWorkspaceRepository = getRepository;

export const resetWorkspaceRepository = (): void => {
  delete globalForWorkspace.__powermeta4WorkspaceRepository;
};
