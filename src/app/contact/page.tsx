import { Divider } from "@/components/atoms";
import { Heading } from "@/components/molecules";
import { Metadata } from "next";
import { metaData } from "../config";
import ContactList from "./components/ContactList";

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION =
  "Let’s discuss how my skills can support your next project.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} - ${metaData.name}`,
  description: PAGE_DESCRIPTION,
};

const Contact = () => {
  return (
    <section className="w-full px-5 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Divider className="my-4 md:my-5 lg:mt-5 lg:mb-10" />
      <ContactList />
      <div className="h-16"></div>
    </section>
  );
};

export default Contact;
