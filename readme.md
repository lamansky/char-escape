# char-escape

Finds all instances of given characters in a string and inserts an escape sequence before each one.

## Installation

Requires [Node.js](https://nodejs.org/) 8 or above.

```bash
npm i char-escape
```

## API

The module exports a single function.

### Parameters

1. `chars` (string or array of strings): The characters that should be escaped. This can either be a string of characters, or an array of characters/strings.
2. Optional: `escapeChar` (string): The character/string that should be placed before every character/string in `chars` and before all instances of `escapeChar` that are already in the string. Defaults to `\`.

### Return Value

Returns a function which accepts a single parameter: a string to which the escape procedure should be applied.

## Example

```javascript
const charEscape = require('char-escape')

// Escape characters listed in a string
charEscape('{}[]')('[This is] a {test}') // \[This is\] a \{test\}

// Escape strings listed in an array
charEscape(['is', 'a'])('This is a test') // This \is \a test

// Custom escape character
charEscape('{}[]', '@')('[This is] a {test}') // @[This is@] a @{test@}
```

## Related

* [char-unescape](https://github.com/lamansky/char-unescape)
