import { Profile } from "@/types";
import { STACKS } from "./stack";
import { Github, Linkedin } from "lucide-react";

export const MY_PROFILE: Profile = {
  name: "Sirajul Ilmi",
  title: "Frontend Software Engineering",
  avatar: "https://github.com/rajul0.png",
  address: "Banda Aceh, Indonesia",
  status: "Freelancer",
  experienceYears: 3,
  specialties: ["UI/UX Implementation", "Responsive Design", "Animation"],
  platforms: ["web", "mobile"],
  description:
    "I’m a Frontend Software Engineer with over 3 years of experience crafting responsive, high-quality applications for both web and mobile platforms. From building sleek interfaces in Angular, React, to brewing beautiful apps with Flutter, I’m passionate about turning clean design into seamless user experiences.Whether it's aligning pixels on a widescreen monitor or fine-tuning layouts for mobile, I approach each project like a perfect cup of coffee—balanced, carefully brewed, and made to be enjoyed. With a strong eye for detail and a love for code that flows as smoothly as a morning espresso, I take pride in creating apps that are not just functional, but delightful to use.",
  socials: [
    {
      label: "github",
      href: "https://github.com/rajul0",
      icon: Github,
    },
    {
      label: "linkedin",
      href: "https://linkedin.com/in/rajul0",
      icon: Linkedin,
    },
  ],
  techStack: STACKS,
};
