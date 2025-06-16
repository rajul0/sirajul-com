import Link from "next/link";

import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/atoms";
import clsx from "clsx";

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "#";

const Resume = () => {
  const handleAction = (link: string) => window.open(link, "_blank");

  return (
    <>
      <div className="hidden lg:block space-y-5">
        <Button
          className={clsx(
            "flex w-1/3 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm bg-gray-200 hover:text-zinc-600 dark:bg-gray-900 dark:text-neutral-400 hover:dark:text-neutral-200 hover:scale-105"
          )}
          onClick={() => handleAction(`${resumeUrl}/view`)}
        >
          <DownloadIcon />
          <span>Download My Resume</span>
        </Button>
        <iframe
          loading="lazy"
          src={`${resumeUrl}/preview`}
          className="w-full h-[150dvh] rounded-lg"
        />
      </div>

      <div className="lg:hidden">
        <Button
          className={clsx(
            "flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-400 px-4 py-2.5 text-sm text-neutral-600 transition-all duration-300 hover:gap-3 hover:border-neutral-500 hover:text-neutral-700 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:dark:border-neutral-300 hover:dark:text-neutral-300"
          )}
          onClick={() => handleAction(`${resumeUrl}/view`)}
        >
          <DownloadIcon />
          <span>Download My Resume</span>
        </Button>
      </div>
    </>
  );
};

export default Resume;
