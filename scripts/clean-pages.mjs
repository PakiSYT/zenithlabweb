import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const route = {
  home: 'index.html',
  about: 'about.html',
  services: 'services.html',
  print3d: 'print3d.html',
  archmodels: 'archmodels.html',
  led: 'led.html',
  engraving: 'engraving.html',
  prototypes: 'prototypes.html',
  gadgets: 'gadgets.html',
  portfolio: 'portfolio.html',
  pricing: 'pricing.html',
  contact: 'contact.html',
  blog: 'blog.html',
};

function stripI18n(html) {
  return html
    .replace(/\s+data-i18n-html="[^"]*"/g, '')
    .replace(/\s+data-i18n-placeholder="[^"]*"/g, '')
    .replace(/\s+data-i18n="[^"]*"/g, '');
}

function fixShowPage(html) {
  let out = html;
  for (const [key, file] of Object.entries(route)) {
    const re1 = new RegExp(`href="#"\\s+onclick="showPage\\('${key}'\\);return false"`, 'g');
    out = out.replace(re1, `href="${file}"`);
    const re2 = new RegExp(`onclick="showPage\\('${key}'\\);return false"`, 'g');
    out = out.replace(re2, `href="${file}"`);
    const re3 = new RegExp(`onclick="showPage\\('${key}'\\)"`, 'g');
    out = out.replace(re3, `onclick="location.href='${file}'"`);
  }
  out = out.replace(/href="#" onclick="showPage\('home'\);return false"/g, 'href="index.html"');
  return out;
}

for (const f of fs.readdirSync(pagesDir)) {
  if (!f.endsWith('.html')) continue;
  const p = path.join(pagesDir, f);
  let html = fs.readFileSync(p, 'utf8');
  html = fixShowPage(stripI18n(html));
  fs.writeFileSync(p, html);
  console.log('cleaned', f);
}
