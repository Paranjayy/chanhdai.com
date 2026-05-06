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
    title: "Projects",
    href: "/projects",
    icon: "FolderGit2",
  },
  {
    title: "Components",
    href: "/components",
    icon: "Cpu",
  },
  {
    title: "Blocks",
    href: "/blocks",
    icon: "LayoutGrid",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: "PenTool",
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: "Image",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
    icon: "Heart",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "Home",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@paranjaydotdev"
export const GITHUB_USERNAME = "Paranjayy"
export const SOURCE_CODE_GITHUB_REPO = "Paranjayy/chanhdai.com"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Paranjayy/chanhdai.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/Paranjayy"

export const UTM_PARAMS = {
  utm_source: "paranjay.dev",
}
