---
name: graphite-and-green
description: Personal site for Md Jonayed. Modern business with a quiet technical edge — dark graphite bands, cool paper ground, one business green for actions, mint for small signals on dark, Geist throughout.
colors:
  ink: "#0d1117"
  ink-2: "#151b23"
  ink-3: "#232b36"
  on-ink: "#eef1ee"
  on-ink-soft: "#9aa4ae"
  paper: "#f3f4f0"
  card: "#ffffff"
  line: "#e1e4dd"
  text: "#11161c"
  text-soft: "#454e57"
  text-mute: "#5f6870"
  primary: "#1a6b50"
  primary-press: "#145540"
  mint: "#9be1c3"
  mint-soft: "#e2f3ea"
typography:
  display: "Geist 600, tracking -0.035em, line-height 1.02, max 6rem"
  body: "Geist 400, 16–18px, line-height 1.6"
  data: "Geist Mono — numbers, step indexes, years only"
rounded: { lg: 14px, xl: 20px, 2xl: 28px, pill: 9999px }
---

> Replaces the earlier warm-editorial (cream/coral/serif) system, which was retired in favour of this direction.

## Principles

- **Graphite and paper alternate.** Dark bands (hero, ventures, footer) carry presence; paper bands carry reading. Never two dark bands in a row.
- **Green means action.** `primary` is for buttons and links on light. On dark, actions use `mint` fill with `ink` text. Green is never decoration.
- **Technical, not costume.** The edge comes from measured details: a faint 72px grid behind the hero, 1px rules, progress lines, mono numerals for data. No neon glow, no glassmorphism, no terminal pastiche.
- **Photography leads the hero.** A real portrait of Md Jonayed sits in the hero (`site.portrait`). Elsewhere, type and structure do the work.
- **One signature motion per section at most.** Hero: name reveal + auto-advancing role strip. Approach: the timeline draws itself on scroll. Everything else is static or a simple crossfade. Reduced motion disables all of it.

## Components

- **Buttons:** 44px pills. Light: `primary` fill / white text. Dark: `mint` fill / `ink` text, or 1px `ink-3` outline.
- **Role strip:** a tablist across the bottom of the hero; the active tab carries a mint progress line; the summary sits below.
- **Cards:** `card` white on `paper`, 1px `line` border, radius `xl`. No shadows except the testimonial card (`0 1px 2px` + `0 12px 32px -12px` at low alpha).
- **Contact band:** full-width `primary` panel, radius `2xl`, light grid in the top-right corner.

## Accessibility

White on `primary` 7.3:1. `on-ink-soft` on `ink` ~7:1. `text-mute` on `paper` ≥ 4.5:1. Focus ring: 2px `primary` on light, `mint` on dark.
