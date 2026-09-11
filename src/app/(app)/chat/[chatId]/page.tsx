import { ChatScreen } from "@/components/chat/chat-screen";
import { getGlobalChatStatus } from "@/lib/chat/global-chat-client";

export default async function ChatDetailPage({ params }: { params: Promise<{ chatId: string }> }) {
  const { chatId } = await params;
  return <ChatScreen requestedChatId={chatId} chatStatus={getGlobalChatStatus()} />;
}
