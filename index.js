module.exports = function (fn) {
  var src = typeof fn == 'string' ? fn : fn.toString()

  src = src.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, '') // remove comments

  var m = /^function\s*\w*\s*\(([^\)]*)\)/.exec(src)
  return m
    ? m[1].split(',').map(trim).filter(nonEmpty)
    : []
}

function trim (s) {
  return s.trim()
}

function nonEmpty (s) {
  return !!s
}
