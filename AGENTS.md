# AGENTS.md — Jatin Solanki's portfolio

Single source of truth for any coding agent (Claude Code, Codex, Cursor, etc.) working in this repo. `CLAUDE.md` just points here.

## 0. First things first

1. Read [`context/agent-onboarding.md`](context/agent-onboarding.md) before touching anything.
2. **Always keep the [`context/`](context/README.md) folder up to date.** Every change you make (design, copy, component, task status, decision) must be reflected there in the same session, before you finish. See "Context upkeep" in the onboarding file. A change without a context update is unfinished work.

## 1. What this project is

A personal portfolio website for **Jatin Solanki**, a product designer at **SocialPilot** (social media management SaaS, recently acquired; the acquirer's name and the exact wording are still undecided, so use only "SocialPilot"). It showcases five projects and a career journey. Jatin is a designer, not a developer: keep explanations plain and show results visually.

Direction in one line: **Apple-style polish with a personal, playful structure**, closely following the *layout and interactions* of reference sites but with **Jatin's own copy, photos and artwork**. Never copy another person's text, images or illustrations.

## 2. Stack and commands

- Next.js 15 (App Router) + React 19 + TypeScript, plain CSS (`app/globals.css`), no UI libraries.
- Fonts via `next/font/google`: Instrument Serif (italic accents), Caveat (handwriting). Body is the Helvetica Neue / system stack.
- Dev server runs on **port 3100**.

```bash
npm install
npm run dev     # http://localhost:3100
npm run build
```

Preview note: the Claude desktop preview tool reads the global `~/.claude/launch.json`, which has no entry for this project (do not edit that file). Start the server with Bash in the background and open `http://localhost:3100` with `preview_start` using `url`.

## 3. Page structure (top to bottom)

`Nav` (fixed) → `Hero` → About (`#about`) → Work (`#work`) → Philosophy quote → Journey (`#journey`) → Contact (`#contact`) → Footer.

Details and file map: [`context/architecture.md`](context/architecture.md).

## 4. Design direction

Full detail: [`context/design-direction.md`](context/design-direction.md). The essentials:

- **Hybrid**: Apple polish (system type, generous whitespace, soft shadows, glass blur, smooth easing) plus personality from the references (pill nav, polaroid hero, serif-italic accents, chip-style titles). Light and dark themes follow the system setting.
- **No gradients in the project section.** Project visuals are flat neutral surfaces. (Gradients were removed on request; do not reintroduce them anywhere in Work.)
- **Cut on purpose**: no photography section, no night-to-light "zoom out" scroll scene, no tabs on project cards ("Complete report", "Before/after" etc. are not wanted).
- **Section titles** share one class (`.work-heading`) and one size: `clamp(2rem, 4.6vw, 3.5rem)`, weight 600, letter-spacing -0.03em. This size comes from measuring the reference (his largest title was 44px in a ~750px layout). Do not enlarge titles independently.
- **Motion**: ease `cubic-bezier(0.22, 1, 0.36, 1)`, 0.3s for micro-interactions, 0.6-0.9s for reveals and zooms. Animate `transform` and `opacity` only. Respect `prefers-reduced-motion`.
- **Custom cursor**: one black arrow with a white outline everywhere, including over links and buttons (`--cursor` in `globals.css`, applied with `*`). Never add `cursor: pointer` or any other cursor rule.

Tokens (all in `:root` of `app/globals.css`): `--bg #fff`, `--bg-2 #f3f3f5`, `--text #111`, `--text-2 #6e6e73`, `--accent #0071e3`, plus dark equivalents. Accent colors used deliberately: purple `#6d4aff` / `#6938ef` (title chips and selection frame), orange `#f08a24` (title ending word), sky blue `#38bdf8` (cursor tag).

## 5. Component direction

Full specs: [`context/components.md`](context/components.md). Summary:

| Component | File | Behavior |
|---|---|---|
| Nav | `components/Nav.tsx` | Floating white pill (max 720px, 60px tall): "JS" monogram, live IST time chip, links About / Work / Contact, dark "Get in touch" button. Mobile: links collapse into a menu button. A small time-of-day greeting toast appears under it after 1.2s and hides after 9s. |
| Hero | `components/Hero.tsx` | Two columns. Left: cycling serif-italic greeting (Hello, Namaste, Bonjour, Hola), "I am Jatin Solanki 👋" with waving emoji, role line with SocialPilot chip, short paragraph with AI Lab chip, wide "Say hi 👋" and "Resume 📄" buttons. Right: tilted polaroid (placeholder portrait, handwritten caption) with a floating sky-blue "Jatin Solanki" cursor tag. Mobile: polaroid on top, text centered. |
| Reveal | `components/Reveal.tsx` | Fade and lift into view once, via IntersectionObserver. |
| Work heading | in `app/page.tsx` | "Work that I'm extremely proud of": "Work" in a bordered box, "extremely" in a purple chip with a "❖ Main component" tag, "proud of" in orange. |
| Project block | in `app/page.tsx` | Title, description (`**bold**` markers), flat 2:1 screens card that zooms to 1.06 on hover, centered "View case study →" pill, thin divider. |
| Journey heading | in `app/page.tsx` | "How it all **started**": "started" in purple inside a selection frame with corner crosses, and a pen-tool nib on its bottom-right corner (no decorative arrow cursor; it looked like a second cursor and was removed). |
| Journey timeline | in `app/page.tsx` | Vertical line with dots, stage label, title, text, optional item cards. Last stage has a filled purple dot. |

## 6. Content rules

Full detail and current copy: [`context/content.md`](context/content.md).

- Copy lives in `lib/projects.ts` and `lib/journey.ts`. Edit there, not inline.
- Project order is fixed: Reviews Inbox Revamp, Competitor Reports, AI in Location Reports, AI Onboarding for Reviews, SocialPilot AI Lab (last because the product is unfinished).
- Journey stages: UI/UX Intern, Associate (owned Analytics: Competitor Reports, Bulk Edit), Reviews (Inbox, AI Reports, AI Onboarding), AI Lab ("Now").
- **Never invent facts**: no metrics, awards, dates, years of experience or claims Jatin has not given. Use clearly marked placeholders and log them in `context/tasks.md`.
- Voice: first person, plain, specific, warm. Avoid clichés ("passionate", "user-centered", "high-impact", "interfaces that feel obvious").

## 7. Working agreements with Jatin

- Match the references' **structure and interactions**, not their content or assets.
- When a request is ambiguous and the answer changes the work, ask once; otherwise pick the sensible default and say so.
- Verify visual changes in the browser before saying they are done. Screenshots do not show the cursor; check it with computed styles.
- **Git**: local repo on `main`, remote `origin` = `https://github.com/jatinsocial/Portfolio.git` (public). **Nothing has been pushed and Jatin has said no for now: never push without a clear yes from him.** Jatin does not run git himself; the agent does, but always confirms before pushing. **Identity**: this repo's local git config uses Jatin's GitHub noreply email (`343830827+jatinsocial@users.noreply.github.com`), so his personal account is credited and no work email is exposed. Never change his global git email (it is the group.one address used for work repos), and do not add Claude "Co-Authored-By" trailers to commits in this repo.
- Do not edit `~/.claude/launch.json` or other global config without asking.

## 8. Context upkeep (mandatory)

After any change, update the matching file in `context/`:

| You changed... | Update |
|---|---|
| A task started, finished, paused or dropped | `context/tasks.md` |
| A design rule, token, size or motion | `context/design-direction.md` |
| A component or file | `context/components.md`, `context/architecture.md` |
| Copy, facts, placeholders | `context/content.md` |
| A choice between options, or something rejected | `context/decisions.md` |
| An inspiration source or what to take from it | `context/references.md` |

Finish every session by adding a line to `context/changelog.md`.
