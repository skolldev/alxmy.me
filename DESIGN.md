---
name: alxmy.me
description: Personal site of a Munich frontend engineer, built to product-company craft without metaphor or costume.
colors:
  accent: "oklch(0.5 0.2 266)"
  accent-ink: "oklch(0.99 0 0)"
  accent-soft: "oklch(0.5 0.2 266 / 0.1)"
  bg: "oklch(0.982 0.004 260)"
  surface: "oklch(1 0 0)"
  surface-2: "oklch(0.965 0.005 260)"
  ink: "oklch(0.18 0.012 265)"
  ink-2: "oklch(0.42 0.015 265)"
  ink-3: "oklch(0.5 0.015 265)"
  line: "oklch(0.91 0.006 260)"
  line-strong: "oklch(0.86 0.008 260)"
  glow-a: "oklch(0.72 0.14 266 / 0.32)"
  glow-b: "oklch(0.82 0.1 210 / 0.3)"
  accent-dark: "oklch(0.72 0.15 268)"
  accent-ink-dark: "oklch(0.16 0.02 265)"
  accent-soft-dark: "oklch(0.72 0.15 268 / 0.14)"
  bg-dark: "oklch(0.16 0.008 265)"
  surface-dark: "oklch(0.2 0.01 265)"
  surface-2-dark: "oklch(0.23 0.011 265)"
  ink-dark: "oklch(0.95 0.005 265)"
  ink-2-dark: "oklch(0.78 0.01 265)"
  ink-3-dark: "oklch(0.7 0.012 265)"
  line-dark: "oklch(0.28 0.012 265)"
  line-strong-dark: "oklch(0.34 0.014 265)"
  glow-a-dark: "oklch(0.58 0.2 266 / 0.55)"
  glow-b-dark: "oklch(0.62 0.13 210 / 0.38)"
typography:
  display:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 1.6rem + 6.4vw, 6rem)"
    fontWeight: 680
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  statement:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 2.8vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  closing:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.4vw, 4.75rem)"
    fontWeight: 660
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  page-title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem)"
    fontWeight: 660
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 108"
  headline:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.6vw, 2.5rem)"
    fontWeight: 640
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"ss01\", \"cv11\""
  prose:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "\"ss01\", \"cv11\""
  label:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  panel: "14px"
  sm: "8px"
  chip: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  max: "1200px"
  read: "44rem"
  inset: "1.25rem"
  stack-sm: "0.75rem"
  stack-md: "1.25rem"
  stack-lg: "2rem"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "color-mix(in oklch, oklch(0.5 0.2 266) 88%, oklch(0.18 0.012 265))"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.875rem"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.75rem"
  nav-link-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
  panel-head:
    backgroundColor: "{colors.surface-2}"
    padding: "0.875rem 1.25rem"
  project-row:
    padding: "0.85rem 1.25rem"
  project-row-hover:
    backgroundColor: "{colors.surface-2}"
  tag:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.6rem"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0.1rem 0.5rem"
  code-block:
    backgroundColor: "{colors.surface}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "1.1rem 1.25rem"
  blockquote:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.sm}"
    padding: "1.1rem 1.4rem"
---

# Design System: alxmy.me

## Overview

**Creative North Star: "The Calibrated Instrument"**

A personal site held to the standard of a good product company's marketing surface, with no metaphor and no costume. Nothing is themed; the impression of quality comes entirely from precision: a wide variable grotesk set tight at display sizes, cool near-white paper, hairline rules, one lifted object with light behind it, and a single well-timed motion. Credibility is earned by the details being right, not by anything announcing itself.

Density is calm and generous. Pages are mostly ink on paper, organised by 1px rules and whitespace rather than boxes. Exactly one element per page gets material treatment (the work index panel on the homepage); everything else stays flat. Light and dark are both first-class: the dark theme is a separately tuned set of values that follows the system preference, not an inversion.

The site rejects both the dev-portfolio dark-terminal look and the bare one-column text page, and it rejects themed worlds (object, era, poster metaphors) as a category.

**Key Characteristics:**
- Light-first, with an equally designed dark theme chosen by `prefers-color-scheme`.
- Cool neutrals (hue 260 to 265, very low chroma) and one cool blue-violet accent.
- Mona Sans variable for everything readable; widened (108 to 118%) and tightly tracked at display sizes.
- JetBrains Mono only inside code.
- Hairline 1px borders carry structure; soft layered shadows only where something is lifted.
- One authored motion moment; all motion off under reduced motion.

## Colors

A near-monochrome cool-grey world with one saturated blue-violet signal.

### Primary
- **Signal Indigo** (`accent`; dark: `accent-dark`): fill of the primary action (the email button), the focus ring, text selection, the caret, link underlines in long-form prose, and the hover state of navigable items (post titles, "All writing", the latest-post arrow). Text on it uses **Accent Ink** (`accent-ink`).
- **Signal Wash** (`accent-soft`): the faint accent light that follows the cursor across the work panel. Never a surface fill.

### Neutral
- **Cool Paper** (`bg`): page ground and the translucent sticky header (78% mix over the page).
- **Clean Sheet** (`surface`): the work panel, ghost buttons, code blocks; the top surface.
- **Mist** (`surface-2`): recessed fills: panel header, row hover, chips, inline code, blockquotes, nav hover.
- **Ink** (`ink`): headings and primary text.
- **Graphite** (`ink-2`): secondary text: ledes, stances, descriptions, nav links at rest.
- **Pewter** (`ink-3`): tertiary text and metadata: dates, reading time, field labels, footer, list markers, struck-through text.
- **Hairline** (`line`): every structural rule and component border.
- **Firm Hairline** (`line-strong`): ghost-button borders, the top rule of each principle, the scrollbar thumb.
- **Behind-Light** (`glow-a`, `glow-b`): two blurred radial pools (indigo and cyan) behind the hero object only.

### Named Rules
**The One Signal Rule.** The accent marks exactly two things: the primary action and live state (hover, focus, selection, caret, active link). It is never a background for content, a decorative stroke, or a heading colour at rest.

**The Two Daylights Rule.** Every colour token has a tuned dark counterpart, and new tokens must ship both. In dark, the accent lightens (to `accent-dark`) and its ink turns dark; surfaces step up in lightness from the ground (bg, then surface, then surface-2), so elevation still reads.

**The Cool Neutral Rule.** Neutrals stay on hue 260 to 265 with chroma at or below 0.015. No warm greys, no pure black or white text on the ground.

## Typography

**Display Font:** Mona Sans variable (weight 200 to 900, width 75 to 125%), self-hosted, with ui-sans-serif and system-ui fallback
**Body Font:** Mona Sans, same file
**Mono Font:** JetBrains Mono (400, 700), self-hosted

**Character:** One grotesk doing all the work, pushed wide and heavy for display and left at normal width for reading. Weights sit at in-between values (540, 560, 620, 640, 660, 680) for a tuned rather than stock feel. Body text enables the `ss01` and `cv11` alternates.

### Hierarchy
- **Display** (680, `typography.display`, width 112%): the name in the homepage hero, broken over two lines.
- **Closing** (660, width 112%): the single contact call at the end of the homepage, max 14ch.
- **Statement** (700, width 118%): the principles band; short two- or three-word claims set as a typographic set piece.
- **Page title** (660, width 108%): h1 on posts, the writing index and legal pages.
- **Headline** (640, width 108%): homepage section headings.
- **Title** (620): post titles in lists; prose h2 is 1.625rem/640 at width 106%, prose h3 1.25rem/620.
- **Lead** (1.25rem): hero role (at 500), ledes, principle explanations, large profile prose; 22 to 38ch measures.
- **Body** (1.0625rem, 1.6): UI and short copy. **Prose** (1.125rem, 1.7) for posts, measure capped by the 44rem reading column.
- **Label** (0.75 to 0.8125rem): metadata and panel field labels, sentence case, Pewter, `tabular-nums` for dates and counts.
- **Code** (JetBrains Mono, 0.875rem block, 0.85em inline).

### Named Rules
**The Stretch Rule.** Width is a display axis. Headings at headline size and above set width between 106% and 118% with negative tracking (-0.02em to -0.045em) and tight leading (0.92 to 1.05). Body, labels and UI stay at 100% width with normal tracking.

**The Mono Is For Code Rule.** JetBrains Mono appears only in `code` and `pre`. Metadata (dates, reading time, counts) stays in Mona Sans with tabular numerals.

**The Sentence Case Rule.** Labels, nav and buttons are sentence case at normal tracking. No uppercase tracked micro-labels.

## Layout

A single 1200px container with a fluid gutter (`spacing.gutter`). The homepage hero is a two-column grid from 960px (text 1fr, panel 1.05fr), stacked below. Homepage sections use a 4fr / 7fr split from 960px with the heading column sticky at 6.5rem from the top, so the heading stays beside its content while reading. The principles band runs three equal columns from 900px, separated by hairlines, and stacks with a top rule per item below.

Reading pages (posts, writing index, legal) centre a 44rem column inside the container. Post lists switch to a two-column row from 720px, metadata right-aligned in a 9rem column.

Vertical rhythm is fluid: sections pad `spacing.section`; the hero and closing sections take larger clamps (up to 7.5rem and 9rem). Inside components the recurring inset is 1.25rem; stacks step 0.75rem, 1.25rem, 2rem. The sticky header is 4rem tall, and `scroll-padding-top` is 5rem so anchors clear it. Below 480px the nav tightens and hero buttons go full width, primary on its own row.

## Elevation & Depth

Hybrid, flat by default. Structure is drawn with hairlines and tonal steps (bg, surface, surface-2). Shadows exist in exactly two places: the work panel (a three-layer ink-tinted stack) and the primary button (a small two-layer lift). In dark, the panel's top layer becomes a 1px inset highlight and the shadow layers go to near-black.

### Shadow Vocabulary
- **Panel lift** (`--shadow-panel`; light: `0 1px 2px oklch(0.2 0.02 265 / 0.06), 0 12px 24px -8px oklch(0.2 0.02 265 / 0.1), 0 40px 80px -24px oklch(0.3 0.06 265 / 0.22)`): the one lifted object per page.
- **Button lift** (`--shadow-btn`; light: `0 1px 2px oklch(0.2 0.02 265 / 0.14), 0 4px 10px -4px oklch(0.2 0.02 265 / 0.22)`): primary button only.
- **Behind-light**: two radial gradients (`glow-a`, `glow-b`) blurred 24px on a pseudo-element behind the panel. This is ambient light on the ground, not a shadow.

### Named Rules
**The One Lifted Object Rule.** A page has at most one panel-lift surface. Lists, posts, cards and sections stay flat on hairlines.

**The No Halo Rule.** Shadows are neutral and ink-tinted. Coloured light lives only in the blurred behind-light and the cursor wash, never in a `box-shadow` glow around an element.

## Shapes

Soft, product-grade corners with clear roles: 14px for the work panel, 8px for code blocks, blockquotes, images and the skip link, 6px for stack chips, 5px for inline code, and full pills for every interactive control (buttons, nav links) and for tags and counts. Borders are always 1px; the only heavier stroke is the 2px strike-through in profile prose. Icons are inline SVG at 1em, 1.75 stroke, round caps and joins, inheriting `currentColor`.

## Components

### Buttons
Confident, pill-shaped, quietly physical.
- **Shape:** full pill (`rounded.pill`), 2.875rem tall, 0.9688rem at weight 560, icon gap 0.5rem.
- **Primary:** Signal Indigo fill, Accent Ink text, button lift. One per view group: the email action.
- **Ghost:** Clean Sheet fill, Ink text, Firm Hairline border; border darkens to Pewter on hover. Used for GitHub and LinkedIn.
- **Hover / Active:** primary darkens toward ink (88% mix); the trailing arrow nudges 2px right (external arrows go up-right); active presses down 1px. Focus is the global 2px accent ring at 3px offset.

### Tags, Counts and Chips
- **Tag / count:** pill outline in Hairline, Graphite text, 0.75rem at 560 to 600; counts use tabular numerals.
- **Chip:** Mist fill, Hairline border, 6px corners, 0.8125rem at 540. Used for the current stack list.

### Cards / Containers
- **Work panel:** Clean Sheet, 14px corners, Hairline border, panel lift, behind-light. Head row in Mist with a title, count and meta; project rows separated by hairlines, Mist on hover; a footer split into two hairline-divided cells (latest writing, current stack) from 560px.
- **Blockquote:** Mist fill, Hairline border, 8px corners, Graphite italic.
- **Code block:** Clean Sheet, Hairline border, 8px corners, horizontal scroll.

### Navigation
- **Header:** sticky, 4rem, translucent Cool Paper with `saturate(1.6) blur(14px)`; a Hairline bottom border appears only once the page scrolls past 8px.
- **Wordmark:** the name at 650 weight, width 110%, -0.02em.
- **Links:** Graphite pills; hover fills Mist and turns Ink; the current page is Ink with no fill.
- **Footer:** Hairline top rule, 0.875rem Pewter, legal links turn Ink on hover.

### Post List
Rows divided by hairlines, the whole row clickable through a stretched link. The title turns Signal Indigo on hover. Description in Graphite at a 60ch measure; date and reading time in Pewter with tabular numerals.

### Work Panel Motion (signature)
The panel is the system's one authored motion moment. From 960px it settles on load from a soft perspective tilt (rotated, slightly blurred, 35% opacity) to flat over 1.4s on `cubic-bezier(0.16, 1, 0.3, 1)`, after 0.15s. While hovered, a 420px Signal Wash follows the pointer. Both are disabled under `prefers-reduced-motion`; the global reduced-motion reset also collapses every transition. Other motion is limited to 0.2s colour/background transitions and 2 to 3px arrow nudges.

### Principles Band (signature)
Three short claims set at Statement size as a typographic set piece, each over a Graphite Lead explanation capped at 22ch. Separated by Firm Hairline top rules and Hairline column dividers. No numbers, no icons.

## Do's and Don'ts

### Do:
- **Do** reserve Signal Indigo for the primary action and live state (hover, focus, selection, caret, prose link underline).
- **Do** ship every new colour as a light and dark pair, tuned separately.
- **Do** widen display type (108 to 118%) and tighten tracking (-0.03 to -0.04em); keep reading text at normal width.
- **Do** draw structure with 1px Hairline rules and tonal steps before reaching for a shadow.
- **Do** use inline stroke SVG icons at 1em with a 1.75 stroke, inheriting text colour.
- **Do** use tabular numerals in Mona Sans for dates, counts and reading time.
- **Do** gate any motion behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** add a second accent colour or use the accent as a surface or heading fill at rest.
- **Don't** add coloured glow shadows; coloured light belongs only behind the hero object and in the panel's cursor wash.
- **Don't** lift more than one object per page with the panel shadow.
- **Don't** set eyebrows or kickers above headings, and don't number sections or principles.
- **Don't** use JetBrains Mono outside code, and don't set uppercase tracked micro-labels.
- **Don't** add another load or scroll animation; the panel settle is the one authored moment.
- **Don't** drift toward the dark-terminal dev-portfolio look or a themed metaphor world.
