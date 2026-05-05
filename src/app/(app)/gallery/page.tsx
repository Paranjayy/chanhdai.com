import type { Metadata } from "next"

import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

const title = "Gallery"
const description = "A collection of moments and captures."

export const metadata: Metadata = {
  title,
  description,
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for future gallery items */}
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
      </div>

      <p className="mb-8 text-center font-mono text-sm text-muted-foreground">
        Capturing more moments soon...
      </p>

      {/* Interactive fluid text — same component as the footer */}
      <SiteFooterInteractiveLogotype />
    </div>
  )
}
