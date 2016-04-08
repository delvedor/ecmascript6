'use strict'

function foo (x, y, z) {
  console.log(x, y, z)
}

let arr = ['Javascript', 'is', 'good']

// no comment..
foo(arr[0], arr[1], arr[2])
// es5 style
foo.apply(null, arr)
// es6 style!
foo(...arr)
