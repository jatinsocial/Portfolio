// A mark is drawn over a crop; all values are pixels of the source screenshot (1512 x 771).
export type Mark = { x: number; y: number; w: number; h: number; label?: string; dashed?: boolean };

// A crop of a screenshot: the region to show, plus outlines drawn on it.
export type Crop = { src: string; alt: string; x: number; y: number; w: number; h: number; marks: Mark[] };

export const SHOT_W = 1512;
export const SHOT_H = 771;

export type ProblemGroup = {
  title: string;
  items: { title: string; text: string; crop: Crop }[];
};

export type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  // Plain screenshot shown above the groups.
  figure?: { src: string; alt: string; caption: string; width: number; height: number };
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
        figure: {
          src: "/case/reviews-inbox/legacy-inbox.jpg",
          alt: "The legacy Reviews Inbox",
          caption: "The legacy Reviews Inbox, shown with a demo account.",
          width: 1512,
          height: 771,
        },
        groups: [
          {
            title: "Nothing built for scale",
            items: [
              {
                title: "No way to handle reviews in bulk",
                text: "There is no way to select several reviews and act on them together. For the cafe owner, a day of mixed reviews means opening every card and replying one by one.",
                crop: { src: "/case/reviews-inbox/legacy-inbox.jpg", alt: "The toolbar above the review list, with no way to select reviews", x: 600, y: 100, w: 890, h: 260, marks: [{ x: 975, y: 112, w: 512, h: 40, dashed: true, label: "No way to select reviews" }] },
              },
              {
                title: "Nothing is prioritised",
                text: "A review that does not recommend looks just like one that does. Nothing tells the owner which review needs attention first.",
                crop: { src: "/case/reviews-inbox/legacy-inbox.jpg", alt: "Two review cards with the same weight whether they recommend or not", x: 800, y: 246, w: 690, h: 430, marks: [{ x: 1345, y: 258, w: 132, h: 32 }, { x: 1382, y: 621, w: 95, h: 32 }] },
              },
            ],
          },
          {
            title: "Space and status",
            items: [
              {
                title: "The reply field is always open",
                text: "Every card carries an open reply box, even when the review already has a reply. It adds height to every review and pushes the next one off the screen.",
                crop: { src: "/case/reviews-inbox/legacy-inbox.jpg", alt: "A review card with an empty reply box open under the review", x: 363, y: 300, w: 1127, h: 290, marks: [{ x: 379, y: 391, w: 1093, h: 102 }] },
              },
              {
                title: "No way to see if a review was replied to",
                text: "Once the field is closed, nothing on the card says whether the review has been replied to.",
                crop: { src: "/case/reviews-inbox/legacy-inbox.jpg", alt: "The top of a review card with no replied status", x: 363, y: 246, w: 1127, h: 140, marks: [{ x: 640, y: 256, w: 660, h: 40, dashed: true, label: "No replied status" }] },
              },
            ],
          },
          {
            title: "Slow, hidden tools",
            items: [
              {
                title: "Filtering is hard",
                text: "Users have struggled to filter out replied reviews. The filter is a small two-pane popup with 39 tags in a short scroll box, and the numbers at the top do not filter anything.",
                crop: { src: "/case/reviews-inbox/legacy-filter.jpg", alt: "The filter popup, with Reply Status as the fifth item in a side list", x: 560, y: 100, w: 560, h: 460, marks: [{ x: 570, y: 344, w: 140, h: 24 }] },
              },
              {
                title: "Reply options are buried",
                text: "Templates and AI are bare icons with the lowest weight in the composer. After generating a reply, Regenerate, Shorten, Expand, Fix Grammar and Change Tone all sit behind a single icon.",
                crop: { src: "/case/reviews-inbox/legacy-ai-menu.jpg", alt: "The AI options menu that opens from a single icon in the reply box", x: 363, y: 390, w: 560, h: 330, marks: [{ x: 545, y: 450, w: 36, h: 36 }, { x: 543, y: 487, w: 158, h: 220 }] },
              },
              {
                title: "No nudge to save a template",
                text: "Paste a reply written elsewhere and nothing suggests saving it as a template, so good replies get written once and lost.",
                crop: { src: "/case/reviews-inbox/legacy-inbox.jpg", alt: "The reply box, with nothing offering to save a reply as a template", x: 363, y: 380, w: 1127, h: 130, marks: [{ x: 379, y: 391, w: 1093, h: 102, dashed: true, label: "Nothing offers to save a template" }] },
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
