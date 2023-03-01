// This file was automatically added by edgio init.
// You should commit this file to source control.

import { Router } from '@edgio/core'
import { astroRoutes } from '@edgio/astro'

const router = new Router()

// User path(s)
router.match('/me/:path', ({ cache, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache({
    edge: {
      maxAgeSeconds: 1,
      staleWhileRevalidateSeconds: 60 * 60 * 24 * 365,
    },
    browser: false,
  })
})

router.use(astroRoutes)

export default router
