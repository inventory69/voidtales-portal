import { defineEventHandler } from 'h3'
import { useRuntimeConfig, createError } from '#imports'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const mapping = config.public.portalTargets as Record<string, string>

  const site = String(event.context.params?.site ?? '')
  if (!Object.prototype.hasOwnProperty.call(mapping, site)) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown portal' })
  }

  const target = mapping[site]
  const title = site.charAt(0).toUpperCase() + site.slice(1)
  return { site, title, target }
})
