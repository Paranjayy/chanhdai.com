#!/usr/bin/env tsx

/**
 * Portfolio Reset Script
 * 
 * This script resets all data files back to template state
 * Usage: pnpm reset
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

function resetToTemplate() {
  console.log("🔄 Resetting portfolio to template state...\n");

  // Copy portfolio.config.json to backup
  const configPath = path.join(rootDir, "portfolio.config.json");
  const backupPath = path.join(rootDir, "portfolio.config.backup.json");
  
  if (fs.existsSync(configPath)) {
    console.log("📋 Backing up current configuration...");
    fs.copyFileSync(configPath, backupPath);
    console.log(`  ✓ Saved to portfolio.config.backup.json\n`);
  }

  console.log("♻️  Copying template files...");
  
  // Read the template config that's already in the repo
  const templateConfig = {
    "$schema": "./portfolio.config.schema.json",
    "personal": {
      "firstName": "Your First",
      "lastName": "Name",
      "displayName": "Your Name",
      "username": "yourhandle",
      "gender": "male",
      "pronouns": "he/him",
      "bio": "Brief tagline about what you do",
      "flipSentences": [
        "Brief tagline about what you do",
        "Your Job Title",
        "Another Role or Interest"
      ],
      "address": "Your City, Your Country",
      "email": "email@example.com",
      "phoneNumber": "+15555555555",
      "website": "https://yourdomain.com",
      "jobTitle": "Your Job Title",
      "timeZone": "America/New_York",
      "keywords": ["yourname", "yourhandle", "your keywords"],
      "dateCreated": new Date().toISOString().split("T")[0]
    },
    "jobs": [
      {
        "title": "Your Current Position",
        "company": "Your Company",
        "website": "https://yourcompany.com"
      }
    ],
    "about": "- Brief introduction about yourself and your experience\n- Highlight your key **skills** and **technologies** you work with\n- Mention any notable projects or achievements\n- Add your professional background and interests",
    "assets": {
      "avatar": "https://via.placeholder.com/400x400.png?text=Your+Avatar",
      "ogImage": "https://via.placeholder.com/1200x630.png?text=Your+Portfolio",
      "namePronunciationUrl": null,
      "affiliateBadge": null
    },
    "socialLinks": [
      {
        "icon": "https://via.placeholder.com/48x48.png?text=X",
        "title": "X (formerly Twitter)",
        "description": "@yourhandle",
        "href": "https://x.com/yourhandle"
      },
      {
        "icon": "https://via.placeholder.com/48x48.png?text=GH",
        "title": "GitHub",
        "description": "yourusername",
        "href": "https://github.com/yourusername"
      },
      {
        "icon": "https://via.placeholder.com/48x48.png?text=LI",
        "title": "LinkedIn",
        "description": "yourhandle",
        "href": "https://linkedin.com/in/yourhandle"
      }
    ],
    "projects": [
      {
        "id": "example-project-1",
        "title": "Example Project",
        "period": { "start": "01.2025" },
        "link": "https://github.com/yourusername/example-project",
        "skills": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        "description": "A description of your awesome project goes here. Explain what it does and why it matters.\n- Key feature 1\n- Key feature 2\n- Key feature 3",
        "logo": "https://via.placeholder.com/100x100.png?text=Logo",
        "isExpanded": true
      },
      {
        "id": "example-project-2",
        "title": "Another Project",
        "period": { "start": "06.2024", "end": "12.2024" },
        "link": "https://github.com/yourusername/another-project",
        "skills": ["Node.js", "Express", "MongoDB", "Docker"],
        "description": "Brief description of another project you've worked on.",
        "logo": "https://via.placeholder.com/100x100.png?text=Logo2"
      }
    ],
    "experiences": [
      {
        "id": "current-company",
        "companyName": "Your Current Company",
        "companyLogo": "https://via.placeholder.com/100x100.png?text=Logo",
        "companyWebsite": "https://yourcompany.com",
        "isCurrentEmployer": true,
        "positions": [
          {
            "id": "position-1",
            "title": "Your Job Title",
            "employmentPeriod": { "start": "01.2024" },
            "employmentType": "Full-time",
            "icon": "code",
            "description": "Description of your role and responsibilities.",
            "skills": ["TypeScript", "React", "Next.js", "Tailwind CSS"],
            "isExpanded": true
          }
        ]
      }
    ],
    "awards": [
      {
        "id": "award-1",
        "prize": "Example Award",
        "title": "Your Achievement Title",
        "date": "2024-01",
        "grade": "Professional",
        "description": "Description of your achievement or award.",
        "referenceLink": "https://example.com/award"
      }
    ],
    "certifications": [
      {
        "title": "Example Certification",
        "issuer": "Certification Provider",
        "issuerIconName": "example",
        "issueDate": "2024-01-01",
        "credentialID": "EXAMPLE-123",
        "credentialURL": "https://example.com/certification"
      }
    ],
    "testimonials": {
      "long": [
        {
          "authorAvatar": "https://via.placeholder.com/400x400.png?text=Person1",
          "authorName": "Example Person",
          "authorTagline": "Job Title at Company",
          "url": "https://example.com/testimonial",
          "quote": "This is an example testimonial quote. Replace with real testimonials."
        }
      ],
      "short": [
        {
          "authorAvatar": "https://via.placeholder.com/400x400.png?text=Person2",
          "authorName": "Another Person",
          "authorTagline": "Role at Organization",
          "url": "https://example.com/another-testimonial",
          "quote": "Short testimonial example"
        }
      ]
    },
    "bookmarks": [
      {
        "title": "Example Bookmark",
        "url": "https://example.com/article",
        "author": "Author Name",
        "bookmarkedAt": "2024-01-01"
      }
    ],
    "siteConfig": {
      "githubUsername": "yourusername",
      "sourceCodeRepo": "yourusername/portfolio",
      "sponsorshipUrl": "https://github.com/sponsors/yourusername"
    },
    "packageConfig": {
      "name": "dev-portfolio-template",
      "description": "A minimal, pixel-perfect dev portfolio, component registry, and blog template.",
      "homepage": "https://yourdomain.com",
      "author": {
        "name": "Your Name",
        "email": "email@example.com",
        "url": "https://github.com/yourusername"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/yourusername/portfolio.git"
      }
    }
  };

  // Write template config
  fs.writeFileSync(configPath, JSON.stringify(templateConfig, null, 2) + "\n");
  console.log("  ✓ portfolio.config.json");

  console.log("\n✅ Reset complete!");
  console.log("\nYour portfolio has been reset to template state.");
  console.log("Your previous configuration was saved to portfolio.config.backup.json");
  console.log("\nNext steps:");
  console.log("  1. Edit portfolio.config.json with your information");
  console.log("  2. Run 'pnpm setup' to generate all files");
  console.log("  3. Test with 'pnpm dev'");
}

resetToTemplate();
