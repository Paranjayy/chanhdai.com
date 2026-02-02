import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Paranjay",
  lastName: "Khachar",
  displayName: "Paranjay Khachar",
  username: "paranjayy",
  gender: "male",
  pronouns: "he/him",
  bio: "Building cool stuff with code.",
  flipSentences: [
    "Building cool stuff with code.",
    "Student & Developer",
    "Open Source Enthusiast",
  ],
  address: "India",
  phoneNumber: "", // Will add later
  email: "a3BhcmFuamF5MjQ1QGdtYWlsLmNvbQ==", // base64 encoded: kparanjay245@gmail.com
  website: "https://paranjayy.github.io",
  jobTitle: "Student & Developer",
  jobs: [
    {
      title: "Student",
      company: "IIT Madras",
      website: "https://www.iitm.ac.in",
    },
  ],
  about: `
- Currently a **Student** at IIT Madras, passionate about building cool things with code.
- Exploring **web development**, **open source**, and modern technologies.
- Love creating projects and learning new things every day.
`,
  avatar: "/pfp.jpeg",
  ogImage: "/og-image.png", // Will generate later
  namePronunciationUrl: "", // Will add later
  timeZone: "Asia/Kolkata",
  keywords: ["paranjay", "paranjay khachar", "paranjayy", "kparanjay245"],
  dateCreated: "2026-02-03",
};
