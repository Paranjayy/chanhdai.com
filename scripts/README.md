# Portfolio Setup Scripts

This directory contains automation scripts to make portfolio management easier.

## Available Scripts

### `setup-portfolio.ts`

**Command:** `pnpm setup`

Reads `portfolio.config.json` and automatically generates all portfolio data files.

**What it does:**
- Reads your configuration from `portfolio.config.json`
- Generates all data files in `src/features/portfolio/data/`
- Updates `src/config/site.ts` with your GitHub info
- Updates `package.json` with your metadata
- Encodes sensitive data (email, phone) to base64

**Generated files:**
- `user.ts` - Personal information
- `projects.ts` - Your projects
- `experiences.ts` - Work history
- `social-links.ts` - Social profiles
- `awards.ts` - Awards
- `certifications.ts` - Certifications  
- `testimonials.ts` - Testimonials
- `bookmarks.ts` - Bookmarks
- `site.ts` - Site configuration
- `package.json` - Package metadata

**Usage:**
```bash
# 1. Edit portfolio.config.json
# 2. Generate files
pnpm setup
```

---

### `reset-portfolio.ts`

**Command:** `pnpm reset`

Resets the portfolio to template state.

**What it does:**
- Backs up current `portfolio.config.json` to `portfolio.config.backup.json`
- Resets `portfolio.config.json` to default template values
- Preserves your backup for future reference

**Usage:**
```bash
# Reset to template
pnpm reset

# Your backup is saved in portfolio.config.backup.json
```

**Use cases:**
- Starting a new portfolio from scratch
- Sharing template with others
- Cleaning up before publishing template
- Testing template state

---

## Workflow Examples

### Initial Setup
```bash
pnpm install
# Edit portfolio.config.json
pnpm setup
pnpm dev
```

### Making Updates
```bash
# Edit portfolio.config.json
pnpm setup
pnpm dev
```

### Reset & Share
```bash
pnpm reset
git add .
git commit -m "Reset to template"
git push
```

---

## Configuration File

The `portfolio.config.json` file is the **single source of truth** for all your portfolio data.

### Structure:

```json
{
  "personal": { /* Your personal info */ },
  "jobs": [ /* Current positions */ ],
  "about": "Your bio",
  "assets": { /* Images, avatars */ },
  "socialLinks": [ /* Social profiles */ ],
  "projects": [ /* Your projects */ ],
  "experiences": [ /* Work history */ ],
  "awards": [ /* Awards */ ],
  "certifications": [ /* Certifications */ ],
  "testimonials": { /* Testimonials */ },
  "bookmarks": [ /* Bookmarks */ ],
  "siteConfig": { /* GitHub, URLs */ },
  "packageConfig": { /* package.json data */ }
}
```

---

## Benefits

✅ **Single Source of Truth** - All data in one file  
✅ **Automatic Generation** - No manual file editing  
✅ **Error Prevention** - JSON validation  
✅ **Easy Backup** - Just copy one file  
✅ **Version Control** - Track changes easily  
✅ **Shareable** - Share configs between portfolios  

---

## Technical Details

### Base64 Encoding

Email and phone numbers are automatically base64 encoded for basic obfuscation:

```typescript
email: "email@example.com" 
// becomes: "ZW1haWxAZXhhbXBsZS5jb20="

phoneNumber: "+15555555555"
// becomes: "KzE1NTU1NTU1NTU1"
```

### File Generation

Scripts use TypeScript to ensure type safety and proper formatting:

```typescript
import type { User } from "@/features/portfolio/types/user";

export const USER = {
  // Generated from config
} satisfies User;
```

---

## Troubleshooting

### "portfolio.config.json not found"
Run `pnpm reset` to create a template config.

### Script errors
Ensure you have tsx installed:
```bash
npm install -g tsx
```

### Generated files look wrong
Check your `portfolio.config.json` for syntax errors.  
Use a JSON validator: https://jsonlint.com

---

## Future Enhancements

Potential additions:
- Interactive CLI prompts for setup
- Config validation and error reporting
- Import from LinkedIn/GitHub
- Export to different formats
- Multi-language support
- Theme customization via config

---

**Questions?** Check [QUICKSTART.md](../QUICKSTART.md) or open an issue!
