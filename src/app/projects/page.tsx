"use client";
import { Heading } from "@/components/molecules/Heading";
import { CardProjectV2 } from "./components";
import Divider from "@/components/atoms/Divider";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import { fetchProjects } from "@/lib/firebase/fetch";

export default function MyProject() {
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setCards);
  }, []);

  return (
    <main className="w-full px-4 md:px-16 lg:px-32">
      <div className="h-20"></div>
      <Heading
        title="My Project"
        description="All the projects I have completed, both private and open-source. These projects are course assignments, competitions and personal projects."
      />
      <Divider />

      <div className="w-full mt-5 space-y-6">
        {cards.map((item: Project) => (
          <CardProjectV2 key={item.id} item={item} />
        ))}
      </div>
      <div className="h-[10vh]"></div>
    </main>
  );
}
