import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import type { SocialLink } from "@/features/portfolio/types/social-links"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

export function SocialLinkItem({ icon, title, subtitle, href }: SocialLink) {
  const isComponent = typeof icon !== "string"

  return (
    <a
      className={cn(
        "group flex flex-col items-center justify-center gap-2 p-3 transition-all duration-200 hover:bg-accent-muted",
        "border-r border-b border-line last:border-r-0"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
      title={`${title}${subtitle ? ` (${subtitle})` : ""}`}
    >
      <div className="relative size-6 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {isComponent ? (
          <div className="size-full text-muted-foreground transition-colors group-hover:text-foreground">
            {icon}
          </div>
        ) : (
          <img
            className="size-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
            src={icon as string}
            alt={title}
            loading="lazy"
          />
        )}
      </div>
      <span className="max-w-full truncate font-mono text-[10px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {subtitle || title}
      </span>
    </a>
  )
}
