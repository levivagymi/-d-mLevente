import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Every case study answers the same questions in the same order: what was the problem, what I built,
// what came of it and how it was tested. The schema makes a project without those facts fail the build.
const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['client', 'school', 'personal']),
      status: z.enum(['live', 'pre-launch', 'in-progress']),
      period: z.string(),
      role: z.string(),
      /** One line for the compact list and link previews. */
      summary: z.string().max(160),
      problem: z.string(),
      built: z.array(z.string()).min(1),
      result: z.array(z.string()).min(1),
      testing: z.string().optional(),
      stack: z.array(z.string()).min(1),
      links: z.object({
        live: z.url().optional(),
        code: z.url().optional(),
      }),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Featured projects get the full case-study layout; the rest are rows. */
      featured: z.boolean(),
      order: z.number().int(),
    }),
});

export const collections = { projects };
