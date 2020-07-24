'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('default root route', async t => {
  const app = build(t)

  const res = await app.inject({
    url: '/request/hello'
  })

  const now = new Date()
  t.deepEqual(JSON.parse(res.payload), {
    url: '/hello',
    body: '{\n  "foo": "bar"\n}',
    headers: { answer: 42 },
    method: 'POST',
    params: { fizz: 'buzz' },
    query: null,
    timestamp: `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
  })
})
