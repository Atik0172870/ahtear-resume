// GitHub Pages has no server-side rewrites, so a direct visit or refresh on a
// deep route (e.g. /ahtear-resume/resume) 404s unless a 404.html exists.
// GitHub Pages serves that file's contents for any unmatched path while keeping
// the original URL, so copying the built index.html there lets BrowserRouter
// pick up the real path client-side and render the right page.
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'));
console.log('Copied dist/index.html -> dist/404.html for GitHub Pages SPA fallback.');
