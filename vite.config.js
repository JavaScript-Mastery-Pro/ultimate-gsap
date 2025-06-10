import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "01_your-first-animation": resolve(
          __dirname,
          "pages/01_your-first-animation/index.html"
        ),
        "01_challenge": resolve(__dirname, "pages/01_challenge/index.html"),
        "02_learn-to": resolve(__dirname, "pages/02_learn-to/index.html"),
        "02_challenge": resolve(__dirname, "pages/02_challenge/index.html"),
        "03_learn-from": resolve(__dirname, "pages/03_learn-from/index.html"),
        "03_challenge": resolve(__dirname, "pages/03_challenge/index.html"),
        "04_learn-fromto": resolve(
          __dirname,
          "pages/04_learn-fromto/index.html"
        ),
        "04_challenge": resolve(__dirname, "pages/04_challenge/index.html"),
      },
    },
  },
});
