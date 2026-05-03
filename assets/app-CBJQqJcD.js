(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const B=`<div id="cursor-ring"></div>
<!-- LOADER -->
<div id="loader">
  <div class="loader-logo">Zenith<span>Lab</span></div>
  <div class="loader-bar"><div class="loader-fill"></div></div>
  <div class="loader-label">Trwa ładowanie strony...</div>
</div>
<!-- MOBILE NAV -->
<div id="mobile-nav-backdrop" onclick="closeMobileNav()"></div>
<nav id="mobile-nav" aria-label="Menu mobilne">
  <div class="mobile-nav-header">
    <span class="nav-logo"><span class="nav-logo-dot"></span>Zenith Lab</span>
    <button class="mobile-close" onclick="closeMobileNav()" aria-label="Zamknij menu">✕</button>
  </div>
  <div class="mobile-nav-body">
    <a href="index.html" onclick="closeMobileNav()">Strona główna</a>
    <div class="mobile-nav-section-label">Usługi</div>
    <a href="print3d.html" class="mobile-nav-sub" onclick="closeMobileNav()">Druk 3D</a>
    <a href="archmodels.html" class="mobile-nav-sub" onclick="closeMobileNav()">Makiety architektoniczne</a>
    <a href="led.html" class="mobile-nav-sub" onclick="closeMobileNav()">Kasetony LED</a>
    <a href="engraving.html" class="mobile-nav-sub" onclick="closeMobileNav()">Grawerowanie</a>
    <a href="prototypes.html" class="mobile-nav-sub" onclick="closeMobileNav()">Prototypy produktów</a>
    <a href="gadgets.html" class="mobile-nav-sub" onclick="closeMobileNav()">Gadżety reklamowe</a>
    <div class="mobile-nav-divider"></div>
    <a href="portfolio.html" onclick="closeMobileNav()">Realizacje</a>
    <a href="blog.html" onclick="closeMobileNav()">Blog</a>
  </div>
  <div class="mobile-nav-footer">
    <a class="btn-primary" href="contact.html" onclick="closeMobileNav()" style="display:block;text-align:center;padding:14px 20px;border-radius:10px">Porozmawiajmy →</a>
  </div>
</nav>

<!-- NAV -->
<nav id="nav">
<div class="nav-inner">
<a href="index.html" class="nav-logo" style="cursor:pointer">
<span class="nav-logo-dot"></span>Zenith Lab
</a>
<div class="nav-links">
<a href="index.html" class="nav-link-main" data-n="home">Strona główna</a>
<div class="nav-item-dropdown">
<span class="nav-dropdown-trigger" data-n="services">Usługi</span>
<div class="nav-dropdown-menu" role="menu">
<div class="nav-dropdown-inner">
<a href="print3d.html" role="menuitem" data-n="print3d">Druk 3D</a>
<a href="archmodels.html" role="menuitem" data-n="archmodels">Makiety architektoniczne</a>
<a href="led.html" role="menuitem" data-n="led">Kasetony LED</a>
<a href="engraving.html" role="menuitem" data-n="engraving">Grawerowanie</a>
<a href="prototypes.html" role="menuitem" data-n="prototypes">Prototypy produktów</a>
<a href="gadgets.html" role="menuitem" data-n="gadgets">Gadżety reklamowe</a>
</div>
</div>
</div>
<a href="portfolio.html" class="nav-link-main" data-n="portfolio">Realizacje</a>
<a href="blog.html" class="nav-link-main" data-n="blog">Blog</a>
</div>
<div class="nav-cta">
<a class="btn-ghost" href="contact.html">Porozmawiajmy</a>
<a class="btn-primary" href="contact.html">Rozpocznij projekt</a>
</div>
<div class="nav-menu-btn" onclick="openMobileNav()" style="cursor:pointer">
<span></span><span></span><span></span>
</div>
</div>
</nav>
`,G=`<footer id="footer">
<div class="footer-inner">
<div class="footer-top">
<div class="footer-brand">
<div class="nav-logo" style="margin-bottom:0"><span class="nav-logo-dot"></span>Zenith Lab</div>
<p>Pracownia Zenith Lab: makiety architektoniczne, cięcie i grawer laserem CNC, prototypy, kasetony LED oraz gadżety reklamowe — od pomysłu po gotowy przedmiot w Twoich rękach.</p>
<div class="footer-social">
<a class="social-btn" href="#" title="Twitter">𝕏</a>
<a class="social-btn" href="#" title="LinkedIn">in</a>
<a class="social-btn" href="#" title="Dribbble">⬡</a>
<a class="social-btn" href="#" title="Instagram">◎</a>
</div>
</div>
<div class="footer-col">
<h4>Usługi</h4>
<ul>
<li><a href="print3d.html">Druk 3D</a></li>
<li><a href="archmodels.html">Makiety architektoniczne</a></li>
<li><a href="led.html">Kasetony LED</a></li>
<li><a href="engraving.html">Grawerowanie</a></li>
<li><a href="prototypes.html">Prototypy produktów</a></li>
<li><a href="gadgets.html">Gadżety reklamowe</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Firma</h4>
<ul>
<li><a href="portfolio.html">Realizacje</a></li>
<li><a href="blog.html">Blog</a></li>
<li><a href="regulamin.html">Regulamin</a></li>
<li><a href="privacy.html">Polityka prywatności</a></li>
<li><a href="cookies.html">Cookies</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Kontakt</h4>
<ul>
<li><a href="contact.html">Rozpocznij projekt</a></li>
<li><a href="mailto:kontakt@zenithlab.pl">kontakt@zenithlab.pl</a></li>
<li><a href="tel:+48530177581">+48 530 177 581</a></li>
<li><a href="#">LinkedIn</a></li>
<li><a href="privacy.html">Polityka prywatności</a></li>
</ul>
</div>
</div>
<div class="footer-bottom">
<div class="footer-copy">© 2026 Zenith Lab. Wszelkie prawa zastrzeżone.</div>
<div class="footer-bottom-links">
<a href="privacy.html">Prywatność</a>
<a href="regulamin.html">Regulamin</a>
<a href="cookies.html">Cookies</a>
</div>
</div>
</div>
</footer>
`,R=`<div class="page" id="page-home">

<!-- HERO -->
<section class="hero">
<div class="hero-grid-bg"></div>
<div class="hero-glow"></div>
<div class="hero-glow2"></div>
<div class="hero-glow3"></div>
<div class="hero-noise"></div>
<div class="hero-aurora"></div>
<div class="hero-inner">
<div class="hero-badge reveal">
<span class="hero-badge-dot"></span>
<span>Gotowy na współpracę? Napisz do nas!</span>
</div>
<h1 class="hero-h1">
<span class="line reveal reveal-delay-1">Z twoich pomysłów<br><span class="outline-word">stworzymy</span></span>
<span class="line reveal reveal-delay-2"><span class="accent-word">gotowy produkt</span></span>
<span class="line reveal reveal-delay-3">lub prototyp.</span>
</h1>
<div class="hero-sub-row">
<p class="hero-subtext reveal reveal-delay-4">Tworzymy kasetony LED, makiety architektoniczne, nagrody i gadżety reklamowe z wykorzystaniem technologii CNC, lasera CO2 i druku 3D. Wspieramy agencje reklamowe, deweloperów, korporacje i instytucje.</p>
<div class="hero-actions reveal reveal-delay-4">
<a class="btn-xl" href="portfolio.html"><span>Zobacz realizacje</span> <span class="btn-xl-arrow">→</span></a>
<a class="btn-outline-xl" href="contact.html">Porozmawiajmy</a>
</div>
</div>
<div class="hero-metrics reveal">
<div class="hero-metric"><div class="hero-metric-num"><span id="c1">0</span>+</div><div class="hero-metric-label">Zrealizowanych projektów i serii</div></div>
<div class="hero-metric"><div class="hero-metric-num"><span id="c2">0</span></div><div class="hero-metric-label">Technologii (laser, CNC, druk 3D…)</div></div>
<div class="hero-metric"><div class="hero-metric-num"><span id="c3">0</span>+</div><div class="hero-metric-label">Materiałów: drewno, plexi, szkło, sklejka…</div></div>
</div>
</div>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap">
<div class="marquee-track">
<span class="marquee-item"><span>Makiety architektoniczne</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Laser CNC — plexi, drewno, szkło, sklejka</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Grawer — np. deski do krojenia, tabliczki</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Prototypy i druk 3D</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Kasetony LED</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Gadżety: stojaki, wizytówki, breloki NFC</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Znakowanie i małe serie</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Puchary i nagrody</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Modele i figury 3D</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Makiety architektoniczne</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Laser CNC — plexi, drewno, szkło, sklejka</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Grawer — np. deski do krojenia, tabliczki</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Prototypy i druk 3D</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Kasetony LED</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Gadżety: stojaki, wizytówki, breloki NFC</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Znakowanie i małe serie</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Puchary i nagrody</span> <span class="dot">·</span></span>
<span class="marquee-item"><span>Modele i figury 3D</span> <span class="dot">·</span></span>
</div>
</div>

<!-- SERVICES PREVIEW -->
<div class="section">
<div class="section-label reveal">Co robimy</div>
<h2 class="section-h2 reveal">Fizyczne rzeczy<br>dla architektury, marki i produktu.</h2>
<p class="section-sub reveal">Projektujemy, przygotowujemy pliki i produkujemy w pracowni — tak, żeby detal był powtarzalny, a efekt trzymał się latami.</p>
<div class="services-grid reveal">
<div class="service-card ab" onclick="navigatePage('archmodels');return false">
<div class="service-num">01 / 04</div>
<div class="service-icon">⬡</div>
<div class="service-title">Makiety architektoniczne</div>
<div class="service-desc">Modele deweloperskie i prezentacyjne: skala, teren, zabudowa, detale elewacji i zieleń — pod biuro sprzedaży, konkurs lub spotkanie z inwestorem.</div>
<div class="service-tags"><span class="tag">Skala</span><span class="tag">LED</span><span class="tag">Transport</span></div>
</div>
<div class="service-card ab" onclick="navigatePage('engraving');return false">
<div class="service-num">02 / 04</div>
<div class="service-icon">◈</div>
<div class="service-title">Laser CNC, cięcie i grawer</div>
<div class="service-desc">Wycinanie i grawer na laserze CNC w plexi, drewnie, szkle i sklejce — od tabliczek i szyldów po personalizowane przedmioty i elementy ozdobne.</div>
<div class="service-tags"><span class="tag">Plexi</span><span class="tag">Drewno</span><span class="tag">Szkło</span></div>
</div>
<div class="service-card ab" onclick="navigatePage('print3d');return false">
<div class="service-num">03 / 04</div>
<div class="service-icon">◎</div>
<div class="service-title">Prototypy i druk 3D</div>
<div class="service-desc">Szybkie modele do testów, próbki ergonomii i małe serie — druk addytywny plus obróbka i montaż w warsztacie.</div>
<div class="service-tags"><span class="tag">FDM / SLA</span><span class="tag">Tolerancje</span><span class="tag">Iteracje</span></div>
</div>
<div class="service-card ab" onclick="navigatePage('led');return false">
<div class="service-num">04 / 04</div>
<div class="service-icon">⟳</div>
<div class="service-title">Kasetony LED i gadżety</div>
<div class="service-desc">Kasetony podświetlane pod markę oraz gadżety reklamowe: stojaki na wizytówki, grawerowane wizytówki ze sklejki, breloki klasyczne i z NFC.</div>
<div class="service-tags"><span class="tag">LED</span><span class="tag">Merch</span><span class="tag">NFC</span></div>
</div>
</div>
</div>

<!-- PROCESS -->
<div class="process-section">
<div class="process-inner">
<div class="section-label reveal">Nasz proces</div>
<h2 class="section-h2 reveal">Od pliku<br>do gotowego przedmiotu.</h2>
<div class="process-steps">
<div class="process-step reveal">
<div class="step-num">01</div>
<div class="step-title">Brief</div>
<div class="step-desc">Ustalamy zakres, materiał, wymiary, termin i sposób odbioru — bez zgadywania po drodze.</div>
</div>
<div class="process-step reveal reveal-delay-1">
<div class="step-num">02</div>
<div class="step-title">Przygotowanie</div>
<div class="step-desc">Optymalizujemy pliki pod laser, CNC lub druk — na życzenie pokazujemy próbkę na docelowym materiale.</div>
</div>
<div class="process-step reveal reveal-delay-2">
<div class="step-num">03</div>
<div class="step-title">Produkcja</div>
<div class="step-desc">Tnemy, grawerujemy, składamy i kontrolujemy jakość — żeby powtórzenie serii wyglądało tak samo.</div>
</div>
<div class="process-step reveal reveal-delay-3">
<div class="step-num">04</div>
<div class="step-title">Odbiór / wysyłka</div>
<div class="step-desc">Pakujemy bezpiecznie, dołączamy montaż tam, gdzie to potrzebne — odbiór osobisty lub przesyłka.</div>
</div>
</div>
</div>
</div>

<!-- CASE STUDIES PREVIEW -->
<div class="section">
<div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px;flex-wrap:gap">
<div>
<div class="section-label reveal">Wybrane realizacje</div>
<h2 class="section-h2 reveal">Rzeczy, które<br>można dotknąć.</h2>
</div>
<a class="link-arrow reveal" href="portfolio.html">Wszystkie realizacje</a>
</div>
<div class="work-grid reveal">
<div class="work-card" onclick="navigatePage('portfolio');return false">
<div class="work-card-img" style="position:relative;overflow:hidden;background:var(--bg3)">
<img src="img/portfolio/orzel.jpg" alt="Figurka orła — druk 3D" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
</div>
<div class="work-card-inner">
<div class="work-tag">Modele 3D · merch</div>
<div class="work-title">Figurka orła — model prezentacyjny</div>
<div class="work-desc">Druk 3D z ręcznym wykończeniem — model do prezentacji i ekspozycji, trwały i szczegółowy.</div>
<div class="work-arrow">↗</div>
</div>
</div>
<div class="work-card" onclick="navigatePage('portfolio');return false">
<div class="work-card-img" style="position:relative;overflow:hidden;background:var(--bg3)">
<img src="img/portfolio/stolik grawer.jpg" alt="Stolik z grawerem laserowym" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
</div>
<div class="work-card-inner">
<div class="work-tag">Grawer · drewno</div>
<div class="work-title">Stolik z grawerem laserowym</div>
<div class="work-desc">Precyzyjny grawer dekoracyjny na drewnie naturalnym — trwały efekt, spójny z identyfikacją marki.</div>
<div class="work-arrow">↗</div>
</div>
</div>
</div>
</div>

<!-- TESTIMONIALS -->
<div class="section-full" style="background:var(--bg2);border-top:1px solid var(--border)">
<div class="section" style="padding-top:0;padding-bottom:0">
<div class="section-label reveal">Opinie klientów</div>
<h2 class="section-h2 reveal" style="margin-bottom:48px">Powtarzalna jakość<br>w każdej serii.</h2>
<div class="testi-grid">
<div class="testi-card reveal ab">
<div class="testi-quote">„Makieta była gotowa na termin pokazu inwestycji — detale zieleni i podziału etapów pomogły domknąć rozmowy z klientami na miejscu.”</div>
<div class="testi-author"><div class="testi-avatar">MK</div><div><div class="testi-name">Michał K.</div><div class="testi-role">Dział sprzedaży, deweloper</div></div></div>
</div>
<div class="testi-card reveal reveal-delay-1 ab">
<div class="testi-quote">„Zamówiliśmy grawerowane deski do krojenia z logo dla restauracji — wyglądają świetnie na zdjęciach i wytrzymują codzienne mycie.”</div>
<div class="testi-author"><div class="testi-avatar">AW</div><div><div class="testi-name">Anna W.</div><div class="testi-role">Właścicielka, gastro</div></div></div>
</div>
<div class="testi-card reveal reveal-delay-2 ab">
<div class="testi-quote">„Breloczki NFC z grawerem poszły na event — szybka personalizacja, spójne kolory z brand bookiem, zero fuszerki przy odbiorze.”</div>
<div class="testi-author"><div class="testi-avatar">PJ</div><div><div class="testi-name">Paweł J.</div><div class="testi-role">Marketing, agencja</div></div></div>
</div>
</div>
</div>
</div>

<!-- CTA -->
<div style="padding:80px 40px;max-width:1400px;margin:0 auto">
<div class="cta-banner reveal">
<div class="hero-glow" style="opacity:0.5"></div>
<div class="status" style="margin:0 auto 24px"><span class="status-dot"></span> <span>Przyjmujemy kolejne realizacje — napisz, czego potrzebujesz</span></div>
<h2 class="cta-h2">Zróbmy coś,<br>co <span style="color:var(--accent)">da się dotknąć.</span></h2>
<p class="cta-sub">Wyślij zdjęcie inspiracji, szkic lub plik — wycenimy materiał, technologię i termin bez zbędnego czekania.</p>
<div class="cta-actions">
<a class="btn-xl" href="contact.html"><span>Rozpocznij projekt</span> <span class="btn-xl-arrow">→</span></a>
<a class="btn-outline-xl" href="contact.html">Sprawdź wycenę</a>
</div>
</div>
</div>

</div>
`,K=`<div class="page" id="page-print3d">
<div class="services-page">
<div class="section-label reveal">Druk addytywny</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Fizyczne produkty<br>z <span style="color:var(--accent)">milimetryczną</span> precyzją.</h1>
<p class="section-sub reveal" style="margin-bottom:80px">Uzupełniamy pracownię Zenith Lab o druk addytywny: prototypy, detale do makiet i małe serie — od pliku po gotowy element gotowy do obróbki lub montażu.</p>

<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/figurka_nbp.jpg","img/portfolio/orzel.jpg","img/portfolio/druk.jpg","img/portfolio/druk2.jpg","img/portfolio/druk5.jpg","img/portfolio/druk6.jpg","img/portfolio/figurka.jpg","img/portfolio/figura zeus.jpg"]'>
<img class="svc-visual-img" src="img/portfolio/figurka_nbp.jpg" alt="Druk 3D i prototypy" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">01 — Druk 3D</div>
<h3 class="sv-h3">Prototypy i małe serie, które da się dotknąć.</h3>
<p class="sv-desc">Łączymy przygotowanie modelu, dobór materiału i parametrów wydruku z kontrolą jakości końcowej. Idealne na walidację designu, prezentacje, gadżety premium i spersonalizowane elementy.</p>
<ul class="sv-list">
<li>Przygotowanie i optymalizacja plików pod konkretną technologię</li>
<li>FDM / SLA — dobór pod budżet, termin i wytrzymałość</li>
<li>Prototypy funkcjonalne, obudowy, detale brandingowe</li>
<li>Małe serie i spójność wymiarów między partiami</li>
<li>Post-processing: szlif, podkład, malowanie (na życzenie)</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Zapytaj o wycenę →</a>
</div>
</div>

<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">FAQ</div>
<div class="values-grid">
<div class="value-card reveal ab">
<div class="value-icon">⏱</div>
<div class="value-title">Realizacja</div>
<div class="value-desc">Proste prototypy często w kilka dni roboczych — dokładny termin po otrzymaniu pliku i podanej ilości którą mamy wykonać.</div>
</div>
<div class="value-card reveal reveal-delay-1 ab">
<div class="value-icon">◈</div>
<div class="value-title">Format</div>
<div class="value-desc">Pracujemy na STEP lub meshach — doradzimy, jeśli model wymaga poprawek pod druk.</div>
</div>
</div>
</div>

</div>
</div>
`,J=`<div class="page" id="page-archmodels">
<div class="services-page">
<div class="section-label reveal">Makiety architektoniczne</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Makiety, które<br><span style="color:var(--accent)">sprzedają</span> wizję.</h1>
<p class="section-sub reveal" style="margin-bottom:80px">Skala, detal i materiał dobrane pod pitch inwestorski, konkurs lub showroom dewelopera — od koncepcji po transport i montaż.</p>
<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/makietaaglowne.jpeg","img/portfolio/makietaa.jpeg","img/portfolio/makietaa2.jpeg","img/portfolio/makietaa3.jpeg","img/portfolio/makietaa4.jpeg","img/portfolio/makietaa5.jpeg","img/portfolio/makieta architektoniczna.jpeg","img/portfolio/makieta architektoniczna 2.jpeg","img/portfolio/makieta architektoniczna 3.jpeg","img/portfolio/podstawa makiety.jpeg"]'>
<img class="svc-visual-img" src="img/portfolio/makietaaglowne.jpeg" alt="Makiety architektoniczne" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">Makiety architektoniczne</div>
<h3 class="sv-h3">Od bryły po detale elewacji i otoczenia.</h3>
<p class="sv-desc">Budujemy makiety prezentacyjne i konkursowe: modele urbanistyczne, kompleksy mieszkaniowe, wnętrza oraz detale z zachowaniem czytelnej hierarchii formy.</p>
<ul class="sv-list">
<li>Dobór skali i podziału na strefy (teren, zabudowa, komunikacja)</li>
<li>Materiały: karton, plexi, drewno, druk 3D — pod budżet i efekt</li>
<li>Oświetlenie LED i podkład pod wizualizacje nocne</li>
<li>Pokrowce transportowe, instrukcja montażu</li>
<li>Iteracje po uwagach od architekta lub inwestora</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Wyceń makietę →</a>
</div>
</div>
<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">Na start</div>
<div class="values-grid">
<div class="value-card reveal ab"><div class="value-icon">◎</div><div class="value-title">Dokumentacja</div><div class="value-desc">Najlepiej: plany PDF/DWG lub model 3D — ustalimy skalę i zakres detalu.</div></div>
<div class="value-card reveal reveal-delay-1 ab"><div class="value-icon">⏱</div><div class="value-title">Termin</div><div class="value-desc">Średnie projekty zwykle 2–4 tygodnie — potwierdzamy po briefie.</div></div>
</div>
</div>
</div>
</div>
`,q=`<div class="page" id="page-led">
<div class="services-page">
<div class="section-label reveal">Światło i obecność marki</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Kasetony LED,<br>które <span style="color:var(--accent)">widać z daleka.</span></h1>
<p class="section-sub reveal" style="margin-bottom:80px">Projektujemy i produkujemy kasetony podświetlane — od gabarytu po montaż, z równomiernym światłem i kolorem zgodnym z brand bookiem.</p>
<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/polexpert.jpg","img/portfolio/image0 (14).jpg","img/portfolio/image0 (16).jpg"]'>
<img class="svc-visual-img" src="img/portfolio/polexpert.jpg" alt="Kasetony LED" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">Kasetony LED</div>
<h3 class="sv-h3">Jednolite podświetlenie, trwała obudowa.</h3>
<p class="sv-desc">Łączymy projekt graficzny z konstrukcją aluminiową lub kompozytową, doborem modułów LED i zasilaczy. Montaż na elewacji, w lobby lub na stoisku eventowym.</p>
<ul class="sv-list">
<li>Wymiary i kształt na zamówienie (kaseton, totem, lightbox)</li>
<li>Barwa światła i CRI dopasowane do identyfikacji</li>
<li>Klasy szczelności pod outdoor lub wnętrza</li>
<li>Okablowanie, zasilanie, instrukcja serwisu</li>
<li>Koordynacja z drukiem na płasko / dibond</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Zapytaj o kaseton →</a>
</div>
</div>
<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">Montaż</div>
<div class="values-grid">
<div class="value-card reveal ab"><div class="value-icon">◈</div><div class="value-title">Lokalizacja</div><div class="value-desc">Dobieramy odpowiednie systemy mocujące do każdej powierzchni — ściana, słup, wiszące</div></div>
<div class="value-card reveal reveal-delay-1 ab"><div class="value-icon">◎</div><div class="value-title">Serwis</div><div class="value-desc">Modułowa konstrukcja ułatwia wymianę sekcji bez demontażu całości.</div></div>
</div>
</div>
</div>
</div>
`,U=`<div class="page" id="page-engraving">
<div class="services-page">
<div class="section-label reveal">Grawer i cięcie</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Laser CNC:<br>plexi, drewno, szkło,<br><span style="color:var(--accent)">sklejka i więcej.</span></h1>
<p class="section-sub reveal" style="margin-bottom:80px">Wycinamy kształty i wypalamy grafikę oraz napisy — od desek do krojenia z logo po tabliczki, szyldy i elementy dekoracyjne. Dobieramy parametry pod materiał, żeby krawędzie były czyste, a grawer czytelny latami.</p>
<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/deska wosp.jpeg","img/portfolio/grawer.jpg","img/portfolio/grawer1.jpg","img/portfolio/grawer2.jpg","img/portfolio/grawer3.jpg","img/portfolio/grawer5.jpg","img/portfolio/stolik grawer.jpg","img/portfolio/tabliczki.jpeg","img/portfolio/tabliczka informacyjna.jpeg","img/portfolio/deska do krojenia.jpeg","img/portfolio/wizytowki grawer.jpeg"]'>
<img class="svc-visual-img" src="img/portfolio/deska wosp.jpeg" alt="Laser CNC, cięcie i grawer" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">Grawerowanie i cięcie</div>
<h3 class="sv-h3">Od kuchennej deski po szyld z plexi.</h3>
<p class="sv-desc">Pracujemy na plikach wektorowych lub przygotujemy grafikę po Twoim szkicu. Na życzenie robimy próbkę na dokładnie tym samym materiale, co docelowa seria — szczególnie przy drewnie, sklejce i szkle, gdzie ważna jest głębokość i kontrast.</p>
<ul class="sv-list">
<li>Plexi, drewno, szkło, sklejka — dobór mocy i prędkości pod grubość</li>
<li>Deski do krojenia, deski serwisowe, tabliczki, napisy na akcesoria</li>
<li>Grawer głęboki lub płytki — pod funkcję i wygląd</li>
<li>Serie krótkie i powtarzalne — te same ustawienia maszyny</li>
<li>Obróbka krawędzi i przygotowanie pod montaż</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Wyślij zapytanie →</a>
</div>
</div>
<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">Pliki</div>
<div class="values-grid">
<div class="value-card reveal ab"><div class="value-icon">⬡</div><div class="value-title">Wektory</div><div class="value-desc">Najlepiej AI, EPS lub SVG — raster przerabiamy po akceptacji jakości linii.</div></div>
<div class="value-card reveal reveal-delay-1 ab"><div class="value-icon">◈</div><div class="value-title">Serie</div><div class="value-desc">Ustalamy szablon i kolejność znakowania, żeby każda sztuka wyglądała tak samo.</div></div>
</div>
</div>
</div>
</div>
`,_=`<div class="page" id="page-prototypes">
<div class="services-page">
<div class="section-label reveal">Walidacja przed produkcją</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Prototypy<br><span style="color:var(--accent)">pod testy</span> i pitch.</h1>
<p class="section-sub reveal" style="margin-bottom:80px">Od szkicu do pierwszej serii: prototypy pod testy, dopasowanie tolerancji i przygotowanie pod kolejne etapy — laser, CNC lub produkcja zewnętrzna.</p>
<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/obudowa glosnik.jpeg","img/portfolio/obudowa glosnik2.jpeg","img/portfolio/druk.jpg","img/portfolio/druk2.jpg","img/portfolio/pudelko.jpeg","img/portfolio/pudelko 2.jpeg","img/portfolio/pudelko 3.jpeg"]'>
<img class="svc-visual-img" src="img/portfolio/obudowa glosnik.jpeg" alt="Prototypy produktów" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">Prototypy produktów</div>
<h3 class="sv-h3">Od pierwszego kliknięcia do obiektu w ręku.</h3>
<p class="sv-desc">Łączymy druk 3D, obróbkę CNC i ręczny montaż prototypów, tak abyś mógł testować swój przyszły produkt.</p>
<ul class="sv-list">
<li>Warianty materiałowe i kolorystyczne A/B</li>
<li>Prototypy wyglądowe vs. funkcjonalne z docelowymi tolerancjami</li>
<li>Dokumentacja pomiarowa dla dostawcy form</li>
<li>Krótkie pętle iteracji po feedbacku</li>
<li>Wsparcie przy pierwszej małej serii pilotażowej</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Opisz produkt →</a>
</div>
</div>
<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">R&amp;D</div>
<div class="values-grid">
<div class="value-card reveal ab"><div class="value-icon">◎</div><div class="value-title">NDA</div><div class="value-desc">Na życzenie podpisujemy poufność przed wysłaniem plików.</div></div>
<div class="value-card reveal reveal-delay-1 ab"><div class="value-icon">⏱</div><div class="value-title">Iteracje</div><div class="value-desc">Pakiet kilku rund korekt wyceniamy osobno — bez niespodzianek.</div></div>
</div>
</div>
</div>
</div>
`,H=`<div class="page" id="page-gadgets">
<div class="services-page">
<div class="section-label reveal">Gadżety i merch</div>
<h1 class="section-h2 reveal" style="font-size:clamp(38px,4.5vw,72px);margin-bottom:24px">Stojaki, wizytówki,<br>breloki <span style="color:var(--accent)">NFC i nie tylko.</span></h1>
<p class="section-sub reveal" style="margin-bottom:80px">Łączymy produkcję w pracowni z brandingiem: grawer i cięcie laserem CNC, zestawy na biurko, upominki dla klientów i materiały na event — spójne z resztą realizacji Zenith Lab.</p>
<div class="service-full">
<div class="service-visual" data-imgs='["img/portfolio/marketing1.jpg","img/portfolio/wizytowki grawer.jpeg","img/portfolio/wiz.jpg","img/portfolio/marketing.jpg","img/portfolio/marketing2.jpg","img/portfolio/marketing3.jpg","img/portfolio/magnes.jpg","img/portfolio/puchar.jpeg","img/portfolio/puchary.jpg","img/portfolio/puchary grawer.jpeg","img/portfolio/statuetka.jpeg","img/portfolio/statuetka drewniana.jpeg","img/portfolio/bombki.jpg"]'>
<img class="svc-visual-img" src="img/portfolio/marketing1.jpg" alt="Gadżety reklamowe" loading="eager">
<div class="svc-zoom-hint">⊕ Powiększ</div>
</div>
<div>
<div class="sv-label">Gadżety reklamowe</div>
<h3 class="sv-h3">Przedmioty użytkowe z logo — nie tylko „coś z nadrukiem”.</h3>
<p class="sv-desc">Robimy m.in. stojaki na wizytówki, wizytówki grawerowane w sklejce, breloki klasyczne oraz breloki z tagiem NFC (np. pod link do wizytówki lub promocji), oraz puchary i nagrody na specjalne eventy. Dobieramy materiał i technikę tak, żeby gadżet faktycznie wracał do użytku.</p>
<ul class="sv-list">
<li>Stojaki i organizery na biurko — z grawerem lub wycinanymi elementami</li>
<li>Wizytówki ze sklejki / drewna — grawer zamiast tłoczenia, gdy liczy się rzemiosło</li>
<li>Breloczki NFC i standardowe — z personalizacją lub numeracją serii</li>
<li>Puchary, statuetki, nagrody — z grawerem lub wycinanymi elementami</li>
<li>Personalizowane magnesy, bombki - z logotypem lub grafiką</li>
<li>Zestawy prezentowe i pakowanie na zamówienie</li>
<li>Małe nakłady i większe serie — po uzgodnieniu minima</li>
</ul>
<a class="btn-xl" href="contact.html" style="display:inline-flex">Zapytaj o zestaw →</a>
</div>
</div>
<div class="section-sm" style="padding-top:40px">
<div class="section-label reveal">Na start</div>
<div class="values-grid">
<div class="value-card reveal ab"><div class="value-icon">◈</div><div class="value-title">Brand book</div><div class="value-desc">Przyjmujemy kolory Pantone i pliki wektorowe logo — żeby merch był spójny z kasetonami i grawerem.</div></div>
<div class="value-card reveal reveal-delay-1 ab"><div class="value-icon">◎</div><div class="value-title">NFC</div><div class="value-desc">Możemy doradzić w tagach i treści pod skan — żeby brelok nie był tylko „ładny”. </div></div>
</div>
</div>
</div>
</div>
`,V=`<div class="page" id="page-portfolio">
    <div class="portfolio-page">

        <div class="section-label reveal">Realizacje</div>
        <h1 class="section-h2 reveal" style="font-size:clamp(48px,7vw,96px);margin-bottom:24px">
            Wybrane prace<br>z <span style="color:var(--accent)">pracowni.</span>
        </h1>
        <p class="section-sub reveal">
            Makiety, kasetony LED, grawer na drewnie i plexi, prototypy oraz gadżety — poniżej przykłady
            charakteru zleceń (nazwy inwestycji i marek mogą być ukryte pod NDA).
        </p>

        <div class="portfolio-filters reveal">
            <button class="filter-btn active" data-filter="all">Wszystkie</button>
            <button class="filter-btn" data-filter="Druk 3D">Druk 3D</button>
            <button class="filter-btn" data-filter="makiety">Makiety</button>
            <button class="filter-btn" data-filter="led">LED</button>
            <button class="filter-btn" data-filter="laser">Laser / grawer</button>
            <button class="filter-btn" data-filter="prototypy">Prototypy</button>
            <button class="filter-btn" data-filter="gadżety">Gadżety</button>
            <button class="filter-btn" data-filter="Deski">Grawerowane deski</button>
        </div>

        <div class="portfolio-grid" id="pf-grid">

            <div class="portfolio-item ab reveal" data-filter="Druk 3D" data-project="0">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/orzel.jpg" alt="Figurka NBP dla animatora" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            4 zdjęcia
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Figurki 3D · model</div>
                    <div class="portfolio-title">Personalizowa figurki 3D na zamówienie</div>
                    <div class="portfolio-client">Druk 3D, wykończenie manualne</div>
                </div>
            </div>

            <div class="portfolio-item ab reveal reveal-delay-1" data-filter="gadżety" data-project="1">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/magnes.jpg" alt="Magnes reklamowy" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            1 zdjęcie
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Gadżety · merch</div>
                    <div class="portfolio-title">Magnesy reklamowe z logo</div>
                    <div class="portfolio-client">Seria personalizowana dla klienta</div>
                </div>
            </div>

            <div class="portfolio-item ab reveal reveal-delay-2" data-filter="led" data-project="3">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/polexpert.jpg" alt="Kaseton LED" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            2 zdjęcia
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Kaseton LED · Metal + plexi</div>
                    <div class="portfolio-title">Kaseton LED - recepcja</div>
                    <div class="portfolio-client">Metal + plexi, równomierne światło, kolor</div>
                </div>
            </div>

            <div class="portfolio-item ab reveal reveal-delay-2" data-filter="laser" data-project="2">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/stolik grawer.jpg" alt="Stolik z grawerem" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            1 zdjęcie
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Grawer · drewno</div>
                    <div class="portfolio-title">Stolik z grawerem laserowym</div>
                    <div class="portfolio-client">Grawer dekoracyjny, drewno naturalne</div>
                </div>
            </div>


            <div class="portfolio-item ab reveal reveal-delay-2" data-filter="makiety" data-project="4">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/makietaaglowne.jpeg" alt="Makiety architektoniczne" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            12 zdjęć
                        </span>
                    </div>
                </div>

                <div class="portfolio-details">
                    <div class="portfolio-cat">Makiety architektoniczne · Druk 3D, tworzywo sztuczne</div>
                    <div class="portfolio-title">Makiety architektoniczne zagospodarowania terenu oraz osiedla mieszkaniowego</div>
                    <div class="portfolio-client">Druk 3D, plexi, sklejka, tworzywo sztuczne</div>
                </div>
            </div>

            <div class="portfolio-item ab reveal reveal-delay-2" data-filter="Deski" data-project="6">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/deska wosp.jpeg" alt="Deski grawerowane" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            2 zdjęcia
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Grawerowane Deski · Drewno , laser CNC</div>
                    <div class="portfolio-title">Deski do krojenia z personalizowanym grawerem</div>
                    <div class="portfolio-client">Drewno, laser CNC</div>
                </div>
            </div>

<div class="portfolio-item ab reveal reveal-delay-2" data-filter="prototypy" data-project="5">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/lampka nocna.jpeg" alt="Lampka nocna" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            3 zdjęcia
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Prototyp · gadżet</div>
                    <div class="portfolio-title">Lampka nocna, obudowa głosnika</div>
                    <div class="portfolio-client">Prototyp funkcjonalny</div>
                </div>
            </div>


            <div class="portfolio-item ab reveal reveal-delay-2" data-filter="soccerball" data-project="7">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/soccerball.jpeg" alt="Gra soccerball" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            3 zdjęcia
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Gadżety · event</div>
                    <div class="portfolio-title">Gadżety eventowe</div>
                    <div class="portfolio-client">Produkty promocyjne dla wydarzeń</div>
                </div>
            </div>


              <div class="portfolio-item ab reveal reveal-delay-2" data-filter="puchary" data-project="8">
                <div class="portfolio-img pf-card-trigger">
                    <img src="img/portfolio/figurka_nbp.jpg" alt="figurka nbp" loading="lazy">
                    <div class="pf-img-overlay">
                        <span class="pf-zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" /></svg>
                        </span>
                        <span class="pf-img-count">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" /></svg>
                            5 zdjęć
                        </span>
                    </div>
                </div>
                <div class="portfolio-details">
                    <div class="portfolio-cat">Puchary · Nagrody</div>
                    <div class="portfolio-title">Gadżety eventowe</div>
                    <div class="portfolio-client">Produkty promocyjne dla wydarzeń</div>
                </div>
            </div>

        </div>
    </div>

    <!-- ═══ PREMIUM LIGHTBOX ═══ -->
    <div class="zlb" id="zlb" role="dialog" aria-modal="true" aria-label="Podgląd realizacji">
        <div class="zlb-bg" id="zlb-bg"></div>

        <div class="zlb-shell">
            <!-- STAGE -->
            <div class="zlb-stage" id="zlb-stage">
                <div class="zlb-track" id="zlb-track"></div>

                <!-- prev/next -->
                <button class="zlb-arrow zlb-prev" id="zlb-prev" aria-label="Poprzednie">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button class="zlb-arrow zlb-next" id="zlb-next" aria-label="Następne">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" /></svg>
                </button>

                <!-- top-right close -->
                <button class="zlb-close" id="zlb-close" aria-label="Zamknij">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>

                <!-- counter pill -->
                <div class="zlb-counter-pill" id="zlb-counter"></div>
            </div>

            <!-- FOOTER -->
            <div class="zlb-footer">
                <div class="zlb-meta">
                    <div class="zlb-cat" id="zlb-cat"></div>
                    <div class="zlb-title" id="zlb-title"></div>
                    <div class="zlb-desc" id="zlb-desc"></div>
                </div>
                <div class="zlb-thumbs-wrap">
                    <div class="zlb-thumbs" id="zlb-thumbs"></div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* ─── card image ─── */
        #page-portfolio .portfolio-img {
            position: relative;
            height: 220px;
            overflow: hidden;
            background: var(--bg3);
        }

        #page-portfolio .pf-card-trigger {
            cursor: zoom-in;
        }

        #page-portfolio .portfolio-img>img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
            z-index: 1;
            pointer-events: none;
        }

        #page-portfolio .pf-card-trigger:hover>img {
            transform: scale(1.07);
        }

        /* hover overlay */
        .pf-img-overlay {
            position: absolute;
            inset: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(8, 8, 8, 0);
            transition: background 0.3s;
            pointer-events: none;
        }

        .pf-card-trigger:hover .pf-img-overlay {
            background: rgba(8, 8, 8, 0.35);
        }

        .pf-zoom-icon {
            color: #fff;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.25s, transform 0.25s;
        }

        .pf-card-trigger:hover .pf-zoom-icon {
            opacity: 1;
            transform: scale(1);
        }

        .pf-img-count {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            align-items: center;
            gap: 5px;
            background: rgba(8, 8, 8, 0.65);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 100px;
            padding: 3px 10px 3px 8px;
            font-size: 11px;
            font-weight: 500;
            color: rgba(240, 237, 232, 0.7);
            pointer-events: none;
        }

        .pf-img-count svg {
            opacity: 0.55;
            flex-shrink: 0;
        }

        /* placeholder */
        .pf-placeholder-card {
            background: var(--bg3) !important;
            cursor: default !important;
            border-bottom: 1px dashed var(--border);
        }

        .pf-placeholder-inner {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            z-index: 2;
        }

        .pf-placeholder-inner span {
            font-size: 12px;
            color: var(--text3);
            font-weight: 500;
        }

        .pf-placeholder-inner code {
            font-family: var(--font-mono);
            font-size: 10px;
            color: var(--accent);
            opacity: 0.4;
            background: rgba(200, 255, 87, 0.06);
            padding: 2px 8px;
            border-radius: 4px;
        }

        /* reveal override */
        #page-portfolio .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
        }

        #page-portfolio .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* ═══════════════ PREMIUM LIGHTBOX ═══════════════ */
        /* Bez backdrop-filter na pełnym ekranie — blur pod całą stroną przy animacji opacity = ciężkie zacinanie. */
        .zlb {
            position: fixed;
            inset: 0;
            z-index: 12000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: clamp(16px, 4vw, 60px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            isolation: isolate;
            contain: layout style paint;
            transition: opacity 0.22s ease-out, visibility 0.22s;
        }

        .zlb.is-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .zlb-bg {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 120% 80% at 50% 40%, rgba(28, 28, 28, 0.99) 0%, rgba(4, 4, 4, 0.995) 55%, #030303 100%);
            cursor: zoom-out;
            transform: translateZ(0);
        }

        .zlb-shell {
            position: relative;
            z-index: 1;
            width: min(1080px, 96vw);
            display: flex;
            flex-direction: column;
            border-radius: var(--r);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 1px rgba(200, 255, 87, 0.04),
                0 48px 140px rgba(0, 0, 0, 0.85);
            transform: translate3d(0, 12px, 0) scale(0.98);
            transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
            contain: layout paint;
        }

        .zlb.is-open .zlb-shell {
            transform: translate3d(0, 0, 0) scale(1);
        }

        /* stage */
        .zlb-stage {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
            background: #080808;
            overflow: hidden;
        }

        .zlb-track {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .zlb-track img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            opacity: 0;
            transition: opacity 0.2s ease-out;
            user-select: none;
        }

        .zlb-track img.zactive {
            opacity: 1;
        }

        /* arrows */
        .zlb-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
            width: 48px;
            height: 48px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--r2);
            background: rgba(18, 18, 18, 0.92);
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
        }

        .zlb-arrow:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: rgba(200, 255, 87, 0.08);
            transform: translateY(-50%) scale(1.08);
        }

        .zlb-prev {
            left: 16px;
        }

        .zlb-next {
            right: 16px;
        }

        /* close */
        .zlb-close {
            position: absolute;
            top: 14px;
            right: 14px;
            z-index: 4;
            width: 38px;
            height: 38px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--r3);
            background: rgba(8, 8, 8, 0.8);
            color: rgba(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .zlb-close:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: rgba(200, 255, 87, 0.08);
        }

        /* counter pill */
        .zlb-counter-pill {
            position: absolute;
            bottom: 14px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(18, 18, 18, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 100px;
            padding: 4px 14px;
            font-family: var(--font-mono);
            font-size: 12px;
            color: rgba(240, 237, 232, 0.5);
            white-space: nowrap;
            pointer-events: none;
        }

        /* footer */
        .zlb-footer {
            background: var(--bg2);
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding: 18px 24px 20px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
        }

        .zlb-meta {
            flex: 1;
            min-width: 0;
        }

        .zlb-cat {
            font-family: var(--font-mono);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--accent);
            margin-bottom: 5px;
        }

        .zlb-title {
            font-family: var(--font-head);
            font-size: 19px;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.2;
            color: var(--text);
            margin-bottom: 4px;
        }

        .zlb-desc {
            font-size: 13px;
            color: var(--text2);
            line-height: 1.5;
        }

        /* thumbs */
        .zlb-thumbs-wrap {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        .zlb-thumbs {
            display: flex;
            gap: 8px;
            max-width: min(380px, 45vw);
            overflow-x: auto;
            scrollbar-width: none;
        }

        .zlb-thumbs::-webkit-scrollbar {
            display: none;
        }

        .zlb-thumb {
            flex-shrink: 0;
            width: 68px;
            height: 46px;
            border-radius: var(--r3);
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            opacity: 0.4;
            transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
            outline: none;
        }

        .zlb-thumb:hover {
            opacity: 0.75;
            transform: translateY(-2px);
        }

        .zlb-thumb.zactive {
            border-color: var(--accent);
            opacity: 1;
        }

        .zlb-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        /* keyboard hint */
        .zlb-hint {
            font-size: 10px;
            color: var(--text3);
            font-family: var(--font-mono);
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            align-self: flex-end;
        }

        .zlb-hint kbd {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 18px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 4px;
            font-family: var(--font-mono);
            font-size: 10px;
            color: var(--text3);
            background: rgba(255, 255, 255, 0.04);
        }

        @media(max-width:640px) {
            .zlb-footer {
                flex-direction: column;
                gap: 14px;
            }

            .zlb-thumbs-wrap {
                width: 100%;
            }

            .zlb-thumbs {
                max-width: 100%;
            }

            .zlb-stage {
                aspect-ratio: 4/3;
            }

            .zlb-hint {
                display: none;
            }
        }

        @media (prefers-reduced-motion: reduce) {

            .zlb,
            .zlb-shell,
            .zlb-track img {
                transition: none;
            }

            .zlb-shell {
                transform: none;
            }

            .zlb.is-open .zlb-shell {
                transform: none;
            }
        }
    </style>

</div>`,X=`<div class="page" id="page-contact">
<div class="contact-page">
<div class="contact-grid">
<div class="contact-info reveal">
<div class="section-label" style="margin-bottom:16px">Kontakt</div>
<h2 class="section-h2" style="font-size:clamp(36px,5vw,64px)">Wyślij brief<br>lub <span style="color:var(--accent)">zdjęcie inspiracji.</span></h2>
<p>Opisz materiał, termin i nakład — odpowiemy z orientacyjną wyceną albo listą pytań doprecyzowujących. Im więcej szczegółów, tym szybciej ustalimy realny koszt.</p>
<div class="contact-details">
<div class="contact-detail">
<div class="cd-icon">✉</div>
<div><div class="cd-label">E-mail</div><div class="cd-val">kontakt@zenithlab.pl</div></div>
</div>
<div class="contact-detail">
<div class="cd-icon">⌚</div>
<div><div class="cd-label">Czas odpowiedzi</div><div class="cd-val">Zwykle w 1–2 dni robocze</div></div>
</div>
<div class="contact-detail">
<div class="cd-icon">◎</div>
<div><div class="cd-label">Pliki</div><div class="cd-val">SVG, AI, PDF, zdjęcia szkicu — wszystko pomoże</div></div>
</div>
</div>
</div>
<div class="contact-form reveal reveal-delay-1">
<div style="margin-bottom:32px"><h3 style="font-family:var(--font-head);font-size:22px;font-weight:700;margin-bottom:6px">Zapytanie o wycenę</h3><p style="font-size:14px;color:var(--text2)">Zaznacz typ zlecenia — resztę dopiszemy na mailu lub telefonie.</p></div>
<div class="form-row">
<div class="form-group"><label class="form-label">Imię</label><input type="text" class="form-input" placeholder="Jan"></div>
<div class="form-group"><label class="form-label">Nazwisko</label><input type="text" class="form-input" placeholder="Kowalski"></div>
</div>
<div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="ty@firma.pl"></div>
<div class="form-group"><label class="form-label">Firma / projekt</label><input type="text" class="form-input" placeholder="np. inwestycja / nazwa lokalu"></div>
<div class="form-group">
<label class="form-label">Typ zlecenia</label>
<select class="form-input" id="form-type">
<option value="">Wybierz…</option>
<option value="1">Makieta architektoniczna</option>
<option value="2">Laser CNC — cięcie / grawer (plexi, drewno, szkło, sklejka…)</option>
<option value="3">Prototyp / druk 3D</option>
<option value="4">Kaseton LED</option>
<option value="5">Gadżety (stojaki, wizytówki, breloki NFC itd.)</option>
<option value="6">Coś innego — opiszę w wiadomości</option>
</select>
</div>
<div class="form-group">
<label class="form-label">Budżet orientacyjny</label>
<select class="form-input" id="form-budget">
<option value="">Wybierz przedział…</option>
<option>do 1 000 zł</option>
<option>1 000 – 5 000 zł</option>
<option>5 000 – 15 000 zł</option>
<option>15 000 zł i więcej</option>
</select>
</div>
<div class="form-group"><label class="form-label">Opis, wymiary, termin</label><textarea class="form-input" placeholder="Np. grubość materiału, nakład, data odbioru, adres montażu kasetonu…"></textarea></div>
<button class="form-btn" onclick="handleFormSubmit(this)"><span>Wyślij zapytanie</span> <span>→</span></button>
</div>
</div>
</div>
</div>
`,$=`<div class="page" id="page-blog">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Zenith Lab",
  "description": "Praktyczna wiedza z pracowni: dobór materiałów pod laser CNC, projektowanie makiet architektonicznych, podświetlenie LED, druk 3D i gadżety z NFC.",
  "url": "https://zenithlab.pl/blog.html",
  "publisher": {
    "@type": "Organization",
    "name": "Zenith Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zenithlab.pl/img/sygnet.png"
    }
  }
}
<\/script>

<div class="blog-page">
  <div class="section-label reveal">Blog</div>
  <h1 class="section-h2 reveal" style="font-size:clamp(40px,6vw,80px);margin-bottom:16px">Z pracowni:<br>materiały, laser<br>i <span style="color:var(--accent)">makiety.</span></h1>
  <p class="section-sub reveal" style="margin-bottom:56px">Praktyczna wiedza o produkcji fizycznej — dobór materiałów, technologie i przykłady z realizacji.</p>

  <!-- FEATURED -->
  <a class="blog-featured reveal" href="blog-material.html" style="text-decoration:none;display:grid;cursor:pointer">
    <div class="blog-feat-img" style="overflow:hidden;padding:0;background:var(--bg3)">
      <img src="img/portfolio/grawer.jpg" alt="Drewno, sklejka czy plexi? Dobór materiału pod laser CNC" loading="eager" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div class="blog-feat-content">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span class="blog-cat-pill" style="background:rgba(200,255,87,0.12);color:var(--accent);border:1px solid rgba(200,255,87,0.25);padding:4px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase">Laser CNC</span>
        <span class="blog-cat-pill" style="background:rgba(200,255,87,0.12);color:var(--accent);border:1px solid rgba(200,255,87,0.25);padding:4px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase">Wyróżniony</span>
      </div>
      <div class="blog-date">Marzec 2026 · 7 min czytania</div>
      <h2 class="blog-title">Drewno, sklejka czy plexi? Jak dobrać materiał pod grawer i cięcie laserem CNC.</h2>
      <p class="blog-excerpt">Co wpływa na jakość krawędzi, kontrast graweru i trwałość przy myciu — praktyczny przewodnik dla zamawiających deski do krojenia, tabliczki i dekoracje.</p>
      <div class="blog-meta">
        <div class="blog-author"><div class="blog-author-av">ZL</div>Zenith Lab</div>
        <span class="read-more" style="color:var(--accent);font-size:13px;font-weight:600">Czytaj artykuł →</span>
      </div>
    </div>
  </a>

  <!-- GRID -->
  <div class="blog-grid">

    <!-- 1: Makieta architektoniczna -->
    <a class="blog-card reveal ab" href="blog-archmodel.html" style="text-decoration:none;cursor:pointer">
      <div class="blog-card-img" style="overflow:hidden;padding:0;background:var(--bg3)">
        <img src="img/portfolio/makietaaglowne.jpeg" alt="Makieta architektoniczna deweloperska — skala i detal" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-cat">Makiety</div>
        <div class="blog-card-title">Makieta architektoniczna: skala, detal i materiał — co ustalić przed zamówieniem.</div>
        <div class="blog-card-exc">Kompletna checklista dla inwestora i biura architektonicznego — żeby model był czytelny na pierwszym spotkaniu z klientem.</div>
        <div class="blog-card-meta"><span>Zenith Lab</span><span>luty 2026 · 5 min</span></div>
      </div>
    </a>

    <!-- 2: Kasetony LED -->
    <a class="blog-card reveal reveal-delay-1 ab" href="blog-led-light.html" style="text-decoration:none;cursor:pointer">
      <div class="blog-card-img" style="overflow:hidden;padding:0;background:var(--bg3)">
        <img src="img/portfolio/polexpert.jpg" alt="Jednolite podświetlenie LED w kaszetonie — bez plam" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-cat">Kasetony LED</div>
        <div class="blog-card-title">Jednolite podświetlenie logo: co decyduje o „równym" świetle bez plam.</div>
        <div class="blog-card-exc">Moduły, dyfuzja, zasilanie i dobór barwy — w skrócie dla zamawiających, nie tylko dla elektryków.</div>
        <div class="blog-card-meta"><span>Zenith Lab</span><span>sty 2026 · 6 min</span></div>
      </div>
    </a>

    <!-- 3: NFC -->
    <a class="blog-card reveal reveal-delay-2 ab" href="blog-nfc.html" style="text-decoration:none;cursor:pointer">
      <div class="blog-card-img" style="overflow:hidden;padding:0;background:var(--bg3)">
        <img src="img/portfolio/magnes.jpg" alt="Breloczek NFC z grawerem — zastosowania i planowanie" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-cat">Gadżety</div>
        <div class="blog-card-title">Breloczek NFC z grawerem: co może dziać się po skanowaniu i jak to zaplanować.</div>
        <div class="blog-card-exc">Od wizytówki elektronicznej po kampanię eventową — bez przepłacania za technologię, której nikt nie użyje.</div>
        <div class="blog-card-meta"><span>Zenith Lab</span><span>gru 2025 · 4 min</span></div>
      </div>
    </a>

    <!-- 4: Druk 3D -->
    <a class="blog-card reveal ab" href="blog-3dproto.html" style="text-decoration:none;cursor:pointer">
      <div class="blog-card-img" style="overflow:hidden;padding:0;background:var(--bg3)">
        <img src="img/portfolio/druk.jpg" alt="Druk 3D przed formą wtryskową — co warto sprawdzić" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-cat">Prototypy</div>
        <div class="blog-card-title">Druk 3D przed formą wtryskową: co warto sprawdzić w prototypie.</div>
        <div class="blog-card-exc">Tolerancje, montaż śrub, „klik" obudowy — jak przygotować się do droższej produkcji i uniknąć kosztownych iteracji.</div>
        <div class="blog-card-meta"><span>Zenith Lab</span><span>paź 2025 · 7 min</span></div>
      </div>
    </a>

    <!-- 5: Szkło w laserze -->
    <a class="blog-card reveal reveal-delay-1 ab" href="blog-glass.html" style="text-decoration:none;cursor:pointer">
      <div class="blog-card-img" style="overflow:hidden;padding:0;background:var(--bg3)">
        <img src="img/portfolio/grawer2.jpg" alt="Grawerowanie szkła laserem CO2 — efekty i ograniczenia" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.22,1,0.36,1)" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-cat">Laser CNC</div>
        <div class="blog-card-title">Grawerowanie szkła laserem CO₂: efekty, ograniczenia i kiedy to ma sens.</div>
        <div class="blog-card-exc">Bezpieczeństwo, koszt strat materiałowych i jakość powierzchni — praktycznie z pracowni, bez teorii.</div>
        <div class="blog-card-meta"><span>Zenith Lab</span><span>lis 2025 · 5 min</span></div>
      </div>
    </a>

  </div>

  <!-- CTA -->
  <div style="margin-top:80px;padding:56px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:16px;text-align:center" class="reveal">
    <div class="section-label" style="margin-bottom:16px">Masz projekt?</div>
    <h2 style="font-family:var(--font-head);font-size:clamp(28px,4vw,44px);font-weight:700;margin-bottom:16px;line-height:1.15">Zróbmy razem coś,<br><span style="color:var(--accent)">co da się dotknąć.</span></h2>
    <p style="color:var(--fg2);max-width:480px;margin:0 auto 32px;line-height:1.65">Wyślij zdjęcie inspiracji, szkic lub plik — wycenimy materiał, technologię i termin.</p>
    <a class="btn-xl" href="contact.html"><span>Napisz do nas</span> <span class="btn-xl-arrow">→</span></a>
  </div>

</div>
</div>
`,Y=`<!-- FILE: src/pages/blog-material.html -->
<div class="page" id="page-blog-material">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Drewno, sklejka czy plexi? Jak dobrać materiał pod grawer i cięcie laserem CNC",
    "description": "Praktyczny przewodnik po materiałach dla lasera CO2 — drewno, sklejka, plexi i szkło. Dowiedz się co wpływa na jakość krawędzi, kontrast graweru i trwałość produktu końcowego.",
    "image": "img/portfolio/grawer.jpg",
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-01",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "blog-material.html"
    }
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/grawer.jpg" alt="Grawer laserowy CNC na drewnie i pleksi w studiu Zenith Lab">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Laser CNC</div>
        <h1 class="article-hero-title">Drewno, sklejka czy plexi? Jak dobrać materiał pod grawer i cięcie laserem CNC</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Marzec 2026</span>
          <span>7 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Dobór materiału to jedna z najważniejszych decyzji w całym procesie produkcji laserowej. To właśnie on decyduje o tym, czy gotowy element będzie miał czystą, błyszczącą krawędź, czy też postrzępioną zwęgloną linię; czy grawer będzie czytelny z odległości dwóch metrów, czy ledwo widoczny. W Zenith Lab pracujemy codziennie z laserami CO2 o mocy od 80 W do 150 W i przez lata zebraliśmy praktyczne wnioski, które materiały sprawdzają się w konkretnych zastosowaniach. Ten przewodnik jest skrótem tej wiedzy.</p>

        <h2>Drewno i sklejka — naturalny efekt i duże tolerancje</h2>

        <p><strong>Sklejka brzozowa</strong> i <strong>drewno lite</strong> to wciąż najpopularniejszy wybór klientów zamawiających personalizowane upominki firmowe, dekoracje wnętrz i elementy ekspozycyjne. Powód jest prosty: laser CO2 pracuje na drewnie wyjątkowo chętnie, a efekt graweru — ciemnobrązowe wypalenie na jasnym tle — daje wysoki kontrast bez żadnych dodatkowych zabiegów.</p>

        <p>Wśród <strong>zalet drewna i sklejki</strong> warto wymienić:</p>
        <ul>
          <li><strong>Ciepły, naturalny wygląd</strong> — niepowtarzalne słoje sprawiają, że każda sztuka jest unikatowa, co bywa cenioną cechą przy upominkach premium.</li>
          <li><strong>Dobry kontrast graweru</strong> — wypalona warstwa kontrastuje z jasnym drewnem bez potrzeby malowania.</li>
          <li><strong>Łatwość obróbki</strong> — niskie wymagania co do prędkości i mocy lasera oznaczają krótszy czas produkcji i mniejsze ryzyko błędu.</li>
          <li><strong>Dostępność i cena</strong> — sklejka brzozowa 3 mm i 4 mm to materiał dostępny w każdym formacie, tani w zakupie i łatwy w magazynowaniu.</li>
        </ul>

        <p>Drewno ma jednak swoje ograniczenia. <strong>Zmienny układ słojów</strong> powoduje, że laser inaczej reaguje na partie twarde (jesień) i miękkie (wiosna) — głębokość graweru może się nieznacznie różnić w obrębie jednego elementu. <strong>Wilgotność</strong> drewna ma krytyczne znaczenie: zbyt mokry materiał paruje podczas cięcia, pozostawiając ciemne zacieki i nierówne krawędzie. Zawsze pracujemy na suszonym materiale o wilgotności poniżej 10%. Warto też pamiętać, że <strong>surowe drewno wymaga lakierowania lub olejowania</strong>, jeśli ma być eksponowane w zmiennych warunkach lub regularnie dotykane.</p>

        <p>Do grawerowania wybieramy sklejkę o grubości 3–6 mm; do cięcia elementów dekoracyjnych o małych detalach — 3 mm lub 4 mm. Drewno lite (lipa, buk, brzoza) stosujemy przy grubszych elementach i personalizowanych tabliczkach z pogłębioną rzeźbą.</p>

        <h2>Plexi PMMA — czysta krawędź i świetlisty grawer</h2>

        <p><strong>Plexi (PMMA — polimetakrylan metylu)</strong> to materiał, który w laserowej obróbce daje efekty niemożliwe do uzyskania żadną inną metodą. Cięcie laserem CO2 topi i poleruje krawędź plexi jednocześnie — efekt jest zbliżony do ręcznego polerowania, a uzyskujemy go bez żadnego dodatkowego procesu. To właśnie dlatego <strong>plexi jest niezastąpiona przy szyldach, tabliczkach informacyjnych i elementach ekspozycyjnych</strong>, które mają być eksponowane na blacie lub podświetlane od tyłu.</p>

        <p><strong>Grawer w plexi</strong> działa na odwrotnej zasadzie niż w drewnie — laser nie zwęgla, lecz matuje powierzchnię. W transparentnej plexi daje to efekt mlecznobiałego, rozpraszającego światło nadruku — idealny do kastonów LED i podświetlanych tablic. W barwnej plexi kontrast powstaje przez odsłonięcie warstwy wewnętrznej o innej barwie.</p>

        <p>Kluczowe zalety plexi to:</p>
        <ul>
          <li><strong>Precyzja i powtarzalność cięcia</strong> — minimalne tolerancje, ostre narożniki, detale poniżej 1 mm.</li>
          <li><strong>Polished edge</strong> — polerowana krawędź prosto z lasera, bez dalszej obróbki.</li>
          <li><strong>Dostępność kolorów i grubości</strong> — od 1,5 mm do 20 mm, w setkach kolorów RAL i odcieni transparencji.</li>
          <li><strong>Odporność chemiczna</strong> — plexi nie reaguje z wodą ani większością detergentów, co czyni ją odpowiednią do pomieszczeń mokrych i outdoor przy odpowiednim wykończeniu.</li>
        </ul>

        <p>Słabości PMMA są równie ważne: <strong>złe parametry lasera</strong> (zbyt wolna prędkość, zbyt wysoka moc) powodują mikropęknięcia krawędzi lub nadtopienie materiału. Świeżo cięta plexi jest wrażliwa na zarysowania — zabezpieczamy ją folią ochronną, którą zdejmujemy dopiero przy dostawie. W warunkach outdoorowych warto rozważyć <strong>plexi UV-stabilizowaną</strong>, odporną na żółknięcie pod wpływem promieniowania słonecznego.</p>

        <h2>Szkło i sklejka HDF — kiedy warto</h2>

        <p><strong>Grawerowanie szkła</strong> laserem CO2 to technika dekoracyjna, nie cięcie. Laser nie przecina szkła — mikropulsuje powierzchnię, tworząc matową, mleczną teksturę na tle transparentnego tła. Efekt jest subtelny i elegancki: idealny do personalizowanych kieliszków, tablic, luster. Ryzyko to możliwość <strong>pęknięcia materiału</strong> przy nierównej grubości lub niewłaściwym uchwycie — dlatego zawsze pracujemy na stanowisku z precyzyjnym poziomowaniem i stosujemy mokre grawerowanie (taśma nawilżająca) dla trudnych kształtów.</p>

        <p><strong>Sklejka HDF</strong> (High Density Fiberboard) to zupełnie inny materiał niż popularna MDF — jest znacznie gęstsza, twardsza i jednorodna. Laser tnie ją bardzo czysto, bez strzępienia włókien, a krawędź jest równa i gładka. HDF sprawdza się świetnie przy szablonach, elementach z bardzo małymi detalami i długich seriach produkcyjnych wymagających powtarzalności. Jej wadą jest <strong>mniejsza tolerancja na wilgoć</strong> — pęcznieje szybciej niż sklejka brzozowa. Nie nadaje się do zastosowań zewnętrznych bez odpowiedniego powleczenia.</p>

        <h2>Jak przygotować plik pod laser — 5 kluczowych zasad</h2>

        <p>Jakość pliku źródłowego ma bezpośredni wpływ na jakość grawerowanego lub ciętego elementu. Oto pięć zasad, których przestrzegamy i których wymagamy od klientów przesyłających własne projekty:</p>
        <ul>
          <li><strong>Wektory, nie rastry do cięcia</strong> — pliki AI, SVG lub EPS z wyraźnie zamkniętymi ścieżkami. Otwarte ścieżki powodują niepełne cięcia lub artefakty na krawędziach.</li>
          <li><strong>Kontur vs. wypełnienie</strong> — kontur (stroke) steruje cięciem lub rylcem wzdłuż linii; wypełnienie (fill) uruchamia tryb rastrowania (skanowania). Oddzielaj te warstwy kolorami zgodnymi z profilem maszyny.</li>
          <li><strong>DPI dla rastrów</strong> — jeśli grawerujesz zdjęcie lub logo rastrowe, minimalne DPI to 300 w skali 1:1. Poniżej tej wartości widoczna będzie pikseloza nawet w drewnie.</li>
          <li><strong>Minimalny rozmiar detalu</strong> — dla drewna 3 mm: detal minimalnie 0,8 mm szerokości. Dla plexi 3 mm: 0,5 mm. Poniżej tych wartości detal może się nie wyciąć lub wypalić.</li>
          <li><strong>Kolory warstw</strong> — każdy kolor w pliku odpowiada jednej operacji maszyny (cięcie, grawer głęboki, grawer płytki, rylec). Wyraźnie oznaczone warstwy skracają czas przygotowania do produkcji i eliminują pomyłki.</li>
        </ul>

        <div class="article-callout">
          <p>Nie masz pliku wektorowego? Wyślij zdjęcie lub szkic — przygotujemy plik produkcyjny i pokażemy próbkę przed serią.</p>
        </div>

        <p>Wybór materiału zawsze warto skonsultować z producentem przed złożeniem zamówienia. W Zenith Lab oferujemy bezpłatne próbki grawerowania na wybranym materiale przy zamówieniach seryjnych — tak żeby ostateczny efekt był dokładnie taki, jak oczekiwany, zanim przejdziemy do pełnej produkcji.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Drewno i sklejka — naturalny efekt</a></li>
            <li><a href="#">Plexi PMMA — czysta krawędź</a></li>
            <li><a href="#">Szkło i sklejka HDF</a></li>
            <li><a href="#">Jak przygotować plik — 5 zasad</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Masz projekt do wyceny?</h2>
      <p>Opisz co chcesz stworzyć, a my dobierzemy materiał, technologię i przygotujemy wycenę w 24 godziny.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" onclick="navigatePage('blog-archmodel');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/makietaaglowne.jpeg" alt="Makiety architektoniczne">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Makiety</div>
          <h3 class="blog-card-title">Makiety architektoniczne: skala i detal — co ustalić przed zamówieniem</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Luty 2026</span><span>5 min czytania</span></div>
        </div>
      </div>

      <div class="blog-card" onclick="navigatePage('blog-led-light');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/polexpert.jpg" alt="Kaseton LED podświetlenie">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Kasetony LED</div>
          <h3 class="blog-card-title">Kaseton LED: jak uzyskać równomierne podświetlenie logo</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Styczeń 2026</span><span>6 min czytania</span></div>
        </div>
      </div>

    </div>

  </div>
</div>
`,Q=`<!-- FILE: src/pages/blog-archmodel.html -->
<div class="page" id="page-blog-archmodel">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Makieta architektoniczna: skala, detal i materiał — co ustalić przed zamówieniem",
    "description": "Jak zamówić makietę deweloperską? Kompletna checklista — skala, poziom detalu, materiały, oświetlenie LED i transport. Dla inwestorów i biur architektonicznych.",
    "image": "img/portfolio/makietaaglowne.jpeg",
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "blog-archmodel.html"
    }
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/makietaaglowne.jpeg" alt="Makieta architektoniczna wykonana w Zenith Lab — model deweloperski z oświetleniem LED">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Makiety</div>
        <h1 class="article-hero-title">Makieta architektoniczna: skala, detal i materiał — co ustalić przed zamówieniem</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Luty 2026</span>
          <span>5 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Makieta architektoniczna to jedno z najbardziej efektywnych narzędzi sprzedaży i komunikacji inwestycji deweloperskich. Pozwala pokazać skalę, bryłę i otoczenie w sposób, którego żaden rendering ani animacja 3D nie zastąpi — trójwymiarowy model przyciąga wzrok, zachęca do zatrzymania się przy stoisku i buduje wiarygodność całej inwestycji. Jednak żeby makieta spełniła swoją rolę, kilka kluczowych parametrów trzeba ustalić jeszcze przed wysłaniem pierwszego briefu do studia. Ten artykuł przeprowadza przez cały proces — od wyboru skali po rozwiązania transportowe.</p>

        <h2>Skala makiety — od 1:500 do 1:50</h2>

        <p><strong>Skala to pierwszy i najważniejszy parametr</strong>, bo determinuje wszystkie pozostałe decyzje: rozmiar fizyczny modelu, poziom detalu i orientacyjny czas produkcji. Zasada jest prosta: im mniejsza liczba po dwukropku, tym większy model i więcej widocznych szczegółów.</p>

        <p><strong>Skala 1:500</strong> stosowana jest przy dużych masterplanach i osiedlach wieloetapowych — jeden hektar terenu mieści się wtedy na planszy o wymiarach około 20 × 20 cm. Na takiej skali widać układ ulic, kubatury brył i tereny zielone, ale okna czy balkony są już niewidoczne. To skala dla inwestorów instytucjonalnych i prezentacji urbanistycznych.</p>

        <p><strong>Skala 1:200</strong> to najczęstszy wybór przy makietach deweloperskich na salon sprzedaży. Budynek o wysokości 30 metrów ma na makiecie 15 cm — wystarczy, żeby pokazać podział na kondygnacje, loggie, podcienia i wejścia główne, a jednocześnie model nie zajmuje zbyt dużo miejsca na ekspozytorze. Otoczenie (drogi, parking, zieleń) jest czytelne i skalowalne.</p>

        <p><strong>Skala 1:100</strong> i <strong>1:50</strong> to terytorium makiet koncepcyjnych i konkursowych. Pojedynczy budynek wypełnia planszę 60 × 80 cm lub więcej. Na tej skali widoczne są szczegóły elewacji, podziały okienne, balustradki i detal wejścia. Stosujemy je przy prestiżowych realizacjach lub gdy klient chce pokazać rozwiązania architektoniczne na poziomie koncepcji.</p>

        <p>Przy wyborze skali warto brać pod uwagę nie tylko rozmiar inwestycji, ale też <strong>dostępną przestrzeń ekspozycyjną</strong> — makieta, która nie mieści się na stole w biurze sprzedaży, traci większość swojej funkcji.</p>

        <h2>Poziom detalu — co powinno być widoczne, a co niepotrzebne</h2>

        <p>Klienci często wnioskują o jak największy poziom szczegółowości, zakładając że „więcej detalu = lepsza makieta". W praktyce jednak <strong>nadmierne uszczegółowienie może zaszkodzić czytelności</strong> modelu, szczególnie przy skalach 1:200 i mniejszych. Detal, który nie jest widoczny gołym okiem z odległości metra, tylko wydłuża czas produkcji i podwyższa koszt, nie wnosząc nic do odbioru przez potencjalnego nabywcę.</p>

        <p>W Zenith Lab dzielimy makiety deweloperskie na trzy poziomy szczegółowości:</p>
        <ul>
          <li><strong>LOD 1 — bryła z podziałem kondygnacji</strong>: jednolite, matowe wykończenie ścian, zaznaczone okna jako wgłębienia lub kontrasty kolorystyczne, zaznaczone wejścia. Wystarczające do celów marketingowych i prezentacji zbiorczych.</li>
          <li><strong>LOD 2 — detal elewacji</strong>: loggie, tarasy, kolor i tekstura fasady zbliżona do wizualizacji, różnicowanie materiałów (tynk, cegła, szkło). Czytelne ukształtowanie terenu, parkingi, drogi dojazdowe i zieleń wysoka.</li>
          <li><strong>LOD 3 — detal architektoniczny</strong>: podziały okienne, balustrady, daszki, oświetlenie zewnętrzne, detaliczne opracowanie wejść. Figurki ludzkie i pojazdy dla skali. Stosowane wyłącznie przy makietach konkursowych i prestiżowych projektach komercyjnych.</li>
        </ul>

        <p>Przy makietach sprzedażowych dla deweloperów rekomendujemy <strong>LOD 2 z selektywnie stosowanym LOD 3</strong> w najważniejszych wizualnie punktach modelu (wejście główne, narożnik budynku widoczny od strony ulicy). Sąsiedztwo — istniejące budynki wokół działki — celowo upraszczamy do brył bez detalu, żeby nie konkurowało z głównym obiektem.</p>

        <h2>Materiały: karton, plexi, drewno, druk 3D</h2>

        <p>Współczesna makieta architektoniczna rzadko powstaje z jednego materiału. Każde tworzywo ma inne właściwości optyczne, mechaniczne i estetyczne, dlatego <strong>profesjonalne studio łączy kilka materiałów w jednym modelu</strong>, dobierając je do konkretnej funkcji każdego elementu.</p>

        <p><strong>Karton i tektura modelarska</strong> to klasyczny, lekki materiał do brył budynków i terenu w skalach 1:200 i mniejszych. Łatwy w obróbce laserem, dostępny w wielu kolorach i grubościach. Wadą jest wrażliwość na wilgoć i mechaniczne uszkodzenia — makiety kartoniowe wymagają ostrożnego transportu i przechowywania.</p>

        <p><strong>Plexi PMMA</strong> stosujemy wszędzie tam, gdzie liczy się transparencja (przeszklenia, witryny, attyki) lub precyzja cięcia małych detali. Cięta laserem krawędź plexi jest błyszcząca i czysta — efekt szklany bez użycia prawdziwego szkła. Barwna plexi pozwala odwzorować kolorystykę elewacji z wysoką wiernością.</p>

        <p><strong>Sklejka i drewno</strong> budują bazę makiety — platformę, na której osadzony jest model, i elementy terenu o organicznym charakterze. Drewno nadaje makiecie ciepły, ekskluzywny wygląd, dobrze komponując się z białymi bryłami budynków.</p>

        <p><strong>Druk 3D</strong> (FDM i żywica SLA) wkracza tam, gdzie laser nie sięga: detale organiczne, elementy fasadowe o skomplikowanej geometrii, figurki ludzkie, meble zewnętrzne. Wydruki SLA z żywicy fotopolimerowej dają gładką, malarską powierzchnię gotową do lakierowania — stosujemy je przy elementach widocznych z pierwszego planu.</p>

        <h2>Oświetlenie LED i transport</h2>

        <p><strong>Wbudowane oświetlenie LED</strong> to standard w makietach deweloperskich przeznaczonych na salon sprzedaży. Podświetlona makieta przyciąga wzrok z daleka i eksponuje bryłę nawet przy jasnym oświetleniu pomieszczenia. Projektujemy oświetlenie warstwowo:</p>
        <ul>
          <li><strong>Podświetlenie brył budynków</strong> od wewnątrz — plexi dyfuzorowa rozpraszająca światło równomiernie przez „okna".</li>
          <li><strong>Oświetlenie terenu</strong> — miniatury słupków ulicznych i latarni parkowych, wzdłuż alejek i dróg dojazdowych.</li>
          <li><strong>Akcenty kolorystyczne</strong> — ciepłe LED 3000 K w strefach wypoczynkowych, chłodniejsze 4000–5000 K na elewacjach i wejściach.</li>
        </ul>

        <p>Zasilanie prowadzimy przez podstawę makiety — dyskretny kabel wyprowadzamy przez tylną ściankę platformy do standardowego zasilacza 12 V. Na życzenie klienta montujemy ściemniacz lub wyłącznik czasowy.</p>

        <p>Transport makiety to temat, który często jest pomijany do ostatniej chwili — a powinien być uwzględniony już na etapie projektu. Makiety do 80 × 60 cm transportujemy w skrzyniach drewnianych z wyściółką piankową; większe modele wymagają dedykowanego stelaża z amortyzacją. Do każdej makiety dołączamy <strong>instrukcję montażu i demontażu</strong> elementów wymiennych (np. dachów zdejmowanych do prezentacji wnętrz) oraz listę serwisową z danymi kontaktowymi na wypadek drobnych napraw.</p>

        <div class="article-callout">
          <p>Najczęstszy błąd: klient dostarcza renderingi zamiast DWG. Wyślij plany PDF lub model 3D — skala i zakres ustalamy po briefie telefonicznym.</p>
        </div>

        <p>Dobrze zaprojektowana makieta to inwestycja, która zwraca się wielokrotnie — pracuje w salonie sprzedaży przez cały okres dewelopmentu, pojawia się na targach, konferencjach i w materiałach PR. Warto poświęcić czas na właściwe ustalenie parametrów przed produkcją, żeby gotowy model odpowiadał dokładnie na potrzeby inwestycji.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Skala makiety — od 1:500 do 1:50</a></li>
            <li><a href="#">Poziom detalu — co widoczne</a></li>
            <li><a href="#">Materiały: karton, plexi, drewno, druk 3D</a></li>
            <li><a href="#">Oświetlenie LED i transport</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Planujesz makietę deweloperską?</h2>
      <p>Wyślij nam plany lub model 3D, a wycenimy produkcję w 24 godziny. Brief telefoniczny gratis — ustalamy skalę i zakres razem.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" onclick="navigatePage('blog-material');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/grawer.jpg" alt="Grawer laserowy CNC materiały">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Laser CNC</div>
          <h3 class="blog-card-title">Drewno, sklejka czy plexi? Jak dobrać materiał pod grawer i cięcie laserem CNC</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Marzec 2026</span><span>7 min czytania</span></div>
        </div>
      </div>

      <div class="blog-card" onclick="navigatePage('blog-led-light');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/polexpert.jpg" alt="Kaseton LED podświetlenie">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Kasetony LED</div>
          <h3 class="blog-card-title">Jednolite podświetlenie logo w kaszetonie LED — jak unikać plam i nierówności</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Styczeń 2026</span><span>6 min czytania</span></div>
        </div>
      </div>

    </div>

  </div>
</div>
`,aa=`<!-- FILE: src/pages/blog-led-light.html -->
<div class="page" id="page-blog-led-light">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Jednolite podświetlenie logo w kaszetonie LED — jak unikać plam i nierówności",
    "description": "Co decyduje o równomiernym świetle w kaszetonie LED? Moduły, dyfuzor, głębokość obudowy i CRI — wszystko co musisz wiedzieć zamawiając podświetlane oznakowanie.",
    "image": "img/portfolio/polexpert.jpg",
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-01",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "blog-led-light.html"
    }
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/polexpert.jpg" alt="Kaseton LED z podświetlonym logo — realizacja Zenith Lab">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Kasetony LED</div>
        <h1 class="article-hero-title">Jednolite podświetlenie logo w kaszetonie LED — jak unikać plam i nierówności</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Styczeń 2026</span>
          <span>6 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Kaseton LED z logo firmy to jeden z najbardziej rozpoznawalnych elementów identyfikacji wizualnej — eksponowany całą dobę, widoczny z odległości kilkunastu metrów, pierwszy kontakt klienta z marką. Paradoksalnie to właśnie kasetony najczęściej zawodzą od strony wykonawczej: plamy jasności, nierówne podświetlenie, niewierne odwzorowanie koloru. Efekt jest odwrotny do zamierzonego — zamiast budować prestiż, podświetlone logo wygląda tanio i nieprofesjonalnie. W tym artykule rozkładamy na czynniki pierwsze to, co decyduje o jakości podświetlenia — od modułów LED przez dyfuzor po kalibrację koloru zgodną z brand bookiem.</p>

        <h2>Moduły LED — gęstość i barwa</h2>

        <p>Serce każdego kasetonu to <strong>moduły lub taśmy LED</strong> zamontowane wewnątrz obudowy. Ich jakość i rozmieszczenie determinują równomierność podświetlenia bardziej niż jakikolwiek inny element konstrukcji. Dwa parametry mają tu kluczowe znaczenie: <strong>gęstość rozmieszczenia diod</strong> (wyrażana w LED/m lub w rozstawie modułów) oraz <strong>temperatura barwowa</strong>.</p>

        <p>Przy zbyt małej gęstości LED — typowym błędzie w tanich wykonaniach — na dyfuzorze widać regularne jasne punkty lub pasy odpowiadające rozmieszczeniu źródeł światła. Reguła ogólna: <strong>im mniejsza głębokość obudowy kasetonu, tym większa gęstość LED jest potrzebna</strong> do uzyskania jednolitego rozkładu światła. W płytkich obudowach (głębokość 5–7 cm) stosujemy moduły o rozstawie 5–6 cm; w głębszych (12–15 cm) rozstaw może sięgać 10–12 cm bez widocznych punktów.</p>

        <p><strong>Temperatura barwowa</strong> to parametr, który klienci często traktują jako kwestię gustu, a jest to decyzja strategiczna wynikająca z brand booka i kontekstu ekspozycji:</p>
        <ul>
          <li><strong>3000 K (ciepła biel)</strong> — tworzy przytulną, ciepłą atmosferę; stosowana w gastronomii, butikach, hotelach. Logi w odcieniach złota, beżu i czerwieni wyglądają w tym świetle szczególnie dobrze.</li>
          <li><strong>4000 K (neutralna biel)</strong> — najbardziej uniwersalna temperatura, oddaje kolory wiernie bez dominanty ciepłej ani zimnej. Dobry wybór dla logotypów wielokolorowych i zastosowań biurowych.</li>
          <li><strong>6500 K (zimna biel)</strong> — chłodna, kliniczna biel stosowana w aptekach, placówkach medycznych i salonach samochodowych. Wzmacnia percepcję niebieskich i srebrnych odcieni logo; wychładza i desaturuje ciepłe barwy.</li>
        </ul>

        <p>Obok temperatury barwowej kluczowy jest wskaźnik <strong>CRI (Ra)</strong> — współczynnik oddawania barw. Tanie moduły LED mają CRI około 70–75, co oznacza, że kolory logo są oddawane z błędem. Stosujemy wyłącznie moduły z <strong>CRI ≥ 90</strong>, co przekłada się na wierniejsze odwzorowanie barw loga i lepszą czytelność subtelnych gradientów w logotypach.</p>

        <h2>Dyfuzor — materiał i grubość</h2>

        <p><strong>Dyfuzor</strong> to element przesłaniający bezpośrednio moduły LED i rozpraszający światło w jednolity sposób. To właśnie on — a nie moc LED — decyduje w praktyce o tym, czy kaseton wygląda jak profesjonalne oznakowanie czy jak samodzielnie złożona instalacja.</p>

        <p>Najpopularniejszy materiał to <strong>plexi mleczna (opal)</strong> o grubości 3–5 mm. Jej stopień przepuszczalności światła (transmisja) wynosi typowo 30–55% w zależności od producenta i grubości — to oznacza, że pochłania sporą część strumienia świetlnego, wymagając mocniejszych modułów, ale w zamian daje bardzo równomierny, pozbawiony punktów i pasm rozkład światła. Jest odporna mechanicznie i stosunkowo łatwa do wymiany w razie uszkodzenia.</p>

        <p><strong>Plexi satynowa</strong> (lekko mleczna, z wyraźną przepuszczalnością) daje mniej agresywne rozproszenie i wyższy poziom jasności wyjściowej. Stosujemy ją w kaseonach, gdzie logo ma być intensywnie jasne i kontrastowe, a głębokość obudowy jest wystarczająca do naturalnego rozproszenia punktów. Nie sprawdza się w płytkich kaseonach — przy rozstawie LED powyżej 8 cm i głębokości poniżej 8 cm punkty będą widoczne.</p>

        <p><strong>Folie dyfuzyjne</strong> naklejane na transparentną plexi to rozwiązanie stosowane przy bardzo płytkich profilach i backlit display'ach. Pozwalają precyzyjnie dobrać współczynnik rozproszenia do konkretnej konfiguracji LED, ale są mniej odporne na uszkodzenia mechaniczne.</p>

        <p>Kluczowa zasada, której nigdy nie pomijamy: <strong>odległość między modułem LED a dyfuzorem</strong> musi być wystarczająca do „zmieszania" strug światła z sąsiednich diod. Minimalna odległość to około 60–70% rozstawu między modułami. Skrócenie tej odległości — co zdarza się przy montażu w zbyt płytkich obudowach — zawsze skutkuje widocznymi punktami, których nie zneutralizuje nawet najgęstszy dyfuzor.</p>

        <h2>Obudowa: aluminium vs kompozyt</h2>

        <p>Obudowa kasetonu pełni trzy funkcje: mechaniczną (utrzymuje dyfuzor, moduły i zasilacz), estetyczną (wykończenie widocznych boków i ramy) oraz termiczną (odprowadzanie ciepła od modułów LED). Dwa dominujące materiały to <strong>aluminium i dibond (kompozyt aluminiowy)</strong>.</p>

        <p><strong>Obudowy aluminiowe</strong> — frezowane lub gięte z blachy aluminiowej — to standard dla oznakowania zewnętrznego (outdoor). Aluminium jest odporne na korozję, UV i wahania temperatury od -30°C do +80°C. Doskonale odprowadza ciepło od modułów, co wydłuża żywotność diod LED. Jest jednak cięższe i droższe w obróbce niż alternatywy — dla dużych formatów (powyżej 2 × 1 m) różnica w wadze ma znaczenie przy montażu elewacyjnym.</p>

        <p><strong>Dibond i kompozyty aluminiowe</strong> (dwie warstwy aluminium z rdzeniem polietylenowym) są lżejsze i tańsze w obróbce laserowej i CNC. Świetnie sprawdzają się w zastosowaniach wewnętrznych (indoor): recepcje, korytarze, przestrzenie handlowe. Nie zalecamy ich do montażu zewnętrznego w strefach klimatycznych z dużymi amplitudami temperatur — rdzeń kompozytu reaguje na rozszerzalność termiczną inaczej niż aluminium, co może powodować odkształcenia ramy przy długotrwałej ekspozycji na słońce.</p>

        <p>Przy obydwu materiałach zwracamy uwagę na <strong>system mocowania dyfuzora</strong> — profil z zaciskiem sprężynowym pozwala na szybką wymianę dyfuzora lub modułów bez demontażu całego kasetonu z elewacji. To rozwiązanie zdecydowanie ułatwiające serwisowanie, które polecamy przy każdym zamówieniu.</p>

        <h2>Barwa i brand book — jak przełożyć Pantone na LED</h2>

        <p>To jest temat, który dzieli dobrych wykonawców od złych. Klient z brand bookiem definiującym kolor logo jako Pantone 485 C (intensywna czerwień) oczekuje, że podświetlony kaseton będzie pokazywał dokładnie tę barwę. W praktyce <strong>translacja koloru drukowanego na kolor emitowany przez układ LED + dyfuzor + folie jest procesem wymagającym kalibracji</strong>, nie matematycznej konwersji.</p>

        <p>Kluczowy problem to <strong>metameryzm</strong> — zjawisko polegające na tym, że dwa kolory wyglądające identycznie w jednych warunkach oświetleniowych wyglądają różnie w innych. Folia pokrywająca logo kasetonu, widziana przy świetle dziennym, może mieć inny odcień niż ta sama folia widziana przy podświetleniu 4000 K od wewnątrz. Różnica bywa subtelna (tolerowalna przy mniej wymagających brandach) lub wyraźna (nieakceptowalna przy markach bankowych, medycznych, motoryzacyjnych).</p>

        <p>Nasz proces eliminowania tego ryzyka składa się z trzech kroków:</p>
        <ul>
          <li><strong>Dobór folii drukowanej</strong> zgodnie ze specyfiką podświetlenia — nie stosujemy folii do druku backlit zamiennie z foliami frontlit.</li>
          <li><strong>Próbka podświetlenia</strong> przed produkcją — wykonujemy miniaturową sekcję kasetonu z właściwymi modułami, dyfuzorem i folią i prezentujemy klientowi do akceptacji przed uruchomieniem serii.</li>
          <li><strong>Pomiar koloru na próbce</strong> — przy projektach dla wymagających brandów wykonujemy pomiar spektrofotometrem i porównujemy z referencją Pantone; odchylenie Delta E poniżej 3 jest naszym standardem.</li>
        </ul>

        <div class="article-callout">
          <p>Zawsze robimy próbkę podświetlenia przed produkcją właściwą — żeby kolor był zgodny z brand bookiem, a nie tylko "podobny".</p>
        </div>

        <p>Równomierny kaseton LED to wynik dziesiątek małych decyzji podjętych na etapie projektu — nie przypadek ani właściwość taśmy LED za 20 zł/metr. Jeśli planujesz podświetlane oznakowanie dla swojej firmy lub sieci lokali, zapraszamy do kontaktu — omówimy specyfikę Twojego brand booka i dobierzemy rozwiązanie, które będzie wyglądać dobrze pierwszego dnia i po pięciu latach eksploatacji.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Moduły LED — gęstość i barwa</a></li>
            <li><a href="#">Dyfuzor — materiał i grubość</a></li>
            <li><a href="#">Obudowa: aluminium vs kompozyt</a></li>
            <li><a href="#">Barwa i brand book — Pantone na LED</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Potrzebujesz kasetonu LED dla swojej marki?</h2>
      <p>Podaj wymiary, kolor i miejsce montażu — wycenimy kaseton i przygotujemy próbkę podświetlenia zgodną z Twoim brand bookiem.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" onclick="navigatePage('blog-archmodel');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/makietaaglowne.jpeg" alt="Makiety architektoniczne">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Makiety</div>
          <h3 class="blog-card-title">Makieta architektoniczna: skala, detal i materiał — co ustalić przed zamówieniem</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Luty 2026</span><span>5 min czytania</span></div>
        </div>
      </div>

      <div class="blog-card" onclick="navigatePage('blog-nfc');return false" style="cursor:pointer;">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/breloki-nfc.jpg" alt="Breloki NFC gadżety reklamowe">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Gadżety</div>
          <h3 class="blog-card-title">Breloki NFC jako gadżety promocyjne — co warto wiedzieć przed zamówieniem</h3>
          <div class="blog-card-meta"><span>Zenith Lab</span><span>Grudzień 2025</span><span>4 min czytania</span></div>
        </div>
      </div>

    </div>

  </div>
</div>
`,ea=`<!-- FILE: src/pages/blog-nfc.html -->
<div class="page" id="page-blog-nfc">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Brelok NFC z grawerem: praktyczne zastosowania i jak to dobrze zaplanować",
    "description": "Breloki NFC z grawerem laserowym — od e-wizytówki po kampanię eventową. Jak wybrać tag NFC, zaplanować treść i zamówić personalizowaną serię.",
    "image": "img/portfolio/wizytowki grawer.jpeg",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "datePublished": "2025-12-01",
    "dateModified": "2025-12-01",
    "inLanguage": "pl",
    "keywords": "brelok NFC, grawer laserowy, e-wizytówka, tag NFC, gadżety reklamowe, personalizacja"
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/wizytowki grawer.jpeg" alt="Breloki NFC z grawerem laserowym — Zenith Lab">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Gadżety</div>
        <h1 class="article-hero-title">Brelok NFC z grawerem: praktyczne zastosowania i jak to dobrze zaplanować</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Grudzień 2025</span>
          <span>4 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Brelok z grawerem przestał być tylko ozdobą. Gdy w środku umieścisz <strong>chip NFC</strong>, niepozorny gadżet zamienia się w interaktywny punkt kontaktu z marką — wystarczy jedno przyłożenie telefonu. W Zenith Lab łączymy precyzję lasera z funkcjonalnością technologii zbliżeniowej, żeby każdy brelok realizował konkretny cel komunikacyjny.</p>

        <h2>Co można zakodować w tagu NFC</h2>

        <p>Tag NFC to miniaturowy chip zdolny przechowywać kilkaset bajtów danych — i właśnie ta pojemność wystarczy do zakodowania niemal każdego przekazu, jaki przyda się w biznesie lub na evencie.</p>

        <ul>
          <li><strong>vCard / e-wizytówka</strong> — po przyłożeniu telefonu kontrahent zapisuje numer, e-mail i stanowisko jednym kliknięciem. Koniec z ręcznym wpisywaniem danych.</li>
          <li><strong>Strona WWW lub landing page</strong> — brelok staje się bramką do oferty, portfolio lub sklepu online. Działa jak QR, ale bez konieczności otwierania aparatu.</li>
          <li><strong>Menu restauracji</strong> — zamiast papierowego menu przy stoliku, gość przykłada brelok lub podstawkę NFC i menu otwiera się w przeglądarce.</li>
          <li><strong>Landing page promocji</strong> — idealny na targi i konferencje: rozdajesz breloki, a każdy prowadzi do dedykowanej strony z ofertą eventową.</li>
          <li><strong>Formularz kontaktowy lub ankieta</strong> — zbierasz leady bez drukowania, bez wpisywania adresów URL.</li>
          <li><strong>Link do wizytówki Google Maps</strong> — dla firm lokalnych to najszybsza droga do recenzji lub nawigacji do lokalu.</li>
        </ul>

        <p>Większość tagów NFC działa w standardzie <strong>NTAG213 lub NTAG216</strong> — różnią się pojemnością (144 vs 888 bajtów). Do linku URL i vCard wystarczy tańszy NTAG213. Jeśli planujesz zakodować dłuższe dane lub kilka rekordów NDEF, postaw na NTAG216.</p>

        <h2>Materiał i grawer — sklejka, metal, tworzywo</h2>

        <p>Chip NFC można wmontować niemal w każdy materiał, który nie blokuje sygnału radiowego — a więc unikamy metalu jako warstwy zewnętrznej bezpośrednio nad anteną. Poza tym ograniczeniem masz pełną swobodę wyboru.</p>

        <p><strong>Sklejka (2–4 mm)</strong> to najpopularniejszy wybór przy seriach eventowych i prezentowych. Ciepły, naturalny wygląd drewna świetnie przyjmuje grawer laserowy — kontrast między jasnym drewnem a ciemną, przypalną linią jest bardzo wyraźny. Możesz grawerować logo, imię, numer seryjny, wzór ozdobny. Sklejka jest lekka, ekologiczna i łatwa w personalizacji nawet w dużych seriach.</p>

        <p><strong>Anodowane aluminium</strong> (lub stal nierdzewna z nakładką) to opcja premium. Grawer laserowy usuwa warstwę anodowania, odsłaniając lśniący metal pod spodem — efekt jest elegancki i trwały. Taki brelok dobrze sprawdza się jako upominek korporacyjny lub element pakietu welcome dla nowego pracownika. Antena NFC musi być wtedy umieszczona nieco głębiej lub w odpowiedniej geometrii, żeby metal jej nie ekranował.</p>

        <p><strong>Tworzywo akrylowe lub ABS</strong> pozwala na tańsze serie i kolorowe warianty. Możliwe są zarówno grawer (biała lub czarna kreska w zależności od koloru materiału), jak i cięcie laserowe w dowolnych kształtach — gwiazdka, okrąg, domek. To dobra baza dla gadżetów masowych, np. przy nakładach powyżej 500 sztuk.</p>

        <h2>Ile kosztuje i jak zamówić serię</h2>

        <p>Cena breloka NFC zależy od trzech zmiennych: materiału, nakładu i stopnia personalizacji grawerunku. Dla orientacji:</p>

        <ul>
          <li><strong>Minimum produkcyjne</strong> w Zenith Lab to zazwyczaj 20–50 sztuk — poniżej tej granicy koszt jednostkowy znacznie rośnie przez czas ustawienia maszyny.</li>
          <li><strong>Numeracja i unikalne dane</strong> (różne imiona, różne linki) wymagają pliku z bazą danych w formacie CSV. Każdy rekord jest automatycznie grawerowany i zapisywany na chip — bez ręcznego przepisywania.</li>
          <li><strong>Pakowanie</strong> — breloki możemy dostarczyć luzem, w woreczkach strunowych lub w dedykowanych pudełkach z kartonikiem brandingowym. Pudełka podnoszą koszt, ale znacznie podnoszą też odbiór prezentu.</li>
          <li><strong>Czas realizacji</strong> standardowej serii (sklejka, jeden wzór grawerunku, predefiniowany URL) to 5–10 dni roboczych od akceptacji projektu. Przy personalizacji każdej sztuki lub bardziej złożonym kształcie liczcie na 10–15 dni.</li>
        </ul>

        <p>Do zamówienia potrzebujesz: pliku wektorowego logo lub wzoru (AI, EPS, SVG lub dobrze przygotowany PDF), listy treści tagów (jeden URL dla wszystkich lub plik CSV), informacji o wybranym materiale i ilości. Nasz zespół weryfikuje plik i odsyła proof cyfrowy przed przystąpieniem do produkcji.</p>

        <div class="article-callout">
          <p>Na evencie możesz zmienić treść tagu bez wymiany breloka — jeśli tag jest zapisywalny. Warto to zaplanować z wyprzedzeniem, szczególnie gdy po imprezie chcesz przekierować breloki na inną stronę docelową.</p>
        </div>

        <h2>NFC a QR — kiedy który</h2>

        <p>To pytanie pada niemal przy każdym zapytaniu o gadżety interaktywne. Obie technologie mogą prowadzić do tego samego miejsca w internecie — różni je jednak sposób działania i kontekst użycia.</p>

        <p><strong>NFC</strong> działa bez otwierania aparatu: wystarczy przyłożyć telefon do tagu (smartfony z systemem iOS 11+ i Android z NFC). Odczyt jest szybszy i bardziej dyskretny — na breloku nie widać żadnego kodu kreskowego, grawer pozostaje czysty wizualnie. Wadą jest brak obsługi na starszych urządzeniach i konieczność fizycznego kontaktu.</p>

        <p><strong>QR</strong> działa na każdym smartfonie z aparatem — bez wyjątku. Jest widoczny i komunikuje użytkownikowi, że „tu można coś zeskanować". Minusem jest jednak estetyka: kod kreskowy na breloku może wyglądać tanio lub być zbyt mały, by dał się odczytać po laserowym grawerze.</p>

        <p>W praktyce najczęściej rekomendujemy NFC dla <strong>gadżetów premium i korporacyjnych</strong>, gdzie liczy się elegancja, oraz QR dla <strong>materiałów masowych</strong> (ulotki, opakowania, plakaty), gdzie ważniejsza jest powszechna dostępność. Żadna z technologii nie wymaga baterii ani połączenia po stronie breloka — oba formaty są pasywne i działają latami bez konserwacji.</p>

        <p>Masz projekt breloka lub całej serii gadżetów? Napisz do nas — doradzimy materiał, nakład i format danych, który najlepiej pasuje do Twojej kampanii.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Co można zakodować w tagu NFC</a></li>
            <li><a href="#">Materiał i grawer — sklejka, metal, tworzywo</a></li>
            <li><a href="#">Ile kosztuje i jak zamówić serię</a></li>
            <li><a href="#">NFC a QR — kiedy który</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Zamów personalizowane breloki NFC</h2>
      <p>Powiedz nam, co chcesz zakodować i w ilu sztukach. Przygotujemy wycenę i proof w ciągu 24 godzin.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" data-page="blog-material">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/sklejka.jpeg" alt="Drewno czy plexi — dobór materiału pod laser">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Materiały</div>
          <h3 class="blog-card-title">Drewno, sklejka czy plexi — co wybrać pod laser?</h3>
          <p class="blog-card-excerpt">Porównanie właściwości, cen i efektów grawerowania najpopularniejszych materiałów w Zenith Lab.</p>
          <a class="blog-card-link" href="blog-material.html">Czytaj więcej →</a>
        </div>
      </div>

      <div class="blog-card" data-page="blog-led-light">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/kasetony.jpeg" alt="Kasetony LED z podświetleniem — realizacje Zenith Lab">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Reklama</div>
          <h3 class="blog-card-title">Kasetony LED — kiedy warto i jak je dobrze zaprojektować</h3>
          <p class="blog-card-excerpt">Rodzaje podświetlenia, materiały lica, montaż — wszystko, co musisz wiedzieć przed zamówieniem kasetonu.</p>
          <a class="blog-card-link" href="blog-led-light.html">Czytaj więcej →</a>
        </div>
      </div>
    </div>

  </div>
</div>
`,na=`<!-- FILE: src/pages/blog-3dproto.html -->
<div class="page" id="page-blog-3dproto">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Druk 3D przed formą wtryskową — co sprawdzić w prototypie, żeby nie przepłacić",
    "description": "Jak prototyp FDM lub SLA może zaoszczędzić tysiące złotych przed produkcją seryjną? Tolerancje, montaż, UX — praktyczny poradnik przed zamówieniem formy wtryskowej.",
    "image": "img/portfolio/druk.jpg",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "datePublished": "2025-10-01",
    "dateModified": "2025-10-01",
    "inLanguage": "pl",
    "keywords": "druk 3D, prototyp, forma wtryskowa, FDM, SLA, prototypowanie, produkcja seryjna"
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/druk.jpg" alt="Druk 3D — prototypowanie przed formą wtryskową w Zenith Lab">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Prototypy</div>
        <h1 class="article-hero-title">Druk 3D przed formą wtryskową — co sprawdzić w prototypie, żeby nie przepłacić</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Październik 2025</span>
          <span>7 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Każdy produkt fizyczny przechodzi przez ten sam moment: ktoś decyduje, że projekt jest gotowy i można zamawiać formę wtryskową. To jedna z droższych decyzji w całym procesie produkcji — i jedna z tych, które najtrudniej cofnąć. W Zenith Lab widzimy regularnie, jak <strong>kilka dobrze zaplanowanych prototypów 3D</strong> oszczędza klientom dziesiątki tysięcy złotych. Ten artykuł tłumaczy, dlaczego i co konkretnie sprawdzić, zanim podpiszesz zlecenie na narzędzie.</p>

        <h2>Dlaczego warto prototypować przed formą</h2>

        <p>Forma wtryskowa to precyzyjne narzędzie stalowe lub aluminiowe, które powstaje z myślą o jednej konkretnej geometrii produktu. Jej koszt zaczyna się od <strong>20 000 PLN</strong> przy prostych kształtach jednokomponentowych, a przy złożonych detalach wieloczęściowych lub suwakami sięga <strong>150 000–200 000 PLN</strong> i więcej. To inwestycja, której nie cofasz w jeden dzień.</p>

        <p>Zmiana wymiarów otworu montażowego po zamówieniu formy? Korekta kosztuje od <strong>3 000 do 8 000 PLN</strong> za modyfikację stalowego wkładka. Przy kilku zmianach rachunek rośnie szybciej niż koszt nawet dziesięciu iteracji prototypu drukowanego.</p>

        <p>Tymczasem prototyp FDM z popularnego PLA lub PETG kosztuje w Zenith Lab zwykle <strong>150–400 PLN</strong> w zależności od rozmiaru i złożoności. Iteracja — kolejna wersja po poprawkach w modelu — to kolejne 150–400 PLN i 1–2 dni robocze. Różnica jest fundamentalna.</p>

        <p>Błędy, które najczęściej wyłapujemy na etapie prototypu:</p>
        <ul>
          <li>Za ciasne pasowanie obudowy — cztery ścianki wydruku wymagają korekt zanim model trafi do dokumentacji.</li>
          <li>Klik zatrzasku zbyt miękki lub zbyt twardy — bez fizykalnego testu nie ocenisz tego z modelu 3D na ekranie.</li>
          <li>Prowadzenie kabla koliduje z elementem wzmocnienia — widać dopiero po złożeniu.</li>
          <li>Ergonomia chwytu nieodpowiednia dla grupy docelowej — model 3D na ekranie nie oddaje odczucia w ręku.</li>
        </ul>

        <h2>FDM vs SLA — co wybrać</h2>

        <p>Dwie główne technologie druku 3D dostępne w Zenith Lab różnią się fundamentalnie metodą budowania warstw — i każda ma swój optymalny obszar zastosowania.</p>

        <p><strong>FDM (Fused Deposition Modeling)</strong> to druk z filamentu — materiał jest topiony i nanoszony warstwami. Zalety: niski koszt, duży wybór materiałów (PLA, PETG, ABS, ASA, TPU, Nylon, wypełnienia szklanym włóknem), możliwość druku w dużych rozmiarach. Widoczne linie warstw na bocznych ściankach — zazwyczaj 0.15–0.3 mm — nie przeszkadzają przy testach mechanicznych, ale mogą zaburzać ocenę estetyki finalnego produktu. <strong>FDM wybieraj</strong> do testów wytrzymałościowych, składanych mechanizmów, elementów gdzie liczy się funkcja, nie wygląd.</p>

        <p><strong>SLA (Stereolithography)</strong> utwardza żywicę fotopolimerową punktem lasera UV lub matrycą LCD. Dokładność warstwy to <strong>0.025–0.05 mm</strong>, powierzchnie są gładkie niemal jak formowane wtryskowe. Wadą jest kruchość standardowych żywic SLA — nie nadają się do testów upadkowych ani wielokrotnego zginania. Są też droższe od FDM. <strong>SLA wybieraj</strong> gdy potrzebujesz prezentacji dla klienta lub inwestora, oceny estetyki detalu, modeli z bardzo drobnymi elementami (liternictwo, ażury) lub odwzorowania powierzchni finalnego produktu.</p>

        <p>Przy kompleksowych projektach często drukujemy obie wersje: FDM do testów mechanicznych i SLA do pokazania klientowi jak produkt będzie wyglądał.</p>

        <h2>5 rzeczy do sprawdzenia w prototypie</h2>

        <p>Lista, którą stosujemy w pracowni przy każdym projekcie przechodzącym z prototypu do dokumentacji produkcyjnej:</p>

        <ul>
          <li><strong>1. Tolerancje otworów i pasowania.</strong> Każde połączenie śrubowe, oś, suwak, prowadnica — sprawdź luz i ciasność fizycznie. Druk FDM ma naturalną tendencję do zwężania otworów o 0.1–0.3 mm względem modelu, SLA bywa dokładniejszy. Zawsze mierz suwmiarką, nie ufaj tylko oczom.</li>
          <li><strong>2. Klik zamknięcia i zatrzaski.</strong> Zatrzask, który w modelu CAD wygląda poprawnie, może być zbyt elastyczny (trzeba użyć siły) lub zbyt twardy (ryzyko złamania przy montażu). Prototyp z elastomeru TPU pozwala ocenić ten parametr realistycznie.</li>
          <li><strong>3. Ergonomia chwytu.</strong> Połóż prototyp w dłoni, daj go kilku osobom z grupy docelowej. Czy krawędzie nie wcinają się w palce? Czy guzik jest pod kciukiem? Czy waga i wyważenie są akceptowalne? To pytania, na które model cyfrowy nie odpowie.</li>
          <li><strong>4. Prowadzenie kabli i ścieżki PCB.</strong> Jeśli produkt ma elektronikę, wstaw do prototypu prawdziwy PCB lub jego makietę. Sprawdź, czy złącza wychodzą tam gdzie planowano, czy nie ma kolizji z obudową, czy kanał kablowy ma właściwy luz przy zginaniu przewodu.</li>
          <li><strong>5. Estetyka przy kliencie.</strong> Pomaluj lub zalakieruj prototyp SLA w docelowym kolorze i pokaż klientowi przed zamówieniem formy. Proporcje, które wyglądają dobrze na renderze, mogą być inne w rzeczywistości. Lepiej to odkryć teraz.</li>
        </ul>

        <div class="article-callout">
          <p>Zasada z pracowni: jeśli prototyp nie przeszedł testu upuszczenia z 1 m, forma na pewno nie powinna iść do produkcji. Test upadkowy jest brutalny, ale tani — i dużo tańszy niż recall serii po zgłoszeniach reklamacyjnych.</p>
        </div>

        <h2>Od prototypu do serii — kolejne kroki</h2>

        <p>Gdy prototyp przejdzie wszystkie testy i zostanie zaakceptowany przez klienta, zaczyna się dokumentacja produkcyjna. To etap, który skraca czas wdrożenia formy i zmniejsza ryzyko nieporozumień z narzędziownią.</p>

        <p><strong>Dokumentacja pomiarowa</strong> — sporządzamy protokół z kluczowymi wymiarami prototypu zmierzonymi suwmiarką i w razie potrzeby skanerem 3D. Plik ten idzie razem z modelem CAD do narzędziowni jako punkt odniesienia.</p>

        <p><strong>Iteracje projektowe</strong> — standardowy projekt przechodzi przez 2–4 rewizje prototypu zanim trafi do formy. Każda iteracja to zwykle kilka poprawek w modelu CAD, nowy wydruk i nowe testy. Zaplanuj na to czas i budżet — 2–6 tygodni w zależności od złożoności.</p>

        <p><strong>Zlecenie formy</strong> — po zatwierdzeniu prototypu przygotowujemy pełny pakiet dokumentacji: model 3D w formacie STEP, rysunki techniczne z tolerancjami, specyfikację materiału wtryskowego i wymagania powierzchniowe. Im lepszy brief, tym mniej pytań od narzędziowni i krótszy czas realizacji.</p>

        <p><strong>Mała seria pilotażowa</strong> — pierwsze 50–200 sztuk z formy warto traktować jako rozszerzoną weryfikację. Sprawdzasz powtarzalność wymiarów, jakość powierzchni, odrzucalność z formy. Dopiero po akceptacji serii pilotażowej włączasz pełną produkcję.</p>

        <p>Masz projekt gotowy do prototypowania? Prześlij nam model STEP lub STL — ocenimy technologię, materiał i koszty iteracji w ciągu jednego dnia roboczego.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Dlaczego warto prototypować przed formą</a></li>
            <li><a href="#">FDM vs SLA — co wybrać</a></li>
            <li><a href="#">5 rzeczy do sprawdzenia w prototypie</a></li>
            <li><a href="#">Od prototypu do serii — kolejne kroki</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Zamów prototyp przed formą wtryskową</h2>
      <p>Prześlij model 3D lub brief — wycenimy druk FDM lub SLA i doradzimy, ile iteracji zaplanować przed produkcją seryjną.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" data-page="blog-material">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/sklejka.jpeg" alt="Materiały pod laser — sklejka, plexi, MDF">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Materiały</div>
          <h3 class="blog-card-title">Drewno, sklejka czy plexi — co wybrać pod laser?</h3>
          <p class="blog-card-excerpt">Porównanie właściwości, cen i efektów grawerowania najpopularniejszych materiałów w Zenith Lab.</p>
          <a class="blog-card-link" href="blog-material.html">Czytaj więcej →</a>
        </div>
      </div>

      <div class="blog-card" data-page="blog-archmodel">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/makiety.jpeg" alt="Makiety architektoniczne — realizacje Zenith Lab">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Makiety</div>
          <h3 class="blog-card-title">Makiety architektoniczne — jak powstają i kiedy warto je zamówić</h3>
          <p class="blog-card-excerpt">Od modelu CAD do fizycznej makiety w skali — materiały, technologie i harmonogram realizacji.</p>
          <a class="blog-card-link" href="blog-archmodel.html">Czytaj więcej →</a>
        </div>
      </div>
    </div>

  </div>
</div>
`,ia=`<!-- FILE: src/pages/blog-glass.html -->
<div class="page" id="page-blog-glass">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Grawerowanie szkła laserem CO2 — efekty, ograniczenia i kiedy warto",
    "description": "Grawerowanie szkła laserem CO2 — matowy efekt, parametry, ryzyko pęknięcia i alternatywy. Praktyczne informacje z pracowni Zenith Lab dla zamawiających.",
    "image": "img/portfolio/grawer desek.jpeg",
    "author": {
      "@type": "Organization",
      "name": "Zenith Lab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenith Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "img/logo.svg"
      }
    },
    "datePublished": "2025-11-01",
    "dateModified": "2025-11-01",
    "inLanguage": "pl",
    "keywords": "grawerowanie szkła, laser CO2, efekt frosted, matowy grawer, szkło grawerowane, Zenith Lab"
  }
  <\/script>

  <div class="blog-article-page">

    <a class="article-back reveal" href="blog.html">← Wróć do bloga</a>

    <div class="article-hero">
      <img class="article-hero-img" src="img/portfolio/grawer desek.jpeg" alt="Grawerowanie szkła laserem CO2 — efekty z pracowni Zenith Lab">
      <div class="article-hero-overlay"></div>
      <div class="article-hero-content">
        <div class="article-tag">Laser CNC</div>
        <h1 class="article-hero-title">Grawerowanie szkła laserem CO2 — efekty, ograniczenia i kiedy warto</h1>
        <div class="article-hero-meta">
          <span>Zenith Lab</span>
          <span>Listopad 2025</span>
          <span>5 min czytania</span>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <article class="article-body">

        <p>Szkło grawerowane laserem to jeden z bardziej efektownych sposobów na trwałe oznakowanie produktu lub stworzenie wyjątkowego upominku. Zanim jednak złożysz zamówienie, warto wiedzieć, jak ta technologia rzeczywiście działa, co jest możliwe, a gdzie leżą granice procesu. W Zenith Lab grawerujemy szkło regularnie — i równie regularnie tłumaczymy klientom, dlaczego hartowane kieliszki to zły pomysł na pierwszą próbę.</p>

        <h2>Jak laser CO2 działa na szkło</h2>

        <p>Laser CO2 emituje promieniowanie w zakresie podczerwieni (długość fali ~10,6 µm), które jest bardzo dobrze absorbowane przez szkło. W odróżnieniu od metali, szkło <strong>nie topi się pod wiązką</strong> — zamiast tego w miejscu trafienia dochodzi do gwałtownego, lokalnego wzrostu temperatury, który powoduje <strong>mikropęknięcia i krusze nie powierzchni</strong>. Efekt wizualny przypomina piaskowanie lub szlifowanie: w miejscu grawerunku szkło staje się matowe i mleczno-białe na tle przezroczystego tła.</p>

        <p>Kluczowe parametry procesu to moc wiązki i prędkość przesuwu głowicy. Zbyt wysoka moc przy zbyt niskiej prędkości oznacza nadmierne nagrzewanie miejscowe — szkło może pęknąć lub powstają głębokie wykruszenia psujące krawędzie detalu. Zbyt niska moc daje efekt nieczytelny, zbyt jasny. Właściwy balans zależy od grubości szkła, jego składu chemicznego i tego, czy jest to szkło float, borowo-krzemowe czy kryształowe. <strong>Każdy nowy rodzaj materiału wymaga testów na próbce</strong> — nie ma jednego zestawu parametrów dla wszystkich szkieł.</p>

        <p>Ważna jest też technika skanowania: przy grawerowaniu powierzchniowym głowica przesuwa się wierszami rastrowo (jak drukarka), co daje wypełnione pola grafiki. Cięcie i konturowanie laserem po szkle nie jest standardowo wykonywane — do cięcia szkła stosuje się inne metody (diament, strumieniowe).</p>

        <h2>Jakie efekty można osiągnąć na szkle</h2>

        <p>Wbrew pozorom paleta efektów laserowych na szkle jest dość precyzyjna, choć ograniczona w porównaniu z drewnem czy akrylem.</p>

        <p><strong>Matowy grawer na przezroczystym tle</strong> — klasyczny i najpopularniejszy efekt. Logo, napis, ilustracja stają się mleczno-białe i wyraźnie widoczne zarówno przy świetle rozproszonym, jak i podświetleniu od tyłu. Taki efekt stosujemy na kieliszkach, szklanych podstawkach, karafkach i elementach dekoracyjnych.</p>

        <p><strong>Wgłębiony napis lub płaskorzeźba</strong> — możliwe przy wielokrotnym przejeździe lub wyższej mocy, ale wymaga bardzo ostrożnego doboru parametrów. Zbyt agresywny grawer wieloprzejściowy podnosi ryzyko pęknięcia materiału.</p>

        <p><strong>Próg detalu</strong> wynosi w naszej pracowni około <strong>0,5 mm</strong> dla linii pojedynczych i drobnych elementów liternictwa. Poniżej tej granicy kruszenie powierzchni nie daje czytelnych, ostrych krawędzi — szczegóły się zlewają. Przy projektowaniu logo do grawerowania na szkle warto uprościć wzory: unikać bardzo cienkich kresek, małych czcionek poniżej 8 pt i drobnych ornamentów.</p>

        <p><strong>Kolor graweru</strong> — laser CO2 sam w sobie nie zmienia barwy szkła, wyłącznie jego strukturę powierzchniową. Matowy obszar można jednak po grawerowaniu <strong>wypełnić farbą lub emalią</strong> (np. złotą, czarną, kolorową), co daje efekt trwałego nadruku wtopionegow powierzchnię. To popularna opcja przy nagrodzonych statuetkach, kryształowych elementach trofeów i szklanej galanterii reklamowej.</p>

        <h2>Ograniczenia i ryzyko pęknięć</h2>

        <p>Tu nie można owijać w bawełnę: <strong>grawerowanie laserem na szkle wiąże się z ryzykiem strat materiałowych</strong> i każdy zamawiający powinien być tego świadomy.</p>

        <p><strong>Szkło hartowane</strong> to absolutne tabu. Hartowanie polega na wprowadzeniu do szkła naprężeń ściskających — i właśnie te naprężenia powodują, że jakiekolwiek lokalne nagrzewanie laserem prowadzi do natychmiastowego, eksplozywnego pęknięcia całej tafli na drobne kawałki. Nie istnieje bezpieczny sposób grawerowania szkła hartowanego laserem CO2 — jeśli producent nie może potwierdzić, że szkło nie jest hartowane, nie podejmujemy się zlecenia.</p>

        <p><strong>Szkło float i borokrzemowe</strong> (pyrex, duran) znoszą grawerowanie dobrze. Float to standardowe szkło okienne i budowlane — najczęstszy materiał w grawerowanych gadżetach. Borokrzemowe jest odporniejsze termicznie i bardziej przewidywalne w obróbce laserowej.</p>

        <p><strong>Minimalna grubość</strong> materiału to w praktyce <strong>4 mm</strong> przy standardowych parametrach. Cieńsze tafle mają za małą masę termiczną, żeby odprowadzić ciepło z punktu graweru — gradient temperatury jest zbyt gwałtowny i materiał pęka.</p>

        <p><strong>Chłodzenie i tempo pracy</strong> — przy dłuższych grawerunkach (duże powierzchnie rastrowe) stosujemy przerwy lub wolniejsze posuwiste, żeby dać materiałowi czas na odprowadzenie ciepła. Pośpiech w tym procesie jest najczęstszą przyczyną niespodziewanego pęknięcia w połowie zlecenia.</p>

        <p>Straty materiałowe przy typowym zleceniu to 5–15%, a przy pierwszym grawerowaniu na nieznanym gatunku szkła mogą być wyższe. Dlatego zawsze prosimy o naddatek materiałowy.</p>

        <div class="article-callout">
          <p>Zawsze prosimy o naddatek materiałowy przy szkle — szczególnie przy pierwszym zamówieniu na danym szkle. Próbka kosztuje mniej niż gotowe logo po raz drugi. Jeden test kalibracyjny na fragmencie tego samego szkła ratuje cały projekt.</p>
        </div>

        <h2>Alternatywy dla szkła — kiedy wybrać plexi lub drewno</h2>

        <p>Grawerowanie na szkle ma swój unikalny, premium charakter — ale nie zawsze jest optymalnym wyborem. Warto znać alternatywy i wiedzieć, kiedy sięgnąć po inny materiał.</p>

        <p><strong>Plexi (PMMA / akryl)</strong> to najczęstszy zamiennik. Jest lżejsza od szkła, tańsza, mniej krucha i doskonale przyjmuje grawer laserowy — efekt matowego wykruszenia jest podobny, ale bez ryzyka pęknięcia. Plexi dostępna jest w dziesiątkach kolorów i grubości, można ją ciąć laserem w dowolne kształty. Dla gadżetów, kasetonu z podświetleniem, trofeów czy plansz informacyjnych plexi jest często lepszym wyborem niż szkło — przy niższym koszcie i krótszym czasie realizacji.</p>

        <p><strong>Piaskowanie</strong> daje głębszy i bardziej efektowny efekt matowania niż laser, szczególnie na grubszym szkle. Jeśli zależy ci na wyraźnie wgłębionym grawerze z dużym kontrastem dotykowym, piaskowanie (przez szablon wycinany laserem) jest warte rozważenia. Wadą jest trudniejsza personalizacja jednostkowa i wyższy koszt małych serii.</p>

        <p><strong>Trawienie chemiczne</strong> — przy dużych seriach (setki lub tysiące sztuk) trawienie kwasem fluorowodorowym przez szablon daje powtarzalne, precyzyjne efekty na szkle płaskim i zakrzywionym. To technologia przemysłowa — nie realizujemy jej w Zenith Lab, ale możemy skierować do odpowiedniego podwykonawcy przy większych zleceniach.</p>

        <p>Chcesz wiedzieć, czy Twój projekt nadaje się pod laser na szkle? Prześlij nam zdjęcie materiału i plik z grafiką — ocenimy realność projektu i zaproponujemy najlepszą technologię bez zbędnych kosztów testów po Twojej stronie.</p>

      </article>

      <aside class="article-sidebar">
        <div class="article-toc">
          <div class="toc-title">Spis treści</div>
          <ul class="toc-list">
            <li><a href="#">Jak laser CO2 działa na szkło</a></li>
            <li><a href="#">Jakie efekty można osiągnąć na szkle</a></li>
            <li><a href="#">Ograniczenia i ryzyko pęknięć</a></li>
            <li><a href="#">Alternatywy — kiedy wybrać plexi lub drewno</a></li>
          </ul>
        </div>
      </aside>

    </div>

    <div class="article-cta reveal">
      <h2>Zapytaj o grawerowanie szkła</h2>
      <p>Prześlij zdjęcie materiału i grafikę — ocenimy projekt, dobierzemy parametry i powiemy wprost, czy szkło jest tu najlepszym wyborem.</p>
      <a class="btn-xl" href="contact.html">Wyceń projekt →</a>
    </div>

    <div class="article-related">
      <div class="section-label">Więcej z bloga</div>

      <div class="blog-card" data-page="blog-material">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/sklejka.jpeg" alt="Drewno, sklejka czy plexi — dobór materiału pod laser">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Materiały</div>
          <h3 class="blog-card-title">Drewno, sklejka czy plexi — co wybrać pod laser?</h3>
          <p class="blog-card-excerpt">Porównanie właściwości, cen i efektów grawerowania najpopularniejszych materiałów w Zenith Lab.</p>
          <a class="blog-card-link" href="blog-material.html">Czytaj więcej →</a>
        </div>
      </div>

      <div class="blog-card" data-page="blog-3dproto">
        <div class="blog-card-img-wrap">
          <img src="img/portfolio/druk.jpg" alt="Druk 3D przed formą wtryskową — prototypowanie">
        </div>
        <div class="blog-card-body">
          <div class="article-tag">Prototypy</div>
          <h3 class="blog-card-title">Druk 3D przed formą wtryskową — co sprawdzić w prototypie</h3>
          <p class="blog-card-excerpt">Jak prototyp FDM lub SLA oszczędza tysiące złotych przed produkcją seryjną — praktyczny poradnik.</p>
          <a class="blog-card-link" href="blog-3dproto.html">Czytaj więcej →</a>
        </div>
      </div>
    </div>

  </div>
</div>
`,oa=`<div class="page" id="page-regulamin">
<div class="legal-page">

  <div class="legal-header">
    <div class="section-label">Dokumenty prawne</div>
    <h1 class="legal-h1">Regulamin świadczenia usług</h1>
    <p class="legal-intro">Poniższy regulamin określa zasady zamawiania i realizacji usług w pracowni Zenith Lab. Prosimy o zapoznanie się z jego treścią przed złożeniem zamówienia.</p>
    <div class="legal-meta">Obowiązuje od: 1 stycznia 2026 &nbsp;·&nbsp; Wersja 1.0</div>
  </div>

  <div class="legal-body">

    <section class="legal-section">
      <h2>§ 1. Postanowienia ogólne</h2>
      <ol>
        <li>Niniejszy Regulamin określa zasady świadczenia usług przez pracownię Zenith Lab, zwaną dalej „Wykonawcą" lub „Zenith Lab", na rzecz klientów zwanych dalej „Zamawiającymi".</li>
        <li>Zenith Lab prowadzi działalność w zakresie produkcji fizycznej, obejmującej m.in. makiety architektoniczne, cięcie i grawerowanie laserem CNC, druk 3D, kasetony LED podświetlane oraz gadżety reklamowe.</li>
        <li>Złożenie zamówienia jest równoznaczne z akceptacją niniejszego Regulaminu.</li>
        <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego oraz inne powszechnie obowiązujące przepisy prawa polskiego.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 2. Zakres usług</h2>
      <ol>
        <li>Zenith Lab świadczy usługi w następującym zakresie:
          <ul>
            <li>Projektowanie i wykonywanie makiet architektonicznych deweloperskich i prezentacyjnych;</li>
            <li>Cięcie i grawerowanie materiałów (drewno, sklejka, plexi, szkło, MDF) przy użyciu lasera CO₂;</li>
            <li>Druk 3D metodami FDM i SLA oraz obróbka podrukowa;</li>
            <li>Produkcja kaszetów LED podświetlanych z logo lub grafiką;</li>
            <li>Wykonywanie gadżetów reklamowych: wizytówki, stojaki, breloki NFC, nagrody i puchary;</li>
            <li>Prototypowanie produktów i małe serie.</li>
          </ul>
        </li>
        <li>Szczegółowy zakres każdego zlecenia ustalany jest indywidualnie przed wystawieniem wyceny.</li>
        <li>Wykonawca zastrzega sobie prawo do odmowy realizacji zlecenia bez podania przyczyny.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 3. Składanie zamówień i wycena</h2>
      <ol>
        <li>Zamówienia przyjmowane są drogą elektroniczną przez formularz kontaktowy na stronie zenithlab.pl, pocztą e-mail lub telefonicznie.</li>
        <li>Do przygotowania wyceny Zamawiający powinien dostarczyć:
          <ul>
            <li>Opis przedmiotu zamówienia (wymiary, materiał, technologia, ilość);</li>
            <li>Pliki projektowe w formatach: DXF, SVG, AI, PDF, STL, OBJ lub podobnych;</li>
            <li>Informacje o pożądanym terminie realizacji;</li>
            <li>Ewentualne próbki lub zdjęcia poglądowe.</li>
          </ul>
        </li>
        <li>Wycena przygotowywana jest bezpłatnie w terminie do 3 dni roboczych od otrzymania kompletnych materiałów.</li>
        <li>Wycena ważna jest przez 14 dni od daty jej przesłania.</li>
        <li>Zaakceptowanie wyceny przez Zamawiającego (pisemnie lub e-mailem) stanowi zawarcie umowy o dzieło.</li>
        <li>Wykonawca zastrzega możliwość zmiany wyceny w przypadku istotnej zmiany zakresu zlecenia przez Zamawiającego po zawarciu umowy.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 4. Płatności</h2>
      <ol>
        <li>Ceny podane w wycenie są cenami netto; do podanej kwoty doliczany jest podatek VAT według obowiązującej stawki, o ile Wykonawca jest płatnikiem VAT.</li>
        <li>Przy zleceniach o wartości przekraczającej 500 zł netto Wykonawca może żądać zaliczki w wysokości do 50% wartości zamówienia, płatnej przed przystąpieniem do realizacji.</li>
        <li>Pozostała kwota płatna jest przed odbiorem gotowego przedmiotu lub przed jego wysyłką.</li>
        <li>Akceptowane formy płatności: przelew bankowy, płatność gotówkowa przy odbiorze osobistym (do kwoty określonej przepisami prawa).</li>
        <li>Fakturę VAT lub paragon fiskalny Wykonawca wystawia na życzenie Zamawiającego.</li>
        <li>W przypadku opóźnienia w płatności Wykonawca ma prawo naliczać odsetki ustawowe za opóźnienie.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 5. Realizacja i terminy</h2>
      <ol>
        <li>Termin realizacji ustalany jest indywidualnie i podany jest w wycenie lub potwierdzeniu zamówienia.</li>
        <li>Termin realizacji liczony jest od dnia:
          <ul>
            <li>zaakceptowania wyceny przez Zamawiającego, oraz</li>
            <li>otrzymania przez Wykonawcę kompletu materiałów niezbędnych do realizacji, oraz</li>
            <li>zaksięgowania zaliczki na rachunku Wykonawcy (jeśli dotyczy).</li>
          </ul>
        </li>
        <li>Wykonawca informuje o ewentualnych opóźnieniach niezwłocznie po ich stwierdzeniu.</li>
        <li>Wykonawca nie ponosi odpowiedzialności za opóźnienia spowodowane siłą wyższą ani przez działania lub zaniechania Zamawiającego (np. późne dostarczenie plików, brak odpowiedzi na pytania).</li>
        <li>Na życzenie Zamawiającego możliwa jest realizacja w trybie ekspresowym — wiąże się to z doliczeniem dodatkowej opłaty ustalonej indywidualnie.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 6. Dostawa i odbiór</h2>
      <ol>
        <li>Gotowe przedmioty można odebrać osobiście w siedzibie pracowni po uprzednim umówieniu terminu.</li>
        <li>Na życzenie Zamawiającego Wykonawca może zorganizować wysyłkę kurierską. Koszt wysyłki pokrywa Zamawiający i jest doliczany do faktury lub regulowany oddzielnie.</li>
        <li>Ryzyko uszkodzenia przedmiotu przechodzi na Zamawiającego z chwilą jego odbioru lub z chwilą przekazania kurierowi (przy wysyłce).</li>
        <li>Przy wysyłce delikatnych elementów (np. makiet architektonicznych, szkła) Wykonawca stosuje odpowiednie opakowanie ochronne; koszt specjalnego opakowania może zostać doliczony do faktury.</li>
        <li>Zamawiający zobowiązany jest do sprawdzenia stanu przesyłki w obecności kuriera i w przypadku stwierdzenia uszkodzeń — sporządzenia protokołu szkody.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 7. Reklamacje</h2>
      <ol>
        <li>Zamawiający ma prawo złożyć reklamację w przypadku niezgodności wykonanego przedmiotu z ustalonym zamówieniem lub wyceny.</li>
        <li>Reklamacje należy zgłaszać pisemnie (e-mailem na adres kontakt@zenithlab.pl) w terminie 7 dni od daty odbioru przedmiotu, załączając opis niezgodności i dokumentację fotograficzną.</li>
        <li>Wykonawca rozpatruje reklamacje w terminie do 14 dni roboczych od ich otrzymania.</li>
        <li>W przypadku uznania reklamacji Wykonawca według własnego wyboru:
          <ul>
            <li>nieodpłatnie usunie wadę lub wykona przedmiot ponownie, albo</li>
            <li>zwróci Zamawiającemu część wynagrodzenia odpowiednią do stopnia niezgodności.</li>
          </ul>
        </li>
        <li>Reklamacja nie przysługuje w przypadkach:
          <ul>
            <li>różnic estetycznych wynikających z właściwości materiału (np. usłojenie drewna, naturalne przebarwienia);</li>
            <li>wad wynikających z błędów w plikach dostarczonych przez Zamawiającego;</li>
            <li>uszkodzeń powstałych po wydaniu przedmiotu z winy Zamawiającego.</li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 8. Własność intelektualna</h2>
      <ol>
        <li>Pliki projektowe dostarczone przez Zamawiającego pozostają jego własnością intelektualną.</li>
        <li>Zamawiający oświadcza, że posiada prawa do dostarczonych materiałów i ponosi pełną odpowiedzialność za ewentualne naruszenie praw osób trzecich.</li>
        <li>Wykonawca może wykorzystywać zdjęcia wykonanych przedmiotów w celach marketingowych (portfolio, media społecznościowe, strona internetowa), o ile Zamawiający nie zastrzeże inaczej w pisemnym oświadczeniu złożonym przed realizacją.</li>
        <li>Projekty i szablony przygotowane przez Zenith Lab na potrzeby zlecenia stanowią własność Wykonawcy, chyba że strony pisemnie postanowią inaczej.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 9. Odpowiedzialność</h2>
      <ol>
        <li>Łączna odpowiedzialność Wykonawcy za szkody wyrządzone Zamawiającemu nie może przekroczyć wartości danego zlecenia.</li>
        <li>Wykonawca nie ponosi odpowiedzialności za szkody pośrednie ani utracone korzyści Zamawiającego.</li>
        <li>Wykonawca nie odpowiada za opóźnienia lub niemożność realizacji spowodowaną niedostępnością materiałów u dostawców, awariami urządzeń z przyczyn niezawinionych ani innymi okolicznościami niezależnymi od Wykonawcy.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 10. Zmiany Regulaminu</h2>
      <ol>
        <li>Zenith Lab zastrzega sobie prawo do zmiany niniejszego Regulaminu. Zmiany wchodzą w życie z dniem ich publikacji na stronie zenithlab.pl.</li>
        <li>Do zamówień złożonych przed zmianą Regulaminu stosuje się wersję obowiązującą w dniu złożenia zamówienia.</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>§ 11. Kontakt</h2>
      <p>W sprawie zamówień, wycen oraz wszelkich pytań dotyczących Regulaminu prosimy o kontakt:</p>
      <ul>
        <li>E-mail: <a href="mailto:kontakt@zenithlab.pl">kontakt@zenithlab.pl</a></li>
        <li>Telefon: <a href="tel:+48530177581">+48 530 177 581</a></li>
        <li>Formularz kontaktowy: <a href="contact.html">zenithlab.pl/kontakt</a></li>
      </ul>
    </section>

    <div class="legal-footer-links">
      <a href="privacy.html">Polityka prywatności</a>
      <span class="legal-sep">·</span>
      <a href="cookies.html">Polityka cookies</a>
      <span class="legal-sep">·</span>
      <a href="contact.html">Kontakt</a>
    </div>

  </div>
</div>
</div>
`,ta=`<div class="page" id="page-privacy">
<div class="legal-page">

  <div class="legal-header">
    <div class="section-label">Dokumenty prawne</div>
    <h1 class="legal-h1">Polityka prywatności</h1>
    <p class="legal-intro">Dbamy o Twoje dane osobowe i przetwarzamy je zgodnie z Rozporządzeniem (UE) 2016/679 (RODO) oraz obowiązującymi przepisami polskiego prawa. Poniżej opisujemy, jakie dane zbieramy, w jakim celu i jakie masz prawa.</p>
    <div class="legal-meta">Obowiązuje od: 1 stycznia 2026 &nbsp;·&nbsp; Wersja 1.0</div>
  </div>

  <div class="legal-body">

    <section class="legal-section">
      <h2>1. Administrator danych osobowych</h2>
      <p>Administratorem Twoich danych osobowych jest:</p>
      <div class="legal-callout">
        <strong>Zenith Lab</strong><br>
        ul. Środkowa 1D, 96-300 Korytów A<br>
        E-mail: <a href="mailto:kontakt@zenithlab.pl">kontakt@zenithlab.pl</a><br>
        Tel.: <a href="tel:+48530177581">+48 530 177 581</a>
      </div>
      <p>W sprawach dotyczących przetwarzania danych osobowych możesz kontaktować się bezpośrednio z Administratorem pod wskazanymi powyżej danymi kontaktowymi.</p>
    </section>

    <section class="legal-section">
      <h2>2. Jakie dane zbieramy</h2>
      <p>Zbieramy wyłącznie dane niezbędne do realizacji celu, w jakim zostały nam przekazane:</p>
      <ul>
        <li><strong>Dane kontaktowe:</strong> imię, nazwisko, adres e-mail, numer telefonu — podawane przez Ciebie dobrowolnie w formularzu kontaktowym lub korespondencji;</li>
        <li><strong>Dane firmowe:</strong> nazwa firmy, NIP, adres — wymagane do wystawienia faktury VAT;</li>
        <li><strong>Dane adresowe:</strong> adres dostawy — wymagany przy wysyłce zamówienia;</li>
        <li><strong>Treść korespondencji:</strong> wiadomości e-mail, opisy projektów, pliki projektowe przesłane w celu wyceny lub realizacji zlecenia;</li>
        <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, czas wizyty — zbierane automatycznie przez serwer hostingowy i ewentualnie narzędzia analityczne (patrz Polityka cookies).</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>3. Cele i podstawy prawne przetwarzania</h2>
      <div class="legal-table-wrap">
        <table class="legal-table">
          <thead>
            <tr><th>Cel przetwarzania</th><th>Podstawa prawna (RODO)</th></tr>
          </thead>
          <tbody>
            <tr><td>Obsługa zapytań i przygotowanie wyceny</td><td>Art. 6 ust. 1 lit. b — działania przedumowne</td></tr>
            <tr><td>Realizacja zamówienia i umowy</td><td>Art. 6 ust. 1 lit. b — wykonanie umowy</td></tr>
            <tr><td>Wystawianie faktur i dokumentacji księgowej</td><td>Art. 6 ust. 1 lit. c — obowiązek prawny</td></tr>
            <tr><td>Marketing bezpośredni (newsletter, oferty)</td><td>Art. 6 ust. 1 lit. a — zgoda (opcjonalnie)</td></tr>
            <tr><td>Obrona przed roszczeniami / dochodzenie roszczeń</td><td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes</td></tr>
            <tr><td>Analiza statystyczna ruchu na stronie</td><td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="legal-section">
      <h2>4. Okres przechowywania danych</h2>
      <ul>
        <li><strong>Dane związane z realizacją zlecenia</strong> — przechowywane przez 5 lat od końca roku, w którym zamówienie zostało zrealizowane (wymogi podatkowe i rachunkowe);</li>
        <li><strong>Dokumentacja księgowa (faktury)</strong> — przez 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku;</li>
        <li><strong>Zapytania, które nie przekształciły się w zlecenie</strong> — przez 12 miesięcy od ostatniej korespondencji;</li>
        <li><strong>Dane przetwarzane na podstawie zgody</strong> — do czasu cofnięcia zgody;</li>
        <li><strong>Dane w celach obrony przed roszczeniami</strong> — do czasu przedawnienia roszczeń (co do zasady 3 lata od zdarzenia).</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>5. Odbiorcy danych</h2>
      <p>Twoje dane mogą być udostępniane następującym kategoriom odbiorców:</p>
      <ul>
        <li><strong>Firmy kurierskie</strong> — wyłącznie w zakresie danych adresowych, niezbędnych do dostarczenia zamówienia;</li>
        <li><strong>Biuro rachunkowe / księgowe</strong> — w zakresie danych wymaganych do obsługi dokumentacji finansowej;</li>
        <li><strong>Dostawcy oprogramowania</strong> (hosting, e-mail, narzędzia CRM) — na podstawie umów powierzenia przetwarzania danych, zgodnie z RODO;</li>
        <li><strong>Organy publiczne</strong> — wyłącznie gdy obowiązek taki wynika z przepisów prawa (np. organy podatkowe).</li>
      </ul>
      <p>Nie sprzedajemy ani nie udostępniamy Twoich danych podmiotom trzecim w celach reklamowych bez Twojej zgody.</p>
    </section>

    <section class="legal-section">
      <h2>6. Przekazywanie danych poza EOG</h2>
      <p>Co do zasady nie przekazujemy danych osobowych do krajów spoza Europejskiego Obszaru Gospodarczego. W przypadku korzystania z narzędzi, których serwery zlokalizowane są poza EOG (np. niektóre usługi e-mail lub analityczne), dochodzi do tego wyłącznie w oparciu o odpowiednie mechanizmy zabezpieczające (np. standardowe klauzule umowne zatwierdzone przez Komisję Europejską).</p>
    </section>

    <section class="legal-section">
      <h2>7. Twoje prawa</h2>
      <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
      <ul>
        <li><strong>Prawo dostępu</strong> — możesz uzyskać informację o tym, jakie Twoje dane przetwarzamy;</li>
        <li><strong>Prawo do sprostowania</strong> — możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych;</li>
        <li><strong>Prawo do usunięcia</strong> („prawo do bycia zapomnianym") — możesz żądać usunięcia danych w przypadkach przewidzianych w art. 17 RODO;</li>
        <li><strong>Prawo do ograniczenia przetwarzania</strong> — możesz żądać ograniczenia przetwarzania w przypadkach z art. 18 RODO;</li>
        <li><strong>Prawo do przenoszenia danych</strong> — dane przetwarzane automatycznie na podstawie zgody lub umowy możesz otrzymać w ustrukturyzowanym formacie;</li>
        <li><strong>Prawo sprzeciwu</strong> — możesz sprzeciwić się przetwarzaniu danych na podstawie prawnie uzasadnionego interesu Administratora;</li>
        <li><strong>Prawo do cofnięcia zgody</strong> — w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem;</li>
        <li><strong>Prawo do skargi</strong> — masz prawo wnieść skargę do organu nadzorczego: Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
      </ul>
      <p>Aby skorzystać ze swoich praw, skontaktuj się z nami pisemnie pod adresem: <a href="mailto:kontakt@zenithlab.pl">kontakt@zenithlab.pl</a>. Odpowiemy bez zbędnej zwłoki, nie później niż w ciągu 30 dni.</p>
    </section>

    <section class="legal-section">
      <h2>8. Bezpieczeństwo danych</h2>
      <p>Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych przed nieuprawnionym dostępem, utratą lub zniszczeniem. Dostęp do danych mają wyłącznie osoby upoważnione, zobowiązane do zachowania poufności.</p>
      <p>Strona internetowa zenithlab.pl korzysta z szyfrowanego połączenia HTTPS, co chroni dane przesyłane przez formularz kontaktowy.</p>
    </section>

    <section class="legal-section">
      <h2>9. Pliki cookies</h2>
      <p>Strona internetowa zenithlab.pl korzysta z plików cookies. Szczegółowe informacje na temat stosowanych plików cookies, ich rodzajów oraz sposobu zarządzania nimi znajdziesz w <a href="cookies.html">Polityce cookies</a>.</p>
    </section>

    <section class="legal-section">
      <h2>10. Zmiany Polityki prywatności</h2>
      <p>Zastrzegamy sobie prawo do zmiany niniejszej Polityki prywatności w przypadku zmian w przepisach prawa lub zmian w sposobie przetwarzania danych. Aktualna wersja zawsze dostępna jest pod adresem zenithlab.pl/privacy.html. Data ostatniej aktualizacji podana jest na górze dokumentu.</p>
    </section>

    <div class="legal-footer-links">
      <a href="regulamin.html">Regulamin</a>
      <span class="legal-sep">·</span>
      <a href="cookies.html">Polityka cookies</a>
      <span class="legal-sep">·</span>
      <a href="contact.html">Kontakt</a>
    </div>

  </div>
</div>
</div>
`,ra=`<div class="page" id="page-cookies">
<div class="legal-page">

  <div class="legal-header">
    <div class="section-label">Dokumenty prawne</div>
    <h1 class="legal-h1">Polityka cookies</h1>
    <p class="legal-intro">Niniejsza Polityka wyjaśnia, czym są pliki cookies, jakie rodzaje stosujemy na stronie zenithlab.pl oraz jak możesz nimi zarządzać.</p>
    <div class="legal-meta">Obowiązuje od: 1 stycznia 2026 &nbsp;·&nbsp; Wersja 1.0</div>
  </div>

  <div class="legal-body">

    <section class="legal-section">
      <h2>1. Czym są pliki cookies?</h2>
      <p>Pliki cookies (tzw. „ciasteczka") to małe pliki tekstowe zapisywane na urządzeniu końcowym użytkownika (komputerze, smartfonie, tablecie) przez przeglądarkę internetową podczas odwiedzania strony. Cookies pozwalają stronie zapamiętać Twoje preferencje i działania przez pewien czas, dzięki czemu nie musisz ich ponownie wpisywać przy kolejnej wizycie.</p>
      <p>Pliki cookies mogą być zapisywane przez stronę, którą odwiedzasz (cookies własne), lub przez zewnętrznych dostawców usług (cookies podmiotów trzecich).</p>
    </section>

    <section class="legal-section">
      <h2>2. Jakie pliki cookies stosujemy</h2>

      <h3>2.1 Niezbędne (wymagane)</h3>
      <p>Są konieczne do prawidłowego działania strony i nie mogą zostać wyłączone bez utraty podstawowych funkcjonalności. Nie przechowują żadnych danych osobowych i nie służą celom marketingowym.</p>
      <div class="legal-table-wrap">
        <table class="legal-table">
          <thead><tr><th>Nazwa</th><th>Dostawca</th><th>Cel</th><th>Czas ważności</th></tr></thead>
          <tbody>
            <tr><td>zenith_cookie_consent</td><td>zenithlab.pl</td><td>Zapamiętuje wybór zgody na cookies</td><td>12 miesięcy</td></tr>
            <tr><td>PHPSESSID / session</td><td>zenithlab.pl</td><td>Sesja użytkownika</td><td>Sesja przeglądarki</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2.2 Analityczne (opcjonalne)</h3>
      <p>Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają ze strony — jakie strony są najpopularniejsze i jak poruszają się po serwisie. Dane zbierane są w formie zagregowanej i anonimowej.</p>
      <div class="legal-table-wrap">
        <table class="legal-table">
          <thead><tr><th>Nazwa</th><th>Dostawca</th><th>Cel</th><th>Czas ważności</th></tr></thead>
          <tbody>
            <tr><td>_ga</td><td>Google Analytics</td><td>Rozróżnia użytkowników (anonimowy identyfikator)</td><td>2 lata</td></tr>
            <tr><td>_ga_XXXXXX</td><td>Google Analytics</td><td>Utrzymuje stan sesji</td><td>2 lata</td></tr>
            <tr><td>_gid</td><td>Google Analytics</td><td>Rozróżnia użytkowników (sesja)</td><td>24 godziny</td></tr>
          </tbody>
        </table>
      </div>
      <p>Google Analytics jest skonfigurowany z anonimizacją adresów IP. Dane zbierane przez Google podlegają <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Polityce prywatności Google</a>.</p>

      <h3>2.3 Marketingowe / funkcjonalne (opcjonalne)</h3>
      <p>Aktualnie strona zenithlab.pl nie stosuje cookies marketingowych. Jeśli w przyszłości zostaną wdrożone, zaktualizujemy niniejszą Politykę i poprosimy o odrębną zgodę.</p>
    </section>

    <section class="legal-section">
      <h2>3. Jak zarządzać plikami cookies</h2>
      <p>Możesz kontrolować cookies na kilka sposobów:</p>

      <h3>3.1 Ustawienia przeglądarki</h3>
      <p>Każda nowoczesna przeglądarka pozwala zarządzać ustawieniami cookies — blokować je całkowicie, akceptować wybiórczo lub usuwać zapisane pliki. Instrukcje dla popularnych przeglądarek:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/pl/kb/ciasteczka" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plików-cookie-w-przeglądarce-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <div class="legal-callout legal-callout--warn">
        <strong>Uwaga:</strong> Wyłączenie wszystkich cookies może wpłynąć na działanie niektórych funkcji strony. Cookies niezbędne są wymagane do podstawowego funkcjonowania serwisu.
      </div>

      <h3>3.2 Rezygnacja z Google Analytics</h3>
      <p>Możesz zablokować śledzenie przez Google Analytics, instalując oficjalną wtyczkę do przeglądarki: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
    </section>

    <section class="legal-section">
      <h2>4. Zgoda na cookies</h2>
      <p>Przy pierwszej wizycie na stronie zenithlab.pl wyświetlamy baner informujący o stosowaniu cookies. Korzystając ze strony bez zmiany ustawień przeglądarki, wyrażasz zgodę na stosowanie plików cookies zgodnie z niniejszą Polityką.</p>
      <p>Zgodę możesz cofnąć w dowolnym momencie, zmieniając ustawienia swojej przeglądarki lub usuwając zapisane pliki cookies. Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem.</p>
    </section>

    <section class="legal-section">
      <h2>5. Linki do zewnętrznych stron</h2>
      <p>Strona zenithlab.pl może zawierać linki do stron zewnętrznych. Nie ponosimy odpowiedzialności za politykę prywatności ani cookies stosowanych przez te strony. Zalecamy zapoznanie się z polityką każdej odwiedzanej witryny.</p>
    </section>

    <section class="legal-section">
      <h2>6. Zmiany Polityki cookies</h2>
      <p>Zastrzegamy sobie prawo do zmiany niniejszej Polityki cookies w związku ze zmianami technologicznymi lub prawnymi. Aktualna wersja zawsze dostępna jest pod adresem zenithlab.pl/cookies.html. O istotnych zmianach poinformujemy poprzez wyraźny komunikat na stronie.</p>
    </section>

    <section class="legal-section">
      <h2>7. Kontakt</h2>
      <p>Pytania dotyczące plików cookies lub przetwarzania danych osobowych kieruj na adres:</p>
      <ul>
        <li>E-mail: <a href="mailto:kontakt@zenithlab.pl">kontakt@zenithlab.pl</a></li>
        <li>Telefon: <a href="tel:+48530177581">+48 530 177 581</a></li>
      </ul>
      <p>Więcej informacji o przetwarzaniu danych osobowych znajdziesz w <a href="privacy.html">Polityce prywatności</a>.</p>
    </section>

    <div class="legal-footer-links">
      <a href="regulamin.html">Regulamin</a>
      <span class="legal-sep">·</span>
      <a href="privacy.html">Polityka prywatności</a>
      <span class="legal-sep">·</span>
      <a href="contact.html">Kontakt</a>
    </div>

  </div>
</div>
</div>
`,sa=`<div class="page" id="page-404">
<div class="page-404">
<div class="hero-glow" style="top:50%;transform:translateY(-50%)"></div>
<div class="e404-num">404</div>
<h2 class="e404-title">Takiej podstrony tu nie ma.</h2>
<p class="e404-sub">Wróć na stronę główną albo napisz do nas — pomożemy znaleźć to, czego szukasz (makieta, laser, kaseton, gadżety…).</p>
<a class="btn-xl" href="index.html" style="display:inline-flex"><span>Strona główna</span> <span class="btn-xl-arrow">→</span></a>
</div>
</div>
`,Z={home:"Zenith Lab — makiety, laser CNC, grawer i druk 3D",print3d:"Druk 3D i prototypy — Zenith Lab",archmodels:"Makiety architektoniczne deweloperskie — Zenith Lab",led:"Kasetony LED podświetlane — Zenith Lab",engraving:"Grawer i cięcie laserem CNC — Zenith Lab",prototypes:"Prototypy produktów — Zenith Lab",gadgets:"Gadżety reklamowe z grawerem — Zenith Lab",portfolio:"Realizacje — makiety, laser, LED, druk 3D — Zenith Lab",contact:"Kontakt — wycena makiety, lasera, druku 3D — Zenith Lab",blog:"Blog — materiały, laser CNC, makiety, LED — Zenith Lab","blog-material":"Drewno, sklejka czy plexi? Dobór materiału pod laser CNC — Zenith Lab","blog-archmodel":"Makieta architektoniczna: skala, detal, materiał — Zenith Lab","blog-led-light":"Jednolite podświetlenie LED w kaszetonie — Zenith Lab","blog-nfc":"Brelok NFC z grawerem — zastosowania i planowanie — Zenith Lab","blog-3dproto":"Druk 3D przed formą wtryskową — co sprawdzić — Zenith Lab","blog-glass":"Grawerowanie szkła laserem CO2 — efekty i ograniczenia — Zenith Lab",regulamin:"Regulamin świadczenia usług — Zenith Lab",privacy:"Polityka prywatności — Zenith Lab",cookies:"Polityka cookies — Zenith Lab","not-found":"404 — Zenith Lab"},la="✓ Wysłano — dziękujemy!",x=Object.fromEntries(Object.entries(Object.assign({})).flatMap(([e,n])=>{const i=e.replace(/\\/g,"/").replace(/^(\.\.\/)+/,""),o=[[i,n]];return i.startsWith("img/")&&o.push([`../${i}`,n]),o}));function D(a){return x[a]??x[`../${a}`]??x[a.replace(/^\.\/?/,"")]??a}function ca(a){return a.replace(/(src|data-imgs)=("|')([^"']+?)(\2)/g,(e,n,i,o)=>{if(n==="src"&&o.startsWith("img/"))return`${n}=${i}${D(o)}${i}`;if(n==="data-imgs")try{const t=JSON.parse(o);if(!Array.isArray(t))return e;const r=t.map(l=>typeof l=="string"?D(l):l);return`${n}=${i}${JSON.stringify(r)}${i}`}catch{return e}return e})}const P="zenith-main",k={home:R,print3d:K,archmodels:J,led:q,engraving:U,prototypes:_,gadgets:H,portfolio:V,contact:X,blog:$,"blog-material":Y,"blog-archmodel":Q,"blog-led-light":aa,"blog-nfc":ea,"blog-3dproto":na,"blog-glass":ia,regulamin:oa,privacy:ta,cookies:ra,"not-found":sa};function E(){const a=document.documentElement.dataset.zenithPage;return a==="not-found"?"not-found":a&&a in k?a:"home"}function O(){const a=window.location.hash.replace(/^#/,"");return a&&a in k?a:null}function da(a){if(!a||a.startsWith("mailto:")||a.startsWith("tel:")||a.startsWith("http")||!a.endsWith(".html"))return null;const n=(a.replace(/\\/g,"/").split("/").pop()??a).replace(/\.html$/,"");return n==="index"?"home":n==="404"?"not-found":n in k?n:null}function pa(){if(document.getElementById(P))return;const a=O()??E();document.body.insertAdjacentHTML("afterbegin",B+`<div id="${P}"></div>`+G),j(a)}function za(a){const e=a==="print3d"||a==="archmodels"||a==="led"||a==="engraving"||a==="prototypes"||a==="gadgets";document.querySelectorAll("#nav .nav-links a[data-n]").forEach(n=>{n.classList.remove("active");const i=n.getAttribute("data-n");i===a&&n.classList.add("active"),i==="services"&&e&&n.classList.add("active")})}function ya(){var a,e;(a=document.getElementById("mobile-nav"))==null||a.classList.remove("open"),(e=document.getElementById("mobile-nav-backdrop"))==null||e.classList.remove("open"),document.body.style.overflow=""}function wa(){var a,e;(a=document.getElementById("mobile-nav"))==null||a.classList.add("open"),(e=document.getElementById("mobile-nav-backdrop"))==null||e.classList.add("open"),document.body.style.overflow="hidden"}function W(){const a=document.querySelectorAll(".page .reveal:not(.visible)");if(!a.length)return;const e=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target instanceof HTMLElement&&(i.target.classList.add("visible"),e.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});a.forEach(n=>e.observe(n))}function A(a){if(a!=="home")return;[{id:"c1",target:127,duration:1800},{id:"c2",target:6,duration:1400},{id:"c3",target:15,duration:1600}].forEach(({id:n,target:i,duration:o})=>{const t=document.getElementById(n);if(!t)return;const r=t,l=performance.now();function z(d){const c=Math.min((d-l)/o,1),y=1-Math.pow(1-c,3);r.textContent=String(Math.round(y*i)),c<1&&requestAnimationFrame(z)}requestAnimationFrame(z)})}function ma(a){a.disabled=!0,a.innerHTML=la,a.style.background="#1a4a00",a.style.cursor="default"}window.addEventListener("load",()=>{setTimeout(()=>{var a;(a=document.getElementById("loader"))==null||a.classList.add("hide")},1800)});window.addEventListener("scroll",()=>{const a=document.getElementById("nav");a&&a.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});function ga(){document.addEventListener("click",a=>{const e=a.target,n=e==null?void 0:e.closest("#page-portfolio .filter-btn");if(!n)return;document.querySelectorAll("#page-portfolio .filter-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active");const i=n.dataset.filter;i&&document.querySelectorAll("#pf-grid .portfolio-item").forEach(o=>{const t=i==="all"||o.dataset.filter===i;o.style.display=t?"":"none"})})}const ka=[{cat:"Figurki 3D · model",title:"Figurki 3D",desc:"Druk 3D z ręcznym wykończeniem",photos:["img/portfolio/orzel.jpg","img/portfolio/hero-background.jpg","img/portfolio/figurka.jpg"]},{cat:"Gadżety · merch",title:"Magnesy personalizowane",desc:"Seria personalizowana dla klienta",photos:["img/portfolio/magnes.jpg"]},{cat:"Grawer · drewno",title:"Stolik z grawerem laserowym",desc:"Grawer dekoracyjny, drewno naturalne",photos:["img/portfolio/stolik grawer.jpg"]},{cat:"Kaseton LED",title:"Logo podświetlane — recepcja",desc:"Równomierne światło, kolor z brand booka",photos:["img/portfolio/polexpert.jpg","img/portfolio/image0 (14).jpg"]},{cat:"Makieta · deweloper",title:"Zagospodarowanie terenu, osiedle mieszkaniowe",desc:"Prezentacja inwestycji w biurze sprzedaży",photos:["img/portfolio/makietaaglowne.jpeg","img/portfolio/makietaa.jpeg","img/portfolio/makietaa2.jpeg","img/portfolio/makietaa3.jpeg","img/portfolio/makietaa4.jpeg","img/portfolio/makietaa5.jpeg","img/portfolio/hustawka.jpg","img/portfolio/hustawka2.jpg","img/portfolio/hustawka3.jpg","img/portfolio/makieta architektoniczna 2.jpeg","img/portfolio/makieta architektoniczna.jpeg","img/portfolio/makieta architektoniczna 3.jpeg"]},{cat:"Prototyp · gadżet",title:"Lampka nocna, obudowa głosnika",desc:"Prototyp funkcjonalny z elementami docelowymi, do testów użytkowych",photos:["img/portfolio/lampka nocna.jpeg","img/portfolio/obudowa glosnik.jpeg","img/portfolio/obudowa glosnik2.jpeg"]},{cat:"Deski grawerowane · kuchnia",title:"Deski do krojenia z personalizowanym grawerem",desc:"Drewno, laser CNC",photos:["img/portfolio/deska wosp.jpeg","img/portfolio/grawer.jpg"]},{cat:"Gadżety · event",title:"Gadżety eventowe",desc:"Produkty promocyjne dla wydarzeń",photos:["img/portfolio/soccerball.jpeg","img/portfolio/soccerball2.jpeg","img/portfolio/soccerball3.jpeg"]},{cat:"Puchary · Nagrody",title:"Gadżety eventowe",desc:"Produkty promocyjne dla wydarzeń",photos:["img/portfolio/figurka_nbp.jpg","img/portfolio/puchar tlok.jpeg","img/portfolio/puchar.jpeg","img/portfolio/puchary grawer.jpeg","img/portfolio/puchary.jpg"]}],ua=ka.map(a=>({...a,photos:a.photos.map(D)})),s={project:null,photo:0};function va(a){document.body.style.overflow="hidden",requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.add("is-open")})})}function ba(a){const e=ua[a];if(!(e!=null&&e.photos.length))return;const n=document.getElementById("zlb"),i=document.getElementById("zlb-track"),o=document.getElementById("zlb-thumbs"),t=document.getElementById("zlb-cat"),r=document.getElementById("zlb-title"),l=document.getElementById("zlb-desc"),z=document.getElementById("zlb-counter");if(!n||!i||!o||!t||!r||!l||!z)return;s.project=e,s.photo=0,t.textContent=e.cat,r.textContent=e.title,l.textContent=e.desc,i.innerHTML="",o.innerHTML="",e.photos.forEach((M,u)=>{const m=document.createElement("img");m.src=M,m.alt=e.title,u===0?(m.loading="eager",m.fetchPriority="high"):m.loading="lazy",u===0&&m.classList.add("zactive"),i.appendChild(m);const v=document.createElement("div");v.className="zlb-thumb"+(u===0?" zactive":""),v.tabIndex=0;const h=document.createElement("img");h.src=M,h.alt="",h.loading=u===0?"eager":"lazy",v.appendChild(h);const I=u;v.addEventListener("click",()=>g(I)),o.appendChild(v)}),T(z);const d=e.photos.length<=1,c=document.getElementById("zlb-prev"),y=document.getElementById("zlb-next");c&&(c.style.display=d?"none":""),y&&(y.style.display=d?"none":"");const w=i.querySelector("img"),f=()=>va(n);w&&"decode"in w?w.decode().then(f).catch(f):f()}function L(){var a;(a=document.getElementById("zlb"))==null||a.classList.remove("is-open"),document.body.style.overflow="",s.project=null}function T(a){const e=s.project;e&&(a.textContent=`${s.photo+1} / ${e.photos.length}`)}function g(a){var z,d,c,y,w;const e=s.project;if(!e)return;const n=document.getElementById("zlb-track"),i=document.getElementById("zlb-thumbs"),o=document.getElementById("zlb-counter");if(!n||!i||!o)return;const t=n.querySelectorAll("img"),r=i.querySelectorAll(".zlb-thumb"),l=e.photos.length;!l||!t.length||((z=t[s.photo])==null||z.classList.remove("zactive"),(d=r[s.photo])==null||d.classList.remove("zactive"),s.photo=(a%l+l)%l,(c=t[s.photo])==null||c.classList.add("zactive"),(y=r[s.photo])==null||y.classList.add("zactive"),(w=r[s.photo])==null||w.scrollIntoView({behavior:"auto",block:"nearest",inline:"center"}),T(o))}let N=!1;function ha(){N||(N=!0,document.addEventListener("click",a=>{const e=a.target,n=e==null?void 0:e.closest("#page-portfolio .pf-card-trigger");if(n){const o=n.closest(".portfolio-item");if(!o)return;const t=parseInt(o.getAttribute("data-project")??"",10);if(Number.isNaN(t))return;a.preventDefault(),a.stopPropagation(),ba(t);return}const i=document.getElementById("zlb");if(i!=null&&i.classList.contains("is-open")){if(e!=null&&e.closest("#zlb-bg")){L();return}if(e!=null&&e.closest("#zlb-close")){L();return}if(e!=null&&e.closest("#zlb-prev")){g(s.photo-1);return}if(e!=null&&e.closest("#zlb-next")){g(s.photo+1);return}}}),document.addEventListener("keydown",a=>{const e=document.getElementById("zlb");e!=null&&e.classList.contains("is-open")&&(a.key==="Escape"&&L(),a.key==="ArrowLeft"&&g(s.photo-1),a.key==="ArrowRight"&&g(s.photo+1))}))}function ja(){const a=document.getElementById("zlb-stage");if(!a)return;let e=null;a.addEventListener("touchstart",n=>{var i;e=((i=n.touches[0])==null?void 0:i.clientX)??null},{passive:!0}),a.addEventListener("touchend",n=>{var o;if(e===null)return;const i=(((o=n.changedTouches[0])==null?void 0:o.clientX)??e)-e;Math.abs(i)>48&&g(s.photo+(i<0?1:-1)),e=null},{passive:!0})}function fa(){const a=document.getElementById("cursor-ring");if(!a)return;const e=a;let n=0,i=0,o=0,t=0,r=!1;document.addEventListener("mousemove",d=>{n=d.clientX,i=d.clientY,r||(e.style.opacity="1",r=!0)},{passive:!0}),document.addEventListener("mouseleave",()=>{e.style.opacity="0"}),document.addEventListener("mouseenter",()=>{r&&(e.style.opacity="1")});function l(){o+=(n-o)*.15,t+=(i-t)*.15,e.style.left=o+"px",e.style.top=t+"px",requestAnimationFrame(l)}l();const z="a,button,.service-card,.work-card,.pricing-card,.portfolio-item,.blog-card,.testi-card,.nav-item-dropdown";document.addEventListener("mouseover",d=>{var y;(y=d.target)!=null&&y.closest(z)&&(e.style.width="36px",e.style.height="36px",e.style.borderColor="rgba(200,255,87,0.7)")}),document.addEventListener("mouseout",d=>{var w;const c=d.relatedTarget;(w=c==null?void 0:c.closest)!=null&&w.call(c,z)||(e.style.width="20px",e.style.height="20px",e.style.borderColor="var(--accent)")})}function j(a){const e=document.getElementById(P);if(!e)return;const n=k[a]?a:"not-found";document.documentElement.dataset.zenithPage=n,window.location.hash=n==="home"?"":`#${n}`,e.innerHTML=ca(k[n]??k["not-found"]),document.title=Z[n]??Z["not-found"],za(n),W(),n==="portfolio"&&ja(),setTimeout(()=>A(n),600),window.scrollTo({top:0,behavior:"smooth"})}window.navigatePage=j;window.openMobileNav=wa;const p={photos:[],idx:0};function xa(){var e,n,i,o;let a=document.getElementById("svc-lb");return a||(a=document.createElement("div"),a.id="svc-lb",a.className="svc-lb",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.innerHTML='<div class="svc-lb-bg" id="svc-lb-bg"></div><div class="svc-lb-shell"><div class="svc-lb-stage" id="svc-lb-stage"><div class="svc-lb-track" id="svc-lb-track"></div><button class="svc-lb-arrow svc-lb-prev" id="svc-lb-prev" aria-label="Poprzednie">&#8592;</button><button class="svc-lb-arrow svc-lb-next" id="svc-lb-next" aria-label="Następne">&#8594;</button><button class="svc-lb-close" id="svc-lb-close" aria-label="Zamknij">&#x2715;</button><div class="svc-lb-counter" id="svc-lb-counter"></div></div></div>',document.body.appendChild(a),(e=a.querySelector("#svc-lb-bg"))==null||e.addEventListener("click",C),(n=a.querySelector("#svc-lb-close"))==null||n.addEventListener("click",C),(i=a.querySelector("#svc-lb-prev"))==null||i.addEventListener("click",()=>b(p.idx-1)),(o=a.querySelector("#svc-lb-next"))==null||o.addEventListener("click",()=>b(p.idx+1))),a}function La(a,e=0){p.photos=a,p.idx=e;const n=xa(),i=document.getElementById("svc-lb-track");i&&(i.innerHTML="",a.forEach((o,t)=>{const r=document.createElement("img");r.src=o,r.alt="",r.loading=t===0?"eager":"lazy",t===0&&r.classList.add("svc-active"),i.appendChild(r)})),F(),Da(),document.body.style.overflow="hidden",requestAnimationFrame(()=>requestAnimationFrame(()=>n.classList.add("is-open")))}function C(){var a;(a=document.getElementById("svc-lb"))==null||a.classList.remove("is-open"),document.body.style.overflow=""}function b(a){var o,t;const e=p.photos.length,n=(a%e+e)%e,i=document.getElementById("svc-lb-track");if(i){const r=i.querySelectorAll("img");(o=r[p.idx])==null||o.classList.remove("svc-active"),(t=r[n])==null||t.classList.add("svc-active")}p.idx=n,F()}function F(){const a=document.getElementById("svc-lb-counter");a&&(a.textContent=`${p.idx+1} / ${p.photos.length}`)}function Da(){const a=p.photos.length<=1,e=document.getElementById("svc-lb-prev"),n=document.getElementById("svc-lb-next");e&&(e.style.display=a?"none":""),n&&(n.style.display=a?"none":"")}let S=!1;function Pa(){if(S)return;S=!0,document.addEventListener("click",e=>{const n=e.target,i=n==null?void 0:n.closest(".service-visual[data-imgs]");if(!i)return;e.preventDefault();let o=[];try{o=JSON.parse(i.dataset.imgs??"[]")}catch{o=[]}o.length&&La(o)}),document.addEventListener("keydown",e=>{const n=document.getElementById("svc-lb");n!=null&&n.classList.contains("is-open")&&(e.key==="Escape"&&C(),e.key==="ArrowLeft"&&b(p.idx-1),e.key==="ArrowRight"&&b(p.idx+1))});let a=null;document.addEventListener("touchstart",e=>{var i;const n=document.getElementById("svc-lb");n!=null&&n.classList.contains("is-open")&&(a=((i=e.touches[0])==null?void 0:i.clientX)??null)},{passive:!0}),document.addEventListener("touchend",e=>{var o;const n=document.getElementById("svc-lb");if(!(n!=null&&n.classList.contains("is-open"))||a===null)return;const i=(((o=e.changedTouches[0])==null?void 0:o.clientX)??a)-a;Math.abs(i)>48&&b(p.idx+(i<0?1:-1)),a=null},{passive:!0})}pa();ga();ha();Pa();fa();W();setTimeout(()=>A(E()),600);document.addEventListener("click",a=>{var i;const e=(i=a.target)==null?void 0:i.closest("a[href]");if(!e)return;const n=da(e.getAttribute("href"));n&&(a.preventDefault(),j(n))});window.addEventListener("hashchange",()=>{const a=O();a&&a!==E()&&j(a)});window.closeMobileNav=ya;window.handleFormSubmit=ma;
