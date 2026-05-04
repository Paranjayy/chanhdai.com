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
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-5xl">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 border-b border-line pb-4 sm:flex-row">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground select-none">
            <span className="size-1 animate-pulse rounded-full bg-green-500" />
            <span className="font-bold">
              {Math.floor(
                12400 +
                  (new Date().getTime() % 1000) +
                  new Date().getDate() * 10
              ).toLocaleString()}{" "}
              LIVE VISITORS
            </span>
          </div>
          <Separator className="hidden h-3 sm:block" />
          <GitHubStars
            repo={ORIGINAL_REPO}
            stargazersCount={stargazersCount}
            className="text-xs"
          />
        </div>
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
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3 border-x border-line bg-background px-4 py-2 sm:py-0">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SITE_INFO.url}/socials`}
            >
              /socials
            </a>

            <Separator />

            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SITE_INFO.url}/media`}
            >
              /media
            </a>

            <Separator className="max-sm:hidden" />

            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener"
            >
              llms.txt
            </a>

            <Separator />

            <div className="flex items-center gap-2">
              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href="https://x.com/paranjaydotdev"
                target="_blank"
                rel="noopener"
                aria-label="X"
              >
                <Icons.x className="size-4" />
              </a>

              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href="https://github.com/Paranjayy"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <Icons.github className="size-4" />
              </a>

              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href="https://www.linkedin.com/in/paranjayy/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="size-4" />
              </a>

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

            <Separator />


            <Separator />

            <a
              className="flex font-mono text-[10px] font-medium text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SOURCE_CODE_GITHUB_URL}/commits/main`}
              target="_blank"
              rel="noopener"
            >
              Updated: {new Date().toLocaleDateString("en-GB")}
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
