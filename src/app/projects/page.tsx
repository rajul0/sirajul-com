"use client";
import { Heading } from "@/components/molecules/Heading";
import { CardProjectV2 } from "./components";
import { Divider } from "@/components/atoms";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import RevealOnScroll from "@/components/utils/RevealOnScroll";
import { MY_PROJECTS } from "@/data";

export default function MyProject() {
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    setCards(MY_PROJECTS);
  }, []);

  return (
    <main className="w-full px-5 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading
        title="My Project"
        description="Here are all the projects I've finished — from course assignments and competitions to my own side projects. Some are private, some are open source, but all of them were a great chance to learn and grow!"
      />
      <Divider className="my-4 md:mt-2 md:mb-5 lg:mt-5 lg:mb-10" />

      <div className="w-full mt-5 space-y-6">
        {cards.map((item: Project) => (
          <RevealOnScroll key={item.cname} delay={0.3}>
            <CardProjectV2 item={item} />
          </RevealOnScroll>
        ))}
      </div>
      <div className="h-[10vh]"></div>
    </main>
  );
}
