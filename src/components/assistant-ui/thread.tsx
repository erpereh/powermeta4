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
import { EmployeeDisambiguationCard } from "@/components/chat/employee-disambiguation-card";
import { ErpRecommendations } from "@/components/chat/erp-recommendations";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { isEmployeeDisambiguationPart } from "@/lib/agent/disambiguation";
import { cn } from "@/lib/utils";

type ChatModelOption = {
  id: string;
  name: string;
};

type ThreadProps = {
  models: readonly ChatModelOption[];
  selectedProviderConfigId: string | null;
  onProviderChange: (providerConfigId: string) => void;
};

const isNewChatView = (state: AssistantState) =>
  state.thread.messages.length === 0 && (!state.thread.isLoading || state.threads.isLoading);

export function Thread({ models, selectedProviderConfigId, onProviderChange }: ThreadProps) {
  const composerInputRef = useRef<HTMLTextAreaElement>(null);
  const isEmpty = useAuiState(isNewChatView);

  return (
    <ThreadPrimitive.Root
      className="aui-root aui-thread-root flex h-full min-h-0 flex-col bg-background"
      style={{
        ["--thread-max-width" as string]: "44rem",
        ["--composer-bg" as string]:
          "color-mix(in oklab, var(--color-muted) 30%, var(--color-background))",
        ["--composer-radius" as string]: "1.5rem",
        ["--composer-padding" as string]: "8px",
      }}
    >
      <ThreadPrimitive.Viewport
        turnAnchor="top"
        data-slot="aui_thread-viewport"
        className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto scroll-smooth"
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-(--thread-max-width) flex-1 flex-col px-4 pt-4",
            isEmpty && "justify-center",
          )}
        >
          <AuiIf condition={isNewChatView}>
            <ThreadWelcome />
          </AuiIf>

          <div data-slot="aui_message-group" className="mb-14 flex flex-col gap-y-6 empty:hidden">
            <ThreadPrimitive.Messages>{() => <ThreadMessage />}</ThreadPrimitive.Messages>
          </div>

          <ThreadPrimitive.ViewportFooter
            className={cn(
              "aui-thread-viewport-footer flex flex-col gap-4 overflow-visible bg-background pb-4 md:pb-6",
              !isEmpty && "sticky bottom-0 mt-auto rounded-(--composer-radius)",
            )}
          >
            <ThreadScrollToBottom />
            <Composer
              inputRef={composerInputRef}
              models={models}
              selectedProviderConfigId={selectedProviderConfigId}
              onProviderChange={onProviderChange}
            />
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
  <div className="mb-6 flex flex-col items-center px-4 text-center">
    <h1 className="text-2xl font-semibold tracking-tight">¿En qué puedo ayudarte hoy?</h1>
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
      className="absolute -top-11 self-center rounded-full p-3 disabled:invisible"
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

const Composer = ({ inputRef, models, selectedProviderConfigId, onProviderChange }: ComposerProps) => (
  <ComposerPrimitive.Root className="relative flex w-full flex-col">
    <div className="flex w-full flex-col gap-2 rounded-(--composer-radius) border border-border/60 bg-(--composer-bg) p-(--composer-padding) transition-[border-color] focus-within:border-ring/70">
      <ComposerPrimitive.Input
        ref={inputRef}
        placeholder="Escribe un mensaje..."
        className="max-h-32 min-h-10 w-full resize-none bg-transparent px-2.5 py-1 text-base leading-6 outline-none placeholder:text-muted-foreground/70"
        rows={1}
        autoFocus
        enterKeyHint="send"
        aria-label="Mensaje"
        unstable_insertNewlineOnTouchEnter
      />
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex min-w-0 items-center gap-1.5">
          <AttachmentButton />
          {models.length === 0 || !selectedProviderConfigId ? (
            <p className="px-2.5 text-xs text-muted-foreground">Configura un modelo en Ajustes</p>
          ) : (
            <Select value={selectedProviderConfigId} onValueChange={onProviderChange}>
              <SelectTrigger className="h-8 w-auto min-w-36 gap-1.5 rounded-full border-transparent bg-transparent px-2.5 text-xs text-muted-foreground shadow-none hover:bg-muted hover:text-foreground focus:ring-0">
                <SelectValue aria-label="Modelo seleccionado" />
              </SelectTrigger>
              <SelectContent
                align="start"
                position="popper"
                side="top"
                sideOffset={4}
                avoidCollisions={false}
              >
                {models.map((model) => (
                  <SelectItem key={model.id} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <AuiIf condition={(state) => !state.thread.isRunning}>
            <ComposerPrimitive.Send asChild>
              <TooltipIconButton
                tooltip="Enviar mensaje"
                type="button"
                variant="default"
                className="size-8 rounded-full"
                aria-label="Enviar mensaje"
              >
                <ArrowUp className="size-4" />
              </TooltipIconButton>
            </ComposerPrimitive.Send>
          </AuiIf>
          <AuiIf condition={(state) => state.thread.isRunning}>
            <ComposerPrimitive.Cancel asChild>
              <Button
                type="button"
                size="icon"
                className="size-8 rounded-full"
                aria-label="Detener respuesta"
              >
                <Square className="size-3.5 fill-current" />
              </Button>
            </ComposerPrimitive.Cancel>
          </AuiIf>
        </div>
      </div>
    </div>
  </ComposerPrimitive.Root>
);

const AttachmentButton: FC = () => {
  const [noticeVisible, setNoticeVisible] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <TooltipIconButton
        tooltip="Adjuntar archivo"
        type="button"
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

const AssistantMessage: FC = () => (
  <MessagePrimitive.Root className="relative -mb-6 pb-6" data-role="assistant">
    <div className="px-2 leading-7 wrap-break-word">
      <MessagePrimitive.Parts>
        {({ part }) => {
          if (part.type === "text") return <MarkdownText />;
          const unknownPart: unknown = part;
          if (isEmployeeDisambiguationPart(unknownPart)) {
            return <EmployeeDisambiguationCard data={unknownPart.data} />;
          }
          return null;
        }}
      </MessagePrimitive.Parts>
      <AuiIf
        condition={(state) =>
          state.message.status?.type === "running" && state.message.parts.length === 0
        }
      >
        <span className="animate-pulse text-primary" aria-label="El asistente está trabajando">
          •
        </span>
      </AuiIf>
      <MessagePrimitive.Error>
        <ErrorPrimitive.Root className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          <ErrorPrimitive.Message />
        </ErrorPrimitive.Root>
      </MessagePrimitive.Error>
    </div>
    <div className="ms-2 flex min-h-8 items-center">
      <BranchPicker />
      <AssistantActionBar />
    </div>
  </MessagePrimitive.Root>
);

const AssistantActionBar: FC = () => (
  <ActionBarPrimitive.Root
    hideWhenRunning
    autohide="not-last"
    className="flex gap-1 text-muted-foreground"
  >
    <ActionBarPrimitive.Copy asChild>
      <TooltipIconButton tooltip="Copiar" aria-label="Copiar respuesta">
        <AuiIf condition={(state) => state.message.isCopied}>
          <Check className="size-4" />
        </AuiIf>
        <AuiIf condition={(state) => !state.message.isCopied}>
          <Copy className="size-4" />
        </AuiIf>
      </TooltipIconButton>
    </ActionBarPrimitive.Copy>
    <ActionBarPrimitive.Reload asChild>
      <TooltipIconButton tooltip="Regenerar" aria-label="Regenerar respuesta">
        <RefreshCw className="size-4" />
      </TooltipIconButton>
    </ActionBarPrimitive.Reload>
    <ActionBarMorePrimitive.Root>
      <ActionBarMorePrimitive.Trigger asChild>
        <TooltipIconButton tooltip="Más acciones" aria-label="Más acciones">
          <MoreHorizontal className="size-4" />
        </TooltipIconButton>
      </ActionBarMorePrimitive.Trigger>
      <ActionBarMorePrimitive.Content
        side="bottom"
        align="start"
        className="z-50 min-w-36 rounded-xl border bg-popover p-1 shadow-lg"
      >
        <ActionBarPrimitive.ExportMarkdown asChild>
          <ActionBarMorePrimitive.Item className="flex cursor-pointer items-center rounded-lg px-2.5 py-1.5 text-sm outline-none hover:bg-muted focus:bg-muted">
            Exportar Markdown
          </ActionBarMorePrimitive.Item>
        </ActionBarPrimitive.ExportMarkdown>
      </ActionBarMorePrimitive.Content>
    </ActionBarMorePrimitive.Root>
  </ActionBarPrimitive.Root>
);

const UserMessage: FC = () => (
  <MessagePrimitive.Root
    className="grid grid-cols-[minmax(24px,1fr)_auto] gap-y-2 px-2"
    data-role="user"
  >
    <div className="col-start-2 max-w-[min(85%,48rem)] rounded-2xl bg-muted px-4 py-3 text-sm leading-6 break-words [word-break:normal]">
      <MessagePrimitive.Parts />
    </div>
    <div className="col-span-full col-start-1 row-start-3 flex justify-end">
      <BranchPicker />
    </div>
    <ActionBarPrimitive.Root className="absolute start-0 top-1/2 -translate-x-full -translate-y-1/2 pe-2">
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip="Editar" aria-label="Editar mensaje">
          <Pencil className="size-4" />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  </MessagePrimitive.Root>
);

const EditComposer: FC = () => (
  <MessagePrimitive.Root className="flex flex-col px-2">
    <ComposerPrimitive.Root className="ms-auto flex w-full max-w-[85%] flex-col rounded-2xl border border-border bg-card p-2">
      <ComposerPrimitive.Input
        className="min-h-14 w-full resize-none bg-transparent px-3 py-2 text-sm outline-none"
        autoFocus
      />
      <div className="flex items-center justify-end gap-2">
        <ComposerPrimitive.Cancel asChild>
          <Button variant="ghost" size="sm" className="rounded-full">
            Cancelar
          </Button>
        </ComposerPrimitive.Cancel>
        <ComposerPrimitive.Send asChild>
          <Button size="sm" className="rounded-full">
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
    className={cn("inline-flex items-center text-xs text-muted-foreground", className)}
    {...props}
  >
    <BranchPickerPrimitive.Previous asChild>
      <TooltipIconButton tooltip="Anterior" aria-label="Rama anterior">
        <ChevronLeft className="size-4" />
      </TooltipIconButton>
    </BranchPickerPrimitive.Previous>
    <span className="font-medium">
      <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
    </span>
    <BranchPickerPrimitive.Next asChild>
      <TooltipIconButton tooltip="Siguiente" aria-label="Rama siguiente">
        <ChevronRight className="size-4" />
      </TooltipIconButton>
    </BranchPickerPrimitive.Next>
  </BranchPickerPrimitive.Root>
);
