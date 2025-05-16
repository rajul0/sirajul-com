"use client";

import React, { useRef } from "react";

import {
  motion,
  useMotionValue,
  animate,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import ToolsAnimate from "./ToolsAnimate";

const cards = [
  { title: "Next.js" },
  { title: "Tailwind CSS" },
  { title: "React" },
  { title: "TypeScript" },
  { title: "Firebase" },
  { title: "Framer Motion" },
];

export default function MyTools() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex row place-content-between">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.6, 0.3, 1],
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="text-base md:text-xl text-justify"
        >
          <h1 className="text-2xl md:mb-4 md:text-[30px] font-bold opacity-90">
            Tools I've Used
          </h1>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.25, 0.6, 0.3, 1],
              delay: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        className="max-w-full"
      >
        <ToolsAnimate />
      </motion.div>
    </div>
  );
}
