import fs from "fs"
import path from "path"

const DATA_DIR = "src/features/portfolio/data"
const CONTENT_DIR = "src/features/doc/content"

const FILES_TO_EMPTY = [
  "awards.ts",
  "bookmarks.tsx",
  "certifications.ts",
  "experiences.tsx",
  "projects.ts",
  "social-links.ts",
]

function sanitize() {
  console.log("🚀 Initializing Portfolio Sanitization (Blank Template Mode)...")

  // 1. Empty data files
  FILES_TO_EMPTY.forEach((file) => {
    const filePath = path.join(DATA_DIR, file)
    if (!fs.existsSync(filePath)) return

    const varName = path
      .basename(file, path.extname(file))
      .toUpperCase()
      .replace(/-/g, "_")
    const content = `import type { ${varName.slice(0, -1)} } from "../types/${path.basename(file, path.extname(file))}";\n\nexport const ${varName}: any[] = [];\n`

    // Testimonials is a special case
    if (file === "testimonials.ts") {
      fs.writeFileSync(
        filePath,
        `export const TESTIMONIALS_1 = [];\nexport const TESTIMONIALS_2 = [];\n`
      )
    } else {
      fs.writeFileSync(filePath, `export const ${varName} = [];\n`)
    }
    console.log(`✅ Emptied ${file}`)
  })

  // 2. Special case for testimonials.ts (different variable names)
  const testimonialsPath = path.join(DATA_DIR, "testimonials.ts")
  if (fs.existsSync(testimonialsPath)) {
    fs.writeFileSync(
      testimonialsPath,
      `export const TESTIMONIALS_1 = [];\nexport const TESTIMONIALS_2 = [];\n`
    )
    console.log(`✅ Emptied testimonials.ts`)
  }

  // 3. Reset USER data
  const userPath = path.join(DATA_DIR, "user.ts")
  const userTemplate = `import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Jane",
  lastName: "Doe",
  displayName: "Jane Doe",
  username: "janedoe",
  gender: "female",
  pronouns: "she/her",
  bio: "Software Engineer & Designer based in San Francisco.",
  flipSentences: ["Building modern web apps", "Designing pixel-perfect UIs", "Open source enthusiast"],
  address: "San Francisco, CA",
  phoneNumber: "KzExMTIyMjMzMzQ0NA==", // "+111222333444" in base64
  email: "aGVsbG9AZXhhbXBsZS5jb20=", // "hello@example.com" in base64
  website: "https://example.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      website: "https://techcorp.com",
      experienceId: "tech-corp",
    }
  ],
  about: "This is a brief introduction about yourself and your journey in tech.",
  avatar: "https://github.com/shadcn.png",
  ogImage: "https://chanhdai.com/og.png",
  namePronunciationUrl: "",
  keywords: ["developer", "portfolio", "nextjs"],
  timeZone: "America/Los_Angeles",
  dateCreated: "${new Date().toISOString().split("T")[0]}",
  dob: "1995-01-01",
};
`
  fs.writeFileSync(userPath, userTemplate)
  console.log("✅ Reset user.ts to template")

  // 4. Purge Blog Content
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR)
    files.forEach((file) => {
      if (file !== ".gitkeep") {
        fs.unlinkSync(path.join(CONTENT_DIR, file))
      }
    })

    // Create a new welcome post
    const welcomeTemplate = `---
title: Hello World
description: Welcome to my new portfolio.
category: blog
createdAt: ${new Date().toISOString().split("T")[0]}
updatedAt: ${new Date().toISOString().split("T")[0]}
---

This is your first blog post. You can edit this file in \`src/features/doc/content/welcome.mdx\`.
`
    fs.writeFileSync(path.join(CONTENT_DIR, "welcome.mdx"), welcomeTemplate)
    console.log("✅ Purged legacy blog posts and created a fresh Welcome post")
  }

  console.log(
    "\n✨ Sanitization Complete! The portfolio is now a blank template ready for use."
  )
}

sanitize()
