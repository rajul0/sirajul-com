import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Link href={`/projects/${item.cname}`}>
      <li
        key={item.cname}
        className="group relative flex-none w-[250px] rounded-xl overflow-hidden bg-transparent text-white snap-center shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out  transition-shadow"
      >
        <div className="min-h-fit bg-transparent from-white via-gray-100 to-white flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[230px] object-cover group-hover:blur-sm transition-all duration-300"
          />
        </div>

        <motion.div
          initial={false}
          className="absolute inset-0 flex flex-row items-center justify-center opacity-0 translate-y-0 group-hover:translate-y-[-40px] group-hover:opacity-100  transition-all duration-300"
        >
          <div className="px-4 py-2 rounded-full text-white text-sm font-semibold">
            View detail
          </div>
          <FaArrowCircleRight />
        </motion.div>

        <div className="h-full p-4 space-y-2 bg-white dark:bg-[#0f172a]">
          <h3 className="font-semibold text-black dark:text-white text-base">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <TooltipProvider>
              {item.techStack.map((tech, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <Image
                      src={tech.imageUrl}
                      alt={tech.label}
                      width={20}
                      height={20}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-400 dark:bg-white">
                    <p>{tech.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </li>
    </Link>
  );
}
