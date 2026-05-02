import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "sample-project",
    title: "Sample Project",
    period: {
      start: "01.2026",
    },
    link: "https://example.com",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "A placeholder project entry you can replace with your own work.",
    logo: "/favicon.svg",
    isExpanded: true,
  },
];
