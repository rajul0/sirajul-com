import { AvailableStack, Stack } from "@/types";

export const STACKS: Stack[] = [
  { label: "Node.js", imageUrl: "/svgs/stacks/nodejs.svg" },
  { label: "React.js", imageUrl: "/svgs/stacks/reactjs.svg" },
  { label: "Next.js", imageUrl: "/svgs/stacks/nextjs.svg" },
  { label: "Angular", imageUrl: "/svgs/stacks/angular.png" },
  { label: "Electron.js", imageUrl: "/svgs/stacks/electronjs.svg" },
  { label: "HTML5", imageUrl: "/svgs/stacks/html5.svg" },
  { label: "CSS3", imageUrl: "/svgs/stacks/css3.svg" },
  { label: "Bootstrap", imageUrl: "/svgs/stacks/bootstrap.svg" },
  { label: "TailwindCSS", imageUrl: "/svgs/stacks/tailwindcss.svg" },
  { label: "Vite", imageUrl: "/svgs/stacks/vite.svg" },
  { label: "Axios", imageUrl: "/svgs/stacks/axios.svg" },
  { label: "Shadcn UI", imageUrl: "/svgs/stacks/shadcnui.svg" },
  { label: "JavaScript", imageUrl: "/svgs/stacks/javascript.svg" },
  { label: "TypeScript", imageUrl: "/svgs/stacks/typescript.svg" },
  { label: "Express.js", imageUrl: "/svgs/stacks/expressjs.svg" },
  { label: "Api", imageUrl: "/svgs/stacks/api.svg" },
  { label: "MySQL", imageUrl: "/svgs/stacks/mysql.svg" },
  { label: "Firebase", imageUrl: "/svgs/stacks/firebase.svg" },
  { label: "AWS", imageUrl: "/svgs/stacks/aws.svg" },
  { label: "MQTT", imageUrl: "/svgs/stacks/mqtt.svg" },
  { label: "LoraWAN", imageUrl: "/svgs/stacks/lorawan.svg" },
  { label: "Arduino", imageUrl: "/svgs/stacks/arduino.svg" },
  { label: "Dart", imageUrl: "/svgs/stacks/dart.svg" },
  { label: "Flutter", imageUrl: "/svgs/stacks/flutter.svg" },
  { label: "Tkinter", imageUrl: "/svgs/stacks/tkinter.svg" },
  { label: "Python", imageUrl: "/svgs/stacks/python.svg" },
  { label: "C", imageUrl: "/svgs/stacks/c.svg" },
  { label: "Postman", imageUrl: "/svgs/stacks/postman.svg" },
  { label: "Postgresql", imageUrl: "/svgs/stacks/postgresql.svg" },
  { label: "Prisma", imageUrl: "/svgs/stacks/prisma.svg" },
];

export const getStack = (key: AvailableStack) =>
  STACKS.find((x) => x.label === key)!;
