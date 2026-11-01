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
                  { title: "Two reviews fill the screen", text: "The third is out of sight.", ax: 1000, ay: 740 },
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
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
