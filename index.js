module.exports = function (fn) {
  var src = typeof fn == 'string' ? fn : fn.toString()
  src = src.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, '') // remove comments

  src = src
    .slice(src.indexOf('(') + 1, src.indexOf(')'))
    .replace(/\s+/g, '')

  return src ? src.split(',') : []
}
