import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import type { SocialLink } from "@/features/portfolio/types/social-links"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      className={cn(
        "flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-md:nth-[2n+1]:screen-line-top max-md:nth-[2n+1]:screen-line-bottom",
        "md:nth-[3n+1]:screen-line-top md:nth-[3n+1]:screen-line-bottom"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-8 shrink-0">
        <Image
          className="rounded-lg select-none"
          src={icon}
          alt={title}
          width={32}
          height={32}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/15" />
      </div>

      <div className="flex flex-1 flex-col gap-0.5">
        <h3 className="text-sm leading-none font-medium">{title}</h3>
        {subtitle && (
          <span className="text-[11px] leading-none text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  )
}
