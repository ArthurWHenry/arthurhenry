import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
  ],
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
