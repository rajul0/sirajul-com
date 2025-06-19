import { Divider } from "@/components/atoms";
import { Heading } from "@/components/molecules";
import TabsAbout from "./components/TabsAbout";
import { Metadata } from "next";
import { metaData } from "../config";

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION =
  "A brief view into my world — because every piece of me tells a story worth sharing.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} - ${metaData.name}`,
  description: PAGE_DESCRIPTION,
};

export default function About() {
  return (
    <section className="w-full px-5 mb-16 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Divider className="my-4 md:my-5 lg:mt-5 lg:mb-10" />
      <TabsAbout />
    </section>
  );
}
