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

export type ProblemGroup = {
  title: string;
  figures: Figure[];
};

export type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  // Shows the title as a large heading with one word in a selection frame (lead + word).
  heading?: { lead: string; word: string };
  groups?: ProblemGroup[];
};

export type CaseStudy = {
  slug: string; // matches a slug in lib/projects.ts
  title: string;
  intro: string;
  sections: CaseSection[];
};

// Copy comes from Jatin's brief (typos fixed only). Add sections as he shares them.
export const caseStudies: CaseStudy[] = [
  {
    slug: "reviews-inbox",
    title: "Reviews Inbox Revamp",
    intro:
      "Redesigning the SocialPilot Reviews Inbox, from a passive, cluttered review feed into a high-velocity operational workspace.",
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
                  { title: "Stats that do nothing", text: "The tiles don't filter the list.", ax: 1300, ay: 200, cy: 250, g: 2 },
                  { title: "No priority", text: "A bad review looks like a good one.", ax: 1480, ay: 274, cy: 400 },
                ],
              },
            ],
          },
          {
            title: "Space and status",
            figures: [
              {
                src: "/case/reviews-inbox/f2-card.png",
                alt: "A legacy review card with the reply box open",
                x: 363, y: 246, w: 887, h: 434,
                callouts: [
                  { title: "Nothing says replied", text: "Close the field, and no sign remains.", ax: 1000, ay: 300 },
                  { title: "No template nudge", text: "Nothing offers to save a reply.", ax: 700, ay: 411 },
                  { title: "Always open", text: "Even when a reply already exists.", ax: 1100, ay: 440, cy: 525, g: 2 },
                  { title: "Icons, no labels", text: "AI and templates get the least weight.", ax: 563, ay: 466, cy: 650, g: 0.5 },
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
                x: 560, y: 100, w: 560, h: 460, img: 50, side: "left",
                callouts: [
                  { title: "39 tags, one tiny list", text: "The longest list gets the smallest box.", ax: 572, ay: 230 },
                  { title: "Replied is buried", text: "Reply Status is fifth in a side list.", ax: 580, ay: 356 },
                ],
              },
              {
                src: "/case/reviews-inbox/f4-ai-menu.png",
                alt: "The AI options menu in the legacy reply box",
                x: 363, y: 390, w: 560, h: 330, img: 50,
                callouts: [
                  { title: "One icon hides every AI tool", text: "Regenerate, shorten, expand, grammar, tone.", ax: 695, ay: 499 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
