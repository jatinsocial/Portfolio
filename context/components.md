# Components and sections

Last updated: 2026-11-01. Each entry: what it is, behavior, where the code is, status.

## Nav — `components/Nav.tsx`
- Floating white pill, fixed at 20px from top, `width: min(720px, 100%)`, 60px tall, frosted glass.
- Left: "JS" monogram + time chip showing live IST (`Asia/Kolkata`, 24h, updates every 15s).
- Center (>=768px): About, Work, Contact. Below 768px these move into a menu button that opens a small sheet.
- Right: dark "Get in touch" pill linking to `#contact`.
- Greeting toast below the pill: "Good morning/afternoon/evening! Thanks for stopping by." Shows after 1.2s, hides after 9s.
- Not built: weather chip, light/dark toggle (both exist on the reference).

## Hero — `components/Hero.tsx`
- Two-column grid (stacks below 860px, polaroid first, text centered).
- Left: serif-italic greeting cycling Hello, Namaste, Bonjour, Hola (2.6s); "I am Jatin Solanki" + waving 👋; "Product Designer at **SocialPilot**" and a paragraph with **AI Lab**, both as bold text with no logo icons (the "S" and "AI" icon squares were removed on request); buttons "Say hi 👋" (soft gray, links `#contact`) and "Resume 📄" (dark, link is `#` placeholder). Buttons 228x56px.
- Right: white polaroid (340px, rotate 6deg) with a gray placeholder "JS" photo and handwritten caption `me_01.jpeg`; floating sky-blue arrow cursor with a "Jatin Solanki" tag overlapping the photo's left edge.
- Placeholders: portrait (swap `.polaroid-photo` for an `<img>`, black and white suits it), Resume link. No company logo icons: do not add them back unless Jatin asks.

## Reveal — `components/Reveal.tsx`
Wraps content; adds `.in` once when 15% visible. Optional `delay` (ms).

## About — `#about` in `app/page.tsx`
Centered paragraph, large secondary-color text (1.25-1.75rem). Current copy came from research of designer portfolios (see `content.md`). A more personal alternate is waiting on Jatin's origin story and hobbies.

## Work — `#work`
- **Heading**: "Work" (bordered box) "that I'm" "extremely" (purple chip, `❖ Main component` tag above) "proud of" (orange). Same size as the Journey title.
- **Project block** (one per entry in `lib/projects.ts`): title, description (`**bold**` markers become `<strong>`), a `.case-card` link (2:1, flat `--bg-2` surface, two empty screen frames, "Screens coming soon" label) whose `.zoom` layer scales to 1.06 on hover, then a centered "View case study →" pill. 1px divider between blocks.
- No category labels, badges, tabs or gradients.

## Philosophy quote — `.quote`
Label "Philosophy" and a serif-italic placeholder line: "Make it obvious first. Then make it delightful." Placeholder written by the agent; awaiting Jatin's own line.

## Journey — `#journey`
- **Heading**: "How it all" + "started" inside a purple selection frame (2px border, four `+` corner marks), a pen-tool nib on the frame's bottom-right corner, offset outside the word so the text stays readable (orange nib pointing up-left with hole and slit, plus a separate small oval, dark outline, as in the reference). Hand-drawn SVG, `0.8em` so it scales with the title. There is deliberately no decorative arrow cursor: the only arrow on the site is the real mouse pointer (see Cursor in `design-direction.md`).
- **Timeline** (`lib/journey.ts`): vertical 1px line, dot per stage, label, title, text, optional item cards (`--bg-2`, 16px radius). The last stage has a filled purple dot with a soft ring.
- Stages: UI/UX Intern; Associate (Competitor Reports, Bulk Edit); SocialPilot's second product (Reviews Inbox, AI Reports, AI Onboarding); SocialPilot AI Lab. Labels are optional (`label?` in `lib/journey.ts`): only the last stage has one ("Now"); the others were removed on request and use the `.plain` class so the dot aligns with the title.

## Contact — `#contact`
Centered "Let's talk." title and a dark "Say hello" button (`mailto:jatin.solanki@group.one`).

## Footer
Email and LinkedIn links (LinkedIn is a `#` placeholder), "India · © 2026 Jatin Solanki".

## Case study page — `app/work/[slug]/page.tsx`
1080px container with 24px side padding (same as home page sections, so left and right edges line up); body text capped at 760px for readability. Back link, title (same size as section titles), intro, flat 2:1 cover placeholder, then sections (h2 + paragraphs, revealed on scroll) from `lib/case-studies.ts`. Unknown slugs 404. Work cards link here only when a case study exists. Nav anchors are `/#…` so they work on sub-pages. Layout is a first pass; screens and richer blocks come with Jatin's material.

Case study sections may include `figure` (plain screenshot) and `groups` of problems. Each problem is a row: text left, `CropView` right (a pre-cropped 2x PNG with `.mark` outlines, dashed + label for missing things). `crop.x/y/w/h` is the page region the PNG covers and marks use page pixels (1512x771 window), both in `lib/case-studies.ts`. To re-capture, use the Chrome `zoom` action on that region and hide the Grammarly widget first. Numbered pins were rejected. Styles: `.case-figure`, `.problem-group`, `.crop`, `.mark`.
