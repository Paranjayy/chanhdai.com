"use client"

import { format } from "date-fns"
import { LoaderIcon } from "lucide-react"
import { use } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { GITHUB_USERNAME, UTM_PARAMS } from "@/config/site"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"
import { addQueryParams } from "@/utils/url"

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)

  const { currentStreak, bestStreak } = calculateStreaks(data)

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
        showWeekNumbers
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger
              render={
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              }
            />
            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count !== 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <ContributionGraphTotalCount>
            {({ totalCount, year }) => (
              <div className="text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in {year}
              </div>
            )}
          </ContributionGraphTotalCount>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-muted-foreground">
            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="flex cursor-help items-center gap-1.5">
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                      Streak
                    </span>
                    <span className="font-mono text-sm font-medium text-foreground">
                      {currentStreak}
                    </span>
                  </div>
                }
              />
              <TooltipContent>
                Current consecutive days with contributions
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="flex cursor-help items-center gap-1.5">
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                      Best
                    </span>
                    <span className="font-mono text-sm font-medium text-foreground">
                      {bestStreak}
                    </span>
                  </div>
                }
              />
              <TooltipContent>
                Longest consecutive days with contributions
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="flex cursor-help items-center gap-1.5">
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                      Most
                    </span>
                    <span className="font-mono text-sm font-medium text-foreground">
                      {Math.max(...data.map((d) => d.count))}
                    </span>
                  </div>
                }
              />
              <TooltipContent>
                Highest number of contributions in a single day
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="flex cursor-help items-center gap-1.5">
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                      Average
                    </span>
                    <span className="font-mono text-sm font-medium text-foreground">
                      {(
                        data.reduce((acc, curr) => acc + curr.count, 0) /
                        data.length
                      ).toFixed(1)}
                    </span>
                  </div>
                }
              />
              <TooltipContent>Average contributions per day</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

function calculateStreaks(activities: Activity[]) {
  let currentStreak = 0
  let bestStreak = 0
  let tempStreak = 0

  // Activities are usually sorted by date
  activities.forEach((activity) => {
    if (activity.count > 0) {
      tempStreak++
      if (tempStreak > bestStreak) {
        bestStreak = tempStreak
      }
    } else {
      tempStreak = 0
    }
  })

  // Calculate current streak (working backwards from the last activity)
  for (let i = activities.length - 1; i >= 0; i--) {
    if (activities[i].count > 0) {
      currentStreak++
    } else {
      // If today has 0 but yesterday had > 0, we check if today is still "active"
      // But for simplicity, we just stop at the first 0
      if (currentStreak > 0) break
    }
  }

  return { currentStreak, bestStreak }
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
