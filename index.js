'use strict'

const deduplicate = require('deduplicate')
const longestFirst = require('longest-first')
const regexEscape = require('escape-string-regexp')
const toStr = require('2/string')

module.exports = function charEscape (chars, escapeChar = '\\') {
  if (typeof chars === 'string') {
    chars = Array.from(chars)
  } else if (Array.isArray(chars)) {
    if (chars.some(char => typeof char !== 'string')) throw new Error('chars must be strings')
  } else {
    throw new TypeError('chars list must be an array or string')
  }
  if (typeof escapeChar !== 'string') throw new TypeError('Escape character must be a string')
  chars = longestFirst(deduplicate([...chars, escapeChar]))

  const esc = char => escapeChar + char
  const regex = new RegExp('(' + chars.map(char => regexEscape(char)).join('|') + ')', 'g')
  return str => toStr(str, {elseThrow: 'Cannot escape characters in a non-string'}).replace(regex, esc)
}
