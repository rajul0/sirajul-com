import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";

const cards = [
  { title: "Next.js" },
  { title: "Tailwind CSS" },
  { title: "React" },
  { title: "TypeScript" },
  { title: "Firebase" },
  { title: "Framer Motion" },
];

export default function ToolsAnimate() {
  const [mergedSkills1, setMergedSkills1] = useState<string[]>([]);
  const [mergedSkills2, setMergedSkills2] = useState<string[]>([]);

  const maskImage = useMaskImage();
  useEffect(() => {
    const fetchSkill = async () => {
      const querySnapshot = await getDocs(collection(db, "skill"));

      const tempSkills1: string[] = [];
      const tempSkills2: string[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tempSkills1.push(
          ...(data.web_skill || []),
          ...(data.mobile_skill || [])
        );
        tempSkills2.push(
          ...(data.desktop_skill || []),
          ...(data.database_skill || []),
          ...(data.iot_skill || [])
        );
      });

      setMergedSkills1(tempSkills1);
      setMergedSkills2(tempSkills2);
    };

    fetchSkill();
  }, []);

  return (
    <motion.div
      style={{
        WebkitMaskImage: maskImage,
        maskImage: maskImage,
      }}
      className="w-full bg-transparent overflow-hidden relative"
    >
      <SkillScroller skills={mergedSkills1} reverse={true} duration={30} />
      <SkillScroller skills={mergedSkills2} reverse={false} duration={30} />
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
  skills: string[];
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
      const totalWidth = containerRef.current.scrollWidth / 2; // isi diduplikasi
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
        className="flex py-2 gap-4 whitespace-nowrap "
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillCard
            key={i}
            title={skill}
            logo={`/logos/${skill.toLowerCase()}.svg`}
          />
        ))}
      </motion.div>
    </div>
  );
}
