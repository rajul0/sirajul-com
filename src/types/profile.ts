import { LucideIcon } from "lucide-react";

export type Profile = {
  name: string;
  title: string;
  avatar: string;
  address: string;
  status: string;
  experienceYears: number;
  specialties: string[];
  platforms: ("web" | "mobile")[];
  description: string;
  socials: { label: string; href: string; icon: LucideIcon }[];
  techStack: Stack[];
  funNote?: string;
};

export type Project = {
  cname: string;
  title: string;
  description: string;
  image: string;
  imageUrls: string[];
  techStack: Stack[];
  linkSC?: string;
  liveDemo?: string;
};

export type Career = {
  logoUrl?: string;
  role: string;
  companyLabel: string;
  companyFullName: string;
  address: string;
  fromDate: Date;
  endDate?: Date;
  workMode: "Full-time" | "Part-time" | "Freelance";
  workType: "Remote" | "Hybrid" | "On-site";
  responsibilities: string[];
};

export type Education = {
  logoUrl: string;
  schoolLabel: string;
  schoolFullName: string;
  address: string;
  level: string;
  major: string;
  fromYear: number;
  endYear: number;
  score: number;
  scoreMax: number;
};

export type AvailableStack =
  | "Node.js"
  | "React.js"
  | "Next.js"
  | "Angular"
  | "Electron.js"
  | "HTML5"
  | "CSS3"
  | "Bootstrap"
  | "TailwindCSS"
  | "Vite"
  | "Axios"
  | "Shadcn UI"
  | "JavaScript"
  | "TypeScript"
  | "Express.js"
  | "phpMyAdmin"
  | "MySQL"
  | "Api"
  | "Firebase"
  | "AWS"
  | "MQTT"
  | "LoraWAN"
  | "Arduino"
  | "Dart"
  | "Flutter"
  | "Tkinter"
  | "Python"
  | "C"
  | "Postman";

export type Stack = {
  label: AvailableStack;
  imageUrl: string;
};
