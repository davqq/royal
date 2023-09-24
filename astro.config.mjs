import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://royal-unternehmensgruppe.de/",
  integrations: [tailwind()],
  output: "static",
  compressHTML: true,
  trailingSlash: "never",
});