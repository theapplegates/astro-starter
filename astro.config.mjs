import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";


// https://astro.build/config
export default defineConfig({
  experimental: { integrations: true },
  integrations: [
    astroImageTools,
    preact(),
    tailwind()]
});