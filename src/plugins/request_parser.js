'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function(fastify, opts) {
  fastify.decorate('parseRequest', req => {
    const now = new Date()
    return {
      url: req.url.replace('/request', ''),
      body: JSON.stringify(req.body, null, 2),
      headers: req.headers,
      method: req.method,
      params: req.params,
      query: req.query,
      timestamp: `${now.getFullYear()}-${now.getMonth() +
        1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
    }
  })
})
