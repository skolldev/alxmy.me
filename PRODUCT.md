# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Fellow developers.** Engineers who arrive through a shared blog post or a link in a discussion. They read for the opinions on Angular, code-review culture, and dev-community habits, and judge whether the author is worth following.
- **Recruiters and hiring managers.** People who looked Alexander up and want to know, quickly, who Alexander is, the stack, the work history, and whether this is a good hire.

Both groups usually land cold, often from a link, and give the site a short window to make its case.

## Product Purpose

alxmy.me is Alexander May's personal site: a profile of a Munich-based frontend engineer (10 years, Angular/TypeScript, currently at codecentric), a list of recent projects, and a blog.

Success means a **credible first impression**. Someone who looks Alexander up leaves knowing who Alexander is, how Alexander works, and what Alexander stands for, without having to dig. Blog posts back the profile up by showing how Alexander thinks.

## Positioning

A pragmatic Angular/TypeScript specialist who prefers calm, durable, boring-readable systems and pushes back on complexity that doesn't earn its keep. The voice is direct, a little wry (the struck-through "enterprise-grade systems that don't break" line), and plainly human (lifting, Neapolitan pizza, homelab, D&D).

## Operating Context

- Visitors read on phones and desktops; blog posts are long-form prose with code blocks, images, and quotes.
- Blog posts are shared as links, so each post gets an auto-generated Open Graph image (`generate-og.js`, Satori + resvg).
- German legal pages are part of the site: imprint (`src/imprint.md`) and privacy policy (`src/privacy.md`).

## Capabilities and Constraints

- **Stack:** Eleventy 3 static site, Nunjucks templates, Tailwind CSS v4 via PostCSS, Markdown blog posts in `src/blog/`. Built to `_site/` and deployed to a static host.
- **Content model:** site metadata in `src/_data/site.json`, projects in `src/_data/projects.json`, posts collected by glob from `src/blog/*.md` with title, date, and description front matter.
- **No third-party requests.** Self-host fonts, images, and other assets; no CDNs or embedded third-party widgets. Privacy-first and GDPR-clean. The one existing exception is Fathom analytics (privacy-focused, cookieless). Open decision: whether that stays.
- **OG image generation** uses Satori, which can't read variable fonts, so it needs static font instances.

## Brand Commitments

- Name and byline: Alexander May. Domain: alxmy.me.
- Tagline: open decision. "Frontend engineer with a security habit" is being retired, and so is the PJPT mention. Both still appear in the live copy (`src/index.njk`) until it's revised. Don't reuse them in new work.
- The voice described under Positioning: direct, pragmatic, lightly self-deprecating.
- Favicon set in `src/favicons/`.
- Aesthetic standard: a modern website at Linear / Vercel craft level, not a themed metaphor. Three hands of themed directions (object, era and poster worlds) were rejected as "too themed, not enough wow" (Nov 2026). The wow comes from precision in type, light, spacing and motion.

## Evidence on Hand

- Profile copy and "How I work" principles on the homepage (`src/index.njk`).
- Five past projects with industry labels (`src/_data/projects.json`): Underwriting Platform (Insurance), Freight Invoice Management System (Logistics), StudySmarter (EdTech, "learning platform serving millions of students"), Spendit (FinTech), Kratzer Automation (Automotive).
- Three published blog posts (Feb 2026), plus open branches for drafts.
- Public links: GitHub (skolldev), LinkedIn, contact email.
- **Absent, do not fabricate:** testimonials, client logos, metrics, certifications, or claims beyond the existing copy.

## Product Principles

1. **Credible to the people with the highest bar.** Picture an engineer from Linear or PostHog landing here: they should instantly feel credibility and zero bullshit. That means plain claims that are backed up, no buzzwords or inflated titles, no filler, and craft that shows in the details instead of being announced.
2. **Clarity in the first glance.** A cold visitor should grasp who Alexander is and what Alexander does in seconds.
3. **The writing proves the profile.** Posts are evidence of how Alexander thinks. Reading them has to be a pleasure, not a chore.
4. **Practice what's preached.** The site itself should be calm, durable, and boring under the hood: static, fast, and with no needless complexity.
5. **Respect the visitor.** No tracking beyond the minimum, no third-party requests, no dark patterns.

## Accessibility & Inclusion

WCAG 2.2 AA is the minimum and a hard requirement: contrast, keyboard access, visible focus, honoring reduced-motion preferences, semantic structure, and screen-reader text for links that open new tabs or for visual jokes (such as the struck-through line).
