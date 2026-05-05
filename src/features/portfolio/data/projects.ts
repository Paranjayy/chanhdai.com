import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "workout-buddy",
    title: "Workout Buddy",
    period: {
      start: "2024",
    },
    link: "https://workout-buddy.app", // Placeholder
    skills: ["Next.js", "PWA", "Tailwind CSS", "TypeScript"],
    description:
      "A high-fidelity life-orchestration OS and fitness platform with real-time habit tracking and workout planning.",
    logo: "/icons/workout-buddy.svg",
    previewImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    isExpanded: true,
  },
  {
    id: "media-tracker",
    title: "Media Tracker",
    period: {
      start: "2024",
    },
    link: "https://media.paranjay.dev", // Placeholder
    skills: ["React", "Trakt API", "Letterboxd", "Tailwind CSS"],
    description:
      "A professional-grade dashboard for tracking movies, shows, and music with deep integrations across Trakt, Letterboxd, and Last.fm.",
    logo: "/icons/media-tracker.svg",
    previewImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ipl-2026-engine",
    title: "IPL 2026 Engine",
    period: {
      start: "2024",
    },
    link: "https://ipl.paranjay.dev", // Placeholder
    skills: ["Next.js", "Real-time Data", "Analytics", "Tailwind CSS"],
    description:
      "A high-performance cricket analytics engine providing real-time match data, team fatigue metrics, and roster integrity for IPL 2026.",
    logo: "/icons/ipl.svg",
    previewImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gravity-archive",
    title: "Gravity Archive",
    period: {
      start: "2024",
    },
    link: "https://github.com/Paranjayy/gravity-archive",
    skills: ["TypeScript", "Raycast", "Node.js", "SQLite"],
    description:
      "A system-wide clipboard manager and content curator with Raycast integration and automated Markdown link generation.",
    logo: "/icons/gravity.svg",
    previewImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
  },
]
