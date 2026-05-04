import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "template-project",
    title: "Project Name",
    period: {
      start: "01.2026",
    },
    link: "https://example.com",
    skills: ["React", "TypeScript", "Next.js"],
    description:
      "A description of your project. Explain what you built and the impact it had.",
    logo: "https://assets.chanhdai.com/images/project-logos/placeholder.svg",
    previewImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    isExpanded: true,
  },
]
