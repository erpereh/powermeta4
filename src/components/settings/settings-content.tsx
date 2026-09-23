"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Download, FileArchive, ShieldCheck } from "lucide-react";

import { getMeta4ProfileViewAction } from "@/app/actions/meta4-profile";
import {
  Badge,
  Button,
  EmptyState,
  Input,
  Loader,
  Modal,
  Skeleton,
  StatefulButton,
} from "@/components/system";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
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

type SettingsSectionId = "person" | "backups";

const NAV_ITEMS: Array<{ id: SettingsSectionId; label: string }> = [
  { id: "person", label: "Datos de la persona" },
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

function BusyStatus({
  label,
  message,
}: {
  label: string;
  message: string;
}) {
  return (
    <div className="flex items-start gap-3" role="status" aria-live="polite">
      <Loader variant="spinner" size={18} label={label} className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1 space-y-2">
        <Progress value={undefined} aria-label={label} className="bg-muted" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export type SettingsContentProps = {
  variant?: "page" | "dialog";
  className?: string;
};

export function SettingsContent({ variant = "page", className }: SettingsContentProps) {
  const auth = useWorkspaceStore((state) => state.auth);
  const isDebugMode = auth?.mode === "debug";
  const backupFileRef = useRef<HTMLInputElement>(null);
  const [activeSection, setActiveSection] = useState<SettingsSectionId>("person");
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
  }, [auth?.username, auth?.societyCode, isDebugMode]);

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
    const file = selectedFile ?? backupFileRef.current?.files?.[0] ?? null;
    if (!file) {
      setError("Selecciona un archivo ZIP.");
      return;
    }
    setBusy("validate");
    setError("");
    setNotice("");
    setValidation(null);
    try {
      const formData = new FormData();
      formData.set("file", file);
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

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col gap-4", className)}>
      {(error || notice) && (
        <Alert
          variant={error ? "destructive" : "default"}
          className={cn(
            "border-border",
            error ? "border-destructive/30 bg-destructive/5" : "bg-muted/40",
          )}
        >
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
            ? "md:grid-cols-[11rem_minmax(0,1fr)]"
            : "md:grid-cols-[13rem_minmax(0,1fr)]",
        )}
      >
        <nav
          aria-label="Secciones de ajustes"
          className="flex min-w-0 flex-row gap-1.5 overflow-x-auto md:flex-col md:overflow-visible"
        >
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              type="button"
              size="sm"
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className="shrink-0 justify-start rounded-lg"
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div
          className={cn(
            "min-h-0 min-w-0",
            variant === "page" && "max-h-[70vh] overflow-y-auto overscroll-contain pr-1",
          )}
        >
          <div className="space-y-6">
            {activeSection === "backups" ? (
              <div className="space-y-6">
                <section className="space-y-3">
                  <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    Exportar workspace
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Incluye conversaciones, empresas, configuración funcional, actividad y uploads;
                    excluye secretos, sesiones y el perfil Meta4 cifrado.
                  </p>
                  {busy === "export" ? (
                    <BusyStatus
                      label="Creando copia"
                      message="Creando una copia consistente..."
                    />
                  ) : null}
                  <StatefulButton
                    type="button"
                    variant="primary"
                    state={busy === "export" ? "loading" : "idle"}
                    loadingText="Creando copia..."
                    icon={<Download className="size-4" aria-hidden="true" />}
                    onClick={() => void handleExport()}
                    disabled={busy !== null}
                  >
                    Crear y descargar ZIP
                  </StatefulButton>
                </section>

                <div className="border-t border-border" role="separator" />

                <section className="space-y-3">
                  <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    Restaurar workspace
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Primero se valida el ZIP y después se confirma el reemplazo local.
                  </p>
                  <Input
                    ref={backupFileRef}
                    id="backup-file"
                    name="file"
                    type="file"
                    accept=".zip,application/zip"
                    label="Archivo ZIP"
                    onChange={() => {
                      setSelectedFile(backupFileRef.current?.files?.[0] ?? null);
                      setValidation(null);
                      setError("");
                    }}
                    disabled={busy !== null}
                    classNames={{
                      field: "h-auto min-h-11 rounded-xl",
                      input: "py-2.5 file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-2.5 file:py-1 file:text-xs file:font-medium file:text-foreground",
                    }}
                  />
                  {busy === "validate" ? (
                    <BusyStatus
                      label="Validando copia"
                      message="Validando manifest, límites e integridad SQLite..."
                    />
                  ) : null}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => void handleValidate()}
                    disabled={!selectedFile || busy !== null}
                  >
                    <FileArchive className="size-4" aria-hidden="true" />
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
              <Alert className="border-border bg-muted/40">
                <AlertCircle />
                <AlertTitle>Modo de desarrollo</AlertTitle>
                <AlertDescription>
                  El perfil Meta4 no está disponible en modo debug.
                </AlertDescription>
              </Alert>
            ) : !profile?.available ? (
              <Alert
                variant="destructive"
                className="border-destructive/30 bg-destructive/5"
              >
                <AlertCircle />
                <AlertTitle>Perfil no disponible</AlertTitle>
                <AlertDescription>
                  No se han podido cargar los datos del usuario desde Meta4.
                </AlertDescription>
              </Alert>
            ) : (
              <section className="space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    Datos de la persona
                  </h2>
                  {profile.societyCode ? (
                    <Badge status="neutral" size="sm" showIcon={false}>
                      Sociedad activa: {profile.societyCode}
                    </Badge>
                  ) : null}
                </div>
                {profile.sections.length > 0 ? (
                  profile.sections.map((section) => (
                    <section
                      key={section.id}
                      className="space-y-3"
                      aria-labelledby={`settings-${section.id}-heading`}
                    >
                      <h3
                        id={`settings-${section.id}-heading`}
                        className="font-heading text-base font-medium text-foreground"
                      >
                        {section.title}
                      </h3>
                      <dl className="grid gap-4 sm:grid-cols-2">
                        {section.fields.map((field) => (
                          <div key={`${section.id}-${field.key}`} className="min-w-0 space-y-1">
                            <dt className="text-sm text-muted-foreground">{field.label}</dt>
                            <dd className="text-sm font-medium break-words text-foreground">
                              {field.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      {section.id === "session" ? (
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          <p>
                            Las cookies son opacas y HttpOnly. Los tokens Meta4 no se muestran ni
                            se guardan en el navegador.
                          </p>
                        </div>
                      ) : null}
                    </section>
                  ))
                ) : (
                  <EmptyState title="No hay datos de la persona." />
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={Boolean(validation)}
        onOpenChange={(open) => {
          if (!open && busy !== "restore") void cancelValidation();
        }}
        title="Confirmar restauración"
        description="Se reemplazará la base local y se cerrará la sesión actual. Esta acción no se puede deshacer desde la aplicación."
        size="sm"
        dismissible={busy !== "restore"}
        footer={
          <>
            <Button
              type="button"
              variant="ghost"
              disabled={busy === "restore"}
              onClick={() => {
                if (busy !== "restore") void cancelValidation();
              }}
            >
              Cancelar
            </Button>
            <StatefulButton
              type="button"
              variant="secondary"
              state={busy === "restore" ? "loading" : "idle"}
              loadingText="Restaurando..."
              className="bg-destructive/10 text-destructive hover:bg-destructive/15"
              disabled={busy === "restore"}
              onClick={() => void handleRestore()}
            >
              Restaurar copia
            </StatefulButton>
          </>
        }
      >
        {validation ? (
          <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4 text-sm text-foreground">
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
        ) : null}
        {busy === "restore" ? (
          <div className="mt-4">
            <BusyStatus
              label="Restaurando copia"
              message="Revalidando y restaurando..."
            />
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
