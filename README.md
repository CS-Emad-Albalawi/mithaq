<div align="center">

# ميثاق · Mithaq

**حوكمة بيانات أصيلة للمملكة العربية السعودية**

*Native data governance for Saudi Arabia*

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

[الموقع المباشر · Live Site](https://mithaq.pages.dev) ·
[الوثيقة · Spec (v5.0)](#) ·
[التواصل · Contact](mailto:emad.cs.albalawi@gmail.com)

</div>

---

## نظرة عامة · Overview

**بالعربية:** ميثاق مشروع تقني سعودي قيد التطوير النشط، يُعالج مشكلة حوكمة
البيانات في الجهات الخاضعة لأُطر **NDMO** و **PDPL** و **NCA ECC**. هذا
المستودع يحوي شيفرة "**منصة العرض**" (Brochure SPA) التي تُجسِّد رؤية
البرنامج التشغيلي المستقبلي.

**English:** Mithaq is a Saudi technical project in active development,
addressing data-governance needs for entities subject to the **NDMO**,
**PDPL**, and **NCA ECC** frameworks. This repository contains the
**brochure platform** that presents the vision of a future operational
program.

> [!IMPORTANT]
> **المنصة vs البرنامج · Platform vs Program**
>
> هذا المستودع يحوي **المنصة** (موقع عرض static) — البرنامج التشغيلي
> الفعلي (الذي يُجري الحوكمة على بيانات الجهات) لم يُكتب بعد. كل ادعاء
> حول NDMO/PDPL/NCA ECC هو وصف لما يُخطَّط له، لا لما يعمل اليوم.
>
> This repo is the **Platform** (a static showcase site). The operational
> **Program** (which actually governs entity data) is unbuilt. Every
> claim about NDMO/PDPL/NCA ECC describes what is planned — not what
> runs today.

---

## القطاعات المُغطّاة · Sectors Covered

| القطاع · Sector | الجمهور المستهدف · Target Audience | الميزة القاتلة · Killer Feature |
|------|---------|-----------------|
| **حكومي · Government** | مكاتب الـCDO، الوزارات، الأمانات | لوحة الإشراف الوطنية · National Supervisory Dashboard |
| **صحي · Healthcare** | التجمعات الصحية، المستشفيات | أمين — الرفيق الصحي الذكي · Ameen Smart Companion |
| **مالي · Financial** | البنوك، شركات التأمين، SAMA-regulated | محرِّك DSAR للقطاع المصرفي · Banking DSAR Engine |
| **أكاديمي · Academic** | الجامعات، مراكز البحوث | محرِّك موافقات IRB · IRB Approval Engine |

---

## الميزات الأساسية · Core Features

The five-feature deep-dive pages under `/features/*`:

1. **البصمة التنظيمية السعودية** · Saudi Regulatory Fingerprint
2. **ذاكرة الأنماط** · Saudi Pattern Memory (National ID, IBAN, MRN, plates)
3. **المُترجِم التنظيمي الذكي** · Smart Regulatory Translator (4 audiences)
4. **أمين — الرفيق الذكي** · Ameen, the Healthcare AI Companion
5. **اللوحة الذكية بخمسة ألوان** · Five-Colour Smart Compliance Dashboard

Each page includes a regulatory-mapping table linking the feature to
specific articles in NDMO, PDPL, NCA ECC, SDAIA AI Ethics, and (for the
financial sector) SAMA CSF.

---

## الأُطر التنظيمية · Regulatory Frameworks

The future Program is designed to align with:

- **NDMO** — National Data Management Framework
- **PDPL** — Personal Data Protection Law (articles 5, 12, 13, 16, 19, 20, 21, 29, 31)
- **NCA ECC** — Essential Cybersecurity Controls (ECC-1-5/6, ECC-2-3/7/15, ECC-4-7)
- **SDAIA AI Ethics** — Transparency, Fairness, Accountability, Privacy
- **SAMA CSF** — Saudi Arabian Monetary Authority Cybersecurity Framework

---

## المكدس التقني · Tech Stack

```
React 19  +  TypeScript 5.9  +  Vite 7
Tailwind CSS v4  +  shadcn/ui (new-york)
Wouter (routing)  ·  Lucide (icons)  ·  Geist (fonts)
```

No backend, no database, no analytics. Fully static — by design.
Hosted on Cloudflare Pages with hardened security headers
(CSP, HSTS, COOP, CORP, Permissions-Policy).

---

## التشغيل المحلي · Local Development

**المتطلَّبات · Requirements:** Node.js 22+, pnpm 10+

```bash
# Install dependencies
pnpm install

# Run dev server (http://localhost:5173)
pnpm dev

# Type-check
pnpm check

# Production build (output: dist/public)
pnpm build

# Preview the production build
pnpm preview
```

---

## النشر · Deployment

The site auto-deploys to Cloudflare Pages on every push to `main`.
See [`DEPLOY.md`](DEPLOY.md) for the full setup.

**Build settings:**
- Framework preset: `Vite`
- Build command: `pnpm install --frozen-lockfile=false && pnpm build`
- Output directory: `dist/public`
- Node version: `22`

---

## التأليف · Authorship

**Author:** عماد فايز البلوي · Emad Fayez Al-Balawi
B.Sc. Computer Science · Prince Fahd bin Sultan University

**AI Tooling Disclosure:** This codebase was scaffolded with the
assistance of [Anthropic's Claude Code](https://claude.com/claude-code).
All architectural decisions, regulatory interpretations, and Arabic
phrasing were reviewed and approved by the author. Final responsibility
for every output rests with the author, not the tool.

This disclosure aligns with **SDAIA AI Ethics** principles of
**Transparency** and **Accountability**.

---

## الترخيص · License

This is a personal portfolio project. The code is shared publicly for
review and reference — but is **not licensed for commercial reuse**
without prior written consent.

For inquiries, licensing, or collaboration:
**emad.cs.albalawi@gmail.com**

---

<div align="center">

**ميثاق — حيث القانون يصبح ممارسة**

*Mithaq — Where Law Becomes Practice*

</div>
