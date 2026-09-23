"use client";

import { useRef, useState, type FC, type RefObject } from "react";
import {
  ActionBarMorePrimitive,
  ActionBarPrimitive,
  AuiIf,
  BranchPickerPrimitive,
  ComposerPrimitive,
  ErrorPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  type AssistantState,
  useAuiState,
} from "@assistant-ui/react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  MoreHorizontal,
  Paperclip,
  Pencil,
  RefreshCw,
  Square,
} from "lucide-react";

import { MarkdownText } from "@/components/assistant-ui/markdown-text";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";
import {
  USER_MESSAGE_BUBBLE_CLASS,
  USER_MESSAGE_ROOT_CLASS,
} from "@/components/assistant-ui/user-message-layout";
import { ErpRecommendations } from "@/components/chat/erp-recommendations";
import {
  Badge,
  Button,
  MessageBubble,
  MessageBubbleContent,
  ThinkingShimmer,
} from "@/components/system";
import { getChatStatusLabel, isChatSendDisabled, type ChatStatus } from "@/lib/chat/chat-status";
import { cn } from "@/lib/utils";

type ThreadProps = {
  chatStatus: ChatStatus;
};

const isNewChatView = (state: AssistantState) =>
  state.thread.messages.length === 0 && (!state.thread.isLoading || state.threads.isLoading);

export function Thread({ chatStatus }: ThreadProps) {
  const composerInputRef = useRef<HTMLTextAreaElement>(null);
  const isEmpty = useAuiState(isNewChatView);

  return (
    <ThreadPrimitive.Root
      className="aui-root aui-thread-root flex h-full min-h-0 flex-col bg-background"
      style={{
        ["--thread-max-width" as string]: "44rem",
        ["--composer-radius" as string]: "1rem",
        ["--composer-padding" as string]: "10px",
      }}
    >
      <ThreadPrimitive.Viewport
        turnAnchor="top"
        data-slot="aui_thread-viewport"
        className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto scroll-smooth"
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-(--thread-max-width) flex-1 flex-col px-3 pt-3 sm:px-4 sm:pt-4",
            isEmpty && "justify-center",
          )}
        >
          <AuiIf condition={isNewChatView}>
            <ThreadWelcome />
          </AuiIf>

          <div data-slot="aui_message-group" className="mb-12 flex flex-col gap-y-5 empty:hidden">
            <ThreadPrimitive.Messages>{() => <ThreadMessage />}</ThreadPrimitive.Messages>
          </div>

          <ThreadPrimitive.ViewportFooter
            className={cn(
              "aui-thread-viewport-footer flex flex-col gap-3 overflow-visible bg-background pb-3 md:pb-5",
              !isEmpty && "sticky bottom-0 mt-auto rounded-(--composer-radius)",
            )}
          >
            <ThreadScrollToBottom />
            <Composer inputRef={composerInputRef} chatStatus={chatStatus} />
            <AuiIf condition={(state) => isNewChatView(state) && state.composer.isEmpty}>
              <ThreadSuggestions inputRef={composerInputRef} />
            </AuiIf>
          </ThreadPrimitive.ViewportFooter>
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
}

const ThreadWelcome: FC = () => (
  <div className="mb-5 flex flex-col items-center px-3 text-center">
    <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
      ¿En qué puedo ayudarte hoy?
    </h1>
  </div>
);

type ThreadSuggestionsProps = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

const ThreadSuggestions: FC<ThreadSuggestionsProps> = ({ inputRef }) => (
  <div className="flex w-full flex-wrap items-center justify-center px-1 pb-1">
    <ErpRecommendations inputRef={inputRef} />
  </div>
);

const ThreadScrollToBottom: FC = () => (
  <ThreadPrimitive.ScrollToBottom asChild>
    <TooltipIconButton
      tooltip="Ir al final"
      variant="outline"
      className="absolute -top-10 self-center disabled:invisible"
      aria-label="Ir al final de la conversación"
    >
      <ArrowDown className="size-4" />
    </TooltipIconButton>
  </ThreadPrimitive.ScrollToBottom>
);

const ThreadMessage: FC = () => {
  const role = useAuiState((state) => state.message.role);
  const isEditing = useAuiState((state) => state.message.composer.isEditing);

  if (isEditing) return <EditComposer />;
  if (role === "user") return <UserMessage />;
  return <AssistantMessage />;
};

type ComposerProps = ThreadProps & {
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

const Composer = ({ inputRef, chatStatus }: ComposerProps) => {
  const statusLabel = getChatStatusLabel(chatStatus);
  return (
    <ComposerPrimitive.Root className="relative flex w-full flex-col">
      <div className="flex w-full flex-col gap-2 rounded-(--composer-radius) border border-border bg-card p-(--composer-padding) shadow-sm transition-[border-color] focus-within:border-ring">
        <ComposerPrimitive.Input
          ref={inputRef}
          placeholder="Escribe un mensaje..."
          className="max-h-32 min-h-10 w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 outline-none placeholder:text-muted-foreground sm:text-base"
          rows={1}
          autoFocus
          enterKeyHint="send"
          aria-label="Mensaje"
          unstable_insertNewlineOnTouchEnter
        />
        <div className="flex flex-wrap items-center justify-between gap-2 px-0.5">
          <div className="flex min-w-0 items-center gap-1.5">
            <AttachmentButton />
            {statusLabel ? (
              <p className="truncate px-1.5 text-xs text-muted-foreground" role="status">
                {statusLabel}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-1.5">
            <AuiIf condition={(state) => !state.thread.isRunning}>
              <ComposerPrimitive.Send asChild>
                <TooltipIconButton
                  tooltip="Enviar mensaje"
                  type="button"
                  variant="primary"
                  aria-label="Enviar mensaje"
                  disabled={isChatSendDisabled(chatStatus, false)}
                >
                  <ArrowUp className="size-4" />
                </TooltipIconButton>
              </ComposerPrimitive.Send>
            </AuiIf>
            <AuiIf condition={(state) => state.thread.isRunning}>
              <ComposerPrimitive.Cancel asChild>
                <Button type="button" size="icon" variant="secondary" aria-label="Detener respuesta">
                  <Square className="size-3.5 fill-current" />
                </Button>
              </ComposerPrimitive.Cancel>
            </AuiIf>
          </div>
        </div>
      </div>
    </ComposerPrimitive.Root>
  );
};

const AttachmentButton: FC = () => {
  const [noticeVisible, setNoticeVisible] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <TooltipIconButton
        tooltip="Adjuntar archivo"
        type="button"
        variant="ghost"
        aria-label="Adjuntar archivo"
        onClick={() => setNoticeVisible(true)}
      >
        <Paperclip className="size-4" />
      </TooltipIconButton>
      {noticeVisible && (
        <span role="status" className="max-w-44 text-xs text-muted-foreground">
          La carga de archivos estará disponible próximamente.
        </span>
      )}
    </div>
  );
};

type AssistantStatusMeta = {
  label: string;
  badgeStatus: "warning" | "danger" | "neutral";
};

// Referencias estables: el selector de useAuiState debe devolver el mismo
// valor mientras el estado no cambie (useSyncExternalStore).
const CANCELLED_STATUS_META: AssistantStatusMeta = { label: "Cancelada", badgeStatus: "warning" };
const ERROR_STATUS_META: AssistantStatusMeta = { label: "Error", badgeStatus: "danger" };
const INCOMPLETE_STATUS_META: AssistantStatusMeta = { label: "Incompleta", badgeStatus: "neutral" };

const getAssistantStatusMeta = (
  status: { type: string; reason?: string } | undefined,
): AssistantStatusMeta | null => {
  if (!status || status.type === "running" || status.type === "complete") return null;
  if (status.type === "incomplete" && status.reason === "cancelled") return CANCELLED_STATUS_META;
  if (status.type === "incomplete" && status.reason === "error") return ERROR_STATUS_META;
  if (status.type === "incomplete") return INCOMPLETE_STATUS_META;
  return null;
};

const AssistantMessage: FC = () => {
  const statusMeta = useAuiState((state) => getAssistantStatusMeta(state.message.status));

  return (
    <MessagePrimitive.Root className="relative -mb-5 pb-5" data-role="assistant">
      <MessageBubble variant="ghost" align="start" animateIn={false} className="px-1">
        <MessageBubbleContent className="max-w-none w-full px-1 py-0">
          <div className="leading-7 wrap-break-word text-sm sm:text-[0.9375rem]">
            <MessagePrimitive.Parts components={{ Text: MarkdownText }} />
            <AuiIf
              condition={(state) =>
                state.message.status?.type === "running" && state.message.parts.length === 0
              }
            >
              <span aria-label="Escribiendo" role="status">
                <ThinkingShimmer className="text-sm text-muted-foreground">
                  Escribiendo
                </ThinkingShimmer>
              </span>
            </AuiIf>
            {statusMeta ? (
              <div className="mt-2">
                <Badge status={statusMeta.badgeStatus} size="sm" showIcon>
                  {statusMeta.label}
                </Badge>
              </div>
            ) : null}
            <MessagePrimitive.Error>
              <ErrorPrimitive.Root className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                <ErrorPrimitive.Message />
              </ErrorPrimitive.Root>
            </MessagePrimitive.Error>
          </div>
        </MessageBubbleContent>
      </MessageBubble>
      <div className="ms-1 flex min-h-8 items-center gap-1">
        <BranchPicker />
        <AssistantActionBar />
      </div>
    </MessagePrimitive.Root>
  );
};

const AssistantActionBar: FC = () => (
  <ActionBarPrimitive.Root
    hideWhenRunning
    autohide="not-last"
    className="flex gap-0.5 text-muted-foreground"
  >
    <ActionBarPrimitive.Copy asChild>
      <TooltipIconButton tooltip="Copiar" aria-label="Copiar respuesta" variant="ghost">
        <AuiIf condition={(state) => state.message.isCopied}>
          <Check className="size-4" />
        </AuiIf>
        <AuiIf condition={(state) => !state.message.isCopied}>
          <Copy className="size-4" />
        </AuiIf>
      </TooltipIconButton>
    </ActionBarPrimitive.Copy>
    <ActionBarPrimitive.Reload asChild>
      <TooltipIconButton tooltip="Regenerar" aria-label="Regenerar respuesta" variant="ghost">
        <RefreshCw className="size-4" />
      </TooltipIconButton>
    </ActionBarPrimitive.Reload>
    <ActionBarMorePrimitive.Root>
      <ActionBarMorePrimitive.Trigger asChild>
        <TooltipIconButton tooltip="Más acciones" aria-label="Más acciones" variant="ghost">
          <MoreHorizontal className="size-4" />
        </TooltipIconButton>
      </ActionBarMorePrimitive.Trigger>
      <ActionBarMorePrimitive.Content
        side="bottom"
        align="start"
        className="z-50 min-w-36 rounded-lg border border-border bg-popover p-1 shadow-md"
      >
        <ActionBarPrimitive.ExportMarkdown asChild>
          <ActionBarMorePrimitive.Item className="flex cursor-pointer items-center rounded-md px-2.5 py-1.5 text-sm outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
            Exportar Markdown
          </ActionBarMorePrimitive.Item>
        </ActionBarPrimitive.ExportMarkdown>
      </ActionBarMorePrimitive.Content>
    </ActionBarMorePrimitive.Root>
  </ActionBarPrimitive.Root>
);

const UserMessage: FC = () => (
  <MessagePrimitive.Root className={USER_MESSAGE_ROOT_CLASS} data-role="user">
    <MessageBubble variant="soft" align="end" animateIn={false}>
      <MessageBubbleContent className={USER_MESSAGE_BUBBLE_CLASS}>
        <MessagePrimitive.Parts />
      </MessageBubbleContent>
    </MessageBubble>
    <div className="flex w-full justify-end">
      <BranchPicker />
    </div>
    <ActionBarPrimitive.Root className="absolute start-0 top-1/2 -translate-x-full -translate-y-1/2 pe-1">
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip="Editar" aria-label="Editar mensaje" variant="ghost">
          <Pencil className="size-4" />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  </MessagePrimitive.Root>
);

const EditComposer: FC = () => (
  <MessagePrimitive.Root className="flex flex-col px-2">
    <ComposerPrimitive.Root className="ms-auto flex w-full max-w-[85%] flex-col gap-2 rounded-xl border border-border bg-card p-2 shadow-sm">
      <ComposerPrimitive.Input
        className="min-h-14 w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none"
        autoFocus
      />
      <div className="flex items-center justify-end gap-2">
        <ComposerPrimitive.Cancel asChild>
          <Button variant="ghost" size="sm">
            Cancelar
          </Button>
        </ComposerPrimitive.Cancel>
        <ComposerPrimitive.Send asChild>
          <Button variant="primary" size="sm">
            Actualizar
          </Button>
        </ComposerPrimitive.Send>
      </div>
    </ComposerPrimitive.Root>
  </MessagePrimitive.Root>
);

const BranchPicker = ({ className, ...props }: BranchPickerPrimitive.Root.Props) => (
  <BranchPickerPrimitive.Root
    hideWhenSingleBranch
    className={cn("inline-flex items-center gap-0.5 text-xs text-muted-foreground", className)}
    {...props}
  >
    <BranchPickerPrimitive.Previous asChild>
      <TooltipIconButton tooltip="Anterior" aria-label="Rama anterior" variant="ghost">
        <ChevronLeft className="size-4" />
      </TooltipIconButton>
    </BranchPickerPrimitive.Previous>
    <span className="font-medium tabular-nums">
      <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
    </span>
    <BranchPickerPrimitive.Next asChild>
      <TooltipIconButton tooltip="Siguiente" aria-label="Rama siguiente" variant="ghost">
        <ChevronRight className="size-4" />
      </TooltipIconButton>
    </BranchPickerPrimitive.Next>
  </BranchPickerPrimitive.Root>
);
