"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { UserRound } from "lucide-react";

import { searchPortalDirectoryAction } from "@/app/actions/portal";
import type { CommandItem } from "@/components/system";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import { getPortalDomain, PORTAL_FEATURES } from "@/lib/portal/registry";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

import { PORTAL_ICONS } from "./portal-icons";

const DEBOUNCE_MS = 250;

/**
 * Elementos del buscador del portal: funciones del registro y personas del
 * directorio (literal original: «Buscar empleados, opciones de menú y tareas
 * pendientes»). Las respuestas de otra sociedad se descartan.
 */
export function usePortalCommandItems({ navigate }: { navigate: (href: string) => void }) {
  const society = useWorkspaceStore((state) => state.auth?.societyCode ?? null);
  const [people, setPeople] = useState<readonly DirectoryEntry[]>([]);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const requestRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const onQueryChange = useCallback(
    (query: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      const text = query.trim();
      const request = ++requestRef.current;
      if (text.length === 0) {
        setPeople([]);
        setStatus(undefined);
        return;
      }
      if (text.length < 2) {
        setPeople([]);
        setStatus("Introduzca por lo menos dos caracteres para buscar personas.");
        return;
      }
      setStatus("Buscando personas…");
      timerRef.current = setTimeout(() => {
        void searchPortalDirectoryAction(text).then((result) => {
          if (request !== requestRef.current) return;
          if (result.status === "ok") {
            if (society && result.society !== society) return;
            setPeople(result.data);
            setStatus(result.data.length === 0 ? "Ninguna persona coincide." : undefined);
          } else {
            setPeople([]);
            setStatus(result.message);
          }
        });
      }, DEBOUNCE_MS);
    },
    [society],
  );

  const items = useMemo<CommandItem[]>(() => {
    const features = PORTAL_FEATURES.map((feature) => ({
      id: `portal:${feature.id}`,
      label: feature.title,
      group: getPortalDomain(feature.domain)?.title ?? "Portal",
      hint: feature.profile === "responsable" ? "Responsable" : undefined,
      keywords: [feature.summary, ...(feature.keywords ?? [])],
      icon: PORTAL_ICONS[feature.icon],
      onSelect: () => navigate(feature.route),
    }));
    const persons = people.map((person) => ({
      id: `persona:${person.employeeId}`,
      label: person.fullName,
      group: "Personas",
      hint: person.job ?? undefined,
      keywords: [person.job ?? "", person.unit ?? "", person.email ?? "", person.employeeId],
      icon: UserRound,
      onSelect: () =>
        navigate(`/portal/organizacion/personas/${encodeURIComponent(person.employeeId)}`),
    }));
    return [...persons, ...features];
  }, [navigate, people]);

  return { items, onQueryChange, status };
}
