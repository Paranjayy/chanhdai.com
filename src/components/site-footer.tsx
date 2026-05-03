import { RssIcon } from "lucide-react"

import { GitHubStars } from "@/components/github-stars"
import { Icons } from "@/components/icons"
import { getStargazerCount } from "@/components/nav-item-github"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import {
  SITE_INFO,
  SOURCE_CODE_GITHUB_REPO,
  SOURCE_CODE_GITHUB_URL,
} from "@/config/site"
import { cn } from "@/lib/utils"

export async function SiteFooter() {
  const ORIGINAL_REPO = "ncdai/chanhdai.com"
  const stargazersCount = await getStargazerCount(ORIGINAL_REPO)

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground [&_span]:mx-0.5 [&_span]:inline-block">
          Inspired by tailwindcss.com<span>/</span>ui.shadcn.com<span>/</span>
          vercel.com<span>/</span>evilcharts.com
        </p>

        <div className="mb-4 flex flex-col items-center gap-1.5 px-4 text-center font-mono text-sm text-balance text-muted-foreground sm:flex-row sm:justify-center">
          <span>
            Built by{" "}
            <a
              className="font-medium text-foreground link-underline"
              href="https://github.com/Paranjayy"
              target="_blank"
              rel="noopener"
            >
              Paranjay Khachar
            </a>
          </span>
          <span className="hidden opacity-40 sm:inline">•</span>
          <span className="flex items-center gap-1">
            Forked from{" "}
            <a
              className="font-medium text-foreground link-underline"
              href="https://github.com/ncdai/chanhdai.com"
              target="_blank"
              rel="noopener"
            >
              ncdai/chanhdai.com
            </a>
            <GitHubStars
              repo={ORIGINAL_REPO}
              stargazersCount={stargazersCount}
            />
          </span>
        </div>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://x.com/paranjay_k?utm_source=paranjay.dev"
              target="_blank"
              rel="noopener"
              aria-label="X"
            >
              <Icons.x className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://github.com/Paranjayy?utm_source=paranjay.dev"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <Icons.github className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://www.linkedin.com/in/paranjay-khachar?utm_source=paranjay.dev"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener"
              aria-label="RSS"
            >
              <RssIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* <div className="*:absolute *:z-2 *:flex *:size-2 *:border *:border-line *:bg-background">
          <div className="bottom-[-3.5px] left-[-4.5px]" />
          <div className="right-[-4.5px] bottom-[-3.5px]" />
        </div> */}
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
