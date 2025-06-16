"use client";

import { Divider } from "@/components/atoms";
import { Heading } from "@/components/molecules";
import { motion } from "framer-motion";
import TabsAbout from "./components/TabsAbout";

export default function About() {
  return (
    <section className="w-full px-5 mb-16 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading
        title="About"
        description="A brief view into my world — because every piece of me tells a story worth sharing."
      />
      <Divider className="my-4 md:my-5 lg:mt-5 lg:mb-10" />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <TabsAbout />
      </motion.div>
    </section>
  );
}
