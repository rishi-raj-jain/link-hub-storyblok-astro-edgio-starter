// This file was automatically added by edgio init.
// You should commit this file to source control.

const { join } = require('path')
const { existsSync } = require('fs')

let includeFiles = {}

const depPath = join(process.cwd(), 'deps.json')

if (existsSync(depPath)) {
  includeFiles = require(depPath)
}

module.exports = {
  includeFiles,
  connector: '@edgio/astro',
  routes: './edgio/routes.js',
  astro: {
    appPath: join(process.cwd(), 'dist', 'server', 'entry.mjs'),
  },
}
