import { ArrowLeft, BookOpen, Film, Music } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SITE_INFO } from "@/config/site"
import { MEDIA_STATS } from "@/features/portfolio/data/media-stats"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Media & Library | " + SITE_INFO.name,
  description: "My movies, books, and music collection.",
}

export default function MediaPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-5xl border-x border-line px-0">
      <div className="screen-line-bottom flex h-16 items-center px-4">
        <Button variant="ghost" size="sm" asChild className="-ml-2 gap-2">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Library</h1>
          <p className="mt-2 text-muted-foreground">
            A curated collection of media I consume and enjoy.
          </p>
        </div>

        <div className="grid gap-6">
          {["Movies", "Books", "Music"].map((category) => {
            const items = MEDIA_STATS.filter(
              (s) =>
                s.category === category ||
                (category === "Movies" && s.category === "Series")
            )
            if (items.length === 0) return null

            return (
              <section key={category} className="space-y-4">
                <div className="flex items-center gap-2">
                  {category === "Movies" && (
                    <Film className="size-5 text-primary" />
                  )}
                  {category === "Books" && (
                    <BookOpen className="size-5 text-primary" />
                  )}
                  {category === "Music" && (
                    <Music className="size-5 text-primary" />
                  )}
                  <h2 className="text-xl font-semibold">{category}</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-xl border border-line bg-background/50 p-4 transition-all hover:bg-accent-muted hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.icon}
                          alt=""
                          className="size-10 rounded-lg object-contain grayscale transition-all group-hover:grayscale-0"
                        />
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-xs text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {item.stats && (
                        <div className="mt-4 flex gap-4 border-t border-line/50 pt-3">
                          {item.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                                {stat.label}
                              </div>
                              <div className="text-sm font-semibold">
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-16 rounded-xl border border-primary/10 bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-bold">Interested in sharing?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            I&apos;m building this as a modular feature. Soon you&apos;ll be
            able to integrate these stats into your own portfolio.
          </p>
          <Button className="mt-6" variant="outline" disabled>
            Stay Tuned
          </Button>
        </div>
      </div>
    </main>
  )
}
