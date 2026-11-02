// A callout points from a dot on the screenshot to a short note beside it.
// ax, ay: where the dot sits; cy: the height of the note (defaults to ay). All values are page pixels of the legacy inbox
// as seen in a 1512 x 771 window. g nudges the bend of the line (in % of the figure width) so lines do not cross.
export type Callout = { title: string; text: string; ax: number; ay: number; cy?: number; g?: number };

// A pre-cropped screenshot (captured at 2x) of the page region x, y, w, h, with callouts.
// img: width of the screenshot in % of the figure (default 64). side: where the notes go (default "right").
export type Figure = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  img?: number;
  side?: "left" | "right";
  callouts: Callout[];
};

export type Shot = { src: string; alt: string; caption: string };

// Before and after, side by side.
export type Compare = { title?: string; text?: string; before: Shot; after: Shot };

export type ProblemGroup = {
  title: string;
  figures: Figure[];
  // Plain notes under the group title, for ideas that have no screenshot yet.
  notes?: { title: string; text: string }[];
};

export type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  // A large pull quote shown after the paragraphs.
  quote?: string;
  // "How might we" questions.
  hmw?: string[];
  // Before and after pairs.
  compare?: Compare[];
  // Short labelled columns under a figure or compare (for example the three panes of the inbox).
  legend?: { title: string; text: string }[];
  // Shows the title as a large heading with one word in a selection frame (lead + word).
  heading?: { lead: string; word: string };
  // Annotated figures shown before the groups.
  figures?: Figure[];
  groups?: ProblemGroup[];
};

// One chapter of the story. `sections` are ids from the study's sections.
export type Part = { id: string; title: string; lead?: string; sections: string[] };

export type CaseStudy = {
  slug: string; // matches a slug in lib/projects.ts
  title: string;
  intro: string;
  // "At a glance" facts (only facts Jatin has given).
  glance: { label: string; value: string }[];
  cover: { src: string; alt: string };
  parts: Part[];
  sections: CaseSection[];
};

// Copy comes from Jatin's brief (typos fixed only). Add sections as he shares them.
export const caseStudies: CaseStudy[] = [
  {
    slug: "reviews-inbox",
    title: "Reviews Inbox Revamp",
    intro:
      "Redesigning the SocialPilot Reviews Inbox, from a passive, cluttered review feed into a high-velocity operational workspace.",
    glance: [
      { label: "Product", value: "SocialPilot Reviews" },
      { label: "My role", value: "Product Designer" },
      { label: "Scope", value: "End-to-end redesign of the Reviews Inbox" },
      { label: "Platform", value: "Web" },
      { label: "Status", value: "Designed, awaiting development" },
    ],
    cover: { src: "/case/reviews-inbox/cover.png", alt: "The redesigned Reviews Inbox" },
    parts: [
      {
        id: "before",
        title: "Before",
        lead: "Start with the owner's day: hundreds of customers, mixed reviews piling up, and an inbox that treats every one the same.",
        sections: ["product", "problem", "legacy", "hmw", "noticed"],
      },
      {
        id: "after",
        title: "After",
        lead: "Same owner, same pile of reviews. Here is what changed.",
        sections: ["after-overview", "after-status", "after-reply", "templates", "bulk"],
      },
      {
        id: "next-part",
        title: "What's next",
        sections: ["next"],
      },
    ],
    sections: [
      {
        id: "product",
        title: "About the product",
        paragraphs: [
          "SocialPilot Reviews is a comprehensive review and online reputation management platform designed to help local businesses and multi-location brands build loyalty, retain customers, and grow. The platform enables operators to collect, manage, and market reviews at scale across channels like Google Business Profile.",
        ],
      },
      {
        id: "problem",
        title: "Defining the problem",
        paragraphs: [
          "Imagine you're a business owner overseeing a bustling coffee shop at a prime location like SBR in Ahmedabad, confronted daily by an overwhelming backlog of hundreds of customers and the scattered reviews they leave on your business profile, containing mixed feedback.",
          "In this chaotic reality, the legacy reviews inbox acts as an everyday bottleneck. Instead of acting as an intelligent product that handles tedious tasks easily, it traps users in a cycle of administrative friction.",
          "This case study details the end-to-end redesign of the SocialPilot Reviews Inbox: transforming a passive, cluttered review feed into a high-velocity operational workspace that guides users seamlessly from chaos to resolution.",
        ],
      },
      {
        id: "legacy",
        title: "What the legacy inbox gets wrong",
        paragraphs: [
          "I used the legacy inbox the way an owner would, and the problems fall into three groups.",
        ],
        heading: { lead: "What the legacy inbox gets", word: "wrong" },
        figures: [
          {
            src: "/case/reviews-inbox/f0-inbox.png",
            alt: "The legacy Reviews Inbox as one screen shows it",
            x: 0, y: 0, w: 1512, h: 771,
            callouts: [
              { title: "Two reviews fill the screen", text: "The third is out of sight.", ax: 1100, ay: 690 },
            ],
          },
        ],
        groups: [
          {
            title: "Nothing built for scale",
            figures: [
              {
                src: "/case/reviews-inbox/f1-triage.png",
                alt: "The top of the legacy inbox: toolbar, stat tiles and the first review",
                x: 363, y: 100, w: 1127, h: 500,
                callouts: [
                  { title: "No bulk actions", text: "Reviews are handled one at a time.", ax: 1150, ay: 132 },
                ],
              },
            ],
          },
          {
            title: "Space and status",
            figures: [
              {
                src: "/case/reviews-inbox/f2a-open.png",
                alt: "Two legacy reviews on one screen, the first with its reply box open",
                x: 363, y: 246, w: 1109, h: 525,
                callouts: [
                  { title: "Always open", text: "Even when a reply already exists.", ax: 1000, ay: 440 },
                ],
              },
              {
                src: "/case/reviews-inbox/f2b-collapsed.png",
                alt: "A legacy review with its reply box closed",
                x: 363, y: 246, w: 1109, h: 380,
                callouts: [
                  { title: "No replied status", text: "The header never says replied or pending.", ax: 900, ay: 282 },
                ],
              },
            ],
          },
          {
            title: "Slow, hidden tools",
            figures: [
              {
                src: "/case/reviews-inbox/f3-filter.png",
                alt: "The legacy filter popup",
                x: 560, y: 100, w: 560, h: 460, img: 50,
                callouts: [
                  { title: "Too many clicks to find replied", text: "Filter, Reply Status, option, Apply.", ax: 705, ay: 356 },
                ],
              },
              {
                src: "/case/reviews-inbox/f4-ai-menu.png",
                alt: "The AI options menu in the legacy reply box",
                x: 363, y: 390, w: 560, h: 330, img: 50,
                callouts: [
                  { title: "Easy-to-miss reply tools", text: "Templates and AI are just icons.", ax: 563, ay: 468, cy: 430 },
                  { title: "One icon hides every AI tool", text: "Regenerate, shorten, expand, grammar, tone.", ax: 695, ay: 499, cy: 560 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "noticed",
        title: "What we noticed",
        heading: { lead: "What we", word: "noticed" },
        paragraphs: [
          "The problems above were enough to start the revamp. But some of the best ideas were not in the problem statement at all.",
          "Bulk reply was one of them. We got there by watching how people really used the inbox: they were dealing with a lot of reviews by hand.",
          "In our PM's conversations with customers, we learned that people kept their own sheet of review responses, or wrote their replies somewhere else, possibly in an AI that knew their business. None of that happened inside SocialPilot.",
          "The thinking was happening outside the product. The inbox was only where a finished reply landed.",
        ],
        groups: [
          {
            title: "Two ideas that came out of it",
            figures: [],
            notes: [
              {
                title: "Save a pasted reply as a template",
                text: "If people paste replies from elsewhere, we can offer to save them as templates. The reviewer's name becomes a custom field that is replaced with the real name on every review.",
              },
              {
                title: "Bulk reply with the same options as a single reply",
                text: "Use AI, use a template, or write a custom reply by hand, because why not. Bulk reply should not take any of those away.",
              },
            ],
          },
        ],
      },
      {
        id: "hmw",
        title: "How might we",
        paragraphs: ["Three questions came out of that, and they shaped everything that follows."],
        hmw: [
          "How might we let an owner get through a pile of reviews without opening each one?",
          "How might we show what has been replied to, at a glance?",
          "How might we fit more reviews on a screen without hiding the reply tools?",
        ],
      },
      {
        id: "after-overview",
        title: "The new inbox, at a glance",
        paragraphs: [
          "The owner opens the new inbox and sees three columns, each with one job. On the left, filters. In the middle, the reviews. On the right, what they can do to many reviews at once, plus the rating and an AI summary.",
        ],
        compare: [
          {
            title: "Same screen, side by side",
            text: "The old inbox fit two reviews. The new one fits four, with filters and bulk reply always in view.",
            before: { src: "/case/reviews-inbox/f0-inbox.png", alt: "The legacy inbox with two reviews on screen", caption: "Before: two reviews on a screen." },
            after: { src: "/case/reviews-inbox/cover.png", alt: "The new inbox with four reviews on screen", caption: "After: four reviews on a screen." },
          },
        ],
        legend: [
          { title: "Filters", text: "Status first, with counts. Ratings, tags and more below." },
          { title: "The work", text: "Compact cards. Hover to select, open to reply." },
          { title: "Reply and understand", text: "Generate, template or custom reply, then rating, sentiment and an AI summary." },
        ],
      },
      {
        id: "after-status",
        title: "Know what's replied, fast",
        paragraphs: [
          "The first question is always the same: what is still waiting? Status is now the first filter, with counts, and replied reviews show their reply right on the card.",
        ],
        compare: [
          {
            before: { src: "/case/reviews-inbox/f3-filter.png", alt: "The legacy filter with Reply Status in a side list", caption: "Before: four clicks to find replied." },
            after: { src: "/case/reviews-inbox/a4-status.png", alt: "The new status filter with counts", caption: "After: status first, with counts." },
          },
        ],
        groups: [
          {
            title: "",
            figures: [
              {
                src: "/case/reviews-inbox/a3-replied.png",
                alt: "The new inbox showing replied reviews with the reply on each card",
                x: 350, y: 100, w: 810, h: 300,
                callouts: [
                  { title: "The reply, on the card", text: "No more guessing what was answered.", ax: 1112, ay: 265 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "after-reply",
        title: "Reply where you read",
        paragraphs: [
          "To answer a single review, the owner just starts. A review stays one line until it is needed. Open it and it floats over the next one, so the list never jumps. Once a reply is written or generated, every option is there.",
        ],
        groups: [
          {
            title: "",
            figures: [
              {
                src: "/case/reviews-inbox/a1-hover.png",
                alt: "Hovering a review in the new inbox reveals its tools",
                x: 350, y: 150, w: 810, h: 170,
                callouts: [
                  { title: "Tools on hover", text: "Quiet until you reach for them.", ax: 1105, ay: 194 },
                  { title: "Start right there", text: "Generate Reply or Template, inline.", ax: 1105, ay: 282 },
                ],
              },
            ],
          },
        ],
        compare: [
          {
            before: { src: "/case/reviews-inbox/f4-ai-menu.png", alt: "The legacy reply box with every AI tool behind one icon", caption: "Before: every AI tool behind one icon." },
            after: { src: "/case/reviews-inbox/a2-options.png", alt: "The new reply box with all options shown", caption: "After: every option, upfront." },
          },
        ],
      },
      {
        id: "templates",
        title: "Write once, reuse",
        heading: { lead: "Write once,", word: "reuse" },
        paragraphs: [
          "The idea that grew out of those sheets: if someone pastes a reply they like, offer to keep it for next time.",
        ],
        groups: [
          {
            title: "",
            figures: [
              {
                src: "/case/reviews-inbox/n1-nudge.png",
                alt: "A pasted reply in the new inbox with a nudge to save it as a template",
                x: 350, y: 150, w: 810, h: 250,
                callouts: [
                  { title: "You paste a reply", text: "Written elsewhere, dropped into the box.", ax: 840, ay: 303, cy: 262 },
                  { title: "We nudge you", text: "\"Save it as Template?\" appears right there.", ax: 540, ay: 321, cy: 345, g: 2 },
                ],
              },
              {
                src: "/case/reviews-inbox/n2-template.png",
                alt: "The Review Reply Templates dialog with the pasted reply filled in",
                x: 695, y: 110, w: 955, h: 330,
                callouts: [
                  { title: "You save it", text: "As a template, for reuse.", ax: 1185, ay: 192 },
                  { title: "Custom fields", text: "The reviewer's name fills in on each review.", ax: 940, ay: 397 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bulk",
        title: "Reply to many at once",
        heading: { lead: "Reply to many", word: "at once" },
        paragraphs: [
          "Bulk reply works two ways, and keeps the same options as a single reply: use AI, use a template, or write a reply yourself.",
        ],
        compare: [
          {
            before: { src: "/case/reviews-inbox/f1-triage.png", alt: "The legacy inbox toolbar with no way to select reviews", caption: "Before: reviews are handled one at a time." },
            after: { src: "/case/reviews-inbox/c3-target.png", alt: "The reply panel showing it will act on 20 selected reviews", caption: "After: reply to many from the panel." },
          },
        ],
        groups: [
          {
            title: "Bulk reply, without selecting",
            figures: [
              {
                src: "/case/reviews-inbox/b1-hover.png",
                alt: "Hovering Generate Reply shows it will target 30 unreplied reviews",
                x: 760, y: 100, w: 680, h: 260,
                callouts: [
                  { title: "Hover a reply option", text: "It targets all unreplied reviews by default.", ax: 1380, ay: 138 },
                ],
              },
              {
                src: "/case/reviews-inbox/b2-working.png",
                alt: "The reply panel working on 30 unreplied reviews",
                x: 760, y: 100, w: 680, h: 260,
                callouts: [
                  { title: "It gets to work", text: "Drafts are created for every unreplied review.", ax: 1412, ay: 176 },
                ],
              },
              {
                src: "/case/reviews-inbox/b3-drafts.png",
                alt: "30 drafts created, each review now showing a draft",
                x: 350, y: 40, w: 1090, h: 340,
                callouts: [
                  { title: "30 drafts created", text: "One click, instead of 30 replies.", ax: 1400, ay: 60 },
                  { title: "Drafts, not replies", text: "Every review now has a draft.", ax: 1105, ay: 287 },
                ],
              },
            ],
          },
          {
            title: "Bulk reply, with selection",
            figures: [
              {
                src: "/case/reviews-inbox/c1-hover-checkbox.png",
                alt: "A checkbox appearing on a review when hovering",
                x: 350, y: 100, w: 810, h: 200,
                callouts: [
                  { title: "Hover to select", text: "The checkbox shows on hover.", ax: 407, ay: 208 },
                ],
              },
              {
                src: "/case/reviews-inbox/c2-selected.png",
                alt: "One review selected, with a count and a select-all link",
                x: 350, y: 100, w: 810, h: 200,
                callouts: [
                  { title: "It keeps count", text: "1 Review Selected, or all 100 in one click.", ax: 500, ay: 152 },
                ],
              },
              {
                src: "/case/reviews-inbox/c3-target.png",
                alt: "Hovering Generate Reply shows it will target 20 selected reviews",
                x: 760, y: 100, w: 680, h: 260,
                callouts: [
                  { title: "Hover shows the target", text: "20 Selected: it acts on your picks.", ax: 1378, ay: 138 },
                ],
              },
              {
                src: "/case/reviews-inbox/c4-refine.png",
                alt: "The panel offering rewrite, shorten, expand, grammar and tone for 20 selected reviews",
                x: 760, y: 100, w: 680, h: 260,
                callouts: [
                  { title: "Same tools as one reply", text: "Rewrite, shorten, expand, grammar, tone.", ax: 1415, ay: 176 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "next",
        title: "What's next",
        paragraphs: [
          "The new inbox is designed and waiting for development, so there are no results to share yet.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
