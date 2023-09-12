import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/tailwind';

export default defineConfig({
  // ...
  site: "https://ceoldevs.github.io",
  base: "/",
  integrations: [
    tailwind(),
    sitemap(),
],
});