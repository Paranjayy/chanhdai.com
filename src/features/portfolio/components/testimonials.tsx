import { ArrowUpRightIcon } from "lucide-react"

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import { Button } from "@/components/ui/button"
import { Panel } from "@/features/portfolio/components/panel"
import { VerifiedIcon } from "@/features/portfolio/components/verified-icon"
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
  TESTIMONIALS_PINNED,
} from "@/features/portfolio/data/testimonials"
import type { Testimonial as TestimonialType } from "@/features/portfolio/types/testimonials"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
  TestimonialVerifiedBadge,
} from "@/registry/components/testimonial"
import { Twemoji } from "@/registry/components/twemoji/twemoji"

export function Testimonials() {
  return (
    <Panel
      id="testimonials"
      className="before:content-none after:content-none [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
    >
      <h2 className="sr-only">Testimonials</h2>
      <div className="flex flex-col gap-8 py-4">
        <div className="flex flex-col gap-2">
          <div className="px-4 font-mono text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
            Pinned
          </div>
          <TestimonialList data={TESTIMONIALS_PINNED.slice(0, 2)} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="px-4 font-mono text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
            Community
          </div>
          <div className="flex flex-col gap-2">
            <Marquee className="py-1">
              <MarqueeFade side="left" />
              <MarqueeContent pauseOnHover speed={40}>
                {[...TESTIMONIALS_1, TESTIMONIALS_PINNED[2]].map((item) => (
                  <MarqueeItem key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="block w-80 cursor-crosshair rounded-xl ring-1 ring-foreground/10 transition-[background-color] ease-out ring-inset hover:bg-accent-muted"
                    >
                      <TestimonialItem {...item} />
                    </a>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade side="right" />
            </Marquee>

            <Marquee className="py-1">
              <MarqueeFade side="left" />
              <MarqueeContent pauseOnHover speed={35} direction="right">
                {TESTIMONIALS_2.map((item) => (
                  <MarqueeItem key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="block w-80 cursor-crosshair rounded-xl ring-1 ring-foreground/10 transition-[background-color] ease-out ring-inset hover:bg-accent-muted"
                    >
                      <TestimonialItem {...item} />
                    </a>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade side="right" />
            </Marquee>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4 pb-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          variant="outline"
          asChild
        >
          <a
            href="/testimonials"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more testimonials"
          >
            View All Testimonials
            <ArrowUpRightIcon className="size-4" />
          </a>
        </Button>
      </div>
    </Panel>
  )
}

function TestimonialList({ data }: { data: TestimonialType[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 px-2 sm:grid-cols-2">
      {data.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener"
          className="block h-full cursor-crosshair rounded-xl ring-1 ring-foreground/10 transition-[background-color] ease-out ring-inset hover:bg-accent-muted"
        >
          <TestimonialItem {...item} />
        </a>
      ))}
    </div>
  )
}

function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote,
  isVerified,
}: TestimonialType) {
  return (
    <Testimonial>
      <TestimonialQuote className="min-h-14 font-serif">
        <p>
          <Twemoji>{quote}</Twemoji>
        </p>
      </TestimonialQuote>

      <TestimonialAuthor>
        <TestimonialAvatar>
          <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
          <TestimonialAvatarRing />
        </TestimonialAvatar>

        <TestimonialAuthorName>
          {authorName}
          {isVerified && (
            <TestimonialVerifiedBadge className="text-info">
              <VerifiedIcon />
            </TestimonialVerifiedBadge>
          )}
        </TestimonialAuthorName>
        <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
      </TestimonialAuthor>
    </Testimonial>
  )
}
