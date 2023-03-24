import { internalIpV4Sync } from 'internal-ip'

export default defineNuxtConfig({
  ssr: false,

  typescript: { shim: false },

  devServer: {
    host: '0.0.0.0',
    port: 5173,
  },

  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: internalIpV4Sync(),
        port: 5183,
      },
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
      target: ['es2021', 'chrome100', 'safari13'],
      minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
      sourcemap: !!process.env.TAURI_DEBUG,
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  sourcemap: false,
})
