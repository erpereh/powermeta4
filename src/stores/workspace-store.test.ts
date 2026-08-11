import { describe, expect, it } from "vitest";

import {
  createInitialWorkspaceState,
  createWorkspaceStore,
  filterChats,
} from "@/stores/workspace-store";
import type { Chat } from "@/types/chat";
import type { WorkspaceSnapshotState } from "@/stores/workspace-store";

const snapshot: WorkspaceSnapshotState = {
  companies: [
    {
      id: "company-one",
      name: "Empresa local",
      shortName: "Local",
      icon: "building",
      color: "blue",
    },
    {
      id: "company-two",
      name: "Otra empresa",
      shortName: "Otra",
      icon: "briefcase",
      color: "purple",
    },
  ],
  activeCompanyId: "company-one",
  workspaces: {
    "company-one": {
      chats: [
        {
          id: "chat-one",
          title: "Plan de producto",
          favorite: false,
          updatedAt: "2026-08-04T09:00:00.000Z",
          messages: [
            {
              id: "message-one",
              role: "user",
              content: [{ type: "text", text: "Revisa esta arquitectura" }],
              createdAt: "2026-08-02T08:00:00.000Z",
              status: "complete",
            },
          ],
        },
      ],
      activeChatId: "chat-one",
      recentTools: [],
      preferences: { selectedModelId: "luma-balanced" },
    },
    "company-two": {
      chats: [],
      activeChatId: null,
      recentTools: [],
      preferences: { selectedModelId: "luma-balanced" },
    },
  },
  auth: { mode: "meta4", username: "usuario", canUseMeta4: true },
};

describe("server snapshot workspace store", () => {
  it("keeps only a nullable client auth view in the initial state", () => {
    const state = createInitialWorkspaceState();

    expect(state.auth).toBeNull();
    expect("session" in state).toBe(false);
  });

  it("starts empty and has no Zustand persistence API", () => {
    const store = createWorkspaceStore(createInitialWorkspaceState());

    expect(store.getState().companies).toEqual([]);
    expect(store.getState().hydrated).toBe(false);
    expect("persist" in store).toBe(false);
  });

  it("replaces the complete snapshot when the active company changes", () => {
    const store = createWorkspaceStore(createInitialWorkspaceState());

    store.getState().applySnapshot(snapshot);
    store.getState().switchCompany("company-two");

    expect(store.getState().hydrated).toBe(true);
    expect(store.getState().activeCompanyId).toBe("company-two");
    expect(store.getState().workspaces["company-one"]?.chats).toHaveLength(1);
    expect(store.getState().workspaces["company-two"]?.chats).toEqual([]);
  });

  it("keeps optimistic mutations scoped to one company", () => {
    const store = createWorkspaceStore(createInitialWorkspaceState());
    store.getState().applySnapshot(snapshot);

    store.getState().toggleFavorite("chat-one", "company-one");
    store.getState().setSelectedModel("luma-deep", "company-one");
    const newChatId = store.getState().createChat("company-two");

    expect(store.getState().workspaces["company-one"]?.chats[0]?.favorite).toBe(true);
    expect(store.getState().workspaces["company-one"]?.preferences.selectedModelId).toBe(
      "luma-deep",
    );
    expect(store.getState().workspaces["company-two"]?.chats[0]?.id).toBe(newChatId);
  });

  it("filters structured message text without flattening stored content", () => {
    const chat = snapshot.workspaces["company-one"]?.chats[0];
    if (!chat) throw new Error("Test chat missing");
    const chats: Chat[] = [chat];

    expect(filterChats(chats, "ARQUITECTURA").map((chat) => chat.id)).toEqual(["chat-one"]);
    expect(chats[0]?.messages[0]?.content).toEqual([
      { type: "text", text: "Revisa esta arquitectura" },
    ]);
  });

  it("does not create a replacement chat when deleting the last one locally", () => {
    const store = createWorkspaceStore(createInitialWorkspaceState());
    store.getState().applySnapshot(snapshot);

    store.getState().deleteChat("chat-one", "company-one");

    expect(store.getState().workspaces["company-one"]?.chats).toEqual([]);
    expect(store.getState().workspaces["company-one"]?.activeChatId).toBeNull();
  });
});
