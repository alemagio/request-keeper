'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('request route', async t => {
  const app = build(t)

  const res = await app.inject({
    url: '/request/foo',
    body: { root: true },
    method: 'POST'
  })

  t.match(JSON.parse(res.body), {
    body: '{\n  "root": true\n}',
    url: '/foo',
    method: 'POST'
  })
})

test('list route', async t => {
  // TODO
})
