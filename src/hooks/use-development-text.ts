"use client";

import { useSyncExternalStore } from "react";

import {
  DEFAULT_HIDE_DEVELOPMENT_TEXT,
  DEVELOPMENT_TEXT_ATTRIBUTE,
  DEVELOPMENT_TEXT_STORAGE_KEY,
} from "@/lib/theme/development-text";

const CHANGE_EVENT = "powermeta4-development-text-change";

function subscribe(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== DEVELOPMENT_TEXT_STORAGE_KEY) return;
    document.documentElement.setAttribute(
      DEVELOPMENT_TEXT_ATTRIBUTE,
      String(event.newValue !== "false"),
    );
    listener();
  };
  window.addEventListener(CHANGE_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  return document.documentElement.getAttribute(DEVELOPMENT_TEXT_ATTRIBUTE) !== "false";
}

function setHidden(hidden: boolean) {
  document.documentElement.setAttribute(DEVELOPMENT_TEXT_ATTRIBUTE, String(hidden));
  try {
    localStorage.setItem(DEVELOPMENT_TEXT_STORAGE_KEY, String(hidden));
  } catch {
    // The preference still applies to the current page when storage is unavailable.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useDevelopmentText(): readonly [boolean, (hidden: boolean) => void] {
  return [
    useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT_HIDE_DEVELOPMENT_TEXT),
    setHidden,
  ];
}
