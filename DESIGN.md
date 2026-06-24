# Gunnar Energy Services — Style Reference
> cinematic defense-grade dark — a well-control command center where near-black grounds, monumental expanded-grotesque headlines and hairline structure carry the authority, and a single electric-yellow phosphor is the only accent

**Theme:** dark

Gunnar speaks in the language of a defense-grade operations console (the Anduril
lineage): a near-black canvas where surfaces rise through tight, low-chroma steps,
hairline rules — not shadows — do the structural work, and a single electric yellow
(`#FEEE00`) functions as load-bearing punctuation rather than decoration. The system
is engineered, not decorated: monumental Archivo Expanded headlines with negative
tracking compress into a single visual mass, IBM Plex Mono labels read like
instrument telemetry, and corners are honestly **square** — there is not a single
pill or rounded card in the system. Imagery is cinematic and desaturated, vignetted
into the dark so photography never competes with the type. The feeling target is
**unshakeable competence**: calm, elite, the team you call when the well has to be
hit. The explicit anti-reference is generic oilfield-services corporate — no stock
blue gradients, no rig-at-sunset, no hard-hat clipart, no brochure softness.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ground | `#0A0C0F` | `--ground` | Primary page canvas — the near-black void every surface floats on |
| Ground Deep | `#06080A` | `--ground-2` | Darkest bands — emergency strip, footer base, deep sections |
| Surface | `#111418` | `--surface` | Raised panels and cards — first step up from the canvas |
| Surface Raised | `#16191F` | `--surface-2` | Insets and hover state — second step up |
| Text | `#EAECEF` | `--text` | Primary text and headlines — soft white, never pure `#fff` for body |
| Text Dim | `#9AA2AC` | `--text-dim` | Body copy, ledes, secondary text, nav links at rest |
| Text Faint | `#5C636D` | `--text-faint` | Captions, metadata, dim eyebrows, placeholder text |
| Line | `rgba(255,255,255,0.12)` | `--line` | Standard hairline border and structural rules |
| Line Soft | `rgba(255,255,255,0.06)` | `--line-2` | Faintest divider — sub-strip borders |
| Line Strong | `rgba(255,255,255,0.24)` | `--line-strong` | Emphasized border — ghost buttons, hover edges |
| Accent | `#FEEE00` | `--accent` | Electric yellow — the only chromatic color. Primary CTAs, eyebrows, kicker ticks, focus rings, status pulse, hover edges. Use it like a signal, not a fill wash |
| Navy | `#0F2240` | `--navy` | Brand deep — **image overlays only** (legacy interior heroes). Not a surface or text color in the dark system |

> **One accent, on purpose.** The palette is achromatic plus a single yellow. Do not
> introduce a second chromatic accent; the restraint *is* the brand. On the
> electric-yellow accent, text is always near-black (`#0A0C0F`), never white.

## Tokens — Typography

Three families, each on a distinct contrast axis (expanded grotesque display +
humanist body + mono telemetry) — never two similar sans paired together. All load
from Google Fonts; no substitutes needed.

### Archivo Expanded — Display / headline · `--display`
- **Weights:** 500, 600, 700, 800, 900 (headlines use **800**)
- **Line height:** 0.94 at display sizes
- **Letter spacing:** -0.015em (display), tightening visually as size grows
- **Role:** Monumental headlines. The expanded width + negative tracking compress a
  headline into one engineered visual mass. This is the brand's voice — reserve it
  for `.display` headings, never body.

### Archivo — Card / sub-headings · `--display-n`
- **Weights:** 400–900 (card headings use **700**)
- **Line height:** 1.12
- **Letter spacing:** -0.01em
- **Role:** Card titles (`.h-card`) and mid-level headings where Expanded would be
  too wide. The narrower companion to the display face — same family, different cut.

### Libre Franklin — Body · `--body`
- **Weights:** 400, 500, 600
- **Size / line height:** 16px base, line-height 1.6
- **Role:** All body copy, ledes, paragraph text. Humanist sans for long-form
  legibility. Cap measure at ~65–75ch.

### IBM Plex Mono — Labels / telemetry · `--mono`
- **Weights:** 400, 500, 600
- **Letter spacing:** 0.08em–0.22em, uppercase
- **Role:** Eyebrows, button labels, nav links, metadata, spec keys, phone numbers,
  footer legal — anything that should read like instrument output. The wide tracking
  is the tell.

### Type Scale

| Role | Family | Size | Line Height | Letter Spacing | Weight | Class |
|------|--------|------|-------------|----------------|--------|-------|
| display-xl | Archivo Expanded | clamp(44px → 116px) `8.5vw` | 0.94 | -0.015em | 800 | `.display.d-xl` |
| display-l | Archivo Expanded | clamp(34px → 68px) `5.2vw` | 0.94 | -0.015em | 800 | `.display.d-l` |
| display-m | Archivo Expanded | clamp(26px → 40px) `3.4vw` | 0.94 | -0.015em | 800 | `.display.d-m` |
| card-heading | Archivo | 18–24px | 1.12 | -0.01em | 700 | `.h-card` |
| lede | Libre Franklin | clamp(17px → 20px) `1.5vw` | 1.6 | — | 400 | `.lede` |
| body | Libre Franklin | 16px | 1.6 | — | 400 | (base) |
| eyebrow | IBM Plex Mono | 12px | 1.2 | 0.22em (uppercase) | 500 | `.eyebrow` |
| button / nav | IBM Plex Mono | 11–12.5px | 1 | 0.10em–0.14em (uppercase) | 600 | `.btn`, `.navlink` |
| meta / legal | IBM Plex Mono | 10.5–11px | 1.4 | 0.08em (uppercase) | 400 | — |

> On mobile (`≤760px`), `.d-xl` re-clamps to `clamp(38px, 12vw, 60px)` and oversized
> legacy inline headings are tamed. Hero display ceiling stays ≤116px — monumental,
> not shouting.

## Tokens — Spacing & Shapes

**Density:** generous (editorial dark — varied rhythm, not compact)

### Spacing Scale

Built from the values in use across the system. Vary spacing for rhythm; don't apply
one uniform gap everywhere.

| Name | Value | Typical use |
|------|-------|-------------|
| 2xs | 6px | status dot gaps, chip insets |
| xs | 10px | inline element gaps, button icon gap |
| sm | 14px | button-row gaps, form field gaps |
| md | 16px | paragraph spacing, kicker gaps |
| lg | 24px | card padding, stat cells |
| xl | 26px | section eyebrow → heading |
| 2xl | 40px | column gaps, footer columns |
| 3xl | 56px | two-column section gaps |
| pad | `clamp(20px, 5vw, 64px)` | page side padding (`--pad`) |
| section | `clamp(72px, 11vh, 150px)` | vertical section rhythm (`--section-y`) |

### Border Radius — **square by default**

| Element | Value |
|---------|-------|
| Buttons | 0 |
| Cards / tiles / panels | 0 |
| Inputs / form fields | 0 |
| Chips | 0 |
| Status dot / pulse | 50% (the only round element) |

> **Sharp corners are a signature**, the inverse of a pill system. Everything is
> `border-radius: 0` except circular status indicators. Never round the cards or
> buttons "to soften it" — the hard edge is the defense-grade tell.

### Layout

- **Page max-width:** 1320px (`--maxw`)
- **Side padding:** `clamp(20px, 5vw, 64px)` (`--pad`)
- **Section rhythm:** `clamp(72px, 11vh, 150px)` top & bottom (`--section-y`)
- **Hairline grid gap:** 1px (the `.hgrid` technique — see Components)

## Components

### Sticky Header + Emergency Strip
**Role:** Global site chrome (`position: sticky; z-index: 90`)

Two stacked bars. **Top — emergency strip:** `--ground-2` background, `--line-2`
bottom border; a pulsing yellow status dot (`6px`, `box-shadow: 0 0 0 3px
rgba(254,238,0,0.18)`) beside "24/7 Emergency Well Control & Relief Well Response" in
mono 11px uppercase `--text-dim`; right-aligned `CALL …` tel link in mono 11.5px.
**Bottom — main nav:** translucent `rgba(10,12,15,0.85)` with `backdrop-filter:
blur(10px)` and a `--line` bottom border; logo 42px tall left; nav links (mono 12px,
uppercase, `0.1em`, `--text-dim` → `--text` on hover) right, ending in a
`.btn-primary` "Talk to an Engineer" CTA. Collapses to a hairline-bordered burger at
≤860px.

### Primary Button (`.btn.btn-primary`)
**Role:** Lead action — emergency call, "Talk to an Engineer", form submit

Electric-yellow (`--accent`) fill, near-black (`#0A0C0F`) text, mono 12.5px uppercase
`0.14em`, weight 600, padding `15px 26px`, **radius 0**, no border. Hover: fill
flips to white (`#fff`), 180ms ease. The only filled-color action in the system.

### Ghost Button (`.btn.btn-ghost`)
**Role:** Secondary action — "Request a feasibility review", "See case studies"

Transparent fill, 1px `--line-strong` border, `--text` label, same mono type, radius
0. Hover: border and text both shift to `--accent`. Every non-primary action.

### Eyebrow + Kicker Row (`.eyebrow`, `.kicker-row`)
**Role:** Section label

Mono 12px, uppercase, `0.22em` tracking, in `--accent` (or `--text-faint` for
`.eyebrow--dim`). Often inside `.kicker-row`, which prefixes a **28px yellow tick**
(`::before`, 1px tall) before the label. This is the brand's deliberate section
marker — use it as the system's voice, not on literally every block.

### Tile / Card (`.tile`, `.tile--link`)
**Role:** Content panel, service/tech/case card

`--surface` background, 1px `--line` border, **radius 0**, no shadow. Hover: border →
`--line-strong`, background → `--surface-2`. Link tiles (`.tile--link`) shift the
border to `--accent` on hover. Cards are flat panels; never nest a card in a card.

### Hairline Grid (`.hgrid`)
**Role:** Multi-cell module (stat blocks, spec tables, service grids)

A grid with `gap: 1px` over a `--line`-colored backing, with each child painted
`--ground`. The 1px gaps *become* the rules — a seamless hairline lattice with no
double borders. The signature way Gunnar builds tables and stat clusters.

### Cinematic Image (`.cine`)
**Role:** All photography (hero, banners, case/team photos)

Image rendered `object-fit: cover` with `filter: grayscale(0.35) contrast(1.05)
brightness(0.82)`, over `--ground-2`, with a bottom-weighted gradient vignette
(`::after`, transparent → `rgba(10,12,15,0.92)`) so overlaid type stays legible.
Photography is desaturated into the dark — never full-color, never bright.

### Dot Grid Atmosphere (`.dotgrid`)
**Role:** Hero / CTA background texture

A faint engineering dot lattice: `radial-gradient(rgba(255,255,255,0.05) 1px,
transparent 1px)` at `30px` spacing. Adds instrument-panel atmosphere without weight.

### Form Field (`.gx-field`)
**Role:** Text input, textarea

`--ground` background, 1px `--line` border, **radius 0**, 14px text in `--text`,
placeholder in `--text-faint` (meets contrast — not a dim gray). Focus: border →
`--accent` (plus the global 2px yellow focus ring). Submit (`.gx-submit`) is a
full-width primary-yellow bar; selectable chips (`.gx-chip-radio`) are mono 11.5px
outlined chips that fill yellow with near-black text when checked.

### Closing CTA Band
**Role:** Pre-footer conversion (in `SiteFooter`)

`.section.dotgrid` on `--ground` with a top `--line` rule. "Let's talk" eyebrow,
then a `.d-l` display headline ("Have a well that has to be hit?") left, with a
primary (24/7 emergency tel) + ghost (feasibility review) button pair right.

### Footer
**Role:** Site footer

`--ground-2` background, `--line` top rule. A `1.5fr 1fr 1fr 1fr` grid: brand column
(logo 30px, one-line positioning, email in mono) + Services / Technology / Company
link columns under `.eyebrow--dim` headings (links `--text-dim` → `--text`). Bottom
row: mono 11px uppercase `--text-faint` copyright + service-list strip.

### Logo Marquee (`.logo-band`, `.logo-track`)
**Role:** Customer trust bar

The one **white** band in the dark system (so operator logos read in their real
colors). Logos 32px tall scroll continuously (`logo-scroll`, 48s linear), masked to
fade at both edges; pauses on hover; falls back to a static centered wrap under
reduced motion.

## Motion

Motion is intentional and quiet — one orchestrated entrance, no bounce, no parallax.

- **Reveal on scroll:** elements with `[data-reveal]` start `opacity: 0;
  translateY(14px)` and transition to rest (`0.7s ease`) when an `IntersectionObserver`
  (threshold 0.12, `-8%` bottom margin) adds `.in`. The default state is already
  visible to headless/no-JS renderers (the observer only enhances) — content never
  ships blank.
- **Hover transitions:** 150–180ms ease on border, background, color (buttons,
  tiles, nav, fields). Never animate layout properties.
- **Logo marquee:** continuous 48s linear translate, paused on hover.
- **Status pulse:** the emergency dot's soft yellow halo.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables smooth
  scroll, snaps all reveals to visible, and stops the marquee (static wrap). Required,
  not optional.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| -1 | Ground Deep | `#06080A` | Emergency strip, footer, deepest bands |
| 0 | Ground | `#0A0C0F` | Page canvas, hairline-grid cells, hero |
| 1 | Surface | `#111418` | Cards, panels, raised tiles |
| 2 | Surface Raised | `#16191F` | Hover state, insets |
| — | White band | `#ffffff` | Customer-logo marquee only — the single light surface, used so operator logos keep their real colors |

## Elevation

No drop shadows. Elevation is expressed through (1) flat surface stepping — a panel
sits one hex step lighter than its parent — and (2) 1px hairline borders (`--line`,
strengthening to `--line-strong` on hover/emphasis). Depth reads like stacked matte
panels in negative space, the way a defense-grade console would. Shadows or glows
(beyond the single status-dot halo) would break the material.

## Imagery

Cinematic, desaturated, vignetted — always treated through `.cine`
(`grayscale(0.35) contrast(1.05) brightness(0.82)` + dark bottom gradient). Subjects
are real operations and engineering, never lifestyle stock, rig-at-sunset, or
hard-hat clipart. Photography is anchored into the dark canvas so headlines stay
dominant. Customer logos are the exception: shown in full color on the one white
marquee band. **Keep the current image set in `web/public/assets/` as-is** — hero,
banners, case photos, team portraits and logos are intended, not placeholders (see
CONTEXT.md §9).

## Layout

Full-bleed dark canvas, content constrained to a **1320px** centered column
(`.wrap`) with `clamp(20px, 5vw, 64px)` side padding. Section rhythm is
`clamp(72px, 11vh, 150px)` top and bottom, varied for cadence rather than uniform.
Structure is built from **hairline grids** (`.hgrid`, 1px gaps over a line backing)
and flat `.tile` panels — rules, not boxes-with-shadows. Responsive grids collapse to
a single column at ≤900px; the header collapses to a burger at ≤860px; display type
re-clamps at ≤760px. Sticky top header (emergency strip + translucent blurred nav);
no sidebar. Closing CTA band + 4-column footer close every page.

## Do's and Don'ts

### Do
- Keep the near-black grounds and the single electric-yellow accent — restraint is the brand
- Use square corners (`border-radius: 0`) on every button, card, panel and input
- Build structure from hairline rules and 1px-gap grids, not shadows or boxes
- Reserve Archivo Expanded for display headlines; let the expanded width + negative tracking carry hierarchy
- Put near-black text (`#0A0C0F`) on yellow fills — never white on yellow
- Treat all photography through `.cine` (desaturated + vignetted into the dark)
- Use IBM Plex Mono uppercase for labels, eyebrows, nav and telemetry-style metadata
- Keep body text on `--text` / `--text-dim` for contrast; placeholders on `--text-faint`, not a dimmer gray

### Don't
- Don't introduce a second chromatic accent — yellow is the only color
- Don't round corners into pills or soft cards; the hard edge is the signature
- Don't use drop shadows or decorative glassmorphism to separate surfaces — step the surface and add a hairline
- Don't use pure white (`#ffffff`) for body text on the dark canvas — use `#EAECEF`
- Don't fill large areas with yellow; it's a signal, not a background wash
- Don't use full-color, bright, or stock "oilfield corporate" imagery (rig-at-sunset, hard-hat clipart, blue gradients)
- Don't gate content visibility on the reveal animation — the visible state is the default; motion only enhances
- Don't add a tiny tracked eyebrow to *every* section by reflex — the kicker is a deliberate accent, not scaffolding

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --ground:      #0A0C0F;   /* page canvas */
  --ground-2:    #06080A;   /* deepest bands: emergency strip, footer */
  --surface:     #111418;   /* raised panels / cards */
  --surface-2:   #16191F;   /* insets, hover */
  --text:        #EAECEF;
  --text-dim:    #9AA2AC;
  --text-faint:  #5C636D;
  --line:        rgba(255,255,255,0.12);
  --line-2:      rgba(255,255,255,0.06);
  --line-strong: rgba(255,255,255,0.24);
  --accent:      #FEEE00;   /* electric yellow — the only chromatic color */
  --navy:        #0F2240;   /* image overlays only */

  /* Type families */
  --display:   'Archivo Expanded', 'Archivo', sans-serif;  /* headlines, weight 800 */
  --display-n: 'Archivo', sans-serif;                      /* card headings, weight 700 */
  --body:      'Libre Franklin', -apple-system, system-ui, sans-serif;
  --mono:      'IBM Plex Mono', ui-monospace, monospace;

  /* Type scale (fluid) */
  --d-xl: clamp(44px, 8.5vw, 116px);  /* hero display */
  --d-l:  clamp(34px, 5.2vw, 68px);
  --d-m:  clamp(26px, 3.4vw, 40px);
  --lede: clamp(17px, 1.5vw, 20px);
  /* display: line-height .94, letter-spacing -0.015em, weight 800 */
  /* eyebrow: mono 12px, uppercase, letter-spacing 0.22em, color var(--accent) */

  /* Layout */
  --maxw:      1320px;
  --pad:       clamp(20px, 5vw, 64px);
  --section-y: clamp(72px, 11vh, 150px);

  /* Shape — square by default */
  --radius: 0;            /* buttons, cards, inputs, chips */
  /* status dot is the only 50% element */
}

/* Fonts (Google) */
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Expanded:wght@500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Libre+Franklin:wght@400;500;600&display=swap');

/* Global focus ring */
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

### Signature Recipes

```css
/* Hairline grid — 1px gaps become the rules */
.hgrid { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); }
.hgrid > * { background: var(--ground); }

/* Cinematic image treatment */
.cine > img { filter: grayscale(0.35) contrast(1.05) brightness(0.82); object-fit: cover; }
.cine::after { content:""; position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(10,12,15,0.15) 0%, rgba(10,12,15,0.55) 60%, rgba(10,12,15,0.92) 100%); }

/* Primary button — square, yellow, mono label */
.btn-primary { background: var(--accent); color: #0A0C0F; font-family: var(--mono);
  text-transform: uppercase; letter-spacing: .14em; font-weight: 600; padding: 15px 26px;
  border: 1px solid transparent; border-radius: 0; }
.btn-primary:hover { background: #fff; }
```

## Similar Brands

- **Anduril** — the direct lineage: near-black defense-grade canvas, monumental expanded display type, hairline structure, a single restrained accent, cinematic desaturated imagery
- **SpaceX** — black ground, engineered sans, photography vignetted into the dark, type-led hierarchy
- **Palantir** — austere dark operations aesthetic, mono labels as telemetry, restraint as authority
- **Rivian / Polestar (dark)** — flat matte surfaces, hairline rules over shadows, one accent doing all the signaling

---

*Documents the live Gunnar visual system in `web/src/styles/global.css` and the
shared components. Pairs with CONTEXT.md (the factual source of truth). Colors,
type and the square-cornered hairline system are intentional and identity-bearing —
preserve them.*
