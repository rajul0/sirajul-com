"use client";

import clsx from "clsx";

import { Button } from "@/components/ui/button";
import { SOCIAL_MEDIA } from "@/data";
import { motion } from "framer-motion";
import { useRef } from "react";

const SocialMediaList = () => {
  const handleAction = (link: string) => window.open(link, "_blank");
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-5 pb-2">
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
          Find me on social media
        </h3>
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          {SOCIAL_MEDIA?.map((item, index: number) => (
            <Button
              key={index}
              className={clsx(
                "flex w-full items-center justify-center transition-all duration-300 text-zinc-200 hover:scale-105 md:w-1/5 gap-x-2",
                item?.className
              )}
              onClick={() => handleAction(item?.href)}
              data-umami-event={item?.eventName}
            >
              {item.icon}
              {item?.title}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMediaList;
