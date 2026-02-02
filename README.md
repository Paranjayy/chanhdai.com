# Dev Portfolio Template

A minimal, pixel-perfect developer portfolio, component registry, and blog template built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

## ⚡ Quick Setup (New!)

The easiest way to get started:

```bash
# 1. Install dependencies
pnpm install

# 2. Edit portfolio.config.json with your info
# 3. Generate all files automatically
pnpm setup

# 4. Start dev server
pnpm dev
```

That's it! See [QUICKSTART.md](./QUICKSTART.md) for details.

## Features

- Clean & modern design with Light/Dark themes
- Portfolio showcase with projects and experience
- Component registry powered by shadcn CLI
- Blog with MDX support
- SEO optimized (JSON-LD schema, sitemap, robots.txt)
- vCard integration
- Analytics ready (PostHog, OpenPanel)
- Installable as PWA
- **Automated setup with single config file** ✨
- Fully customizable

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm 9+

### Quick Start (Recommended)

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Edit `portfolio.config.json` with your information

4. Generate all data files:
```bash
pnpm setup
```

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:1408](http://localhost:1408) to see your portfolio.

### Manual Setup (Alternative)

If you prefer manual configuration, update the following files in `src/features/portfolio/data/`:

- **`user.ts`** - Your name, bio, contact info, job details
- **`projects.ts`** - Your portfolio projects
- **`experiences.ts`** - Work history and education
- **`social-links.ts`** - Social media profiles
- **`awards.ts`** - Awards and achievements (optional)
- **`certifications.ts`** - Certifications (optional)
- **`testimonials.ts`** - Testimonials (optional)
- **`tech-stack.ts`** - Technologies you use (already populated with common ones)

### Site Configuration

Update `src/config/site.ts`:
- GitHub username and repository URLs
- Sponsorship URL (if applicable)

### Package Information

Update `package.json`:
- `name`, `description`, `homepage`
- `author` information
- `repository` URL

### Environment Variables

Create a `.env.local` file (copy from `.env.example` if available):

```env
APP_URL=https://yourdomain.com

# Registry Configuration (for component registry)
REGISTRY_NAMESPACE=@yournamespace
REGISTRY_NAMESPACE_URL=https://yourdomain.com/r/{name}.json

# Optional: Analytics
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
NEXT_PUBLIC_POSTHOG_HOST=https://your-posthog-host
NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.i.posthog.com

# Optional: GitHub API Token
GITHUB_API_TOKEN=your-github-token
```

### Assets

Replace placeholder images:
- Avatar and OG images - Update URLs in `user.ts`
- Project logos - Update URLs in `projects.ts`
- Company logos - Update URLs in `experiences.ts`
- Remove or replace `public/audio/chanhdai.mp3` if you want name pronunciation

### Blog Content

Add your blog posts in `src/features/blog/content/` as `.mdx` files. Example structure:

```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-01-01"
description: "A brief description"
---

Your blog post content here...
```

## Development Commands

```bash
pnpm dev          # Start development server (port 1408)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm preview      # Build and preview locally
pnpm lint         # Run ESLint
pnpm format:write # Format code with Prettier
pnpm check-types  # TypeScript type checking
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### GitHub Pages

1. Update the base path in `next.config.ts` if deploying to a subdomain
2. Set up GitHub Actions workflow for deployment
3. Configure GitHub Pages in repository settings

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, Radix UI, Base UI
- **Animations**: Motion
- **Content**: MDX
- **Package Manager**: pnpm
- **Language**: TypeScript

## License

Licensed under the [MIT license](./LICENSE).

## Original Project

This template is based on [chanhdai.com](https://github.com/ncdai/chanhdai.com) by Nguyen Chanh Dai.

## Support

If you find this template useful, consider:
- Starring the repository ⭐
- Sharing it with others
- Contributing improvements

---

**Note**: Make sure to remove all placeholder content and replace it with your actual information before deploying!
