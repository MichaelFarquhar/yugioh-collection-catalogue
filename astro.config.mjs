import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import AstroPWA from '@vite-pwa/astro'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    AstroPWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: "Michael's Yugioh Decks",
        description: "Michael's Yugioh Decks",
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
