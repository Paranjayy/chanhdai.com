# paranjay.dev — Feature Roadmap & Saturation Status

Last updated: May 2026

---

## Saturation Status

```
Core Portfolio       ████████████████████ 97%
Social Links         ████████████████░░░░ 80%  ← rectangles done
Content Discovery    ████████████░░░░░░░░ 60%
Mobile Experience    ████░░░░░░░░░░░░░░░░ 20%  ← biggest gap
SEO / Structured     █████████████████░░░ 85%
Academic Features    ████████░░░░░░░░░░░░ 40%
Social / Sharing     ██████████░░░░░░░░░░ 50%
```

**~65% overall saturation**

---

## Done

- [x] KP monogram in profile cover (static SVG, no fluid text)
- [x] "Paranjay Khachar" fluid wordmark at page footer (hover-interactive)
- [x] Social links horizontal rectangle cards (icon + title + handle)
- [x] Removed fake visitor counter (was hardcoded math)
- [x] Removed duplicate ncdai star count from footer top
- [x] GitHub contributions graph + streak/peak stats
- [x] Dashboard (Coding Activity, Spotify, Discord, Steam)
- [x] Gallery fluid text fixed (reuses footer interactive component)
- [x] Testimonials marquee (2 rows, pinned)
- [x] Tech stack grid
- [x] Vercel Analytics (passive, automatic)
- [x] Fork attribution with star count
- [x] Command menu (cmd+K)
- [x] Blog section
- [x] Experience timeline
- [x] Awards & Certifications

---

## High Priority (do soon, no blockers)

### Live Data Integrations
- [ ] Real visitor count — integrate Vercel Analytics API or lightweight pixel counter
- [ ] Real GitHub star count — replace static stargazers with GitHub API (same pattern as contributions)
- [ ] Spotify Now Playing — Web API /me/player/currently-playing dashboard widget
- [ ] WakaTime weekly coding hours — real API instead of hardcoded "42h 15m"

### Layout & Polish
- [ ] Mobile responsiveness pass — navbar, cards, contributions graph all need mobile love
- [ ] Empty sections cleanup — hide Bookmarks(0), Awards(1-template), Certs(1-template) if empty
- [ ] Custom 404 page — currently bare Vercel default
- [ ] GitHub contributions boxes broken — investigate dark-mode color token issue
- [ ] Blocks page — keep only 1 custom block (contributions or testimonials), remove generic ncdai blocks

### Content
- [ ] Fill real Projects — IFTTT, IPL Engine, Workout Buddy, etc.
- [ ] Fill real Awards — IIT Madras achievements, hackathon wins
- [ ] Fill real Certifications — Coursera, NPTEL, etc.
- [ ] Fill real Bookmarks — curated reading list / resources

---

## Medium Priority (next sprint)

### New Pages & Routes
- [ ] /projects — dedicated projects showcase (grid with screenshots, tech badges)
- [ ] /uses — hardware, software, tools setup
- [ ] /now — what I'm working on right now
- [ ] /bookshelf — books read/reading/want-to-read with ratings
- [ ] /stats — aggregated personal stats hub (GitHub, WakaTime, Spotify, etc.)

### Integrations
- [ ] Letterboxd / Trakt — watched movies/shows, ratings, currently watching widget
- [ ] Last.fm / Volt.fm — scrobble stats, top artists, top tracks section
- [ ] Chess stats — Chess.com or Lichess rating graph
- [ ] Duolingo streak — language learning progress

### Platform Products (separate deployments, linkable from portfolio)
- [ ] Workout Buddy — link from portfolio; eventual embed widget for homepage
- [ ] Media Tracker (Letterboxd/Trakt/Moctale alternative) — standalone app, link from socials
- [ ] Stats Dashboard — public stats page for all platforms

---

## Needs Decision / Input

- [ ] Username branding — paranjaydotdev everywhere or keep Paranjayy?
- [ ] Blocks page — what custom component to feature?
- [ ] Gallery content — real photos to populate /gallery page
- [ ] Sponsors section — real logos or remove placeholder shapes
- [ ] Company Name in Experience — fill or remove template placeholder
- [ ] Width — stay at max-w-5xl or try max-w-7xl for more horizontal density?

---

## Polish (any time)

- [ ] Keyboard shortcuts help modal — ? key shows all shortcuts
- [ ] Search history in cmd+K — remember recently visited pages
- [ ] Animated stats counters — count-up effect on numbers
- [ ] Reading time on blog posts
- [ ] RSS feed subscribe prompt in blog
- [ ] Scroll progress indicator — thin bar at top of page

---

## Big Ideas / Future

- [ ] /lab — personal experiments page (codepen-style but mine)
- [ ] Tina.zone-style hover-to-preview on project/link items
- [ ] Are.na-style collections — curated link/image channels
- [ ] Wiki/Obsidian-style interlinked pages — hover previews on internal links
- [ ] CLI easter egg — npx paranjay prints portfolio info in terminal
- [ ] /api/paranjay.json — public JSON card with my current status
- [ ] Custom cursor — crosshair or branded cursor (toggleable)
- [ ] GitHub Contribution heatmap on /stats — show all-time not just last year

---

## Notes

- Build env: /opt/homebrew/bin (node/pnpm) + /Users/paranjay/.bun/bin (registry gen)
- Repo: https://github.com/Paranjayy/portfolio.git
- Domain: paranjay.dev
- Analytics: Vercel Analytics (passive, no setup needed)
- Source template: ncdai/chanhdai.com (Next.js 16, Tailwind v4, shadcn/ui, MDX)
