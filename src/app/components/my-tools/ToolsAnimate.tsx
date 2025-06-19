import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { MY_PROFILE } from "@/data/profile";
import SkillCard from "./SkillCard";
import { Stack } from "@/types";

export default function ToolsAnimate() {
  const [mergedSkills1, setMergedSkills1] = useState<Stack[]>([]);
  const [mergedSkills2, setMergedSkills2] = useState<Stack[]>([]);

  const maskImage = useMaskImage();

  useEffect(() => {
    const stacks = MY_PROFILE.techStack;
    const half = Math.ceil(stacks.length / 2);
    setMergedSkills1(stacks.slice(0, half));
    setMergedSkills2(stacks.slice(half));
  }, []);

  return (
    <motion.div
      style={{
        WebkitMaskImage: maskImage,
        maskImage: maskImage,
      }}
      className="w-full bg-transparent overflow-hidden relative"
    >
      <SkillScroller skills={mergedSkills1} reverse={true} duration={60} />
      <SkillScroller skills={mergedSkills2} reverse={false} duration={60} />
    </motion.div>
  );
}

function useMaskImage() {
  const maskImage = useMotionValue("");

  useEffect(() => {
    const leftInset = `20%`;
    const rightInset = `80%`;
    const transparent = `#0000`;
    const opaque = `#000`;

    const gradient = `linear-gradient(90deg, ${transparent} 0%, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent} 100%)`;

    animate(maskImage, gradient, { duration: 0.3 });
  }, []);

  return maskImage;
}

interface SkillScrollerProps {
  skills: Stack[];
  reverse?: boolean;
  duration?: number;
}

function SkillScroller({
  skills,
  reverse = false,
  duration = 20,
}: SkillScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2;
      setScrollDistance(totalWidth);
    }
  }, [skills]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        animate={{
          x: reverse ? [-scrollDistance, 0] : [0, -scrollDistance],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
        className="flex py-2 gap-4 whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillCard key={i} title={skill.label} logo={skill.imageUrl} />
        ))}
      </motion.div>
    </div>
  );
}
