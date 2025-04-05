"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import OpacityParagraph from "./OpacityParagraph";

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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasShown]);

  return (
    <div ref={ref} className="flex items-center">
      {hasShown && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-base md:text-xl text-justify"
        >
          <h1 className="text-3xl md:mb-4 md:text-[80px] font-bold">
            Who Am I
          </h1>
          {/* <p className="md:mt-4 text-black dark:text-gray-300">
            {" "}
            <span className="font-bold"></span> but you can call me{" "}
            <span className="font-bold">Rajul</span>
          </p> */}
          <OpacityParagraph value="Hi there 👋, my name is Sirajul Ilmi but you can call me Rajul Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." />
        </motion.div>
      )}
    </div>
  );
}
// export default function WhoAmI() {
//   return (
//     <div className="w-full">
//       <h1 className="text-3xl md:text-[80px] font-bold">Who Am I</h1>
//     </div>
//   );
// }
