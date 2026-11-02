# Decisions log

Newest at the bottom. Format: date, decision, why. Record reversals too.

- **2026-11-01 — Tech stack**: Next.js + TypeScript + plain CSS, no UI libraries. Why: Jatin gave freedom on tech; this deploys to Vercel with no setup and keeps motion lightweight.
- **2026-11-01 — Initial direction**: Apple-style portfolio (glass nav, big gradient headline, card grid). Later superseded.
- **2026-11-01 — Reference 1: gowthamoleti.com**: Jatin likes its approach but not the photography section. Took structure (pill nav, polaroid hero, project sections, quote, footer), not content. Night-to-light zoom scene explicitly rejected ("not needed").
- **2026-11-01 — Direction resolved as hybrid** (Apple polish + reference personality), after Jatin noted that following the reference means partly dropping the pure Apple language. He picked "Hybrid".
- **2026-11-01 — A "can we not replicate this" message was a typo for "now"**; Jatin wants the reference's structure replicated. Agent had briefly reverted to the Apple-only version and restored the reference-style version. Lesson: confirm intent when a one-word change flips the meaning.
- **2026-11-01 — Hero**: match the reference's desktop layout (pill nav, two columns, tilted polaroid, cursor tag, wide buttons) with original text. Weather chip and theme toggle skipped.
- **2026-11-01 — No gradients in project section**: project visuals are flat `--bg-2` panels with plain screen frames.
- **2026-11-01 — Project order**: Reviews Inbox first, then AI Lab, Competitor Reports, AI in Location Reports, AI Onboarding.
- **2026-11-01 — Work section from Yash Desale portfolio**: chip-style title ("Work that I'm extremely proud of" with purple "Main component" chip), per-project title + description + visual + "View case study" pill. Tabs ("Mobile app", "Before & after", etc.) cut; only a simple zoom on hover of the case-study card. Category labels and "Flagship" tag removed to match.
- **2026-11-01 — About copy**: researched 10 portfolios on wallofportfolios.in; adopted a stance-first, concrete-nouns version. Jatin picked a more personal alternate that still needs his origin story and hobbies.
- **2026-11-01 — Journey section added** near the end with stages from Jatin's own account; AI Lab added as the final "Now" stage.
- **2026-11-01 — Journey title**: first "Journey from intern to ownership", then "Journey that began as an intern and grew into ownership", then final: "How it all started" with a purple selection frame, pen cursor and arrow cursor (inspired by the "What made me pursue design" title on the Yash Desale about page).
- **2026-11-01 — Title size**: first 40px (too small), then 80px (too big), settled on `clamp(2rem, 4.6vw, 3.5rem)` from measuring the reference. Applies to both Work and Journey titles.
- **2026-11-01 — Single custom cursor** site-wide, including links and buttons, using an SVG data-URI. Trade-off accepted: no hand cursor on links.
- **2026-11-01 — Project moved** to `~/Downloads/Jatin/portfolio`. Other project folders in the home directory were deliberately left in place so their preview configs keep working.
- **2026-11-01 — Git identity**: the repo is on Jatin's personal GitHub (`jatinsocial`), but commits were first authored with his work email, so GitHub credited his other account (`designwithjatin`) and listed Claude as a co-author. Decision: per-repo identity = his GitHub noreply email (GitHub "Keep my email private" turned on), no co-author trailers, global git email left as group.one so work repos are unaffected. History rewritten locally; needs one force-push.
- **2026-11-01 — Docs structure**: `AGENTS.md` is the source of truth, `CLAUDE.md` redirects to it, `context/` holds living project memory and must be updated every session.

## 2026-11-01 — Case study problems: crops, not numbered pins
Chose one zoomed crop per problem with an outline over seven numbered pins on one screenshot. Pins were small, far from their text and hard to match; crops put each problem next to its evidence. Rejected: pins, and labels floating around one big screenshot.

## 2026-11-01 — Problem annotations: leader-line callouts
Jatin shared a reference where short notes sit beside the screenshot and connect to it with thin lines, so the text can stay short. Adopted that pattern (our own styling) with four figures instead of seven crops. Rejected earlier: numbered pins, and one outlined crop per problem.

## 2026-11-01 — Annotated figures: screenshot left, notes right
All figures keep the screenshot on the left and notes on the right (Jatin's call). The `side: "left"` option in `Figure` exists but should not be used.

## 2026-11-01 — Template nudge is an opportunity, not a legacy problem
Jatin removed "no nudge to save a template" from the legacy problems because it was never in the problem statement; it came from the PM's customer conversations (sheets and outside AI) plus PostHog sessions (people pasting a reply and being done). It now lives in "What we noticed" as an idea, and will return in key decisions. Same for bulk reply: not in the original problem statement, found by observing people handle many reviews by hand.

## 2026-11-01 — AI Lab moves to the end of Work
Order is now Reviews Inbox, Competitor Reports, AI in Location Reports, AI Onboarding, SocialPilot AI Lab. Jatin's reason: the AI Lab product is unfinished. The Journey still ends on AI Lab ("Now"), which is separate from the Work order.

## 2026-11-02 — Case study as a before/after story
Jatin: the case study needed storytelling and a layout like the Unacademy polls case study (two parts, Before and After). Adopted: glance row, numbered Before/After parts, How might we, before/after screenshot pairs, the café owner as the narrative thread. Ignored from that reference: iterations, memes, emoji headings.
