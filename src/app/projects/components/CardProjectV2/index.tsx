"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { MdOutlineLink } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { Project } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CardProjectV2Props {
  item: Project;
}

export const CardProjectV2 = ({ item }: CardProjectV2Props) => {
  return (
    <li
      key={item.cname}
      className="group list-none relative transition-transform duration-300 ease-out hover:scale-105"
    >
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
          <TooltipProvider>
            <div className="flex flex-wrap gap-2 mt-2 md:bottom-4">
              {item.techStack.map((tech, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <Image
                      key={i}
                      src={tech.imageUrl}
                      alt={tech.label}
                      width={0}
                      height={0}
                      className="w-6 h-6 md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] object-contain"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-400 dark:bg-white">
                    <p>{tech.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          <div className="hidden md:flex flex-wrap gap-4 absolute bottom-4 md:bottom-8">
            {item.linkSC ? (
              <Link
                href={item.linkSC}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Icons.gitHub className="w-12 h-12 stroke-current" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed opacity-50">
                <Icons.gitHub className="w-12 h-12 stroke-current" />
              </span>
            )}

            {item.liveDemo ? (
              <Link
                href={item.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full items-center gap-2 bg-gray-200 hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-white transition-colors"
              >
                <MdOutlineLink className="w-12 h-12 stroke-current text-white dark:text-slate-800" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 bg-gray-400 rounded-full cursor-not-allowed opacity-50">
                <MdOutlineLink className="w-12 h-12 text-white dark:text-slate-800" />
              </span>
            )}
          </div>
        </div>

        <Link href={`/projects/${item.cname}`}>
          <div className="w-1/2 h-full right-0 bottom-0 md:w-1/2 md:h-4/5 md:bottom-0 md:right-[-10] absolute">
            <Image
              src={item.image}
              alt={item.title}
              priority
              fill
              sizes="1"
              className="object-cover md:rounded-tl-xl md:group-hover:blur-sm"
            />
          </div>
          <motion.div
            initial={false}
            className="absolute inset-0 flex flex-row items-center justify-center opacity-0 translate-y-10 lg:translate-y-[50px] translate-x-[70px] group-hover:translate-y-0 lg:group-hover:translate-y-[50px] group-hover:translate-x-[70px] lg:group-hover:translate-x-[300px] group-hover:opacity-100  transition-all duration-300"
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
