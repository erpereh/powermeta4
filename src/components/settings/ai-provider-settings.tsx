"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, KeyRound, Plus, Trash2 } from "lucide-react";

import {
  createAiProviderConfigAction,
  deleteAiProviderConfigAction,
  getAiProviderConfigsAction,
  updateAiProviderConfigAction,
} from "@/app/actions/ai-provider-configs";
import { hydrateWorkspaceStore } from "@/stores/use-workspace-store";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { isUsableAiProviderConfig, type AiProviderConfigView } from "@/types/ai-provider-config";

type AiProviderForm = {
  name: string;
  baseUrl: string;
  model: string;
  apiKey: string;
};

const EMPTY_FORM: AiProviderForm = { name: "", baseUrl: "", model: "", apiKey: "" };

const errorMessage = (value: unknown): string =>
  value instanceof Error ? value.message : "No se pudo completar la operación.";

export function AiProviderSettings() {
  const [configs, setConfigs] = useState<AiProviderConfigView[]>([]);
  const [form, setForm] = useState<AiProviderForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<"create" | "delete" | "update" | null>(null);
  const [pendingDelete, setPendingDelete] = useState<AiProviderConfigView | null>(null);
  const [completeModel, setCompleteModel] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    void getAiProviderConfigsAction()
      .then((result) => {
        if (!mounted) return;
        if (!result.ok) {
          setError(result.message);
          return;
        }
        setConfigs(result.data);
      })
      .catch((loadError: unknown) => {
        if (mounted) setError(errorMessage(loadError));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy("create");
    setError("");
    setNotice("");
    try {
      const result = await createAiProviderConfigAction(form);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setConfigs((current) => [result.data, ...current]);
      setForm(EMPTY_FORM);
      setNotice("Configuración de IA creada correctamente.");
      await hydrateWorkspaceStore();
    } catch (createError: unknown) {
      setError(errorMessage(createError));
    } finally {
      setBusy(null);
    }
  };

  const handleComplete = async (config: AiProviderConfigView) => {
    const model = (completeModel[config.id] ?? "").trim();
    if (!model) return;
    setBusy("update");
    setError("");
    setNotice("");
    try {
      const result = await updateAiProviderConfigAction(config.id, {
        name: config.name,
        baseUrl: config.baseUrl,
        model,
      });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setConfigs((current) => current.map((item) => (item.id === config.id ? result.data : item)));
      setNotice("Configuración de IA actualizada correctamente.");
      await hydrateWorkspaceStore();
    } catch (updateError: unknown) {
      setError(errorMessage(updateError));
    } finally {
      setBusy(null);
    }
  };

  const handleDelete = async () => {
    if (!pendingDelete) return;
    const config = pendingDelete;
    setBusy("delete");
    setError("");
    setNotice("");
    try {
      const result = await deleteAiProviderConfigAction(config.id);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setConfigs((current) => current.filter((item) => item.id !== config.id));
      setPendingDelete(null);
      setNotice("Configuración de IA eliminada correctamente.");
      await hydrateWorkspaceStore();
    } catch (deleteError: unknown) {
      setError(errorMessage(deleteError));
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="space-y-6">
      {(error || notice) && (
        <Alert variant={error ? "destructive" : "default"}>
          {error ? <AlertCircle /> : <CheckCircle2 />}
          <AlertTitle>
            {error ? "No se pudo completar la operación" : "Operación completada"}
          </AlertTitle>
          <AlertDescription>{error || notice}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Configuraciones de inteligencia artificial</h2>
          </CardTitle>
          <CardDescription>
            Guarda un modelo utilizable por el chat: nombre visible, Base URL compatible
            OpenAI, model id del proveedor y API key. La API key se cifra en este equipo y no
            se muestra completa.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={(event) => void handleCreate(event)}>
            <div className="grid gap-2">
              <Label htmlFor="ai-provider-name">Nombre</Label>
              <Input
                id="ai-provider-name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Servidor local"
                maxLength={120}
                required
                disabled={busy !== null}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ai-provider-base-url">Base URL</Label>
              <Input
                id="ai-provider-base-url"
                type="url"
                value={form.baseUrl}
                onChange={(event) =>
                  setForm((current) => ({ ...current, baseUrl: event.target.value }))
                }
                placeholder="https://api.example.com/v1"
                maxLength={2048}
                required
                disabled={busy !== null}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ai-provider-model">Model id</Label>
              <Input
                id="ai-provider-model"
                value={form.model}
                onChange={(event) =>
                  setForm((current) => ({ ...current, model: event.target.value }))
                }
                placeholder="grok-4-1-fast"
                maxLength={200}
                required
                disabled={busy !== null}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ai-provider-api-key">API key</Label>
              <Input
                id="ai-provider-api-key"
                type="password"
                value={form.apiKey}
                onChange={(event) => setForm((current) => ({ ...current, apiKey: event.target.value }))}
                autoComplete="new-password"
                maxLength={4096}
                required
                disabled={busy !== null}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={busy !== null}>
                <Plus />
                Añadir configuración
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Separator />

      <section className="space-y-3" aria-labelledby="ai-provider-configs-heading">
        <div className="space-y-1">
          <h3 id="ai-provider-configs-heading" className="font-heading text-base font-medium">
            Configuraciones creadas
          </h3>
          <p className="text-sm text-muted-foreground">
            Estas configuraciones pertenecen a la empresa activa.
          </p>
        </div>

        {loading ? (
          <div className="space-y-2" aria-busy="true" aria-label="Cargando configuraciones">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        ) : configs.length === 0 ? (
          <Empty className="border">
            <EmptyHeader>
              <EmptyContent>
                <EmptyTitle>No hay configuraciones de IA</EmptyTitle>
                <EmptyDescription>
                  Añade una Base URL y una API key para guardar tu primera configuración.
                </EmptyDescription>
              </EmptyContent>
            </EmptyHeader>
          </Empty>
        ) : (
          <div className="space-y-2">
            {configs.map((config) => (
              <Card key={config.id} size="sm">
                <CardContent className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium break-words">{config.name}</p>
                      {!isUsableAiProviderConfig(config) ? (
                        <Badge variant="outline">Incompleta</Badge>
                      ) : null}
                    </div>
                    <p className="break-all text-sm text-muted-foreground">{config.baseUrl}</p>
                    {config.model ? (
                      <p className="text-sm text-muted-foreground">model: {config.model}</p>
                    ) : (
                      <div className="flex flex-wrap items-end gap-2 pt-1">
                        <div className="grid min-w-40 flex-1 gap-1">
                          <Label htmlFor={`ai-provider-complete-model-${config.id}`}>Model id</Label>
                          <Input
                            id={`ai-provider-complete-model-${config.id}`}
                            value={completeModel[config.id] ?? ""}
                            onChange={(event) =>
                              setCompleteModel((current) => ({
                                ...current,
                                [config.id]: event.target.value,
                              }))
                            }
                            placeholder="gpt-5.6"
                            maxLength={200}
                            disabled={busy !== null}
                          />
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => void handleComplete(config)}
                          disabled={busy !== null || !(completeModel[config.id] ?? "").trim()}
                        >
                          Completar
                        </Button>
                      </div>
                    )}
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <KeyRound className="size-3.5" aria-hidden="true" />
                      {config.hasApiKey ? "API key: ••••••••" : "API key no disponible"}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Eliminar configuración ${config.name}`}
                    onClick={() => setPendingDelete(config)}
                    disabled={busy !== null}
                  >
                    <Trash2 />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <AlertDialog
        open={Boolean(pendingDelete)}
        onOpenChange={(open) => {
          if (!open && busy !== "delete") setPendingDelete(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar configuración de IA</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Eliminar la configuración «{pendingDelete?.name}»? Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy === "delete"}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={(event) => {
                event.preventDefault();
                void handleDelete();
              }}
              disabled={busy === "delete"}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
