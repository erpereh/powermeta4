"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Download, FileArchive, ShieldCheck } from "lucide-react";

import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

type ValidationResult = {
  manifest: {
    backupVersion: number;
    databaseSchemaVersion: number;
    appVersion: string;
    createdAt: string;
  };
  compressedBytes: number;
  uncompressedBytes: number;
  entryCount: number;
  checksum: string;
  importId: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const parseValidationResult = (value: unknown): ValidationResult | null => {
  if (!isRecord(value) || !isRecord(value.data)) return null;
  const data = value.data;
  if (!isRecord(data.manifest)) return null;
  const manifest = data.manifest;
  if (
    typeof manifest.backupVersion !== "number" ||
    typeof manifest.databaseSchemaVersion !== "number" ||
    typeof manifest.appVersion !== "string" ||
    typeof manifest.createdAt !== "string" ||
    typeof data.compressedBytes !== "number" ||
    typeof data.uncompressedBytes !== "number" ||
    typeof data.entryCount !== "number" ||
    typeof data.checksum !== "string" ||
    typeof data.importId !== "string"
  ) {
    return null;
  }
  return {
    manifest: {
      backupVersion: manifest.backupVersion,
      databaseSchemaVersion: manifest.databaseSchemaVersion,
      appVersion: manifest.appVersion,
      createdAt: manifest.createdAt,
    },
    compressedBytes: data.compressedBytes,
    uncompressedBytes: data.uncompressedBytes,
    entryCount: data.entryCount,
    checksum: data.checksum,
    importId: data.importId,
  };
};

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export function SettingsScreen() {
  const hydrated = useWorkspaceHydrated();
  const auth = useWorkspaceStore((state) => state.auth);
  const isDebugMode = auth?.mode === "debug";
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState<"export" | "validate" | "restore" | null>(null);

  const handleExport = async () => {
    setBusy("export");
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/backups/export", { cache: "no-store" });
      if (!response.ok) throw new Error("No se pudo crear la copia local.");
      const blob = await response.blob();
      const contentDisposition = response.headers.get("Content-Disposition") ?? "";
      const filenameMatch = /filename="([^"]+)"/i.exec(contentDisposition);
      const filename = filenameMatch?.[1] ?? "powermeta4-backup.zip";
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
      URL.revokeObjectURL(url);
      setNotice("Copia creada y descargada correctamente.");
    } catch (exportError) {
      setError(
        exportError instanceof Error ? exportError.message : "No se pudo crear la copia local.",
      );
    } finally {
      setBusy(null);
    }
  };

  const handleValidate = async () => {
    if (!selectedFile) {
      setError("Selecciona un archivo ZIP.");
      return;
    }
    setBusy("validate");
    setError("");
    setNotice("");
    setValidation(null);
    try {
      const formData = new FormData();
      formData.set("file", selectedFile);
      const response = await fetch("/api/backups/import/validate", {
        method: "POST",
        body: formData,
      });
      const payload: unknown = await response.json();
      const result = parseValidationResult(payload);
      if (!response.ok || !result) throw new Error("La copia no es válida o está dañada.");
      setValidation(result);
      setNotice("Copia validada. Revisa los datos antes de confirmar la restauración.");
    } catch (validationError) {
      setError(
        validationError instanceof Error ? validationError.message : "No se pudo validar la copia.",
      );
    } finally {
      setBusy(null);
    }
  };

  const cancelValidation = async () => {
    if (validation) {
      await fetch(`/api/backups/import/${encodeURIComponent(validation.importId)}`, {
        method: "DELETE",
      });
    }
    setValidation(null);
  };

  const handleRestore = async () => {
    if (!validation) return;
    setBusy("restore");
    setError("");
    try {
      const response = await fetch("/api/backups/import/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ importId: validation.importId }),
      });
      if (!response.ok) throw new Error("No se pudo restaurar la copia local.");
      window.location.assign("/login");
    } catch (restoreError) {
      setError(
        restoreError instanceof Error
          ? restoreError.message
          : "No se pudo restaurar la copia local.",
      );
      setBusy(null);
      setValidation(null);
    }
  };

  if (!hydrated) {
    return (
      <main className="min-h-svh p-6 sm:p-10">
        <div className="mx-auto max-w-4xl space-y-6">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-svh p-4 sm:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Configuración local</p>
          <h1 className="text-3xl font-semibold tracking-tight">Ajustes</h1>
          <p className="max-w-2xl text-muted-foreground">
            Controla tu sesión y protege la información guardada en este equipo.
          </p>
        </header>

        {(error || notice) && (
          <Alert variant={error ? "destructive" : "default"}>
            {error ? <AlertCircle /> : <CheckCircle2 />}
            <AlertTitle>
              {error ? "No se pudo completar la operación" : "Operación completada"}
            </AlertTitle>
            <AlertDescription>{error || notice}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="account" className="gap-6">
          <TabsList aria-label="Secciones de ajustes">
            <TabsTrigger value="account">Cuenta y sesión</TabsTrigger>
            <TabsTrigger value="backups">Copias locales</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sesión</CardTitle>
                <CardDescription>
                  La autenticación se mantiene únicamente en el servidor local.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 text-sm sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Modo</p>
                    <p className="font-medium">
                      {auth ? (isDebugMode ? "Debug" : "Meta4") : "Sin sesión"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Usuario</p>
                    <p className="font-medium">{auth?.username ?? "Sin sesión"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Estado</p>
                    <p className="font-medium">
                      {auth ? (isDebugMode ? "Modo de desarrollo" : "Sesión activa") : "Sin sesión"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Meta4</p>
                    <p className="font-medium">
                      {auth?.canUseMeta4 ? "Conectado" : "No conectado"}
                    </p>
                  </div>
                </div>
                <Badge variant={auth ? "default" : "secondary"}>
                  {auth ? "Sesión activa" : "Sin sesión"}
                </Badge>
                {isDebugMode && (
                  <Alert>
                    <AlertCircle />
                    <AlertTitle>Herramientas Meta4 limitadas</AlertTitle>
                    <AlertDescription>
                      Las herramientas que requieren una sesión Meta4 real no están disponibles en
                      modo debug.
                    </AlertDescription>
                  </Alert>
                )}
                <Separator />
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p>
                    Las cookies son opacas y HttpOnly. Los tokens Meta4 no se muestran ni se guardan
                    en el navegador.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exportar workspace</CardTitle>
                <CardDescription>
                  Incluye conversaciones, empresas, configuración funcional, actividad y uploads;
                  excluye secretos y sesiones.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {busy === "export" && (
                  <div className="space-y-2" role="status" aria-live="polite">
                    <Progress value={undefined} aria-label="Creando copia" />
                    <p className="text-sm text-muted-foreground">
                      Creando una copia consistente...
                    </p>
                  </div>
                )}
                <Button type="button" onClick={() => void handleExport()} disabled={busy !== null}>
                  <Download />
                  Crear y descargar ZIP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Restaurar workspace</CardTitle>
                <CardDescription>
                  Primero se valida el ZIP y después se confirma el reemplazo local.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="backup-file" className="text-sm font-medium">
                    Archivo ZIP
                  </label>
                  <Input
                    id="backup-file"
                    type="file"
                    accept=".zip,application/zip"
                    onChange={(event) => {
                      setSelectedFile(event.target.files?.[0] ?? null);
                      setValidation(null);
                      setError("");
                    }}
                    disabled={busy !== null}
                  />
                </div>
                {busy === "validate" && (
                  <div className="space-y-2" role="status" aria-live="polite">
                    <Progress value={undefined} aria-label="Validando copia" />
                    <p className="text-sm text-muted-foreground">
                      Validando manifest, límites e integridad SQLite...
                    </p>
                  </div>
                )}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void handleValidate()}
                  disabled={!selectedFile || busy !== null}
                >
                  <FileArchive />
                  Validar ZIP
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog
        open={Boolean(validation)}
        onOpenChange={(open) => {
          if (!open && busy !== "restore") void cancelValidation();
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar restauración</AlertDialogTitle>
            <AlertDialogDescription>
              Se reemplazará la base local y se cerrará la sesión actual. Esta acción no se puede
              deshacer desde la aplicación.
            </AlertDialogDescription>
          </AlertDialogHeader>
          {validation && (
            <div className="space-y-2 rounded-xl border bg-muted/30 p-4 text-sm">
              <p>
                <strong>Versión de la aplicación:</strong> {validation.manifest.appVersion}{" "}
                (informativa)
              </p>
              <p>
                <strong>Esquema:</strong> {validation.manifest.databaseSchemaVersion}
              </p>
              <p>
                <strong>Tamaño:</strong> {formatBytes(validation.compressedBytes)} comprimido /{" "}
                {formatBytes(validation.uncompressedBytes)} descomprimido
              </p>
              <p>
                <strong>Entradas:</strong> {validation.entryCount}
              </p>
              <p className="break-all text-xs text-muted-foreground">
                <strong>Checksum:</strong> {validation.checksum}
              </p>
            </div>
          )}
          {busy === "restore" && (
            <div className="space-y-2" role="status" aria-live="polite">
              <Progress value={undefined} aria-label="Restaurando copia" />
              <p className="text-sm text-muted-foreground">Revalidando y restaurando...</p>
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy === "restore"}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                void handleRestore();
              }}
              disabled={busy === "restore"}
            >
              Restaurar copia
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
