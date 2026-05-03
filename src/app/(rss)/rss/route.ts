import { NextResponse } from "next/server"

import { SITE_INFO } from "@/config/site"

export const dynamic = "force-static"

export function GET() {
  return NextResponse.redirect(`${SITE_INFO.url}/blog/rss`)
}
