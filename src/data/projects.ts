export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  emoji: string;
  altText: string;
}

export const projects: Project[] = [
  {
    title: 'Bella Ristorante',
    description:
      'Olasz étterem modern weboldala online asztafoglalással, dinamikus menükártyával és Instagram-integrációval. Gyors betöltés, tökéletes mobilon.',
    tech: ['Nuxt.js', 'Vue 3', 'Supabase', 'Tailwind'],
    url: '#',
    emoji: '🍝',
    altText: 'Bella Ristorante étterem weboldal – Nuxt.js alapú étteremhonlap online asztalfoglalással',
  },
  {
    title: 'FitLife Studio',
    description:
      'Fitnesz stúdió weboldala órarend rendszerrel, edzők bemutatásával és hírlevél feliratkozással. SEO-optimalizált, 98-as Lighthouse score-ral.',
    tech: ['Astro', 'TypeScript', 'Netlify CMS'],
    url: '#',
    emoji: '💪',
    altText: 'FitLife Studio fitnesz weboldal – Astro keretrendszer alapú sportstúdió honlap',
  },
  {
    title: 'Lakásom.hu',
    description:
      'Ingatlanközvetítő iroda portálja ingatlanlistázással, térkép-integrációval, szűrési funkciókkal és admin felülettel. Teljes egyedi fejlesztés.',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
    url: '#',
    emoji: '🏡',
    altText: 'Lakásom.hu ingatlan weboldal – Next.js alapú ingatlanközvetítő portál',
  },
  {
    title: 'GreenBox Webshop',
    description:
      'Organikus élelmiszerek webshopja Stripe fizetéssel, raktárkészlet-kezeléssel, kuponrendszerrel és automatikus email értesítésekkel.',
    tech: ['Vue.js', 'Node.js', 'Stripe', 'MongoDB'],
    url: '#',
    emoji: '🥦',
    altText: 'GreenBox organikus élelmiszer webshop – Vue.js és Stripe alapú online bolt',
  },
];
