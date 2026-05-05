import { WakaTimeStats } from "@/registry/components/wakatime-stats/wakatime-stats"

export function Wakatime01() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-xl border border-line bg-background p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              Coding Activity
            </h3>
            <p className="text-sm text-muted-foreground">
              Across all platforms this week
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono text-2xl font-bold text-foreground">
              42h 15m
            </span>
          </div>
        </div>
        
        <WakaTimeStats data={MOCK_WAKATIME} />
      </div>
    </div>
  )
}

const MOCK_WAKATIME = [
  { name: "TypeScript", percent: 45, color: "#3178c6" },
  { name: "React", percent: 25, color: "#61dafb" },
  { name: "Next.js", percent: 15, color: "#000000" },
  { name: "Tailwind CSS", percent: 10, color: "#38bdf8" },
  { name: "Other", percent: 5, color: "#cccccc" },
]
