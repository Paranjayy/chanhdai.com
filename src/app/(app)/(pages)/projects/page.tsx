import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { X_HANDLE } from "@/config/site"
import { ProjectItem } from "@/features/portfolio/components/projects/project-item"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { cn } from "@/lib/utils"

const title = "Projects"
const description = "A collection of my work, experiments, and side projects."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Portfolio</PageHeadingTagline>
        <PageHeadingTitle>
          A selection of projects that I've built or contributed to.
        </PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="grid border-t border-line">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "border-x border-b border-line bg-background",
                index === 0 && "border-t-0"
              )}
            >
              <ProjectItem project={{ ...project, isExpanded: index < 2 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-8" />

      <SiteFooterInteractiveLogotype />
      
      <div className="h-8" />
    </div>
  )
}
