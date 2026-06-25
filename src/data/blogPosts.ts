export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  emoji: string;
  content: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'miert-valassz-astro-keretrendszert-2025-ben',
    title: 'Miért érdemes Astro keretrendszert választani 2025-ben?',
    excerpt:
      'Az Astro forradalmian megváltoztatta a statikus weboldalak fejlesztését. Megmutatom, mikor érdemes választani és mik az előnyei a hagyományos megoldásokkal szemben.',
    category: 'Webfejlesztés',
    date: '2025. január 15.',
    dateISO: '2025-01-15',
    emoji: '🚀',
    readTime: '6 perc',
    content: `
<h2>Mi az az Astro?</h2>
<p>Az Astro egy modern statikus oldalgenerátor és webes keretrendszer, amely alapból nulla JavaScript-et küld a böngészőbe. Ez azt jelenti, hogy az oldalaid villámgyorsan töltődnek be, ami mind a felhasználói élménynek, mind a SEO-nak kiváló.</p>
<p>2021 óta folyamatosan fejlődik, és mára az egyik legnépszerűbb eszközzé vált a webfejlesztők körében – különösen tartalom-centrikus oldalakhoz, portfoliókhoz és marketingoldalakhoz.</p>

<h2>Az "Islands Architecture" – a titkos fegyver</h2>
<p>Az Astro kulcsjellemzője az úgynevezett "Island Architecture". Ahelyett, hogy az egész oldalt JavaScripttel renderelné (mint a React vagy Vue SPA-k), csak azokat az interaktív szigeteket küldi el JS-szel, amelyek valóban szükségesek.</p>
<p>Például egy blog oldalon a cikkek listája, a hero szekció, az about oldal – mind statikus HTML. Csak a kapcsolati form vagy egy animált számláló igényelhet JavaScript-et. Ez hatalmas teljesítménynövekedést jelent.</p>

<h2>Mikor válassz Astro-t?</h2>
<ul>
<li>Portfolió vagy bemutatkozó weboldal</li>
<li>Blog vagy dokumentációs oldal</li>
<li>Marketing landing page</li>
<li>E-commerce termékoldal (Shopify integráció)</li>
<li>Bármilyen tartalom-centrikus projekt</li>
</ul>

<h2>Lighthouse score – a valóság</h2>
<p>Az Astro-val készült oldalak rendszeresen 95-100 közötti Lighthouse score-t érnek el. Ez nem túlzás – az architektúra alapból erre optimalizált. A Core Web Vitals metrikák (LCP, CLS, FID) mind kiváló értékeket mutatnak.</p>

<h2>Vue, React, Svelte – mind működik</h2>
<p>Az Astro egyik legnagyobb előnye, hogy framework-agnosztikus. Használhatsz Vue, React, Svelte, Solid vagy Preact komponenseket – akár ugyanazon az oldalon belül. Ha már van meglévő komponenskönyvtárad, azt beillesztheted az Astro projektbe.</p>

<h2>Összefoglalás</h2>
<p>Ha gyors, SEO-barát weboldalt szeretnél minimális karbantartási igénnyel, az Astro kiváló választás 2025-ben. Különösen ajánlott portfoliókhoz, vállalkozói weboldalakhoz és blogokhoz, ahol a tartalom a király.</p>
<p>Kérdésed van? Vedd fel velem a kapcsolatot az <a href="/#contact">elérhetőségeimen</a>.</p>
    `,
  },
  {
    slug: 'vue-vs-react-melyiket-valassz-vallalkozasodnak',
    title: 'Vue.js vs React: melyiket válaszd vállalkozásodnak?',
    excerpt:
      'A két legnépszerűbb JavaScript keretrendszer összehasonlítása fejlesztői és üzleti szemszögből. Melyik a jobb választás a te projektednek?',
    category: 'Webfejlesztés',
    date: '2025. február 3.',
    dateISO: '2025-02-03',
    emoji: '⚡',
    readTime: '8 perc',
    content: `
<h2>A rövid válasz</h2>
<p>Ha kis- vagy közepes vállalkozás vagy, és nem akarsz fejlesztői csapatot felépíteni, mindkettő jó választás – de különböző helyzetekre. Vue.js könnyebben tanulható és karbantartható, React erősebb ökoszisztémával rendelkezik és több fejlesztő ismeri.</p>

<h2>Vue.js előnyei</h2>
<ul>
<li>Kisebb tanulási görbe – könnyebb bevezető</li>
<li>Kiváló dokumentáció, aktív közösség</li>
<li>Nuxt.js (Vue SSR/SSG) – kiváló SEO-hoz</li>
<li>Kevesebb boilerplate kód</li>
<li>Jól strukturált, olvasható kód</li>
</ul>

<h2>React előnyei</h2>
<ul>
<li>Hatalmas ökoszisztéma – minden könyvtár elérhető</li>
<li>Több fejlesztő ismeri – könnyebb csapatot találni</li>
<li>Next.js – az egyik legjobb SSR keretrendszer</li>
<li>Meta támogatás – stabil jövő</li>
<li>Több nagyvállalat használja</li>
</ul>

<h2>Mikor válassz Vue.js-t?</h2>
<p>Ha kis csapatban dolgozol, vagy egyedüli fejlesztőként, és gyors iterációt szeretnél, Vue.js kiváló választás. Különösen ajánlott, ha a backendeden PHP vagy Laravel fut (a Livewire és Inertia.js miatt).</p>

<h2>Mikor válassz React-ot?</h2>
<p>Ha nagy csapatban dolgozol, komplex alkalmazást építesz, vagy fontos, hogy sok fejlesztő ismerje a technológiát (pl. szoftvercégnél), React-ot érdemes választani. Next.js-szel párosítva kiváló SEO és teljesítmény érhető el.</p>

<h2>A döntés</h2>
<p>A legtöbb vállalkozásnak – különösen kis és közepes méretű projektekre – mindkettő megfelel. A fontos az, hogy a fejlesztő, akivel dolgozol, jól ismerje az adott technológiát, és az egész stack (frontend + backend) jól illeszkedjen egymáshoz.</p>
    `,
  },
  {
    slug: 'seo-alapok-kis-es-kozepvallalkozasoknak',
    title: 'SEO alapok kis- és középvállalkozásoknak 2025-ben',
    excerpt:
      'Hogyan optimalizáld weboldalad a keresőmotorokra anélkül, hogy havi 100 000 Ft-ot fizetnél SEO ügynökségnek? Praktikus tippek kezdőknek.',
    category: 'SEO',
    date: '2025. február 20.',
    dateISO: '2025-02-20',
    emoji: '🔍',
    readTime: '10 perc',
    content: `
<h2>Miért fontos a SEO 2025-ben?</h2>
<p>A Google továbbra is a legtöbb webforgalom forrása. Ha az oldalad nem jelenik meg a releváns keresésekre, komoly ügyfeleket veszítesz. A jó hír: az alapszintű SEO nem rocket science, és sok mindent meg tudsz oldani önállóan is.</p>

<h2>Az 5 legfontosabb technikai alap</h2>
<ul>
<li><strong>robots.txt és sitemap.xml</strong> – Segítsd a Google-t megtalálni az oldalaid</li>
<li><strong>Meta title és description</strong> – Minden oldalnak egyedi, kulcsszóban gazdag</li>
<li><strong>Canonical URL-ek</strong> – Elkerüld a duplikált tartalomból eredő büntetést</li>
<li><strong>HTTPS</strong> – Kötelező 2025-ben</li>
<li><strong>Mobilbarát design</strong> – A Google mobilból indexel először</li>
</ul>

<h2>Kulcsszókutatás – az alap</h2>
<p>Mielőtt bármit írnál, keresd meg, mire keresnek a potenciális ügyfeleid. Használd a Google Search Console-t, az Ubersuggest-et vagy a AnswerThePublic-ot ingyen. Fókuszálj long-tail kulcsszavakra ("weboldal készítés Budapest kis vállalkozásoknak" helyett csak "weboldal").</p>

<h2>Tartalom – a király</h2>
<p>A Google szereti a részletes, hasznos, hiteles tartalmakat. Írj legalább 500-800 szavas oldalakat, amelyek valóban választ adnak az olvasó kérdéseire. Rendszeres blogolás (havi 1-2 cikk) drasztikusan növelheti az organikus forgalmat 6-12 hónap után.</p>

<h2>Google Business Profile</h2>
<p>Ha helyi szolgáltatást nyújtasz, ez az egyik legjobb ingyen SEO eszköz. Hozd létre és tartsd naprakészen a Google Business Profile-odat: cím, nyitvatartás, fényképek, vélemények. Ezzel megjelenhetsz a "webfejlesztő Budapest" típusú helyi keresésekben a térkép szekcióban.</p>

<h2>Core Web Vitals</h2>
<p>A Google 2021 óta rangsorolási tényezőként veszi figyelembe az LCP-t, CLS-t és FID/INP-t. Röviden: az oldalad legyen gyors (LCP &lt; 2.5s), stabil (CLS &lt; 0.1) és interaktív (INP &lt; 200ms). Tesztelj a PageSpeed Insights-szal.</p>

<h2>Összefoglalás</h2>
<p>A SEO egy maraton, nem sprint. De ha elvégzed az alapokat (technikai SEO, kulcsszókutatás, minőségi tartalom), 3-6 hónap múlva már érezhető eredményeket láthatsz. Ha segítségre van szükséged, <a href="/#contact">írj nekem</a>!</p>
    `,
  },
  {
    slug: 'webshop-fejlesztes-woocommerce-vs-egyedi-megoldas',
    title: 'Webshop fejlesztés 2025: WooCommerce vs. egyedi megoldás',
    excerpt:
      'Melyik a jobb választás a webshopodnak: egy WordPress/WooCommerce alapú megoldás vagy egy teljesen egyedi fejlesztés? Átfogó összehasonlítás.',
    category: 'Webshop',
    date: '2025. március 10.',
    dateISO: '2025-03-10',
    emoji: '🛒',
    readTime: '9 perc',
    content: `
<h2>Egyedi fejlesztés vagy platformra épülő megoldás?</h2>
<p>Ez az egyik leggyakrabban feltett kérdés, amit az ügyfelektől kapok. A válasz attól függ, mekkora a webshopod, milyen speciális igényeid vannak, és mennyi a fejlesztési és karbantartási büdzsé.</p>

<h2>WooCommerce (WordPress) előnyei</h2>
<ul>
<li>Alacsonyabb induló költség</li>
<li>Könnyen kezelhető admin felület</li>
<li>Rengeteg plugin és bővítmény</li>
<li>Nagy fejlesztői közösség</li>
<li>Gyors bevezetés (2-4 hét)</li>
</ul>

<h2>WooCommerce hátrányai</h2>
<ul>
<li>Plugin függőség – biztonsági kockázatok</li>
<li>Teljesítmény-problémák nagyobb katalógusnál</li>
<li>Korlátozott testreszabhatóság</li>
<li>Rendszeres frissítések szükségesek</li>
<li>Hosting költség növekedhet</li>
</ul>

<h2>Egyedi fejlesztés előnyei</h2>
<ul>
<li>Teljes rugalmasság – minden egyedi igény megvalósítható</li>
<li>Kiváló teljesítmény és Core Web Vitals score</li>
<li>Nincs plugin függőség</li>
<li>Egyedi UX/UI – versenyképes megjelenés</li>
<li>Skálázható – növekedéssel együtt fejlődik</li>
</ul>

<h2>Mikor válassz WooCommerce-t?</h2>
<p>Ha kis webshopot indítasz (50-200 termék), szűkös a büdzsé, és gyorsan piacra szeretnél lépni – WooCommerce a praktikus választás. Különösen ajánlott, ha már van WordPress oldalad.</p>

<h2>Mikor érdemes egyedi fejlesztés?</h2>
<p>Ha 200+ termékkel indulsz, egyedi árképzési logikád van (pl. B2B), komplex szűrési és keresési igényeid vannak, vagy a piacon versenyelőnyt akarsz szerezni az UX-szel – akkor az egyedi fejlesztés megtérül.</p>

<h2>Összefoglalás</h2>
<p>Nincs egyértelmű győztes – mindkét megközelítésnek megvan a helye. A fontos az, hogy a választott megoldás illeszkedjen a vállalkozásod méretéhez, növekedési terveihez és büdzsédhez. Ingyenes konzultációmon segítek eldönteni, mi a legjobb megoldás neked.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
