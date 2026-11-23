import { getCurrentAuthContext } from "@/lib/auth/session";
import { downloadChatFile } from "@/lib/chat/download-response";
import { resolveManagedFile } from "@/lib/chat/file-storage";
import { createKnowledgeRepository } from "@/server/database/repositories/knowledge-repository";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  if (!(await getCurrentAuthContext()))
    return new Response("Inicia sesión para abrir la fuente.", { status: 401 });
  const params = new URL(request.url).searchParams;
  const id = params.get("id");
  const version = Number(params.get("version"));
  const document = id && id.length <= 160 ? createKnowledgeRepository().findDocumentById(id) : null;
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
