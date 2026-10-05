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
  { id: 'arch', name: 'Architektúra & API', cap: '#3E68C4', side: '#2B4C93', legend: '#F4F6FF', ink: '#86A6F0' },
  { id: 'clean', name: 'Tiszta kód & OOP', cap: '#E9E2D0', side: '#B3AB96', legend: '#1A1826', ink: '#E9E2D0' },
  { id: 'data', name: 'Adat & backend', cap: '#7656D6', side: '#563BA6', legend: '#F6F2FF', ink: '#AE98F0' },
  { id: 'ui', name: 'UI & mozgás', cap: '#EF6A5B', side: '#B9483C', legend: '#1A1826', ink: '#F4887B' },
  { id: 'quality', name: 'Minőség & tesztelés', cap: '#57C26A', side: '#3B8F4B', legend: '#10231A', ink: '#74D486' },
  { id: 'tools', name: 'Eszközök & tapasztalat', cap: '#3A3A4C', side: '#24242F', legend: '#E6E4EE', ink: '#BDBBCB' },
];

export const intro = {
  label: 'Bemutatkozás',
  term: 'Szia,',
  story: 'Ádám Levente vagyok. Minden gomb mesél rólam valamit a szakmámról.',
};

export const stories: Record<string, Story> = {
  // AI & vibecoding
  V: { category: 'ai', term: 'Vibecoding', sub: 'VIBE', story: 'Vállalom: AI-jal iterálok gyorsan, de minden generált sort úgy olvasok, mint egy kolléga pull requestjét.' },
  P: { category: 'ai', term: 'Prompt', sub: 'PROMPT', story: 'Pontos kontextust adok az AI-nak: a jó kérdés fele a jó válasznak.' },
  W: { category: 'ai', term: 'Workflow', sub: 'FLOW', story: 'AI-eszközök napi szinten: kódolás, dokumentáció, ismeretlen könyvtárak gyors feltérképezése.' },
  Ő: { category: 'ai', term: 'Őszintén', sub: 'REVIEW', story: 'Az AI néha magabiztosan téved. Ezért nálam a review kötelező, nem opcionális.' },
  '0': { category: 'ai', term: 'Nulla vak sor', sub: '0', story: 'Amit az AI generál, azt sorról sorra elolvasom, mielőtt commitolom.' },
  Shift: { category: 'ai', term: 'Váltás', sub: 'ADAPT', story: 'A szakma folyamatosan vált: új eszköz, új modell, új keretrendszer. Az alkalmazkodás nálam napi gyakorlat.' },
  Escape: { category: 'ai', term: 'Kilépés a vibe-ból', sub: 'ESC', story: 'Ha az AI körbe-körbe visz, kilépek, és papíron gondolom végig a problémát.' },
  ContextMenu: { category: 'ai', term: 'Kontextus', sub: 'CONTEXT', story: 'Az AI-nak és a kollégának is pontosan elmondom, mit és miért kérek.' },
  ArrowRight: { category: 'ai', term: 'Következő lépés', sub: 'NEXT', story: 'Mindig tanulok valami újat: ma GSAP, holnap egy új adatbázis-minta.' },

  // Architektúra & API
  A: { category: 'arch', term: 'API-dizájn', sub: 'API', story: 'Előbb azt írom le, ki és hogyan hívja, csak utána az implementációt.' },
  H: { category: 'arch', term: 'Hibakezelés', sub: 'ERROR', story: 'Egy jó API érthető hibát ad vissza, nem egy 500-ast és csendet.' },
  Á: { category: 'arch', term: 'Állapotkezelés', sub: 'STATE', story: 'Tudom, hol él az adat, ki módosíthatja, és mikor frissül a felület.' },
  '3': { category: 'arch', term: 'Három réteg', sub: 'LAYERS', story: 'Megjelenítés, üzleti logika, adatelérés: külön tartom őket, hogy egyik se rántsa magával a másikat.' },
  ',': { category: 'arch', term: 'Laza csatolás', sub: ',', story: 'Egy rendszer jól elválasztott részek felsorolása, nem egyetlen végtelen mondat.' },
  F6: { category: 'arch', term: 'URL-dizájn', sub: 'URL', story: 'Az URL is felület: legyen beszédes, megosztható, és ne törjön el egy átnevezés után.' },
  Pause: { category: 'arch', term: 'Szünet', sub: 'THINK', story: 'Rendszertervezés előtt megállok: előbb gondolkodom, aztán gépelek.' },
  End: { category: 'arch', term: 'Határok', sub: 'BOUNDS', story: 'Tudom, hol ér véget egy modul felelőssége, és hol kezdődik a következőé.' },
  ArrowUp: { category: 'arch', term: 'Skálázás', sub: 'SCALE', story: 'Úgy tervezek, hogy tízszer ennyi felhasználónál se a séma legyen a szűk keresztmetszet.' },
  ArrowDown: { category: 'arch', term: 'Visszafelé kompatibilis', sub: 'COMPAT', story: 'Az API-t verziózom: egy új funkció nem törheti el a régi klienseket.' },
  Alt: { category: 'arch', term: 'Alternatíva', sub: 'ALT', story: 'Két megoldást mérlegelek, mielőtt egyet választok, és le is írom, miért.' },

  // Tiszta kód & OOP
  C: { category: 'clean', term: 'Clean Code', sub: 'CLEAN', story: 'Beszédes nevek, kis függvények: a kódot többször olvassák, mint írják.' },
  O: { category: 'clean', term: 'OOP', sub: 'OOP', story: 'Nem öröklési láncok, hanem jól húzott határok: minden osztálynak egy felelőssége van.' },
  I: { category: 'clean', term: 'Interfész', sub: 'IFACE', story: 'Konkrét függőségek helyett szerződésekre építek, így bármelyik rész cserélhető.' },
  R: { category: 'clean', term: 'Refaktor', sub: 'REFAC', story: 'Kis lépésekben, tesztekkel a hátam mögött: működő kódot teszek jobbá, nem írom újra.' },
  Ö: { category: 'clean', term: 'Kompozíció', sub: 'COMPOSE', story: 'Öröklés helyett kompozíció: kisebb, összerakható darabok, kevesebb meglepetés.' },
  Ú: { category: 'clean', term: 'Újrahasznosítás', sub: 'DRY', story: 'Amit kétszer leírok, azt harmadszorra kiemelem.' },
  Y: { category: 'clean', term: 'YAGNI', sub: 'YAGNI', story: 'Nem építek olyat, amire még nincs szükség: az egyszerű megoldás a legjobb bővíthető alap.' },
  '7': { category: 'clean', term: '7 ± 2', sub: '7±2', story: 'Ennyi dolgot tart fejben az ember, ezért rövid függvényeket írok, nem regényeket.' },
  '9': { category: 'clean', term: 'Hétfő 9:00', sub: '9', story: 'Akkor is értenem kell a pénteken írt kódomat. Ezért írom olvashatóra.' },
  '.': { category: 'clean', term: 'Pont', sub: '.', story: 'Egy függvény, egy feladat. Pont.' },
  Backspace: { category: 'clean', term: 'Törlés', sub: 'DEL', story: 'Kódot törölni is mesterség: a legkevesebb kód a legkevesebb hiba.' },
  CapsLock: { category: 'clean', term: 'KONSTANS', sub: 'CAPS', story: 'NEM KIABÁLOK A KÓDBAN. KIVÉVE A KONSTANSOKAT: MAX_RETRY_COUNT.' },
  F2: { category: 'clean', term: 'Átnevezés', sub: 'RENAME', story: 'Egy jó név fél dokumentáció. Ha rossz, átnevezem, akár ötödszörre is.' },
  F3: { category: 'clean', term: 'Keresés', sub: 'FIND', story: 'Mielőtt új kódot írok, megnézem, nincs-e már rá megoldás a kódbázisban.' },
  F7: { category: 'clean', term: 'Lint', sub: 'LINT', story: 'Linter és formatter minden projektben: a stílusról ne review-n vitatkozzunk.' },

  // Adat & backend
  S: { category: 'data', term: 'Supabase', sub: 'SUPA', story: 'Postgres, Auth és Row Level Security: az adatot az adatbázis védi, nem csak a frontend.' },
  Q: { category: 'data', term: 'Query', sub: 'SQL', story: 'Az SQL nálam nem varázslat: értem, mit csinál egy JOIN, és miért kell index.' },
  B: { category: 'data', term: 'Backend', sub: 'BACK', story: 'Node.js és Supabase: a frontend pontosan azt kapja, amire szüksége van.' },
  N: { category: 'data', term: 'Node.js', sub: 'NODE', story: 'Ebben kötöm össze a külső szolgáltatásokat, és ebben írom a szerveroldali logikát.' },
  M: { category: 'data', term: 'Migráció', sub: 'MIGRATE', story: 'Az adatbázis-séma is verziókezelt kód, nem kézzel kattintgatott táblák.' },
  Insert: { category: 'data', term: 'INSERT', sub: 'INSERT', story: 'Beírás előtt validálok: ami rossz adatként bekerül az adatbázisba, az már mindenki hibája.' },
  Delete: { category: 'data', term: 'DELETE', sub: 'DELETE', story: 'Törlés csak WHERE-rel, tranzakcióban, mentéssel a háttérben.' },
  PageDown: { category: 'data', term: 'Lapozás', sub: 'PAGE', story: 'Ezer sort nem küldök le egyszerre: a lapozás és a szűrés a szerveren történik, nem a böngészőben.' },
  AltGraph: { category: 'data', term: 'UTF-8', sub: 'Ő Ű', story: 'Magyar fejlesztő vagyok: az ékezetes adat nálam UTF-8, és soha nem lesz belőle kérdőjel.' },

  // UI & mozgás
  G: { category: 'ui', term: 'GSAP', sub: 'GSAP', story: 'Ez a billentyűzet is ezzel mozog: csak transform és opacity, hogy 60 fps maradjon.' },
  L: { category: 'ui', term: 'Lenis', sub: 'LENIS', story: 'Sima görgetés, ami nem harcol a böngészővel: a mozgás segítsen, ne zavarjon.' },
  F: { category: 'ui', term: 'Frontend', sub: 'FRONT', story: 'Reszponzív, akadálymentes felület, ami mobilon ugyanúgy működik, mint asztalon.' },
  K: { category: 'ui', term: 'Komponens', sub: 'COMP', story: 'Újrahasznosítható, egy feladatra fókuszáló UI-darabok, mint ennek az Astro-oldalnak az elemei.' },
  U: { category: 'ui', term: 'Mikrointerakció', sub: 'UX', story: 'A gomb, ami megnyomva besüllyed, azt mondja: értettem. A mozgás visszajelzés, nem dísz.' },
  Ű: { category: 'ui', term: 'Űrlap', sub: 'FORM', story: 'Validáció kliens- és szerveroldalon is: a felhasználó tévedhet, az adatbázis nem.' },
  F10: { category: 'ui', term: 'Navigáció', sub: 'NAV', story: 'Egy jó menü három kattintáson belül mindenhová elvisz.' },
  F11: { category: 'ui', term: 'Reszponzív', sub: '320PX', story: 'Teljes képernyőn és 320 pixelen is működjön: a layoutot a legkisebb kijelzőn kezdem.' },
  F12: { category: 'ui', term: 'DevTools', sub: 'DEV', story: 'A második otthonom: Network, Performance, Lighthouse. Itt derül ki, mi lassú valójában.' },
  ScrollLock: { category: 'ui', term: 'Görgetés', sub: 'SCROLL', story: 'A görgetést nem veszem el a látogatótól: a Lenis kiegészíti, nem felülírja.' },
  Home: { category: 'ui', term: 'Kezdőlap', sub: 'HOME', story: 'Az első benyomás: gyorsan töltődjön be, és első pillantásra legyen érthető.' },

  // Minőség & tesztelés
  T: { category: 'quality', term: 'Tesztelés', sub: 'TEST', story: 'Szoftvertesztelőnek is tanulok: funkcionális és kézi teszt, tesztdokumentáció, reprodukálható hibajegyek.' },
  E: { category: 'quality', term: 'Egységteszt', sub: 'UNIT', story: 'A legkisebb részeket külön ellenőrzöm, hogy az egész megbízható legyen.' },
  D: { category: 'quality', term: 'Debug', sub: 'DEBUG', story: 'Előbb reprodukálom a hibát, aztán javítom. Különben csak tippelek.' },
  Z: { category: 'quality', term: 'Zöld', sub: 'GREEN', story: 'Amíg nem fut le minden teszt, nem megy élesbe.' },
  Ó: { category: 'quality', term: 'Ó, egy bug!', sub: 'BUG', story: 'Örülök neki: jobb most megtalálni, mint a felhasználónál.' },
  '2': { category: 'quality', term: 'Két szerep', sub: 'DEV+QA', story: 'Fejlesztőként építek, tesztelőként keresem, hol törik el.' },
  '4': { category: 'quality', term: 'Négy szem', sub: 'REVIEW', story: 'Négy szem többet lát: a code review nálam nem formalitás.' },
  '8': { category: 'quality', term: '80/20', sub: '80/20', story: 'A hibák nagy része a kód kis részében lakik, ezért oda írom a legtöbb tesztet.' },
  '-': { category: 'quality', term: 'Mínusz', sub: '−', story: 'A legjobb pull requestem több sort töröl, mint amennyit hozzáad.' },
  F4: { category: 'quality', term: 'Lezárás', sub: 'DONE', story: 'Egy feladat akkor kész, ha tesztelve és dokumentálva van, nem amikor „nagyjából megy”.' },
  F8: { category: 'quality', term: 'Lépésenként', sub: 'STEP', story: 'Debuggerben lépésenként megyek végig a kódon. A console.log csak az első tipp.' },
  PrintScreen: { category: 'quality', term: 'Képernyőkép', sub: 'SHOT', story: 'Egy jó hibajegyben van képernyőkép, lépések és elvárt eredmény. Különben nem reprodukálható.' },

  // Eszközök & tapasztalat
  '1': { category: 'tools', term: 'Egy valós ügyfél', sub: 'CLIENT', story: 'A Laguna Lovasklub weboldala: a tervezéstől a fejlesztésen át az élesítésig én vittem végig.' },
  Ü: { category: 'tools', term: 'Ügyfél', sub: 'BRIEF', story: 'A Laguna Lovasklubnál tanultam meg, hogy a specifikáció már az első beszélgetéssel elkezdődik.' },
  '5': { category: 'tools', term: 'Öt év', sub: '5Y', story: 'Informatikai képzés a TSZC Bánki Donát – Péch Antal Technikumban, szoftverfejlesztő és -tesztelő szakirányon.' },
  '6': { category: 'tools', term: '6+ nyelv', sub: 'LANG', story: 'JavaScript, Python, Java, SQL, PHP, C++: nem a nyelv a lényeg, hanem a gondolkodás alatta.' },
  J: { category: 'tools', term: 'Java & JavaScript', sub: 'JS/JAVA', story: 'JavaScript a weben, Java IntelliJ-ben: két nyelv, ugyanaz a szemlélet.' },
  É: { category: 'tools', term: 'Élesítés', sub: 'DEPLOY', story: 'Git push, Vercel build, CI/CD: a deploy nálam nem izgalmas pillanat, hanem rutin.' },
  Í: { category: 'tools', term: 'Írott dokumentáció', sub: 'DOCS', story: 'README, tesztdokumentáció, commit üzenet: a jövőbeli énemnek írom.' },
  X: { category: 'tools', term: 'XAMPP', sub: 'XAMPP', story: 'Itt kezdtem: PHP, MySQL, localhost. Azóta felhőben futnak a projektjeim, de az alapok onnan jönnek.' },
  Tab: { category: 'tools', term: 'Tab vagy szóköz?', sub: 'TAB', story: 'Nem vitatkozom rajta: a Prettier eldönti, a csapat pedig dolgozik.' },
  Enter: { category: 'tools', term: 'Enter', sub: 'RUN', story: 'Itt hagyja el a kód a gépemet, ezért előtte mindig lefut a lint és a teszt.' },
  F1: { category: 'tools', term: 'Súgó', sub: 'HELP', story: 'Előbb a dokumentációt olvasom el, csak utána kérdezek. Az AI-tól is.' },
  F5: { category: 'tools', term: 'Frissítés', sub: 'RELOAD', story: 'Hot reload, gyors visszajelzés: minél rövidebb a kör a változtatás és az eredmény között, annál jobb a kód.' },
  F9: { category: 'tools', term: 'Build', sub: 'BUILD', story: 'Minden commit után lefut a build. Ha piros, az a legfontosabb feladat.' },
  PageUp: { category: 'tools', term: 'Verzióváltás', sub: 'UPGRADE', story: 'Függőséget frissítek? Előbb elolvasom a changelogot, aztán futtatom a teszteket.' },
  ArrowLeft: { category: 'tools', term: 'Rollback', sub: 'BACK', story: 'Minden deploynak van visszaútja: ha baj van, egy lépés vissza.' },
  Control: { category: 'tools', term: 'Ctrl+Z', sub: 'UNDO', story: 'A Git a biztonsági hálóm: kis commitok, beszédes üzenetek, bármikor visszaléphetek.' },
  Meta: { category: 'tools', term: 'Környezet', sub: 'OS', story: 'Windows, Linux, terminál: a fejlesztői környezetemet magam állítom be, és értem, mi fut rajta.' },

  // Space: the signature key
  Space: { category: 'ai', term: 'Ádám Levente', sub: 'ÁDÁM LEVENTE', story: 'Szoftverfejlesztő és tesztelő. AI-jal gyorsan dolgozom, mérnöki alapokkal megbízhatóan.' },
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

/** "Mesélj tovább" order: one highlight per category first, then everything else in layout order. */
const highlights = ['Space', 'V', 'A', 'C', 'S', 'G', 'T', '1'];

export const tourOrder: string[] = [
  ...highlights,
  ...[...new Set(keys.map((k) => k.content))].filter((c) => !highlights.includes(c)),
];
