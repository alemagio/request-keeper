'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const art = require('art-template')
const path = require('path')

test('list route', async t => {
  const app = build(t)

  const res = await app.inject({
    url: '/list',
    method: 'GET'
  })

  const data = { requests: [] }
  const templatePath = path.join(__dirname, '..', '..', '..', 'src', 'view', 'index.art')

  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.headers['content-length'], '' + res.body.length)
  t.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
  t.strictEqual(art(templatePath, data), res.body.toString())
})

test('request route', async t => {
  const app = build(t)

  const now = new Date()

  const res = await app.inject({
    url: '/request/foo',
    body: { root: true },
    method: 'POST'
  })

  t.match(JSON.parse(res.body), {
    body: '{\n  "root": true\n}',
    url: '/foo',
    method: 'POST',
    timestamp: `${now.getFullYear()}-${now.getMonth() +
      1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
  })
})
