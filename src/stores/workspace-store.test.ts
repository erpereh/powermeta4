import { afterEach, describe, expect, it } from "vitest";
import { createJSONStorage, type PersistStorage, type StorageValue } from "zustand/middleware";

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
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
    removeItem: (key: string) => {
      values.delete(key);
    },
  };
};

const initialWorkspaces = createInitialWorkspaces(seedChats, "chat-active");

afterEach(() => {
  Reflect.deleteProperty(globalThis, "window");
});

describe("workspace store", () => {
  it("isolates chats, favorites and preferences by company", () => {
    const store = createWorkspaceStore(initialWorkspaces);

    store.getState().toggleFavorite("chat-active", "company-main");
    store.getState().setSelectedModel("luma-deep", "company-main");
    const cycChatId = store.getState().createChat("company-cyc");

    expect(store.getState().workspaces["company-main"].chats[0]?.favorite).toBe(true);
    expect(store.getState().workspaces["company-main"].preferences.selectedModelId).toBe(
      "luma-deep",
    );
    expect(store.getState().workspaces["company-cyc"]).toMatchObject({
      chats: [{ id: cycChatId }],
      recentTools: [],
      activeChatId: cycChatId,
    });
    expect(store.getState().workspaces["company-cyc"].preferences.selectedModelId).toBe(
      "luma-balanced",
    );
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

  it("creates a company with an empty workspace and selects it", () => {
    const store = createWorkspaceStore(initialWorkspaces);
    const companyId = store.getState().createCompany("Nueva empresa");

    expect(companyId).toBeTruthy();
    expect(store.getState().activeCompanyId).toBe(companyId);
    expect(store.getState().companies.at(-1)).toMatchObject({
      id: companyId,
      name: "Nueva empresa",
      shortName: "Nueva empresa",
      icon: "building",
      color: "blue",
    });
    expect(companyId && store.getState().workspaces[companyId]).toMatchObject({
      chats: [],
      activeChatId: null,
      recentTools: [],
    });
    expect(store.getState().createCompany(" ")).toBeNull();
    expect(store.getState().createCompany("nueva EMPRESA")).toBeNull();
  });

  it("deletes active and inactive companies and protects the last one", () => {
    const store = createWorkspaceStore(initialWorkspaces);
    const createdCompanyId = store.getState().createCompany("Empresa temporal");
    expect(createdCompanyId).toBeTruthy();

    expect(store.getState().deleteCompany("company-cyc")).toBe(createdCompanyId);
    expect(store.getState().activeCompanyId).toBe(createdCompanyId);
    expect(store.getState().workspaces["company-cyc"]).toBeUndefined();

    expect(createdCompanyId && store.getState().deleteCompany(createdCompanyId)).toBe(
      "company-main",
    );
    expect(store.getState().activeCompanyId).toBe("company-main");

    expect(store.getState().deleteCompany("company-main")).toBe("company-nexo");
    expect(store.getState().deleteCompany("company-nexo")).toBeNull();
    expect(store.getState().companies).toHaveLength(1);
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

  it("persists companies, active company and workspace data", async () => {
    const storage = createMemoryStorage();
    const sourceStore = createPersistedWorkspaceStore(initialWorkspaces, "company-main", storage);
    const companyId = sourceStore.getState().createCompany("Persistida");
    expect(companyId).toBeTruthy();
    if (companyId) {
      sourceStore.getState().createChat(companyId);
      sourceStore.getState().setSelectedModel("luma-fast", companyId);
    }

    const restoredStore = createPersistedWorkspaceStore(
      createInitialWorkspaces([]),
      "company-main",
      storage,
    );
    await restoredStore.persist.rehydrate();

    expect(restoredStore.getState().activeCompanyId).toBe(companyId);
    expect(restoredStore.getState().companies.some((company) => company.id === companyId)).toBe(
      true,
    );
    expect(companyId && restoredStore.getState().workspaces[companyId].chats).toHaveLength(1);
    expect(
      companyId && restoredStore.getState().workspaces[companyId].preferences.selectedModelId,
    ).toBe("luma-fast");
  });

  it("migrates v2 by removing users without deleting chats", async () => {
    const localStorage = createLocalStorage();
    Object.defineProperty(globalThis, "window", { value: { localStorage }, configurable: true });
    const legacyWorkspaces = createInitialWorkspaces(seedChats, "chat-active");
    const legacyState = {
      activeCompanyId: "company-main",
      workspaces: Object.fromEntries(
        Object.entries(legacyWorkspaces).map(([companyId, workspace]) => [
          companyId,
          {
            ...workspace,
            users: [
              {
                id: "user-legacy",
                firstName: "Legacy",
                lastName: "User",
                email: "legacy@example.com",
                username: "legacy",
                role: "user",
                status: "active",
                createdAt: "2026-08-04T09:00:00.000Z",
              },
            ],
          },
        ]),
      ),
      legacyMigrationComplete: true,
    };
    localStorage.setItem(
      "powermeta4-workspace-store",
      JSON.stringify({ state: legacyState, version: 2 }),
    );

    const store = createPersistedWorkspaceStore(
      createInitialWorkspaces([]),
      "company-main",
      createJSONStorage(() => localStorage),
    );
    await store.persist.rehydrate();

    expect(store.getState().workspaces["company-main"].chats.map((chat) => chat.id)).toEqual([
      "chat-active",
      "chat-favorite",
      "chat-other",
    ]);
    expect("users" in store.getState().workspaces["company-main"]).toBe(false);
    expect(store.getState().companies).toHaveLength(3);
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
