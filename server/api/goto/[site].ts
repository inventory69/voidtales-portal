import { defineEventHandler, sendRedirect } from 'h3'
import { useRuntimeConfig, createError } from '#imports'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const mapping = config.public.portalTargets as Record<string, string>

  const site = String(event.context.params?.site ?? '')
  if (!Object.prototype.hasOwnProperty.call(mapping, site)) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown portal' })
  }

  const target = mapping[site]
  return sendRedirect(event, target, 302)
})
