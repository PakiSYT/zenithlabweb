/** Stałe witryny — tytuły, komunikaty; importowane z app.ts na każdej podstronie. */
export type ZenithPageId =
  | 'home'
  | 'print3d'
  | 'archmodels'
  | 'led'
  | 'engraving'
  | 'prototypes'
  | 'gadgets'
  | 'portfolio'
  | 'contact'
  | 'blog'
  | 'blog-material'
  | 'blog-archmodel'
  | 'blog-led-light'
  | 'blog-nfc'
  | 'blog-3dproto'
  | 'blog-glass'
  | 'not-found';

export const PAGE_TITLES: Record<ZenithPageId, string> = {
  home: 'Zenith Lab — makiety, laser CNC, grawer i druk 3D',
  print3d: 'Druk 3D i prototypy — Zenith Lab',
  archmodels: 'Makiety architektoniczne deweloperskie — Zenith Lab',
  led: 'Kasetony LED podświetlane — Zenith Lab',
  engraving: 'Grawer i cięcie laserem CNC — Zenith Lab',
  prototypes: 'Prototypy produktów — Zenith Lab',
  gadgets: 'Gadżety reklamowe z grawerem — Zenith Lab',
  portfolio: 'Realizacje — makiety, laser, LED, druk 3D — Zenith Lab',
  contact: 'Kontakt — wycena makiety, lasera, druku 3D — Zenith Lab',
  blog: 'Blog — materiały, laser CNC, makiety, LED — Zenith Lab',
  'blog-material': 'Drewno, sklejka czy plexi? Dobór materiału pod laser CNC — Zenith Lab',
  'blog-archmodel': 'Makieta architektoniczna: skala, detal, materiał — Zenith Lab',
  'blog-led-light': 'Jednolite podświetlenie LED w kaszetonie — Zenith Lab',
  'blog-nfc': 'Brelok NFC z grawerem — zastosowania i planowanie — Zenith Lab',
  'blog-3dproto': 'Druk 3D przed formą wtryskową — co sprawdzić — Zenith Lab',
  'blog-glass': 'Grawerowanie szkła laserem CO2 — efekty i ograniczenia — Zenith Lab',
  'not-found': '404 — Zenith Lab',
};

export const FORM_SUCCESS_MSG = '✓ Wysłano — dziękujemy!';
