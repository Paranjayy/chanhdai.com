"use client"

import { Panel } from "./panel"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export function Dashboard() {
  return (
    <Panel className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
      <DashboardItem
        title="Coding Activity"
        value="42h 15m"
        subtitle="This week"
        icon={<Icons.laptop className="size-4" />}
      />
      <DashboardItem
        title="Spotify"
        value="Not Playing"
        subtitle="Last: Moonlight Sonata"
        icon={<Icons.music className="size-4" />}
      />
      <DashboardItem
        title="Discord"
        value="Online"
        subtitle="Idle"
        icon={<Icons.discord className="size-4" />}
      />
      <DashboardItem
        title="Steam"
        value="Offline"
        subtitle="Last: Elden Ring"
        icon={<Icons.steam className="size-4" />}
      />
    </Panel>
  )
}

function DashboardItem({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string
  value: string
  subtitle: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-background p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase">{title}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight">{value}</span>
        <span className="text-xs text-muted-foreground">{subtitle}</span>
      </div>
    </div>
  )
}
