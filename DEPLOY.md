# Mithaq — Deployment Guide

> The Mithaq platform is a **fully static** Vite-built SPA. The
> `client/` folder is the entire user-facing surface; the legacy
> `server/` directory is unused. You can host this anywhere that
> serves static files.

The recommended deployment path is **Cloudflare Pages** — it's
free, gives you a permanent URL like `mithaq.pages.dev`, runs
24/7 independent of your machine, and auto-rebuilds whenever you
push to GitHub.

---

## Path 1 (recommended): Cloudflare Pages + GitHub

You'll do this once. Total time: ~10 minutes including signup.

### 1. Push the project to GitHub

If the project isn't already on GitHub, create a new repo and push:

```powershell
# from the platform folder (C:\dev\raqib-platform)
cd C:\dev\raqib-platform

# Create a GitHub repo first at: https://github.com/new
# Then point your local repo at it:
git remote add origin https://github.com/<your-username>/mithaq.git
git branch -M main
git push -u origin main
```

> If git complains about authentication, install GitHub CLI
> (`winget install GitHub.cli`) then run `gh auth login` once.

### 2. Sign up for Cloudflare (free, no credit card)

- Go to <https://dash.cloudflare.com/sign-up>
- Use the same email you'll use for the project

### 3. Create the Pages project

- In the Cloudflare dashboard sidebar, click **Workers & Pages**
- Click **Create application** → **Pages** → **Connect to Git**
- Authorise Cloudflare to access your GitHub
- Pick the `mithaq` repository
- **Build settings**:

  | Field                          | Value                                           |
  |--------------------------------|-------------------------------------------------|
  | Framework preset               | **Vite**                                        |
  | Build command                  | `pnpm install --frozen-lockfile=false && pnpm build` |
  | Build output directory         | `dist/public`                                   |
  | Root directory                 | *(leave blank — the repo root)*                 |
  | Node version (env var)         | `NODE_VERSION = 22`                             |

- Click **Save and Deploy**.

The first build takes 2-3 minutes. When it's done, Cloudflare
shows you the live URL — it'll look like:

  `https://mithaq.pages.dev`

That URL is **permanent**. Put it on LinkedIn, in your CV, anywhere.

### 4. (Optional) Custom domain

If you own `mithaq.sa` or another domain:

- In your Pages project → **Custom domains** → **Set up a custom domain**
- Enter your domain, Cloudflare walks you through the DNS records

### 5. Iterating

Every `git push` to `main` triggers a new build automatically.
There's nothing else to manage.

---

## Path 2: Local dev only (Mithaq Platform controls on Desktop)

You already have this if you're using the `Mithaq Platform` folder
on your Desktop:

- `START Platform.bat` → builds, serves locally on `:5050`, opens a
  Cloudflare Quick Tunnel, writes the current URL to `URL.txt`
- `STOP Platform.bat`  → kills both processes cleanly

The URL changes every session and only works while your PC is on
and the script is running. Fine for live demos and one-off tests;
not suitable for a LinkedIn link.

---

## Path 3: Other static hosts

The same `dist/public` output works on any static host. Common
alternatives:

| Host             | Free tier            | Notes                                   |
|------------------|----------------------|------------------------------------------|
| Cloudflare Pages | Generous, unlimited bandwidth | **Recommended**. Best CDN + free CI. |
| GitHub Pages     | Public repos free    | URL: `<user>.github.io/<repo>`. Slower CDN. |
| Vercel           | Hobby plan free      | URL: `<project>.vercel.app`.            |
| Netlify          | Starter plan free    | URL: `<project>.netlify.app`.           |

All four accept the same `dist/public` directory. Pick whichever
you're most comfortable with — the platform doesn't care.

---

## What to put on LinkedIn

Once Path 1 is live, your LinkedIn "Featured" entry would look
something like this:

```
ميثاق | Mithaq — حوكمة بيانات أصيلة للمملكة العربية السعودية
A Saudi technical project in active development for data
governance under NDMO, PDPL, and NCA ECC frameworks.

→ https://mithaq.pages.dev
```

That URL stays valid forever. You ship updates by pushing to
GitHub; LinkedIn never needs to be touched again.
