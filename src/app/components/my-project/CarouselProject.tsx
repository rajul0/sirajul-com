"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const cards = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
  {
    id: 2,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
  {
    id: 3,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
  {
    id: 4,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
  {
    id: 5,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
  {
    id: 6,
    title: "Project Alpha",
    description: "Desain dashboard modern dengan animasi interaktif.",
    techStack: ["NextJS", "TypeScript", "ShadcnUI", "TailwindCSS"],
    image: "/images/project.png",
  },
];

export default function ScrollLinked() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const maskImage = useScrollOverflowMask(scrollXProgress, atStart, atEnd);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      setAtEnd(el.scrollLeft >= maxScroll - 5);
    };

    handleScroll(); // initial
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (ref.current) {
      const width = ref.current.children[0]?.clientWidth || 200;
      ref.current.scrollBy({
        left: direction === "left" ? -width - 20 : width + 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-full w-screen mx-auto">
      {!atStart && (
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-2 shadow-md"
        >
          <FiChevronLeft size={24} />
        </button>
      )}

      {!atEnd && (
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/40 rounded-full p-2 shadow-md"
        >
          <FiChevronRight size={24} />
        </button>
      )}

      {/* Carousel */}
      <motion.ul
        ref={ref}
        style={{ maskImage }}
        className="flex overflow-x-scroll gap-5 px-4 py-5 list-none snap-x snap-mandatory touch-pan-x scroll-smooth scrollbar-none scrollbar-hide"
      >
        {cards.map((item) => (
          <li
            key={item.id}
            className="flex-none w-[200px] lg:w-[240px] rounded-xl overflow-hidden dark:bg-[#0f172a] text-white snap-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="min-h-fit bg-gradient-to-br from-white via-gray-100 to-white flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-64 h-48 object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-black dark:text-white text-base">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-xs text-slate-200 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

function useScrollOverflowMask(
  scrollXProgress: MotionValue<number>,
  atStart: boolean,
  atEnd: boolean
) {
  const left = `0%`;
  const right = `100%`;
  const leftInset = `20%`;
  const rightInset = `80%`;
  const transparent = `#0000`;
  const opaque = `#000`;

  const maskImage = useMotionValue("");

  useEffect(() => {
    let gradient = "";

    if (atStart && atEnd) {
      gradient = `linear-gradient(90deg, ${opaque}, ${opaque})`;
    } else if (atStart) {
      gradient = `linear-gradient(90deg, ${opaque}, ${opaque} ${rightInset}, ${transparent})`;
    } else if (atEnd) {
      gradient = `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque})`;
    } else {
      gradient = `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`;
    }

    animate(maskImage, gradient, { duration: 0.3 });
  }, [atStart, atEnd]);

  return maskImage;
}
