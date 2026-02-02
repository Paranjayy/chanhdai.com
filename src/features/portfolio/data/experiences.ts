import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "iitm-student",
        title: "IIT Madras",
        employmentPeriod: {
          start: "2024",
        },
        icon: "education",
        description: `Currently pursuing studies at IIT Madras.`,
        skills: ["Computer Science", "Programming", "Problem Solving"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
