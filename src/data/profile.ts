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
    "I’m a Frontend Engineer with over 3 years of experience in web and mobile development. I specialize in Dart, JavaScript, and TypeScript to build intuitive, responsive, and visually modern user interfaces—whether it’s for the web or Android platforms. Throughout my journey in tech, I’ve aimed not only to write code that works but to craft code that’s clean, maintainable, and scalable. I strongly believe that great technology should simplify the user’s life, and a thoughtful UI bridges the gap between complex systems and seamless user experience. I enjoy working in collaborative team environments, partnering with designers, backend engineers, and stakeholders to deliver efficient, scalable, and engaging web applications. To me, clear communication and strong collaboration are at the heart of building successful products. I’m constantly learning and exploring new technologies—whether it's experimenting with modern frameworks, improving app performance, or refining frontend architecture. I thrive on growth and new challenges. And of course, there’s one essential thing that fuels all of that: a cup of coffee. It keeps me going through debugging marathons and inspires me while designing user-friendly features.",
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
