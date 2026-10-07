// Content and geometry for the PORTFOLIO keyboard intro.
// Every keycap is one letter of the word (plus Enter) and stands for one part of the portfolio further down the page.
// Geometry is expressed in key units (u), measured from the reference design.

export interface LetterKey {
  /** Unique per keycap: the word has three O's. */
  id: string;
  kind: 'letter' | 'enter';
  /** Printed on the cap. */
  legend: string;
  /** `KeyboardEvent.key`, upper-cased, that presses this cap. */
  match: string;
  /** First line of the headline: "P is for". */
  lead: string;
  /** Second line of the headline, set in italic: "Projects". */
  term: string;
  /** Small legend printed on the cap. */
  sub: string;
  /** One sentence: what the letter covers. */
  story: string;
  /** Anchor of this topic's own section. */
  target: string;
  /** Existing section to jump to until the topic's own section is built. */
  fallback: string;
  /** Keycap top face. */
  cap: string;
  /** Keycap side wall (darker). */
  side: string;
  /** Text colour of this key on the light stage (≥ 4.5:1 on #F0F0EC). */
  ink: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const intro = {
  lead: "Hi, I'm Ádám Levente.",
  before: 'A ',
  term: 'developer & tester',
  after: '.',
  story: 'Each letter of PORTFOLIO opens one part of my work. Press one, or type it.',
};

export const marquee = [
  'Software developer & tester',
  'I build it, then I try to break it',
  'Junior, eager to learn',
];

type Content = Pick<LetterKey, 'id' | 'legend' | 'term' | 'sub' | 'story' | 'target' | 'fallback' | 'cap' | 'side' | 'ink'>;

const letters: Content[] = [
  {
    id: 'P', legend: 'P', term: 'Projects', sub: 'Selected work',
    story: 'Class assignments, my vocational exam project and the small ideas I build on weekends.',
    target: 'projects', fallback: 'experience',
    cap: '#F4A0C5', side: '#E3508A', ink: '#B24270',
  },
  {
    id: 'O1', legend: 'O', term: 'Overview', sub: 'About me',
    story: 'Who I am, what I study at technical school and why I love to code.',
    target: 'overview', fallback: 'about',
    cap: '#A99CF4', side: '#5A3FE6', ink: '#533BD2',
  },
  {
    id: 'R', legend: 'R', term: 'Repositories', sub: 'GitHub',
    story: 'My GitHub profile: where my code lives, and proof that I know my way around Git.',
    target: 'repositories', fallback: 'skills',
    cap: '#A3E6C8', side: '#4CB27C', ink: '#377758',
  },
  {
    id: 'T', legend: 'T', term: 'Technologies', sub: 'Tech stack',
    story: "The languages and tools I've worked with, at school and on my own.",
    target: 'technologies', fallback: 'skills',
    cap: '#F8BC66', side: '#EE962E', ink: '#936027',
  },
  {
    id: 'F', legend: 'F', term: 'First steps', sub: 'Learning path',
    story: 'Practice tasks, online courses and the tutorial projects I learned from.',
    target: 'first-steps', fallback: 'experience',
    cap: '#8ECFF3', side: '#2F7DE4', ink: '#2B6AC0',
  },
  {
    id: 'O2', legend: 'O', term: 'Organization', sub: 'Docs & README',
    story: 'Tidy folders and a README next to every project: what it does and how to run it.',
    target: 'organization', fallback: 'experience',
    cap: '#E2A4F3', side: '#A43AD9', ink: '#9636C6',
  },
  {
    id: 'L', legend: 'L', term: 'Links & demos', sub: 'Live demos',
    story: 'GitHub, LinkedIn and live demos you can click through.',
    target: 'links', fallback: 'contact',
    cap: '#F5AA78', side: '#E5632C', ink: '#AF4F28',
  },
  {
    id: 'I', legend: 'I', term: 'Interests', sub: 'What I love',
    story: "The areas that excite me most, and where I'd like to go deeper.",
    target: 'interests', fallback: 'about',
    cap: '#AAC6F5', side: '#3E62E1', ink: '#3A5ACD',
  },
  {
    id: 'O3', legend: 'O', term: 'Openness', sub: 'Eager to learn',
    story: 'Motivation, eagerness to learn and openness to mentoring.',
    target: 'openness', fallback: 'about',
    cap: '#DDEF77', side: '#7CC63C', ink: '#4D752E',
  },
];

/* ---------- Geometry ---------- */

/** PORT sits about half a key to the right; FOLIO overlaps it slightly and sits in front. */
const TOP_ROW = { length: 4, x: 0.53, y: 0 };
const BOTTOM_ROW = { x: 0, y: 0.96 };
const KEY_H = 1.08;

export const KEYBOARD_WIDTH = 6.1;
export const KEYBOARD_HEIGHT = BOTTOM_ROW.y + KEY_H;

/** In word order, Enter last: this is also the "Tell me more" order. */
export const keys: LetterKey[] = [
  ...letters.map((key, index): LetterKey => {
    const top = index < TOP_ROW.length;
    return {
      ...key,
      kind: 'letter',
      match: key.legend,
      lead: `${key.legend} is for`,
      x: top ? TOP_ROW.x + index : BOTTOM_ROW.x + index - TOP_ROW.length,
      y: top ? TOP_ROW.y : BOTTOM_ROW.y,
      w: 1,
      h: KEY_H,
    };
  }),
  {
    id: 'Enter', kind: 'enter', legend: '↵', match: 'ENTER',
    lead: 'Hit Enter,', term: "let's talk", sub: "Let's talk",
    story: 'An internship, a project or just a question: write to me.',
    target: 'contact', fallback: 'contact',
    cap: '#F7D63C', side: '#E7B414', ink: '#836818',
    x: TOP_ROW.x + TOP_ROW.length + 0.02, y: 0, w: 1.55, h: 2,
  },
];
