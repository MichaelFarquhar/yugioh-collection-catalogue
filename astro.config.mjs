import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import AstroPWA from '@vite-pwa/astro'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    AstroPWA({
      registerType: 'autoUpdate',
      workbox: {
        mode: 'development',
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: "Michael's Decks",
        description: "Michael's Decks",
        theme_color: '#f97316',
        background_color: '#1a1a1a',
        icons: [
          { src: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
