# Content

Last updated: 2026-11-01

Rule: only facts Jatin has stated go on the page. Everything else is a placeholder and must be flagged here and in `tasks.md`.

## Facts Jatin has given
- Name: Jatin Solanki. Product designer at SocialPilot. Based in India (IST used for the clock).
- Email shown: jatin.solanki@group.one (from his account email; confirm he wants it public).
- SocialPilot was recently acquired. His message said "acquired by SocialPilot" (likely a typo); the acquirer is unconfirmed. Page says only "SocialPilot".
- Career: joined SocialPilot as a **UI/UX Intern**, then **Associate**, taking full ownership of **Analytics** starting with **Competitor Reports**; also designed **Bulk Edit**, described as a first of its kind in the social media management domain, letting teams manage content at scale. Then moved to SocialPilot's second product, **Reviews**: started with the **Inbox**, then **AI reports**, then **AI onboarding**. Now working on **SocialPilot AI Lab**, an agentic platform layer for the SocialPilot product suite.
- **Analytics and Bulk Edit are two different things.** Bulk Edit is not part of Analytics; do not write copy that implies it is (e.g. "from Competitor Reports to Bulk Edit"). Competitor Reports belongs to Analytics; Bulk Edit is a separate feature he designed in the same period.
- No dates, metrics, awards or years of experience provided.

## Projects (in page order) — `lib/projects.ts`
1. Reviews Inbox Revamp
2. Competitor Reports
3. AI in Location Reports
4. AI Onboarding for Reviews
5. SocialPilot AI Lab (last: the product is unfinished)

Descriptions are agent-written placeholders based only on the facts above. Jatin should rewrite them in his voice.

## Current page copy
- **Hero**: "Hello, / I am Jatin Solanki 👋"; "Product Designer at SocialPilot"; "Based in India, designing thoughtful analytics and AI experiences. Right now I'm shaping AI Lab, an agentic layer for the SocialPilot product suite." (placeholder wording)
- **About** (from research, applied 2026-11-01): "I'm drawn to the parts of a product people rarely praise but always feel: a reviews inbox that never makes you hunt, a report that answers the question before you ask it, an AI feature that earns trust in its first minute. My work is making those moments quietly clear for the people who rely on them every day."
- **Quote** (placeholder): "Make it obvious first. Then make it delightful."
- **Journey**: see `lib/journey.ts`. Notes under item cards are agent-written one-liners to be checked by Jatin.

## About-copy research summary
Patterns across 10 usable portfolios on wallofportfolios.in: lead with a stance not a job title; concrete nouns over adjectives; metrics belong in case studies; one human detail makes it feel real; short and warm beats long and formal. Clichés to avoid: "passionate", "user-centered", "high-impact", "interfaces that feel obvious".

Pending alternate (Jatin chose this direction but has not supplied the details): "Design, for me, started with [origin story]. These days that curiosity goes into untangling inboxes, reports and AI features that teams use every single day, and I'm happiest when a messy workflow turns into something people stop noticing. Outside work, [a hobby or two]." Needs his origin story and hobbies. A crisp alternate also exists: "I design the screens teams open when something needs an answer: a review to reply to, a competitor to understand, a number that doesn't look right. My job is to make the answer arrive before the question has finished forming."

## Placeholders currently on the page
Polaroid portrait, Resume link, LinkedIn link, project screens, project descriptions, hero paragraph, philosophy quote, journey item notes, journey stage 3 title ("SocialPilot's second product").

## Reviews Inbox case study (`lib/case-studies.ts`, route `/work/reviews-inbox`)
Copy for "About the product" and "Defining the problem" is Jatin's brief (typos fixed only). Product: SocialPilot Reviews, a review and online reputation management platform for local businesses and multi-location brands. Framing: a coffee-shop owner at SBR, Ahmedabad, drowning in scattered reviews; the redesign turns a passive, cluttered feed into a high-velocity workspace ("chaos to resolution"). No metrics given. The new inbox is not in development yet, so there are no outcomes: the closing section must state goals, not results.

### Legacy problems currently on the page (validated with Jatin, 2026-11-01)
Title block: "What the legacy inbox gets [wrong]". Notes are a bold 2-4 word title plus one short line, shown on annotated screenshots (screenshot left, notes right):
- Top: **Two reviews fill the screen** ("The third is out of sight.")
- Nothing built for scale: **No bulk actions** ("Reviews are handled one at a time."). Bulk handling is the headline problem (a missing capability).
- Space and status: **Always open** ("Even when a reply already exists."); **No replied status** ("The header never says replied or pending."). In the demo account every review already has a reply, so a collapsed card still shows the reply block; only the header lacks a status.
- Slow, hidden tools: **Too many clicks to find replied** ("Filter, Reply Status, option, Apply."; the path is verified, 4 clicks minimum, but no number is stated on the page); **Easy-to-miss reply tools** ("Templates and AI are just icons."); **One icon hides every AI tool** (Regenerate, Shorten, Expand, Fix Grammar, Change Tone behind one sparkle icon).
- The claim that users struggle to filter replied reviews is Jatin's; its source (tickets, calls) is not recorded.

### Removed on Jatin's request (do not bring back unless he asks)
Breadcrumb/location switcher, tagging modal, thin source/customer detail, reply `...` menu, "Stats that do nothing", "No priority" (nothing prioritised), "39 tags, one tiny list".

### What we noticed (section 4, drafted 2026-11-01 from Jatin's account)
The seven problems above were enough to start the revamp; the best ideas were not in the original problem statement. Facts Jatin gave:
- Bulk reply was NOT in the problem statement. It came from observing that people dealt with a lot of reviews by hand. It was one of the hardest things to pull off, and Jatin has not seen competitors do it yet (say it as his observation, never as a claim about the market).
- The template idea (previously on the legacy list as "no nudge to save a pasted reply as a template", removed because it was never a problem statement) came from two sources. (1) The PM's conversations with customers: people kept their own sheet of review responses or wrote replies elsewhere (possibly an AI that knows their business), all outside SocialPilot. (2) PostHog sessions, which only record the product (never anything outside it): people coming into the inbox, pasting a reply and being done. Keep these two sources separate in any copy.
- Idea 1: offer to save a pasted reply as a template; the reviewer name is a custom field replaced with the actual name for each review.
- Idea 2: bulk reply offers the same options as a single reply: AI, templates, or a custom reply written by hand.
On the page this is the "What we noticed" section (two idea notes, no screenshots yet). Not yet on the page: the hardest-to-pull-off and competitor remarks (keep for key decisions).

### Still to write
Design principles, key decisions (needs the new design), What's next (goals only).

## About-paragraph ending
"...quietly clear for the people who rely on them every day." (changed from "the teams who run social every day").

Update (2026-11-01): Jatin removed the PostHog sentence from the "What we noticed" copy on the page. The PostHog finding (people pasting a reply and being done) is still true and recorded above, but is not on the page; do not re-add unless he asks. The closing line there now reads "The thinking was happening outside the product. The inbox was only where a finished reply landed."

## New Reviews Inbox design, as explained by Jatin (2026-11-02; he is still explaining, details may change)
Screens shared: five (Third Wave Coffee / TWC Jaipur demo data). Layout: left filters, middle working area, right panel with bulk reply options plus rating and AI summary.
- Left: Status first with counts (All, Replied, Drafts, No Reply Drafted; a checkbox and an "Only" shortcut), then Ratings (5 to 1 stars, Recommends, Does not recommend), Tags, Platforms, Review Content, Sentiments as collapsible sections.
- Middle: select-all checkbox, date range, search, sort, export. Compact cards: platform, name, age, stars, sentiment face, text; a one-line collapsed "Write a reply" row.
- Right (when reviews without replies are shown): bulk reply options **Generate Reply, Use Templates, Custom Reply**, then average rating with trend and a goal ("Get 10 more 5 star reviews, reach 4.0 stars"), sentiment bar, themes, AI summary.
- Top right **Send Drafts**. The AI Reply rows shown in cards (yellow bar, "AI Reply") are drafts created for **automated replies, after a confirmation rule**; Send Drafts sends them.
- **Replied reviews** view: cards show the review (truncated, Read more) with the reply inline under a reply arrow; the right panel shows only rating and summary.
- Hover on a card: the card icons (tag, open, copy, share, reply) and inline **Generate Reply** and **Template** actions appear. Icons are visible only on hover.
- Clicking reply **expands the card as an overlay on top of the next review** (the list does not move). Once you type or generate a reply, **all reply options appear upfront**: Templates, Rewrite, Shorten, Expand, Grammar, Tone, plus send.
Not yet explained: bulk selection per card, the save-as-template flow and reviewer-name custom field. How the confirmation rule is set up is out of scope for the case study (Jatin, 2026-11-02): do not ask about it or write it up.

### Key decisions (section 6, started 2026-11-02)
- **Save a pasted reply as a template** (done, drafted from Jatin's two flow screens): you paste a reply, a nudge appears ("You pasted a reply, Save it as Template?"), it opens the Review Reply Templates dialog (name, message, Custom Fields dropdown, Save) and the reply is saved for reuse. The reviewer's name can be a custom field replaced with the real name on each review (Jatin's idea; the dropdown contents are not shown in the screen).
- **Bulk reply happens in two ways (Jatin, 2026-11-02): without selection, and with selection.** Details not yet given; do not guess what each means. Bulk reply offers the same options as a single reply: AI, templates, or a custom reply written by hand.
- Bulk reply, **without selection** (Jatin, 2026-11-02, from a hover screen): hovering a reply option in the right panel (Generate Reply, Use Templates, Custom Reply) shows a chip such as "30 Unreplied" and by default targets the unreplied reviews. The 30 matches the "No Reply Drafted" count in the Status filter. What happens after the click (drafts created, then Send Drafts?) is not yet confirmed.
- Bulk reply, **with selection**: not yet explained.
- **Bulk reply, now on the page** (2026-11-02, from six screens): *Without selection*: hover a reply option, it shows "30 Unreplied" and targets all unreplied reviews by default; click and the panel shows "Working on it"; then a "30 Drafts created" toast, each review shows a Draft row, counts update (Drafts 50, No Reply Drafted 0), and the panel offers Rewrite / Write New, Shorten, Expand, Grammar, Tone. *With selection*: hover a review to reveal its checkbox; the header shows "1 Review Selected" with "Select All 100 Reviews" and tag, share, export icons; hovering Generate Reply shows "20 Selected" and it targets the selection; the panel then shows the same refine tools for the selection. Selection checkboxes are hover-only.
