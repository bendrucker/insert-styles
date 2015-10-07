'use strict'

var cache = {}

module.exports = !global.document ? noop : function insertStyles (styles) {
  if (cache[styles]) return
  cache[styles] = true

  var element = document.createElement('style')
  element.setAttribute('type', 'text/css')

  if ('textContent' in element) {
    element.textContent = styles
  } else {
    element.styleSheet.cssText = styles
  }

  var head = document.getElementsByTagName('head')[0]
  head.appendChild(element)
}

function noop () {}
