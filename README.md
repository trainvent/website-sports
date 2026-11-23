# sports.trainvent.com

Homepage, docs and privacy policy for the Sports Obsidian plugin, in English (`/`) and German (`/de/`).
Google's OAuth verification for the Google Health connection links to both pages.

```bash
npm install
npm run dev     # local preview
npm run build   # static export to out/
```

Pushing to the default branch deploys `out/` to GitHub Pages; `public/CNAME` sets the custom domain.
All page text lives in `lib/content.ts`.

The docs pages (`/docs/`, `/de/docs/`) show the plugin's guides. `npm run dev` and `npm run build`
first copy them into `content/docs/` from the public releases repo, so the site matches the
released plugin. To preview unreleased guides, point `SPORTS_DOCS_DIR` at the plugin repo's `docs/`:

```bash
SPORTS_DOCS_DIR=../obsidian-sports-plugin/docs npm run dev
```
