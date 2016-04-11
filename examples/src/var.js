'use strict'

// how works hoisting with var

console.log(x)
if (true) {
  var x = 1
}
console.log(x)

for (var i = 0; i < 5; i++) {}
console.log(i)
