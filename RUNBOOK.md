# RUNBOOK — Mithaq Platform

**Audience:** AI assistants (Claude, GPT, Gemini, etc.) and future
maintainers. **Read this first** if you've been given this repository
and asked to help. You should not need to open every file — this
document tells you what matters.

**Owner:** Emad Fayez Al-Balawi · `emad.cs.albalawi@gmail.com`

---

## 1. What this is

**Mithaq (ميثاق)** is a static Vite + React 19 + TypeScript single-page
brochure showcasing a vision for Saudi data governance under the **NDMO**,
**PDPL**, and **NCA ECC** frameworks. It is a personal portfolio piece —
not a commercial product, no users, no backend, no database.

- **Live:** https://mithaq.pages.dev (Cloudflare Pages, free tier, auto-deploys on push)
- **Source:** https://github.com/CS-Emad-Albalawi/mithaq
- **Stack:** Node.js 22+ · pnpm 10+ · React 19 · TypeScript 5.9 · Vite 7 · Tailwind v4 · shadcn/ui · Wouter

> **NOT npm.** This project uses pnpm exclusively. Do not suggest `npm install`.

---

## 2. The 5 commands that solve 95% of situations

```powershell
pnpm install      # restore deps
pnpm dev          # local dev server at :5173
pnpm build        # production build → dist/public/
pnpm check        # tsc --noEmit (must pass before commit)
pnpm preview      # preview the production build at :5050
```

---

## 3. File layout (what matters)

```
mithaq/
├── client/
│   ├── public/                # static assets served at site root
│   │   ├── _headers           # Cloudflare security headers (CSP, HSTS, COOP, CORP)
│   │   ├── icon-192.svg       # SOURCE OF TRUTH for favicon — all PNGs derive from this
│   │   ├── icon-512.svg
│   │   ├── favicon-16.png
│   │   ├── mithaq-logo-32.png
│   │   ├── mithaq-logo-180.png
│   │   ├── og-image.svg       # Open Graph card for social sharing
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── main.tsx           # React entry
│   │   ├── App.tsx            # Wouter router setup
│   │   ├── index.css          # global Tailwind + .heading-glow utility
│   │   ├── i18n/              # ar.ts + en.ts (ALL user-visible strings live here)
│   │   ├── pages/
│   │   │   ├── Home.tsx       # sector picker + active sector preview
│   │   │   ├── About.tsx      # full project description, capabilities, principles, AI disclosure
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx    # mailto + WhatsApp affordances only
│   │   │   ├── NotFound.tsx
│   │   │   └── features/      # 5 deep-dive feature pages + shared shell
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx     # 3-column + AI disclosure strip
│   │   │   ├── MithaqLogo.tsx # the trefoil — single SVG source for the brand mark
│   │   │   ├── SmartLanding/  # 4 sector templates (Government, Healthcare, Financial, Academic) + Default skip view
│   │   │   └── ui/            # shadcn primitives (Button, Card, Dialog, ...)
│   │   └── contexts/          # LanguageContext, SectorContext, ThemeContext
│   └── index.html             # html shell + meta + favicon links
├── package.json               # slim, brochure-only deps
├── pnpm-lock.yaml             # commit this; needed for reproducible Cloudflare builds
├── vite.config.ts             # Vite config (root = client/, output = dist/public/)
├── tsconfig.json
├── components.json            # shadcn config
├── .gitignore                 # excludes node_modules, dist, .env
├── .npmrc                     # supply-chain hardening
├── README.md                  # public-facing front page
├── DEPLOY.md                  # full Cloudflare Pages deploy guide
└── RUNBOOK.md                 # this file
```

---

## 4. Common scenarios — what to do

### 4.1 "I want to run the platform locally"
```powershell
cd <path-to-mithaq>
pnpm install
pnpm dev
```
Opens at http://localhost:5173 with hot-reload.

### 4.2 "I want to deploy a change"
```powershell
git add .
git commit -m "describe what changed"
git push origin main
```
Cloudflare Pages auto-rebuilds in ~90s. No manual deploy step.

### 4.3 "I lost my computer and have only this folder"
The platform is intact on GitHub independently of your machine:
```powershell
git clone https://github.com/CS-Emad-Albalawi/mithaq.git
cd mithaq
pnpm install
pnpm build
```
The live site at mithaq.pages.dev is also still online — your local
copy doesn't need to be running for the public site to work.

### 4.4 "I want to change some Arabic or English copy"
All user-visible strings are in `client/src/i18n/ar.ts` and `client/src/i18n/en.ts`.
Find the key, edit the value, `pnpm check`, `pnpm build`, push. Done.

### 4.5 "I want to add a new page"
1. Create `client/src/pages/MyPage.tsx`
2. Register a route in `client/src/App.tsx`
3. (Optional) Add a Navbar link in `client/src/components/Navbar.tsx`
4. Add any new copy under `i18n/ar.ts` and `i18n/en.ts`
5. `pnpm check && pnpm build`, push.

### 4.6 "Build fails after install"
- First: delete `node_modules` and `pnpm-lock.yaml`, then `pnpm install`
- Verify Node 22.x: `node --version`
- Last resort: clone fresh from GitHub and re-install

### 4.7 "Favicon looks wrong"
The source of truth is `client/public/icon-192.svg`. Regenerate PNG
variants with ImageMagick (Windows path shown):
```powershell
& "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe" `
  -background none -density 600 client\public\icon-192.svg `
  -resize 32x32 client\public\mithaq-logo-32.png
```
Repeat for 16x16 and 180x180. Then push.

### 4.8 "Cloudflare deployment failed"
Reference build settings (must match):
- Framework preset: **Vite**
- Build command: `pnpm install --frozen-lockfile=false && pnpm build`
- Build output directory: `dist/public`
- Root directory: (default, empty)
- Environment variable: `NODE_VERSION=22`

### 4.9 "I want a custom domain (e.g. mithaq.sa)"
Cloudflare → mithaq project → Custom domains → Set up. If the domain
was bought from Cloudflare Registrar, the binding is automatic. If
elsewhere, copy the CNAME/A records Cloudflare gives you and add them
at your domain registrar.

---

## 5. Things NOT to do

- **Don't suggest npm** — pnpm only.
- **Don't suggest adding Express, tRPC, Drizzle, PostgreSQL, Redis, etc.**
  This is intentionally a static brochure. The previous "SaaS edition"
  was deleted on 2026-05-12 and is not coming back.
- **Don't add tracking, analytics, cookies, or third-party scripts.**
  Privacy is a design value.
- **Don't reference "Raqib"** — that was a cancelled predecessor project.
- **Don't restore deleted folders** like `server/`, `drizzle/`, `packages/`,
  `docs/`, `tests/`, `e2e/`, `chaos/`, `gitops/`, `kubernetes/`,
  `terraform/`, etc. They were removed intentionally.
- **Don't change the author email** — `emad.cs.albalawi@gmail.com` is
  canonical. Other emails you may find in git history (`man970323@…`,
  `mithaq.support@…`) are obsolete and not to be reintroduced.
- **Don't reintroduce English-only or Arabic-only flows** — the platform
  is bilingual, always.
- **Don't change `Prince Fahd bin Sultan University` / `جامعة الأمير فهد بن سلطان`** —
  this is the operator's actual university and the canonical form.

---

## 6. Identity values that must stay consistent

| Field | Value |
|---|---|
| Project name | Mithaq · ميثاق |
| Tagline | Where Law Becomes Practice · حيث القانون يصبح ممارسة |
| Author | Emad Fayez Al-Balawi · عماد فايز البلوي |
| University | Prince Fahd bin Sultan University · جامعة الأمير فهد بن سلطان |
| Degree | B.Sc. Computer Science |
| Email | emad.cs.albalawi@gmail.com |
| GitHub | CS-Emad-Albalawi |
| Live URL | https://mithaq.pages.dev |
| Repo URL | https://github.com/CS-Emad-Albalawi/mithaq |
| Frameworks scope | NDMO · PDPL · NCA ECC · SDAIA AI Ethics · SAMA CSF |

---

## 7. AI tooling disclosure (don't remove, don't downplay)

This codebase was scaffolded with Anthropic's Claude Code under the
operator's full supervision. The disclosure appears in:
- `client/src/components/Footer.tsx` (footer strip)
- `client/src/pages/About.tsx` ("Authorship & Tooling" section)
- `README.md` (Authorship section)
- `client/src/i18n/ar.ts` and `en.ts` (the `footer.ai_disclosure` key)

This aligns with SDAIA AI Ethics principles of **Transparency** and
**Accountability**. If editing, preserve the substance: human author
supervises, AI accelerates, responsibility is human.

---

## 8. Communication norms

- The operator prefers **Arabic** for explanations, **English** for
  command output.
- Use clear tables/sections; the operator appreciates structure.
- Be honest about uncertainty.
- Always verify with `pnpm check` and `pnpm build` before declaring
  done. The operator values explicit verification.

---

## 9. If you're still stuck

Email the operator at `emad.cs.albalawi@gmail.com` describing:
1. What you tried
2. The exact error message (verbatim, not paraphrased)
3. What you think might be wrong

The operator will respond when available. The platform itself remains
live at mithaq.pages.dev regardless — your local issue does not affect
the public site.
