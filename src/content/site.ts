// Edit this file to personalise the portfolio — every section reads from here.
//
// ⚠ PLACEHOLDER CONTENT: the email, location, socials, about copy, approach steps,
// ventures and ALL testimonials below are stand-ins. Replace them with real details
// before publishing — never ship invented ventures, clients, quotes or results (see PRODUCT.md).

export const site = {
  name: "Md Jonayed",
  role: "Business Coach & Tech Entrepreneur",
  location: "Dhaka, Bangladesh", // placeholder
  email: "hello@mdjonayed.com", // placeholder
  year: 2026,

  /**
   * Hero photo in /public. Works best as a wide (about 16:9), dark photo with the
   * subject on the right third and empty space on the left for the headline.
   * For a sharper result on large/retina screens, replace it with a version at least 2400px wide.
   */
  portrait: "/portrait.jpg",

  lead: "I help founders and leadership teams turn ambition into a clear plan, and the plan into growth. Coaching, strategy, training and investment, from someone who builds businesses too.",
  intro:
    "Business coach, consultant and tech entrepreneur helping founders and leadership teams grow with clarity.",

  about: {
    heading: "Built businesses. Now I help others build theirs.",
    body: [
      "I've spent my career on both sides of the table: starting and running ventures, and advising the people who run them. That mix shapes how I work: practical, direct and focused on what moves the business.",
      "Today I coach founders one to one, train teams, plan growth strategy, speak at events and invest in early-stage technology companies.",
    ],
    facts: [
      { label: "Works with", value: "Founders, leadership teams, event organisers" },
      { label: "Formats", value: "1:1 coaching, workshops, advisory, keynotes" },
      { label: "Based in", value: "Dhaka, Bangladesh · works worldwide" }, // placeholder
    ],
  },

  /** Hero copy (reference layout: label, name, one line, one action). */
  hero: {
    label: "Business coach · Tech entrepreneur",
    line: "I help founders and leadership teams turn ambition into a clear plan, and the plan into growth.",
    cta: "Let's work together",
  },

  /** Four columns along the bottom of the hero: his seven roles, grouped. */
  pillars: [
    { title: "Coach & trainer", body: "1:1 coaching and team workshops that turn plans into habits." },
    { title: "Consultant & strategist", body: "Growth strategy, priorities and roadmaps for founders." },
    { title: "Speaker", body: "Keynotes on entrepreneurship, growth and technology." },
    { title: "Investor & founder", body: "Backing and building early-stage tech ventures." },
  ],

  /** Placeholder approach — rewrite in your own words. */
  approach: [
    {
      title: "Diagnose",
      body: "An honest look at where the business is: numbers, team, market, and the founder's own bottlenecks.",
    },
    {
      title: "Plan",
      body: "Priorities, budgets and milestones on one page, so everyone knows what matters this quarter.",
    },
    {
      title: "Execute",
      body: "Regular sessions keep momentum: decisions get made, blockers get cleared, progress gets measured.",
    },
    {
      title: "Scale",
      body: "Systems and people that let the business grow without everything running through you.",
    },
  ],

  /** Placeholder track record — replace with real ventures, programmes and talks. */
  ventures: [
    { kind: "Founded", name: "Your technology venture", summary: "One line on what it does and who it serves.", year: "2024" },
    { kind: "Programme", name: "Founder growth programme", summary: "A coaching cohort for early-stage founders.", year: "2025" },
    { kind: "Investment", name: "Early-stage startup", summary: "Seed investment and ongoing advisory support.", year: "2025" },
    { kind: "Keynote", name: "Entrepreneurship summit", summary: "Talk on building a business that lasts.", year: "2026" },
  ],

  /**
   * PLACEHOLDERS — replace each with a real client's words, name and role (with their permission).
   * Delete any you can't replace; the section hides itself when this list is empty.
   */
  testimonials: [
    {
      quote:
        "Replace this with a real client quote: what changed in their business after working with you, in their own words.",
      name: "Client name",
      role: "Founder, Company",
    },
    {
      quote:
        "Second testimonial goes here. Specific outcomes read best: a decision made, a team aligned, a plan that finally stuck.",
      name: "Client name",
      role: "CEO, Company",
    },
    {
      quote:
        "Third testimonial goes here. A quote from a training or keynote client shows the range of your work.",
      name: "Client name",
      role: "Event organiser, Organisation",
    },
  ],

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
};

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
