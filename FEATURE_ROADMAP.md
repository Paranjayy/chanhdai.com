# Portfolio Feature Roadmap — paranjay.dev

> Last updated: May 2026  
> Base: fork of [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) — fully rebranded & synced with upstream.

---

## Saturation Status

```
Core Portfolio       ████████████████████ 95%
Branding / Identity  ████████████████████ 100%
Content Discovery    ████████████░░░░░░░░ 60%
Mobile Experience    ████████░░░░░░░░░░░░ 40%
SEO / Structured     █████████████████░░░ 85%
Personalization      ██████████░░░░░░░░░░ 50%  ← real data still needed
Social / Sharing     ██████████░░░░░░░░░░ 50%
```

**~65% overall** — upstream architecture is rock solid, personal content + UI polish is the remaining gap.

---

## 🔴 High Priority — Do Soon (no blocking input needed)

### 1. ✅ Real BrandMark SVG
- Replaced placeholder `BrandMark` with custom "KP" monogram SVG.
- Updated `BrandWordmark` with styled "Paranjay" text.
- Context menu "Copy Mark as SVG" is now functional with the new mark.

### 2. Real Profile Data in `user.ts`
- `phoneNumber` — encode real number in base64 (or remove if not wanted)
- `email` — already set to `hello@paranjay.dev` base64
- `address` — confirm "London, UK" is correct
- `flipSentences` — update taglines to match current positioning
- `about` — expand with real bullet points, links to projects/repos

### 3. Real OG Image
- `ogImage` in `user.ts` points to `https://paranjay.dev/og.png` — needs to be created and deployed to `/public/og.png`
- Generates the social card when sharing on Twitter/LinkedIn

### 4. Work Experience Data
- `src/features/portfolio/data/experiences.ts` — add real job history
- `experienceId: "learning-oss"` needs a matching entry in experiences data

### 5. Custom Favicon
- Currently falls back to `/favicon.ico` and `/favicon.svg` — these need actual files in `/public/`
- Replace with a proper icon matching your brand mark

### 6. Custom 404 Page
- Currently shows default Next.js/Vercel 404
- Create `src/app/not-found.tsx` with on-brand design

---

## 🟠 Medium Priority — Next Sessions

### 7. Projects Section Data
- `src/features/portfolio/data/projects.ts` — populate with real side projects
- Include: Learning OSS, any Chrome extensions, other builds

### 8. Awards & Certifications Data
- `src/features/portfolio/data/awards.ts` and `certifications.ts`
- Pull real hackathon wins, certificates, academic achievements

### 9. Tech Stack Personalization
- `src/features/portfolio/data/tech-stack.ts` — tailor to your actual stack
- Currently has upstream defaults; replace with your preferred tools

### 10. Social Links
- `src/features/portfolio/data/social-links.ts` — confirm/add all handles:
  - GitHub (`Paranjayy`), Twitter, LinkedIn, etc.
  - Add Learning OSS link

### 11. Blog / MDX Content
- Write 1–2 real blog posts in `src/features/doc/content/`
- Upstream content is Chanh Đại's — either keep as reference or delete

### 12. Testimonials
- `src/features/portfolio/data/testimonials.ts` — add real quotes from colleagues, professors, or users of your projects

### 13. Bookmarks Section
- `src/features/portfolio/data/bookmarks.ts` — add real links you find useful (feeds the Bookmarks panel on the portfolio page)

### 14. Sponsors Page
- `src/features/sponsor/` — either wire up real GitHub Sponsors or hide the page from nav in `site.ts`

---

## 🟡 Design / Artistic Differentiation — Make It Yours

> Right now it's a fork with swapped names — not artistically "yours" yet.

### 15. Custom Color Theme
- `src/styles/globals.css` — define a custom HSL palette (accent color, brand color)
- Currently uses ncdai's black/white minimal aesthetic — you can keep or pivot

### 16. Custom Typography
- Change the font stack in `src/lib/fonts.ts`
- Consider a more distinctive pairing (e.g., Geist Mono + Satoshi, or Plus Jakarta Sans)

### 17. Landing Hero Redesign
- The hero section mirrors ncdai's layout exactly
- Add something that screams Paranjay: animated terminal, gradient orb, typewriter effect, custom illustration

### 18. "Now" / Status Widget
- A dynamic widget showing what you're currently building/listening to/reading
- Could pull from: GitHub activity, Last.fm, Spotify API, a simple JSON you update manually

### 19. GitHub Contribution Graph
- Wire the `GithubContributions` component (already in registry) to `Paranjayy`
- Shows real activity; makes the portfolio feel alive

### 20. Custom Cursor or Micro-interaction Signature
- Something subtle that's distinctly yours — e.g., a duck follower (already in registry!), a custom cursor dot, or ambient canvas animation

---

## 🟢 Polish — Any Time

### 21. llms.txt
- `/public/llms.txt` — add a real description for LLM crawlers
- Helps AI assistants know who you are and what you build

### 22. vCard
- `/app/vcard/` route — exports a `.vcf` contact card
- Update with real contact details

### 23. RSS Feed
- `/rss` route should auto-generate from real blog posts once those exist

### 24. Structured Data (JSON-LD)
- `layout.tsx` has `WebSite` schema — extend to `Person` schema for better Google Knowledge Panel chances

### 25. Search (⌘K) Enhancement
- Command menu already works well
- Future: add keyboard shortcut hints, recent searches, pinned links

### 26. Analytics
- Set `NEXT_PUBLIC_GTM_ID` env var in Vercel to enable Google Tag Manager
- Or switch to Fathom/Plausible (privacy-first, ncdai used this)

---

## 🧊 Backlog / Ideas (No Rush)

- [ ] `/uses` page — tools, gear, setup you use daily
- [ ] `/changelog` — public log of portfolio/project updates
- [ ] Dark/light mode toggle animation (theme toggle effect already in registry)
- [ ] Mobile haptic feedback (haptic lib already in registry)
- [ ] "Surprise me" random project button
- [ ] Year in Review blog post template
- [ ] Add `namepronunciation` audio clip (like ncdai had)
- [ ] Interactive skills radar/chart
- [ ] Map view of places you've lived/worked
- [ ] Newsletter signup integration (Resend / ConvertKit)

---

## Infrastructure Status

| Item | Status |
|------|--------|
| `paranjay.dev` → `v0-chanhdai-com` on Vercel | ✅ Done (manually added) |
| `learning.paranjay.dev` → `learning-oss` on Vercel | ✅ Done |
| Upstream sync with `ncdai/chanhdai.com` | ✅ Done |
| Branding sanitized (no ncdai refs in code) | ✅ Done |
| `chanhdai.com2` Vercel project | 🔄 Needs git repo connected |
| Build passing locally | ⚠️ Check after `pnpm dev` |
| Production deployment | ⏳ Pending — connect `chanhdai.com2` to `Paranjayy/portfolio` repo |

---

## Notes

- The Vercel project serving `paranjay.dev` is currently `v0-chanhdai-com`, not `chanhdai.com2`. To fully clean this up, connect the `Paranjayy/portfolio` git repo to the `chanhdai.com2` Vercel project and then reassign `paranjay.dev` to it via dashboard.
- `pnpm registry:build` must be run after any registry changes.
- The `src/__registry__/` directory is auto-generated — **never edit manually**.
