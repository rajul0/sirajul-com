"use client";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { AnimateWords } from "./AnimateWords";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function Hero() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const y = useMotionValue(0);

  return (
    <motion.section
      id="hero"
      className="hidden md:flex relative z-10  min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col items-center justify-center">
        <div
          ref={constraintsRef}
          className="relative flex flex-col items-center justify-center"
        >
          <AnimateWords
            title="FRONT-END DEVELOPER"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 1,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            }}
            style={{ y }} // gunakan motionValue y
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="absolute w-[230] h-[230] mt-10 mx-auto cursor-pointer"
          >
            <Avatar>
              <AvatarImage
                src="https://github.com/rajul0.png"
                alt="Sirajul Ilmi"
                className="object-cover grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
                onDragStart={handleDragStart}
              />
            </Avatar>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
