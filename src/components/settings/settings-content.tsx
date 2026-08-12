"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Download, FileArchive, ShieldCheck } from "lucide-react";

import { getMeta4ProfileViewAction } from "@/app/actions/meta4-profile";
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
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { Meta4ProfileView } from "@/types/meta4-profile";

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

type SettingsSectionId =
  | "account"
  | "organization"
  | "role"
  | "workplace"
  | "labor"
  | "session"
  | "backups"
  | "other";

const NAV_ITEMS: Array<{ id: SettingsSectionId; label: string }> = [
  { id: "account", label: "Cuenta" },
  { id: "organization", label: "Organización" },
  { id: "role", label: "Puesto" },
  { id: "workplace", label: "Centro de trabajo" },
  { id: "labor", label: "Datos laborales" },
  { id: "session", label: "Sesión Meta4" },
  { id: "backups", label: "Datos y copias" },
];

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

export type SettingsContentProps = {
  variant?: "page" | "dialog";
  className?: string;
};

export function SettingsContent({ variant = "page", className }: SettingsContentProps) {
  const auth = useWorkspaceStore((state) => state.auth);
  const isDebugMode = auth?.mode === "debug";
  const [activeSection, setActiveSection] = useState<SettingsSectionId>("account");
  const [profile, setProfile] = useState<Meta4ProfileView | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState<"export" | "validate" | "restore" | null>(null);

  useEffect(() => {
    let mounted = true;
    setProfileLoading(true);
    void getMeta4ProfileViewAction()
      .then((view) => {
        if (mounted) setProfile(view);
      })
      .catch(() => {
        if (mounted) {
          setProfile({
            available: false,
            debugMode: isDebugMode,
            username: auth?.username ?? null,
            societyCode: null,
            societyLegalName: null,
            displayName: null,
            lookedUpAt: null,
            sections: [],
          });
        }
      })
      .finally(() => {
        if (mounted) setProfileLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [auth?.username, isDebugMode]);

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

  const profileSection =
    profile?.sections.find((section) => section.id === activeSection) ??
    (activeSection === "other"
      ? profile?.sections.find((section) => section.id === "other")
      : undefined);

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col gap-4", className)}>
      {(error || notice) && (
        <Alert variant={error ? "destructive" : "default"}>
          {error ? <AlertCircle /> : <CheckCircle2 />}
          <AlertTitle>
            {error ? "No se pudo completar la operación" : "Operación completada"}
          </AlertTitle>
          <AlertDescription>{error || notice}</AlertDescription>
        </Alert>
      )}

      <div
        className={cn(
          "grid min-h-0 flex-1 gap-4",
          variant === "dialog"
            ? "md:grid-cols-[12rem_minmax(0,1fr)]"
            : "md:grid-cols-[14rem_minmax(0,1fr)]",
        )}
      >
        <nav
          aria-label="Secciones de ajustes"
          className="flex flex-row gap-2 overflow-x-auto md:flex-col"
        >
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              type="button"
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <ScrollArea
          className={cn(
            "min-h-0",
            variant === "dialog" ? "max-h-[calc(85vh-8rem)]" : "max-h-[70vh]",
          )}
        >
          <div className="space-y-6 pr-3">
            {activeSection === "backups" ? (
              <div className="space-y-6">
                <section className="space-y-3">
                  <h2 className="text-lg font-semibold">Exportar workspace</h2>
                  <p className="text-sm text-muted-foreground">
                    Incluye conversaciones, empresas, configuración funcional, actividad y uploads;
                    excluye secretos, sesiones y el perfil Meta4 cifrado.
                  </p>
                  {busy === "export" && (
                    <div className="space-y-2" role="status" aria-live="polite">
                      <Progress value={undefined} aria-label="Creando copia" />
                      <p className="text-sm text-muted-foreground">
                        Creando una copia consistente...
                      </p>
                    </div>
                  )}
                  <Button
                    type="button"
                    onClick={() => void handleExport()}
                    disabled={busy !== null}
                  >
                    <Download />
                    Crear y descargar ZIP
                  </Button>
                </section>
                <Separator />
                <section className="space-y-3">
                  <h2 className="text-lg font-semibold">Restaurar workspace</h2>
                  <p className="text-sm text-muted-foreground">
                    Primero se valida el ZIP y después se confirma el reemplazo local.
                  </p>
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
                </section>
              </div>
            ) : profileLoading ? (
              <div className="space-y-3" aria-busy="true">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            ) : isDebugMode || profile?.debugMode ? (
              <Alert>
                <AlertCircle />
                <AlertTitle>Modo de desarrollo</AlertTitle>
                <AlertDescription>
                  El perfil Meta4 no está disponible en modo debug.
                </AlertDescription>
              </Alert>
            ) : !profile?.available ? (
              <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>Perfil no disponible</AlertTitle>
                <AlertDescription>
                  No se han podido cargar los datos del usuario desde Meta4.
                </AlertDescription>
              </Alert>
            ) : (
              <section className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold">
                    {NAV_ITEMS.find((item) => item.id === activeSection)?.label ?? "Ajustes"}
                  </h2>
                  {profile.societyCode && <Badge variant="secondary">{profile.societyCode}</Badge>}
                </div>
                {profileSection ? (
                  <dl className="grid gap-4 sm:grid-cols-2">
                    {profileSection.fields.map((field) => (
                      <div key={`${profileSection.id}-${field.key}`} className="space-y-1">
                        <dt className="text-sm text-muted-foreground">{field.label}</dt>
                        <dd className="text-sm font-medium break-words">{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-sm text-muted-foreground">No hay datos en esta sección.</p>
                )}
                {activeSection === "session" && (
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p>
                      Las cookies son opacas y HttpOnly. Los tokens Meta4 no se muestran ni se
                      guardan en el navegador.
                    </p>
                  </div>
                )}
              </section>
            )}
          </div>
        </ScrollArea>
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
    </div>
  );
}
