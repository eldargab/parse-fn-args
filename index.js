module.exports = function (fn) {
  var src = typeof fn == 'string' ? fn : fn.toString()
  src = src.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, '') // remove comments

  var args = src
    .slice(src.indexOf('(') + 1, src.indexOf(')'))
    .split(',')

  var ret = []

  for (var i = 0; i < args.length; i++) {
    var arg = args[i].replace(/\s+/g, '')
    if (arg) ret.push(arg)
  }

  return ret
}
