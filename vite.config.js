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
        "01a_your-first-animation": resolve(
          __dirname,
          "pages/01a_your-first-animation/index.html"
        ),
        "01b_challenge": resolve(__dirname, "pages/01b_challenge/index.html"),
        "02a_learn-to": resolve(__dirname, "pages/02a_learn-to/index.html"),
        "02b_challenge": resolve(__dirname, "pages/02b_challenge/index.html"),
        "03a_learn-from": resolve(__dirname, "pages/03a_learn-from/index.html"),
        "03b_challenge": resolve(__dirname, "pages/03b_challenge/index.html"),
        "04a_learn-fromto": resolve(
          __dirname,
          "pages/04a_learn-fromto/index.html"
        ),
        "04b_challenge": resolve(__dirname, "pages/04b_challenge/index.html"),
        "05a_learn-timeline": resolve(
          __dirname,
          "pages/05a_learn-timeline/index.html"
        ),
        "07a_sine-easing": resolve(
          __dirname,
          "pages/07a_sine-easing/index.html"
        ),
        "08a_back-easing": resolve(
          __dirname,
          "pages/08a_back-easing/index.html"
        ),
        "09a_elastic-easing": resolve(
          __dirname,
          "pages/09a_elastic-easing/index.html"
        ),
        "10a_expo-easing": resolve(
          __dirname,
          "pages/10a_expo-easing/index.html"
        ),
      },
    },
  },
});
