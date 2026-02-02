# Setup Guide

This guide will help you customize and deploy your portfolio.

## Step 1: Clone and Install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
pnpm install
```

## Step 2: Update Personal Information

### 2.1 User Profile (`src/features/portfolio/data/user.ts`)

Update the following fields:
- `firstName`, `lastName`, `displayName` - Your name
- `username` - Your handle/username
- `bio` and `flipSentences` - Brief taglines
- `address` - Your location
- `email` - Base64 encoded email (use https://www.base64encode.org/)
- `phoneNumber` - Base64 encoded phone in E.164 format
- `website` - Your portfolio URL
- `jobTitle` and `jobs` - Current position(s)
- `about` - Longer bio with markdown support
- `avatar` - Link to your profile picture
- `ogImage` - Open Graph image for social media
- `timeZone` - Your timezone
- `keywords` - SEO keywords

### 2.2 Projects (`src/features/portfolio/data/projects.ts`)

Add your projects with:
- `id` - Unique identifier
- `title` - Project name
- `period` - Start and end dates
- `link` - Project URL
- `skills` - Technologies used
- `description` - Project details
- `logo` - Project logo URL
- `isExpanded` - Show full details by default

### 2.3 Experience (`src/features/portfolio/data/experiences.ts`)

Add your work experience and education with:
- Company/school information
- Positions held
- Employment periods
- Job descriptions
- Skills used

### 2.4 Social Links (`src/features/portfolio/data/social-links.ts`)

Update with your social media profiles:
- X (Twitter)
- GitHub
- LinkedIn
- Other platforms

### 2.5 Optional Data Files

Customize these if needed:
- `awards.ts` - Your awards and achievements
- `certifications.ts` - Professional certifications
- `testimonials.ts` - Testimonials from colleagues/clients
- `bookmarks.ts` - Interesting resources you've bookmarked

### 2.6 Site Configuration (`src/config/site.ts`)

Update:
- `GITHUB_USERNAME` - Your GitHub username
- `SOURCE_CODE_GITHUB_REPO` - Your repository
- `SPONSORSHIP_URL` - Your sponsorship link (optional)

### 2.7 Package.json

Update these fields:
- `name` - Your package name
- `description` - Portfolio description
- `homepage` - Your portfolio URL
- `author` - Your information
- `repository` - Your GitHub repository URL

## Step 3: Add Content

### Blog Posts

Create blog posts in `src/features/blog/content/` as `.mdx` files:

```mdx
---
title: "Your Post Title"
publishedAt: "2024-01-15"
summary: "Brief description"
---

Your content here...
```

### Assets

Replace placeholder images:
- Upload your avatar and OG image to a CDN or use GitHub
- Update URLs in `user.ts`
- Add project logos and update URLs in `projects.ts`

## Step 4: Environment Variables

Create a `.env.local` file:

```env
APP_URL=https://yourdomain.com
REGISTRY_NAMESPACE=@yournamespace
REGISTRY_NAMESPACE_URL=https://yourdomain.com/r/{name}.json

# Optional
GITHUB_API_TOKEN=your_token_here
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://your-posthog-host
```

## Step 5: Test Locally

```bash
pnpm dev
```

Visit http://localhost:1408 to preview your portfolio.

## Step 6: Deploy

### Option A: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure environment variables
6. Deploy!

### Option B: GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Push to main branch - the workflow will automatically deploy
4. Your site will be available at `https://yourusername.github.io/repository-name`

**Note for GitHub Pages**: If deploying to a subdirectory (not yourusername.github.io):
1. Uncomment and set `basePath` in `next.config.ts`
2. Uncomment `output: "export"` for static export

### Option C: Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- Cloudflare Pages
- Railway
- Render
- Any platform that supports Next.js

## Step 7: Post-Deployment

- [ ] Test all pages and links
- [ ] Verify images load correctly
- [ ] Check responsive design on mobile
- [ ] Test dark/light theme switching
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to search engines

## Troubleshooting

### Build Fails with Font Loading Error

This is usually a network issue during build. Ensure your build environment has internet access to download Google Fonts.

### Images Don't Load

Check that:
1. Image URLs are correct and accessible
2. Image hostnames are added to `next.config.ts` remotePatterns
3. Images are properly optimized (Next.js Image component)

### GitHub Contributions Graph Not Showing

Update `GITHUB_USERNAME` in `src/config/site.ts` to your GitHub username.

## Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Explore [shadcn/ui components](https://ui.shadcn.com)
- Open an issue on GitHub

## Customization Tips

1. **Colors**: Update theme colors in your CSS files
2. **Fonts**: Change fonts in `src/app/layout.tsx`
3. **Components**: Customize UI components in `src/components/`
4. **Layout**: Modify page layouts in `src/app/`
5. **Styles**: Global styles are in `src/styles/`

Good luck with your portfolio! 🚀
