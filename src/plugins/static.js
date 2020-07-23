'use strict'

const fp = require('fastify-plugin')
const path = require('path')
const fastifyStatic = require('fastify-static')

module.exports = fp(async function(fastify, opts) {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', '..', 'node_modules'),
    prefix: '/node_modules/'
  })

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'view', 'js'),
    prefix: '/js/',
    decorateReply: false // the reply decorator has been added by the first plugin registration
  })
})
