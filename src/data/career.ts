import { Career } from "@/types";

export const CAREERS: Career[] = [
  {
    role: "Internet of Things Laboratory Assistant ",
    companyLabel: "USK",
    companyFullName: "Syiah Kuala University",
    logoUrl: "/svgs/educations/usk.svg",
    address: "Banda Aceh, Indonesia 🇮🇩",
    workType: "On-site",
    workMode: "Part-time",
    fromDate: new Date("2025-01"),
    endDate: new Date("2025-06"),
    responsibilities: [
      "Assisting instructors in teaching students about Internet of Things (IoT), including concepts, components, and development using microcontrollers.",
      "Supporting the evaluation process by grading assignments, quizzes, and exams related to IoT systems and applications.",
      "Monitoring and providing feedback on students’ IoT project demonstrations, such as sensor-based or microcontroller-based systems.",
    ],
  },
  {
    role: "Software Engineer Intern",
    companyLabel: "Diskominfo",
    companyFullName: "Diskominfo Banda Aceh",
    logoUrl: "/images/diskominfotik-bna-logo.png",
    address: "Banda Aceh, Indonesia 🇮🇩",
    workType: "On-site",
    workMode: "Full-time",
    fromDate: new Date("2024-07"),
    endDate: new Date("2024-08"),
    responsibilities: [
      "Developed SINERGI Mobile, a mobile news application that delivers local news across Banda Aceh.",
      "Integrated data from existing web-based applications, AGAM and INONG, using both API integration and web scraping techniques for unstructured data sources",
      "Focused on transforming disparate content sources into a unified and user-friendly mobile platform.",
      "Contributed to the end-to-end development process, ensuring reliable data retrieval, display, and user experience optimization.",
    ],
  },
];
