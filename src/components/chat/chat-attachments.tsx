"use client";

import { AttachmentPrimitive, MessagePrimitive, useAui, useAuiState } from "@assistant-ui/react";
import { FileText } from "lucide-react";

import { FileUploadList, type FileUploadItem } from "@/components/system";
import { getRuntimeAttachments } from "@/lib/chat/chat-attachment-adapter";

export function ChatAttachmentList() {
  const aui = useAui();
  const attachments = useAuiState((state) => state.composer.attachments);
  if (!attachments.length) return null;

  const items = attachments.map((attachment): FileUploadItem => {
    const status = attachment.status;
    return {
      id: attachment.id,
      name: attachment.name,
      type: attachment.contentType,
      size:
        attachment.file?.size ??
        (attachment.status.type === "complete"
          ? (getRuntimeAttachments([attachment])[0]?.sizeBytes ?? 0)
          : 0),
      status:
        status.type === "running" ? "uploading" : status.type === "incomplete" ? "error" : "queued",
      error: status.type === "incomplete" ? status.message : undefined,
    };
  });

  return (
    <FileUploadList
      items={items}
      removeLabel={(item) => `Quitar ${item.name}`}
      onRemove={(item) => {
        void aui.composer.attachment({ id: item.id }).remove();
      }}
      classNames={{
        queue: "grid max-h-40 gap-1 overflow-y-auto px-1",
        item: "rounded-lg p-2",
        leading: "size-8 rounded-md [&>svg]:size-4",
        progress: "hidden",
        action: "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
      }}
    />
  );
}

export function SentChatAttachments() {
  const attachments = useAuiState((state) => state.message.attachments);
  if (!attachments?.length) return null;

  return (
    <div className="mb-1 flex flex-wrap gap-1.5">
      <MessagePrimitive.Attachments>
        {() => (
          <AttachmentPrimitive.Root className="inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
            <FileText className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              <AttachmentPrimitive.Name />
            </span>
          </AttachmentPrimitive.Root>
        )}
      </MessagePrimitive.Attachments>
    </div>
  );
}
