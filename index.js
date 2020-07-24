'use strict'

const fastify = require('fastify')({
  logger: true
})
const app = require('./src/app')

fastify.register(app)

fastify.listen(3000)
