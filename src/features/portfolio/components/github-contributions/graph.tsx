"use client"

import { format } from "date-fns"
import { LoaderIcon } from "lucide-react"
import { use, useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { CountUp } from "@/components/count-up"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"

import { GitHubStatsModal } from "./stats-modal"

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)

  const {
    currentStreak,
    bestStreak,
    currentStreakStart,
    currentStreakEnd,
    bestStreakStart,
    bestStreakEnd,
    peak,
    peakDate,
  } = calculateStreaks(data)

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
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
                  <div
                    onClick={() => setModalOpen(true)}
                    className="cursor-pointer"
                  >
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </div>
                }
              />
              <TooltipContent className="font-sans">
                <p className="font-medium">
                  {activity.count} contribution
                  {activity.count !== 1 ? "s" : null}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {format(new Date(activity.date), "EEEE, do MMMM yyyy")}
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

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-muted-foreground sm:gap-y-1">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <div className="flex cursor-help flex-col items-start">
                      <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                        Current Streak
                      </span>
                      <span className="font-mono text-lg font-bold text-foreground">
                        <CountUp value={currentStreak} />d
                      </span>
                    </div>
                  }
                />
                <TooltipContent className="space-y-1">
                  <p>Current consecutive days with contributions</p>
                  {currentStreakStart && (
                    <p className="text-[10px] text-muted-foreground">
                      {format(new Date(currentStreakStart), "MMM d")} -{" "}
                      {currentStreakEnd
                        ? format(new Date(currentStreakEnd), "MMM d")
                        : "Present"}
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <div className="flex cursor-help flex-col items-start sm:border-l sm:border-line sm:pl-4">
                      <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                        Best Streak
                      </span>
                      <span className="font-mono text-lg font-bold text-foreground">
                        <CountUp value={bestStreak} />d
                      </span>
                    </div>
                  }
                />
                <TooltipContent className="space-y-1">
                  <p>Longest consecutive days with contributions</p>
                  {bestStreakStart && bestStreakEnd && (
                    <p className="text-[10px] text-muted-foreground">
                      {format(new Date(bestStreakStart), "MMM d, yyyy")} -{" "}
                      {format(new Date(bestStreakEnd), "MMM d, yyyy")}
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <div className="flex cursor-help flex-col items-start sm:border-l sm:border-line sm:pl-4">
                      <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                        Peak
                      </span>
                      <span className="font-mono text-lg font-bold text-foreground">
                        <CountUp value={peak} />
                      </span>
                    </div>
                  }
                />
                <TooltipContent className="space-y-1">
                  <p>Highest number of contributions in a single day</p>
                  {peakDate && (
                    <p className="text-[10px] text-muted-foreground">
                      Achieved on {format(new Date(peakDate), "MMMM do, yyyy")}
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <div className="flex cursor-help flex-col items-start sm:border-l sm:border-line sm:pl-4">
                      <span className="text-[10px] font-medium tracking-wider text-muted-foreground/60 uppercase">
                        Average
                      </span>
                      <span className="font-mono text-lg font-bold text-foreground">
                        <CountUp
                          value={
                            data.reduce((acc, curr) => acc + curr.count, 0) /
                            data.length
                          }
                          formatter={(v) => v.toFixed(2)}
                        />
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
      <GitHubStatsModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}

function calculateStreaks(activities: Activity[]) {
  let currentStreak = 0
  let bestStreak = 0
  let tempStreak = 0
  let tempStreakStart: string | null = null
  let bestStreakStart: string | null = null
  let bestStreakEnd: string | null = null
  let peak = 0
  let peakDate: string | null = null

  // Activities are usually sorted by date (ascending)
  activities.forEach((activity) => {
    if (activity.count > peak) {
      peak = activity.count
      peakDate = activity.date
    }

    if (activity.count > 0) {
      if (tempStreak === 0) tempStreakStart = activity.date
      tempStreak++
      if (tempStreak > bestStreak) {
        bestStreak = tempStreak
        bestStreakStart = tempStreakStart
        bestStreakEnd = activity.date
      }
    } else {
      tempStreak = 0
      tempStreakStart = null
    }
  })

  // Calculate current streak (working backwards from the last activity)
  let currentStreakStart: string | null = null
  let currentStreakEnd: string | null = null
  for (let i = activities.length - 1; i >= 0; i--) {
    if (activities[i].count > 0) {
      if (currentStreakEnd === null) currentStreakEnd = activities[i].date
      currentStreak++
      currentStreakStart = activities[i].date
    } else {
      if (currentStreak > 0) break
    }
  }

  return {
    currentStreak,
    bestStreak,
    currentStreakStart,
    currentStreakEnd,
    bestStreakStart,
    bestStreakEnd,
    peak,
    peakDate,
  }
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
