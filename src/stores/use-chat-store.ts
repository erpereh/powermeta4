"use client";

import { useStore } from "zustand";

import { mockChats } from "@/data/mock-chats";
import { createPersistedChatStore, type ChatStore } from "@/stores/chat-store";

export const chatStore = createPersistedChatStore(mockChats, "chat-welcome");

export const useChatStore = <T>(selector: (state: ChatStore) => T): T =>
  useStore(chatStore, selector);
