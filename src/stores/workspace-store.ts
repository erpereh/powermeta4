import { createStore, type StateCreator, type StoreApi } from "zustand/vanilla";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
  type StorageValue,
} from "zustand/middleware";

import { mockChats } from "@/data/mock-chats";
import { mockModels } from "@/data/mock-models";
import {
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
  isChatColorName,
  isChatIconName,
} from "@/lib/chat-customization";
import { getTool } from "@/lib/tools/registry";
import { DEFAULT_COMPANY_ID, isCompanyId } from "@/lib/workspaces/companies";
import type { Chat, Message, MessageStatus } from "@/types/chat";
import type {
  CompanyId,
  ToolVisit,
  UserDraft,
  WorkspaceData,
  WorkspacePreferences,
  WorkspaceUser,
} from "@/types/workspace";

export type PersistedWorkspaceState = {
  activeCompanyId: CompanyId;
  workspaces: Record<CompanyId, WorkspaceData>;
  legacyMigrationComplete: boolean;
};

export type WorkspaceStore = PersistedWorkspaceState & {
  switchCompany: (companyId: CompanyId) => void;
  createChat: (companyId?: CompanyId) => string;
  selectChat: (chatId: string, companyId?: CompanyId) => void;
  toggleFavorite: (chatId: string, companyId?: CompanyId) => void;
  setChatIcon: (chatId: string, icon: Chat["icon"], companyId?: CompanyId) => void;
  setChatColor: (chatId: string, iconColor: Chat["iconColor"], companyId?: CompanyId) => void;
  setChatTitle: (chatId: string, title: string, companyId?: CompanyId) => void;
  deleteChat: (chatId: string, companyId?: CompanyId) => void;
  setChatMessages: (chatId: string, messages: Message[], companyId?: CompanyId) => void;
  setMessageContent: (
    chatId: string,
    messageId: string,
    content: string,
    companyId?: CompanyId,
  ) => void;
  setMessageStatus: (
    chatId: string,
    messageId: string,
    status: MessageStatus,
    companyId?: CompanyId,
  ) => void;
  setSelectedModel: (modelId: string, companyId?: CompanyId) => void;
  addUser: (user: UserDraft, companyId?: CompanyId) => string;
  recordToolVisit: (toolId: string, companyId?: CompanyId) => void;
  migrateLegacyChatState: () => void;
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

const cloneChats = (chats: readonly Chat[]) =>
  chats.map((chat) => ({
    ...chat,
    messages: chat.messages.map((message) => ({ ...message })),
  }));

const createWorkspaceData = (
  chats: Chat[] = [],
  activeChatId: string | null = null,
): WorkspaceData => ({
  chats,
  activeChatId: chats.some((chat) => chat.id === activeChatId)
    ? activeChatId
    : (chats[0]?.id ?? null),
  users: [],
  recentTools: [],
  preferences: {
    selectedModelId: mockModels[0]?.id ?? "luma-balanced",
  },
});

export const createInitialWorkspaces = (
  mainChats: readonly Chat[] = mockChats,
  mainActiveChatId = "chat-welcome",
): Record<CompanyId, WorkspaceData> => ({
  "company-main": createWorkspaceData(cloneChats(mainChats), mainActiveChatId),
  "company-cyc": createWorkspaceData(),
  "company-nexo": createWorkspaceData(),
});

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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const normalizeChat = (value: unknown): Chat | null => {
  if (!isRecord(value)) return null;
  if (
    typeof value.id !== "string" ||
    typeof value.title !== "string" ||
    typeof value.favorite !== "boolean" ||
    typeof value.updatedAt !== "string" ||
    !Array.isArray(value.messages)
  ) {
    return null;
  }

  const messages = value.messages.filter(isRecord).filter((message) => {
    return (
      typeof message.id === "string" &&
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      typeof message.createdAt === "string" &&
      (message.status === "complete" ||
        message.status === "running" ||
        message.status === "incomplete")
    );
  }) as Array<Record<string, unknown>>;

  const icon =
    typeof value.icon === "string" && isChatIconName(value.icon) ? value.icon : undefined;
  const iconColor =
    typeof value.iconColor === "string" && isChatColorName(value.iconColor)
      ? value.iconColor
      : undefined;

  return {
    id: value.id,
    title: value.title,
    favorite: value.favorite,
    ...(icon ? { icon } : {}),
    ...(iconColor ? { iconColor } : {}),
    updatedAt: value.updatedAt,
    messages: messages.map((message) => ({
      id: message.id as string,
      role: message.role as Message["role"],
      content: message.content as string,
      createdAt: message.createdAt as string,
      status: message.status as MessageStatus,
    })),
  };
};

const dedupeChats = (values: unknown): Chat[] => {
  if (!Array.isArray(values)) return [];
  const seen = new Set<string>();
  const chats: Chat[] = [];

  for (const value of values) {
    const chat = normalizeChat(value);
    if (!chat || seen.has(chat.id)) continue;
    seen.add(chat.id);
    chats.push(chat);
  }

  return chats;
};

const normalizeWorkspaceData = (value: unknown, fallback: WorkspaceData): WorkspaceData => {
  if (!isRecord(value)) return fallback;

  const chats = dedupeChats(value.chats);
  const activeChatId = typeof value.activeChatId === "string" ? value.activeChatId : null;
  const users = Array.isArray(value.users) ? (value.users as WorkspaceUser[]) : [];
  const recentTools = Array.isArray(value.recentTools) ? (value.recentTools as ToolVisit[]) : [];
  const preferences = isRecord(value.preferences)
    ? ({
        selectedModelId:
          typeof value.preferences.selectedModelId === "string"
            ? value.preferences.selectedModelId
            : fallback.preferences.selectedModelId,
      } satisfies WorkspacePreferences)
    : fallback.preferences;

  return {
    chats,
    activeChatId: chats.some((chat) => chat.id === activeChatId)
      ? activeChatId
      : (chats[0]?.id ?? null),
    users,
    recentTools,
    preferences,
  };
};

const normalizePersistedState = (
  value: unknown,
  fallbackWorkspaces: Record<CompanyId, WorkspaceData>,
): PersistedWorkspaceState => {
  if (!isRecord(value)) {
    return {
      activeCompanyId: DEFAULT_COMPANY_ID,
      workspaces: fallbackWorkspaces,
      legacyMigrationComplete: false,
    };
  }

  const activeCompanyId =
    typeof value.activeCompanyId === "string" && isCompanyId(value.activeCompanyId)
      ? value.activeCompanyId
      : DEFAULT_COMPANY_ID;
  const persistedWorkspaces = isRecord(value.workspaces) ? value.workspaces : {};
  const workspaces = {
    "company-main": normalizeWorkspaceData(
      persistedWorkspaces["company-main"],
      fallbackWorkspaces["company-main"],
    ),
    "company-cyc": normalizeWorkspaceData(
      persistedWorkspaces["company-cyc"],
      fallbackWorkspaces["company-cyc"],
    ),
    "company-nexo": normalizeWorkspaceData(
      persistedWorkspaces["company-nexo"],
      fallbackWorkspaces["company-nexo"],
    ),
  } satisfies Record<CompanyId, WorkspaceData>;

  return {
    activeCompanyId,
    workspaces,
    legacyMigrationComplete: value.legacyMigrationComplete === true,
  };
};

export const filterChats = (chats: readonly Chat[], query: string): Chat[] => {
  const normalizedQuery = query
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
  if (!normalizedQuery) return [...chats];

  return chats.filter((chat) => {
    const searchableText = [chat.title, ...chat.messages.map((message) => message.content)]
      .join(" ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
};

const resolveCompanyId = (state: WorkspaceStore, companyId?: CompanyId) =>
  companyId ?? state.activeCompanyId;

const updateWorkspace = (
  state: WorkspaceStore,
  companyId: CompanyId,
  updater: (workspace: WorkspaceData) => WorkspaceData,
) => {
  const workspace = state.workspaces[companyId];
  if (!workspace) return {};

  return {
    workspaces: {
      ...state.workspaces,
      [companyId]: updater(workspace),
    },
  };
};

const createWorkspaceStoreState =
  (initialState: PersistedWorkspaceState): StateCreator<WorkspaceStore> =>
  (set, get) => ({
    ...initialState,
    switchCompany: (companyId) => {
      if (isCompanyId(companyId)) set({ activeCompanyId: companyId });
    },
    createChat: (companyId) => {
      const targetCompanyId = companyId ?? get().activeCompanyId;
      const chat = createEmptyChat();
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: [chat, ...workspace.chats],
          activeChatId: chat.id,
        })),
      );
      return chat.id;
    },
    selectChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) => {
        const workspace = state.workspaces[targetCompanyId];
        if (!workspace || !workspace.chats.some((chat) => chat.id === chatId)) return {};
        return updateWorkspace(state, targetCompanyId, (current) => ({
          ...current,
          activeChatId: chatId,
        }));
      });
    },
    toggleFavorite: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
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
      );
    },
    setChatIcon: (chatId, icon, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) => (chat.id === chatId ? { ...chat, icon } : chat)),
        })),
      );
    },
    setChatColor: (chatId, iconColor, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId ? { ...chat, iconColor } : chat,
          ),
        })),
      );
    },
    setChatTitle: (chatId, title, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId ? { ...chat, title: title.trim() || "Nuevo chat" } : chat,
          ),
        })),
      );
    },
    deleteChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => {
          const remainingChats = workspace.chats.filter((chat) => chat.id !== chatId);
          if (remainingChats.length === 0) {
            const replacement = createEmptyChat();
            return {
              ...workspace,
              chats: [replacement],
              activeChatId: replacement.id,
            };
          }

          return {
            ...workspace,
            chats: remainingChats,
            activeChatId:
              workspace.activeChatId === chatId
                ? (remainingChats[0]?.id ?? null)
                : workspace.activeChatId,
          };
        }),
      );
    },
    setChatMessages: (chatId, messages, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId ? { ...chat, messages, updatedAt: new Date().toISOString() } : chat,
          ),
        })),
      );
    },
    setMessageContent: (chatId, messageId, content, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
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
      );
    },
    setMessageStatus: (chatId, messageId, status, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
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
      );
    },
    setSelectedModel: (modelId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          preferences: {
            ...workspace.preferences,
            selectedModelId: modelId,
          },
        })),
      );
    },
    addUser: (user, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      const newUser: WorkspaceUser = {
        ...user,
        id: createId("user"),
        createdAt: new Date().toISOString(),
      };
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          users: [newUser, ...workspace.users],
        })),
      );
      return newUser.id;
    },
    recordToolVisit: (toolId, companyId) => {
      if (!getTool(toolId)) return;
      const targetCompanyId = resolveCompanyId(get(), companyId);
      const visit: ToolVisit = { toolId, visitedAt: new Date().toISOString() };
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          recentTools: [
            visit,
            ...workspace.recentTools.filter((item) => item.toolId !== toolId),
          ].slice(0, 8),
        })),
      );
    },
    migrateLegacyChatState: () => {
      if (typeof window === "undefined" || get().legacyMigrationComplete) return;

      let legacyChats: Chat[] | null = null;
      let legacyActiveChatId: string | null = null;
      try {
        const raw = window.localStorage.getItem("powermeta4-chat-store");
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (isRecord(parsed) && isRecord(parsed.state)) {
            legacyChats = dedupeChats(parsed.state.chats);
            legacyActiveChatId =
              typeof parsed.state.activeChatId === "string" ? parsed.state.activeChatId : null;
          }
        }
      } catch {
        legacyChats = null;
        legacyActiveChatId = null;
      }

      if (legacyChats && legacyChats.length > 0) {
        const activeChatId = legacyChats.some((chat) => chat.id === legacyActiveChatId)
          ? legacyActiveChatId
          : (legacyChats[0]?.id ?? null);
        set((state) => ({
          workspaces: {
            ...state.workspaces,
            [DEFAULT_COMPANY_ID]: {
              ...state.workspaces[DEFAULT_COMPANY_ID],
              chats: legacyChats,
              activeChatId,
            },
          },
          legacyMigrationComplete: true,
        }));
      } else {
        set({ legacyMigrationComplete: true });
      }

      try {
        window.localStorage.removeItem("powermeta4-chat-store");
      } catch {
        // A restricted storage implementation must not prevent the app from loading.
      }
    },
  });

export const createWorkspaceStore = (
  initialWorkspaces = createInitialWorkspaces(),
  activeCompanyId: CompanyId = DEFAULT_COMPANY_ID,
): StoreApi<WorkspaceStore> =>
  createStore<WorkspaceStore>()(
    createWorkspaceStoreState({
      activeCompanyId,
      workspaces: initialWorkspaces,
      legacyMigrationComplete: true,
    }),
  );

export const createPersistedWorkspaceStore = (
  initialWorkspaces = createInitialWorkspaces(),
  activeCompanyId: CompanyId = DEFAULT_COMPANY_ID,
  storage?: PersistStorage<PersistedWorkspaceState>,
) => {
  const resolvedStorage =
    storage ??
    (typeof window === "undefined"
      ? createMemoryStorage()
      : createJSONStorage<PersistedWorkspaceState>(() => window.localStorage));

  return createStore<WorkspaceStore>()(
    persist(
      createWorkspaceStoreState({
        activeCompanyId,
        workspaces: initialWorkspaces,
        legacyMigrationComplete: false,
      }),
      {
        name: "powermeta4-workspace-store",
        storage: resolvedStorage,
        skipHydration: true,
        version: 2,
        migrate: (persistedState) => normalizePersistedState(persistedState, initialWorkspaces),
        partialize: ({ activeCompanyId: companyId, workspaces, legacyMigrationComplete }) => ({
          activeCompanyId: companyId,
          workspaces,
          legacyMigrationComplete,
        }),
      },
    ),
  );
};

export const getWorkspace = (state: WorkspaceStore, companyId?: CompanyId) =>
  state.workspaces[companyId ?? state.activeCompanyId];
