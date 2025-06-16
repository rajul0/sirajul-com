"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function RevealOnScroll({ children, delay = 0 }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
