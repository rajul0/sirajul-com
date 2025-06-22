import { Project } from "@/types";
import { getStack } from "./stack";

export const MY_PROJECTS: Project[] = [
  {
    cname: "sirajul-com",
    title: "sirajul.com",
    description:
      "This personal website was built from scratch, while incorporating inspiration and code snippets from various references and resources. It leverages several modern and powerful technology stacks. Currently, the site is hosted using free-tier services including Vercel, Neon Serverless Postgres, and Firebase. Due to the limitations of these starter plans, occasional errors may occur. Feel free to explore this site as a reference, a source of inspiration, or even as a starting template—within the bounds of the provided license. The source code is available and can be adapted to meet your specific needs. If you find this resource helpful, a rating or feedback would be sincerely appreciated.",

    linkSC: "https://github.com/rajul0/sirajul-com.git",
    liveDemo: "https://sirajul-com.vercel.app",
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
      getStack("Prisma"),
      getStack("Postgresql"),
    ],
  },
  {
    cname: "sinergi",
    title: "SINERGI",
    description:
      "My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.",
    linkSC: "https://github.com/rajul0/egov-news-app.git",
    image: "/images/pic-1-sinergi.png",
    imageUrls: ["/images/pic-1-sinergi.png", "/images/pic-1-sinergi.png"],
    techStack: [getStack("Flutter"), getStack("Dart")],
  },
  {
    cname: "sortir-buah",
    title: "Sortir Buah App",

    description:
      "My personal website built from scratch using several powerful & modern technology stacks. Due this website is using starter plan (free) cloud hosting and databases; Vercel, Neon Serverless Postgres, and Firebase, with certain limitations, sometimes an error will occur. Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements. Should you find value in this resource, your consideration of leaving a rating is greatly appreciated.",
    linkSC: "https://github.com/rajul0/sortir_buah.git",
    image: "/images/pic-1-sortir-app.png",
    imageUrls: ["/images/pic-1-sortir-app.png", "/images/pic-1-sortir-app.png"],
    techStack: [
      getStack("Flutter"),
      getStack("Dart"),
      getStack("AWS"),
      getStack("Firebase"),
    ],
  },
];
