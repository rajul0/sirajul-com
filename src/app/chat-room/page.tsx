import { Divider } from "@/components/atoms";
import { Heading } from "@/components/molecules/Heading";
import { auth } from "@/auth";
import Chat from "./components/Chat";
import { SessionProvider } from "next-auth/react";
import { Metadata } from "next";
import { metaData } from "../config";

const PAGE_TITLE = "Chat Room";
const PAGE_DESCRIPTION =
  "Drop whatever’s on your mind! Ideas, stories, questions… or just say hi👋";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} - ${metaData.name}`,
  description: PAGE_DESCRIPTION,
};

export default async function ChatRoom() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <section className="w-full px-5 mb-16 md:px-16 lg:px-32">
        <div className="h-16"></div>
        <Heading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Divider className="my-4 md:my-5 lg:mt-5 lg:mb-10" />
        <Chat />
      </section>
    </SessionProvider>
  );
}
