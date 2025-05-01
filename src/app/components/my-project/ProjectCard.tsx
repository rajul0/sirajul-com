import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
};

type ProjectCardProps = {
  item: Project;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <li
      key={item.id}
      className="group relative flex-none w-[200px] lg:w-[240px] rounded-xl overflow-hidden bg-transparent text-white snap-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="min-h-fit bg-transparent from-white via-gray-100 to-white flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover group-hover:blur-sm transition-all duration-300"
        />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-row items-center justify-center"
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

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.techStack.map((tech: string, i: number) => (
            <Image
              key={i}
              className="text-black dark:text-white"
              src={`/logos/${tech}.svg`}
              alt="Tech Logo"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
