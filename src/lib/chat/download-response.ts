import "server-only";

import { readFile } from "node:fs/promises";

export async function downloadChatFile(
  file: string,
  label: string,
  mime: string,
  inline = false,
): Promise<Response> {
  const body = await readFile(file);
  return new Response(body, {
    headers: {
      "Content-Type": mime,
      "Content-Length": String(body.length),
      "Content-Disposition": `${inline ? "inline" : "attachment"}; filename*=UTF-8''${encodeURIComponent(label.toWellFormed())}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
      ...(inline ? {} : { "Content-Security-Policy": "sandbox" }),
    },
  });
}
