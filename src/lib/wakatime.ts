const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY

export const getWakaTimeStats = async () => {
  if (!WAKATIME_API_KEY) {
    return {
      total_seconds: 152100, // 42h 15m mock
      human_readable_total: "42h 15m",
      daily_average: 21600,
      human_readable_daily_average: "6h 0m",
    }
  }

  const response = await fetch(
    `https://wakatime.com/api/v1/users/current/stats/last_7_days`,
    {
      headers: {
        Authorization: `Basic ${btoa(WAKATIME_API_KEY)}`,
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    }
  )

  const data = (await response.json()) as any

  return {
    total_seconds: data?.data?.total_seconds || 0,
    human_readable_total: data?.data?.human_readable_total || "0h 0m",
    daily_average: data?.data?.daily_average || 0,
    human_readable_daily_average: data?.data?.human_readable_daily_average || "0h 0m",
    languages: data?.data?.languages || [],
  }
}
