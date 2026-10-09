// The CV download appears only once the PDF is actually in public/cv, so no button ever points at a missing file.
// Build-time only: imported from component frontmatter, never from client scripts.
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const FILE = 'cv/Adam-Levente-Daniel-CV.pdf';

export interface CvFile {
  href: string;
  /** Suggested name for the saved file. */
  fileName: string;
  /** "92 KB" */
  size: string;
}

function locate(): CvFile | null {
  const path = join(process.cwd(), 'public', FILE);
  if (!existsSync(path)) return null;
  const kb = Math.max(1, Math.round(statSync(path).size / 1024));
  return { href: `/${FILE}`, fileName: FILE.split('/').pop() ?? FILE, size: `${kb} KB` };
}

export const cv = locate();
