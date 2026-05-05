import { GitHubContributions } from "@/registry/components/github-contributions"
import { Activity } from "@/registry/components/contribution-graph"

export function GitHubContributions01() {
  const contributions = Promise.resolve(MOCK_CONTRIBUTIONS)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-xl border border-line bg-background p-6">
        <GitHubContributions
          contributions={contributions}
          githubProfileUrl="https://github.com/Paranjayy"
        />
      </div>
    </div>
  )
}

const MOCK_CONTRIBUTIONS: Activity[] = Array.from({ length: 365 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (364 - i))
  return {
    date: date.toISOString().split("T")[0],
    count: Math.floor(Math.random() * 10),
    level: Math.floor(Math.random() * 5),
  }
})
