export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Mennyibe kerül egy weboldal elkészítése?',
    answer:
      'Az ár a projekt összetettségétől függ. Egy egyszerű bemutatkozó oldal már 120 000 Ft-tól elérhető, míg egy komplex webshop vagy egyedi webalkalmazás 400 000 Ft felett indul. Kérd ingyenes konzultációmat, és pontos árajánlatot adok az igényeid alapján.',
  },
  {
    question: 'Mennyi idő alatt készül el a weboldalam?',
    answer:
      'Egy egyszerű bemutatkozó oldal általában 1–2 hét alatt elkészül. Összetettebb projekteknél (webshop, egyedi funkciók) 3–6 hétre kell számítani. Az időbeosztástól és az anyagok rendelkezésre állásától is függ. A projekt elején mindig egyeztetünk egy reális határidőről.',
  },
  {
    question: 'Milyen technológiákat használsz?',
    answer:
      'Főként modern JavaScript/TypeScript alapú technológiákat használok: Vue.js, Nuxt.js, Astro, React és Next.js keretrendszereket. Backend oldalon Node.js és különböző headless CMS rendszereket (Contentful, Sanity, Directus). Az adatbázishoz PostgreSQL-t, Supabase-t vagy Firebase-t alkalmazok.',
  },
  {
    question: 'Mit tartalmaz a weboldal ára?',
    answer:
      'Az ár tartalmazza a tervezést, fejlesztést, reszponzív kialakítást, alapszintű SEO optimalizálást és az induláshoz szükséges beállításokat (domain, tárhelykonfiguráció segítségnyújtás). Az ár nem tartalmazza a domain és tárhely díját, valamint a szövegírást és fotózást.',
  },
  {
    question: 'Foglalkozol SEO optimalizálással is?',
    answer:
      'Igen! Minden elkészített oldal alapszintű SEO-optimalizálással indul (meta tagek, strukturált adatok, sitemap, robots.txt, Core Web Vitals). Komplex keresőoptimalizálást (kulcsszókutatás, versenyanalízis, linképítés) külön csomagban kínálok.',
  },
  {
    question: 'Tudod karbantartani a weboldalat az elkészítés után?',
    answer:
      'Természetesen! Havi karbantartási csomagot is kínálok, amely tartalmazza a rendszeres frissítéseket, biztonsági mentéseket, teljesítménymonitoringot és kisebb módosítások elvégzését. Ezzel garantálom, hogy az oldalad mindig naprakész és biztonságos marad.',
  },
  {
    question: 'Kapok szerkesztési lehetőséget a weboldalamhoz?',
    answer:
      'Igen, ha szeretnél önállóan szerkeszteni, integrálok egy felhasználóbarát CMS rendszert (pl. Decap CMS, Sanity, vagy Directus), amellyel könnyen frissítheted a tartalmakat programozói tudás nélkül is.',
  },
  {
    question: 'Vállalsz webshop fejlesztést?',
    answer:
      'Igen, egyedi webshopokat fejlesztek Vue.js / Nuxt.js alapon, Stripe vagy Barion fizetési integrációval. Ha WooCommerce-t vagy Shopify-t szeretnél, azt is meg tudom oldani. Minden webshop mobilbarát, SEO-optimalizált és gyors betöltési sebességre hangolt.',
  },
  {
    question: 'Hogyan zajlik az együttműködés folyamata?',
    answer:
      '1. Ingyenes konzultáció (videóhívás vagy email). 2. Ajánlat és szerződés. 3. Design jóváhagyás. 4. Fejlesztés – heti visszajelzéssel. 5. Tesztelés és finomhangolás. 6. Indítás és átadás. A projekt során végig szoros kapcsolatban vagyunk, hogy az eredmény pontosan megfeleljen az elvárásaidnak.',
  },
  {
    question: 'Mi az, ha nem vagyok elégedett az eredménnyel?',
    answer:
      'Az elégedettséged az első! Minden projekt során több jóváhagyási kört biztosítok, hogy a végeredmény teljesen megfeleljen az elképzeléseidnek. Ha valamivel nem vagy megelégedve, addig dolgozom rajta, amíg nem leszel elégedett.',
  },
];
