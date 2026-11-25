import { getCurrentAuthContext } from "@/lib/auth/session";
import { downloadChatFile } from "@/lib/chat/download-response";
import { resolveManagedFile } from "@/lib/chat/file-storage";
import { digestFile } from "@/lib/knowledge/manuals/config";
import { resolveManualSource } from "@/lib/knowledge/manuals/sources";
import { getDatabase } from "@/server/database/client";
import { createKnowledgeRepository } from "@/server/database/repositories/knowledge-repository";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  if (!(await getCurrentAuthContext()))
    return new Response("Inicia sesión para abrir la fuente.", { status: 401 });
  const params = new URL(request.url).searchParams;
  const id = params.get("id");
  const version = Number(params.get("version"));
  if (id && /^rag-[a-f0-9]{64}$/.test(id)) {
    if (version !== 1) return new Response("La versión de la fuente no coincide.", { status: 409 });
    try {
      const manual = await resolveManualSource(id);
      if (manual) return await downloadChatFile(manual.file, manual.name, "application/pdf", true);
    } catch {
      return new Response("El manual no está disponible.", { status: 404 });
    }
    return new Response("El manual no está disponible.", { status: 404 });
  }
  if (!id || id.length > 160) return new Response("El manual no está disponible.", { status: 404 });
  const database = getDatabase();
  const hasAliases = database
    .prepare("SELECT 1 FROM sqlite_schema WHERE name = 'legacy_manual_sources' AND type = 'table'")
    .get();
  if (hasAliases) {
    const source = database
      .prepare(
        "SELECT version, checksum, original_file_name, relative_path FROM legacy_manual_sources WHERE id = ?",
      )
      .get(id);
    if (!source) return new Response("El manual no está disponible.", { status: 404 });
    if (Number(source.version) !== version)
      return new Response("El manual se ha actualizado desde esta respuesta.", { status: 409 });
    try {
      const checksum = String(source.checksum);
      const name = String(source.original_file_name).split("/").at(-1) ?? "manual.pdf";
      const manual = await resolveManualSource(id, checksum).catch(() => null);
      if (manual && (await digestFile(manual.file)).checksum === checksum)
        return await downloadChatFile(manual.file, name, "application/pdf", true);
      const restored = await resolveManagedFile(String(source.relative_path), "manuals");
      if ((await digestFile(restored)).checksum === checksum)
        return await downloadChatFile(restored, name, "application/pdf", true);
    } catch {
      return new Response("El manual no está disponible.", { status: 404 });
    }
    return new Response("El manual no está disponible.", { status: 404 });
  }
  const document = createKnowledgeRepository(database).findDocumentById(id);
  if (!document) return new Response("El manual no está disponible.", { status: 404 });
  if (document.version !== version) {
    return new Response("El manual se ha actualizado desde esta respuesta.", { status: 409 });
  }
  try {
    return await downloadChatFile(
      await resolveManagedFile(document.relativePath, "manuals"),
      document.originalFileName.split("/").at(-1) ?? document.fileName,
      "application/pdf",
      true,
    );
  } catch {
    return new Response("El manual no está disponible.", { status: 404 });
  }
}
