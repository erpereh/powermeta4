"use client";

import { useCallback, useMemo, useRef, useState, type FocusEvent } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import {
  Avatar,
  Button,
  Callout,
  Modal,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/system";
import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";
import type { Meta4HireIssue } from "@/lib/meta4/hire/errors";
import type { HirePersonInput } from "@/lib/meta4/hire/types";
import {
  collectHirePersonIssues,
  type HireFieldIssue,
  type HireValidationContext,
} from "@/lib/meta4/hire/validate";

import { HireCatalogsProvider } from "./hire-form/catalogs";
import { DevTestDataControls } from "./hire-form/dev-test-controls";
import {
  createHirePersonDraft,
  HireDraftProvider,
  toHirePersonInput,
  type HireBranches,
  type HireDraftActions,
  type HirePersonDraft,
  type PendingValueKey,
} from "./hire-form/draft";
import type { CurrentFieldId, PendingFieldId } from "./hire-form/field-metadata";
import {
  HIRE_TABS,
  HireIssuesProvider,
  hireIssueTab,
  type HireIssueMap,
  type HireTabId,
} from "./hire-form/issues";
import { OrganizationSection } from "./hire-form/organization-section";
import { PaymentSection } from "./hire-form/payment-section";
import { PayrollSection } from "./hire-form/payroll-section";
import { PersonalSection } from "./hire-form/personal-section";
import { SocialSecuritySection } from "./hire-form/social-security-section";

const errorMessage = (caught: unknown): string =>
  caught instanceof Error ? caught.message : "Revisa los datos indicados.";

const personFullName = (person: HirePersonInput): string =>
  [person.firstName, person.lastName1, person.lastName2]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ");

/** Field problems stay hidden until the field is left or the person is validated. */
type PersonFeedback = { attempted: boolean; touched: readonly string[] };

type FormError = { message: string; issues: readonly Meta4HireIssue[] };

const ENTRY_SEPARATOR = "\u0001";
const FIELD_SEPARATOR = "\u0000";

/** Same map for the same visible problems, so memoized fields do not re-render per key. */
const useIssueMap = (issues: readonly HireFieldIssue[]): HireIssueMap => {
  const key = issues
    .map((issue) => `${issue.field}${FIELD_SEPARATOR}${issue.message}`)
    .join(ENTRY_SEPARATOR);
  return useMemo(
    () =>
      new Map(
        key
          ? key.split(ENTRY_SEPARATOR).map((entry) => {
              const [field = "", message = ""] = entry.split(FIELD_SEPARATOR);
              return [field, message] as const;
            })
          : [],
      ),
    [key],
  );
};

const issueKeysOf = (target: EventTarget): readonly string[] => {
  if (!(target instanceof HTMLElement)) return [];
  const keys = target.closest<HTMLElement>("[data-hire-issue-keys]")?.dataset.hireIssueKeys;
  if (!keys) return [];
  const all = keys.split(" ").filter(Boolean);
  const name = target.getAttribute("name");
  return name && all.includes(name) ? [name] : all;
};

export function UsersHireForm({ catalogs }: { catalogs: HireCatalogState }) {
  const [people, setPeople] = useState<HirePersonDraft[]>([createHirePersonDraft(1)]);
  const [expandedId, setExpandedId] = useState(1);
  const [activeTab, setActiveTab] = useState<string>("personal");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<FormError | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Readonly<Record<number, PersonFeedback>>>({});
  const nextId = useRef(2);

  const validationContext = useMemo<HireValidationContext>(
    () => (catalogs.status === "ready" ? { documentTypes: catalogs.catalogs.documentType } : {}),
    [catalogs],
  );
  const issuesOf = useCallback(
    (draft: HirePersonDraft): readonly HireFieldIssue[] =>
      collectHirePersonIssues(toHirePersonInput(draft), validationContext).issues,
    [validationContext],
  );

  const expandedDraft = people.find((person) => person.id === expandedId);
  const expandedIssues = useMemo(
    () => (expandedDraft ? issuesOf(expandedDraft) : []),
    [expandedDraft, issuesOf],
  );
  const expandedFeedback = feedback[expandedId];
  const visibleIssues = useMemo(
    () =>
      expandedIssues.filter(
        (issue) => expandedFeedback?.attempted || expandedFeedback?.touched.includes(issue.field),
      ),
    [expandedFeedback, expandedIssues],
  );
  const issueMap = useIssueMap(visibleIssues);
  const tabIssueCounts = useMemo(() => {
    const counts = new Map<HireTabId, number>();
    for (const issue of visibleIssues) {
      const tab = hireIssueTab(issue.field);
      counts.set(tab, (counts.get(tab) ?? 0) + 1);
    }
    return counts;
  }, [visibleIssues]);

  const markTouched = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      const keys = issueKeysOf(event.target);
      if (keys.length === 0) return;
      setFeedback((current) => {
        const previous = current[expandedId] ?? { attempted: false, touched: [] };
        if (keys.every((key) => previous.touched.includes(key))) return current;
        return {
          ...current,
          [expandedId]: { ...previous, touched: [...new Set([...previous.touched, ...keys])] },
        };
      });
    },
    [expandedId],
  );

  const markAttempted = (ids: readonly number[]) => {
    setFeedback((current) => {
      const next = { ...current };
      for (const id of ids) next[id] = { touched: next[id]?.touched ?? [], attempted: true };
      return next;
    });
  };

  const confirmation = useMemo(
    () => `Se van a procesar ${people.length} personas en Meta4`,
    [people.length],
  );

  const updateDraft = useCallback(
    (id: number, update: (draft: HirePersonDraft) => HirePersonDraft) => {
      setPeople((current) => current.map((draft) => (draft.id === id ? update(draft) : draft)));
    },
    [],
  );

  // Bound to the expanded person and stable while it stays expanded, so memoized
  // fields keep their callbacks when another field changes.
  const draftActions = useMemo<HireDraftActions>(
    () => ({
      onCurrentChange: (field: CurrentFieldId, value: string) =>
        updateDraft(expandedId, (draft) => ({
          ...draft,
          current: { ...draft.current, [field]: value },
        })),
      onPendingChange: (field: PendingValueKey, value: string) =>
        updateDraft(expandedId, (draft) => ({
          ...draft,
          pendingValues: { ...draft.pendingValues, [field]: value },
        })),
      onCheckChange: (field: PendingFieldId, checked: boolean) =>
        updateDraft(expandedId, (draft) => ({
          ...draft,
          pendingChecks: { ...draft.pendingChecks, [field]: checked },
        })),
      onBranchChange: <K extends keyof HireBranches>(field: K, value: HireBranches[K]) =>
        updateDraft(expandedId, (draft) => ({
          ...draft,
          branches: { ...draft.branches, [field]: value },
        })),
    }),
    [expandedId, updateDraft],
  );

  /** Shows every problem of the person and opens the tab of the first one. */
  const revealIssues = (id: number, issues: readonly HireFieldIssue[]) => {
    markAttempted([id]);
    const index = people.findIndex((person) => person.id === id);
    setError({
      message: `Revisa ${issues.length === 1 ? "1 dato" : `${issues.length} datos`} de la Persona ${index + 1} antes de continuar.`,
      issues: [],
    });
    if (issues[0]) setActiveTab(hireIssueTab(issues[0].field));
  };

  const validateExpanded = (): boolean => {
    if (!expandedDraft) return false;
    if (expandedIssues.length > 0) {
      revealIssues(expandedId, expandedIssues);
      return false;
    }
    setError(null);
    return true;
  };

  const addPerson = () => {
    setSuccess(null);
    if (!validateExpanded()) return;
    const id = nextId.current++;
    setPeople((existing) => [...existing, createHirePersonDraft(id)]);
    setExpandedId(id);
    setActiveTab("personal");
  };

  const editPerson = (id: number) => {
    if (id === expandedId) return;
    if (!validateExpanded()) return;
    setExpandedId(id);
    setActiveTab("personal");
  };

  const removePerson = (id: number) => {
    if (people.length === 1) return;
    const removedIndex = people.findIndex((person) => person.id === id);
    const remaining = people.filter((person) => person.id !== id);
    setPeople(remaining);
    if (id === expandedId) {
      setExpandedId(remaining[Math.min(removedIndex, remaining.length - 1)].id);
      setActiveTab("personal");
    }
  };

  const currentPayload = (): HirePersonInput[] => people.map(toHirePersonInput);

  const requestConfirm = () => {
    setError(null);
    setSuccess(null);
    const withIssues = people
      .map((draft) => ({ draft, issues: issuesOf(draft) }))
      .filter((entry) => entry.issues.length > 0);
    const first = withIssues[0];
    if (!first) {
      setConfirmOpen(true);
      return;
    }
    markAttempted(withIssues.map((entry) => entry.draft.id));
    setExpandedId(first.draft.id);
    revealIssues(first.draft.id, first.issues);
    if (withIssues.length > 1) {
      const others = withIssues
        .slice(1)
        .map((entry) => people.indexOf(entry.draft) + 1)
        .join(", ");
      setError({
        message: `Revisa los datos marcados de la Persona ${people.indexOf(first.draft) + 1}. También hay datos por revisar en: Persona ${others}.`,
        issues: [],
      });
    }
  };

  const submitHire = async () => {
    setPending(true);
    setError(null);
    try {
      const result = await launchMeta4HireAction(currentPayload());
      if (!result.ok) {
        const issues = "issues" in result ? result.issues : [];
        const firstField = issues.find((issue) => issue.field && issue.person);
        if (firstField?.person) {
          const draft = people[firstField.person - 1];
          if (draft) {
            markAttempted([draft.id]);
            setExpandedId(draft.id);
            if (firstField.field) setActiveTab(hireIssueTab(firstField.field));
          }
          setConfirmOpen(false);
        }
        setError({
          message: firstField
            ? "Revisa los datos marcados antes de lanzar el alta."
            : result.message,
          issues: issues.filter((issue) => !issue.field),
        });
        return;
      }
      setSuccess(`Alta enviada correctamente · ${result.data.fileName}`);
      setPeople([createHirePersonDraft(nextId.current++)]);
      setExpandedId(nextId.current - 1);
      setActiveTab("personal");
      setConfirmOpen(false);
    } catch (caught) {
      setError({ message: errorMessage(caught), issues: [] });
    } finally {
      setPending(false);
    }
  };

  return (
    <HireCatalogsProvider value={catalogs}>
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-4 pt-5 sm:px-6">
        <Callout role="note" title="Borrador local hasta confirmar">
          Los rótulos rojos indican un mapping Excel por confirmar. Esos valores permanecen en el
          borrador local; los campos integrados se envían al confirmar el alta.
        </Callout>

        <div className="flex flex-col gap-3">
          {people.map((draft, index) => {
            const isExpanded = draft.id === expandedId;
            const name = personFullName(draft.current);
            const summary = [draft.current.documentNumber.trim(), draft.current.email.trim()]
              .filter(Boolean)
              .join(" · ");

            if (isExpanded) {
              return (
                <fieldset
                  key={draft.id}
                  onBlurCapture={markTouched}
                  className="min-w-0 rounded-xl border border-border bg-card p-4 text-card-foreground sm:p-5"
                >
                  <legend className="rounded-md bg-background px-2 text-sm font-semibold text-foreground">
                    Persona {index + 1}
                  </legend>
                  {process.env.NODE_ENV !== "production" ? (
                    <DevTestDataControls
                      draft={draft}
                      catalogs={catalogs}
                      disabled={pending || confirmOpen}
                      onFill={(next) => updateDraft(draft.id, () => next)}
                    />
                  ) : null}
                  <HireIssuesProvider issues={issueMap}>
                    <HireDraftProvider key={draft.id} draft={draft} {...draftActions}>
                      <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        variant="underline"
                        className="min-w-0"
                      >
                        <TabsList wrapperClassName="w-full max-w-full" className="min-w-max">
                          {HIRE_TABS.map((tab) => {
                            const count = tabIssueCounts.get(tab.id) ?? 0;
                            return (
                              <TabsTrigger key={tab.id} value={tab.id}>
                                {tab.label}
                                {/* Visual hint only: the summary below lists the problems for
                                  screen readers and keeps the tab name stable. */}
                                {count > 0 ? (
                                  <span aria-hidden="true" className="ml-1.5 text-destructive">
                                    ({count})
                                  </span>
                                ) : null}
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>
                        <TabsContent value="personal">
                          {activeTab === "personal" ? <PersonalSection /> : null}
                        </TabsContent>
                        <TabsContent value="organization">
                          {activeTab === "organization" ? <OrganizationSection /> : null}
                        </TabsContent>
                        <TabsContent value="social-security">
                          {activeTab === "social-security" ? <SocialSecuritySection /> : null}
                        </TabsContent>
                        <TabsContent value="payroll">
                          {activeTab === "payroll" ? <PayrollSection /> : null}
                        </TabsContent>
                        <TabsContent value="payment">
                          {activeTab === "payment" ? <PaymentSection /> : null}
                        </TabsContent>
                      </Tabs>
                    </HireDraftProvider>
                  </HireIssuesProvider>
                  {expandedFeedback?.attempted && visibleIssues.length > 0 ? (
                    <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                      <p className="text-sm font-medium text-destructive">
                        Datos por revisar de la Persona {index + 1}
                      </p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {visibleIssues.map((issue) => {
                          const tab = hireIssueTab(issue.field);
                          const tabLabel =
                            HIRE_TABS.find((candidate) => candidate.id === tab)?.label ?? "";
                          return (
                            <li key={issue.field}>
                              <button
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className="text-left text-foreground underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                <span className="text-muted-foreground">{tabLabel} · </span>
                                {issue.message}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                  <div className="mt-5">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removePerson(draft.id)}
                      disabled={people.length === 1}
                      aria-label={`Eliminar persona ${index + 1}`}
                      className="text-destructive bg-destructive/10 hover:bg-destructive/15"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                      Eliminar persona
                    </Button>
                  </div>
                </fieldset>
              );
            }

            return (
              <div
                key={draft.id}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card px-4 py-3 text-card-foreground sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar name={name || `Persona ${index + 1}`} />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Persona {index + 1}</p>
                    <p className="truncate text-sm font-medium text-foreground">{name}</p>
                    <p className="truncate text-sm text-muted-foreground">{summary}</p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => editPerson(draft.id)}
                    aria-label={`Editar persona ${index + 1}`}
                  >
                    <Pencil className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removePerson(draft.id)}
                    aria-label={`Eliminar persona ${index + 1}`}
                    className="text-destructive bg-destructive/10 hover:bg-destructive/15"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {error ? (
          <div role="alert" className="space-y-1 text-sm text-destructive">
            <p>{error.message}</p>
            {error.issues.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5">
                {error.issues.map((issue, index) => (
                  <li key={`${issue.person ?? 0}-${index}`}>
                    {issue.person ? `Persona ${issue.person}: ` : ""}
                    {issue.message}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
        {success ? (
          <p role="status" className="text-sm text-foreground">
            {success}
          </p>
        ) : null}

        <div className="sticky bottom-0 z-10 -mx-4 mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-border bg-background/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <Button type="button" variant="outline" onClick={addPerson}>
            <Plus className="size-4" aria-hidden="true" />
            Añadir persona
          </Button>
          <div className="flex items-center gap-3">
            <p className="hidden text-sm text-muted-foreground sm:block">
              {people.length === 1 ? "1 persona" : `${people.length} personas`}
            </p>
            <Button type="button" onClick={requestConfirm} disabled={pending} aria-busy={pending}>
              Lanzar alta
            </Button>
          </div>
        </div>

        <Modal
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="Confirmar alta"
          description={confirmation}
          size="sm"
          footer={
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={pending}
                onClick={() => setConfirmOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                size="sm"
                disabled={pending}
                onClick={() => {
                  void submitHire();
                }}
              >
                {pending ? "Enviando..." : "Confirmar"}
              </Button>
            </>
          }
        />
      </div>
    </HireCatalogsProvider>
  );
}
