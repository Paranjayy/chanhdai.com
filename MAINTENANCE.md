# Portfolio Maintenance Guide

This document explains how to maintain your portfolio while tracking updates from the original [chanhdai.com](https://github.com/ncdai/chanhdai.com) repository.

## 🏗️ Branch Strategy

- **`template`**: Your clean, generic baseline. No personal data, no original blog posts. This tracks the upstream repository.
- **`main`**: Your live portfolio with your personal data, blogs, and customizations.

## 🔄 Syncing with Upstream (New Features)

When the original repository adds new features (e.g., new components, registry updates), follow these steps:

### 1. Update the `template` branch
```bash
git checkout template
git pull https://github.com/ncdai/chanhdai.com main
```

### 2. Sanitize the template
After pulling, the template will contain the original author's blog posts and data. Run the reset script:
```bash
pnpm reset:template
```
*Note: I've added this script alias to your `package.json`.*

### 3. Merge into `main`
Now that your template is updated and clean, bring those features into your live site:
```bash
git checkout main
git merge template
```
*Resolve any conflicts in `src/features/portfolio/data/user.ts` by keeping your version.*

## 🧹 Cleanup Commands

- `pnpm sanitize:portfolio`: Deletes all blog posts and registry components.
- `pnpm reset:template`: Resets all personal data to generic placeholders (ideal for the template branch).

## 🚀 Deployment
Your build command is configured to automatically rebuild the shadcn registry:
```bash
pnpm build
```
*Note: This requires `bun` to be installed on your system for the `registry:build` step. Vercel automatically supports this if you use the default settings.*
