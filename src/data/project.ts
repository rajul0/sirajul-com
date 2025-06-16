import { Project } from "@/types";
import { getStack } from "./stack";

export const MY_PROJECTS: Project[] = [
  {
    cname: "sirajul-com",
    title: "sirajul.com",
    description:
      "My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.",

    linkSC: "https://github.com/rajul0/portfolio-web.git",
    liveDemo: "https://github.com/rajul0/portfolio-web.git",
    image: "/images/pic-1-sirajul-com.png",
    imageUrls: [
      "/images/pic-1-sirajul-com.png",
      "/images/pic-2-sirajul-com.png",
    ],
    techStack: [
      getStack("Next.js"),
      getStack("TypeScript"),
      getStack("Shadcn UI"),
      getStack("TailwindCSS"),
      getStack("Firebase"),
    ],
  },
  {
    cname: "sinergi",
    title: "SINERGI",
    description:
      "My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.",

    image: "/images/pic-1-sinergi.png",
    imageUrls: ["/images/pic-1-sinergi.png", "/images/pic-1-sinergi.png"],
    techStack: [getStack("Flutter"), getStack("Dart"), getStack("Api")],
  },
  {
    cname: "sortir-buah",
    title: "Sortir Buah App",
    description:
      "My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.",

    image: "/images/pic-1-sortir-app.png",
    imageUrls: ["/images/pic-1-sortir-app.png", "/images/pic-1-sortir-app.png"],
    techStack: [getStack("Flutter"), getStack("Dart"), getStack("AWS")],
  },
];
