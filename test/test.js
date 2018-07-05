var should = require('should')
var parse = require('..')

describe('parse-fn-args', function () {
  it('Should support named functions', function () {
    parse(function hello (req, res, next) {})
      .should.eql(['req', 'res', 'next'])
  })


  it('Should support anonymous functions', function () {
    parse(function(hello, world){})
      .should.eql(['hello', 'world'])
  })


  it('Should return empty array if there is no args', function () {
    parse(function () {}).should.eql([])
  })


  it('Should support lambdas', function() {
    parse((a, b) => a + b).should.eql(['a', 'b'])
    parse(a => a).should.eql(['a'])
    parse(() => console.log(1)).should.eql([])
    parse(a => console.log(a)).should.eql(['a'])
  })


  it('Should ignore comments', function () {
    parse(function (
      a, //, c, d
      /* e, f, */
      b
    ) {}).should.eql(['a', 'b'])
  })


  it('Should not parse nested things', function () {
    parse(function () {
      function hello (a, b) {
      }
    }).should.eql([])
  })
})
