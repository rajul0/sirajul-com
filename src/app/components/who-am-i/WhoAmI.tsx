"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import OpacityParagraph from "./OpacityParagraph";
import { MY_PROFILE } from "@/data";

export default function WhoAmI() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShown) {
          setHasShown(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasShown]);

  return (
    <div ref={ref} className="flex items-center ">
      {hasShown && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-base md:text-lg text-justify"
        >
          <h1 className="text-3xl md:mb-10 md:text-[65px] font-bold opacity-90">
            Who Am I
          </h1>

          <OpacityParagraph value={MY_PROFILE.description} />
        </motion.div>
      )}
    </div>
  );
}
