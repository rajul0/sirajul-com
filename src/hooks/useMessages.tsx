import { onValue, ref, set, remove } from "firebase/database";
import { MessageProps } from "@/types";
import { useEffect, useState } from "react";
import { messagePath, db } from "@/lib/firebase";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";

export function useMessages() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const onSendMessage = (message: string) => {
    const messageId = uuidv4();
    const messageRef = ref(db, `${messagePath}/${messageId}`);

    set(messageRef, {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
    });
  };

  const onDeleteMessage = (id: string) => {
    const messageRef = ref(db, `${messagePath}/${id}`);

    if (messageRef) {
      remove(messageRef);
    }
  };

  useEffect(() => {
    const messagesRef = ref(db, messagePath);
    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData) as MessageProps[];
        const sortedMessage = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        setMessages(sortedMessage);
      }
    });
  }, []);

  return { messages, onSendMessage, onDeleteMessage };
}
