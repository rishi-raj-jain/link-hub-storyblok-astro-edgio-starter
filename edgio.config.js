// This file was automatically added by edgio init.
// You should commit this file to source control.

const { join } = require('path')

module.exports = {
  connector: '@edgio/astro',
  astro: {
    appPath: join(process.cwd(), 'dist', 'server', 'entry.mjs'),
  },
}
