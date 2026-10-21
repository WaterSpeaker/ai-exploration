// @ts-check
import { defineConfig } from 'astro/config';

const internal = process.env.PUBLIC_SITE_AUDIENCE === 'internal';

// External ships on GitHub Pages under /ai-exploration.
// Internal ships at the root of the Goofy preview host.
export default defineConfig({
  output: 'static',
  site: internal
    ? 'https://ai-exploration.gf-preview.bytedance.net'
    : 'https://waterspeaker.github.io',
  base: internal ? '/' : '/ai-exploration',
});
