// Submission types - shared between client (form) and store. The
// shape is designed so downstream automations can route on `persona`
// + `tags` into AI Night School / Sherpas AI / volunteer flows.

export type Persona = "leader" | "teen" | "volunteer" | "organisation";

export type Consent = {
  marketing: boolean; // OK to be added to the Harpenden.AI list
  partnerSharing: boolean; // OK to share with AINS / Sherpas to route into the right cohort
};

export type SignupBase = {
  id: string;
  createdAt: string; // ISO
  persona: Persona;
  name: string;
  email: string;
  postcode?: string;
  source: string; // referrer / utm / page
  consent: Consent;
  tags: string[]; // e.g. ["ai-night-school", "harpenden", "demo"]
  notes?: string;
};

export type LeaderSignup = SignupBase & {
  persona: "leader";
  organisation?: string;
  role?: string;
  cohortInterest: "next" | "later" | "speaker-series" | "free-dreamers";
};

export type TeenSignup = SignupBase & {
  persona: "teen";
  age?: string;
  school?: string;
  interest: "summer-cohort" | "year-round" | "work-experience" | "all";
  parentEmail?: string;
};

export type VolunteerSignup = SignupBase & {
  persona: "volunteer";
  availability: string;
  roles: ("working-group" | "ai-coach" | "clinic-host")[];
  skills?: string;
};

export type OrganisationSignup = SignupBase & {
  persona: "organisation";
  organisation: string;
  role: string;
  problemId?: string; // links to the problem they submitted
};

export type Signup =
  | LeaderSignup
  | TeenSignup
  | VolunteerSignup
  | OrganisationSignup;

export type ProblemStatus = "open" | "in-progress" | "shipped";

export type Problem = {
  id: string;
  createdAt: string;
  organisation: string;
  contactName: string;
  contactEmail: string;
  shortTitle: string; // 1-line summary
  description: string;
  whoFeelsIt: string;
  alreadyTried?: string;
  successIn90Days: string;
  isPublic: boolean; // can show on /community-projects
  status: ProblemStatus;
  tags: string[];
  joinedBy: string[]; // email list of residents who said they'd join
};

export type SubmissionStore = {
  listSignups(): Promise<Signup[]>;
  addSignup(input: Omit<Signup, "id" | "createdAt"> & Partial<Pick<Signup, "id" | "createdAt">>): Promise<Signup>;
  listProblems(opts?: { onlyPublic?: boolean }): Promise<Problem[]>;
  getProblem(id: string): Promise<Problem | null>;
  addProblem(input: Omit<Problem, "id" | "createdAt" | "joinedBy" | "status"> & Partial<Pick<Problem, "id" | "createdAt" | "status">>): Promise<Problem>;
  joinProblem(problemId: string, email: string): Promise<Problem | null>;
};
