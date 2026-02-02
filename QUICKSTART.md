# ⚡ Quick Start Guide

Get your portfolio up and running in minutes with our automated setup!

## 🚀 Super Quick Setup (Recommended)

### Step 1: Edit Configuration File

Edit `portfolio.config.json` with your information:

```json
{
  "personal": {
    "firstName": "John",
    "lastName": "Doe",
    "displayName": "John Doe",
    "email": "john@example.com",
    ...
  },
  ...
}
```

### Step 2: Run Setup

```bash
pnpm setup
```

That's it! ✨ All your data files will be automatically generated.

### Step 3: Test

```bash
pnpm dev
```

Visit http://localhost:1408 to see your portfolio!

---

## 📝 Available Commands

### `pnpm setup`
**Generates all data files from portfolio.config.json**

This command reads your `portfolio.config.json` and automatically creates:
- All data files in `src/features/portfolio/data/`
- Site configuration in `src/config/site.ts`
- Updates `package.json` with your info

Use this whenever you update `portfolio.config.json`.

### `pnpm reset`
**Resets everything to template state**

This command:
- Backs up your current `portfolio.config.json` → `portfolio.config.backup.json`
- Resets `portfolio.config.json` to template defaults
- Clears all personal data

Perfect for:
- Starting fresh
- Creating a new portfolio
- Sharing template with others

### `pnpm dev`
**Start development server**

Runs the portfolio locally at http://localhost:1408

### `pnpm build`
**Build for production**

Creates optimized production build

---

## 🎯 Workflow Examples

### Initial Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Edit portfolio.config.json with your info
# (Use your favorite editor)

# 4. Generate all files
pnpm setup

# 5. Test locally
pnpm dev

# 6. Deploy!
```

### Making Changes

```bash
# 1. Edit portfolio.config.json
# 2. Regenerate files
pnpm setup

# 3. Test changes
pnpm dev
```

### Resetting to Template

```bash
# Reset to clean template state
pnpm reset

# Your old config is saved in portfolio.config.backup.json
```

### Sharing with Others

```bash
# Reset to template state
pnpm reset

# Push to GitHub
git add .
git commit -m "Reset to template"
git push

# Now others can clone and customize!
```

---

## 📋 Configuration File Structure

The `portfolio.config.json` file contains all your portfolio data in one place:

### Personal Information
```json
{
  "personal": {
    "firstName": "Your First",
    "lastName": "Name",
    "displayName": "Your Name",
    "email": "email@example.com",
    "website": "https://yourdomain.com",
    ...
  }
}
```

### Jobs
```json
{
  "jobs": [
    {
      "title": "Software Engineer",
      "company": "Tech Co",
      "website": "https://techco.com"
    }
  ]
}
```

### Projects
```json
{
  "projects": [
    {
      "id": "my-project",
      "title": "My Awesome Project",
      "description": "What it does...",
      "skills": ["React", "TypeScript"],
      ...
    }
  ]
}
```

### Experience
```json
{
  "experiences": [
    {
      "companyName": "Tech Company",
      "positions": [
        {
          "title": "Senior Developer",
          "description": "What you did...",
          ...
        }
      ]
    }
  ]
}
```

And more! See the file for all available options.

---

## 🎨 What Gets Generated

When you run `pnpm setup`, these files are automatically created/updated:

```
src/features/portfolio/data/
  ├── user.ts              ✓ Personal info
  ├── projects.ts          ✓ Your projects
  ├── experiences.ts       ✓ Work history
  ├── social-links.ts      ✓ Social profiles
  ├── awards.ts            ✓ Awards
  ├── certifications.ts    ✓ Certifications
  ├── testimonials.ts      ✓ Testimonials
  └── bookmarks.ts         ✓ Bookmarks

src/config/
  └── site.ts              ✓ Site configuration

package.json               ✓ Package metadata
```

---

## ✨ Benefits of This Approach

### Single Source of Truth
- All data in one file (`portfolio.config.json`)
- Easy to find and update
- No hunting through multiple files

### Easy Backup & Restore
```bash
# Backup your data
cp portfolio.config.json my-portfolio-backup.json

# Restore later
cp my-portfolio-backup.json portfolio.config.json
pnpm setup
```

### Version Control
- One file to track changes
- Easy to see what changed
- Simple conflict resolution

### Shareable
- Share your config with others
- Easy to create variations
- Template stays clean

---

## 🆘 Troubleshooting

### "portfolio.config.json not found"
Create one by running `pnpm reset` first.

### Changes not showing up
Run `pnpm setup` after editing `portfolio.config.json`.

### Want to start over
Run `pnpm reset` to go back to template state.

### Syntax error in config
Validate your JSON at https://jsonlint.com

---

## 💡 Pro Tips

1. **Keep a backup**: Copy `portfolio.config.json` to a safe place
2. **Use git**: Commit your config file to track changes
3. **Test often**: Run `pnpm dev` frequently while making changes
4. **Incremental updates**: Make small changes and regenerate often
5. **Version your data**: Create `portfolio.config.v1.json`, `v2.json`, etc.

---

## 🎓 Advanced Usage

### Multiple Portfolios

Maintain different versions:

```bash
# Save current config
cp portfolio.config.json portfolio-personal.json

# Create work version
cp portfolio-work.json portfolio.config.json
pnpm setup

# Switch back
cp portfolio-personal.json portfolio.config.json
pnpm setup
```

### Automated Deployment

Add to your CI/CD:

```yaml
- name: Setup portfolio
  run: pnpm setup

- name: Build
  run: pnpm build
```

### Programmatic Updates

You can programmatically update your config:

```javascript
const config = require('./portfolio.config.json');
config.personal.displayName = 'New Name';
fs.writeFileSync('portfolio.config.json', JSON.stringify(config, null, 2));
```

Then run `pnpm setup`.

---

## 📚 Next Steps

- Read [SETUP.md](./SETUP.md) for detailed information
- Check [README.md](./README.md) for features overview
- See [GETTING_STARTED.md](./GETTING_STARTED.md) for deployment guide

---

**Ready to build your portfolio?** 

```bash
pnpm setup && pnpm dev
```

🚀 Let's go!
