import { ChatScreen } from "@/components/chat/chat-screen";
import { getGlobalChatStatus } from "@/lib/chat/global-chat-client";

export default function Page() {
  return <ChatScreen chatStatus={getGlobalChatStatus()} />;
}
