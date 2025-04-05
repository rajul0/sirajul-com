"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimateWords } from "./AnimateWords";

export default function Hero() {
  const constraintsRef = useRef<any>(null);
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

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
            title="SIRAJUL ILMI"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />

          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: `0em`,
              transition: {
                delay: 1,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            }}
            drag
            dragSnapToOrigin
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="absolute w-[230] h-[230] mt-10 mx-auto cursor-pointer"
          >
            <Image
              src="/images/fotoProfile-2.jpg"
              priority
              fill
              alt="Sirajul Ilmi"
              className="object-cover grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
              onDragStart={handleDragStart}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
