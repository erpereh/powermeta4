import { getCurrentAuthContext } from "@/lib/auth/session";
import { ChatAttachmentError } from "@/lib/chat/attachment-extraction";
import { MAX_FILE_BYTES, attachmentSchema } from "@/lib/chat/chat-data";
import { discardChatDraft, stageChatAttachment } from "@/lib/chat/attachment-service";
import { downloadChatFile } from "@/lib/chat/download-response";
import { resolveManagedFile } from "@/lib/chat/file-storage";
import { getWorkspaceRepository, getWorkspaceScope } from "@/lib/workspace/service";
import { createAttachmentRepository } from "@/server/database/repositories/attachment-repository";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = MAX_FILE_BYTES + 32 * 1024;
const error = (message: string, status: number) =>
  Response.json({ ok: false, message }, { status });

async function getScope(request: Request) {
  const auth = await getCurrentAuthContext();
  if (!auth) return error("Inicia sesión para acceder a los archivos.", 401);
  const query = new URL(request.url).searchParams;
  const companyId = query.get("companyId");
  const conversationId = query.get("conversationId");
  if (!companyId || !conversationId || conversationId.length > 160) {
    return error("Falta la conversación del adjunto.", 400);
  }
  const snapshot = await getWorkspaceScope(auth.authContext);
  const company = snapshot.companies.find(({ id }) => id === companyId);
  if (!company || snapshot.activeCompanyId !== company.id)
    return error("La empresa del archivo ya no está activa.", 403);
  return { companyId: company.id, conversationId, id: query.get("id") };
}

async function readUpload(request: Request): Promise<File> {
  const contentType = request.headers.get("content-type");
  if (!contentType?.startsWith("multipart/form-data;") || !request.body) {
    throw new ChatAttachmentError("Selecciona un archivo.", 400);
  }
  if (Number(request.headers.get("content-length")) > MAX_REQUEST_BYTES) {
    throw new ChatAttachmentError("Cada archivo admite hasta 5 MiB.", 413);
  }
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      total += part.value.length;
      if (total > MAX_REQUEST_BYTES) {
        await reader.cancel();
        throw new ChatAttachmentError("Cada archivo admite hasta 5 MiB.", 413);
      }
      chunks.push(part.value);
    }
  } finally {
    reader.releaseLock();
  }
  const multipart = await new Response(Buffer.concat(chunks), {
    headers: { "Content-Type": contentType },
  })
    .formData()
    .catch(() => null);
  const file = multipart?.get("file");
  if (!(file instanceof File)) throw new ChatAttachmentError("Selecciona un archivo.", 400);
  if (file.size > MAX_FILE_BYTES)
    throw new ChatAttachmentError("Cada archivo admite hasta 5 MiB.", 413);
  return file;
}

export async function POST(request: Request): Promise<Response> {
  const scope = await getScope(request);
  if (scope instanceof Response) return scope;
  if (!scope.id || !attachmentSchema.shape.id.safeParse(scope.id).success) {
    return error("El identificador del archivo no es válido.", 400);
  }
  try {
    await getWorkspaceRepository().getConversation(scope.companyId, scope.conversationId);
  } catch {
    return error("No se encontró la conversación.", 404);
  }
  try {
    const file = await readUpload(request);
    request.signal.throwIfAborted();
    const result = await stageChatAttachment(scope.companyId, scope.conversationId, scope.id, file);
    return Response.json(result, { status: 201 });
  } catch (cause) {
    if (cause instanceof ChatAttachmentError) return error(cause.message, cause.status);
    console.error("[chat] error al guardar adjunto");
    return error("No se pudo guardar el archivo. Vuelve a intentarlo.", 500);
  }
}

export async function GET(request: Request): Promise<Response> {
  const scope = await getScope(request);
  if (scope instanceof Response) return scope;
  if (!attachmentSchema.shape.id.safeParse(scope.id).success || !scope.id) {
    return error("El archivo no está disponible.", 404);
  }
  const record = createAttachmentRepository().get(scope.companyId, scope.conversationId, scope.id);
  if (!record?.messageId) return error("El archivo no está disponible.", 404);
  try {
    return await downloadChatFile(
      await resolveManagedFile(record.relativePath, "chat"),
      record.fileName,
      record.mimeType,
    );
  } catch {
    return error("El archivo no está disponible.", 404);
  }
}

export async function DELETE(request: Request): Promise<Response> {
  const scope = await getScope(request);
  if (scope instanceof Response) return scope;
  if (scope.id && attachmentSchema.shape.id.safeParse(scope.id).success) {
    await discardChatDraft(scope.companyId, scope.conversationId, scope.id);
  }
  return new Response(null, { status: 204 });
}
