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
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600;700&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  components: true,
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    viewer: false
  },

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
