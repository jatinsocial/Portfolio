export type Pin = { n: number; x: number; y: number }; // x, y in % of the image

export type ProblemGroup = {
  title: string;
  items: { n: number; title: string; text: string }[];
};

export type CaseSection = {
  id: string;
  title: string;
  paragraphs: string[];
  // Annotated screenshot with numbered pins, shown above the groups.
  figure?: { src: string; alt: string; caption: string; width: number; height: number; pins: Pin[] };
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
          alt: "The legacy Reviews Inbox with seven numbered problem markers",
          caption: "The legacy Reviews Inbox, shown with a demo account.",
          width: 1512,
          height: 771,
          pins: [
            { n: 1, x: 76.1, y: 17.1 },
            { n: 2, x: 88.3, y: 35.5 },
            { n: 3, x: 66.1, y: 55.8 },
            { n: 4, x: 89.3, y: 47.1 },
            { n: 5, x: 65.5, y: 17.1 },
            { n: 6, x: 40.3, y: 60.4 },
            { n: 7, x: 45, y: 53.3 },
          ],
        },
        groups: [
          {
            title: "Nothing built for scale",
            items: [
              {
                n: 1,
                title: "No way to handle reviews in bulk",
                text: "There is no way to select several reviews and act on them together. For the cafe owner, a day of mixed reviews means opening every card and replying one by one.",
              },
              {
                n: 2,
                title: "Nothing is prioritised",
                text: "A review that does not recommend looks just like one that does. Nothing tells the owner which review needs attention first.",
              },
            ],
          },
          {
            title: "Space and status",
            items: [
              {
                n: 3,
                title: "The reply field is always open",
                text: "Every card carries an open reply box, even when the review already has a reply. It adds height to every review and pushes the next one off the screen.",
              },
              {
                n: 4,
                title: "No way to see if a review was replied to",
                text: "Once the field is closed, nothing on the card says whether the review has been replied to.",
              },
            ],
          },
          {
            title: "Slow, hidden tools",
            items: [
              {
                n: 5,
                title: "Filtering is hard",
                text: "Users have struggled to filter out replied reviews. The filter is a small two-pane popup with 39 tags in a short scroll box, and the numbers at the top do not filter anything.",
              },
              {
                n: 6,
                title: "Reply options are buried",
                text: "Templates and AI are bare icons with the lowest weight in the composer. After generating a reply, the options sit behind a dropdown.",
              },
              {
                n: 7,
                title: "No nudge to save a template",
                text: "Paste a reply written elsewhere and nothing suggests saving it as a template, so good replies get written once and lost.",
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
