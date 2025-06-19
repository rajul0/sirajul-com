"use client";
import RevealOnScroll from "@/components/utils/RevealOnScroll";
import { MY_PROJECTS } from "@/data";
import { Project } from "@/types";
import { useEffect, useState } from "react";
import { CardProjectV2 } from "./CardProjectV2";

export default function ProjectList() {
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    setCards(MY_PROJECTS);
  }, []);
  return (
    <div className="w-full mt-5 space-y-6">
      {cards.map((item: Project) => (
        <RevealOnScroll key={item.cname} delay={0.3}>
          <CardProjectV2 item={item} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
