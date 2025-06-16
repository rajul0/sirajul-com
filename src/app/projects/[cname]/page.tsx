"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/molecules";
import { Divider } from "@/components/atoms";
import { CarouselImg } from "@/components/organisms";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/types";
import { MY_PROJECTS } from "@/data";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { MdOutlineLink } from "react-icons/md";

export default function Page({
  params,
}: {
  params: Promise<{ cname: string; id: string }>;
}) {
  const { cname } = use(params);
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [dataProject, setDataProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = MY_PROJECTS.find((project) => project.cname === cname);
    setDataProject(foundProject || null);
  }, [cname]);

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <main
      className={`w-full px-4 lg:px-16 lg:px-32 transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="h-20 md:h-10" />

      {!dataProject ? (
        <>
          <Skeleton className="h-12 w-3/4 mb-2" />
          <Skeleton className="h-5 w-2/4 mb-6" />
          <Divider />
          <div className="place-self-center w-1/2 mt-10">
            <Skeleton className="w-full h-[300px] rounded-xl" />
          </div>
        </>
      ) : (
        <>
          <Heading
            title={dataProject.title}
            description={dataProject.description}
            withBackButton
            onBack={handleBack}
          />
          <Divider className="mt-4 mb-2 md:mt-2 lg:mt-5 md:mb-5 lg:mb-10" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 md:mb-5 justify-center">
            <div className="md:w-1/4 flex flex-row max-h-fit mt-2 md:mt-5 lg:mt-10 gap-2">
              <Link
                href={dataProject.linkSC ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-10 inline-flex items-center  gap-2 px-4 py-2 rounded-md font-medium transition-colors duration-200
                  ${
                    dataProject.linkSC
                      ? "bg-red-600 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-900 text-white"
                      : "bg-red-900 text-white opacity-70 cursor-not-allowed pointer-events-none"
                  }`}
              >
                <Icons.gitHub className="w-4 h-4" />
                Source Code
              </Link>

              <Link
                href={dataProject.liveDemo ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-10 inline-flex items-center  gap-2 px-4 py-2 rounded-md font-medium transition-colors duration-200
                ${
                  dataProject.liveDemo
                    ? "bg-gray-900 hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-700 text-white"
                    : "bg-gray-400 text-white opacity-50  pointer-events-none cursor-not-allowed"
                }`}
              >
                <MdOutlineLink className="w-4 h-4" />
                Live Demo
              </Link>
            </div>
            <div className="place-self-center w-full md:w-1/2 overflow-hidden">
              <CarouselImg image={dataProject.imageUrls} />
            </div>
            {/* Tech Stack kanan */}
            <div className="lg:mt-5 w-full  md:w-1/4 items-center justify-center">
              <h2 className="text-center font-semibold md:text-left opacity-90">
                Tech Stacks:
              </h2>
              <Divider className="mt-2 mb-4" />
              <div className="flex flex-wrap gap-3 place-self-center md:place-self-start ">
                {dataProject.techStack?.map((tech, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={tech.imageUrl}
                      alt={tech.label}
                      className="w-6 h-6 transition-transform duration-300 transform "
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      {tech.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
