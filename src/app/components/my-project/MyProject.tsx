"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { MY_PROJECTS } from "@/data";

const CarouselProject = dynamic(() => import("./CarouselProject"), {
  loading: () => <Skeleton />,
  ssr: false,
});

export default function MyProject() {
  const router = useRouter();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex row place-content-between">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="text-base md:text-xl text-justify"
        >
          <h1 className="text-xl md:text-2xl md:mb-4 md:text-[30px] font-bold opacity-90">
            The Projects I&apos;ve made
          </h1>
        </motion.div>
        {MY_PROJECTS.length > 6 && (
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.6, 0.3, 1],
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="text-base md:text-xl text-justify"
          >
            <Button
              className={clsx(
                "flex w-full items-center justify-center transition-all duration-300 opacity-90 dark:bg-white/20 text-zinc-200 hover:scale-105 gap-x-2"
              )}
              onClick={() => router.push("/projects")}
            >
              <p>View all</p>
              <FiArrowRight />
            </Button>
          </motion.div>
        )}
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              ease: [0.25, 0.6, 0.3, 1],
            },
          },
        }}
        initial="hidden"
        animate={controls}
        className="max-w-full overflow-y-auto"
      >
        <CarouselProject />
      </motion.div>
    </div>
  );
}
