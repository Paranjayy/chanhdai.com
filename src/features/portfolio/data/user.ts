import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "John",
  lastName: "Doe",
  displayName: "John Doe",
  username: "johndoe",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-stack developer and designer. Passionate about building modern web experiences.",
  flipSentences: [
    "Building modern web experiences.",
    "Passionate about open-source.",
    "Loves clean code and modular design.",
  ],
  address: "San Francisco, CA",
  email: "am9obmRvZUBleGFtcGxlLmNvbQ==", // johndoe@example.com
  website: "https://example.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Acme Inc.",
      website: "https://example.com",
      experienceId: "acme",
    },
  ],
  dob: "1995-01-01",
  about: `
I'm a software engineer and designer with a passion for building beautiful and functional web applications.
`,
  avatar: "https://github.com/shadcn.png",
  timeZone: "America/Los_Angeles",
  keywords: ["software engineer", "next.js", "typescript", "open source"],
  dateCreated: "2024-01-01",
}
