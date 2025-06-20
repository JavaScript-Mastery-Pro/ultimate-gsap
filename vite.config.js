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
        "02a_understanding-properties": resolve(
          __dirname,
          "pages/02a_understanding-properties/index.html"
        ),
        "02b_understanding-methods": resolve(
          __dirname,
          "pages/02b_understanding-methods/index.html"
        ),
        "03a_power-easing": resolve(
          __dirname,
          "pages/03a_power-easing/index.html"
        ),
        "04a_sine-easing": resolve(
          __dirname,
          "pages/04a_sine-easing/index.html"
        ),
        "05a_back-easing": resolve(
          __dirname,
          "pages/05a_back-easing/index.html"
        ),
        "06a_bounce-easing": resolve(
          __dirname,
          "pages/06a_bounce-easing/index.html"
        ),
        "07a_elastic-easing": resolve(
          __dirname,
          "pages/07a_elastic-easing/index.html"
        ),
        "08a_expo-easing": resolve(
          __dirname,
          "pages/08a_expo-easing/index.html"
        ),
        "09a_apple-dock": resolve(__dirname, "pages/09a_apple-dock/index.html"),
        "10a_learn-to": resolve(__dirname, "pages/10a_learn-to/index.html"),
        "10b_challenge-to": resolve(
          __dirname,
          "pages/10b_challenge-to/index.html"
        ),
        "11a_learn-from": resolve(__dirname, "pages/11a_learn-from/index.html"),
        "11b_challenge-from": resolve(
          __dirname,
          "pages/11b_challenge-from/index.html"
        ),
        "12a_learn-fromto": resolve(
          __dirname,
          "pages/12a_learn-fromto/index.html"
        ),
        "12b_challenge-fromto": resolve(
          __dirname,
          "pages/12b_challenge-fromto/index.html"
        ),
        "13a_learn-set": resolve(__dirname, "pages/13a_learn-set/index.html"),
        "13b_challenge-set": resolve(
          __dirname,
          "pages/13b_challenge-set/index.html"
        ),
        "14a_learn-timeline": resolve(
          __dirname,
          "pages/14a_learn-timeline/index.html"
        ),
      },
    },
  },
});
