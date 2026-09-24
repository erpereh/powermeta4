"use client";

import { useMemo, useRef, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import { Button, Modal, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/system";
import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";
import type { HirePersonInput } from "@/lib/meta4/hire/types";
import { parseHirePeople, parseHirePerson } from "@/lib/meta4/hire/validate";

import { HireCatalogsProvider } from "./hire-form/catalogs";
import {
  createHirePersonDraft,
  HireDraftProvider,
  toHirePersonInput,
  type HireBranches,
  type HirePersonDraft,
  type PendingValueKey,
} from "./hire-form/draft";
import type { CurrentFieldId, PendingFieldId } from "./hire-form/field-metadata";
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

const TABS = [
  { id: "personal", label: "Datos personales" },
  { id: "organization", label: "Organización" },
  { id: "social-security", label: "Seguridad Social" },
  { id: "payroll", label: "Nómina" },
  { id: "payment", label: "Datos de pago" },
] as const;

export function UsersHireForm({ catalogs }: { catalogs: HireCatalogState }) {
  const [people, setPeople] = useState<HirePersonDraft[]>([createHirePersonDraft(1)]);
  const [expandedId, setExpandedId] = useState(1);
  const [activeTab, setActiveTab] = useState<string>("personal");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const nextId = useRef(2);

  const confirmation = useMemo(
    () => `Se van a procesar ${people.length} personas en Meta4`,
    [people.length],
  );

  const updateDraft = (id: number, update: (draft: HirePersonDraft) => HirePersonDraft) => {
    setPeople((current) => current.map((draft) => (draft.id === id ? update(draft) : draft)));
  };

  const updateCurrent = (id: number, field: CurrentFieldId, value: string) => {
    updateDraft(id, (draft) => ({ ...draft, current: { ...draft.current, [field]: value } }));
  };

  const updatePending = (id: number, field: PendingValueKey, value: string) => {
    updateDraft(id, (draft) => ({
      ...draft,
      pendingValues: { ...draft.pendingValues, [field]: value },
    }));
  };

  const updateCheck = (id: number, field: PendingFieldId, checked: boolean) => {
    updateDraft(id, (draft) => ({
      ...draft,
      pendingChecks: { ...draft.pendingChecks, [field]: checked },
    }));
  };

  const updateBranch = <K extends keyof HireBranches>(
    id: number,
    field: K,
    value: HireBranches[K],
  ) => {
    updateDraft(id, (draft) => ({ ...draft, branches: { ...draft.branches, [field]: value } }));
  };

  const validateExpanded = (): boolean => {
    const current = people.find((person) => person.id === expandedId);
    if (!current) return false;
    try {
      parseHirePerson(toHirePersonInput(current));
      setError(null);
      return true;
    } catch (caught) {
      setError(errorMessage(caught));
      return false;
    }
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
    try {
      parseHirePeople(currentPayload());
      setConfirmOpen(true);
    } catch (caught) {
      setError(errorMessage(caught));
    }
  };

  const submitHire = async () => {
    setPending(true);
    setError(null);
    try {
      const result = await launchMeta4HireAction(currentPayload());
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setSuccess(`Alta enviada correctamente · ${result.data.fileName}`);
      setPeople([createHirePersonDraft(nextId.current++)]);
      setExpandedId(nextId.current - 1);
      setActiveTab("personal");
      setConfirmOpen(false);
    } catch (caught) {
      setError(errorMessage(caught));
    } finally {
      setPending(false);
    }
  };

  return (
    <HireCatalogsProvider value={catalogs}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-8">
        <p className="text-sm text-muted-foreground">
          Ámbar: mapping confirmado pendiente de integración. Rojo: mapping por confirmar. Solo se
          envían los campos integrados (color normal); el resto es un borrador local.
        </p>

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
                  className="min-w-0 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm"
                >
                  <legend className="px-1 text-sm font-medium text-foreground">
                    Persona {index + 1}
                  </legend>
                  <HireDraftProvider
                    key={draft.id}
                    draft={draft}
                    onCurrentChange={(field, value) => updateCurrent(draft.id, field, value)}
                    onPendingChange={(field, value) => updatePending(draft.id, field, value)}
                    onCheckChange={(field, checked) => updateCheck(draft.id, field, checked)}
                    onBranchChange={(field, value) => updateBranch(draft.id, field, value)}
                  >
                    <Tabs
                      value={activeTab}
                      onValueChange={setActiveTab}
                      variant="underline"
                      className="min-w-0"
                    >
                      <TabsList wrapperClassName="w-full max-w-full" className="min-w-max">
                        {TABS.map((tab) => (
                          <TabsTrigger key={tab.id} value={tab.id}>
                            {tab.label}
                          </TabsTrigger>
                        ))}
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
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">Persona {index + 1}</p>
                  <p className="truncate text-sm text-foreground">{name}</p>
                  <p className="truncate text-sm text-muted-foreground">{summary}</p>
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

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={addPerson}>
            <Plus className="size-4" aria-hidden="true" />
            Añadir persona
          </Button>
          <Button type="button" onClick={requestConfirm} disabled={pending} aria-busy={pending}>
            Lanzar alta
          </Button>
        </div>

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        {success ? (
          <p role="status" className="text-sm text-foreground">
            {success}
          </p>
        ) : null}

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
