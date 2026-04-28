export type Intervention = {
  name: string;
  kicker: string;
  what: string;
  who: string;
  example: string;
  href?: string;
  external?: boolean;
  accent?: "sky" | "sun" | "meadow" | "ink";
};

export const interventions: Intervention[] = [
  {
    name: "AI Night School",
    kicker: "Flagship - adults",
    what: "Six-week cohort programme that turns ordinary working adults into confident, everyday AI users. Runs locally in Harpenden with a physical opening and closing night.",
    who: "Working-age residents and parents, especially London-commuting knowledge workers.",
    example: "Harpenden cohorts start with a kick-off evening at a local venue and end with a graduation showcase where residents demo what they built.",
    href: "https://www.ainightschool.org",
    external: true,
    accent: "sun",
  },
  {
    name: "Sherpas AI",
    kicker: "Teens & young people",
    what: "Sherpas AI is a hands-on programme where teenagers build real AI tools for real organisations. Summer work-experience cohorts and year-round community groups.",
    who: "Secondary-school and 6th-form teenagers in Harpenden.",
    example: "A summer cohort of Harpenden 15–18-year-olds ships three AI projects for Harpenden businesses, coached by local alumni.",
    href: "https://www.startupsherpas.co.uk",
    external: true,
    accent: "meadow",
  },
  {
    name: "AI Optimist Strategy",
    kicker: "Leaders",
    what: "One-to-one strategy work for senior leaders who want to redesign their organisation around AI rather than graft it on.",
    who: "Executives, founders, and senior council officers.",
    example: "A three-session council retainer that produces a written AI operating model for the town council.",
    accent: "sky",
  },
  {
    name: "AI Transformation Accelerator",
    kicker: "Organisations",
    what: "A structured 90-day programme that moves an organisation from curious to productive with AI.",
    who: "Local employers, schools, practices, and charities.",
    example: "Three Harpenden independents run the Accelerator together - shared cost, shared learning.",
    accent: "sky",
  },
  {
    name: "AI Transformation Accelerator - Town Council edition",
    kicker: "For Harpenden Town Council",
    what: "A council-shaped version of the Accelerator. Reduces overhead. Increases engagement. Equips every officer with AI fluency and a personal AI workflow.",
    who: "Harpenden Town Council officers, clerks, and elected members.",
    example: "See the /council page for a worked programme outline.",
    href: "/council",
    accent: "ink",
  },
  {
    name: "Imaginarium",
    kicker: "Idea workshop",
    what: "A facilitated session that surfaces the AI ideas inside a team or community group and turns them into testable concepts.",
    who: "Any group - residents, clubs, businesses, council committees.",
    example: "A Harpenden High Street Imaginarium run with traders and the BID - 25 ideas in, 3 prototypes out.",
    accent: "sun",
  },
  {
    name: "Problemarium",
    kicker: "Problem breakdown",
    what: "A structured tool for decomposing a messy real-world problem into AI-shaped projects with clear owners and definitions of done.",
    who: "Working groups inside the council, schools, or community projects.",
    example: "Breaks \"Harpenden traffic\" into ten workable projects, each with an owner and a first iteration.",
    accent: "meadow",
  },
  {
    name: "Chooser",
    kicker: "Decide which AI",
    what: "An independent decision tool that matches a task to the best AI for that task - updated as the models change.",
    who: "Everyone from residents to the council.",
    example: "A Harpenden small business uses Chooser to work out that Claude + a Google Sheet is cheaper than the SaaS they were about to buy.",
    accent: "sky",
  },
  {
    name: "Job Displacement Risk Diagnostic",
    kicker: "Diagnostic",
    what: "A private, 10-minute self-assessment for working-age residents to understand how exposed their role is to AI-driven change - and what to do about it.",
    who: "Individual residents.",
    example: "Offered free to every Harpenden resident in year one, funded by the resident-offer revenue.",
    accent: "sun",
  },
  {
    name: "Community Pulse Diagnostic",
    kicker: "Diagnostic",
    what: "A lightweight instrument to measure how a community is actually feeling about AI - confidence, fear, appetite, capability.",
    who: "Town councils, community groups, schools.",
    example: "Run annually in Harpenden to track whether we’re pulling everyone along or leaving groups behind.",
    accent: "meadow",
  },
  {
    name: "Council Engagement Diagnostic",
    kicker: "Diagnostic",
    what: "Assesses how well a council’s decisions and communications are landing with residents, and where AI can close the gap.",
    who: "Town and district councils.",
    example: "Identifies the four parts of the town that never engage - and why.",
    accent: "ink",
  },
  {
    name: "Family AI-Readiness Diagnostic",
    kicker: "Diagnostic",
    what: "A family-level readiness check across parents and children - the tools, habits, and conversations that prepare a household for an AI-native decade.",
    who: "Families.",
    example: "Offered to every Harpenden family with a secondary-school child.",
    accent: "sun",
  },
  {
    name: "Small-Business AI Opportunity Diagnostic",
    kicker: "Diagnostic",
    what: "A 45-minute session and report that identifies the 3 highest-leverage AI moves for a small business, independent of vendor.",
    who: "Harpenden high-street businesses, services, and sole traders.",
    example: "Run in partnership with the Harpenden BID for 20 independents in the first year.",
    accent: "meadow",
  },
];
