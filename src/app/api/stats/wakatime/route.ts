import { NextResponse } from "next/server"

import { getWakaTimeStats } from "@/lib/wakatime"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const stats = await getWakaTimeStats()
    return NextResponse.json(stats)
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch WakaTime stats" },
      { status: 500 }
    )
  }
}
