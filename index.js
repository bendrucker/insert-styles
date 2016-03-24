'use strict'

var cache = {}

module.exports = !global.document ? noop : function insertStyles (styles, options) {
  var id = options && options.id || styles

  var element = cache[id] = (cache[id] || document.createElement('style'))
  element.setAttribute('type', 'text/css')

  if ('textContent' in element) {
    element.textContent = styles
  } else {
    element.styleSheet.cssText = styles
  }

  if (!element.parentNode) {
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(element)
  }
}

function noop () {}
