import shellTop from './partials/shell-top.html?raw';
import footer from './partials/footer.html?raw';
import pageHome from './pages/home.html?raw';
import pagePrint3d from './pages/print3d.html?raw';
import pageArchmodels from './pages/archmodels.html?raw';
import pageLed from './pages/led.html?raw';
import pageEngraving from './pages/engraving.html?raw';
import pagePrototypes from './pages/prototypes.html?raw';
import pageGadgets from './pages/gadgets.html?raw';
import pagePortfolio from './pages/portfolio.html?raw';
import pageContact from './pages/contact.html?raw';
import pageBlog from './pages/blog.html?raw';
import pageBlogMaterial from './pages/blog-material.html?raw';
import pageBlogArchmodel from './pages/blog-archmodel.html?raw';
import pageBlogLedLight from './pages/blog-led-light.html?raw';
import pageBlogNfc from './pages/blog-nfc.html?raw';
import pageBlog3dproto from './pages/blog-3dproto.html?raw';
import pageBlogGlass from './pages/blog-glass.html?raw';
import page404 from './pages/404.html?raw';

import { FORM_SUCCESS_MSG, PAGE_TITLES, type ZenithPageId } from './site-meta';

const STATIC_IMAGE_URLS: Record<string, string> = (() => {
  const imports = import.meta.glob('../img/**/*.{jpg,jpeg,png,svg}', { eager: true, as: 'url' });
  return Object.fromEntries(
    Object.entries(imports).flatMap(([file, url]) => {
      const normalized = file.replace(/\\/g, '/').replace(/^(\.\.\/)+/, '');
      const entries: Array<[string, string]> = [[normalized, url as string]];
      if (normalized.startsWith('img/')) {
        entries.push([`../${normalized}`, url as string]);
      }
      return entries;
    })
  );
})();

function resolveStaticImageUrl(src: string): string {
  return (
    STATIC_IMAGE_URLS[src] ??
    STATIC_IMAGE_URLS[`../${src}`] ??
    STATIC_IMAGE_URLS[src.replace(/^\.\/?/, '')] ??
    src
  );
}

function resolveStaticUrlsInHtml(html: string): string {
  return html.replace(/(src|data-imgs)=("|')([^"']+?)(\2)/g, (match, attr, quote, value) => {
    if (attr === 'src' && value.startsWith('img/')) {
      return `${attr}=${quote}${resolveStaticImageUrl(value)}${quote}`;
    }
    if (attr === 'data-imgs') {
      try {
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed)) return match;
        const resolved = parsed.map((item: unknown) => (typeof item === 'string' ? resolveStaticImageUrl(item) : item));
        return `${attr}=${quote}${JSON.stringify(resolved)}${quote}`;
      } catch {
        return match;
      }
    }
    return match;
  });
}

const MAIN_CONTAINER_ID = 'zenith-main';

const PAGE_HTML: Record<ZenithPageId, string> = {
  home: pageHome,
  print3d: pagePrint3d,
  archmodels: pageArchmodels,
  led: pageLed,
  engraving: pageEngraving,
  prototypes: pagePrototypes,
  gadgets: pageGadgets,
  portfolio: pagePortfolio,
  contact: pageContact,
  blog: pageBlog,
  'blog-material': pageBlogMaterial,
  'blog-archmodel': pageBlogArchmodel,
  'blog-led-light': pageBlogLedLight,
  'blog-nfc': pageBlogNfc,
  'blog-3dproto': pageBlog3dproto,
  'blog-glass': pageBlogGlass,
  'not-found': page404,
};

declare global {
  interface Window {
    closeMobileNav: () => void;
    handleFormSubmit: (btn: HTMLButtonElement) => void;
    navigatePage: (id: ZenithPageId) => void;
  }
}

function currentPageId(): ZenithPageId {
  const raw = document.documentElement.dataset.zenithPage;
  if (raw === 'not-found') return 'not-found';
  if (raw && raw in PAGE_HTML) return raw as ZenithPageId;
  return 'home';
}

function pageIdFromHash(): ZenithPageId | null {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return null;
  if (hash in PAGE_HTML) return hash as ZenithPageId;
  return null;
}

function pageIdFromHref(href: string | null): ZenithPageId | null {
  if (!href) return null;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return null;
  if (!href.endsWith('.html')) return null;
  const base = href.replace(/\\/g, '/').split('/').pop() ?? href;
  const name = base.replace(/\.html$/, '');
  if (name === 'index') return 'home';
  if (name === '404') return 'not-found';
  if (name in PAGE_HTML) return name as ZenithPageId;
  return null;
}

function mountLayoutIfNeeded(): void {
  if (document.getElementById(MAIN_CONTAINER_ID)) return;

  const initial = pageIdFromHash() ?? currentPageId();
  document.body.insertAdjacentHTML(
    'afterbegin',
    shellTop + `<div id="${MAIN_CONTAINER_ID}"></div>` + footer
  );

  navigatePage(initial);
}

function initNavActive(page: ZenithPageId): void {
  const inServicesSub =
    page === 'print3d' ||
    page === 'archmodels' ||
    page === 'led' ||
    page === 'engraving' ||
    page === 'prototypes' ||
    page === 'gadgets';

  document.querySelectorAll('#nav .nav-links a[data-n]').forEach((a) => {
    a.classList.remove('active');
    const n = a.getAttribute('data-n');
    if (n === page) a.classList.add('active');
    if (n === 'services' && inServicesSub) a.classList.add('active');
  });
}

function closeMobileNav(): void {
  document.getElementById('mobile-nav')?.classList.remove('open');
}

function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.page .reveal:not(.visible)');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target instanceof HTMLElement) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

function animateCountersForPage(page: ZenithPageId): void {
  if (page !== 'home') return;
  const counters: { id: string; target: number; duration: number }[] = [
    { id: 'c1', target: 127, duration: 1800 },
    { id: 'c2', target: 6, duration: 1400 },
    { id: 'c3', target: 15, duration: 1600 },
  ];
  counters.forEach(({ id, target, duration }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const node = el;
    const start = performance.now();
    function tick(now: number): void {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      node.textContent = String(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function handleFormSubmit(btn: HTMLButtonElement): void {
  btn.disabled = true;
  btn.innerHTML = FORM_SUCCESS_MSG;
  btn.style.background = '#1a4a00';
  btn.style.cursor = 'default';
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hide');
  }, 1800);
});

window.addEventListener(
  'scroll',
  () => {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

// Obsługuje filtrowanie kart portfolio + ukrywanie niepassujących itemów
function setupPortfolioFiltersDelegated(): void {
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    const btn = t?.closest<HTMLElement>('#page-portfolio .filter-btn');
    if (!btn) return;
    document.querySelectorAll<HTMLElement>('#page-portfolio .filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    if (!filter) return;
    document.querySelectorAll<HTMLElement>('#pf-grid .portfolio-item').forEach((item) => {
      const match = filter === 'all' || item.dataset.filter === filter;
      item.style.display = match ? '' : 'none';
    });
  });
}

/** Dane lightboxa — zsynchronizuj z kartami (data-project) w portfolio.html */
type PortfolioLbProject = { cat: string; title: string; desc: string; photos: string[] };

const PORTFOLIO_LB_PROJECTS: PortfolioLbProject[] = [
  {
    cat: 'Figurki 3D · model',
    title: 'Figurki 3D',
    desc: 'Druk 3D z ręcznym wykończeniem',
    photos: ['img/portfolio/orzel.jpg', 'img/portfolio/hero-background.jpg', 'img/portfolio/figurka.jpg'],
  },
  {
    cat: 'Gadżety · merch',
    title: 'Magnesy personalizowane',
    desc: 'Seria personalizowana dla klienta',
    photos: ['img/portfolio/magnes.jpg'],
  },
  {
    cat: 'Grawer · drewno',
    title: 'Stolik z grawerem laserowym',
    desc: 'Grawer dekoracyjny, drewno naturalne',
    photos: ['img/portfolio/stolik grawer.jpg'],
  },
  {
    cat: 'Kaseton LED',
    title: 'Logo podświetlane — recepcja',
    desc: 'Równomierne światło, kolor z brand booka',
    photos: ['img/portfolio/polexpert.jpg', 'img/portfolio/image0 (14).jpg'],
  },
  {
    cat: 'Makieta · deweloper',
    title: 'Zagospodarowanie terenu, osiedle mieszkaniowe',
    desc: 'Prezentacja inwestycji w biurze sprzedaży',
    photos: ['img/portfolio/makietaaglowne.jpeg', 'img/portfolio/makietaa.jpeg', 'img/portfolio/makietaa2.jpeg', 'img/portfolio/makietaa3.jpeg', 'img/portfolio/makietaa4.jpeg', 'img/portfolio/makietaa5.jpeg', 'img/portfolio/makieta architektoniczna 2.jpeg', 'img/portfolio/makieta architektoniczna.jpeg', 'img/portfolio/makieta architektoniczna 3.jpeg'],
  },
  {
    cat: 'Prototyp · gadżet',
    title: 'Lampka nocna, obudowa głosnika',
    desc: 'Prototyp funkcjonalny z elementami docelowymi, do testów użytkowych',
    photos: ['img/portfolio/lampka nocna.jpeg', 'img/portfolio/obudowa glosnik.jpeg', 'img/portfolio/obudowa glosnik2.jpeg'],
  },
  {
    cat: 'Deski grawerowane · kuchnia',
    title: 'Deski do krojenia z personalizowanym grawerem',
    desc: 'Drewno, laser CNC',
    photos: ['img/portfolio/deska wosp.jpeg', 'img/portfolio/grawer.jpg'],
  },
];

const RESOLVED_PORTFOLIO_LB_PROJECTS: PortfolioLbProject[] = PORTFOLIO_LB_PROJECTS.map((project) => ({
  ...project,
  photos: project.photos.map(resolveStaticImageUrl),
}));

const portfolioLbState = {
  project: null as PortfolioLbProject | null,
  photo: 0,
};

function portfolioLbRevealOpen(zlb: HTMLElement): void {
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      zlb.classList.add('is-open');
    });
  });
}

function portfolioLbOpen(idx: number): void {
  const p = RESOLVED_PORTFOLIO_LB_PROJECTS[idx];
  if (!p?.photos.length) return;
  const zlb = document.getElementById('zlb');
  const track = document.getElementById('zlb-track');
  const thumbs = document.getElementById('zlb-thumbs');
  const catEl = document.getElementById('zlb-cat');
  const titleEl = document.getElementById('zlb-title');
  const descEl = document.getElementById('zlb-desc');
  const counter = document.getElementById('zlb-counter');
  if (!zlb || !track || !thumbs || !catEl || !titleEl || !descEl || !counter) return;

  portfolioLbState.project = p;
  portfolioLbState.photo = 0;
  catEl.textContent = p.cat;
  titleEl.textContent = p.title;
  descEl.textContent = p.desc;
  track.innerHTML = '';
  thumbs.innerHTML = '';
  p.photos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title;
    if (i === 0) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
    } else {
      img.loading = 'lazy';
    }
    if (i === 0) img.classList.add('zactive');
    track.appendChild(img);
    const th = document.createElement('div');
    th.className = 'zlb-thumb' + (i === 0 ? ' zactive' : '');
    th.tabIndex = 0;
    const ti = document.createElement('img');
    ti.src = src;
    ti.alt = '';
    ti.loading = i === 0 ? 'eager' : 'lazy';
    th.appendChild(ti);
    const j = i;
    th.addEventListener('click', () => portfolioLbGoTo(j));
    thumbs.appendChild(th);
  });
  portfolioLbUpdateCounter(counter);
  const single = p.photos.length <= 1;
  const prev = document.getElementById('zlb-prev');
  const next = document.getElementById('zlb-next');
  if (prev) prev.style.display = single ? 'none' : '';
  if (next) next.style.display = single ? 'none' : '';

  const first = track.querySelector('img');
  const reveal = () => portfolioLbRevealOpen(zlb);
  if (first && 'decode' in first) {
    (first as HTMLImageElement).decode().then(reveal).catch(reveal);
  } else {
    reveal();
  }
}

function portfolioLbClose(): void {
  document.getElementById('zlb')?.classList.remove('is-open');
  document.body.style.overflow = '';
  portfolioLbState.project = null;
}

function portfolioLbUpdateCounter(counterEl: HTMLElement): void {
  const p = portfolioLbState.project;
  if (!p) return;
  counterEl.textContent = `${portfolioLbState.photo + 1} / ${p.photos.length}`;
}

function portfolioLbGoTo(idx: number): void {
  const p = portfolioLbState.project;
  if (!p) return;
  const track = document.getElementById('zlb-track');
  const thumbs = document.getElementById('zlb-thumbs');
  const counter = document.getElementById('zlb-counter');
  if (!track || !thumbs || !counter) return;
  const imgs = track.querySelectorAll('img');
  const ths = thumbs.querySelectorAll('.zlb-thumb');
  const total = p.photos.length;
  if (!total || !imgs.length) return;
  imgs[portfolioLbState.photo]?.classList.remove('zactive');
  ths[portfolioLbState.photo]?.classList.remove('zactive');
  portfolioLbState.photo = ((idx % total) + total) % total;
  imgs[portfolioLbState.photo]?.classList.add('zactive');
  ths[portfolioLbState.photo]?.classList.add('zactive');
  ths[portfolioLbState.photo]?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  portfolioLbUpdateCounter(counter);
}

/**
 * Skrypty w HTML wstrzykiwanym przez innerHTML się nie uruchamiają — lightbox musi żyć w bundlu.
 * Delegacja na document: działa po każdym navigatePage.
 */
let portfolioLbDelegated = false;

function setupPortfolioLightboxDelegated(): void {
  if (portfolioLbDelegated) return;
  portfolioLbDelegated = true;

  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    const trigger = t?.closest('#page-portfolio .pf-card-trigger');
    if (trigger) {
      const item = trigger.closest('.portfolio-item');
      if (!item) return;
      const idx = parseInt(item.getAttribute('data-project') ?? '', 10);
      if (Number.isNaN(idx)) return;
      e.preventDefault();
      e.stopPropagation();
      portfolioLbOpen(idx);
      return;
    }

    const zlb = document.getElementById('zlb');
    if (!zlb?.classList.contains('is-open')) return;

    if (t?.closest('#zlb-bg')) {
      portfolioLbClose();
      return;
    }
    if (t?.closest('#zlb-close')) {
      portfolioLbClose();
      return;
    }
    if (t?.closest('#zlb-prev')) {
      portfolioLbGoTo(portfolioLbState.photo - 1);
      return;
    }
    if (t?.closest('#zlb-next')) {
      portfolioLbGoTo(portfolioLbState.photo + 1);
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    const zlb = document.getElementById('zlb');
    if (!zlb?.classList.contains('is-open')) return;
    if (e.key === 'Escape') portfolioLbClose();
    if (e.key === 'ArrowLeft') portfolioLbGoTo(portfolioLbState.photo - 1);
    if (e.key === 'ArrowRight') portfolioLbGoTo(portfolioLbState.photo + 1);
  });
}

/** Po każdym wstrzyknięciu portfolio — nowe #zlb-stage wymaga świeżych listenerów touch. */
function wirePortfolioLightboxTouch(): void {
  const stage = document.getElementById('zlb-stage');
  if (!stage) return;
  let touchX: number | null = null;
  stage.addEventListener(
    'touchstart',
    (e) => {
      touchX = e.touches[0]?.clientX ?? null;
    },
    { passive: true }
  );
  stage.addEventListener(
    'touchend',
    (e) => {
      if (touchX === null) return;
      const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
      if (Math.abs(dx) > 48) portfolioLbGoTo(portfolioLbState.photo + (dx < 0 ? 1 : -1));
      touchX = null;
    },
    { passive: true }
  );
}

function initCursorRing(): void {
  const ring = document.getElementById('cursor-ring');
  if (!ring) return;
  const ringEl = ring;
  let mx = 0;
  let my = 0;
  let cx = 0;
  let cy = 0;
  let shown = false;
  document.addEventListener(
    'mousemove',
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        ringEl.style.opacity = '1';
        shown = true;
      }
    },
    { passive: true }
  );
  document.addEventListener('mouseleave', () => {
    ringEl.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    if (shown) ringEl.style.opacity = '1';
  });
  function animateCursor(): void {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    ringEl.style.left = cx + 'px';
    ringEl.style.top = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverSel =
    'a,button,.service-card,.work-card,.pricing-card,.portfolio-item,.blog-card,.testi-card,.nav-item-dropdown';

  document.addEventListener('mouseover', (e) => {
    const el = (e.target as HTMLElement | null)?.closest(hoverSel);
    if (!el) return;
    ringEl.style.width = '36px';
    ringEl.style.height = '36px';
    ringEl.style.borderColor = 'rgba(200,255,87,0.7)';
  });

  document.addEventListener('mouseout', (e) => {
    const rel = e.relatedTarget as HTMLElement | null;
    const stillHovering = rel?.closest?.(hoverSel);
    if (stillHovering) return;
    ringEl.style.width = '20px';
    ringEl.style.height = '20px';
    ringEl.style.borderColor = 'var(--accent)';
  });
}

function navigatePage(id: ZenithPageId): void {
  const mainEl = document.getElementById(MAIN_CONTAINER_ID);
  if (!mainEl) return;

  const safe = PAGE_HTML[id] ? id : 'not-found';

  document.documentElement.dataset.zenithPage = safe;
  window.location.hash = safe === 'home' ? '' : `#${safe}`;

  mainEl.innerHTML = resolveStaticUrlsInHtml(PAGE_HTML[safe] ?? PAGE_HTML['not-found']);
  document.title = PAGE_TITLES[safe] ?? PAGE_TITLES['not-found'];

  initNavActive(safe);
  initReveal();
  if (safe === 'portfolio') wirePortfolioLightboxTouch();
  setTimeout(() => animateCountersForPage(safe), 600);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.navigatePage = navigatePage;

/* ── SERVICE IMAGE LIGHTBOX ── */
const svcLbState = { photos: [] as string[], idx: 0 };

function getSvcLb(): HTMLElement {
  let el = document.getElementById('svc-lb');
  if (!el) {
    el = document.createElement('div');
    el.id = 'svc-lb';
    el.className = 'svc-lb';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      '<div class="svc-lb-bg" id="svc-lb-bg"></div>' +
      '<div class="svc-lb-shell">' +
        '<div class="svc-lb-stage" id="svc-lb-stage">' +
          '<div class="svc-lb-track" id="svc-lb-track"></div>' +
          '<button class="svc-lb-arrow svc-lb-prev" id="svc-lb-prev" aria-label="Poprzednie">&#8592;</button>' +
          '<button class="svc-lb-arrow svc-lb-next" id="svc-lb-next" aria-label="Następne">&#8594;</button>' +
          '<button class="svc-lb-close" id="svc-lb-close" aria-label="Zamknij">&#x2715;</button>' +
          '<div class="svc-lb-counter" id="svc-lb-counter"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);
    el.querySelector('#svc-lb-bg')?.addEventListener('click', svcLbClose);
    el.querySelector('#svc-lb-close')?.addEventListener('click', svcLbClose);
    el.querySelector('#svc-lb-prev')?.addEventListener('click', () => svcLbGo(svcLbState.idx - 1));
    el.querySelector('#svc-lb-next')?.addEventListener('click', () => svcLbGo(svcLbState.idx + 1));
  }
  return el;
}

function svcLbOpen(photos: string[], start = 0): void {
  svcLbState.photos = photos;
  svcLbState.idx = start;
  const el = getSvcLb();
  const track = document.getElementById('svc-lb-track');
  if (track) {
    track.innerHTML = '';
    photos.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = i === 0 ? 'eager' : 'lazy';
      if (i === 0) img.classList.add('svc-active');
      track.appendChild(img);
    });
  }
  svcLbCounter();
  svcLbToggleArrows();
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-open')));
}

function svcLbClose(): void {
  document.getElementById('svc-lb')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

function svcLbGo(idx: number): void {
  const total = svcLbState.photos.length;
  const next = ((idx % total) + total) % total;
  const track = document.getElementById('svc-lb-track');
  if (track) {
    const imgs = track.querySelectorAll('img');
    imgs[svcLbState.idx]?.classList.remove('svc-active');
    imgs[next]?.classList.add('svc-active');
  }
  svcLbState.idx = next;
  svcLbCounter();
}

function svcLbCounter(): void {
  const el = document.getElementById('svc-lb-counter');
  if (el) el.textContent = `${svcLbState.idx + 1} / ${svcLbState.photos.length}`;
}

function svcLbToggleArrows(): void {
  const single = svcLbState.photos.length <= 1;
  const prev = document.getElementById('svc-lb-prev') as HTMLElement | null;
  const next = document.getElementById('svc-lb-next') as HTMLElement | null;
  if (prev) prev.style.display = single ? 'none' : '';
  if (next) next.style.display = single ? 'none' : '';
}

let svcLbDelegated = false;
function setupSvcImageLightbox(): void {
  if (svcLbDelegated) return;
  svcLbDelegated = true;
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    const trigger = t?.closest<HTMLElement>('.service-visual[data-imgs]');
    if (!trigger) return;
    e.preventDefault();
    let photos: string[] = [];
    try { photos = JSON.parse(trigger.dataset.imgs ?? '[]'); } catch { photos = []; }
    if (!photos.length) return;
    svcLbOpen(photos);
  });
  document.addEventListener('keydown', (e) => {
    const el = document.getElementById('svc-lb');
    if (!el?.classList.contains('is-open')) return;
    if (e.key === 'Escape') svcLbClose();
    if (e.key === 'ArrowLeft') svcLbGo(svcLbState.idx - 1);
    if (e.key === 'ArrowRight') svcLbGo(svcLbState.idx + 1);
  });
  // touch swipe
  let touchX: number | null = null;
  document.addEventListener('touchstart', (e) => {
    const el = document.getElementById('svc-lb');
    if (!el?.classList.contains('is-open')) return;
    touchX = e.touches[0]?.clientX ?? null;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const el = document.getElementById('svc-lb');
    if (!el?.classList.contains('is-open') || touchX === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
    if (Math.abs(dx) > 48) svcLbGo(svcLbState.idx + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });
}

mountLayoutIfNeeded();
setupPortfolioFiltersDelegated();
setupPortfolioLightboxDelegated();
setupSvcImageLightbox();
initCursorRing();

initReveal();
setTimeout(() => animateCountersForPage(currentPageId()), 600);

document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href]');
  if (!a) return;
  const id = pageIdFromHref(a.getAttribute('href'));
  if (!id) return;
  e.preventDefault();
  navigatePage(id);
});

window.addEventListener('hashchange', () => {
  const id = pageIdFromHash();
  if (!id) return;
  if (id === currentPageId()) return;
  navigatePage(id);
});

window.closeMobileNav = closeMobileNav;
window.handleFormSubmit = handleFormSubmit;
