// Order, labels and keycaps of the sections below the intro. The header nav and every section's
// running index ("02 / 07") read from here, so adding or moving a section updates both.
import { keys, type LetterKey } from './keyboard';

export interface PageSection {
  id: string;
  label: string;
  /** Header nav label; sections without one stay out of the nav. */
  nav?: string;
  /** Keycaps of the PORTFOLIO letters whose anchors live in this section. */
  keys: readonly string[];
}

export const pageSections = [
  { id: 'overview', label: 'Overview', keys: ['O1'] },
  { id: 'projects', label: 'Selected work', nav: 'Work', keys: ['P'] },
  { id: 'technologies', label: 'Tech stack', nav: 'Stack', keys: ['T'] },
  { id: 'experience', label: 'Experience', nav: 'Experience', keys: ['F'] },
  { id: 'code', label: 'Code & docs', keys: ['R', 'O2', 'L'] },
  { id: 'about', label: 'Beyond the code', keys: ['O3', 'I'] },
  { id: 'contact', label: 'Contact', nav: 'Contact', keys: ['Enter'] },
] as const satisfies readonly PageSection[];

export type SectionId = (typeof pageSections)[number]['id'];

const pad = (n: number) => String(n).padStart(2, '0');

export function sectionMeta(id: SectionId) {
  const index = pageSections.findIndex((section) => section.id === id);
  const section: PageSection = pageSections[index];
  return { ...section, index: `${pad(index + 1)} / ${pad(pageSections.length)}` };
}

export const navSections = pageSections.filter((section): section is Extract<typeof section, { nav: string }> => 'nav' in section);

export function keycap(id: string): LetterKey {
  const key = keys.find((candidate) => candidate.id === id);
  if (!key) throw new Error(`No PORTFOLIO keycap with id "${id}" in src/data/keyboard.ts`);
  return key;
}
