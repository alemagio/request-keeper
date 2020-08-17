const { test } = require('tap')
const { JSDOM } = require('jsdom')
const { buildRequestRow } = require('../../../public/js/requestRowBuilder')

test('should build a table row for request', t => {
  t.plan(4)

  const document = new JSDOM('<!DOCTYPE html><table><tbody></tbody></table>').window.document

  const req = {
    url: '/foo/bar',
    method: 'POST',
    body: '{"answer": 42}',
    timestamp: 1
  }

  buildRequestRow(document)(req)

  const tbody = document.querySelector('tbody')

  t.equal(tbody.querySelector('td:nth-child(1)').textContent, '/foo/bar')
  t.equal(tbody.querySelector('td:nth-child(2)').textContent, 'POST')
  t.equal(tbody.querySelector('td:nth-child(3) code').textContent, '{"answer": 42}')
  t.equal(tbody.querySelector('td:nth-child(4)').textContent, '1')
})
