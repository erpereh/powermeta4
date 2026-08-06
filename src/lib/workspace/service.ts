import "server-only";

import { getDatabase } from "@/server/database/client";

import { createWorkspaceRepository } from "./repository";

const globalForWorkspace = globalThis as {
  __powermeta4WorkspaceRepository?: ReturnType<typeof createWorkspaceRepository>;
  __powermeta4WorkspaceDatabase?: ReturnType<typeof getDatabase>;
};

const getRepository = () => {
  const database = getDatabase();
  if (
    !globalForWorkspace.__powermeta4WorkspaceRepository ||
    globalForWorkspace.__powermeta4WorkspaceDatabase !== database
  ) {
    globalForWorkspace.__powermeta4WorkspaceRepository = createWorkspaceRepository(database);
    globalForWorkspace.__powermeta4WorkspaceDatabase = database;
  }
  return globalForWorkspace.__powermeta4WorkspaceRepository;
};

export const getWorkspaceSnapshot = (username: string) => getRepository().getSnapshot(username);

export const getWorkspaceRepository = getRepository;

export const resetWorkspaceRepository = (): void => {
  delete globalForWorkspace.__powermeta4WorkspaceRepository;
  delete globalForWorkspace.__powermeta4WorkspaceDatabase;
};
