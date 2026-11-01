# Agent onboarding

Read this first if you are a new coding agent joining the portfolio project.

## 1. Orientation (10 minutes)

1. Read `AGENTS.md` at the repo root (rules, stack, direction).
2. Read, in order: `tasks.md` (what is live right now), `design-direction.md`, `components.md`, `content.md`, `decisions.md`.
3. Skim `architecture.md` and `references.md` as needed.
4. Run the project:
   ```bash
   cd /Users/jatinsolanki/Downloads/Jatin/portfolio
   npm install      # only if node_modules is missing
   npm run dev      # http://localhost:3100
   ```
5. Open the page in a browser pane and look at it before changing anything.

## 2. Who you are working with

Jatin Solanki is a **product designer** (not a developer) at SocialPilot. He gives direction by sharing reference sites and screenshots and reacting to results. He wants to see things working, not read code. He expects short, plain updates with what changed, what is still placeholder, and what you need from him.

His standing preferences:
- Take **structure and interaction** from references; **never copy content or assets**.
- No gradients in the Work section; no photography section; no tabs on project cards; no night-to-light scroll scene.
- One custom arrow cursor site-wide.
- Ask before pushing to any remote. Do not edit global config (`~/.claude/launch.json`).
- Never invent facts about his career. Ask, or use a marked placeholder.

## 3. How to work

- Pick up work from `tasks.md`. Move the task to "Ongoing" when you start and to "Done" when finished and verified.
- Edit copy in `lib/projects.ts` and `lib/journey.ts`; styles in `app/globals.css`; structure in `app/page.tsx` and `components/`.
- Verify visually (preview pane, narrow and wide). Screenshots do not show the cursor, so check it via computed styles. The emulated 1440px viewport can render oddly on some external sites; the preview of this project is fine.
- Keep changes small and match the surrounding code style. Prefer editing existing files to adding new ones.
- When Jatin reverses an earlier decision, record both the reversal and the reason in `decisions.md`.

## 4. Context upkeep — mandatory, every session

**You must keep `context/` current. Do this before you tell Jatin the work is done.**

Checklist at the end of every session:
- [ ] `tasks.md`: statuses are accurate; new asks added; anything dropped moved to Rejected with the reason.
- [ ] `decisions.md`: any new choice, reversal or rejection logged with date and why.
- [ ] `design-direction.md` / `components.md` / `content.md`: reflect what is now actually on the page.
- [ ] `architecture.md`: file map still true.
- [ ] `references.md`: any new reference and what to take from it.
- [ ] `changelog.md`: one dated line summarizing the session.
- [ ] `README.md` "Last reviewed" date bumped.

If you add a new context file, add it to the table in `README.md`. If the workspace-level picture changed (new project in the Jatin folder, new facts about Jatin), update `../context/` too.

Treat stale context as a bug: a future agent will trust it.

## 5. Common pitfalls

- Re-adding gradients, tabs or hover effects on project cards beyond the 1.06 zoom.
- Setting `cursor: pointer` anywhere (breaks the single-cursor rule).
- Making section titles bigger or smaller than the shared `.work-heading` size.
- Writing new copy as if it were confirmed. It is not until Jatin approves it; log it in `content.md` as placeholder.
- Leaving the dev server running from an old path after moving the folder.
