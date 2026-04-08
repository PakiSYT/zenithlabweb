import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error('no <style> block');
fs.mkdirSync(path.join(root, 'src/styles'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/styles/main.css'), styleMatch[1].trim() + '\n');

const markers = [
  ['home', '<!-- ============ HOME PAGE ============ -->', '<!-- /home page -->'],
  ['about', '<!-- ============ ABOUT PAGE ============ -->', '<!-- ============ SERVICES PAGE ============ -->'],
  ['services', '<!-- ============ SERVICES PAGE ============ -->', '<!-- /services page -->'],
  ['print3d', '<!-- ============ PRINT 3D PAGE ============ -->', '<!-- /print3d page -->'],
  ['archmodels', '<!-- ============ ARCHITECTURAL MODELS PAGE ============ -->', '<!-- /archmodels page -->'],
  ['led', '<!-- ============ LED LIGHTBOXES PAGE ============ -->', '<!-- /led page -->'],
  ['engraving', '<!-- ============ ENGRAVING PAGE ============ -->', '<!-- /engraving page -->'],
  ['prototypes', '<!-- ============ PRODUCT PROTOTYPES PAGE ============ -->', '<!-- /prototypes page -->'],
  ['gadgets', '<!-- ============ PROMO GADGETS PAGE ============ -->', '<!-- /gadgets page -->'],
  ['portfolio', '<!-- ============ PORTFOLIO PAGE ============ -->', '<!-- /portfolio -->'],
  ['pricing', '<!-- ============ PRICING PAGE ============ -->', '<!-- /pricing -->'],
  ['contact', '<!-- ============ CONTACT PAGE ============ -->', '<!-- /contact -->'],
  ['blog', '<!-- ============ BLOG PAGE ============ -->', '<!-- /blog -->'],
  ['404', '<!-- ============ 404 PAGE ============ -->', '<!-- /404 -->'],
];

const pagesDir = path.join(root, 'src/pages');
fs.mkdirSync(pagesDir, { recursive: true });

for (const [name, start, end] of markers) {
  const i0 = html.indexOf(start);
  const i1 = html.indexOf(end);
  if (i0 === -1 || i1 === -1) throw new Error(`marker missing: ${name}`);
  let chunk = html.slice(i0 + start.length, i1).trim();
  chunk = chunk.replace(/\bclass="page active"/g, 'class="page"');
  fs.writeFileSync(path.join(pagesDir, `${name}.html`), chunk + '\n');
  console.log('wrote', name, chunk.length);
}

const footerStart = '<!-- FOOTER -->';
const footerEnd = '</footer>';
const fi = html.indexOf(footerStart);
const fj = html.indexOf(footerEnd, fi);
if (fi === -1 || fj === -1) throw new Error('footer markers');
let footer = html.slice(fi, fj + footerEnd.length);
fs.mkdirSync(path.join(root, 'src/partials'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/partials/footer.html'), footer.replace(/^<!-- FOOTER -->\s*/i, '') + '\n');

const topEnd = '<!-- ============ HOME PAGE ============ -->';
const ti = html.indexOf(topEnd);
if (ti === -1) throw new Error('home start');
let top = html.slice(html.indexOf('<body>') + '<body>'.length, ti).trim();
fs.writeFileSync(path.join(root, 'src/partials/shell-top.html'), top + '\n');

console.log('done');
