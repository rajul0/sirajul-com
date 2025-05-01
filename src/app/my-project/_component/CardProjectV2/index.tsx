"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface CardProjectV2Props {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  delay?: number;
}

export const CardProjectV2 = ({
  id,
  title,
  description,
  image,
  techStack,
  delay = 0,
}: CardProjectV2Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: 10, scale: 0.15 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="w-full min-h-[240px] md:h-[400px] rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 transition-colors relative"
    >
      <div className="p-4 w-1/2 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, i) => (
            <Image
              key={i}
              src={`/logos/${tech}.svg`}
              alt={tech}
              width={20}
              height={20}
              className="dark:invert"
            />
          ))}
        </div>
      </div>

      <div className="w-1/2 h-full right-0 bottom-0 md:w-1/2 md:h-4/5 md:bottom-0 md:right-[-10] absolute">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover lg:rounded-tl-xl"
        />
      </div>
    </motion.div>
  );
};
