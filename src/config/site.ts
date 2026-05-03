import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://paranjay.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@paranjay245"
export const GITHUB_USERNAME = "Paranjayy"
export const SOURCE_CODE_GITHUB_REPO = "Paranjayy/chanhdai.com"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Paranjayy/chanhdai.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/Paranjayy"

export const UTM_PARAMS = {
  utm_source: "paranjay.dev",
}
