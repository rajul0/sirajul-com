"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const ToolsAnimate = dynamic(() => import("./ToolsAnimate"), {
  loading: () => <Skeleton />,
  ssr: false,
});

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
                duration: 1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="text-base md:text-xl text-justify"
        >
          <h1 className="text-xl md:text-2xl md:mb-4 md:text-[30px] font-bold opacity-90">
            Tools I&apos;ve Used
          </h1>
        </motion.div>
      </div>
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
        animate={controls}
        className="max-w-full"
      >
        <ToolsAnimate />
      </motion.div>
    </div>
  );
}
