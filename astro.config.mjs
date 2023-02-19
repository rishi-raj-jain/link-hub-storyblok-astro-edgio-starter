import node from '@astrojs/node'
import image from '@astrojs/image'
import { GET_ENV } from './lib/env'
import tailwind from '@astrojs/tailwind'
import storyblok from '@storyblok/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    storyblok({
      accessToken: GET_ENV('STORYBLOK'),
    }),
  ],
})
