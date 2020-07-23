'use strict'

module.exports = async function(fastify, opts) {
  const requests = []

  fastify.get('/list', async function(req, reply) {
    reply.view('index.art', { requests })
  })

  fastify.route({
    method: ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT', 'OPTIONS'],
    url: '/request/*',
    handler: async function(req, reply) {
      const request = fastify.parseRequest(req)
      fastify.io.emit('request-received', request)
      requests.push(request)
      reply.send(request)
    }
  })
}
