'use strict'

const fp = require('fastify-plugin')
const path = require('path')

module.exports = fp(async function(fastify, opts) {
  fastify.register(require('point-of-view'), {
    engine: {
      'art-template': require('art-template')
    },
    root: path.join(__dirname, '..', 'view')
  })
})
