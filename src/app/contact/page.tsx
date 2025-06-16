"use client";
import { Divider } from "@/components/atoms";
import { ContactForm } from "./components/ContactForm";
import SocialMediaList from "./components/SocialMediaList";
import { Heading } from "@/components/molecules";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  return (
    <section className="w-full px-5 md:px-16 lg:px-32">
      <div className="h-16"></div>
      <Heading
        title="Contact"
        description="Let’s discuss how my skills can support your next project."
      />
      <Divider className="my-4 md:my-5 lg:mt-5 lg:mb-10" />
      <motion.div
        ref={ref}
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
        <SocialMediaList />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="mt-10 space-y-2 md:space-y-5"
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
          Or send me a message
        </h3>
        <ContactForm />
      </motion.div>
      <div className="h-16"></div>
    </section>
  );
};

export default Contact;
