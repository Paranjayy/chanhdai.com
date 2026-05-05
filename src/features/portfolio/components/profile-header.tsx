import { USER } from "@/features/portfolio/data/user"
import { TextFlip } from "@/registry/components/text-flip"

import { AvatarElectricEffect } from "./avatar-electric-effect"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      <div className="shrink-0 border-r border-line">
        <div className="relative mx-0.5 my-0.75">
          <AvatarElectricEffect>
            <img
              className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
              alt="Avatar"
              src={USER.avatar}
              fetchPriority="high"
            />
          </AvatarElectricEffect>
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/10 ring-inset dark:ring-white/15 retina:ring-[0.5px]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end justify-between pb-1 pl-4 pr-4">
          <div className="flex items-center gap-2 pb-0.5">
            <span className="relative flex size-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase select-none">
              Available for work
            </span>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-2xl font-semibold tracking-tight sm:text-3xl">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            <TextFlip
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
              interval={1.5}
            >
              {USER.flipSentences}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  )
}
