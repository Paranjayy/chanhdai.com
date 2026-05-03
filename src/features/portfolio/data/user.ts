import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Paranjay",
  lastName: "",
  displayName: "Paranjay",
  username: "Paranjayy",
  gender: "male",
  pronouns: "he/him",
  bio: "Building the future of agentic coding.",
  flipSentences: [
    "Software Engineer @ Learning OSS.",
    "Building AI-powered developer tools.",
    "Passionate about open source.",
  ],
  address: "London, UK",
  phoneNumber: "KzQ0IDc0NDIgNTY3ODkw", // Base64 for +44 ... (placeholder)
  email: "aGVsbG9AcGFyYW5qYXkuZGV2", // hello@paranjay.dev
  website: "https://paranjay.dev",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Founder & Lead",
      company: "Learning OSS",
      website: "https://learning.paranjay.dev",
      experienceId: "learning-oss",
    },
  ],
  about: `
- Software Engineer focused on building robust, scalable AI systems.
- Founder of Learning OSS, a platform for open-source mastery.
- Expert in Next.js, TypeScript, and Agentic workflows.
`,
  avatar: "https://github.com/Paranjayy.png",
  ogImage: "https://paranjay.dev/og.png",
  timeZone: "Europe/London",
  namePronunciationUrl: "",
  keywords: ["software engineer", "ai", "next.js", "typescript", "open source"],
  dateCreated: "2024-05-02",
}
