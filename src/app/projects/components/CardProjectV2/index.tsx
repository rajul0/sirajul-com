"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { MdOutlineLink } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { Project } from "@/types";

interface CardProjectV2Props {
  item: Project;
}

export const CardProjectV2 = ({ item }: CardProjectV2Props) => {
  return (
    <li key={item.id} className="group list-none relative">
      <motion.div
        initial={{ opacity: 0, y: 40, x: 10, scale: 0.15 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{
          duration: 0.7,

          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="w-full min-h-[240px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 transition-colors relative"
      >
        <div className="p-4 md:p-8 w-1/2 space-y-2">
          <h3 className="mb-5 text-lg md:text-4xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-justify text-sm md:text-[15px] text-gray-600 dark:text-gray-300 line-clamp-6">
            {item.description}
          </p>
          <div className="h-5"></div>
          <div className="flex flex-wrap gap-2 mt-2 md:bottom-4">
            {item.techStack.map((tech, i) => (
              <Image
                key={i}
                src={`/logos/${tech}.svg`}
                alt={tech}
                width={0}
                height={0}
                className="w-6 h-6 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] object-contain"
              />
            ))}
          </div>

          <div className="hidden md:flex flex-wrap gap-4 absolute bottom-4 md:bottom-8">
            <Link
              href={item.linkSC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Icons.gitHub className="w-12 h-12 stroke-current" />
            </Link>
            <Link
              href={item.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full items-center gap-2 bg-gray-200 hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-white transition-colors "
            >
              <MdOutlineLink className="w-12 h-12 stroke-current text-white dark:text-slate-800" />
            </Link>
          </div>
        </div>

        <Link href={`/projects/${item.cname}`}>
          <div className="w-1/2 h-full right-0 bottom-0 md:w-1/2 md:h-4/5 md:bottom-0 md:right-[-10] absolute">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover md:rounded-tl-xl max-md:group-hover:blur-sm"
            />
          </div>
          <motion.div
            initial={false}
            className="absolute inset-0 flex md:hidden flex-row items-center justify-center opacity-0 translate-y-10 translate-x-[70px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-[70px] transition-all duration-300"
          >
            <div className="px-4 py-2 rounded-full text-white text-sm font-semibold flex flex-row gap-x-5 place-items-center">
              View detail
              <FaArrowCircleRight />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </li>
  );
};
