import { ChatScreen } from "@/components/chat/chat-screen";

export default async function ChatDetailPage({ params }: { params: Promise<{ chatId: string }> }) {
  const { chatId } = await params;
  return <ChatScreen requestedChatId={chatId} />;
}
