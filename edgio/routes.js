// This file was automatically added by edgio init.
// You should commit this file to source control.

import { Router } from '@edgio/core'
import { cacheConfig } from './cache'
import { astroRoutes } from '@edgio/astro'
import { transformResponse } from './transformResponse'

const router = new Router()

// Home page
router.match('/', ({ cache, removeUpstreamResponseHeader, renderWithApp }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(cacheConfig(60 * 60, true))
  renderWithApp({ transformResponse })
})

// Astro's on the fly image path
router.match('/_image', ({ cache, removeUpstreamResponseHeader, renderWithApp }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(cacheConfig(60 * 60 * 24 * 365))
  renderWithApp()
})

// User path(s)
router.match('/me/:path', ({ cache, removeUpstreamResponseHeader, renderWithApp }) => {
  removeUpstreamResponseHeader('cache-control')
  cache(cacheConfig(1, true))
  renderWithApp({ transformResponse })
})

router.use(astroRoutes)

export default router
