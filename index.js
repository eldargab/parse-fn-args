module.exports = function parseFnArgs(fn) {
  var src = fn.toString()

  // remove comments
  src = src.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, '')

  var bi = src.indexOf('(')
  var ai = src.indexOf('=>')

  var args = ai > 0 && (ai < bi || bi < 0)
    ? src.slice(0, ai)
    : src.slice(bi + 1, src.indexOf(')'))

  args = args.replace(/\s+/g, '')

  return args ? args.split(',') : []
}
