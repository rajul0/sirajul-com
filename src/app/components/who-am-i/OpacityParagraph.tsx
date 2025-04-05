import { useRef, useEffect } from "react";
import {
  motion,
  MotionValue,
  progress,
  useScroll,
  useTransform,
} from "framer-motion";
import { space } from "postcss/lib/list";

type OpacityParagraphProps = {
  value: string;
};

export default function OpacityParagraph({ value }: OpacityParagraphProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p className="flex flex-wrap" ref={ref}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        console.log(word);
        console.log([start, end]);

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type WordProps = {
  range: number[];
  progress: MotionValue<number>;
  children: String;
};
const Word = ({ children, range, progress }: WordProps) => {
  //

  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="absolute opacity-30">{children}</span>
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
