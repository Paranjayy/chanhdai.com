import fs from "fs"
import path from "path"

const DATA_DIR = "src/features/portfolio/data"

const FILES_TO_SANITIZE = [
  "awards.ts",
  "bookmarks.tsx",
  "certifications.ts",
  "experiences.tsx",
  "projects.ts",
  "social-links.ts",
  "testimonials.ts",
]

function sanitize() {
  console.log("Sanitizing portfolio data...")

  FILES_TO_SANITIZE.forEach((file) => {
    const filePath = path.join(DATA_DIR, file)
    if (!fs.existsSync(filePath)) return

    let content = ""
    if (file.endsWith(".ts")) {
      content = `export const ${path.basename(file, ".ts").toUpperCase()}: any[] = [];\n`
    } else {
      content = `export const ${path.basename(file, ".tsx").toUpperCase()}: any[] = [];\n`
    }

    // Special cases for testimonials
    if (file === "testimonials.ts") {
      content = `export const TESTIMONIALS_1: any[] = [];\nexport const TESTIMONIALS_2: any[] = [];\n`
    }

    fs.writeFileSync(filePath, content)
    console.log(`- Sanitized ${file}`)
  })

  // Sanitize USER data
  const userPath = path.join(DATA_DIR, "user.ts")
  const userTemplate = `import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Name",
  lastName: "Surname",
  displayName: "Full Name",
  username: "username",
  gender: "male",
  pronouns: "he/him",
  bio: "Brief bio here.",
  flipSentences: ["Building cool things", "Learning daily"],
  address: "City, Country",
  phoneNumber: "",
  email: "YmFzZTY0QGVtYWlsLmNvbQ==", 
  website: "https://example.com",
  jobTitle: "Your Role",
  jobs: [],
  about: "Detailed about section.",
  avatar: "https://github.com/username.png",
  ogImage: "https://example.com/og.png",
  timeZone: "UTC",
  namePronunciationUrl: "",
  keywords: ["developer", "tech"],
  dateCreated: "2024-01-01",
};
`
  fs.writeFileSync(userPath, userTemplate)
  console.log("- Sanitized user.ts")

  console.log("\nDone! Portfolio data has been reset to templates.")
}

sanitize()
