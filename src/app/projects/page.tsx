import { Heading } from "@/components/molecules/Heading";
import { Divider } from "@/components/atoms";
import { Metadata } from "next";
import ProjectsList from "./components/ProjectsList";
import { metaData } from "../config";

const PAGE_TITLE = "My Projects";
const PAGE_DESCRIPTION =
  "Here are all the projects I've finished — from course assignments and competitions to my own side projects. Some are private, some are open source, but all of them were a great chance to learn and grow!";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} - ${metaData.name}`,
  description: PAGE_DESCRIPTION,
};

export default function MyProject() {
  return (
    <section className="w-full px-5 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Divider className="my-4 md:mt-2 md:mb-5 lg:mt-5 lg:mb-10" />
      <ProjectsList />
      <div className="h-[10vh]"></div>
    </section>
  );
}
