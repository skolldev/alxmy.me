---
version: 1
slug: "src-index-njk"
primary_target: "src/index.njk"
related_targets: ["src/blog/index.njk","src/_includes/layouts/post.njk","src/_includes/layouts/base.njk"]
---

# Surface brief: alxmy.me (whole site, homepage leads)

Scope: full redesign, one new world for homepage, blog index, post layout, legal pages. Homepage mode: Persuade (credible first impression). Blog and posts: Read.
Audience/job: cold visitor from a link. Recruiter must grasp who/what/where in seconds; developer must want to read. Primary action: contact (email), secondary: read a post.
Constraints: no third-party requests (self-host fonts), WCAG 2.2 AA, static Eleventy, OG generator needs static font instances.
Decision history: user passed on three themed hands (Braun panel, Munich system, agit-train, tensegrity, zine, screenprint poster, cyclorama, type specimen, football kit) as "too themed, not enough wow" and chose the category standard played straight at Linear/Vercel craft level.
Unresolved: project years (needed if Work becomes a timeline), real portrait photo (optional), tagline, Fathom stays or goes.

## Direction contract

THESIS: A modern engineer's site at product-company craft: no metaphor, no costume. The wow comes from precision (type, light, spacing, motion) the way Linear and Vercel earn it. Refuses both the dev-portfolio dark-terminal look and the bare one-column text page.

OWN-WORLD: Light-first with an equally designed dark theme from prefers-color-scheme. Cool near-white ground, ink near-black, one restrained cool accent used only for live state and the primary action. Hairline 1px borders, soft layered elevation, faint radial light behind the hero object. One variable grotesk (width + weight axes) for display and UI, a mono only for code and small metadata. 4px base module.

STORY: Visitor learns in one glance: Alexander May, frontend engineer, Angular/TypeScript, ten years, Munich, codecentric. Believes it from the work index and the writing. Acts: emails, or opens a post.

FIRST VIEWPORT: Left, name at large display size, one-line role, a two-sentence stance, primary "Get in touch" button plus GitHub/LinkedIn. Right/below, the hero object: a product-grade "work index" panel (projects by industry, latest post, current stack) in soft perspective with light behind it. Minimal top nav: Work, Writing, Contact.

FORM: Category standard (canon), user-chosen after three re-rolls; quality bar Linear / Vercel. seed:bd429c1293aa25ef

Signature interaction: the work-index panel settles from perspective to flat as it enters, rows reveal their description on hover/focus; cursor-tracked soft light on the panel only, off under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
