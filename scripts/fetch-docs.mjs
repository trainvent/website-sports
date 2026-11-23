// Copies the Sports guides into content/docs before dev and build.
// Default: the released guides from the public releases repo, so the site matches what users install.
// Set SPORTS_DOCS_DIR to the plugin repo's docs/ folder to preview unreleased guides locally.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const RELEASES = 'https://raw.githubusercontent.com/trainvent/obsidian-sports-plugin-releases/main';
const GUIDES = {
 en: { 'using-sports': 'Using-Sports.md', workbook: 'Workbook.md', tracking: 'Tracking.md', troubleshooting: 'Troubleshooting.md' },
 de: { 'using-sports': 'Sports-verwenden.md', workbook: 'Arbeitsmappe.md', tracking: 'Erfassung.md', troubleshooting: 'Fehlerbehebung.md' },
};
const local = process.env.SPORTS_DOCS_DIR;

async function read(lang, file) {
 if (local) return readFile(join(local, lang === 'en' ? 'guides_en' : 'guides_de', file), 'utf8');
 const url = `${RELEASES}/${lang === 'en' ? '' : 'de/'}${file}`;
 const response = await fetch(url);
 if (!response.ok) throw new Error(`Could not fetch ${url}: ${response.status}`);
 return response.text();
}

for (const [lang, guides] of Object.entries(GUIDES)) {
 await mkdir(join('content', 'docs', lang), { recursive: true });
 for (const [slug, file] of Object.entries(guides)) await writeFile(join('content', 'docs', lang, `${slug}.md`), await read(lang, file));
}
console.log(`Docs copied from ${local ?? RELEASES}`);
