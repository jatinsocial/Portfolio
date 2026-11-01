export type Stage = {
  label?: string;
  title: string;
  text: string;
  items?: { name: string; note: string }[];
};

// Stages as told by Jatin. No dates yet; add a `period` field when they're confirmed.
export const journey: Stage[] = [
  {
    title: "UI/UX Intern",
    text: "I joined SocialPilot as a UI/UX Intern, and this is where it all began.",
  },
  {
    title: "Associate",
    text: "Analytics became mine, and Competitor Reports was where it started.",
    items: [
      {
        name: "Competitor Reports",
        note: "Where my ownership of Analytics began.",
      },
      {
        name: "Bulk Edit",
        note: "A first of its kind in social media management, letting teams manage content at scale.",
      },
    ],
  },
  {
    title: "SocialPilot's second product",
    text: "I moved to Reviews, the second product in the SocialPilot suite, and started with the Inbox.",
    items: [
      { name: "Reviews Inbox", note: "Where I started in Reviews." },
      { name: "AI Reports", note: "AI-written insights for every location." },
      { name: "AI Onboarding", note: "Getting new customers to their first reply, faster." },
    ],
  },
  {
    label: "Now",
    title: "SocialPilot AI Lab",
    text: "Now I'm shaping AI Lab, an agentic platform layer for the SocialPilot product suite.",
    items: [
      {
        name: "AI Lab",
        note: "An agentic layer that sits across the suite, turning intent into action.",
      },
    ],
  },
];
