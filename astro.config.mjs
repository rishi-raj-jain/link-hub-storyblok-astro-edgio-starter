import * as dotenv from 'dotenv'
import node from '@astrojs/node'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import basicSsl from '@vitejs/plugin-basic-ssl'

dotenv.config()

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind(),
    storyblok({
      accessToken: process.env.STORYBLOK,
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
