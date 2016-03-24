'use strict'

var test = require('tape')
var insertStyles = require('../')

test('node', function (t) {
  t.test('insertStyles is a noop', function (t) {
    insertStyles('h1 { width: 100% }')
    t.pass('no document, noop')
    t.end()
  })
})
