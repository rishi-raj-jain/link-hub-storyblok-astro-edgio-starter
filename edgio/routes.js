// This file was automatically added by edgio init.
// You should commit this file to source control.

import { Router } from '@edgio/core'
import { cacheConfig } from './cache'
import { astroRoutes } from '@edgio/astro'

const router = new Router()

// Astro's on the fly image path
router.match('/_image', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(cacheConfig(60 * 60 * 24 * 365))
})

// User path(s)
router.match('/me/:path', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(cacheConfig(1, true))
})

router.use(astroRoutes)

export default router
