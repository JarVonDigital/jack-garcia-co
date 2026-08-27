import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const outputRoot = resolve('dist/jack-garcia-co/browser');
const expectedSuffix = join('dist', 'jack-garcia-co', 'browser');

if (!outputRoot.endsWith(expectedSuffix)) {
  throw new Error(`Refusing to prepare an unexpected output path: ${outputRoot}`);
}

const rootIndexPath = join(outputRoot, 'index.html');
const rootIndex = await readFile(rootIndexPath, 'utf8');
const routePages = [
  {
    path: 'about',
    title: 'About Jack Garcia | Florida Wedding Photographer',
    description:
      'Meet Jack Garcia, a Florida photographer creating natural, editorial images for weddings, couples, families, and milestones.',
  },
  {
    path: 'inquire',
    title: 'Inquire for Wedding Photography | Jack Garcia & Co.',
    description:
      'Inquire with Jack Garcia & Co. for Florida wedding, engagement, portrait, and milestone photography.',
  },
  {
    path: 'wedding-packages',
    title: 'Wedding Photography Packages in Florida | Jack Garcia & Co.',
    description:
      'Explore wedding photography collections from Jack Garcia & Co., including engagement sessions, second-photographer coverage, and high-resolution galleries.',
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMeta(html, attribute, name, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"[\\s\\S]*?\\/>`, 'i');
  return html.replace(pattern, `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`);
}

for (const route of routePages) {
  let routeIndex = rootIndex.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`,
  );
  routeIndex = replaceMeta(routeIndex, 'name', 'description', route.description);
  routeIndex = replaceMeta(routeIndex, 'property', 'og:title', route.title);
  routeIndex = replaceMeta(routeIndex, 'property', 'og:description', route.description);
  routeIndex = replaceMeta(routeIndex, 'name', 'twitter:title', route.title);
  routeIndex = replaceMeta(routeIndex, 'name', 'twitter:description', route.description);

  const routeDirectory = join(outputRoot, route.path);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(join(routeDirectory, 'index.html'), routeIndex);
}

await copyFile(rootIndexPath, join(outputRoot, '404.html'));

const instagramKeep = new Set([
  'DPgqnz2DZqB.jpg',
  'DT3DzShiL9l.jpg',
  'DU4Csankl9p.jpg',
  'DUWW5b-gG7g.jpg',
  'DV1Dph5jTum.jpg',
  'DV1F6RbDXin.jpg',
  'DV8077-jatl.jpg',
  'DVEXTFSgLUr.jpg',
  'DVZMEnhjXtp.jpg',
  'DVcqqfoDU_7.jpg',
  'DVjTQEZABUP.jpg',
  'DVq9DuSDU0q.jpg',
  'feed.json',
  'profile-61411303911.jpg',
]);

const instagramDirectory = join(outputRoot, 'instagram');
for (const file of await readdir(instagramDirectory)) {
  if (!instagramKeep.has(file)) await rm(join(instagramDirectory, file));
}

const imagesDirectory = join(outputRoot, 'images');
for (const file of await readdir(imagesDirectory)) {
  if (file.startsWith('jack-garcia-gallery-') && file.endsWith('.jpg')) {
    await rm(join(imagesDirectory, file));
  }
}

console.log(`Prepared ${routePages.length} static routes and pruned unused deployment assets.`);
