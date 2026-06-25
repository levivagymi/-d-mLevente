import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adamlevente.hu',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/impresszum') &&
        !page.includes('/adatvedelem') &&
        !page.includes('/sutik'),
    }),
  ],
});
