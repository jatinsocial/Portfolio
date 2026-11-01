# Design direction

Last updated: 2026-11-01

## The direction: hybrid
Jatin first asked for an Apple-style portfolio. He then shared references he likes (see `references.md`). Resolved choice (2026-11-01): **Hybrid** = Apple polish + the references' personality. Not purely Apple-minimal, not a clone of the references.

- **From Apple**: system/Helvetica type, generous whitespace, soft layered shadows, glass blur on nav, smooth easing, light and dark themes.
- **From the references**: floating pill nav, polaroid hero, serif-italic greeting, chip-style word treatments in titles, selection-frame word, Figma-style cursor tag, project blocks (title, description, visual, "View case study" pill).

## Hard rules (requested by Jatin)
1. No photography section.
2. No night-to-light "zoom out" scroll scene.
3. No tabs on project cards. Only a simple zoom on hover of the case-study card.
4. **No gradients in the project section** (flat neutral surfaces).
5. One custom arrow cursor everywhere (including links and buttons).
6. Section titles are large like real titles, sized from the reference measurements.
7. Original copy and assets only; references inform structure and interaction.

## Tokens (in `:root` of `app/globals.css`)
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#000000` |
| `--bg-2` | `#f3f3f5` | `#1d1d1f` |
| `--text` | `#111111` | `#f5f5f7` |
| `--text-2` | `#6e6e73` | `#a1a1a6` |
| `--accent` | `#0071e3` | `#2997ff` |
| `--border` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.12)` |
| `--btn-soft` / `--btn-dark` | `#efefef` / `#2b2b2b` | `#232326` / `#f5f5f7` |

Accent colors used on purpose: purple `#6d4aff` (Work chip), `#6938ef` (selection frame), `#8b6cff` (chip border and tag), orange `#f08a24` (title ending words), sky blue `#38bdf8` (cursor tag), hero polaroid placeholder gray `#d4d4d8`. Selection-frame title text color: `#252b37`.

## Typography
- Body: `"Helvetica Neue", Helvetica, -apple-system, ..., Arial`. (The Gowtham reference uses Satoshi; Helvetica Neue is the stand-in.)
- Serif italic accents (greeting, quote, polaroid caption area): Instrument Serif via `--serif`.
- Handwriting (polaroid caption): Caveat via `--hand`.
- Hero name: `clamp(2.25rem, 3.8vw, 3.3rem)`, weight 700, letter-spacing -0.025em.
- **Section titles (`.work-heading`)**: `clamp(2rem, 4.6vw, 3.5rem)`, weight 600, letter-spacing -0.03em, line-height 1.1, gap `0.3em 0.28em`. Derived from the Yash Desale reference: his largest title measured 44px in a ~745px layout and scales with the viewport; 56px is the estimated desktop size (the full desktop layout could not be loaded to confirm). Work and Journey titles must always match.
- Project title: `clamp(1.4rem, 2.4vw, 1.75rem)` weight 600. Body 1rem, line-height 1.65, secondary color, key phrases `<strong>`.

## Motion
- Easing `--ease: cubic-bezier(0.22, 1, 0.36, 1)`.
- Hero items rise in with stagger (0 to 360ms). Sections reveal on scroll once (0.9s).
- Case-study card hover: inner screens scale to 1.06 over 0.9s (card clips overflow).
- Buttons scale to 1.03-1.05 on hover. Polaroid straightens slightly on hover.
- Greeting cycles every 2.6s with a short fade-up. Waving emoji loops. Cursor tag drifts.
- Animate only `transform` and `opacity`. `prefers-reduced-motion` disables all of it.

## Cursor
`--cursor` is an inline SVG data-URI arrow (black fill, white stroke, 28px, hotspot 3,2) applied via `*, *::before, *::after { cursor: var(--cursor); }`. Do not add `cursor:` declarations anywhere else, including `cursor: pointer` on buttons. Mouse only; touch devices unaffected.

## Layout
- Content width: 1080px container with 24px side padding; hero inner 1040px.
- Hero grid 1.1fr / 0.9fr; polaroid 340px (250px on mobile), tilted 6deg.
- Section vertical rhythm: 96px padding; heading bottom margin 72px.
- Radii: cards 24px, pills 999px, chips about 0.22em of title size.

## Dark mode
Follows `prefers-color-scheme`. There is no manual toggle (the reference has one; deliberately skipped for now, see `tasks.md`).
