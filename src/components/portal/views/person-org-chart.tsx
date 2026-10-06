"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Focus,
  Maximize2,
  Minus,
  Plus,
  Scan,
  X,
} from "lucide-react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Avatar, Button, Modal } from "@/components/system";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import type { PersonFile } from "@/lib/portal/data/organization";
import type { PersonHierarchy, ManagerStatus } from "@/lib/portal/data/person-hierarchy-core";
import {
  orgChartHref,
  orgExpandedHref,
  orgExpandedPeople,
} from "@/lib/portal/organization-navigation";
import {
  isPersonHierarchy,
  isPublicPersonFile,
  loadOrganization,
} from "@/lib/portal/organization-client";
import { CARD_HEIGHT, CARD_WIDTH, layoutOrgChart } from "@/lib/portal/org-chart-layout";
import { useWorkspaceStore, workspaceStore } from "@/stores/use-workspace-store";
import { useIsMobile } from "@/hooks/use-mobile";
import { FileSections } from "./person-file";
import { useOrgCamera } from "./use-org-camera";

const linkClass =
  "inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring";
const managerMessages: Record<Exclude<ManagerStatus, "available">, string> = {
  none: "No hay responsable informado.",
  missing: "El responsable no está disponible en esta sociedad.",
  ambiguous: "Las asignaciones indican responsables distintos; no se puede subir a uno de ellos.",
  self: "La persona figura como su propio responsable; no se muestra esa relación.",
};
type LoadState = { status: "loading" } | { status: "error"; message: string };

export function OrgTreeLink({ route }: { route: string }) {
  const params = new URLSearchParams(useSearchParams().toString());
  return (
    <Link href={orgChartHref(route, params)} className={linkClass}>
      <ArrowLeft className="size-4" aria-hidden="true" /> Volver al organigrama
    </Link>
  );
}

function PersonCard({
  person,
  root,
  expanded,
  team,
  state,
  toggle,
  info,
  infoId,
}: {
  person: DirectoryEntry;
  root: boolean;
  expanded: boolean;
  team?: PersonHierarchy;
  state?: LoadState;
  toggle: () => void;
  info: () => void;
  infoId: string;
}) {
  const empty = team?.reports.length === 0;
  return (
    <article
      className="flex h-full w-full flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center shadow-sm"
      aria-label={person.fullName}
    >
      <button
        id={infoId}
        type="button"
        onClick={info}
        aria-label={`Ver información de ${person.fullName}`}
        className="flex w-full min-w-0 flex-col items-center gap-2 rounded-lg outline-none hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Avatar
          key={person.key}
          name={person.fullName}
          src={`/api/portal/photos/${encodeURIComponent(person.employeeId)}`}
          className="size-14 text-lg"
        />
        <span className="line-clamp-2 text-sm font-semibold text-foreground">
          {person.fullName}
        </span>
      </button>
      <p className="line-clamp-3 w-full break-words text-xs text-muted-foreground">
        {person.job ?? "Puesto no informado"}
      </p>
      {root ? <span className="text-xs text-muted-foreground">Persona seleccionada</span> : null}
      <div className="mt-auto flex w-full flex-col gap-1">
        {empty ? (
          <span className="text-xs text-muted-foreground">Sin subordinados</span>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            disabled={state?.status === "loading"}
            aria-expanded={expanded}
            aria-label={`${state?.status === "error" ? "Reintentar" : expanded ? "Contraer" : "Desplegar"} equipo de ${person.fullName}`}
            onClick={toggle}
          >
            {expanded ? (
              <ChevronUp className="size-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="size-4" aria-hidden="true" />
            )}
            {state?.status === "loading"
              ? "Cargando equipo…"
              : state?.status === "error"
                ? "Reintentar equipo"
                : expanded
                  ? "Contraer equipo"
                  : "Desplegar equipo"}
          </Button>
        )}
        {state?.status === "error" ? (
          <p role="status" className="line-clamp-2 text-xs text-destructive">
            {state.message}
          </p>
        ) : null}
        {team && team.omittedReports > 0 ? (
          <p className="text-xs text-muted-foreground">Relaciones ambiguas omitidas.</p>
        ) : null}
      </div>
    </article>
  );
}

/** Reinicia todo dato temporal al cambiar de raíz, sociedad o workspace. */
export function PersonOrgChart({
  hierarchy,
  route,
}: {
  hierarchy: PersonHierarchy | null;
  route: string;
}) {
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const society = useWorkspaceStore((state) => state.auth?.societyCode ?? null);
  if (!hierarchy)
    return (
      <div className="flex flex-col items-start gap-4">
        <OrgTreeLink route={route} />
        <p role="status" className="text-sm text-muted-foreground">
          La persona no está disponible en el organigrama de esta sociedad.
        </p>
      </div>
    );
  if (society && society !== hierarchy.person.society)
    return <p role="status">Cargando el organigrama de la sociedad seleccionada…</p>;
  return (
    <OrgChartSession
      key={JSON.stringify([companyId, hierarchy.person.key, route])}
      hierarchy={hierarchy}
      route={route}
      companyId={companyId}
    />
  );
}

function OrgChartSession({
  hierarchy,
  route,
  companyId,
}: {
  hierarchy: PersonHierarchy;
  route: string;
  companyId: string | null;
}) {
  const search = useSearchParams().toString();
  const root = hierarchy.person;
  const expanded = useMemo(
    () => orgExpandedPeople(new URLSearchParams(search), root.employeeId),
    [search, root.employeeId],
  );
  const [teams, setTeams] = useState(() => new Map([[root.employeeId, hierarchy]]));
  const [teamStates, setTeamStates] = useState<ReadonlyMap<string, LoadState>>(() => new Map());
  const [files, setFiles] = useState<ReadonlyMap<string, PersonFile>>(() => new Map());
  const [fileStates, setFileStates] = useState<ReadonlyMap<string, LoadState>>(() => new Map());
  const [selectedInfo, setSelectedInfo] = useState<DirectoryEntry | null>(null);
  const [enlarged, setEnlarged] = useState(false);
  const [anchorId, setAnchorId] = useState<string | null>(null);
  const requests = useRef(new Map<string, AbortController>());
  const active = useRef(true);
  const infoTrigger = useRef<HTMLElement | null>(null);
  const enlargeTrigger = useRef<HTMLButtonElement>(null);
  const panelClose = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const mobile = useIsMobile();
  const layout = useMemo(() => layoutOrgChart(root, teams, expanded), [root, teams, expanded]);
  const restored = layout.nodes.every(
    (node) =>
      !expanded.has(node.person.employeeId) ||
      teams.has(node.person.employeeId) ||
      teamStates.get(node.person.employeeId)?.status === "error",
  );
  const view = useOrgCamera(layout, anchorId, restored);

  useEffect(() => {
    active.current = true;
    // StrictMode puede abortar y montar otra vez el mismo estado: se reintentan esas cargas.
    setTeamStates(
      (current) => new Map([...current].filter(([, value]) => value.status !== "loading")),
    );
    setFileStates(
      (current) => new Map([...current].filter(([, value]) => value.status !== "loading")),
    );
    const pending = requests.current;
    return () => {
      active.current = false;
      pending.forEach((request) => request.abort());
      pending.clear();
    };
  }, []);
  const load = useCallback(
    (person: DirectoryEntry, kind: "hierarchy" | "person") => {
      const id = person.employeeId;
      const key = `${kind}:${id}`;
      if (requests.current.has(key)) return;
      const controller = new AbortController();
      requests.current.set(key, controller);
      const setState = kind === "hierarchy" ? setTeamStates : setFileStates;
      setState((current) => new Map(current).set(id, { status: "loading" }));
      const alive = () =>
        active.current &&
        !controller.signal.aborted &&
        workspaceStore.getState().activeCompanyId === companyId;
      const promise =
        kind === "hierarchy"
          ? loadOrganization(id, kind, root.society, controller.signal, isPersonHierarchy).then(
              (data) => {
                if (!alive()) return;
                if (
                  data.person.employeeId !== id ||
                  data.person.society !== root.society ||
                  data.reports.some((entry) => entry.society !== root.society)
                )
                  throw new Error("La respuesta no corresponde al equipo solicitado.");
                setTeams((current) => new Map(current).set(id, data));
              },
            )
          : loadOrganization(id, kind, root.society, controller.signal, isPublicPersonFile).then(
              (data) => {
                if (!alive()) return;
                if (data.person.employeeId !== id || data.person.society !== root.society)
                  throw new Error("La respuesta no corresponde a la persona solicitada.");
                setFiles((current) => new Map(current).set(id, data));
              },
            );
      void promise
        .then(() => {
          if (alive())
            setState((current) => {
              const next = new Map(current);
              next.delete(id);
              return next;
            });
        })
        .catch((error: unknown) => {
          if (alive())
            setState((current) =>
              new Map(current).set(id, {
                status: "error",
                message:
                  error instanceof Error ? error.message : "No se ha podido completar la consulta.",
              }),
            );
        })
        .finally(() => {
          if (requests.current.get(key) === controller) requests.current.delete(key);
        });
    },
    [companyId, root.society],
  );
  useEffect(() => {
    for (const node of layout.nodes) {
      if (
        expanded.has(node.person.employeeId) &&
        !teams.has(node.person.employeeId) &&
        !teamStates.has(node.person.employeeId)
      )
        load(node.person, "hierarchy");
    }
  }, [layout, expanded, teams, teamStates, load]);
  useEffect(() => {
    if (selectedInfo) panelClose.current?.focus();
  }, [selectedInfo, enlarged]);

  const toggle = (person: DirectoryEntry) => {
    setAnchorId(person.employeeId);
    if (teamStates.get(person.employeeId)?.status === "error") {
      load(person, "hierarchy");
      return;
    }
    const next = new Set(expanded);
    if (next.has(person.employeeId)) next.delete(person.employeeId);
    else next.add(person.employeeId);
    window.history.pushState(
      null,
      "",
      orgExpandedHref(route, new URLSearchParams(search), root.employeeId, next),
    );
  };
  const info = (person: DirectoryEntry) => {
    infoTrigger.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedInfo(person);
    if (!files.has(person.employeeId) && fileStates.get(person.employeeId)?.status !== "loading")
      load(person, "person");
  };
  const closeInfo = () => {
    setSelectedInfo(null);
    requestAnimationFrame(() => {
      if (infoTrigger.current?.isConnected) infoTrigger.current.focus();
      else document.getElementById(`${panelId}-person-${selectedInfo?.employeeId}`)?.focus();
    });
  };
  const changeEnlarged = useCallback((open: boolean) => {
    setEnlarged(open);
    if (!open) requestAnimationFrame(() => enlargeTrigger.current?.focus());
  }, []);
  const file = selectedInfo ? files.get(selectedInfo.employeeId) : undefined;
  const fileState = selectedInfo ? fileStates.get(selectedInfo.employeeId) : undefined;
  const nodeMap = new Map(layout.nodes.map((node) => [node.person.employeeId, node]));
  const body = (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3">
      <div
        className="flex shrink-0 flex-wrap items-center gap-2"
        aria-label="Controles del organigrama"
      >
        <Button
          variant="secondary"
          size="icon"
          aria-label="Alejar"
          disabled={view.camera.scale <= 0.2}
          onClick={() => view.zoom(1 / 1.2)}
        >
          <Minus className="size-4" aria-hidden="true" />
        </Button>
        <output className="w-12 text-center text-xs tabular-nums" aria-label="Zoom">
          {Math.round(view.camera.scale * 100)}%
        </output>
        <Button
          variant="secondary"
          size="icon"
          aria-label="Acercar"
          disabled={view.camera.scale >= 2}
          onClick={() => view.zoom(1.2)}
        >
          <Plus className="size-4" aria-hidden="true" />
        </Button>
        <Button variant="secondary" size="sm" onClick={view.center}>
          <Focus className="size-4" aria-hidden="true" /> Centrar persona
        </Button>
        <Button variant="secondary" size="sm" onClick={view.fit}>
          <Scan className="size-4" aria-hidden="true" /> Ajustar gráfico
        </Button>
        {!enlarged ? (
          <Button
            ref={enlargeTrigger}
            variant="secondary"
            size="sm"
            aria-haspopup="dialog"
            onClick={() => changeEnlarged(true)}
          >
            <Maximize2 className="size-4" aria-hidden="true" /> Ampliar ventana
          </Button>
        ) : null}
      </div>
      <p className="shrink-0 text-xs text-muted-foreground">
        Arrastra el fondo para moverte. Usa la rueda para acercar o alejar; en táctil, dos dedos.
        Con foco en el lienzo: flechas, +, − y 0.
      </p>
      <div
        className={`relative flex min-h-0 min-w-0 overflow-hidden rounded-xl border border-border ${enlarged ? "flex-1" : "h-[clamp(24rem,65dvh,46rem)]"}`}
      >
        <div
          ref={view.setViewport}
          inert={mobile && !!selectedInfo}
          role="region"
          aria-label={`Jerarquía de ${root.fullName}`}
          tabIndex={0}
          {...view.handlers}
          className={`relative min-h-0 min-w-0 flex-1 touch-none select-none overflow-clip bg-muted/20 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${view.dragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <div
            data-org-camera=""
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: layout.width,
              height: layout.height,
              transform: `translate(${view.camera.x}px, ${view.camera.y}px) scale(${view.camera.scale})`,
            }}
          >
            <svg
              width={layout.width}
              height={layout.height}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-visible text-border"
            >
              {layout.nodes.map((node) => {
                const parent = node.parentId ? nodeMap.get(node.parentId) : undefined;
                if (!parent) return null;
                const px = parent.x + CARD_WIDTH / 2,
                  py = parent.y + CARD_HEIGHT,
                  x = node.x + CARD_WIDTH / 2;
                const midY = (py + node.y) / 2;
                return (
                  <path
                    key={node.person.key}
                    d={`M ${px} ${py} V ${midY} H ${x} V ${node.y}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
            {layout.nodes.map((node) => (
              <div
                key={node.person.key}
                style={{
                  position: "absolute",
                  left: node.x,
                  top: node.y,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                }}
              >
                <PersonCard
                  person={node.person}
                  infoId={`${panelId}-person-${node.person.employeeId}`}
                  root={node.depth === 0}
                  expanded={expanded.has(node.person.employeeId)}
                  team={teams.get(node.person.employeeId)}
                  state={teamStates.get(node.person.employeeId)}
                  toggle={() => toggle(node.person)}
                  info={() => info(node.person)}
                />
              </div>
            ))}
          </div>
        </div>
        {selectedInfo ? (
          <aside
            id={panelId}
            aria-label={`Información de ${selectedInfo.fullName}`}
            className="absolute inset-0 z-10 flex min-h-0 flex-col border-l border-border bg-background md:static md:w-80 md:shrink-0"
          >
            <header className="flex shrink-0 items-start gap-2 border-b border-border p-4">
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold">{selectedInfo.fullName}</h2>
                <p className="text-xs text-muted-foreground">Información de directorio</p>
              </div>
              <Button
                ref={panelClose}
                variant="ghost"
                size="icon"
                aria-label="Cerrar información"
                onClick={closeInfo}
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </header>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">
              {file ? (
                <FileSections sections={file.sections} compact />
              ) : fileState?.status === "error" ? (
                <div className="space-y-3">
                  <p role="status" className="text-sm">
                    {fileState.message}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => load(selectedInfo, "person")}
                  >
                    Reintentar ficha
                  </Button>
                </div>
              ) : (
                <p role="status" className="text-sm text-muted-foreground">
                  Cargando información…
                </p>
              )}
            </div>
          </aside>
        ) : null}
      </div>
      {layout.cycleIds.size > 0 ? (
        <p role="status" className="text-xs text-muted-foreground">
          Hay relaciones circulares; esas conexiones no se muestran.
        </p>
      ) : null}
    </div>
  );
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <OrgTreeLink route={route} />
        {hierarchy.manager ? (
          <Link
            href={orgChartHref(route, new URLSearchParams(search), hierarchy.manager.employeeId)}
            prefetch={false}
            className={linkClass}
            aria-label={`Subir al responsable: ${hierarchy.manager.fullName}`}
          >
            <ArrowUp className="size-4" aria-hidden="true" /> Subir al responsable
          </Link>
        ) : null}
      </div>
      {hierarchy.managerStatus !== "available" ? (
        <p role="status" className="text-sm text-muted-foreground">
          {managerMessages[hierarchy.managerStatus]}
        </p>
      ) : null}
      {hierarchy.reports.length === 0 ? (
        <p role="status" className="text-sm text-muted-foreground">
          Sin dependientes directos disponibles.
        </p>
      ) : null}
      {hierarchy.omittedReports > 0 ? (
        <p role="status" className="text-sm text-muted-foreground">
          Hay asignaciones con responsables contradictorios. Esas relaciones no se muestran.
        </p>
      ) : null}
      {enlarged ? (
        <div className="flex h-32 items-center justify-center rounded-xl border border-border text-sm text-muted-foreground">
          Organigrama abierto en la ventana ampliada.
        </div>
      ) : (
        body
      )}
      <Modal
        open={enlarged}
        onOpenChange={changeEnlarged}
        size="viewport"
        title={`Organigrama de ${root.fullName}`}
      >
        {enlarged ? body : null}
      </Modal>
    </div>
  );
}
