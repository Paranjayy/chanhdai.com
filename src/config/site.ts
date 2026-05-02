import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://paranjay.dev",
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
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "your-handle";
export const SOURCE_CODE_GITHUB_REPO = "your-handle/portfolio-template";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/your-handle/portfolio-template";

export const SPONSORSHIP_URL = "https://github.com/sponsors/your-handle";

export const UTM_PARAMS = {
  utm_source: "paranjay.dev",
};
