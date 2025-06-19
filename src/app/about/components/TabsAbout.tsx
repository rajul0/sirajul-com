"use client";

import {
  HiOutlineAcademicCap as EducationIcon,
  HiOutlineBookmark as AboutIcon,
  HiOutlineBriefcase as CareerIcon,
  HiOutlineDocumentText as ResumeIcon,
} from "react-icons/hi";

import { Tabs } from "@/components/organisms";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { TabSkeleton } from "./TabSkeleton";

const Story = dynamic(() => import("./Story"), {
  ssr: false,
  loading: () => <TabSkeleton />,
});
const Resume = dynamic(() => import("./Resume"), {
  ssr: false,
  loading: () => <TabSkeleton />,
});
const CareerList = dynamic(() => import("./CareerList"), {
  ssr: false,
  loading: () => <TabSkeleton />,
});
const EducationList = dynamic(() => import("./EducationList"), {
  ssr: false,
  loading: () => <TabSkeleton />,
});

const About = () => {
  const TABS = [
    {
      label: (
        <TabLabel>
          <AboutIcon size={17} /> Intro
        </TabLabel>
      ),
      children: <Story />,
    },
    {
      label: (
        <TabLabel>
          <ResumeIcon size={17} /> Resume
        </TabLabel>
      ),
      children: <Resume />,
    },
    {
      label: (
        <TabLabel>
          <CareerIcon size={17} /> Career
        </TabLabel>
      ),
      children: <CareerList />,
    },
    {
      label: (
        <TabLabel>
          <EducationIcon size={17} /> Education
        </TabLabel>
      ),
      children: <EducationList />,
    },
  ];
  return (
    <motion.div
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
      <Tabs tabs={TABS} />
    </motion.div>
  );
};

export default About;

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
);
