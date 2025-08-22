import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'VoidTales — Portal',
      meta: [
        { name: 'description', content: 'VoidTales — a station between the worlds. Portal hub.' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:type', content: 'website' },

        { name: 'theme-color', content: '#0a0519' },
        { property: 'og:site_name', content: 'VoidTales' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'VoidTales — Portal' },
        { name: 'twitter:description', content: 'VoidTales — a station between the worlds. Portal hub.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600;700&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    viewer: false
  },

  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'X-Content-Type-Options': 'nosniff'
        }
      },
    }
  },
  compatibilityDate: '2025-08-22',
  runtimeConfig: {
    public: {
      portalTargets: {
        forum: 'https://forum.voidtales.win',
        blog: 'https://blog.voidtales.win',
        wiki: 'https://wiki.voidtales.win',
        discord: 'https://discord.voidtales.win'
      }
    }
  }
})
