import { UTM_PARAMS } from "@/config/site"
import type { SocialLink } from "@/features/portfolio/types/social-links"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

export function SocialLinkItem({ icon, title, subtitle, href }: SocialLink) {
  const isComponent = typeof icon !== "string"

  return (
    <a
      className={cn(
        "group flex flex-row items-center justify-start gap-3 px-4 py-3 transition-all duration-200 hover:bg-accent-muted",
        "border-r border-b border-line last:border-r-0"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
      title={`${title}${subtitle ? ` (${subtitle})` : ""}`}
    >
      <div className="relative size-5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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
      <div className="flex flex-col min-w-0">
        <span className="truncate font-sans text-xs font-semibold text-foreground transition-colors group-hover:text-foreground leading-tight">
          {title}
        </span>
        {subtitle && (
          <span className="truncate font-mono text-[9px] text-muted-foreground transition-colors group-hover:text-foreground/80 leading-tight">
            @{subtitle}
          </span>
        )}
      </div>
    </a>
  )
}
