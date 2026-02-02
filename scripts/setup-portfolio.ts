#!/usr/bin/env tsx

/**
 * Portfolio Setup Script
 * 
 * This script reads portfolio.config.json and generates all data files
 * Usage: pnpm setup
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

interface PortfolioConfig {
  personal: {
    firstName: string;
    lastName: string;
    displayName: string;
    username: string;
    gender: string;
    pronouns: string;
    bio: string;
    flipSentences: string[];
    address: string;
    email: string;
    phoneNumber: string;
    website: string;
    jobTitle: string;
    timeZone: string;
    keywords: string[];
    dateCreated: string;
  };
  jobs: Array<{
    title: string;
    company: string;
    website: string;
  }>;
  about: string;
  assets: {
    avatar: string;
    ogImage: string;
    namePronunciationUrl: string | null;
    affiliateBadge: any | null;
  };
  socialLinks: any[];
  projects: any[];
  experiences: any[];
  awards: any[];
  certifications: any[];
  testimonials: {
    long: any[];
    short: any[];
  };
  bookmarks: any[];
  siteConfig: {
    githubUsername: string;
    sourceCodeRepo: string;
    sponsorshipUrl: string;
  };
  packageConfig: {
    name: string;
    description: string;
    homepage: string;
    author: {
      name: string;
      email: string;
      url: string;
    };
    repository: {
      type: string;
      url: string;
    };
  };
}

function base64Encode(str: string): string {
  return Buffer.from(str).toString("base64");
}

function loadConfig(): PortfolioConfig {
  const configPath = path.join(rootDir, "portfolio.config.json");
  if (!fs.existsSync(configPath)) {
    console.error("❌ portfolio.config.json not found!");
    console.log("Create one by copying portfolio.config.example.json");
    process.exit(1);
  }

  const configContent = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(configContent);
}

function generateUserTs(config: PortfolioConfig): string {
  const { personal, jobs, about, assets } = config;
  
  return `import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "${personal.firstName}",
  lastName: "${personal.lastName}",
  displayName: "${personal.displayName}",
  username: "${personal.username}",
  gender: "${personal.gender}",
  pronouns: "${personal.pronouns}",
  bio: "${personal.bio}",
  flipSentences: ${JSON.stringify(personal.flipSentences, null, 2).replace(/"([^"]+)":/g, "$1:")},
  address: "${personal.address}",
  phoneNumber: "${base64Encode(personal.phoneNumber)}", // E.164 format, base64 encoded
  email: "${base64Encode(personal.email)}", // base64 encoded
  website: "${personal.website}",
  jobTitle: "${personal.jobTitle}",
  jobs: ${JSON.stringify(jobs, null, 2).replace(/"([^"]+)":/g, "$1:")},
  about: \`${about}\`,
  avatar: "${assets.avatar}",
  ogImage: "${assets.ogImage}",
  namePronunciationUrl: ${assets.namePronunciationUrl ? `"${assets.namePronunciationUrl}"` : "undefined"},
  affiliateBadge: ${assets.affiliateBadge ? JSON.stringify(assets.affiliateBadge) : "undefined"},
  timeZone: "${personal.timeZone}",
  keywords: ${JSON.stringify(personal.keywords)},
  dateCreated: "${personal.dateCreated}", // YYYY-MM-DD
} satisfies User;
`;
}

function generateProjectsTs(config: PortfolioConfig): string {
  return `import type { Project } from "../types/projects";

export const PROJECTS: Project[] = ${JSON.stringify(config.projects, null, 2)};
`;
}

function generateExperiencesTs(config: PortfolioConfig): string {
  return `import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = ${JSON.stringify(config.experiences, null, 2)};
`;
}

function generateSocialLinksTs(config: PortfolioConfig): string {
  return `import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = ${JSON.stringify(config.socialLinks, null, 2)};
`;
}

function generateAwardsTs(config: PortfolioConfig): string {
  return `import type { Award } from "../types/awards";

export const AWARDS: Award[] = ${JSON.stringify(config.awards, null, 2)};
`;
}

function generateCertificationsTs(config: PortfolioConfig): string {
  return `import type { Certification } from "../types/certifications";

export const CERTIFICATIONS: Certification[] = ${JSON.stringify(config.certifications, null, 2)};
`;
}

function generateTestimonialsTs(config: PortfolioConfig): string {
  return `import type { Testimonial } from "../types/testimonials";

/**
 * TESTIMONIALS_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_2: Short quotes (50 characters or fewer)
 */

// Long quotes (more than 50 characters)
export const TESTIMONIALS_1: Testimonial[] = ${JSON.stringify(config.testimonials.long, null, 2)};

// Short quotes (50 characters or fewer)
export const TESTIMONIALS_2: Testimonial[] = ${JSON.stringify(config.testimonials.short, null, 2)};
`;
}

function generateBookmarksTs(config: PortfolioConfig): string {
  return `import type { Bookmark } from "../types/bookmarks";

export const BOOKMARKS: Bookmark[] = ${JSON.stringify(config.bookmarks, null, 2)};
`;
}

function generateSiteConfigTs(config: PortfolioConfig): string {
  const { siteConfig } = config;
  return `import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "${config.personal.website}",
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

export const GITHUB_USERNAME = "${siteConfig.githubUsername}";
export const SOURCE_CODE_GITHUB_REPO = "${siteConfig.sourceCodeRepo}";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/${siteConfig.sourceCodeRepo}";

export const SPONSORSHIP_URL = "${siteConfig.sponsorshipUrl}";

export const UTM_PARAMS = {
  utm_source: "${new URL(config.personal.website).hostname}",
};
`;
}

function updatePackageJson(config: PortfolioConfig): void {
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  
  packageJson.name = config.packageConfig.name;
  packageJson.description = config.packageConfig.description;
  packageJson.homepage = config.packageConfig.homepage;
  packageJson.author = config.packageConfig.author;
  packageJson.contributors = [config.packageConfig.author];
  packageJson.repository = config.packageConfig.repository;
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
}

function main() {
  console.log("🚀 Setting up your portfolio...\n");

  const config = loadConfig();

  const dataDir = path.join(rootDir, "src/features/portfolio/data");
  const configDir = path.join(rootDir, "src/config");

  const files = [
    { path: path.join(dataDir, "user.ts"), content: generateUserTs(config) },
    { path: path.join(dataDir, "projects.ts"), content: generateProjectsTs(config) },
    { path: path.join(dataDir, "experiences.ts"), content: generateExperiencesTs(config) },
    { path: path.join(dataDir, "social-links.ts"), content: generateSocialLinksTs(config) },
    { path: path.join(dataDir, "awards.ts"), content: generateAwardsTs(config) },
    { path: path.join(dataDir, "certifications.ts"), content: generateCertificationsTs(config) },
    { path: path.join(dataDir, "testimonials.ts"), content: generateTestimonialsTs(config) },
    { path: path.join(dataDir, "bookmarks.ts"), content: generateBookmarksTs(config) },
    { path: path.join(configDir, "site.ts"), content: generateSiteConfigTs(config) },
  ];

  console.log("📝 Generating data files...");
  for (const file of files) {
    fs.writeFileSync(file.path, file.content);
    console.log(`  ✓ ${path.relative(rootDir, file.path)}`);
  }

  console.log("\n📦 Updating package.json...");
  updatePackageJson(config);
  console.log("  ✓ package.json");

  console.log("\n✅ Portfolio setup complete!");
  console.log("\nNext steps:");
  console.log("  1. Review the generated files");
  console.log("  2. Update portfolio.config.json with your actual data");
  console.log("  3. Run 'pnpm setup' again to regenerate files");
  console.log("  4. Test with 'pnpm dev'");
  console.log("  5. Deploy your portfolio! 🚀");
}

main();
