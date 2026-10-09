// Facts shown below the intro. Each one comes from a live site, a public repo on github.com/levivagymi
// or the site's earlier copy; anything not known yet is left out rather than guessed.

export interface SpecRow {
  label: string;
  value: string;
  /** Rendered in the "open" green with a status dot. */
  status?: boolean;
}

export type LinkKind = 'live' | 'code' | 'profile' | 'doc';

export interface ExternalLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export type StackTier = 'shipped' | 'built' | 'learning';

export interface StackArea {
  area: string;
  items: Record<StackTier, readonly string[]>;
}

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  summary: string;
  /** In-page anchor of the related case study. */
  href?: string;
}

export interface FirstStep {
  period: string;
  title: string;
  summary: string;
  stack: readonly string[];
  links: readonly ExternalLink[];
}

export interface Repo {
  name: string;
  summary: string;
  language: string;
  /** Month of the last push. */
  updated: string;
  href: string;
}

export interface Practice {
  title: string;
  summary: string;
  evidence: ExternalLink;
}

const GITHUB = 'https://github.com/levivagymi';

export const person = {
  name: 'Ádám Levente Dániel',
  shortName: 'Ádám Levente',
  role: 'Web developer & software tester',
  email: 'adam.levente.daniel@gmail.com',
  github: GITHUB,
  githubHandle: 'levivagymi',
  replyTime: 'I usually reply within 24 hours.',
} as const;

export const mailto = (subject: string) => `mailto:${person.email}?subject=${encodeURIComponent(subject)}`;

export const status = {
  /** Header chip: full text from 1280px, the short one below. */
  chip: 'Open to internships',
  chipShort: 'Open to work',
  /** In priority order. */
  lines: ['Internships now', 'junior web or QA roles after graduation', 'freelance websites on the side'],
} as const;

export const overview = {
  lead: 'Final-year IT student on the software development and testing track. I build web apps from the interface to the database and deployment, and I write the test cases for them.',
  spec: [
    { label: 'Status', value: status.lines.join(' · '), status: true },
    { label: 'Focus', value: 'Web development from interface to deployment, and software testing' },
    { label: 'Client work', value: 'lagunalovasklub.hu (live) · Vityilló guesthouse (pre-launch)' },
    { label: 'Core stack', value: 'JavaScript · TypeScript · Supabase · Vercel · Git' },
    { label: 'Education', value: 'Final year, IT & telecommunications, TSZC Bánki Donát – Péch Antal Technical School' },
    { label: 'Based in', value: 'Hungary · available remotely' },
  ] satisfies SpecRow[],
};

export const stackTiers: Record<StackTier, { label: string; note: string }> = {
  shipped: { label: 'Shipped', note: 'in a site that is live today' },
  built: { label: 'Built with', note: 'in client, school or personal projects' },
  learning: { label: 'Learning', note: 'studying, not in a project yet' },
};

export const stack: StackArea[] = [
  {
    area: 'Languages',
    items: { shipped: ['JavaScript', 'HTML', 'CSS', 'SQL'], built: ['TypeScript', 'Java', 'Python', 'PHP'], learning: ['C++', 'C#'] },
  },
  {
    area: 'Frontend',
    items: { shipped: ['Nuxt (Vue)', 'Tailwind CSS'], built: ['Next.js', 'React', 'Astro', 'GSAP'], learning: [] },
  },
  {
    area: 'Backend & data',
    items: { shipped: ['Supabase (Postgres)'], built: ['Next.js API routes', 'Zod', 'Resend', 'MySQL (XAMPP)'], learning: [] },
  },
  {
    area: 'Testing',
    items: { shipped: [], built: ['Vitest', 'Manual & functional testing', 'Test cases & bug reports'], learning: ['JUnit 5'] },
  },
  {
    area: 'Tools & delivery',
    items: { shipped: ['Git', 'GitHub', 'Vercel'], built: ['VS Code', 'IntelliJ IDEA', 'Maven', 'Claude Code'], learning: [] },
  },
];

export const experience: TimelineEntry[] = [
  {
    period: '2022 – now',
    title: 'Freelance web developer',
    org: 'Laguna Lovasklub, Héreg',
    summary: 'Built and launched the riding club’s website in Hungarian, English and German, with a webshop, blog and horse listings. I still maintain it.',
    href: '#project-laguna-lovasklub',
  },
  {
    period: '2026',
    title: 'Freelance web developer',
    org: 'Vityilló Vendégház, Szomód',
    summary: 'Booking website for a guesthouse in three languages. Feature-complete and in pre-launch review against a written launch checklist.',
    href: '#project-vityillo',
  },
];

export const education: TimelineEntry[] = [
  {
    period: 'Year 5 of 5',
    title: 'IT & telecommunications, software development and testing track',
    org: 'TSZC Bánki Donát – Péch Antal Technical School',
    summary: 'Final year. The class knowledge base and the Student Day website under Selected work are school projects.',
  },
];

export const firstSteps: FirstStep[] = [
  {
    period: 'May 2026',
    title: 'Software testing fundamentals',
    summary: 'A one-page study guide to the laws of software testing, built to prepare for my JUnit 5 exam.',
    stack: ['HTML', 'CSS'],
    links: [
      { label: 'Live', href: 'https://szoftverteszteles-alapok.vercel.app', kind: 'live' },
      { label: 'Code', href: `${GITHUB}/SzoftvertesztelesAlapok`, kind: 'code' },
    ],
  },
  {
    period: 'Jun 2026',
    title: 'Számkitaláló',
    summary: 'A number-guessing game: Java desktop practice with a JavaFX interface and a Maven build.',
    stack: ['Java', 'JavaFX', 'Maven'],
    links: [{ label: 'Code', href: `${GITHUB}/szamkitalaloJAVAFX`, kind: 'code' }],
  },
  {
    period: 'Oct 2026',
    title: 'EsőErdő',
    summary: 'A school project about rainforests, built as a pair.',
    stack: ['HTML', 'CSS'],
    links: [{ label: 'Code', href: `${GITHUB}/EsoErdo`, kind: 'code' }],
  },
];

export const repos: Repo[] = [
  {
    name: 'vityill-',
    summary: 'Vityilló guesthouse: trilingual booking site with validated API routes and unit tests.',
    language: 'TypeScript',
    updated: 'Oct 2026',
    href: `${GITHUB}/vityill-`,
  },
  {
    name: 'osztalyproject',
    summary: 'Project-management knowledge base for my class, backed by Supabase.',
    language: 'JavaScript',
    updated: 'Jun 2026',
    href: `${GITHUB}/osztalyproject`,
  },
  {
    name: '-d-mLevente',
    summary: 'This site: Astro, Tailwind CSS and the PORTFOLIO keyboard.',
    language: 'Astro',
    updated: 'Oct 2026',
    href: `${GITHUB}/-d-mLevente`,
  },
  {
    name: 'szamkitalaloJAVAFX',
    summary: 'Number-guessing game with a JavaFX interface.',
    language: 'Java',
    updated: 'Jun 2026',
    href: `${GITHUB}/szamkitalaloJAVAFX`,
  },
];

export const practices: Practice[] = [
  {
    title: 'A checklist before go-live',
    summary: 'Vityilló has a go/no-go table of the legal, GDPR, security, accessibility and indexing tasks that block launch, each with an owner.',
    evidence: { label: 'docs/launch-checklist.md', href: `${GITHUB}/vityill-/blob/master/docs/launch-checklist.md`, kind: 'doc' },
  },
  {
    title: 'Tests beside the code',
    summary: 'The API guard and the cookie consent each have their own Vitest file next to the module: 28 unit tests between them.',
    evidence: { label: 'lib/api-guard.test.ts', href: `${GITHUB}/vityill-/blob/master/lib/api-guard.test.ts`, kind: 'doc' },
  },
  {
    title: 'The database in the repo',
    summary: 'The class knowledge base keeps its schema and seed data as SQL files, with an .env.example that lists the settings it needs.',
    evidence: { label: 'schema.sql', href: `${GITHUB}/osztalyproject/blob/main/schema.sql`, kind: 'doc' },
  },
];

export const allLinks: ExternalLink[] = [
  { label: 'lagunalovasklub.hu', href: 'https://www.lagunalovasklub.hu', kind: 'live' },
  { label: 'osztalyproject.vercel.app', href: 'https://osztalyproject.vercel.app', kind: 'live' },
  { label: 'diaknap.vercel.app', href: 'https://diaknap.vercel.app', kind: 'live' },
  { label: 'szoftverteszteles-alapok.vercel.app', href: 'https://szoftverteszteles-alapok.vercel.app', kind: 'live' },
  { label: 'github.com/levivagymi', href: GITHUB, kind: 'profile' },
  { label: 'All repositories', href: `${GITHUB}?tab=repositories`, kind: 'code' },
];

export const lookingFor: string[] = [
  'An internship now, in web development or software testing.',
  'After graduation, a junior web developer or QA role.',
  'A team that reviews my code. I learn fastest with feedback and a mentor.',
  'Freelance websites for small businesses, alongside school.',
];

export const interests: string[] = [
  'Testing what I build, from manual test cases to unit tests.',
  'Multilingual sites: both client sites run in Hungarian, English and German.',
  'AI-assisted development, which I use every day.',
  'AI and machine learning.',
  'Music. I’m a musician, too.',
];
