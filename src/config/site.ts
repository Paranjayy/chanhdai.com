import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://paranjayy.github.io",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "paranjayy";
export const SOURCE_CODE_GITHUB_REPO = "paranjayy/portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/paranjayy/portfolio";

export const SPONSORSHIP_URL = "https://github.com/sponsors/paranjayy";

export const UTM_PARAMS = {
  utm_source: "paranjay.dev",
};
