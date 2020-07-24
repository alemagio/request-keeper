'use strict'

const fp = require('fastify-plugin')

function formatTimestamp(date) {
  return `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}

module.exports = fp(async function(fastify, opts) {
  fastify.decorate('parseRequest', function(req) {
    const now = new Date()
    return {
      url: req.url.replace('/request', ''),
      body: JSON.stringify(req.body, null, 2),
      headers: req.headers,
      method: req.method,
      params: req.params,
      query: req.query,
      timestamp: formatTimestamp(now)
    }
  })
})
