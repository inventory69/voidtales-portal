// types/nuxt.d.ts
import 'nuxt/schema'

declare module 'nuxt/schema' {
  interface NuxtConfig {
    // Erlaube hier die tailwindcss-Optionen (und ggf. weitere module-spezifische Optionen)
    tailwindcss?: Record<string, any>
  }
}