"use client";

import { useSession } from "next-auth/react";
import { useMessages } from "@/hooks/useMessages";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const ChatList = dynamic(() => import("./ChatList"), {
  loading: () => <Skeleton />,
  ssr: false,
});

const ChatInput = dynamic(() => import("./ChatInput"), {
  loading: () => <Skeleton />,
  ssr: false,
});
const ChatAuth = dynamic(() => import("./ChatAuth"), {
  loading: () => <Skeleton />,
  ssr: false,
});

const Chat = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession();
  const { messages, onDeleteMessage, onSendMessage } = useMessages();

  return (
    <>
      <ChatList
        isWidget={isWidget}
        messages={messages}
        onDeleteMessage={onDeleteMessage}
      />
      {session ? (
        <ChatInput onSendMessage={onSendMessage} isWidget={isWidget} />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};

export default Chat;
