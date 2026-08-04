import { describe, expect, it } from "vitest";

import type { Chat } from "@/types/chat";
import { createChatStore, createPersistedChatStore, filterChats } from "@/stores/chat-store";
import type { PersistStorage, StorageValue } from "zustand/middleware";

type TestPersistedState = {
  chats: Chat[];
  activeChatId: string;
};

const createMemoryStorage = (): PersistStorage<TestPersistedState> => {
  let storedValue: StorageValue<TestPersistedState> | null = null;

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

describe("chat store", () => {
  it("toggles a chat between normal and favorite state", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().toggleFavorite("chat-active");
    expect(store.getState().chats.find((chat) => chat.id === "chat-active")).toMatchObject({
      favorite: true,
      icon: "folder",
      iconColor: "neutral",
    });

    store.getState().toggleFavorite("chat-active");
    expect(store.getState().chats.find((chat) => chat.id === "chat-active")?.favorite).toBe(false);
  });

  it("selects another chat when deleting the active chat", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().deleteChat("chat-active");

    expect(store.getState().chats.some((chat) => chat.id === "chat-active")).toBe(false);
    expect(store.getState().activeChatId).toBe("chat-favorite");
  });

  it("deletes an inactive chat without changing the active selection", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().deleteChat("chat-other");

    expect(store.getState().chats.some((chat) => chat.id === "chat-other")).toBe(false);
    expect(store.getState().activeChatId).toBe("chat-active");
  });

  it("creates and activates an empty chat", () => {
    const store = createChatStore(seedChats, "chat-active");

    const newChatId = store.getState().createChat();
    const newChat = store.getState().chats.find((chat) => chat.id === newChatId);

    expect(store.getState().activeChatId).toBe(newChatId);
    expect(newChat).toMatchObject({ title: "Nuevo chat", favorite: false, messages: [] });
  });

  it("keeps normal chats without renderable appearance settings", () => {
    const store = createChatStore(seedChats, "chat-active");
    const normalChat = store.getState().chats.find((chat) => chat.id === "chat-active");

    expect(normalChat).toMatchObject({ favorite: false });
    expect(normalChat?.icon).toBeUndefined();
    expect(normalChat?.iconColor).toBeUndefined();
  });

  it("updates a chat title without changing its messages", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().setChatTitle("chat-active", "Nuevo título");

    expect(store.getState().chats.find((chat) => chat.id === "chat-active")).toMatchObject({
      title: "Nuevo título",
      messages: [],
    });
  });

  it("updates a favorite chat icon and color through controlled actions", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().setChatIcon("chat-active", "rocket");
    store.getState().setChatColor("chat-active", "purple");

    expect(store.getState().chats.find((chat) => chat.id === "chat-active")).toMatchObject({
      icon: "rocket",
      iconColor: "purple",
    });
  });

  it("keeps a custom appearance when a chat leaves and returns to favorites", () => {
    const store = createChatStore(seedChats, "chat-active");

    store.getState().toggleFavorite("chat-active");
    store.getState().setChatIcon("chat-active", "rocket");
    store.getState().setChatColor("chat-active", "purple");
    store.getState().toggleFavorite("chat-active");
    store.getState().toggleFavorite("chat-active");

    expect(store.getState().chats.find((chat) => chat.id === "chat-active")).toMatchObject({
      favorite: true,
      icon: "rocket",
      iconColor: "purple",
    });
  });

  it("persists and rehydrates chat appearance and active selection", async () => {
    const storage = createMemoryStorage();
    const sourceStore = createPersistedChatStore(seedChats, "chat-active", storage);

    sourceStore.getState().toggleFavorite("chat-active");
    sourceStore.getState().setChatIcon("chat-active", "briefcase");
    sourceStore.getState().setChatColor("chat-active", "cyan");

    const restoredStore = createPersistedChatStore(seedChats, "chat-other", storage);
    await restoredStore.persist.rehydrate();

    expect(restoredStore.getState().activeChatId).toBe("chat-active");
    expect(restoredStore.getState().chats.find((chat) => chat.id === "chat-active")).toMatchObject({
      favorite: true,
      icon: "briefcase",
      iconColor: "cyan",
    });
  });

  it("keeps a usable fallback when browser storage is unavailable", async () => {
    const store = createPersistedChatStore(seedChats, "chat-active");

    expect(store.persist).toBeDefined();
    await store.persist.rehydrate();
    expect(store.getState().activeChatId).toBe("chat-active");
  });

  it("filters chats by title and message content case-insensitively", () => {
    expect(filterChats(seedChats, "ARQUITECTURA").map((chat) => chat.id)).toEqual(["chat-other"]);
    expect(filterChats(seedChats, "ideas").map((chat) => chat.id)).toEqual(["chat-favorite"]);
  });
});
