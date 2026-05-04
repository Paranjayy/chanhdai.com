# Maintenance & Sync Strategy

This document outlines how to maintain your portfolio while keeping it in sync with the upstream [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) template.

## Workflow Overview

1. **Upstream Sync**: Periodically pull new features and UI improvements from the original repository.
2. **Personal Data Isolation**: Keep your personal data (experiences, projects, social links) separate so they are not overwritten by template updates.
3. **Build Validation**: Ensure every change passes a local build to prevent production regressions.

## Upstream Syncing

To pull the latest changes from the original template:

```bash
# Add the upstream remote (one-time setup)
git remote add upstream https://github.com/ncdai/chanhdai.com.git

# Fetch and merge changes
git fetch upstream
git merge upstream/main
```

> [!IMPORTANT]
> When merging, you may encounter conflicts in `src/features/portfolio/data/`. Always prioritize your custom data files during these merges.

## Synthetic Monitoring & Quality Assurance

To ensure professional-grade stability and avoid regressions:

### 1. Build Sanity Checks
Always run `pnpm build` before pushing to `main`. This ensures all registry components and MDX files are correctly processed.

### 2. Automated Testing
Consider adding a GitHub Action for "Synthetic Monitoring" (Visual Regression):
- **Tooling**: Playwright or Happo.io.
- **Workflow**: On every PR, take snapshots of the landing page and blog posts to ensure the UI remains "pixel-perfect".

### 3. Registry Audits
Run `pnpm registry:build` whenever you modify a component in `src/registry/`. This keeps the auto-generated registry files in sync with your source code.

## Troubleshooting Builds

If the build fails with "Export encountered errors":
1. Check for broken image URLs in `data/`.
2. Ensure all `lucide-react` icons are correctly imported.
3. Verify that any new SVGs added to `icons.tsx` follow the React component pattern (PascalCase, `IconProps`).

## Key Maintenance Files

| File | Purpose |
| --- | --- |
| `src/features/portfolio/data/` | Your personal identity and content. |
| `src/registry/` | Custom UI components (Source of Truth). |
| `src/config/site.ts` | Global metadata and deployment URLs. |
| `src/components/brand-mark.tsx` | Your custom KP monogram logo. |
