import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Your First",
  lastName: "Name",
  displayName: "Your Name",
  username: "yourhandle",
  gender: "male",
  pronouns: "he/him",
  bio: "Brief tagline about what you do",
  flipSentences: [
    "Brief tagline about what you do",
    "Your Job Title",
    "Another Role or Interest",
  ],
  address: "Your City, Your Country",
  phoneNumber: "KzE1NTU1NTU1NTU1", // E.164 format, base64 encoded
  email: "ZW1haWxAZXhhbXBsZS5jb20=", // base64 encoded
  website: "https://yourdomain.com",
  jobTitle: "Your Job Title",
  jobs: [
    {
      title: "Your Current Position",
      company: "Your Company",
      website: "https://yourcompany.com",
    },
  ],
  about: `- Brief introduction about yourself and your experience
- Highlight your key **skills** and **technologies** you work with
- Mention any notable projects or achievements
- Add your professional background and interests`,
  avatar: "https://via.placeholder.com/400x400.png?text=Your+Avatar",
  ogImage: "https://via.placeholder.com/1200x630.png?text=Your+Portfolio",
  namePronunciationUrl: undefined,
  affiliateBadge: undefined,
  timeZone: "America/New_York",
  keywords: ["yourname", "yourhandle", "your keywords"],
  dateCreated: "2024-01-01", // YYYY-MM-DD
};
