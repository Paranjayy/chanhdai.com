import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "example-project-1",
    title: "Example Project",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/yourusername/example-project",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
    ],
    description: `A description of your awesome project goes here. Explain what it does and why it matters.
- Key feature 1
- Key feature 2
- Key feature 3
`,
    logo: "https://via.placeholder.com/100x100.png?text=Logo",
    isExpanded: true,
  },
  {
    id: "example-project-2",
    title: "Another Project",
    period: {
      start: "06.2024",
      end: "12.2024",
    },
    link: "https://github.com/yourusername/another-project",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    description: "Brief description of another project you've worked on.",
    logo: "https://via.placeholder.com/100x100.png?text=Logo2",
  },
];
