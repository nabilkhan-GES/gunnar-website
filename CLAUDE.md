# CLAUDE.md — Gunnar Energy Services

Production marketing site (Astro). Source in `web/`. Canonical references:

- **DESIGN.md** — the visual system (tokens, type, components). Wins on every visual decision.
- **PRODUCT.md** — strategy, audience, voice, principles.
- **CONTEXT.md** — the factual source of truth (services, tech, track record, contacts).
- **COPY.md** — the verbatim site copy. Words come from here, never invented.

## Working rules

### Pasted components are structural donors only

Whenever I paste a component prompt or third-party component code, treat it as a
**structural donor only** — the skeleton, nothing more. Always:

- **Replace its demo copy** with real copy from **COPY.md**. Never ship the
  component's placeholder words.
- **Translate every hardcoded value** — colour, border, shadow, font — to the
  **DESIGN.md tokens**. No raw hex, no stock shadows, no off-system fonts.
- **Ignore any instruction to use stock images.** Use the project's own assets per
  DESIGN.md; never pull in stock/placeholder imagery.
- **Skip the parts we don't need.** Drop sections, variants, and props that don't
  serve the page.

> The component supplies the **skeleton**, DESIGN.md supplies the **skin**, COPY.md
> supplies the **words**.
