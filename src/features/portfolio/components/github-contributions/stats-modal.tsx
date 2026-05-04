"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { GITHUB_USERNAME } from "@/config/site"
import { useTheme } from "next-themes"

export function GitHubStatsModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-line bg-background/95 backdrop-blur-md sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl">GitHub Ecosystem Stats</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${isDark ? "transparent" : "default"}&bg_color=00000000&title_color=${isDark ? "ffffff" : "000000"}&text_color=${isDark ? "a1a1aa" : "3f3f46"}&icon_color=3b82f6&border_color=e4e4e7`}
              alt="GitHub Stats"
              className="w-full rounded-lg border border-line"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${isDark ? "transparent" : "default"}&bg_color=00000000&title_color=${isDark ? "ffffff" : "000000"}&text_color=${isDark ? "a1a1aa" : "3f3f46"}&border_color=e4e4e7`}
                alt="Top Langs"
                className="w-full rounded-lg border border-line"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${isDark ? "transparent" : "default"}&background=00000000&stroke=${isDark ? "ffffff" : "000000"}&fire=3b82f6&ring=3b82f6&border=e4e4e7`}
                alt="GitHub Streak"
                className="w-full rounded-lg border border-line"
              />
            </div>
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${GITHUB_USERNAME}&theme=${isDark ? "2077" : "default"}`}
              alt="Profile Details"
              className="w-full rounded-lg border border-line"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
