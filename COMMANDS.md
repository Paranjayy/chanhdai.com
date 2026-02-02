# 📋 Portfolio Commands Reference

Quick reference for all available portfolio management commands.

## 🚀 Setup & Configuration

### `pnpm setup`
**Generate all portfolio files from config**

```bash
pnpm setup
```

**What it does:**
- Reads `portfolio.config.json`
- Generates all data files (user.ts, projects.ts, etc.)
- Updates site.ts and package.json
- Shows progress with checkmarks

**When to use:**
- Initial setup
- After editing `portfolio.config.json`
- When regenerating all files

---

### `pnpm reset`
**Reset portfolio to template state**

```bash
pnpm reset
```

**What it does:**
- Backs up current config → `portfolio.config.backup.json`
- Resets `portfolio.config.json` to template
- Preserves your data in backup

**When to use:**
- Starting fresh
- Sharing template with others
- Testing template state
- Before publishing as template

---

## 💻 Development

### `pnpm dev`
**Start development server**

```bash
pnpm dev
```

Opens at: http://localhost:1408

**Use for:**
- Local development
- Testing changes
- Preview before deployment

---

### `pnpm build`
**Build for production**

```bash
pnpm build
```

**What it does:**
- Creates optimized production build
- Outputs to `.next/` directory
- Ready for deployment

---

### `pnpm start`
**Start production server**

```bash
pnpm start
```

**Use after:**
- Running `pnpm build`
- For production preview

---

### `pnpm preview`
**Build and preview locally**

```bash
pnpm preview
```

**Combines:**
- `pnpm build`
- `pnpm start -p 1408`

---

## 🔍 Code Quality

### `pnpm lint`
**Check code for issues**

```bash
pnpm lint
```

---

### `pnpm lint:fix`
**Auto-fix linting issues**

```bash
pnpm lint:fix
```

---

### `pnpm check-types`
**TypeScript type checking**

```bash
pnpm check-types
```

---

### `pnpm format:check`
**Check code formatting**

```bash
pnpm format:check
```

---

### `pnpm format:write`
**Auto-format code**

```bash
pnpm format:write
```

---

## 🎨 Component Registry

### `pnpm registry:build`
**Build component registry**

```bash
pnpm registry:build
```

**Use when:**
- Adding/updating registry components
- Publishing new components

---

## 📦 Upgrade Commands

### `pnpm upgrade:next`
**Upgrade Next.js**

```bash
pnpm upgrade:next
```

---

### `pnpm upgrade:tailwind`
**Upgrade Tailwind CSS**

```bash
pnpm upgrade:tailwind
```

---

## 🔄 Common Workflows

### Initial Setup
```bash
pnpm install           # Install dependencies
# Edit portfolio.config.json
pnpm setup            # Generate files
pnpm dev              # Start dev server
```

### Making Changes
```bash
# Edit portfolio.config.json
pnpm setup            # Regenerate files
pnpm dev              # Test changes
```

### Before Committing
```bash
pnpm lint             # Check for issues
pnpm check-types      # Type check
pnpm format:write     # Format code
git add .
git commit -m "..."
```

### Deployment Prep
```bash
pnpm setup            # Ensure latest config
pnpm build            # Build for production
pnpm start            # Test production build
```

### Reset & Share
```bash
pnpm reset            # Reset to template
git add .
git commit -m "Reset to template"
git push
```

---

## 🎯 Quick Actions

| Action | Command |
|--------|---------|
| Setup portfolio | `pnpm setup` |
| Reset to template | `pnpm reset` |
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Fix linting | `pnpm lint:fix` |
| Format code | `pnpm format:write` |

---

## 💡 Pro Tips

1. **After editing config:** Always run `pnpm setup`
2. **Before committing:** Run `pnpm lint:fix && pnpm format:write`
3. **Test before deploy:** Run `pnpm build` locally first
4. **Backup your data:** `cp portfolio.config.json backup.json`
5. **Reset anytime:** `pnpm reset` (backup is auto-created)

---

## 🆘 Troubleshooting

### Command not found
```bash
# Install dependencies first
pnpm install
```

### Changes not showing
```bash
# Regenerate files
pnpm setup

# Restart dev server
pnpm dev
```

### Build errors
```bash
# Check types
pnpm check-types

# Check linting
pnpm lint
```

### Reset issues
```bash
# Force reset
rm portfolio.config.json
pnpm reset
```

---

## 📚 More Info

- **Quick Setup:** [QUICKSTART.md](./QUICKSTART.md)
- **Full Guide:** [README.md](./README.md)
- **Scripts Details:** [scripts/README.md](./scripts/README.md)
- **Demo:** [DEMO.md](./DEMO.md)

---

**Need help?** Run `pnpm [command] --help` or check the docs!
