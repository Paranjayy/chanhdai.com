import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

const allPosts = getAllDocs()

const content = `# Paranjay Khachar
> BS Student @ IIT Madras | AI Systems & Modular Design Enthusiast

- [About](${SITE_INFO.url}/about.md): Introduction to my journey in Data Science and AI.
- [Experience](${SITE_INFO.url}/experience.md): Professional history and academic milestones.
- [Projects](${SITE_INFO.url}/projects.md): A curated collection of AI and full-stack experiments.
- [Awards](${SITE_INFO.url}/awards.md): Recognition and honors in technology and academia.
- [Certifications](${SITE_INFO.url}/certifications.md): Academic and professional credentials.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
