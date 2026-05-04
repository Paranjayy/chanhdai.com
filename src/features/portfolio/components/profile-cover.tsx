"use client"

import { useRef } from "react"

import { BrandContextMenu } from "@/components/brand-context-menu"
import { Magnet } from "@/components/react-bits/magnet"
import { cn } from "@/lib/utils"
import { FluidGradientText } from "@/registry/components/fluid-gradient-text/fluid-gradient-text"

export function ProfileCover() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <BrandContextMenu>
      <div
        ref={containerRef}
        className={cn(
          "aspect-2/1 border-x border-line select-none sm:aspect-3/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-top screen-line-bottom before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <Magnet containerRef={containerRef} magnetStrength={6}>
          <FluidGradientText
            text="KP"
            className="h-24 w-full sm:h-32"
          />
        </Magnet>
      </div>
    </BrandContextMenu>
  )
}
