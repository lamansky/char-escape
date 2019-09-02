'use strict'

const assert = require('assert')
const charEscape = require('.')

describe('charEscape()', function () {
  it('should add the default backslash before any specified character', function () {
    assert.strictEqual(charEscape('{}[]')('[This is] a {test}'), '\\[This is\\] a \\{test\\}')
  })

  it('should double-escape the default backslash escape character', function () {
    assert.strictEqual(charEscape("'")("This is \\a 'test'"), "This is \\\\a \\'test\\'")
  })

  it('should support a custom escape character', function () {
    assert.strictEqual(charEscape('{}[]', '@')('[This is] a {test}'), '@[This is@] a @{test@}')
  })

  it('should double-escape a custom escape character', function () {
    assert.strictEqual(charEscape("'", '@')("This is @a 'test'"), "This is @@a @'test@'")
  })

  it('should support a custom escape string', function () {
    assert.strictEqual(charEscape('{}[]', 'ESC')('[This is] a {test}'), 'ESC[This isESC] a ESC{testESC}')
  })

  it('should double-escape a custom escape string', function () {
    assert.strictEqual(charEscape("'", 'a ')("This is a 'test'"), "This is a a a 'testa '")
  })
})
