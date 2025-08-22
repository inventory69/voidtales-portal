import { defineEventHandler, sendRedirect } from 'h3'
import { useRuntimeConfig, createError } from '#imports'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const mapping = config.public.portalTargets as Record<string, string>

  const site = String(event.context.params?.site ?? '')
  const target = mapping[site]
  if (target === undefined) {
    throw createError({ statusCode: 404, statusMessage: 'Unknown portal' })
  }
  return sendRedirect(event, target, 302)
})