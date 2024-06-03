export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  devServer: { host: "0.0.0.0", port: 3000 },

  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      hmr: {
        protocol: "ws",
        host: "0.0.0.0",
        port: 5183,
      },
    },
    envPrefix: ["VITE_", "TAURI_"],
  },

  nitro: { output: { publicDir: "dist" } },

  modules: [
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },

  tailwindcss: { viewer: false },
})
