import { afterEach, describe, expect, it } from "vitest";
import type { PersistStorage, StorageValue } from "zustand/middleware";

import type { Chat } from "@/types/chat";
import {
  createInitialWorkspaces,
  createPersistedWorkspaceStore,
  createWorkspaceStore,
  filterChats,
} from "@/stores/workspace-store";
import type { PersistedWorkspaceState } from "@/stores/workspace-store";

const seedChats: Chat[] = [
  {
    id: "chat-active",
    title: "Plan de producto",
    favorite: false,
    updatedAt: "2026-08-04T09:00:00.000Z",
    messages: [],
  },
  {
    id: "chat-favorite",
    title: "Ideas de contenido",
    favorite: true,
    updatedAt: "2026-08-03T09:00:00.000Z",
    messages: [],
  },
  {
    id: "chat-other",
    title: "Revisión técnica",
    favorite: false,
    updatedAt: "2026-08-02T09:00:00.000Z",
    messages: [
      {
        id: "message-1",
        role: "user",
        content: "Revisa esta arquitectura",
        createdAt: "2026-08-02T08:00:00.000Z",
        status: "complete",
      },
    ],
  },
];

const createMemoryStorage = (): PersistStorage<PersistedWorkspaceState> => {
  let storedValue: StorageValue<PersistedWorkspaceState> | null = null;

  return {
    getItem: () => storedValue,
    setItem: (_name, value) => {
      storedValue = value;
    },
    removeItem: () => {
      storedValue = null;
    },
  };
};

const createLocalStorage = () => {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
  };
};

const initialWorkspaces = createInitialWorkspaces(seedChats, "chat-active");

afterEach(() => {
  Reflect.deleteProperty(globalThis, "window");
});

describe("workspace store", () => {
  it("isolates chats, favorites, users and preferences by company", () => {
    const store = createWorkspaceStore(initialWorkspaces);

    store.getState().toggleFavorite("chat-active", "company-main");
    store.getState().addUser(
      {
        firstName: "Ana",
        lastName: "López",
        email: "ana@example.com",
        username: "ana",
        role: "manager",
        status: "active",
      },
      "company-main",
    );
    store.getState().setSelectedModel("luma-deep", "company-main");

    expect(store.getState().workspaces["company-main"].chats[0]?.favorite).toBe(true);
    expect(store.getState().workspaces["company-main"].users).toHaveLength(1);
    expect(store.getState().workspaces["company-main"].preferences.selectedModelId).toBe(
      "luma-deep",
    );
    expect(store.getState().workspaces["company-cyc"]).toMatchObject({
      chats: [],
      users: [],
      recentTools: [],
      activeChatId: null,
    });
  });

  it("toggles favorite defaults and preserves custom appearance", () => {
    const store = createWorkspaceStore(initialWorkspaces);

    store.getState().toggleFavorite("chat-active");
    expect(store.getState().workspaces["company-main"].chats[0]).toMatchObject({
      favorite: true,
      icon: "folder",
      iconColor: "neutral",
    });

    store.getState().setChatIcon("chat-active", "rocket");
    store.getState().setChatColor("chat-active", "purple");
    store.getState().toggleFavorite("chat-active");
    store.getState().toggleFavorite("chat-active");

    expect(store.getState().workspaces["company-main"].chats[0]).toMatchObject({
      favorite: true,
      icon: "rocket",
      iconColor: "purple",
    });
  });

  it("creates, selects and deletes chats in the scoped workspace", () => {
    const store = createWorkspaceStore(initialWorkspaces);
    const newChatId = store.getState().createChat("company-cyc");

    expect(store.getState().activeCompanyId).toBe("company-main");
    expect(store.getState().workspaces["company-cyc"].activeChatId).toBe(newChatId);
    expect(store.getState().workspaces["company-cyc"].chats).toHaveLength(1);

    store.getState().deleteChat(newChatId, "company-cyc");
    const replacement = store.getState().workspaces["company-cyc"];
    expect(replacement.chats).toHaveLength(1);
    expect(replacement.activeChatId).toBe(replacement.chats[0]?.id);
  });

  it("selects another chat after deleting the active chat and preserves inactive selection", () => {
    const store = createWorkspaceStore(initialWorkspaces);

    store.getState().deleteChat("chat-active");
    expect(store.getState().workspaces["company-main"].activeChatId).toBe("chat-favorite");

    store.getState().selectChat("chat-favorite");
    store.getState().deleteChat("chat-other");
    expect(store.getState().workspaces["company-main"].activeChatId).toBe("chat-favorite");
  });

  it("filters chats by title and message content", () => {
    expect(filterChats(seedChats, "ARQUITECTURA").map((chat) => chat.id)).toEqual(["chat-other"]);
    expect(filterChats(seedChats, "ideas").map((chat) => chat.id)).toEqual(["chat-favorite"]);
  });

  it("persists and rehydrates the active company and workspace data", async () => {
    const storage = createMemoryStorage();
    const sourceStore = createPersistedWorkspaceStore(initialWorkspaces, "company-main", storage);
    sourceStore.getState().switchCompany("company-cyc");
    sourceStore.getState().createChat("company-cyc");
    sourceStore.getState().setSelectedModel("luma-fast", "company-cyc");

    const restoredStore = createPersistedWorkspaceStore(
      createInitialWorkspaces([]),
      "company-main",
      storage,
    );
    await restoredStore.persist.rehydrate();

    expect(restoredStore.getState().activeCompanyId).toBe("company-cyc");
    expect(restoredStore.getState().workspaces["company-cyc"].chats).toHaveLength(1);
    expect(restoredStore.getState().workspaces["company-cyc"].preferences.selectedModelId).toBe(
      "luma-fast",
    );
  });

  it("migrates the old chat store once, deduplicates IDs and validates active chat", () => {
    const localStorage = createLocalStorage();
    Object.defineProperty(globalThis, "window", { value: { localStorage }, configurable: true });
    localStorage.setItem(
      "powermeta4-chat-store",
      JSON.stringify({
        state: {
          activeChatId: "missing",
          chats: [seedChats[0], seedChats[0], seedChats[2]],
        },
      }),
    );

    const store = createPersistedWorkspaceStore(createInitialWorkspaces([]));
    store.getState().migrateLegacyChatState();

    expect(store.getState().legacyMigrationComplete).toBe(true);
    expect(store.getState().workspaces["company-main"].chats.map((chat) => chat.id)).toEqual([
      "chat-active",
      "chat-other",
    ]);
    expect(store.getState().workspaces["company-main"].activeChatId).toBe("chat-active");
    expect(localStorage.getItem("powermeta4-chat-store")).toBeNull();

    const chatsAfterSecondRun = store.getState().workspaces["company-main"].chats;
    store.getState().migrateLegacyChatState();
    expect(store.getState().workspaces["company-main"].chats).toEqual(chatsAfterSecondRun);
  });
});
