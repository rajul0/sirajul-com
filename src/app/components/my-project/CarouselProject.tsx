import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MY_PROJECTS } from "@/data";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default function CarouselProject() {
  const ref = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const maskImage = useScrollOverflowMask(atStart, atEnd);
  const [cards, setCards] = useState<Project[]>([]);

  useEffect(() => {
    setCards(MY_PROJECTS.slice(0, 6));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 5);
      setAtEnd(el.scrollLeft >= maxScroll - 5);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

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
    <div className="relative max-w-full w-screen mx-auto overflow-y-auto">
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
        className="flex overflow-x-auto snap-x touch-y gap-5 px-4 py-5 list-none snap-x snap-mandatory scroll-smooth scrollbar-none scrollbar-hide"
      >
        {cards.map((item) => (
          <ProjectCard key={item.cname} item={item} />
        ))}
      </motion.ul>
    </div>
  );
}

function useScrollOverflowMask(atStart: boolean, atEnd: boolean) {
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
