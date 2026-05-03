import { Icons } from "@/components/icons"

import type { Sponsor } from "./types"

export const SPONSORS: Sponsor[] = [
  {
    name: "PostHog",
    url: "https://posthog.com",
    logo: Icons.posthog,
    tier: "platinum",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    logo: Icons.vercel,
    tier: "gold",
  },
  {
    name: "shadcn",
    url: "https://shadcn.com",
    logo: Icons.shadcn,
    tier: "gold",
  },
]
