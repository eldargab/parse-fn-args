module.exports = function parseFnArgs(fn) {
  var src = fn.toString()

  // remove comments
  src = src.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, '')

  var bi = src.indexOf('(')

  var args = bi >= 0
    ? src.slice(bi + 1, src.indexOf(')'))
    : src.slice(0, src.indexOf('=>'))

  args = args.replace(/\s+/g, '')

  return args ? args.split(',') : []
}
