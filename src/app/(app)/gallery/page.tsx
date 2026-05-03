import type { Metadata } from "next"

import { FluidGradientText } from "@/registry/components/fluid-gradient-text/fluid-gradient-text"

const title = "Gallery"
const description = "A collection of moments and captures."

export const metadata: Metadata = {
  title,
  description,
}

export default function GalleryPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 h-40 w-full overflow-hidden border-y border-line">
        <FluidGradientText text="GALLERY" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for future gallery items */}
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
        <div className="aspect-square animate-pulse rounded-xl bg-muted/20" />
      </div>

      <p className="mt-8 text-center font-mono text-sm text-muted-foreground">
        Capturing more moments soon...
      </p>
    </div>
  )
}
