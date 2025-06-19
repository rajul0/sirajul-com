import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

type OpacityParagraphProps = {
  value: string;
};

export default function OpacityParagraph({ value }: OpacityParagraphProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.40"],
  });

  const words = value.split(" ");

  return (
    <>
      <p
        className="hidden md:flex flex-wrap place-content-between font-light text-md"
        ref={ref}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
      <p className="md:hidden text-md font-light line-clamp-[10]">{value}</p>
    </>
  );
}

type WordProps = {
  range: number[];
  progress: MotionValue<number>;
  children: string;
};
const Word = ({ children, range, progress }: WordProps) => {
  //

  const opacity = useTransform(progress, range, [0, 0.85]);

  return (
    <span className="relative">
      <span className="absolute opacity-30 transition-all duration-300">
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        transition={{ delay: 0.1, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="mr-2"
      >
        {children}
      </motion.span>
    </span>
  );
};
