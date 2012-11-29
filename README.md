parse-fn-args
=============

Parses function arguments.

##Usage

``` javascript
var parse = require('parse-fn-args')

function fn (a, b, c) {}

var args = parse(fn) // -> ['a', 'b', 'c']
```
