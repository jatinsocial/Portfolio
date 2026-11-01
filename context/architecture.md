# Architecture

Last updated: 2026-11-01

## Stack
Next.js 15 (App Router), React 19, TypeScript, plain CSS. No UI or animation libraries. Dev port 3100.

## File map

```
portfolio/
  AGENTS.md              rules and direction (source of truth)
  CLAUDE.md              redirects to AGENTS.md
  context/               living project memory (this folder)
  app/
    layout.tsx           fonts (Instrument Serif, Caveat), metadata
    page.tsx             page composition: Nav, Hero, About, Work, Quote, Journey, Contact, Footer
    globals.css          ALL styles, tokens, dark mode, responsive rules
  components/
    Nav.tsx              client: floating pill nav, IST clock, greeting toast, mobile menu
    Hero.tsx             client: two-column hero, cycling greeting, polaroid + cursor tag
    Reveal.tsx           client: scroll-in reveal wrapper
    SelHeading.tsx       selection-frame title block (Journey, case study)
  app/work/[slug]/page.tsx  case study page (static params from case-studies.ts)
  lib/
    projects.ts          the five projects (title, slug, description with **bold**)
    journey.ts           the journey stages and item cards
    case-studies.ts      case study copy per project slug (sections: paragraphs, optional heading, annotated figures, problem groups)
  public/case/<slug>/    case study screenshots (2x PNGs captured from the legacy product)
  package.json           scripts: dev (3100), build, start
```

## How the page is built

- `page.tsx` is a server component. It maps over `projects` and `journey` to render Work and Journey. A tiny `renderBold()` helper turns `**word**` in descriptions into `<strong>`.
- Interactivity is limited to three client components (Nav, Hero, Reveal).
- Section titles for Work and Journey share the `.work-heading` class; the Journey word uses the `.sel` selection-frame styles.
- Styles are one global stylesheet organized by comment headers: tokens, cursor, nav, hero, buttons, sections, work heading, projects, journey, quote/contact/footer, reveal, media queries, reduced motion.

## Data flow

`lib/*.ts` (copy) -> `app/page.tsx` (render) -> `globals.css` (look). No API calls, no database. The IST clock and greeting are computed in the browser (`Intl.DateTimeFormat`, timezone `Asia/Kolkata`).

## Breakpoints
- `max-width: 859px`: hero becomes one column, polaroid moves to top, text centers.
- `max-width: 767px`: project cards go 4:3, nav links collapse into the menu button.
- Nav links show from `min-width: 768px`.

## Known limits
- Local git repo on `main` with one commit; remote `origin` points to `https://github.com/jatinsocial/Portfolio.git` but **nothing has been pushed** (Jatin declined for now). No deployment configured (Vercel is the likely target).
- Only Reviews Inbox has a case study page (`/work/reviews-inbox`); the other projects' links are still in-page anchors until they get an entry in `lib/case-studies.ts`.
- Images and logos are placeholders (polaroid portrait, project screens).
