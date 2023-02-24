import * as dotenv from 'dotenv'
import node from '@astrojs/node'
import image from '@astrojs/image'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

dotenv.config()

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
      accessToken: process.env.STORYBLOK,
    }),
  ],
})
