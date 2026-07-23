import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mcpc-2026-nchu.web.app",
  integrations: [tailwind()],
  output: "static",
});
