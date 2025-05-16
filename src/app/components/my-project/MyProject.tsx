"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import CarouselProject from "./CarouselProject";
import { useRouter } from "next/navigation";

export default function MyProject() {
  const router = useRouter();
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
          <h1 className="text-2xl md:mb-4 md:text-[30px] font-semibold opacity-90">
            The Projects that I've made
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 80 },
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
          <Button
            variant="ghost"
            onClick={() => router.push("/projects")}
            className="hidden md:flex opacity-90 text-base md:text-lg hover:bg-black/5 dark:hover:bg-gray-600/50 "
          >
            <p>View all</p>
            <FiArrowRight className="text-black dark:text-white" />
          </Button>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              ease: [0.25, 0.6, 0.3, 1],
            },
          },
        }}
        initial="hidden"
        animate={controls}
        className="max-w-full overflow-y-auto"
      >
        <CarouselProject />
      </motion.div>
    </div>
  );
}
