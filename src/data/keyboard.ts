// Content and geometry for the storytelling keyboard intro (80% / TKL, Hungarian layout).
// Every key tells one short, profession-related story. Geometry is expressed in key units (u).

export type CategoryId = 'ai' | 'arch' | 'clean' | 'data' | 'ui' | 'quality' | 'tools';

export interface Category {
  id: CategoryId;
  name: string;
  /** Keycap top face. */
  cap: string;
  /** Keycap side wall (darker). */
  side: string;
  /** Legend colour printed on the cap. */
  legend: string;
  /** Text colour of this category on the dark stage. */
  ink: string;
}

export interface Story {
  category: CategoryId;
  term: string;
  /** Short sub-legend printed under the main legend. */
  sub: string;
  story: string;
}

export interface KeyDef {
  /** Unique per physical key (ShiftLeft / ShiftRight are different keys). */
  id: string;
  /** Story id; paired modifiers share one story. */
  content: string;
  label: string;
  /** Label for very small keys (phones). */
  short?: string;
  /** Physical key matchers: one-character entries match `KeyboardEvent.key`, longer ones `KeyboardEvent.code`. */
  match: string[];
  x: number;
  y: number;
  w: number;
}

export const categories: Category[] = [
  { id: 'ai', name: 'AI & vibecoding', cap: '#F0A820', side: '#B97F12', legend: '#1A1826', ink: '#F0A820' },
  { id: 'arch', name: 'Architecture & APIs', cap: '#3E68C4', side: '#2B4C93', legend: '#F4F6FF', ink: '#86A6F0' },
  { id: 'clean', name: 'Clean code & OOP', cap: '#E9E2D0', side: '#B3AB96', legend: '#1A1826', ink: '#E9E2D0' },
  { id: 'data', name: 'Data & backend', cap: '#7656D6', side: '#563BA6', legend: '#F6F2FF', ink: '#AE98F0' },
  { id: 'ui', name: 'UI & motion', cap: '#EF6A5B', side: '#B9483C', legend: '#1A1826', ink: '#F4887B' },
  { id: 'quality', name: 'Quality & testing', cap: '#57C26A', side: '#3B8F4B', legend: '#10231A', ink: '#74D486' },
  { id: 'tools', name: 'Tools & experience', cap: '#3A3A4C', side: '#24242F', legend: '#E6E4EE', ink: '#BDBBCB' },
];

export const intro = {
  label: 'Hello',
  term: 'Hi,',
  story: "I'm Ádám Levente. Every key on this Hungarian keyboard tells you something about my work.",
};

export const stories: Record<string, Story> = {
  // AI & vibecoding
  V: { category: 'ai', term: 'Vibecoding', sub: 'VIBE', story: "Guilty as charged: I iterate fast with AI, but I read every generated line like a colleague's pull request." },
  P: { category: 'ai', term: 'Prompting', sub: 'PROMPT', story: 'I give the AI precise context. A good question is half the answer.' },
  W: { category: 'ai', term: 'Workflow', sub: 'FLOW', story: 'AI tools every day: coding, documentation, getting up to speed with unfamiliar libraries.' },
  Ő: { category: 'ai', term: 'Honestly', sub: 'REVIEW', story: "AI is sometimes confidently wrong. That's why review is mandatory for me, not optional." },
  '0': { category: 'ai', term: 'Zero blind lines', sub: '0', story: 'Whatever the AI generates, I read it line by line before I commit it.' },
  Shift: { category: 'ai', term: 'Shift', sub: 'ADAPT', story: 'The industry keeps shifting: new tools, new models, new frameworks. Adapting is part of my daily routine.' },
  Escape: { category: 'ai', term: 'Escaping the vibe', sub: 'ESC', story: 'When the AI starts going in circles, I step out and think the problem through on paper.' },
  ContextMenu: { category: 'ai', term: 'Context', sub: 'CONTEXT', story: 'AI or colleague, I explain exactly what I need and why.' },
  ArrowRight: { category: 'ai', term: 'Next step', sub: 'NEXT', story: "There's always something new to learn: GSAP today, a new database pattern tomorrow." },

  // Architecture & APIs
  A: { category: 'arch', term: 'API design', sub: 'API', story: 'First I write down who calls it and how. Only then the implementation.' },
  H: { category: 'arch', term: 'Helpful errors', sub: 'ERROR', story: 'A good API returns an error you can understand, not a 500 and silence.' },
  Á: { category: 'arch', term: 'State management', sub: 'STATE', story: 'I know where the data lives, who can change it, and when the UI updates.' },
  '3': { category: 'arch', term: 'Three layers', sub: 'LAYERS', story: 'Presentation, business logic, data access: I keep them apart so one never drags the others down.' },
  ',': { category: 'arch', term: 'Loose coupling', sub: ',', story: 'A system should read like a list of well-separated parts, not one endless sentence.' },
  F6: { category: 'arch', term: 'URL design', sub: 'URL', story: "URLs are an interface too: readable, shareable, and they don't break after a rename." },
  Pause: { category: 'arch', term: 'Pause', sub: 'THINK', story: 'Before designing a system, I pause. Think first, type second.' },
  End: { category: 'arch', term: 'Boundaries', sub: 'BOUNDS', story: "I know where one module's responsibility ends and the next one's begins." },
  ArrowUp: { category: 'arch', term: 'Scaling', sub: 'SCALE', story: "I design so that even with ten times the users, the schema isn't the bottleneck." },
  ArrowDown: { category: 'arch', term: 'Backward compatible', sub: 'COMPAT', story: 'I version my APIs: a new feature must never break existing clients.' },
  Alt: { category: 'arch', term: 'Alternatives', sub: 'ALT', story: 'I weigh two solutions before picking one, and I write down why.' },

  // Clean code & OOP
  C: { category: 'clean', term: 'Clean Code', sub: 'CLEAN', story: "Meaningful names, small functions: code is read far more often than it's written." },
  O: { category: 'clean', term: 'OOP', sub: 'OOP', story: 'Not inheritance chains, but well-drawn boundaries: every class has one responsibility.' },
  I: { category: 'clean', term: 'Interfaces', sub: 'IFACE', story: 'I build on contracts instead of concrete dependencies, so any part can be swapped out.' },
  R: { category: 'clean', term: 'Refactoring', sub: 'REFAC', story: 'Small steps, with tests behind me: I make working code better instead of rewriting it.' },
  Ö: { category: 'clean', term: 'Composition', sub: 'COMPOSE', story: 'Composition over inheritance: smaller pieces that fit together, fewer surprises.' },
  Ú: { category: 'clean', term: 'Reuse', sub: 'DRY', story: 'If I write it twice, the third time I extract it.' },
  Y: { category: 'clean', term: 'YAGNI', sub: 'YAGNI', story: "I don't build what isn't needed yet: the simple solution is the best foundation to extend." },
  '7': { category: 'clean', term: '7 ± 2', sub: '7±2', story: "That's about how much a person can hold in their head, so I write short functions, not novels." },
  '9': { category: 'clean', term: 'Monday, 9 a.m.', sub: '9', story: "I still have to understand the code I wrote on Friday. That's why I write it to be readable." },
  '.': { category: 'clean', term: 'Full stop', sub: '.', story: 'One function, one job. Full stop.' },
  Backspace: { category: 'clean', term: 'Deleting code', sub: 'DEL', story: 'Deleting code is a craft too: the least code means the fewest bugs.' },
  CapsLock: { category: 'clean', term: 'CONSTANTS', sub: 'CAPS', story: "I DON'T SHOUT IN MY CODE. EXCEPT FOR CONSTANTS: MAX_RETRY_COUNT." },
  F2: { category: 'clean', term: 'Renaming', sub: 'RENAME', story: "A good name is half the documentation. If it's wrong, I rename it, even for the fifth time." },
  F3: { category: 'clean', term: 'Search first', sub: 'FIND', story: 'Before writing new code, I check whether the codebase already solves the problem.' },
  F7: { category: 'clean', term: 'Linting', sub: 'LINT', story: 'A linter and a formatter in every project: style is not something to argue about in code review.' },

  // Data & backend
  S: { category: 'data', term: 'Supabase', sub: 'SUPA', story: 'Postgres, Auth and Row Level Security: the database protects the data, not just the frontend.' },
  Q: { category: 'data', term: 'Queries', sub: 'SQL', story: "SQL isn't magic to me: I know what a JOIN does and why an index matters." },
  B: { category: 'data', term: 'Backend', sub: 'BACK', story: 'Node.js and Supabase: the frontend gets exactly what it needs, nothing more.' },
  N: { category: 'data', term: 'Node.js', sub: 'NODE', story: 'This is where I connect external services and write the server-side logic.' },
  M: { category: 'data', term: 'Migrations', sub: 'MIGRATE', story: 'The database schema is version-controlled code, not tables clicked together by hand.' },
  Insert: { category: 'data', term: 'INSERT', sub: 'INSERT', story: "I validate before writing: once bad data is in the database, it's everyone's problem." },
  Delete: { category: 'data', term: 'DELETE', sub: 'DELETE', story: 'Deletes only with a WHERE clause, inside a transaction, with a backup behind it.' },
  PageDown: { category: 'data', term: 'Pagination', sub: 'PAGE', story: "I don't send a thousand rows at once: paging and filtering happen on the server, not in the browser." },
  AltGraph: { category: 'data', term: 'UTF-8', sub: 'Ő Ű', story: "I'm a Hungarian developer: accented data is UTF-8 end to end and never turns into question marks." },

  // UI & motion
  G: { category: 'ui', term: 'GSAP', sub: 'GSAP', story: 'This keyboard runs on it: only transform and opacity, so it stays at 60 fps.' },
  L: { category: 'ui', term: 'Lenis', sub: 'LENIS', story: "Smooth scrolling that doesn't fight the browser: motion should help, not get in the way." },
  F: { category: 'ui', term: 'Frontend', sub: 'FRONT', story: 'Responsive, accessible interfaces that work as well on a phone as on a desktop.' },
  K: { category: 'ui', term: 'Keyboard-first', sub: 'A11Y', story: 'Everything should work without a mouse too. This keyboard included: try the arrow keys and Enter.' },
  U: { category: 'ui', term: 'UX feedback', sub: 'UX', story: 'A key that sinks when you press it says: got it. Motion is feedback, not decoration.' },
  Ű: { category: 'ui', term: 'Forms', sub: 'FORM', story: "Validation on both the client and the server: users can make mistakes, the database can't." },
  F10: { category: 'ui', term: 'Navigation', sub: 'NAV', story: 'A good menu gets you anywhere within three clicks.' },
  F11: { category: 'ui', term: 'Responsive', sub: '320PX', story: 'It has to work full screen and at 320 pixels wide: I start every layout on the smallest screen.' },
  F12: { category: 'ui', term: 'DevTools', sub: 'DEV', story: "My second home: Network, Performance, Lighthouse. That's where you find out what's actually slow." },
  ScrollLock: { category: 'ui', term: 'Scrolling', sub: 'SCROLL', story: "I don't take scrolling away from visitors: Lenis complements the browser, it doesn't override it." },
  Home: { category: 'ui', term: 'Home page', sub: 'HOME', story: 'The first impression: it should load fast and make sense at first glance.' },

  // Quality & testing
  T: { category: 'quality', term: 'Testing', sub: 'TEST', story: "I'm training as a tester too: functional and manual testing, test documentation, reproducible bug reports." },
  E: { category: 'quality', term: 'Edge cases', sub: 'EDGE', story: 'Empty, huge, the wrong type: my unit tests cover the inputs nobody plans for.' },
  D: { category: 'quality', term: 'Debugging', sub: 'DEBUG', story: "First I reproduce the bug, then I fix it. Otherwise I'm just guessing." },
  Z: { category: 'quality', term: 'Zero failing tests', sub: 'GREEN', story: 'Nothing goes live until every test passes.' },
  Ó: { category: 'quality', term: 'Oh, a bug!', sub: 'BUG', story: "I'm glad to see it: better I find it now than a user does." },
  '2': { category: 'quality', term: 'Two roles', sub: 'DEV+QA', story: 'As a developer I build it; as a tester I look for where it breaks.' },
  '4': { category: 'quality', term: 'Four eyes', sub: 'REVIEW', story: "Four eyes see more than two: code review isn't a formality for me." },
  '8': { category: 'quality', term: '80/20', sub: '80/20', story: "Most bugs live in a small part of the code, so that's where I write the most tests." },
  '-': { category: 'quality', term: 'Minus', sub: '−', story: 'My best pull requests delete more lines than they add.' },
  F4: { category: 'quality', term: 'Done means done', sub: 'DONE', story: 'A task is finished when it is tested and documented, not when it “mostly works”.' },
  F8: { category: 'quality', term: 'Step by step', sub: 'STEP', story: 'I step through the code in a debugger. console.log is only the first guess.' },
  PrintScreen: { category: 'quality', term: 'Screenshot', sub: 'SHOT', story: "A good bug report has a screenshot, steps and the expected result. Otherwise it can't be reproduced." },

  // Tools & experience
  '1': { category: 'tools', term: 'One real client', sub: 'CLIENT', story: 'The Laguna Lovasklub riding club website: I took it from design through development to launch.' },
  Ü: { category: 'tools', term: 'Client brief', sub: 'BRIEF', story: 'Working with Laguna Lovasklub taught me that the spec starts with the very first conversation.' },
  '5': { category: 'tools', term: 'Five years', sub: '5Y', story: 'IT training at TSZC Bánki Donát – Péch Antal Technical School, majoring in software development and testing.' },
  '6': { category: 'tools', term: '6+ languages', sub: 'LANG', story: 'JavaScript, Python, Java, SQL, PHP, C++: the language matters less than the thinking behind it.' },
  J: { category: 'tools', term: 'Java & JavaScript', sub: 'JS/JAVA', story: 'JavaScript on the web, Java in IntelliJ: two languages, the same mindset.' },
  É: { category: 'tools', term: 'Shipping', sub: 'DEPLOY', story: "Git push, Vercel build, CI/CD: for me, deploying isn't a nail-biting moment, it's routine." },
  Í: { category: 'tools', term: 'Written docs', sub: 'DOCS', story: 'README, test documentation, commit messages: I write them for my future self.' },
  X: { category: 'tools', term: 'XAMPP', sub: 'XAMPP', story: 'Where I started: PHP, MySQL, localhost. My projects run in the cloud now, but the fundamentals come from there.' },
  Tab: { category: 'tools', term: 'Tabs or spaces?', sub: 'TAB', story: "I don't argue about it: Prettier decides, and the team gets on with the work." },
  Enter: { category: 'tools', term: 'Enter', sub: 'RUN', story: 'This is where code leaves my machine, so the linter and the tests always run first.' },
  F1: { category: 'tools', term: 'Help', sub: 'HELP', story: 'I read the docs before I ask. Even before I ask the AI.' },
  F5: { category: 'tools', term: 'Refresh', sub: 'RELOAD', story: 'Hot reload, fast feedback: the shorter the loop between a change and its result, the better the code.' },
  F9: { category: 'tools', term: 'Build', sub: 'BUILD', story: "The build runs after every commit. If it's red, fixing it comes first." },
  PageUp: { category: 'tools', term: 'Upgrades', sub: 'UPGRADE', story: 'Updating a dependency? I read the changelog first, then I run the tests.' },
  ArrowLeft: { category: 'tools', term: 'Rollback', sub: 'BACK', story: 'Every deploy has a way back: if something goes wrong, one step back.' },
  Control: { category: 'tools', term: 'Ctrl+Z', sub: 'UNDO', story: 'Git is my safety net: small commits, clear messages, and I can always go back.' },
  Meta: { category: 'tools', term: 'Environment', sub: 'OS', story: 'Windows, Linux, the terminal: I set up my own dev environment and understand what runs on it.' },

  // Space: the signature key
  Space: { category: 'ai', term: 'Ádám Levente', sub: 'ÁDÁM LEVENTE', story: 'Software developer and tester. I work fast with AI, and reliably thanks to solid engineering fundamentals.' },
};

/* ---------- Geometry ---------- */

interface Slot {
  content: string;
  label?: string;
  short?: string;
  id?: string;
  match?: string[];
  /** Width in u (default 1). */
  w?: number;
  /** Absolute x in u; otherwise the slot follows the previous one. */
  at?: number;
}

const char = (c: string): Slot => ({ content: c, match: [c] });
const chars = (s: string) => [...s].map(char);
const fn = (n: number, at?: number): Slot => ({ content: `F${n}`, match: [`F${n}`], at });

const NAV_X = 15.25;

/** Rows as [y, slots]. The function row sits half a unit above the rest. */
const layout: [number, Slot[]][] = [
  [0, [
    { content: 'Escape', label: 'Esc', match: ['Escape'] },
    fn(1, 2), fn(2), fn(3), fn(4),
    fn(5, 6.5), fn(6), fn(7), fn(8),
    fn(9, 11), fn(10), fn(11), fn(12),
    { content: 'PrintScreen', label: 'PrtSc', short: 'Prt', match: ['PrintScreen'], at: NAV_X },
    { content: 'ScrollLock', label: 'ScrLk', short: 'Scr', match: ['ScrollLock'] },
    { content: 'Pause', label: 'Pause', short: 'Pse', match: ['Pause'] },
  ]],
  [1.5, [
    ...chars('0123456789ÖÜÓ'),
    { content: 'Backspace', label: 'Backspace', short: '⌫', match: ['Backspace'], w: 2 },
    { content: 'Insert', label: 'Ins', match: ['Insert'], at: NAV_X },
    { content: 'Home', label: 'Home', short: 'Hm', match: ['Home'] },
    { content: 'PageUp', label: 'PgUp', short: 'PU', match: ['PageUp'] },
  ]],
  [2.5, [
    { content: 'Tab', label: 'Tab', short: '⇥', match: ['Tab'], w: 1.5 },
    ...chars('QWERTZUIOPŐÚ'),
    { ...char('Ű'), w: 1.5 },
    { content: 'Delete', label: 'Del', match: ['Delete'], at: NAV_X },
    { content: 'End', label: 'End', match: ['End'] },
    { content: 'PageDown', label: 'PgDn', short: 'PD', match: ['PageDown'] },
  ]],
  [3.5, [
    { content: 'CapsLock', label: 'Caps Lock', short: '⇪', match: ['CapsLock'], w: 1.75 },
    ...chars('ASDFGHJKLÉÁ'),
    { content: 'Enter', label: 'Enter', short: '⏎', match: ['Enter', 'NumpadEnter'], w: 2.25 },
  ]],
  [4.5, [
    { content: 'Shift', id: 'ShiftLeft', label: 'Shift', short: '⇧', match: ['ShiftLeft'], w: 1.25 },
    ...chars('ÍYXCVBNM,.-'),
    { content: 'Shift', id: 'ShiftRight', label: 'Shift', short: '⇧', match: ['ShiftRight'], w: 2.75 },
    { content: 'ArrowUp', label: '↑', match: ['ArrowUp'], at: NAV_X + 1 },
  ]],
  [5.5, [
    { content: 'Control', id: 'ControlLeft', label: 'Ctrl', match: ['ControlLeft'], w: 1.25 },
    { content: 'Meta', id: 'MetaLeft', label: 'Win', match: ['MetaLeft'], w: 1.25 },
    { content: 'Alt', label: 'Alt', match: ['AltLeft'], w: 1.25 },
    { content: 'Space', label: '', match: ['Space'], w: 6.25 },
    { content: 'AltGraph', label: 'AltGr', short: 'AGr', match: ['AltRight'], w: 1.25 },
    { content: 'Meta', id: 'MetaRight', label: 'Win', match: ['MetaRight'], w: 1.25 },
    { content: 'ContextMenu', label: 'Menu', short: '☰', match: ['ContextMenu'], w: 1.25 },
    { content: 'Control', id: 'ControlRight', label: 'Ctrl', match: ['ControlRight'], w: 1.25 },
    { content: 'ArrowLeft', label: '←', match: ['ArrowLeft'], at: NAV_X },
    { content: 'ArrowDown', label: '↓', match: ['ArrowDown'] },
    { content: 'ArrowRight', label: '→', match: ['ArrowRight'] },
  ]],
];

export const KEYBOARD_WIDTH = 18.25;
export const KEYBOARD_HEIGHT = 6.5;

export const keys: KeyDef[] = layout.flatMap(([y, slots]) => {
  let cursor = 0;
  return slots.map((slot) => {
    const w = slot.w ?? 1;
    const x = slot.at ?? cursor;
    cursor = x + w;
    return {
      id: slot.id ?? slot.content,
      content: slot.content,
      label: slot.label ?? slot.content,
      short: slot.short,
      match: slot.match ?? [],
      x,
      y,
      w,
    };
  });
});

/** "Tell me more" order: one highlight per category first, then everything else in layout order. */
const highlights = ['Space', 'V', 'A', 'C', 'S', 'G', 'T', '1'];

export const tourOrder: string[] = [
  ...highlights,
  ...[...new Set(keys.map((k) => k.content))].filter((c) => !highlights.includes(c)),
];
