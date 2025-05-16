"use client";

import Divider from "@/components/atoms/Divider";
import { Heading } from "@/components/molecules";
import { getProjectByCname } from "@/lib/firebase";
import { ProjectDetail } from "@/types";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ cname: string; id: string }>;
}) {
  const { cname } = use(params);
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  const [dataProject, setDataProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    getProjectByCname(cname).then(setDataProject);
  }, [cname]);

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <main
      className={` w-full px-4 md:px-16 lg:px-32 transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="h-20"></div>
      <Heading
        title={dataProject?.title}
        description={dataProject?.description}
        withBackButton={true}
        onBack={handleBack}
      />
      <Divider />
    </main>
  );
}
