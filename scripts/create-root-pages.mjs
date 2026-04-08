import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const shell = (dataZenithPage) => `<!DOCTYPE html>
<html lang="pl" data-zenith-page="${dataZenithPage}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zenith Lab</title>
<link rel="icon" type="image/png" href="img/sygnet.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/src/styles/main.css">
</head>
<body>
<script type="module" src="/src/app.ts"></script>
</body>
</html>
`;

const proper = [
  ['index.html', 'home'],
  ['about.html', 'about'],
  ['services.html', 'services'],
  ['print3d.html', 'print3d'],
  ['archmodels.html', 'archmodels'],
  ['led.html', 'led'],
  ['engraving.html', 'engraving'],
  ['prototypes.html', 'prototypes'],
  ['gadgets.html', 'gadgets'],
  ['portfolio.html', 'portfolio'],
  ['pricing.html', 'pricing'],
  ['contact.html', 'contact'],
  ['blog.html', 'blog'],
  ['404.html', 'not-found'],
];

for (const [fname, page] of proper) {
  fs.writeFileSync(path.join(root, fname), shell(page));
}
console.log('wrote', proper.length, 'root html files');
