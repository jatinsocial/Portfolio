export type Project = {
  slug: string;
  title: string;
  // Wrap words in **double asterisks** to render them bold.
  description: string;
};

// Descriptions are placeholder copy, to be replaced with Jatin's own words.
export const projects: Project[] = [
  {
    slug: "reviews-inbox",
    title: "Reviews Inbox Revamp",
    description:
      "A calmer way for teams to **read, triage and reply** to every review from every location, in one place.",
  },
  {
    slug: "competitor-reports",
    title: "Competitor Reports",
    description:
      "Benchmarking built into **SocialPilot Analytics**, so marketers can see where they lead and where to catch up without leaving the report.",
  },
  {
    slug: "ai-location-reports",
    title: "AI in Location Reports",
    description:
      "**AI-written insights** that turn per-location data into plain-language takeaways teams can act on.",
  },
  {
    slug: "ai-onboarding-reviews",
    title: "AI Onboarding for Reviews",
    description:
      "An onboarding flow where AI gets a new reviews customer from **connecting an account to their first reply** in minutes.",
  },
  {
    slug: "ai-lab",
    title: "SocialPilot AI Lab",
    description:
      "An **agentic platform layer** for SocialPilot's product suite, turning what a marketer intends into work that gets done across reports, reviews and publishing.",
  },
];
