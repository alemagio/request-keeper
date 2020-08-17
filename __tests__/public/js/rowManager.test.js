const { test } = require('tap')
const { expand, compress } = require('../../../public/js/rowManager')

test('test row expand', t => {
  t.plan(4)

  const toBeShown = {
    classList: {
      add() {
        t.fail()
      },
      remove(className) {
        t.true(className === 'pm-is-hidden')
      }
    }
  }
  const toBeHidden = {
    classList: {
      remove() {
        t.fail()
      },
      add(className) {
        t.true(className === 'pm-is-hidden')
      }
    }
  }
  const containerMock = {
    classList: {
      remove(className) {
        t.same(className, 'td-expandable')
      }
    }
  }

  const elMock = {
    querySelector(selector) {
      switch (selector) {
        case '[data-expanded]':
          return toBeShown
        case '[data-expandable]':
          return toBeHidden
        case '[data-expandable-container]':
          return containerMock
        default:
          return t.fail()
      }
    }
  }

  expand.apply(elMock)

  t.same(elMock.onclick, compress)
})

test('test row compress', t => {
  t.plan(4)

  const toBeShown = {
    classList: {
      add() {
        t.fail()
      },
      remove(className) {
        t.true(className === 'pm-is-hidden')
      }
    }
  }
  const toBeHidden = {
    classList: {
      remove() {
        t.fail()
      },
      add(className) {
        t.true(className === 'pm-is-hidden')
      }
    }
  }
  const containerMock = {
    classList: {
      add(className) {
        t.same(className, 'td-expandable')
      }
    }
  }

  const elMock = {
    querySelector(selector) {
      switch (selector) {
        case '[data-expanded]':
          return toBeHidden
        case '[data-expandable]':
          return toBeShown
        case '[data-expandable-container]':
          return containerMock
        default:
          return t.fail()
      }
    }
  }

  compress.apply(elMock)

  t.same(elMock.onclick, expand)
})
