import { createStore, type StateCreator, type StoreApi } from "zustand/vanilla";
import { createJSONStorage, persist, type PersistStorage } from "zustand/middleware";

import { DEFAULT_CHAT_COLOR, DEFAULT_CHAT_ICON } from "@/lib/chat-customization";
import type { Chat, Message, MessageStatus } from "@/types/chat";

export type PersistedChatState = Pick<ChatStore, "chats" | "activeChatId">;

export type ChatStore = {
  chats: Chat[];
  activeChatId: string;
  createChat: () => string;
  selectChat: (chatId: string) => void;
  toggleFavorite: (chatId: string) => void;
  setChatIcon: (chatId: string, icon: Chat["icon"]) => void;
  setChatColor: (chatId: string, iconColor: Chat["iconColor"]) => void;
  setChatTitle: (chatId: string, title: string) => void;
  deleteChat: (chatId: string) => void;
  setChatMessages: (chatId: string, messages: Message[]) => void;
  setMessageContent: (chatId: string, messageId: string, content: string) => void;
  setMessageStatus: (chatId: string, messageId: string, status: MessageStatus) => void;
};

const createId = (prefix: string) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `${prefix}-${uuid ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`}`;
};

const createEmptyChat = (): Chat => ({
  id: createId("chat"),
  title: "Nuevo chat",
  favorite: false,
  updatedAt: new Date().toISOString(),
  messages: [],
});

const createMemoryStorage = (): PersistStorage<PersistedChatState> => {
  let storedValue: { state: PersistedChatState; version?: number } | null = null;

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

export const filterChats = (chats: Chat[], query: string) => {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return chats;

  return chats.filter((chat) => {
    const searchableText = [chat.title, ...chat.messages.map((message) => message.content)]
      .join(" ")
      .toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
};

const createChatStoreState =
  (initialChats: Chat[], activeChatId = initialChats[0]?.id ?? ""): StateCreator<ChatStore> =>
  (set, get) => ({
    chats: initialChats,
    activeChatId,
    createChat: () => {
      const chat = createEmptyChat();
      set((state) => ({
        chats: [chat, ...state.chats],
        activeChatId: chat.id,
      }));
      return chat.id;
    },
    selectChat: (chatId) => {
      if (get().chats.some((chat) => chat.id === chatId)) {
        set({ activeChatId: chatId });
      }
    },
    toggleFavorite: (chatId) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                favorite: !chat.favorite,
                ...(!chat.favorite
                  ? {
                      icon: chat.icon ?? DEFAULT_CHAT_ICON,
                      iconColor: chat.iconColor ?? DEFAULT_CHAT_COLOR,
                    }
                  : {}),
              }
            : chat,
        ),
      })),
    setChatIcon: (chatId, icon) =>
      set((state) => ({
        chats: state.chats.map((chat) => (chat.id === chatId ? { ...chat, icon } : chat)),
      })),
    setChatColor: (chatId, iconColor) =>
      set((state) => ({
        chats: state.chats.map((chat) => (chat.id === chatId ? { ...chat, iconColor } : chat)),
      })),
    setChatTitle: (chatId, title) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, title: title.trim() || "Nuevo chat" } : chat,
        ),
      })),
    deleteChat: (chatId) =>
      set((state) => {
        const remainingChats = state.chats.filter((chat) => chat.id !== chatId);
        if (remainingChats.length === 0) {
          const replacement = createEmptyChat();
          return { chats: [replacement], activeChatId: replacement.id };
        }

        return {
          chats: remainingChats,
          activeChatId: state.activeChatId === chatId ? remainingChats[0].id : state.activeChatId,
        };
      }),
    setChatMessages: (chatId, messages) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, messages, updatedAt: new Date().toISOString() } : chat,
        ),
      })),
    setMessageContent: (chatId, messageId, content) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                updatedAt: new Date().toISOString(),
                messages: chat.messages.map((message) =>
                  message.id === messageId ? { ...message, content } : message,
                ),
              }
            : chat,
        ),
      })),
    setMessageStatus: (chatId, messageId, status) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: chat.messages.map((message) =>
                  message.id === messageId ? { ...message, status } : message,
                ),
              }
            : chat,
        ),
      })),
  });

export const createChatStore = (
  initialChats: Chat[],
  activeChatId = initialChats[0]?.id ?? "",
): StoreApi<ChatStore> =>
  createStore<ChatStore>()(createChatStoreState(initialChats, activeChatId));

export const createPersistedChatStore = (
  initialChats: Chat[],
  activeChatId = initialChats[0]?.id ?? "",
  storage?: PersistStorage<PersistedChatState>,
) => {
  const resolvedStorage =
    storage ??
    createJSONStorage<PersistedChatState>(() => window.localStorage) ??
    createMemoryStorage();

  return createStore<ChatStore>()(
    persist(createChatStoreState(initialChats, activeChatId), {
      name: "powermeta4-chat-store",
      storage: resolvedStorage,
      skipHydration: true,
      version: 1,
      partialize: ({ chats, activeChatId: persistedActiveChatId }) => ({
        chats,
        activeChatId: persistedActiveChatId,
      }),
    }),
  );
};
