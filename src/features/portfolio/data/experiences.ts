import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "template-education",
        title: "Your School or Program",
        employmentPeriod: {
          start: "2024",
        },
        icon: "education",
        description: `Replace this with your education, apprenticeship, or work background.`,
        skills: ["Computer Science", "Programming", "Problem Solving"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
