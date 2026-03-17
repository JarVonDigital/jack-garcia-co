import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const datasetPath = path.resolve('Services', 'dataset_instagram-scraper_2026-03-17_23-20-07-130.json');
const outputDir = path.resolve('public', 'instagram');

function toFileName(key) {
  return `${key.replace(/[^a-zA-Z0-9_-]/g, '-')}.jpg`;
}

async function download(url, outputFile) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${outputFile}: ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(outputDir, outputFile), bytes);
  console.log(`Saved ${outputFile}`);
}

async function main() {
  const raw = await readFile(datasetPath, 'utf8');
  const [profile] = JSON.parse(raw);
  const latestPosts = Array.isArray(profile?.latestPosts) ? profile.latestPosts : [];

  const downloads = new Map();

  if (profile?.profilePicUrlHD && profile?.id) {
    downloads.set(`profile-${profile.id}`, {
      url: profile.profilePicUrlHD,
      file: toFileName(`profile-${profile.id}`)
    });
  }

  for (const post of latestPosts) {
    const postKey = post?.shortCode || post?.id;

    if (post?.displayUrl && postKey) {
      downloads.set(postKey, {
        url: post.displayUrl,
        file: toFileName(postKey)
      });
    }

    for (const child of post?.childPosts || []) {
      const childKey = child?.shortCode || child?.id;

      if (child?.displayUrl && childKey) {
        downloads.set(childKey, {
          url: child.displayUrl,
          file: toFileName(childKey)
        });
      }
    }
  }

  await mkdir(outputDir, { recursive: true });

  for (const entry of downloads.values()) {
    await download(entry.url, entry.file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
