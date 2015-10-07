'use strict'

var test = require('tape')
var document = require('global/document')
var insertStyles = require('./')

test('browser: ' + Boolean(process.browser), function (t) {
  insertStyles('h1 { width: 100% }')
  if (document === global.document) {
    var style = document.getElementsByTagName('style')[0]
    t.equal(style.innerText, 'h1 { width: 100% }')
  } else {
    t.pass('no document, noop')
  }
  t.end()
})
