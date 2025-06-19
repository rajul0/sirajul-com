"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import SocialMediaList from "./SocialMediaList";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default function ContactList() {
  return (
    <>
      <SocialMediaList />
      <ContactForm />
    </>
  );
}
