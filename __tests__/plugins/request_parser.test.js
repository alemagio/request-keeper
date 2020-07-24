'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const parser = require('../../src/plugins/request_parser')

test('support works standalone', async t => {
  const fastify = Fastify()
  fastify.register(parser)

  const now = new Date()
  const req = {
    url: '/request/foo',
    body: { foo: 'bar' },
    headers: { answer: 42 },
    method: 'POST',
    params: { fizz: 'buzz' },
    query: null,
    timestamp: `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
  }
  await fastify.ready()
  t.deepEqual(fastify.parseRequest(req), {
    url: '/foo',
    body: '{\n  "foo": "bar"\n}',
    headers: { answer: 42 },
    method: 'POST',
    params: { fizz: 'buzz' },
    query: null,
    timestamp: `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
  })
})
