'use strict'

var test = require('tape')
var document = require('global/document')
var insertStyles = require('../')

test('browser', function (t) {
  t.test('styles inserted', function (t) {
    insertStyles('h1 { width: 100% }')

    var style = document.getElementsByTagName('style')[0]
    t.equal(style.innerText, 'h1 { width: 100% }')

    cleanupStyles()
    t.end()
  })

  t.test('same id mutates same style tag', function (t) {
    insertStyles('.foo {color: red}', {id: 123})

    var style = document.getElementsByTagName('style')[0]
    t.equal(style.innerText, '.foo {color: red}')

    insertStyles('.foo {color: blue}', {id: 123})

    t.equal(style.innerText, '.foo {color: blue}')

    cleanupStyles()
    t.end()
  })

  t.test('different id mutates different style tag', function (t) {
    insertStyles('.foo {}', {id: 1})
    insertStyles('.bar {}', {id: 2})

    const styles = document.getElementsByTagName('style')

    t.equal(styles[0].innerText, '.foo {}')
    t.equal(styles[1].innerText, '.bar {}')

    cleanupStyles()
    t.end()
  })

  t.test('picks up existing style tag', function (t) {
    var style = document.createElement('style')
    style.setAttribute('id', 'hello')
    document.head.appendChild(style)

    insertStyles('.hello {content: "world"}', {id: 'hello'})

    t.equal(style.innerText, '.hello {content: "world"}')
    t.end()
  })
})

function cleanupStyles () {
  var styles = document.documentElement.getElementsByTagName('style')
  Array.prototype.forEach.call(styles, function (style) {
    style.remove()
  })
}
